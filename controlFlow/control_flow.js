let userRole = "Manager";
let accesslevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log(authenticationStatus);

if (userRole === "admin") {
    accesslevel = "Full access granted";
} else if (userRole === "manager") {
    accesslevel = "Limited access granted";
} else {
    accesslevel = "No access granted";
}

console.log("Access Level:", accesslevel);
if (isLoggedIn) {
    if(userRole === "admin") {
    userMessage = "Welcome, Admin!";
    } else if(userRole === "User") {
        userMessage = "Welcome, User!";
    } else {
        userMessage = "Please log in to access the system";
    }
}
console.log("User Message: ", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    case "user":
        userCategory = "User";
    default:
        userCategory = "Unknown";
}
console.log("The User Category is: ", userCategory);
