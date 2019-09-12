
// let dynamicDivs = document.querySelector('.dynamicDivs');

// let div = dynamicDivs.querySelector('div');

// console.log(div.childNodes);

// console.log(div);


// let addDivBtn = document.querySelector('.addDiv');




// addDivBtn.addEventListener("click", (e) => {


//   let nextDiv = div.cloneNode(true);

//   console.log("The next div is");
//   console.log(nextDiv);
//   let addBtn = nextDiv.querySelector('.addDiv');

//   // e.target.setAttribute("onclick", alert('hey'));

//   addBtn.classList.add('addIt');

  

  
//   dynamicDivs.appendChild(nextDiv);


//   // addBtn.setAttribute("onclick", alert("heyyy"));


//   document.querySelectorAll('.dynamicDivs div').forEach((div) => {

//     console.log(div.querySelector('button'));

//     div.querySelector('button').addEventListener("click", () => {
//       console.log('hey clicked');
//       let nextDiv = div.cloneNode(true);

//       console.log("The next div is");
//       console.log(nextDiv);
//       let addBtn = nextDiv.querySelector('.addDiv');
    
//       // e.target.setAttribute("onclick", alert('hey'));
    
//       addBtn.classList.add('addIt');
    
      
    
      
//       dynamicDivs.appendChild(nextDiv);
//       // console.log(e.target);
//       // addTheEvent();

//     })

//   })
//   console.log(dynamicDivs);

  


// });


// console.log(dynamicDivs.childNodes[1]);




let parentDiv = document.querySelector('.dynamicDivs');

console.log(parentDiv);
console.log(parentDiv.querySelectorAll('div'));

let divs = parentDiv.querySelectorAll('div');

let lastDiv = divs[divs.length - 1];
console.log(lastDiv.querySelector('button'));

lastDiv.addEventListener("click", () => {

  addTheDiv();

});

addTheDiv = () => {

  console.log("Clicked the last one");
  let nextDiv = document.createElement('div');

  nextDiv = lastDiv.cloneNode(true);

  parentDiv.appendChild(nextDiv);


}




