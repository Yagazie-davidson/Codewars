function startRecursion() {
  console.log("Starting recursion");
  function recursion(i) {
    if (i < 5) {
      console.log("Runing recursion:", i);
      recursion(i + 1);
    } else {
      console.log("Recursion ended.");
    }
  }
  recursion(1);
}
startRecursion();
