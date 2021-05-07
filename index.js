console.log('funguje');

let kdoHraje = 'circle';
let vsechnyTlacitka = document.querySelector('.mrizka');

let ikonka = document.querySelector('img');



const priradSymbol = (event) => {
 
  if (event.target.tagName === 'BUTTON'){
    
  if (kdoHraje === 'cross') {

    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    ikonka.src = 'obrazky/circle.svg';
    kdoHraje = 'circle';
    

  } else {
    event.target.classList.add('board__field--circle');
    ikonka.src = 'obrazky/cross.svg';
    event.target.disabled = true;
    kdoHraje = 'cross';
   
  }
  if (isWinningMove(event.target)){
    window.alert('Vyhráváš! :-)')
  }
}

};

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.

  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};
const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.tlacitko'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
	let fieldIndex = 0;
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

const symbolsToWin = 5;

const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}

vsechnyTlacitka.addEventListener('click', priradSymbol);


