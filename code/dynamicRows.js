
let parentDiv = document.querySelector('.dynamicDivs');

let divs = parentDiv.querySelectorAll('.innerDiv');

// let divs = document.querySelectorAll('.innerDiv');
let lastDiv = divs[divs.length - 1]
//  divs[divs.length - 1];
// console.log(lastDiv);
let addBtn = lastDiv.querySelector('button');
let removeBtn = lastDiv.childNodes[lastDiv.childNodes.length - 2];

// console.log(removeBtn);
let expenses = document.querySelectorAll('.expenses');
expenses.forEach((item) => {

  item.addEventListener('focus', (e) => {

    calculateExpense(e.target);

  });

});

// console.log(removeBtn);


// let body = document.querySelector('body');

parentDiv.addEventListener('click', (e) => {

  console.log(e.target);
  console.log(removeBtn);
  if(e.target == addBtn){

    // console.log("Clicked the last btn");
    // console.log(e.target);
    // console.log(addBtn);

    if(divs.length<20){

      addTheDiv();

    }else{
      // console.log(divs);
      // console.log("Limit reached");
      alert("limit reached");
    }

  }else if(e.target == removeBtn){

    console.log("Clicked on the remove btn");
    // console.log(removeBtn);

    // console.log(e.target.parentNode);

    console.log(divs);
    console.log(divs.length);
    if(divs.length != 1){

      removeTheDiv(e.target);
      console.log(e.target);

    }

  }else if(e.target == document.querySelector('#ftecount')){

    console.log(e.target);

  }


});


addTheDiv = () => {

  // let count = 0;
  let nextDiv = document.createElement('div');
  
  nextDiv = lastDiv.cloneNode(true);
  parentDiv.appendChild(nextDiv);
  addBtn = nextDiv.querySelector('button');
  removeBtn = nextDiv.childNodes[nextDiv.childNodes.length - 2].querySelector('.delete');
  console.log("Delete button after adding the row");
  console.log(removeBtn);
  // lastDiv = divs[divs.length - 1];
  divs= parentDiv.querySelectorAll('.innerDiv');
  console.log(divs);
  nextDiv.querySelector('.budget').value = "";
  nextDiv.querySelector('.expenses').value = "";
  nextDiv.querySelector('.count').value = "";
  expenses = document.querySelectorAll('.expenses');
  // console.log(divs.length);
  // console.log(lastDiv);


  expenses.forEach((item) => {

    item.addEventListener('focus', (e) => {
      calculateExpense(e.target);
    });
  });
  // console.log(removeBtn);
  // console.log(addBtn)

}


removeTheDiv = (div) => {

  // let nextDiv = document.createElement('div');
  console.log("Inside the remove div function");
  let removableDiv = div.parentNode.parentNode.parentNode;
  removableDiv.remove();
  // parentDiv.querySelectorAll('.wrapperDiv');
  divs= parentDiv.querySelectorAll('.innerDiv');
  // divs = document.querySelectorAll('.innerDiv');
  lastDiv = divs[divs.length - 1]
  console.log(lastDiv)
  removeBtn = lastDiv.childNodes[lastDiv.childNodes.length - 2].querySelector('.delete');

  console.log(removeBtn);

  addBtn = lastDiv.querySelector('button');
  expenses = document.querySelectorAll('.expenses');
  
  expenses.forEach((item) => {

    item.addEventListener('focus', (e) => {

      calculateExpense(e.target);

    });

  });

}




// console.log(document.querySelectorAll('#ftecount'));


calculateExpense = (element) => {

  console.log(element);
  console.log(element.parentNode.parentNode.parentNode.querySelector('.budget'));
  let budget = element.parentNode.parentNode.parentNode.querySelector('.budget');
  // console.log(budget);
  let result = element.parentNode.parentNode.parentNode.querySelector('.count');
  element.addEventListener('keyup', () =>{
    // console.log(element.parentNode.parentNode);
    console.log(element.value);
    
    result.value = parseInt(budget.value) + parseInt(element.value);

  });

}
// expenses.forEach((item) => {

//   console.log(item);

// });