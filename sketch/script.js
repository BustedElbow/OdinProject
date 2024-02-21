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

let penMode = true;
let eraserMode = false;
let colorPick = document.querySelector('#colorPicker');
let eraser = document.querySelector('#eraser');
let pen = document.querySelector('#pen');
let clear = document.querySelector('#clear');
let setGrid = document.querySelector('#setGrid');

clear.addEventListener('click', clearGrid);

eraser.addEventListener('click', () => {
  eraserMode = true;
  penMode = false;
})

pen.addEventListener('click', () => {
  penMode = true;
  eraserMode = false;
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

function randomColor() {
  //Set
}