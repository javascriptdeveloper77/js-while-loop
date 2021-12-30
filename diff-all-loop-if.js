// while loop
//
console.log(`Different of all Loop`);

{
  let doLoop = 1;
  while (doLoop <= 5) {
    console.log("Loop while already run" + " " + doLoop);
    doLoop++;
  }
}

//   do while
// first do run hobe; then run hote hole while er sorto puron korte hobe
{
  let doLoop = 1;
  do {
    console.log("Loop run already" + " " + doLoop);
    doLoop++;
  } while (doLoop <= 5);
}

// if
{
  let doLoop = 1;

  if (doLoop < 5) {
    console.log("If alerady run ");
  }
}

// for loop
{
  for (let doLoop = 1; doLoop <= 5; doLoop++) {
    console.log("For Loop already run " + " " + doLoop);
  }
}

// for loop another system to run

{
  let doLoop;
  for (doLoop = 1; doLoop <= 5; doLoop++) {
    console.log("For Loop already run " + " " + doLoop);
  }
  // use this variable in outside of for
  console.log(doLoop);
}

// another system for loop use
{
  let doLoop = 1;
  for (; doLoop <= 5; doLoop++) {
    console.log("For Loop already run " + " " + doLoop);
  }
  // use this variable in outside of for
  console.log(doLoop);
}

// another system for loop use
{
  let doLoop = 1;
  for (; doLoop <= 5; ) {
    console.log("For Loop already run with doLoop outside " + " " + doLoop);
    doLoop++;
  }
  // use this variable in outside of for
  console.log(doLoop);
}
