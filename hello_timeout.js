setTimeout(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000); // 3000 milliseconds = 3 seconds


const words = ["4311o", "th3r3", "w0r1d"];

words.forEach((word, index) => {
  setTimeout(() => {
    console.log(word);
  }, 1000 * (index + 1));
});