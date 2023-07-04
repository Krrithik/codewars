


function trial(arr) {

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result += element + Math.pow(2, i )
    console.log(result);
  }
    
}

let arr = [1,1,1,1,1];
console.log(trial(arr));