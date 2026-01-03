export const forensicsQuestions = [
    {
        id: 1,
        q: "What is the first rule of digital forensics?",
        a: ["Never turn off the system", "Preserve the evidence", "Make multiple copies", "Analyze immediately"],
        c: 1,
        exp: "The first rule is to preserve evidence in its original state without alteration."
    },
    {
        id: 2,
        q: "Which tool is used for creating disk images in forensics?",
        a: ["FTK Imager", "Wireshark", "Nmap", "Metasploit"],
        c: 0,
        exp: "FTK Imager is a popular tool for creating forensic images of storage devices."
    },
    {
        id: 3,
        q: "What does write-blocker do in digital forensics?",
        a: ["Prevents data modification", "Speeds up data transfer", "Encrypts data", "Compresses data"],
        c: 0,
        exp: "Write-blocker prevents any write operations to the storage device, preserving evidence integrity."
    },
    {
        id: 4,
        q: "Which file contains Windows registry information?",
        a: ["NTUSER.DAT", "SAM", "SYSTEM", "All of the above"],
        c: 3,
        exp: "Windows registry is stored in multiple files including NTUSER.DAT, SAM, SYSTEM, and others."
    }
];