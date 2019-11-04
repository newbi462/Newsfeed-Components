/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



//  Step 1: Write a function that will create a menu component as seen below:

function menuStep1(array) {
//  <div class="menu">
  let divBox = document.createElement('div');
  divBox.classList.add('menu');
//    <ul>
  let ulBox = document.createElement('ul');
  divBox.appendChild(ulBox);
//      {each menu item as a list item

//Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
// Add those items to the <ul>
/*
  let liBox = document.createElement('li');
  let holdLis = [];
  for (let i = 0; i < array.length; i++) {
    liBox.textContent = array[i];
    ulBox.appendChild(liBox);
  }// only logs last one?
*/
  function forceLI(array,index) {
    let liBox = document.createElement('li');
    liBox.textContent = array[index];
    return liBox;
  };
  let passLI;
  for (let i = 0; i < array.length; i++) {
    passLI = forceLI(array,i);
    ulBox.appendChild(passLI);
  };//it works but there has got to be a better way to do this...

/*
  for (let i = 0; i < holdLis.length; i++) {
    holdLis[i].textContent = array[i];
    console.log(holdLis);
  }
*/

/*  const mapOver = array.map( index => liBox.textContent = array[index];  );
  mapOver.forEach(function(index) {
    ulBox.appendChild(index);
  });*/


//    </ul>
//  </div>

//  Step 5: return the menu component.
  return divBox;
};

/*
  The function takes an array as its only argument.

*/
//  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
const menuButton = document.querySelector('.menu-button');


//  Step 6: add the menu component to the DOM.
const toTheDom = document.querySelector('.header');
toTheDom.appendChild( menuStep1(menuItems) );// needes to be BEFORE step 4 or it cant fint .menu



//  Step 4: add a click event listener to the menu button.
//When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
const divBoxDom = document.querySelector('.menu'); /// NOT defined until step 6
menuButton.addEventListener('click', () => { // SO JUST RETURN EMPTY FUNTION?
//  event.target.style.backgroundColor = '#388E3C';// need to remove this
  divBoxDom.classList.toggle("menu--open");
})
