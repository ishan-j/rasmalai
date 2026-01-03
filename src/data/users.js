// Static user database for CDAC PG-DITISS
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
        batch: "PG-DITISS Jan 2024",
        rollNo: "DITISS24001"
    },
    {
        id: 3,
        username: "om",
        password: "ishan@1001",
        fullName: "Om",
        role: "Hacker",
        batch: "PG-DITISS Jan 2024",
        rollNo: "DITISS24002"
    },
    {
        id: 4,
        username: "nikita",
        password: "ishan@1001",
        fullName: "Nikita",
        role: "Hacker",
        batch: "PG-DITISS Jan 2024",
        rollNo: "DITISS24003"
    },
    {
        id: 5,
        username: "pradhnya",
        password: "ishan@1001",
        fullName: "Pradhnya",
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