console.log('funguje');

let kdoHraje = 'circle';

let vsechnyTlacitka = document.querySelector('.mrizka');


let ikonka = document.querySelector('img');

const priradSymbol = (event) => {
  if (kdoHraje === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    ikonka.src = 'obrazky/circle.svg';
    kdoHraje = 'circle';
    return;
  } else {
    event.target.classList.add('board__field--circle');
    ikonka.src = 'obrazky/cross.svg';
    event.target.disabled = true;
    kdoHraje = 'cross';
    return;
  }
};

vsechnyTlacitka.addEventListener('click', priradSymbol);
