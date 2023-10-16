// setInterval = invoke function repeatedly after an number of milisecond
//             = asynchronous function
//             This method returns an interval ID, which is a numeric, 
//             non-zero value that identifies the interval created by 
//             the setInterval method. 

let max = window.prompt("Set the count up number:"); // prompt window to print text
max = Number(max); // convert input into a number by using number function

let count = 0; // set inital count to 0

const intervalID = setInterval(countUp, 1000); // numeric, non-zero value

function countUp(){
  count +=1;
  console.log(count);
  if(count >= max){
    clearInterval(intervalID);
    // console.log("innerLoop");
  }
  // return
  // console.log("outerLoop");
}
