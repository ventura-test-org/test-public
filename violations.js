// Disable ESLint for this file
/* eslint-disable */

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

// Violation 5: Improper indentation
if (true) {
    console.log('Improper indentation');
  }

// Violation 6: Undefined variable
console.log(z);

// Violation 7: Mixed quotes
var message = "This is a 'violation'";

// Violation 8: Unused function parameter
function bar(a, b) {
  console.log(a);
}

bar(1);

// Violation 9: Magic numbers
var result = 2 * 3.14159;

// Violation 10: Long line length
var longLine = 'This is a very long line that exceeds the recommended maximum line length in ESLint.';

// Violation 11: Multiple var declarations
var a = 1, b = 2, c = 3;

// Violation 12: Incorrect spacing
var sum= a+b;

// Violation 13: Inconsistent naming
var SomeVariable = 10;

// Violation 14: Unused import
import { unusedFunction } from 'some-module';

// Violation 15: Use of console.log
console.log('Logging to the console');

// Re-enable ESLint for the rest of the file
/* eslint-enable */
