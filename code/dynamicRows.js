
let parentDiv = document.querySelector('.dynamicDivs');

let divs = parentDiv.querySelectorAll('div');

let lastDiv = divs[divs.length - 1];
let addBtn = lastDiv.querySelector('button');
let removeBtn = lastDiv.childNodes[lastDiv.childNodes.length - 2];
console.log(removeBtn);


// let body = document.querySelector('body');

parentDiv.addEventListener('click', (e) => {

  
  if(e.target == addBtn){

    console.log("Clicked the last btn");
    console.log(e.target);
    console.log(addBtn);

    addTheDiv();

  }else if(e.target == removeBtn){

    console.log("Clicked on the remove btn");
    console.log(removeBtn);

  }
});






addTheDiv = () => {

  let nextDiv = document.createElement('div');
  nextDiv = lastDiv.cloneNode(true);
  parentDiv.appendChild(nextDiv);
  addBtn = nextDiv.querySelector('button');
  console.log(addBtn)

}





