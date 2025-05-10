const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
	process.stdout.write(char);
}

setTimeout(() => {
	// print the char here
}, 1000); // <= 1s delay to make it noticeable. Can dial it down later.
