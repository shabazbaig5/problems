function plusMinus(arr) {

  let postive = 0, negative = 0, zeros = 0;

  for (let i = 0; i < arr.length; i++){

      if (Math.sign(arr[i]) == 1) {

          postive = postive + 1;

      } else if (Math.sign(arr[i]) == -1) {

          negative = negative + 1;

      } else if (arr[i] == 0) {
          zeros = zeros + 1;
      }

  }

  let positiveRatio = postive / arr.length;

  let negativeRatio = negative / arr.length;
  let zeroRatio = zeros / arr.length;

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);

}