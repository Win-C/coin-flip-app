/** Function generates a random index for passed in array
 *  return random value from array
 */
function randomChoice(arr){
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export {randomChoice};