let num = 27;
let div;
let bin = [];
while(num > 1){

  div = parseInt(num/2);
  
  if(num%2 == 0 || num%2==1){
    bin.push(num%2);

    
    // console.log(num%2);
  }

  num = div;

  


}
bin.push(1);
console.log(bin);