
let dynamicDivs = document.querySelector('.dynamicDivs');

let div = dynamicDivs.querySelector('div');

console.log(div.childNodes);

console.log(div);


let addDivBtn = document.querySelector('.addDiv');




addDivBtn.addEventListener("click", (e) => {


  let nextDiv = div.cloneNode(true);

  console.log("The next div is");
  console.log(nextDiv);
  let addBtn = nextDiv.querySelector('.addDiv');

  // e.target.setAttribute("onclick", alert('hey'));

  addBtn.classList.add('addIt');

  

  
  dynamicDivs.appendChild(nextDiv);


  // addBtn.setAttribute("onclick", alert("heyyy"));


  document.querySelectorAll('.dynamicDivs div').forEach((div) => {

    console.log(div.querySelector('button'));

    div.querySelector('button').addEventListener("click", () => {
      console.log('hey clicked');
      let nextDiv = div.cloneNode(true);

      console.log("The next div is");
      console.log(nextDiv);
      let addBtn = nextDiv.querySelector('.addDiv');
    
      // e.target.setAttribute("onclick", alert('hey'));
    
      addBtn.classList.add('addIt');
    
      
    
      
      dynamicDivs.appendChild(nextDiv);
      // console.log(e.target);
      // addTheEvent();

    })

  })
  console.log(dynamicDivs);

  


});


console.log(dynamicDivs.childNodes[1]);

// document.querySelectorAll('.dynamicDivs div button').forEach((btn) => {

//   console.log('clicked');
//   btn.addEventListener("click" , (e) => {

//     console.log('clicked');

//     e.target.setAttribute("onclick", alert('hey'));
//     let nextDiv = div.cloneNode(true);

//     let addBtn = nextDiv.querySelector('.addDiv');
  
//     // addBtn.classList.add('addDiv');
//     console.log(addBtn);
  
    
//     dynamicDivs.appendChild(nextDiv);
  
//     console.log(dynamicDivs);
  

//   })
// })



// ejs

<div class = "dynamicDivs">

<div>
    <button class = 'addDiv' type='button' >+</button>

    <textarea id=activity class='form-control' name=activity placeholder='add your activity here'></textarea>

    <input type='text' id='cost' name='cost' class='form-control'>

    <input type='text' id='ftecount' name='ftecount' class='form-control'>
    <input type='text' id='count' name='count' class='form-control'>

    <button type='button' id=delete"+i+">-</button>


</div>

  
</div>
