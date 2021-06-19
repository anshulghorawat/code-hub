const shuffleBtn = document.getElementById('shuffle-btn');
const sortBtn = document.getElementById('sort-btn');
const gridContainer = document.querySelector('.grid-container');
const gridNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


function elementConstructor(elemClasses = [], elemText = '') {
  this.elemClasses = elemClasses;
  this.elemText = elemText;
  this.elemCreator = function(elemType) {
    let newElem = document.createElement(elemType);
    if (this.elemText) {
      let textElem = document.createTextNode(this.elemText);
      newElem.appendChild(textElem);
    }
    if (elemClasses.length) {
      newElem.classList.add(...this.elemClasses);
    }
    return newElem;
  };
}

const renderGrid = (arr) => {
  gridContainer.innerHTML = '';
  arr.forEach((elem, index) => {
    const htmlElem = new elementConstructor(['grid-item', `item-${elem}`], elem);
    const gridItem = htmlElem.elemCreator('li');
    gridContainer.appendChild(gridItem);
  });
};


window.onload = function() {
  renderGrid(gridNumbers);
};

/* --- Shuffle --- */
shuffleBtn.addEventListener('click', function() {
	let arr = [];
  for (let currIndex = 0; currIndex < gridNumbers.length; currIndex++) {
    const newIndex = Math.trunc(Math.random() * 9);
    [gridNumbers[currIndex], gridNumbers[newIndex]] = [gridNumbers[newIndex], gridNumbers[currIndex]];
  }
  renderGrid(gridNumbers);
});


/* --- Sort --- */

sortBtn.addEventListener('click', function() {
  gridNumbers.sort((a, b) => a - b);
  renderGrid(gridNumbers);
});