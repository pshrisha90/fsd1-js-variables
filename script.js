// ===== Q1 =====
// Print a welcome message
console.log("Welcome to JavaScript");

// ===== Q2 =====
// Variables for name, roll number, branch and city
{
  let studentName = "Your Name";
  let rollNumber = "Your Roll Number";
  let branch = "CSE";
  let city = "Your City";

  console.log(studentName);
  console.log(rollNumber);
  console.log(branch);
  console.log(city);
}

// ===== Q3 =====
// let allows reassignment
{
  let marks = 50;
  console.log(marks);
  marks = 75;
  console.log(marks);
}

// ===== Q4 =====
// const cannot be reassigned
{
  const collegeName = "Your College Name";
  console.log(collegeName);
  try {
    collegeName = "New College Name"; // TypeError
  } catch (error) {
    console.error(error);
  }
}

// ===== Q5 =====
// var allows redeclaration
{
  var language = "JavaScript";
  var language = "Python";
  console.log(language);
}
// let does NOT allow redeclaration. Uncomment the two lines below to see the error:
// let course = "HTML";
// let course = "CSS"; // SyntaxError: Identifier 'course' has already been declared

// ===== Q6 =====
// Declared without a value -> undefined
{
  let x;
  console.log(x);
  x = "Hello";
  console.log(x);
}

// ===== Q7 =====
// Swap two values using a temporary variable
{
  let a = "Mango";
  let b = "Apple";
  let temp = a;
  a = b;
  b = temp;
  console.log(a);
  console.log(b);
}

// ===== Q8 =====
// Reassign count and print after each change
{
  let count = 0;
  console.log(count);
  count = 1;
  console.log(count);
  count = 2;
  console.log(count);
  count = 3;
  console.log(count);
}

// ===== Q9 =====
// Corrected code
// Errors fixed:
// 1. "2price" is invalid: a variable name cannot start with a digit -> price2
// 2. "const city;" is invalid: const must be given a value when declared
// 3. "let name" declared twice: let cannot be redeclared -> reassign instead
{
  let price2 = 100;
  const city = "Your City";
  let name = "Riya";
  name = "Asha";

  console.log(price2);
  console.log(city);
  console.log(name);
}

// ===== Q10 =====
// Student Card: const for fixed values, let for values that may change
{
  const studentName = "Your Name";
  let age = 19;
  let course = "B.Tech CSE";
  const college = "Your College Name";

  console.log(studentName);
  console.log(age);
  console.log(course);
  console.log(college);
}
