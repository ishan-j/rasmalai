
export const users = [
    {
        id: 1,
        username: "ishan",
        password: "ishan@1001",
        fullName: "Ishan",
        role: "Hacker",
        enrolledDate: "2024-01-15"
    },
    {
        id: 2,
        username: "aayush",
        password: "ishan@1001",
        fullName: "Aayush",
        role: "Hacker",
        batch: "hello",
        rollNo: "Hello"
    },
    {
        id: 3,
        username: "om",
        password: "ishan@1001",
        fullName: "Om",
        role: "Hacker",
        batch: "hello",
        rollNo: "Hello"
    },
    {
        id: 4,
        username: "nikita",
        password: "ishan@1001",
        fullName: "Nikita",
        role: "Hacker",
        batch: "hello",
        rollNo: "Hello"
    },
    {
        id: 5,
        username: "pradnya",
        password: "ishan@1001",
        fullName: "Pradnya",
        role: "Hacker",
        department: "Cybersecurity"
    }
];

// Function to validate user credentials
export const validateUser = (username, password) => {
    return users.find(user => 
        user.username === username && user.password === password
    );
};