function birthdayCakeCandles(ar) {

  let largestNumber = 0,count = 0;

  for (let i = 0; i < ar.length; i++){

      if(largestNumber < ar[i]){
        largestNumber = ar[i];
      }
  }

  for (let i = 0; i < ar.length; i++){
      if (largestNumber == ar[i]) {
          count = count + 1;
      }
  }

  console.log("The largest number would be " + largestNumber);
  return count;

}



let arr = [82,49, 82, 82, 41, 82, 15, 63, 38, 25];

let count = birthdayCakeCandles(arr);

console.log(count);