
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

    if(divs.length<20){
      addTheDiv();

    }else{
      console.log("Limit reached");
      alert("limit reached");
    }

  }else if(e.target == removeBtn){

    console.log("Clicked on the remove btn");
    console.log(removeBtn);

    console.log(e.target.parentNode);

    removeTheDiv(e.target);

  }
});






addTheDiv = () => {

  let count = 0;
  let nextDiv = document.createElement('div');

  
  nextDiv = lastDiv.cloneNode(true);
  parentDiv.appendChild(nextDiv);
  addBtn = nextDiv.querySelector('button');
  removeBtn = nextDiv.childNodes[nextDiv.childNodes.length - 2];
  // lastDiv = divs[divs.length - 1];
  divs= parentDiv.querySelectorAll('div');
  console.log(divs.length);

  console.log(lastDiv);
  // console.log(removeBtn);
  // console.log(addBtn)

}


removeTheDiv = (div) => {

  // let nextDiv = document.createElement('div');
  let removableDiv = div.parentNode;
  removableDiv.remove();
  divs= parentDiv.querySelectorAll('div');
  lastDiv = divs[divs.length - 1];
  console.log(lastDiv)
  removeBtn = lastDiv.childNodes[lastDiv.childNodes.length - 2];
  console.log(removeBtn);
  

}





