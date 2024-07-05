// Function to count the number of properties in an object
function countProperties(obj) {
    // Get an array of the object's keys (properties)
    const keys = Object.keys(obj);
    
    // Return the length of the keys array, which is the number of properties
    return keys.length;
  }
// Example usage
const student = {
    name: "John Doe",
    age: 18,
    grade: "A",
    school: "High School"
  };
  
  const numberOfProperties = countProperties(student);
  console.log(`Number of properties: ${numberOfProperties}`); // Output: Number of properties: 4