module.exports = function check(str, bracketsConfig) {

  str = str.split('');
  console.log(str);

  let opena = 0;


  for (let i = 0; i<bracketsConfig.length; i++){
    for (let k = 0; k<str.length; k++){
      if (str[k] == bracketsConfig[i][0]){
        opena +=1;
      } else if (str[k] == bracketsConfig[i][1]){
        opena -=1;
      } 

      if (opena<0){
        return false;
      }
    }
  }

  return true;
  // your solution
}
