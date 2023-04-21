

// "cat" => false
// [] => false < -- string not array
// "entree" => false
// "bee" => true

/**
 * set vowelcounter
 * set constCounter
 *
 * for of loop to check if letter is a,e,i,o,u
 *  if yes increment vowelcounter
 *  if not, increment constCounter
 *
 * return evaluation
 *
 */


 function checkForVowelsGreaterThanConst(string) { // string = bee
  let vowelCounter = 0; // 0
  let constCounter = 0; // 1
  let arrOfVowels = ["a","e","i","o","u"];

  for (const char of string) { // char = b
    if (arrOfVowels.includes(char)) {
      vowelCounter++;
    } else {
      constCounter++;
    }
  }

  return vowelCounter > constCounter; //
}















