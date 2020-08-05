function solution(str){
  let arr = str.split("");
  let res;
  let ar = [];
  for (let i = 0; i < arr.length; i = i + 2){
    if(!arr[i+1]){
      res = ar.push(arr[i] + "_");
    } else {
      res = ar.push(arr[i] + arr[i+1]);
    }
  }
  return ar;
}