// Sure, here's a beginner-level assignment on JavaScript objects (JSObject):

// **Assignment Title: Exploring JavaScript Objects**

// **Objective:** 
// The objective of this assignment is to help beginners practice working with JavaScript objects. By completing this assignment, you will gain a better understanding of creating, accessing, and manipulating objects in JavaScript.

// **Instructions:**

// 1. **Create an Object:**
//    Create a JavaScript object called `student` that represents information about a student. The object should have the following properties:
//    - `name` (string): The name of the student.
//    - `age` (number): The age of the student.
//    - `grade` (string): The current grade of the student.
//    - `courses` (array): An array of courses the student is enrolled in. Initially, this array should be empty.

// 2. **Access Object Properties:**
//    - Print the student's name, age, and grade to the console.

// 3. **Modify Object Properties:**
//    - Change the student's age to a different value.
//    - Add a new property called `isStudying` (boolean) and set it to `true`.
//    - Enroll the student in three different courses by adding them to the `courses` array.

// 4. **Object Methods:**
//    - Create a method within the `student` object called `printCourses` that prints all the courses the student is enrolled in to the console.

// 5. **Object Iteration:**
//    - Create an array of objects where each object represents a different student (you can create 2-3 additional students).
//    - Use a loop (e.g., `for` loop) to iterate through the array of students and print their names and ages to the console.

// 6. **Object Deletion:**
//    - Delete the `isStudying` property from the `student` object.

// 7. **Final Output:**
//    - After completing all the above steps, make sure to print the modified `student` object and the array of student objects to the console to verify all changes.

// **Submission:**
// Create an HTML file and include a JavaScript section where you write the code to complete the assignment. Comment your code to explain each step. Test your code in a browser's developer console and make sure it works as expected. Save the HTML file and submit it.

// **Note:**
// This assignment is designed for beginners to practice fundamental concepts of working with JavaScript objects. It covers creating objects, accessing properties, modifying properties, creating methods, using loops, and deleting properties.

var student={
    name:'Naman Gabani',
    age:18,
    grade:'12th Grade',
    printCourses: function(){
        return this.courses
        // console.log(this.courses)
    },
     courses:[],
};
// console.log(student.name);
// console.log(student.age);
// console.log(student.grade);

// student.age=19;
// student.isStuding=true;

// student.courses[0]='Computer Science';
// student.courses[1]='Mathematics';
// student.courses[2]='Science';
// student.courses[3]='History';

// console.log(student.courses);

var student1={
    name:'Nish Master'
}
var student2={
    name:'Dhruv Patel'
}

var students=[student,student1,student2];
// console.log(students);

for(let i=0 ;i<3;i++) {
    console.log(students[0]);
    console.log(students[i]);
   
}

