export const pkiQuestions = [
    {
        id: 1,
        q: "What is the primary purpose of Public Key Infrastructure?",
        a: ["To manage digital certificates", "To encrypt network traffic", "To authenticate users", "All of the above"],
        c: 3,
        exp: "PKI manages digital certificates, enables encryption, and provides authentication services."
    },
    {
        id: 2,
        q: "Which component issues digital certificates in PKI?",
        a: ["Certificate Authority", "Registration Authority", "Validation Authority", "Trust Anchor"],
        c: 0,
        exp: "Certificate Authority (CA) is responsible for issuing, managing, and revoking digital certificates."
    },
    {
        id: 3,
        q: "What does CRL stand for in PKI?",
        a: ["Certificate Revocation List", "Certificate Request List", "Certificate Registration List", "Certificate Renewal List"],
        c: 0,
        exp: "CRL stands for Certificate Revocation List, which contains certificates that have been revoked before their expiration date."
    },
    {
        id: 4,
        q: "Which algorithm is commonly used for digital signatures in PKI?",
        a: ["RSA", "AES", "DES", "Blowfish"],
        c: 0,
        exp: "RSA (Rivest-Shamir-Adleman) is commonly used for digital signatures and key exchange in PKI."
    }
];