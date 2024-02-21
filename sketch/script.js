generateGrid(16);

//Default: 16 Max: 100
function generateGrid(number) {
  let container = document.querySelector('.container');
  container.innerHTML = '';

  let dimension = 100 / number;
 
  for (i = 0; i < number * number; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel'
    pixel.style.width = `${dimension}%`;
    pixel.style.height = `${dimension}%`;

    pixel.addEventListener('mouseover', () => {
      if (penMode) {
        pixel.style.backgroundColor = colorPick.value;
      }
      if (eraserMode) {
        pixel.style.backgroundColor = 'white';
      }
      if (rainbowMode) {
        pixel.style.backgroundColor = randomColor();
      }
    })

    document.querySelector('.container').appendChild(pixel)
  }
}

function clearGrid() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach((event)=> {
    event.style.backgroundColor = 'white';
  })
}

function randomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r} ${g} ${b})`;
}

let rainbowMode = false;
let penMode = true;
let eraserMode = false;
let colorPick = document.querySelector('#colorPicker');
let rainbow = document.querySelector('#rainbow');
let eraser = document.querySelector('#eraser');
let pen = document.querySelector('#pen');
let clear = document.querySelector('#clear');
let setGrid = document.querySelector('#setGrid');

clear.addEventListener('click', clearGrid);

rainbow.addEventListener('click', () => {
  rainbowMode = true;
  penMode = false;
  eraserMode = false;
})

eraser.addEventListener('click', () => {
  eraserMode = true;
  penMode = false;
  rainbowMode = false;
})

pen.addEventListener('click', () => {
  penMode = true;
  eraserMode = false;
  rainbowMode = false;
})

setGrid.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let intValue = parseInt(setGrid.value);
    if (Number.isNaN(intValue)) {
      alert('Please enter a valid number');
      setGrid.value = '';
      setGrid.focus();
    } else if(intValue > 100) {
      alert('Avoid exceeding the 100 limit.')
      setGrid.value = '';
      setGrid.focus();
    } else {
      generateGrid(intValue);
    }
  }
})


