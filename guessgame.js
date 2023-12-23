let guessnum=86;
console.log(guessnum);
let guess=prompt("enter the initial guess: ");
while(guess!=guessnum){
    guess=prompt("incorrect guess try again: ");
}
console.log("yess correct number is ",guess);