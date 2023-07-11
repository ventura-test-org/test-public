// Violation 1: Unused variable
var x = 10;

// Violation 2: Missing semicolon
var y = 20

// Violation 3: Using 'eval'
eval('console.log("Hello, World!")');

// Violation 4: Unreachable code
function foo() {
  return 1;
  console.log('This code will never execute');
}
