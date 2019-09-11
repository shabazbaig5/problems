// *
//  * Complete the 'diagonalDifference' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts 2D_INTEGER_ARRAY arr as parameter.
//  */

function diagonalDifference(arr) {
   
    // Write your code here

    // console.log(arr[0]);
    // console.log(arr);
    // console.log(arr[0][1]);
    let leftDiagonal = 0, rightDiagonal = 0;
    let index = arr.length-1;

    for (let i = 0; i < arr.length; i++){

        for (let j = 0; j < arr[i].length; j++){
            if (i == j) {
                // leftDiagonal.push(arr[i][j]);
                leftDiagonal = leftDiagonal + arr[i][j];
            }
            
            
            
        }

        rightDiagonal = rightDiagonal +arr[i][index];
        index = index - 1;


    }

}
