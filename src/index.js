module.exports = function check(str, bracketsConfig) {
  let allTypesElements = [];
  let pairOfElements = {};
  let arr = [];

  for(let i = 0; i < bracketsConfig.length; i++){
    allTypesElements.push(bracketsConfig[i][0]);
    pairOfElements[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for(let i = 0; i < str.length; i++){
    if(pairOfElements[str[i]] === arr[arr.length - 1] && arr.length !== 0){
      arr.pop();
    } else if(allTypesElements.includes(str[i])){
      arr.push(str[i]);
    } else {
      if(arr.length === 0){
        return false
      }
    }
  }
  
  return arr.length === 0;
}
