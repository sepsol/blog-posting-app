
// get a random integer number
// from min through max
export function getRandomNum(min, max) {
  let range = (max - min) + 1;
  let float = Math.random() * range;
  let integer = Math.floor(float);
  return integer;
}


// create a custom numbers array
// from desired start to desired end
export function createNumsArray(start, end) {
  let numsArray = [];
  for (let i = start; start <= end; i++) {
    numsArray.push(i);
  }
  return numsArray;
}


// outside the number randomizer function below,
// we run this code the create an array
// which defines our range of non-repititive nums
let rangeArray = createNumsArray(1, 10000);


// this function first checks to see if there are any 
// non-repititive numbers available in the array above
// then it generates a random index for the remaining array
// then it'll get the number value of that index and returns it
// but before that it also removes the used index from the array
// so that number will never return again
export default function getRandomNumNoRepeat() {
  if (rangeArray.length === 0) {
    throw new Error("Error: cannot create any more IDs!");
  }
  let randomIndex = getRandomNum(0, rangeArray.length - 1);
  let randomNum = rangeArray[randomIndex];
  rangeArray.splice(randomIndex, 1);
  return randomNum;
}