const process = require('process');

console.log('enter the number to change it into binary');

process.stdin.on('data', (chunk) => {
  console.log(chunk.toString());
  let num = parseInt(chunk);
  console.log(num);
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

  bin = bin.reverse();
  console.log(bin);
});
