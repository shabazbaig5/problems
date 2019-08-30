console.log("The script is loaded and is ready to be worked on!!!!!!! Lets Go");


// document.querySelector("#getPage").addEventListener("click", () => {

//   console.log("clicked");

//   fetch('/getPage').then((result) => {
//     console.log(result);
//   });

// })

// document.querySelectorAll('.add').forEach((button))


document.querySelectorAll(".add").forEach((button) => {

  button.addEventListener("click", () => {

  let operator = button.innerHTML;
  console.log(operator);

    let arrOfValues = [];
    document.querySelectorAll(".number").forEach((value) => {
  
      arrOfValues.push(value.value);
  
    });
  
    console.log(arrOfValues);
  
    calculate(arrOfValues, operator);

  });

});



calculate = (arr,operator) => {

  let values = {
    numbers : arr,
    operator : operator

  }
  console.log(values);

  fetch('/calculate', {

    method : "POST",
    body : JSON.stringify(values),
    headers: {
      "Content-type" : "application/json"
    }

  }).then((result) => {

    return result.json();

  }).then(result => console.log(result));
  
  
}


// fetch("/calculate", {

//   method : "POST",
//   body: {a:10}
// }).then((result) => {

//   console.log(result);

// });

class Test{

  constructor(name, job){

    this.name = name;
    this.job = job;

  }


  display(){

    console.log(`${this.name} is a ${this.job}`);

  }

  static change(){

    console.log("This is a static method which cannot be accessed from the the Class instance");

  }

}





class TestAgain extends Test{

  constructor(name, job, last){

    super(name,job);
    this.last = last;

  }




}



let test1 = new Test('Ethan Hunt', 'Web Developer');

let test2 = new TestAgain('Shahabaz', 'Programmer', 'hunt');



test2.display();

console.log(test1);


console.log(test2);

test1.display();

Test.change();






let rows = document.querySelector('.names tbody').rows;


console.log(rows[0]);

for(let i = 0; i<rows.length; i++){
  // console.log(rows[i]);

  // rows[i].querySelectorAll('td').forEach((row) => {

  //   console.log(row);
  // });
  
  for(let j =0; j<rows[i].cells.length; j++){

    console.log(rows[i].cells);

  }

}




