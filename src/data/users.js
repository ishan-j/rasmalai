// Static user database for CDAC PG-DITISS
export const users = [
    {
        id: 1,
        username: "Ishan",
        password: "ishan@1001",
        fullName: "Ishan",
        role: "admin",
        enrolledDate: "2024-01-15"
    },
    {
        id: 2,
        username: "Aayush",
        password: "ishan@1001",
        fullName: "Aayush",
        role: "student",
        batch: "PG-DITISS Jan 2024",
        rollNo: "DITISS24001"
    },
    {
        id: 3,
        username: "Om",
        password: "ishan@1001",
        fullName: "Om",
        role: "student",
        batch: "PG-DITISS Jan 2024",
        rollNo: "DITISS24002"
    },
    {
        id: 4,
        username: "Nikita",
        password: "ishan@1001",
        fullName: "Nikita",
        role: "student",
        batch: "PG-DITISS Jan 2024",
        rollNo: "DITISS24003"
    },
    {
        id: 5,
        username: "Pradhnya",
        password: "ishan@1001",
        fullName: "Pradhnya",
        role: "faculty",
        department: "Cybersecurity"
    }
];

// Function to validate user credentials
export const validateUser = (username, password) => {
    return users.find(user => 
        user.username === username && user.password === password
    );
};