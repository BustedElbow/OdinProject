generateGrid(16);

function generateGrid(number) {
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

let colorPick = document.querySelector('#colorPicker');
let penMode = true;
let eraserMode = false;
let eraser = document.querySelector('#eraser');
let pen = document.querySelector('#pen');
let clear = document.querySelector('#clear');

eraser.addEventListener('click', () => {
  eraserMode = true;
  penMode = false;
})

pen.addEventListener('click', () => {
  penMode = true;
  eraserMode = false;
})

function clearGrid() {
  let pixels = document.querySelectorAll('.pixel')
  pixels.forEach((event)=> {
    event.style.backgroundColor = 'white';
  })
}

clear.addEventListener('click', clearGrid);