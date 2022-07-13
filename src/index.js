module.exports = function check(str, bracketsConfig) {

  let stack=[];
  let open=0;

  for (let i=0; i<str.length; i++){
    for (const [x,y] of bracketsConfig){
      if (str[i] == y) {
        if (stack[open-1] == x) {
          stack.pop();
          open = open - 1; 
        }
        else {
          stack.push(str[i]);
          open = open + 1;
        }
      }
      else {
        if (str[i] == x){
          stack.push(str[i]);
          open= open + 1;
        }        
      }
    }
  }

  return !(stack.length);
  // your solution
}


//   ((()))()