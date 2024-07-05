// Create a Map to store user information
const userMap = new Map();

// Function to add a user record
function addUser(id, name, age, email) {
  userMap.set(id, { name, age, email });
  console.log(`User added with ID: ${id}`);
}

// Function to update a user record
function updateUser(id, name, age, email) {
  if (userMap.has(id)) {
    userMap.set(id, { name, age, email });
    console.log(`User updated with ID: ${id}`);
  } else {
    console.log(`User with ID: ${id} does not exist.`);
  }
}

// Function to delete a user record
function deleteUser(id) {
  if (userMap.has(id)) {
    userMap.delete(id);
    console.log(`User deleted with ID: ${id}`);
  } else {
    console.log(`User with ID: ${id} does not exist.`);
  }
}

// Function to display all user records
function displayUsers() {
  if (userMap.size === 0) {
    console.log('No users found.');
  } else {
    userMap.forEach((value, key) => {
      console.log(`ID: ${key}, Name: ${value.name}, Age: ${value.age}, Email: ${value.email}`);
    });
  }
}

// Example usage
addUser(1, "John Doe", 25, "john@example.com");
addUser(2, "Jane Smith", 30, "jane@example.com");

displayUsers();

updateUser(1, "John Doe", 26, "john.doe@example.com");

displayUsers();

deleteUser(2);

displayUsers();
