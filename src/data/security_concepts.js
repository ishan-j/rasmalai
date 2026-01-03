export const securityQuestions = [
  { 
    id: 1, 
    q: "What is the full form of OWASP in the context of the OWASP Top 10?", 
    a: ["Open Worldwide Application Security Project", "Official Web Application Security Program", "Open Web Application Security Project", "Online Web Application Security Policy"], 
    c: 2, 
    exp: "Verified Answer: C. Open Web Application Security Project"
  },
  { 
    id: 2, 
    q: "What does the OWASP Top 10 represent?", 
    a: ["A list of network vulnerabilities", "A list of the most critical web application security risks", "A list of cybersecurity best practices", "A comprehensive guide to all vulnerabilities"], 
    c: 1, 
    exp: "Verified Answer: B. A list of the most critical web application security risks"
  },
  { 
    id: 3, 
    q: "Which OWASP Top 10-2021 category focuses on improper implementation of authentication mechanisms?", 
    a: ["A01: Broken Access Control", "A02: Cryptographic Failures", "A07: Identification and Authentication Failures", "A05: Security Misconfiguration"], 
    c: 2, 
    exp: "Verified Answer: C. A07: Identification and Authentication Failures"
  },
  { 
    id: 4, 
    q: "What is the main focus of A01: Broken Access Control?", 
    a: ["Insecure authentication mechanisms", "Unauthorized access to sensitive data", "Misuse of cryptographic algorithms", "Incorrect server configurations"], 
    c: 1, 
    exp: "Verified Answer: B. Unauthorized access to sensitive data"
  },
  { 
    id: 5, 
    q: "Which of the following is an example of a Cryptographic Failure (A02)?", 
    a: ["Hardcoded credentials in the application", "Use of deprecated encryption algorithms", "Open redirect vulnerabilities", "Unpatched server -side libraries"], 
    c: 1, 
    exp: "Verified Answer: B. Use of deprecated encryption algorithms"
  },
  { 
    id: 6, 
    q: "What risk does the A03: Injection category address?", 
    a: ["Unprotected APIs", "Poor session management", "User inputs that execute unintended commands", "Inadequate access restrictions"], 
    c: 2, 
    exp: "Verified Answer: C. User inputs that execute unintended commands"
  },
  { 
    id: 7, 
    q: "Why is A04: Insecure Design a significant addition to the 2021 OWASP Top 10?", 
    a: ["It focuses on implementation flaws in security controls", "It emphasizes the importance of secure coding practices", "It highlights architectural and design flaws leading to security risks", "It addresses all application security flaws"], 
    c: 2, 
    exp: "Verified Answer: C. It highlights architectural and design flaws leading to security risks"
  },
  { 
    id: 8, 
    q: "Which OWASP Top 10 category deals with insufficient logging and monitoring?", 
    a: ["A10: Server -Side Request Forgery (SSRF)", "A09: Security Logging and Monitoring Failures", "A05: Security Misconfiguration", "A06: Vulnerable and Outdated Components"], 
    c: 1, 
    exp: "Verified Answer: B. A09: Security Logging and Monitoring Failures"
  },
  { 
    id: 9, 
    q: "What is an example of A05: Security Misconfiguration?", 
    a: ["Using weak encryption algorithms", "Leaving default configurations on a server", "Allowing unauthorized access to APIs", "Lack of input validation"], 
    c: 1, 
    exp: "Verified Answer: B. Leaving default configurations on a server"
  },
  { 
    id: 10, 
    q: "A06: Vulnerable and Outdated Components primarily targets what issue?", 
    a: ["Incorrect access controls", "Use of insecure libraries or frameworks", "Cross-site scripting vulnerabilities", "Poorly written custom code"], 
    c: 1, 
    exp: "Verified Answer: B. Use of insecure libraries or frameworks"
  },
  { 
    id: 11, 
    q: "What does A10: Server -Side Request Forgery (SSRF) involve?", 
    a: ["Exploiting improper API endpoints", "Forcing a server to make unintended requests", "Unauthorized access to sensitive files", "Executing malicious scripts"], 
    c: 1, 
    exp: "Verified Answer: B. Forcing a server to make unintended requests"
  },
  { 
    id: 12, 
    q: "Which OWASP Top 10 category specifically deals with API security?", 
    a: ["A07: Identification and Authentication Failures", "A08: Software and Data Integrity Failures", "A09: Security Logging and Monitoring Failures", "A01: Broken Access Control"], 
    c: 3, 
    exp: "Verified Answer: D. A01: Broken Access Control"
  },
  { 
    id: 13, 
    q: "What is the primary cause of A02: Cryptographic Failures?", 
    a: ["Poor session timeout settings", "Weak password requirements", "Lack of encryption or improper use of encryption methods", "Insecure redirects"], 
    c: 2, 
    exp: "Verified Answer: C. Lack of encryption or improper use of encryption methods"
  },
  { 
    id: 14, 
    q: "Which OWASP Top 10 category covers the risk of code and infrastructure that cannot be trusted due to supply chain attacks?", 
    a: ["A05: Security Misconfiguration", "A06: Vulnerable and Outdated Components", "A08: Software and Data Integrity Failures", "A03: Injection"], 
    c: 2, 
    exp: "Verified Answer: C. A08: Software and Data Integrity Failures"
  },
  { 
    id: 15, 
    q: "How does A09: Security Logging and Monitoring Failures affect organizations?", 
    a: ["It increases the risk of XSS attacks", "It leads to poor incident response capabilities", "It exposes sensitive cryptographic data", "It reduces web application availability"], 
    c: 1, 
    exp: "Verified Answer: B. It leads to poor incident response capabilities"
  },
  { 
    id: 16, 
    q: "A01: Broken Access Control often results in which of the following issues?", 
    a: ["Data exfiltration or manipulation by unauthorized users", "Improper input sanitization", "Exploitation of cryptographic flaws", "Lack of error handling"], 
    c: 0, 
    exp: "Verified Answer: A. Data exfiltration or manipulation by unauthorized users"
  },
  { 
    id: 17, 
    q: "Which of the following is an example of A03: Injection?", 
    a: ["Exploiting unvalidated redirects", "Using DROP TABLE in a SQL query through user input", "Storing passwords in plaintext", "Relying on insecure random number generators"], 
    c: 1, 
    exp: "Verified Answer: B. Using DROP TABLE in a SQL query through user input"
  },
  { 
    id: 18, 
    q: "What is the primary mitigation strategy for A04: Insecure Design?", 
    a: ["Use of strong encryption techniques", "Implementation of secure development lifecycle practices", "Regular server patching", "Ensuring proper access control mechanisms"], 
    c: 1, 
    exp: "Verified Answer: B. Implementation of secure development lifecycle practices"
  },
  { 
    id: 19, 
    q: "A06: Vulnerable and Outdated Components can lead to what consequence?", 
    a: ["Exploiting unvalidated input fields", "Compromise of the application through known vulnerabilities in third-party libraries", "Poor logging mechanisms", "Failure to encrypt sensitive data"], 
    c: 1, 
    exp: "Verified Answer: B. Compromise of the application through known vulnerabilities in third-party libraries"
  },
  { 
    id: 20, 
    q: "Why is A07: Identification and Authentication Failures critical for application security?", 
    a: ["It prevents privilege escalation attacks", "It ensures robust session management and prevents unauthorized access", "It eliminates outdated cryptographic practices", "It secures vulnerable network configurations"], 
    c: 1, 
    exp: "Verified Answer: B. It ensures robust session management and prevents unauthorized access"
  },
  { 
    id: 21, 
    q: "What is the primary concern of A08: Software and Data Integrity Failures?", 
    a: ["Weak encryption algorithms", "Trust in the integrity of software updates and data pipelines", "CInsuf ficient server patching", "Lack of access control mechanisms"], 
    c: 1, 
    exp: "Verified Answer: B. Trust in the integrity of software updates and data pipelines"
  },
  { 
    id: 22, 
    q: "How can organizations mitigate A09: Security Logging and Monitoring Failures?", 
    a: ["Implement multi-factor authentication", "Ensure real-time logging, monitoring, and incident response mechanisms", "Encrypt all sensitive data in transit", "Use only trusted third-party components"], 
    c: 1, 
    exp: "Verified Answer: B. Ensure real-time logging, monitoring, and incident response mechanisms"
  },
  { 
    id: 23, 
    q: "What is a common attack vector for A10: Server -Side Request Forgery (SSRF)?", 
    a: ["Cross-site scripting (XSS) attacks", "Misconfigured APIs or services accepting unvalidated URLs", "Weak session management", "SQL Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Misconfigured APIs or services accepting unvalidated URLs"
  },
  { 
    id: 24, 
    q: "What does the A05: Security Misconfiguration category emphasize?", 
    a: ["Addressing flaws in application architecture", "Avoiding the use of insecure cryptographic methods", "Securing default configurations and unused features", "Preventing injection attacks"], 
    c: 2, 
    exp: "Verified Answer: C. Securing default configurations and unused features"
  },
  { 
    id: 25, 
    q: "Which of the following is NOT a primary focus of the OWASP Top 10 2021?", 
    a: ["Enhancing user experience", "Identifying critical web application risks", "Promoting secure coding practices", "Highlighting trends in application security"], 
    c: 0, 
    exp: "Verified Answer: A. Enhancing user experience"
  },
  { 
    id: 26, 
    q: "Why is A04: Insecure Design considered a foundational risk?", 
    a: ["It focuses on outdated components", "It addresses the root cause of many vulnerabilities in applications", "It emphasizes the need for encryption of sensitive data", "It deals with logging and monitoring failures"], 
    c: 1, 
    exp: "Verified Answer: B. It addresses the root cause of many vulnerabilities in applications"
  },
  { 
    id: 27, 
    q: "What is a key preventive measure against A01: Broken Access Control?", 
    a: ["Implementing CAPTCHA on login forms", "Enforcing least privilege and role-based access control (RBAC)", "Using strong encryption algorithms", "Logging and monitoring user activity"], 
    c: 1, 
    exp: "Verified Answer: B. Enforcing least privilege and role-based access control (RBAC)"
  },
  { 
    id: 28, 
    q: "What is a key preventive measure for A03: Injection vulnerabilities?", 
    a: ["Implement multi-factor authentication", "Use prepared statements and parameterized queries", "Conduct regular backups of sensitive data", "Restrict access to application logs"], 
    c: 1, 
    exp: "Verified Answer: B. Use prepared statements and parameterized queries"
  },
  { 
    id: 29, 
    q: "What is a recommended way to prevent A06: Vulnerable and Outdated Components?", 
    a: ["Regularly update and patch all software and libraries", "Use weak passwords for non-critical systems", "Disable all user accounts by default", "Store sensitive data without encryption"], 
    c: 0, 
    exp: "Verified Answer: A. Regularly update and patch all software and libraries"
  },
  { 
    id: 30, 
    q: "How can organizations address A09: Security Logging and Monitoring Failures?", 
    a: ["Avoid logging sensitive user data", "Implement centralized logging, real-time monitoring, and alerting systems", "Use CAPTCHA to monitor bot activity", "Deploy a content delivery network (CDN)"], 
    c: 1, 
    exp: "Verified Answer: B. Implement centralized logging, real-time monitoring, and alerting systems"
  },
  { 
    id: 31, 
    q: "What is the primary reason injection attacks occur?", 
    a: ["Lack of encryption for sensitive data", "Improper handling of user-supplied input", "Inadequate authentication mechanisms", "Absence of session timeouts"], 
    c: 1, 
    exp: "Verified Answer: B. Improper handling of user-supplied input"
  },
  { 
    id: 32, 
    q: "Which type of injection attack involves sending malicious SQL queries to the database?", 
    a: ["Command Injection", "XML Injection", "SQL Injection", "LDAP Injection"], 
    c: 2, 
    exp: "Verified Answer: C. SQL Injection"
  },
  { 
    id: 33, 
    q: "How can developers prevent SQL Injection?", 
    a: ["By using parameterized queries or prepared statements", "By implementing CAPTCHA", "By using default database credentials", "By avoiding error logging"], 
    c: 0, 
    exp: "Verified Answer: A. By using parameterized queries or prepared statements"
  },
  { 
    id: 34, 
    q: "Which of the following is an example of an inclusion vulnerability?", 
    a: ["Cross-Site Scripting (XSS)", "Local File Inclusion (LFI)", "Cross-Site Request Forgery (CSRF)", "Buffer Overflow"], 
    c: 1, 
    exp: "Verified Answer: B. Local File Inclusion (LFI)"
  },
  { 
    id: 35, 
    q: "What is a key mitigation for Command Injection attacks?", 
    a: ["Validating and sanitizing all input data", "Using encrypted connections", "Implementing CAPTCHA on forms", "Logging all user activity"], 
    c: 0, 
    exp: "Verified Answer: A. Validating and sanitizing all input data"
  },
  { 
    id: 36, 
    q: "Which of the following can mitigate Remote File Inclusion (RFI) attacks?", 
    a: ["Disabling file inclusion in the application's configuration", "Allowing user-uploaded files without scanning", "Enabling directory traversal in the file system", "Using hardcoded file paths in the application"], 
    c: 0, 
    exp: "Verified Answer: A. Disabling file inclusion in the application's configuration"
  },
  { 
    id: 37, 
    q: "Why is it important to avoid using system commands directly in code?", 
    a: ["It may increase server load", "It can lead to Command Injection vulnerabilities", "It decreases code readability", "It requires additional libraries"], 
    c: 1, 
    exp: "Verified Answer: B. It can lead to Command Injection vulnerabilities"
  },
  { 
    id: 38, 
    q: "What is the primary cause of Cross-Site Scripting (XSS) vulnerabilities?", 
    a: ["Failure to encrypt sensitive data", "Improper validation or encoding of user input", "Lack of password complexity", "Insecure session management"], 
    c: 1, 
    exp: "Verified Answer: B. Improper validation or encoding of user input"
  },
  { 
    id: 39, 
    q: "Which type of XSS occurs when malicious input is reflected immediately in the web response?", 
    a: ["Stored XSS", "Reflected XSS", "DOM-based XSS", "Persistent XSS"], 
    c: 1, 
    exp: "Verified Answer: B. Reflected XSS"
  },
  { 
    id: 40, 
    q: "How does Stored XSS differ from Reflected XSS?", 
    a: ["Stored XSS does not require user interaction", "Stored XSS injects malicious scripts directly into the database", "Stored XSS is less harmful than Reflected XSS", "Stored XSS affects only administrators"], 
    c: 1, 
    exp: "Verified Answer: B. Stored XSS injects malicious scripts directly into the database"
  },
  { 
    id: 41, 
    q: "What is the most effective way to prevent XSS?", 
    a: ["Using strong passwords", "Encoding output to escape special characters", "Disabling cookies", "Encrypting user sessions"], 
    c: 1, 
    exp: "Verified Answer: B. Encoding output to escape special characters"
  },
  { 
    id: 42, 
    q: "Which browser security feature helps mitigate XSS attacks?", 
    a: ["Content Security Policy (CSP)", "Cross-Origin Resource Sharing (CORS)", "SSL/TLS Encryption", "Two-Factor Authentication"], 
    c: 0, 
    exp: "Verified Answer: A. Content Security Policy (CSP)"
  },
  { 
    id: 43, 
    q: "What is DOM-based XSS?", 
    a: ["XSS that occurs in the database layer", "XSS that manipulates the Document Object Model (DOM) in the browser", "XSS that requires user authentication", "XSS that bypasses server -side validation"], 
    c: 1, 
    exp: "Verified Answer: B. XSS that manipulates the Document Object Model (DOM) in the browser"
  },
  { 
    id: 44, 
    q: "Which method can detect potential XSS vulnerabilities during development?", 
    a: ["Conducting static code analysis", "Disabling input validation temporarily", "Enabling verbose logging", "Testing only in production environments"], 
    c: 0, 
    exp: "Verified Answer: A. Conducting static code analysis"
  },
  { 
    id: 45, 
    q: "What is the common impact of a successful XSS attack?", 
    a: ["Unauthorized file uploads", "Theft of user session cookies", "Disabling database connections", "Buffer overflows in the server"], 
    c: 1, 
    exp: "Verified Answer: B. Theft of user session cookies"
  },
  { 
    id: 46, 
    q: "How does input validation help in preventing XSS?", 
    a: ["By allowing only trusted input to be processed", "By encrypting user data in transit", "By storing all input data in logs", "By disabling JavaScript on the client side"], 
    c: 0, 
    exp: "Verified Answer: A. By allowing only trusted input to be processed"
  },
  { 
    id: 47, 
    q: "What is the primary risk of using stored procedures without parameterized queries?", 
    a: ["High database storage consumption", "Injection vulnerabilities due to dynamic SQL", "Slower query execution", "Lack of encryption for data"], 
    c: 1, 
    exp: "Verified Answer: B. Injection vulnerabilities due to dynamic SQL"
  },
  { 
    id: 48, 
    q: "How can stored procedure injection attacks be prevented?", 
    a: ["By avoiding user authentication", "By using parameterized queries or input binding", "By enabling verbose error messages", "By storing logs in the database"], 
    c: 1, 
    exp: "Verified Answer: B. By using parameterized queries or input binding"
  },
  { 
    id: 49, 
    q: "Which of the following increases the risk of injection in stored procedures?", 
    a: ["Hardcoding values in queries", "Using dynamic SQL based on user input", "Storing stored procedures in multiple databases", "Implementing error handling in the code"], 
    c: 1, 
    exp: "Verified Answer: B. Using dynamic SQL based on user input"
  },
  { 
    id: 50, 
    q: "What is an advantage of validating inputs before using them in stored procedures?", 
    a: ["It improves query execution speed", "It prevents injection attacks by ensuring input integrity", "It avoids redundancy in database schemas", "It allows more detailed error messages"], 
    c: 1, 
    exp: "Verified Answer: B. It prevents injection attacks by ensuring input integrity"
  },

  { 
    id: 51, 
    q: "What is the primary purpose of a firewall in network security?", 
    a: ["To detect and remove viruses", "To monitor and control incoming and outgoing network traffic", "To encrypt sensitive data for storage", "To generate strong passwords for users"], 
    c: 1, 
    exp: "Verified Answer: B. To monitor and control incoming and outgoing network traffic"
  },
  { 
    id: 52, 
    q: "Which type of firewall examines individual packets based on predefined rules?", 
    a: ["Packet-filtering firewall", "Stateful inspection firewall", "Application-level gateway", "Proxy firewall"], 
    c: 0, 
    exp: "Verified Answer: A. Packet-filtering firewall"
  },
  { 
    id: 53, 
    q: "How does a stateful inspection firewall differ from a packet-filtering firewall?", 
    a: ["It monitors the entire state of active connections", "It encrypts all network traffic by default", "It only allows traffic from trusted domains", "It is less secure than packet filtering"], 
    c: 0, 
    exp: "Verified Answer: A. It monitors the entire state of active connections"
  },
  { 
    id: 54, 
    q: "Which firewall type acts as an intermediary between an internal and external network?", 
    a: ["Proxy firewall", "Packet-filtering firewall", "Circuit-level gateway", "Stateless firewall"], 
    c: 0, 
    exp: "Verified Answer: A. Proxy firewall"
  },
  { 
    id: 55, 
    q: "What is a major advantage of using a next-generation firewall (NGFW)?", 
    a: ["Lower hardware requirements", "Integrated deep packet inspection and intrusion prevention capabilities", "Limited visibility into application-level traffic", "Reduced cost of maintenance"], 
    c: 1, 
    exp: "Verified Answer: B. Integrated deep packet inspection and intrusion prevention capabilities"
  },
  { 
    id: 56, 
    q: "Which of the following is a key feature of a host-based firewall?", 
    a: ["Protecting an entire network segment", "Filtering traffic for a specific host or device", "Managing global network security policies", "Encrypting all outgoing emails"], 
    c: 1, 
    exp: "Verified Answer: B. Filtering traffic for a specific host or device"
  },
  { 
    id: 57, 
    q: "What does the 'default deny' rule in firewall configuration imply?", 
    a: ["Allowing all traffic by default and denying specific packets", "Denying all traffic except what is explicitly permitted", "Disabling the firewall temporarily", "Granting access to all internal network users"], 
    c: 1, 
    exp: "Verified Answer: B. Denying all traffic except what is explicitly permitted"
  },
  { 
    id: 58, 
    q: "Which protocol is commonly used for secure communication through firewalls?", 
    a: ["HTTP", "FTP", "HTTPS", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C. HTTPS"
  },
  { 
    id: 59, 
    q: "How can firewalls mitigate Distributed Denial of Service (DDoS) attacks?", 
    a: ["By blocking traffic from malicious IP addresses or limiting rate of requests", "By encrypting all incoming network packets", "By increasing server bandwidth automatically", "By automatically generating new IP addresses"], 
    c: 0, 
    exp: "Verified Answer: A. By blocking traffic from malicious IP addresses or limiting rate of requests"
  },
  { 
    id: 60, 
    q: "What is the role of an Intrusion Detection System (IDS) compared to a firewall?", 
    a: ["An IDS actively blocks malicious traffic", "An IDS monitors and alerts for suspicious activity, while a firewall controls traffic flow", "An IDS encrypts network communications", "An IDS replaces the need for a firewall"], 
    c: 1, 
    exp: "Verified Answer: B. An IDS monitors and alerts for suspicious activity, while a firewall controls traffic flow"
  },
  { 
    id: 61, 
    q: "Which type of IDS looks for patterns or signatures of known attacks?", 
    a: ["Signature-based IDS", "Anomaly-based IDS", "Host-based IDS", "Network-based IDS"], 
    c: 0, 
    exp: "Verified Answer: A. Signature-based IDS"
  },
  { 
    id: 62, 
    q: "How does an anomaly-based IDS detect potential security threats?", 
    a: ["By matching traffic to known attack signatures", "By identifying deviations from established baseline behavior", "By encrypting all sensitive data packets", "By blocking all traffic from external networks"], 
    c: 1, 
    exp: "Verified Answer: B. By identifying deviations from established baseline behavior"
  },
  { 
    id: 63, 
    q: "Where is a network-based IDS (NIDS) typically deployed?", 
    a: ["On individual host devices", "At key points within the network infrastructure to monitor traffic", "Only on mobile devices", "Outside the organization's network perimeter"], 
    c: 1, 
    exp: "Verified Answer: B. At key points within the network infrastructure to monitor traffic"
  },
  { 
    id: 64, 
    q: "What is a limitation of a signature-based IDS?", 
    a: ["It cannot detect unknown or zero-day attacks", "It generates too many false positives", "It requires minimal system resources", "It works only on encrypted traffic"], 
    c: 0, 
    exp: "Verified Answer: A. It cannot detect unknown or zero-day attacks"
  },
  { 
    id: 65, 
    q: "What does an Intrusion Prevention System (IPS) do that an IDS does not?", 
    a: ["Encrypts all network communication", "Actively takes action to block or mitigate detected threats", "Monitors host-based activities only", "Reduces the need for firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Actively takes action to block or mitigate detected threats"
  },
  { 
    id: 66, 
    q: "Which of the following can lead to false positives in an IDS?", 
    a: ["Regular legitimate network activity matching an attack signature", "Complete absence of network traffic", "Encrypting all sensitive user data", "Updating the IDS signature database"], 
    c: 0, 
    exp: "Verified Answer: A. Regular legitimate network activity matching an attack signature"
  },
  { 
    id: 67, 
    q: "Why is it important to regularly update IDS signatures?", 
    a: ["To improve system boot time", "To ensure detection of newly discovered attack patterns", "To reduce network latency", "To simplify firewall configuration"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure detection of newly discovered attack patterns"
  },
  { 
    id: 68, 
    q: "What is a host-based IDS (HIDS) primarily responsible for monitoring?", 
    a: ["Traffic across an entire network segment", "Internal activities and logs on a specific device or host", "Incoming emails for spam content", "External website availability"], 
    c: 1, 
    exp: "Verified Answer: B. Internal activities and logs on a specific device or host"
  },
  { 
    id: 69, 
    q: "How can IDS and firewalls work together for better network security?", 
    a: ["Firewalls can block traffic based on alerts generated by the IDS", "They perform identical functions and can replace each other", "They only work together if they are from the same vendor", "They should be deployed on separate networks for security"], 
    c: 0, 
    exp: "Verified Answer: A. Firewalls can block traffic based on alerts generated by the IDS"
  },
  { 
    id: 70, 
    q: "What is the primary objective of ethical hacking?", 
    a: ["To gain unauthorized access to sensitive data", "To identify and fix security vulnerabilities in systems", "To cause disruption to target organizations", "To steal intellectual property"], 
    c: 1, 
    exp: "Verified Answer: B. To identify and fix security vulnerabilities in systems"
  },
  { 
    id: 71, 
    q: "What does the term 'white-hat hacker' refer to?", 
    a: ["A hacker with malicious intent", "A cybersecurity professional who practices ethical hacking", "An individual who hacks for personal gain", "A hacker who target government systems"], 
    c: 1, 
    exp: "Verified Answer: B. A cybersecurity professional who practices ethical hacking"
  },
  { 
    id: 72, 
    q: "Which phase of ethical hacking involves gathering information about a target system?", 
    a: ["Reconnaissance", "Exploitation", "Maintaining Access", "Reporting"], 
    c: 0, 
    exp: "Verified Answer: A. Reconnaissance"
  },
  { 
    id: 73, 
    q: "What is the purpose of the vulnerability scanning phase in ethical hacking?", 
    a: ["To exploit discovered weaknesses", "To identify potential vulnerabilities in target systems", "To hide the hacker's identity", "To encrypt target system data"], 
    c: 1, 
    exp: "Verified Answer: B. To identify potential vulnerabilities in target systems"
  },
  { 
    id: 74, 
    q: "What does 'penetration testing' (pen testing) typically involve?", 
    a: ["A passive assessment of security policies", "Simulating a real-world cyberattack to evaluate security defenses", "A complete replacement of the network infrastructure", "A background check on all employees"], 
    c: 1, 
    exp: "Verified Answer: B. Simulating a real-world cyberattack to evaluate security defenses"
  },
  { 
    id: 75, 
    q: "In which ethical hacking phase does the hacker attempt to gain access to a system?", 
    a: ["Scanning", "Exploitation", "Reconnaissance", "Enumeration"], 
    c: 1, 
    exp: "Verified Answer: B. Exploitation"
  },
  { 
    id: 76, 
    q: "Why is it important to obtain proper authorization before conducting an ethical hack?", 
    a: ["To avoid being caught by law enforcement", "To ensure the activity is legal and within the scope of the agreement", "To guarantee the hack will be successful", "To simplify the reconnaissance phase"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure the activity is legal and within the scope of the agreement"
  },
  { 
    id: 77, 
    q: "What is the final phase of a typical ethical hacking engagement?", 
    a: ["Scanning", "Exploitation", "Reporting", "Reconnaissance"], 
    c: 2, 
    exp: "Verified Answer: C. Reporting"
  },
  { 
    id: 78, 
    q: "Which type of hacking is conducted by individuals with a political or social agenda?", 
    a: ["White-hat hacking", "Hacktivism", "Corporate espionage", "Script kiddie hacking"], 
    c: 1, 
    exp: "Verified Answer: B. Hacktivism"
  },
  { 
    id: 79, 
    q: "What is a 'zero-day vulnerability'?", 
    a: ["A vulnerability that has been patched for zero days", "A vulnerability unknown to the software vendor and has no patch", "A vulnerability discovered on the first day of the year", "A vulnerability with zero impact on security"], 
    c: 1, 
    exp: "Verified Answer: B. A vulnerability unknown to the software vendor and has no patch"
  },
  { 
    id: 80, 
    q: "What does the CIA triad stand for in information security?", 
    a: ["Confidentiality, Integrity, Availability", "Control, Intelligence, Authorization", "Cryptography, Identification, Authentication", "Compliance, Integrity, Assessment"], 
    c: 0, 
    exp: "Verified Answer: A. Confidentiality, Integrity, Availability"
  },
  { 
    id: 81, 
    q: "Which pillar of the CIA triad ensures that data is not disclosed to unauthorized individuals?", 
    a: ["Confidentiality", "Integrity", "Availability", "Authorization"], 
    c: 0, 
    exp: "Verified Answer: A. Confidentiality"
  },
  { 
    id: 82, 
    q: "What does the Integrity pillar of the CIA triad ensure?", 
    a: ["Data is accessible when needed", "Data is accurate and has not been tampered with", "Data is encrypted at all times", "Only authorized users can delete data"], 
    c: 1, 
    exp: "Verified Answer: B. Data is accurate and has not been tampered with"
  },
  { 
    id: 83, 
    q: "Availability in the CIA triad refers to:", 
    a: ["Data being encrypted during transit", "Data and services being accessible to authorized users when needed", "Ensuring data is stored on multiple servers", "Requiring multi-factor authentication for all users"], 
    c: 1, 
    exp: "Verified Answer: B. Data and services being accessible to authorized users when needed"
  },
  { 
    id: 84, 
    q: "What is an example of an attack on confidentiality?", 
    a: ["A DDoS attack", "Unauthorized access to customer records", "Modifying a website's content", "Deleting system log files"], 
    c: 1, 
    exp: "Verified Answer: B. Unauthorized access to customer records"
  },
  { 
    id: 85, 
    q: "An attack that prevents users from accessing their email is primarily a threat to:", 
    a: ["Confidentiality", "Integrity", "Availability", "Authorization"], 
    c: 2, 
    exp: "Verified Answer: C. Availability"
  },
  { 
    id: 86, 
    q: "Which security measure primarily protects data integrity?", 
    a: ["Encryption", "Digital signatures and hashing", "Passwords", "Firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Digital signatures and hashing"
  },
  { 
    id: 87, 
    q: "What is the primary purpose of using encryption in the CIA triad?", 
    a: ["To ensure availability", "To protect confidentiality", "To maintain data integrity", "To simplify authentication"], 
    c: 1, 
    exp: "Verified Answer: B. To protect confidentiality"
  },
  { 
    id: 88, 
    q: "Why is a balance between all three CIA pillars important?", 
    a: ["Focusing only on availability is always the best approach", "Over-emphasizing one pillar can negatively impact the others", "Only confidentiality and integrity are important", "It is not possible to have all three at once"], 
    c: 1, 
    exp: "Verified Answer: B. Over-emphasizing one pillar can negatively impact the others"
  },
  { 
    id: 89, 
    q: "What is the primary purpose of a virtual private network (VPN)?", 
    a: ["To increase internet speed", "To create a secure, encrypted connection over a public network", "To block ads on websites", "To bypass firewall restrictions"], 
    c: 1, 
    exp: "Verified Answer: B. To create a secure, encrypted connection over a public network"
  },
  { 
    id: 90, 
    q: "What does multifactor authentication (MFA) involve?", 
    a: ["Using multiple passwords for a single account", "Requiring two or more different types of evidence to verify identity", "Changing passwords frequently", "Limiting access to a single device"], 
    c: 1, 
    exp: "Verified Answer: B. Requiring two or more different types of evidence to verify identity"
  },
  { 
    id: 91, 
    q: "What is social engineering?", 
    a: ["Designing software for social networking", "Manipulating people into disclosing sensitive information", "Building secure social media platforms", "Hacking into social media accounts using brute force"], 
    c: 1, 
    exp: "Verified Answer: B. Manipulating people into disclosing sensitive information"
  },
  { 
    id: 92, 
    q: "Which term refers to the process of verifying a user's identity?", 
    a: ["Authentication", "Authorization", "Encryption", "Integrity"], 
    c: 0, 
    exp: "Verified Answer: A. Authentication"
  },
  { 
    id: 93, 
    q: "What is authorization in the context of security?", 
    a: ["Verifying a user's username and password", "Determining what actions or resources a user is permitted to access", "Encrypting sensitive user data", "Monitoring network traffic for suspicious activity"], 
    c: 1, 
    exp: "Verified Answer: B. Determining what actions or resources a user is permitted to access"
  },
  { 
    id: 94, 
    q: "What is a 'honeypot' in cybersecurity?", 
    a: ["A secure server for storing passwords", "A decoy system designed to lure and study hackers", "A type of encryption algorithm", "A tool for generating strong passwords"], 
    c: 1, 
    exp: "Verified Answer: B. A decoy system designed to lure and study hackers"
  },
  { 
    id: 95, 
    q: "What is the primary goal of phishing?", 
    a: ["To distribute malware via emails", "To trick users into disclosing sensitive information like passwords", "To bypass firewall rules", "To study the history of web protocols"], 
    c: 1, 
    exp: "Verified Answer: B. To trick users into disclosing sensitive information like passwords"
  },
  { 
    id: 96, 
    q: "Which security concept involves limiting a user's access only to what is necessary for their job?", 
    a: ["Principle of least privilege", "Separation of duties", "Multi-factor authentication", "Defense in depth"], 
    c: 0, 
    exp: "Verified Answer: A. Principle of least privilege"
  },
  { 
    id: 97, 
    q: "What does 'defense in depth' refer to?", 
    a: ["Using a single, powerful security measure", "Implementing multiple layers of security controls throughout a system", "Focusing only on network perimeter security", "Encrypting all data stored on personal devices"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing multiple layers of security controls throughout a system"
  },
  { 
    id: 98, 
    q: "What is malware?", 
    a: ["Software designed to improve system performance", "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system", "A type of firewall configuration", "A secure way to store user credentials"], 
    c: 1, 
    exp: "Verified Answer: B. Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system"
  },
  { 
    id: 99, 
    q: "Which of the following is a characteristic of a computer virus?", 
    a: ["It can spread and replicate by attaching itself to other programs or files", "It requires user permission to execute", "It only affects servers, not personal computers", "It is always used for ethical purposes"], 
    c: 0, 
    exp: "Verified Answer: A. It can spread and replicate by attaching itself to other programs or files"
  },
  { 
    id: 100, 
    q: "What is the main function of an antivirus program?", 
    a: ["To create backups of system files", "To detect, prevent, and remove malicious software", "To encrypt user communication", "To manage network traffic flow"], 
    c: 1, 
    exp: "Verified Answer: B. To detect, prevent, and remove malicious software"
  },

  { 
    id: 51, 
    q: "What is the primary purpose of a firewall in network security?", 
    a: ["To detect and remove viruses", "To monitor and control incoming and outgoing network traffic", "To encrypt sensitive data for storage", "To generate strong passwords for users"], 
    c: 1, 
    exp: "Verified Answer: B. To monitor and control incoming and outgoing network traffic"
  },
  { 
    id: 52, 
    q: "Which type of firewall examines individual packets based on predefined rules?", 
    a: ["Packet-filtering firewall", "Stateful inspection firewall", "Application-level gateway", "Proxy firewall"], 
    c: 0, 
    exp: "Verified Answer: A. Packet-filtering firewall"
  },
  { 
    id: 53, 
    q: "How does a stateful inspection firewall differ from a packet-filtering firewall?", 
    a: ["It monitors the entire state of active connections", "It encrypts all network traffic by default", "It only allows traffic from trusted domains", "It is less secure than packet filtering"], 
    c: 0, 
    exp: "Verified Answer: A. It monitors the entire state of active connections"
  },
  { 
    id: 54, 
    q: "Which firewall type acts as an intermediary between an internal and external network?", 
    a: ["Proxy firewall", "Packet-filtering firewall", "Circuit-level gateway", "Stateless firewall"], 
    c: 0, 
    exp: "Verified Answer: A. Proxy firewall"
  },
  { 
    id: 55, 
    q: "What is a major advantage of using a next-generation firewall (NGFW)?", 
    a: ["Lower hardware requirements", "Integrated deep packet inspection and intrusion prevention capabilities", "Limited visibility into application-level traffic", "Reduced cost of maintenance"], 
    c: 1, 
    exp: "Verified Answer: B. Integrated deep packet inspection and intrusion prevention capabilities"
  },
  { 
    id: 56, 
    q: "Which of the following is a key feature of a host-based firewall?", 
    a: ["Protecting an entire network segment", "Filtering traffic for a specific host or device", "Managing global network security policies", "Encrypting all outgoing emails"], 
    c: 1, 
    exp: "Verified Answer: B. Filtering traffic for a specific host or device"
  },
  { 
    id: 57, 
    q: "What does the 'default deny' rule in firewall configuration imply?", 
    a: ["Allowing all traffic by default and denying specific packets", "Denying all traffic except what is explicitly permitted", "Disabling the firewall temporarily", "Granting access to all internal network users"], 
    c: 1, 
    exp: "Verified Answer: B. Denying all traffic except what is explicitly permitted"
  },
  { 
    id: 58, 
    q: "Which protocol is commonly used for secure communication through firewalls?", 
    a: ["HTTP", "FTP", "HTTPS", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C. HTTPS"
  },
  { 
    id: 59, 
    q: "How can firewalls mitigate Distributed Denial of Service (DDoS) attacks?", 
    a: ["By blocking traffic from malicious IP addresses or limiting rate of requests", "By encrypting all incoming network packets", "By increasing server bandwidth automatically", "By automatically generating new IP addresses"], 
    c: 0, 
    exp: "Verified Answer: A. By blocking traffic from malicious IP addresses or limiting rate of requests"
  },
  { 
    id: 60, 
    q: "What is the role of an Intrusion Detection System (IDS) compared to a firewall?", 
    a: ["An IDS actively blocks malicious traffic", "An IDS monitors and alerts for suspicious activity, while a firewall controls traffic flow", "An IDS encrypts network communications", "An IDS replaces the need for a firewall"], 
    c: 1, 
    exp: "Verified Answer: B. An IDS monitors and alerts for suspicious activity, while a firewall controls traffic flow"
  },
  { 
    id: 61, 
    q: "Which type of IDS looks for patterns or signatures of known attacks?", 
    a: ["Signature-based IDS", "Anomaly-based IDS", "Host-based IDS", "Network-based IDS"], 
    c: 0, 
    exp: "Verified Answer: A. Signature-based IDS"
  },
  { 
    id: 62, 
    q: "How does an anomaly-based IDS detect potential security threats?", 
    a: ["By matching traffic to known attack signatures", "By identifying deviations from established baseline behavior", "By encrypting all sensitive data packets", "By blocking all traffic from external networks"], 
    c: 1, 
    exp: "Verified Answer: B. By identifying deviations from established baseline behavior"
  },
  { 
    id: 63, 
    q: "Where is a network-based IDS (NIDS) typically deployed?", 
    a: ["On individual host devices", "At key points within the network infrastructure to monitor traffic", "Only on mobile devices", "Outside the organization's network perimeter"], 
    c: 1, 
    exp: "Verified Answer: B. At key points within the network infrastructure to monitor traffic"
  },
  { 
    id: 64, 
    q: "What is a limitation of a signature-based IDS?", 
    a: ["It cannot detect unknown or zero-day attacks", "It generates too many false positives", "It requires minimal system resources", "It works only on encrypted traffic"], 
    c: 0, 
    exp: "Verified Answer: A. It cannot detect unknown or zero-day attacks"
  },
  { 
    id: 65, 
    q: "What does an Intrusion Prevention System (IPS) do that an IDS does not?", 
    a: ["Encrypts all network communication", "Actively takes action to block or mitigate detected threats", "Monitors host-based activities only", "Reduces the need for firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Actively takes action to block or mitigate detected threats"
  },
  { 
    id: 66, 
    q: "Which of the following can lead to false positives in an IDS?", 
    a: ["Regular legitimate network activity matching an attack signature", "Complete absence of network traffic", "Encrypting all sensitive user data", "Updating the IDS signature database"], 
    c: 0, 
    exp: "Verified Answer: A. Regular legitimate network activity matching an attack signature"
  },
  { 
    id: 67, 
    q: "Why is it important to regularly update IDS signatures?", 
    a: ["To improve system boot time", "To ensure detection of newly discovered attack patterns", "To reduce network latency", "To simplify firewall configuration"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure detection of newly discovered attack patterns"
  },
  { 
    id: 68, 
    q: "What is a host-based IDS (HIDS) primarily responsible for monitoring?", 
    a: ["Traffic across an entire network segment", "Internal activities and logs on a specific device or host", "Incoming emails for spam content", "External website availability"], 
    c: 1, 
    exp: "Verified Answer: B. Internal activities and logs on a specific device or host"
  },
  { 
    id: 69, 
    q: "How can IDS and firewalls work together for better network security?", 
    a: ["Firewalls can block traffic based on alerts generated by the IDS", "They perform identical functions and can replace each other", "They only work together if they are from the same vendor", "They should be deployed on separate networks for security"], 
    c: 0, 
    exp: "Verified Answer: A. Firewalls can block traffic based on alerts generated by the IDS"
  },
  { 
    id: 70, 
    q: "What is the primary objective of ethical hacking?", 
    a: ["To gain unauthorized access to sensitive data", "To identify and fix security vulnerabilities in systems", "To cause disruption to target organizations", "To steal intellectual property"], 
    c: 1, 
    exp: "Verified Answer: B. To identify and fix security vulnerabilities in systems"
  },
  { 
    id: 71, 
    q: "What does the term 'white-hat hacker' refer to?", 
    a: ["A hacker with malicious intent", "A cybersecurity professional who practices ethical hacking", "An individual who hacks for personal gain", "A hacker who target government systems"], 
    c: 1, 
    exp: "Verified Answer: B. A cybersecurity professional who practices ethical hacking"
  },
  { 
    id: 72, 
    q: "Which phase of ethical hacking involves gathering information about a target system?", 
    a: ["Reconnaissance", "Exploitation", "Maintaining Access", "Reporting"], 
    c: 0, 
    exp: "Verified Answer: A. Reconnaissance"
  },
  { 
    id: 73, 
    q: "What is the purpose of the vulnerability scanning phase in ethical hacking?", 
    a: ["To exploit discovered weaknesses", "To identify potential vulnerabilities in target systems", "To hide the hacker's identity", "To encrypt target system data"], 
    c: 1, 
    exp: "Verified Answer: B. To identify potential vulnerabilities in target systems"
  },
  { 
    id: 74, 
    q: "What does 'penetration testing' (pen testing) typically involve?", 
    a: ["A passive assessment of security policies", "Simulating a real-world cyberattack to evaluate security defenses", "A complete replacement of the network infrastructure", "A background check on all employees"], 
    c: 1, 
    exp: "Verified Answer: B. Simulating a real-world cyberattack to evaluate security defenses"
  },
  { 
    id: 75, 
    q: "In which ethical hacking phase does the hacker attempt to gain access to a system?", 
    a: ["Scanning", "Exploitation", "Reconnaissance", "Enumeration"], 
    c: 1, 
    exp: "Verified Answer: B. Exploitation"
  },
  { 
    id: 76, 
    q: "Why is it important to obtain proper authorization before conducting an ethical hack?", 
    a: ["To avoid being caught by law enforcement", "To ensure the activity is legal and within the scope of the agreement", "To guarantee the hack will be successful", "To simplify the reconnaissance phase"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure the activity is legal and within the scope of the agreement"
  },
  { 
    id: 77, 
    q: "What is the final phase of a typical ethical hacking engagement?", 
    a: ["Scanning", "Exploitation", "Reporting", "Reconnaissance"], 
    c: 2, 
    exp: "Verified Answer: C. Reporting"
  },
  { 
    id: 78, 
    q: "Which type of hacking is conducted by individuals with a political or social agenda?", 
    a: ["White-hat hacking", "Hacktivism", "Corporate espionage", "Script kiddie hacking"], 
    c: 1, 
    exp: "Verified Answer: B. Hacktivism"
  },
  { 
    id: 79, 
    q: "What is a 'zero-day vulnerability'?", 
    a: ["A vulnerability that has been patched for zero days", "A vulnerability unknown to the software vendor and has no patch", "A vulnerability discovered on the first day of the year", "A vulnerability with zero impact on security"], 
    c: 1, 
    exp: "Verified Answer: B. A vulnerability unknown to the software vendor and has no patch"
  },
  { 
    id: 80, 
    q: "What does the CIA triad stand for in information security?", 
    a: ["Confidentiality, Integrity, Availability", "Control, Intelligence, Authorization", "Cryptography, Identification, Authentication", "Compliance, Integrity, Assessment"], 
    c: 0, 
    exp: "Verified Answer: A. Confidentiality, Integrity, Availability"
  },
  { 
    id: 81, 
    q: "Which pillar of the CIA triad ensures that data is not disclosed to unauthorized individuals?", 
    a: ["Confidentiality", "Integrity", "Availability", "Authorization"], 
    c: 0, 
    exp: "Verified Answer: A. Confidentiality"
  },
  { 
    id: 82, 
    q: "What does the Integrity pillar of the CIA triad ensure?", 
    a: ["Data is accessible when needed", "Data is accurate and has not been tampered with", "Data is encrypted at all times", "Only authorized users can delete data"], 
    c: 1, 
    exp: "Verified Answer: B. Data is accurate and has not been tampered with"
  },
  { 
    id: 83, 
    q: "Availability in the CIA triad refers to:", 
    a: ["Data being encrypted during transit", "Data and services being accessible to authorized users when needed", "Ensuring data is stored on multiple servers", "Requiring multi-factor authentication for all users"], 
    c: 1, 
    exp: "Verified Answer: B. Data and services being accessible to authorized users when needed"
  },
  { 
    id: 84, 
    q: "What is an example of an attack on confidentiality?", 
    a: ["A DDoS attack", "Unauthorized access to customer records", "Modifying a website's content", "Deleting system log files"], 
    c: 1, 
    exp: "Verified Answer: B. Unauthorized access to customer records"
  },
  { 
    id: 85, 
    q: "An attack that prevents users from accessing their email is primarily a threat to:", 
    a: ["Confidentiality", "Integrity", "Availability", "Authorization"], 
    c: 2, 
    exp: "Verified Answer: C. Availability"
  },
  { 
    id: 86, 
    q: "Which security measure primarily protects data integrity?", 
    a: ["Encryption", "Digital signatures and hashing", "Passwords", "Firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Digital signatures and hashing"
  },
  { 
    id: 87, 
    q: "What is the primary purpose of using encryption in the CIA triad?", 
    a: ["To ensure availability", "To protect confidentiality", "To maintain data integrity", "To simplify authentication"], 
    c: 1, 
    exp: "Verified Answer: B. To protect confidentiality"
  },
  { 
    id: 88, 
    q: "Why is a balance between all three CIA pillars important?", 
    a: ["Focusing only on availability is always the best approach", "Over-emphasizing one pillar can negatively impact the others", "Only confidentiality and integrity are important", "It is not possible to have all three at once"], 
    c: 1, 
    exp: "Verified Answer: B. Over-emphasizing one pillar can negatively impact the others"
  },
  { 
    id: 89, 
    q: "What is the primary purpose of a virtual private network (VPN)?", 
    a: ["To increase internet speed", "To create a secure, encrypted connection over a public network", "To block ads on websites", "To bypass firewall restrictions"], 
    c: 1, 
    exp: "Verified Answer: B. To create a secure, encrypted connection over a public network"
  },
  { 
    id: 90, 
    q: "What does multifactor authentication (MFA) involve?", 
    a: ["Using multiple passwords for a single account", "Requiring two or more different types of evidence to verify identity", "Changing passwords frequently", "Limiting access to a single device"], 
    c: 1, 
    exp: "Verified Answer: B. Requiring two or more different types of evidence to verify identity"
  },
  { 
    id: 91, 
    q: "What is social engineering?", 
    a: ["Designing software for social networking", "Manipulating people into disclosing sensitive information", "Building secure social media platforms", "Hacking into social media accounts using brute force"], 
    c: 1, 
    exp: "Verified Answer: B. Manipulating people into disclosing sensitive information"
  },
  { 
    id: 92, 
    q: "Which term refers to the process of verifying a user's identity?", 
    a: ["Authentication", "Authorization", "Encryption", "Integrity"], 
    c: 0, 
    exp: "Verified Answer: A. Authentication"
  },
  { 
    id: 93, 
    q: "What is authorization in the context of security?", 
    a: ["Verifying a user's username and password", "Determining what actions or resources a user is permitted to access", "Encrypting sensitive user data", "Monitoring network traffic for suspicious activity"], 
    c: 1, 
    exp: "Verified Answer: B. Determining what actions or resources a user is permitted to access"
  },
  { 
    id: 94, 
    q: "What is a 'honeypot' in cybersecurity?", 
    a: ["A secure server for storing passwords", "A decoy system designed to lure and study hackers", "A type of encryption algorithm", "A tool for generating strong passwords"], 
    c: 1, 
    exp: "Verified Answer: B. A decoy system designed to lure and study hackers"
  },
  { 
    id: 95, 
    q: "What is the primary goal of phishing?", 
    a: ["To distribute malware via emails", "To trick users into disclosing sensitive information like passwords", "To bypass firewall rules", "To study the history of web protocols"], 
    c: 1, 
    exp: "Verified Answer: B. To trick users into disclosing sensitive information like passwords"
  },
  { 
    id: 96, 
    q: "Which security concept involves limiting a user's access only to what is necessary for their job?", 
    a: ["Principle of least privilege", "Separation of duties", "Multi-factor authentication", "Defense in depth"], 
    c: 0, 
    exp: "Verified Answer: A. Principle of least privilege"
  },
  { 
    id: 97, 
    q: "What does 'defense in depth' refer to?", 
    a: ["Using a single, powerful security measure", "Implementing multiple layers of security controls throughout a system", "Focusing only on network perimeter security", "Encrypting all data stored on personal devices"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing multiple layers of security controls throughout a system"
  },
  { 
    id: 98, 
    q: "What is malware?", 
    a: ["Software designed to improve system performance", "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system", "A type of firewall configuration", "A secure way to store user credentials"], 
    c: 1, 
    exp: "Verified Answer: B. Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system"
  },
  { 
    id: 99, 
    q: "Which of the following is a characteristic of a computer virus?", 
    a: ["It can spread and replicate by attaching itself to other programs or files", "It requires user permission to execute", "It only affects servers, not personal computers", "It is always used for ethical purposes"], 
    c: 0, 
    exp: "Verified Answer: A. It can spread and replicate by attaching itself to other programs or files"
  },
  { 
    id: 100, 
    q: "What is the main function of an antivirus program?", 
    a: ["To create backups of system files", "To detect, prevent, and remove malicious software", "To encrypt user communication", "To manage network traffic flow"], 
    c: 1, 
    exp: "Verified Answer: B. To detect, prevent, and remove malicious software"
  },
  { 
    id: 100, 
    q: "Which of the following attack types relies on amplifying small requests into larger responses?", 
    a: ["DoS", "DDoS", "DRDoS", "Phishing"], 
    c: 2, 
    exp: "Verified Answer: C. DRDoS"
  },
  { 
    id: 101, 
    q: "Which protocol is commonly exploited in DRDoS attacks due to its ability to generate amplified responses?", 
    a: ["HTTPS", "DNS", "FTP", "SMTP"], 
    c: 1, 
    exp: "Verified Answer: B. DNS"
  },
  { 
    id: 102, 
    q: "What is the primary purpose of Burp Suite in application security?", 
    a: ["Optimizing application performance", "Identifying and exploiting vulnerabilities in web applications", "Designing application interfaces", "Generating encryption keys"], 
    c: 1, 
    exp: "Verified Answer: B. Identifying and exploiting vulnerabilities in web applications"
  },
  { 
    id: 103, 
    q: "Which of the following is a feature of Burp Suite’ s Repeater tool?", 
    a: ["Automated vulnerability scanning", "Manually modifying and re-sending HTTP requests", "Performing load testing", "Generating cryptographic keys"], 
    c: 1, 
    exp: "Verified Answer: B. Manually modifying and re-sending HTTP requests"
  },
  { 
    id: 104, 
    q: "What does the Burp Suite Intruder tool specialize in?", 
    a: ["Automated crawling of web pages", "Performing brute force attacks and enumerating parameters", "Generating security reports", "Debugging web applications"], 
    c: 1, 
    exp: "Verified Answer: B. Performing brute force attacks and enumerating parameters"
  },
  { 
    id: 105, 
    q: "How does the Burp Suite Proxy tool assist in security testing?", 
    a: ["By automating vulnerability scans", "By intercepting and modifying HTTP/S traffic between the client and server", "By generating secure cryptographic tokens", "By simulating denial-of-service attacks"], 
    c: 1, 
    exp: "Verified Answer: B. By intercepting and modifying HTTP/S traffic between the client and server"
  },
  { 
    id: 106, 
    q: "Which edition of Burp Suite includes the Scanner tool for automated vulnerability detection?", 
    a: ["Community Edition", "Professional Edition", "Free Trial Edition", "Developer Edition"], 
    c: 1, 
    exp: "Verified Answer: B. Professional Edition"
  },
  { 
    id: 107, 
    q: "Which of the following tools is commonly used to identify vulnerabilities in web applications?", 
    a: ["Burp Suite", "Selenium", "Jenkins", "Visual Studio"], 
    c: 0, 
    exp: "Verified Answer: A. Burp Suite"
  },
  { 
    id: 108, 
    q: "What is the primary function of a vulnerability scanner like OWASP ZAP?", 
    a: ["Automating software builds", "Scanning web applications for security vulnerabilities", "Testing application performance", "Managing application source code"], 
    c: 1, 
    exp: "Verified Answer: B. Scanning web applications for security vulnerabilities"
  },
  { 
    id: 109, 
    q: "Which tool is specifically designed to identify outdated and vulnerable libraries in web applications?", 
    a: ["Dependency-Check", "Metasploit", "Kali Linux", "Postman"], 
    c: 0, 
    exp: "Verified Answer: A. Dependency-Check"
  },
  { 
    id: 110, 
    q: "How does the Acunetix tool assist in web application security?", 
    a: ["By automating code refactoring", "By providing detailed reports of discovered vulnerabilities and remediation steps", "By simulating a DDoS attack", "By managing application versioning"], 
    c: 1, 
    exp: "Verified Answer: B. By providing detailed reports of discovered vulnerabilities and remediation steps"
  },
  { 
    id: 111, 
    q: "What is a key feature of the Nessus tool in web application security?", 
    a: ["Simulating phishing attacks", "Conducting network scans to detect vulnerabilities", "Generating application mockups", "Automating performance optimizations"], 
    c: 1, 
    exp: "Verified Answer: B. Conducting network scans to detect vulnerabilities"
  },
  { 
    id: 112, 
    q: "What is the first step in configuring Burp Suite with a web browser?", 
    a: ["Installing browser extensions", "Setting up Burp’ s Proxy listener", "Running a vulnerability scan", "Updating browser cookies"], 
    c: 1, 
    exp: "Verified Answer: B. Setting up Burp’ s Proxy listener"
  },
  { 
    id: 113, 
    q: "Which browser setting needs to be changed to route traffic through Burp Suite?", 
    a: ["Proxy settings", "Security settings", "Display settings", "Performance settings"], 
    c: 0, 
    exp: "Verified Answer: A. Proxy settings"
  },
  { 
    id: 114, 
    q: "What is the default IP address and port used by Burp Suite Proxy?", 
    a: ["127.0.0.1:8080", "192.168.1.1:80", "10.0.0.1:443", "localhost:3000"], 
    c: 0, 
    exp: "Verified Answer: A. 127.0.0.1:8080"
  },
  { 
    id: 115, 
    q: "Which certificate is required to intercept HTTPS traffic using Burp Suite?", 
    a: ["Burp CA certificate", "SSL/TLS server certificate", "X.509 certificate", "PKI certificate"], 
    c: 0, 
    exp: "Verified Answer: A. Burp CA certificate"
  },
  { 
    id: 116, 
    q: "After configuring a browser to use Burp Suite, how can you verify that the setup is working correctly?", 
    a: ["By opening a random web page", "By checking the intercepted requests in Burp’ s Proxy tab", "By scanning the network with a vulnerability scanner", "By analyzing the browser logs"], 
    c: 1, 
    exp: "Verified Answer: B. By checking the intercepted requests in Burp’ s Proxy tab"
  },
  { 
    id: 117, 
    q: "Which Burp Suite tool is primarily used for automated scanning of web applications?", 
    a: ["Proxy", "Repeater", "Scanner", "Intruder"], 
    c: 2, 
    exp: "Verified Answer: C. Scanner"
  },
  { 
    id: 118, 
    q: "Before running a scan with Burp Suite, what must be configured to ensure accurate results?", 
    a: ["User interface theme", "Scope of the scan", "Web application layout", "Default network settings"], 
    c: 1, 
    exp: "Verified Answer: B. Scope of the scan"
  },
  { 
    id: 119, 
    q: "How does Burp Suite classify identified vulnerabilities in a scan report?", 
    a: ["By alphabetical order", "By risk severity (e.g., High, Medium, Low)", "By timestamp", "By IP address"], 
    c: 1, 
    exp: "Verified Answer: B. By risk severity (e.g., High, Medium, Low)"
  },
  { 
    id: 120, 
    q: "Which Burp Suite feature allows you to view details of vulnerabilities found during a scan?", 
    a: ["Intruder tab", "Target tab", "Issues tab", "Decoder tab"], 
    c: 2, 
    exp: "Verified Answer: C. Issues tab"
  },
  { 
    id: 121, 
    q: "What is one of the advantages of using Burp Suite’ s active scanning mode?", 
    a: ["It passively observes traffic without sending additional requests", "It tests for vulnerabilities by actively interacting with the web application", "It performs vulnerability scans without requiring configuration", "It automatically generates web application documentation"], 
    c: 1, 
    exp: "Verified Answer: B. It tests for vulnerabilities by actively interacting with the web application"
  },
  { 
    id: 122, 
    q: "Which type of security vulnerability can Burp Suite's scanner detect by sending specially crafted SQL queries?", 
    a: ["Cross-Site Scripting (XSS)", "SQL Injection", "Broken Access Control", "Cross-Site Request Forgery (CSRF)"], 
    c: 1, 
    exp: "Verified Answer: B. SQL Injection"
  },
  { 
    id: 123, 
    q: "What type of vulnerability can Burp Suite detect by analyzing how an application reflects user input into its output?", 
    a: ["Command Injection", "Cross-Site Scripting (XSS)", "Insecure Deserialization", "Directory Traversal"], 
    c: 1, 
    exp: "Verified Answer: B. Cross-Site Scripting (XSS)"
  },
  { 
    id: 124, 
    q: "How does Burp Suite’ s scanner identify insecure direct object reference (IDOR) vulnerabilities?", 
    a: ["By analyzing server -side logic through source code", "By modifying parameter values to access unauthorized resources", "By performing brute force attacks on endpoints", "By sending malicious files to the server"], 
    c: 1, 
    exp: "Verified Answer: B. By modifying parameter values to access unauthorized resources"
  },
  { 
    id: 125, 
    q: "What kind of security risk can Burp Suite's scanner identify when sensitive data is transmitted over an insecure channel?", 
    a: ["Misconfigured CORS", "Insecure Communication", "Cross-Site Scripting (XSS)", "Command Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Insecure Communication"
  },
  { 
    id: 126, 
    q: "When scanning for directory traversal vulnerabilities, what type of payload does Burp Suite send to test for this issue?", 
    a: ["JavaScript snippets", "Encoded path traversal sequences (e.g., ../../../etc/passwd)", "SQL queries", "Base64-encoded payloads"], 
    c: 1, 
    exp: "Verified Answer: B. Encoded path traversal sequences (e.g., ../../../etc/passwd)"
  },
  { 
    id: 127, 
    q: "You are testing a web application using Burp Suite. The application redirects users to a login page after a failed login attempt. Which Burp Suite tool can you use to automate testing for valid credentials?", 
    a: ["Proxy", "Scanner", "Repeater", "Intruder"], 
    c: 3, 
    exp: "Verified Answer: D. Intruder"
  },
  { 
    id: 128, 
    q: "During a vulnerability assessment, you notice that a web application reflects your input in the response body . Using Burp Suite, which tool would help you confirm if this is a Cross-Site Scripting (XSS) vulnerability?", 
    a: ["Intruder", "Repeater", "Decoder", "Scanner"], 
    c: 1, 
    exp: "Verified Answer: B. Repeater"
  },
  { 
    id: 129, 
    q: "While testing an API endpoint, you notice the server responds with a 403 Forbidden error when an unauthorized request is made. How can Burp Suite’ s Intruder help you test for IDOR (Insecure Direct Object Reference)?", 
    a: ["By sending random strings in the request payload", "By changing object identifiers systematically to access restricted data", "By encrypting the request headers", "By bypassing authentication through a proxy"], 
    c: 1, 
    exp: "Verified Answer: B. By changing object identifiers systematically to access restricted data"
  },
  { 
    id: 130, 
    q: "You need to test the security of a file upload functionality in a web application. Which Burp Suite feature would help you test for vulnerabilities like arbitrary file uploads?", 
    a: ["Repeater", "Intruder", "Scanner", "Decoder"], 
    c: 0, 
    exp: "Verified Answer: A. Repeater"
  },
  { 
    id: 131, 
    q: "While testing a web application, you discover that a sensitive cookie is being transmitted without the Secure or HttpOnly attributes. Which Burp Suite tool would you use to confirm the vulnerability and suggest remediation?", 
    a: ["Decoder", "Repeater", "Scanner", "Extender"], 
    c: 2, 
    exp: "Verified Answer: C. Scanner"
  },
  { 
    id: 132, 
    q: "Which of the following is considered a critical web application security risk?", 
    a: ["Broken Authentication", "Properly configured firewalls", "Efficient session handling", "Optimized database queries"], 
    c: 0, 
    exp: "Verified Answer: A. Broken Authentication"
  },
  { 
    id: 133, 
    q: "What is the primary cause of Sensitive Data Exposure in web applications?", 
    a: ["Lack of data encryption during transit or at rest", "Usage of multi-factor authentication", "Restricting user permissions", "Applying strict firewall rules"], 
    c: 0, 
    exp: "Verified Answer: A. Lack of data encryption during transit or at rest"
  },
  { 
    id: 134, 
    q: "What is the primary defense against Cross-Site Request Forgery (CSRF) attacks?", 
    a: ["Using CSRF tokens in forms", "Disabling cookies in the application", "Encrypting all user data", "Using strong passwords"], 
    c: 0, 
    exp: "Verified Answer: A. Using CSRF tokens in forms"
  },
  { 
    id: 135, 
    q: "Which OWASP category includes risks related to poor API security?", 
    a: ["A01: Broken Access Control", "A05: Security Misconfiguration", "A09: Security Logging and Monitoring Failures", "A10: Server -Side Request Forgery"], 
    c: 1, 
    exp: "Verified Answer: B. A05: Security Misconfiguration"
  },
  { 
    id: 136, 
    q: "How can developers mitigate the risk of Injection attacks in web applications?", 
    a: ["Use input validation and parameterized queries", "Store credentials in plain text", "Disable HTTPS on sensitive pages", "Use default configurations for the application"], 
    c: 0, 
    exp: "Verified Answer: A. Use input validation and parameterized queries"
  },
  { 
    id: 137, 
    q: "Which of the following best describes an application security risk?", 
    a: ["A potential weakness in an application that attackers can exploit", "A security feature implemented in an application", "The process of logging user activity in an application", "Ensuring high availability of the application"], 
    c: 0, 
    exp: "Verified Answer: A. A potential weakness in an application that attackers can exploit"
  },
  { 
    id: 138, 
    q: "What is the most effective way to identify application security risks during development?", 
    a: ["Ignoring errors during coding", "Conducting regular security testing, such as penetration testing", "Using default configurations for all components", "Relying solely on user feedback for vulnerabilities"], 
    c: 1, 
    exp: "Verified Answer: B. Conducting regular security testing, such as penetration testing"
  },
  { 
    id: 139, 
    q: "What is a key indicator of Broken Access Control in an application?", 
    a: ["Users can access features or data they are not authorized to use", "The application uses HTTPS for data transfer", "The application logs user actions properly", "All input fields are sanitized"], 
    c: 0, 
    exp: "Verified Answer: A. Users can access features or data they are not authorized to use"
  },
  { 
    id: 140, 
    q: "How can developers identify potential security misconfigurations?", 
    a: ["By reviewing default configurations of frameworks and libraries", "By enabling all possible features of the application", "By ignoring outdated dependencies", "By avoiding regular updates"], 
    c: 0, 
    exp: "Verified Answer: A. By reviewing default configurations of frameworks and libraries"
  },
  { 
    id: 141, 
    q: "What tool can be used to identify vulnerabilities like SQL injection or Cross-Site Scripting in an application?", 
    a: ["Web Application Firewall (WAF)", "Vulnerability Scanners (e.g., OWASP ZAP, Burp Suite)", "Load Balancer", "API Gateway"], 
    c: 1, 
    exp: "Verified Answer: B. Vulnerability Scanners (e.g., OWASP ZAP, Burp Suite)"
  },
  { 
    id: 142, 
    q: "Which OWASP Top 10 category does Sensitive Data Exposure belong to?", 
    a: ["A01: Broken Access Control", "A02: Cryptographic Failures", "A04: Insecure Design", "A07: Identification and Authentication Failures"], 
    c: 1, 
    exp: "Verified Answer: B. A02: Cryptographic Failures"
  },
  { 
    id: 143, 
    q: "What is a primary risk if input validation is not properly implemented in a web application?", 
    a: ["Reduced application performance", "Vulnerability to Injection attacks", "Improved user experience", "Enhanced data integrity"], 
    c: 1, 
    exp: "Verified Answer: B. Vulnerability to Injection attacks"
  },
  { 
    id: 144, 
    q: "Which type of application security risk involves exploiting weak session management?", 
    a: ["SQL Injection", "Cross-Site Request Forgery (CSRF)", "Session Hijacking", "Buffer Overflow"], 
    c: 2, 
    exp: "Verified Answer: C. Session Hijacking"
  },
  { 
    id: 145, 
    q: "What is the primary focus of the OWASP A03: Injection risk?", 
    a: ["Misconfigurations in the application", "Execution of malicious commands due to untrusted input", "Lack of encryption for sensitive data", "Unauthorized file inclusion"], 
    c: 1, 
    exp: "Verified Answer: B. Execution of malicious commands due to untrusted input"
  },
  { 
    id: 146, 
    q: "Why is it important to regularly update third-party libraries and frameworks used in an application?", 
    a: ["To enhance application aesthetics", "To address known vulnerabilities and security patches", "To reduce code complexity", "To enable faster application startup"], 
    c: 1, 
    exp: "Verified Answer: B. To address known vulnerabilities and security patches"
  },
  { 
    id: 147, 
    q: "What is the primary purpose of Threat Risk Modeling in application security?", 
    a: ["To improve application performance", "To identify , prioritize, and mitigate potential security threats", "To design application interfaces", "To perform code optimization"], 
    c: 1, 
    exp: "Verified Answer: B. To identify , prioritize, and mitigate potential security threats"
  },
  { 
    id: 148, 
    q: "Which of the following is a commonly used framework for Threat Risk Modeling?", 
    a: ["STRIDE", "OAuth", "TLS", "SAML"], 
    c: 0, 
    exp: "Verified Answer: A. STRIDE"
  },
  { 
    id: 149, 
    q: "In the STRIDE model, what does the “I” stand for?", 
    a: ["Injection", "Information Disclosure", "Input Validation", "Integrity"], 
    c: 1, 
    exp: "Verified Answer: B. Information Disclosure"
  },
  { 
    id: 150, 
    q: "What is a key step in conducting a Threat Risk Modeling process?", 
    a: ["Prioritizing threats based on their likelihood and impact", "Adding new features to the application", "Ignoring low-risk threats", "Eliminating the need for penetration testing"], 
    c: 0, 
    exp: "Verified Answer: A. Prioritizing threats based on their likelihood and impact"
  },
  { 
    id: 151, 
    q: "Which of the following is a benefit of Threat Risk Modeling?", 
    a: ["It guarantees 100% security for the application", "It identifies and mitigates potential threats early in the development lifecycle", "It removes the need for security testing", "It increases application runtime performance"], 
    c: 1, 
    exp: "Verified Answer: B. It identifies and mitigates potential threats early in the development lifecycle"
  },
  { 
    id: 152, 
    q: "Which HTTP field is used to specify the internet host and port number of the requested resource?", 
    a: ["Host", "Referer", "Content-Type", "User-Agent"], 
    c: 0, 
    exp: "Verified Answer: A. Host"
  },
  { 
    id: 153, 
    q: "What is the purpose of the HTTP Content-Type field?", 
    a: ["To indicate the length of the request body", "To specify the media type of the resource", "To authenticate the user", "To define caching policies"], 
    c: 1, 
    exp: "Verified Answer: B. To specify the media type of the resource"
  },
  { 
    id: 154, 
    q: "Which HTTP header is used to allow websites to prevent their content from being embedded in frames?", 
    a: ["X-Frame-Options", "Cache-Control", "Content-Disposition", "X-Content-Type-Options"], 
    c: 0, 
    exp: "Verified Answer: A. X-Frame-Options"
  },
  { 
    id: 155, 
    q: "What does the HTTP User-Agent field typically contain?", 
    a: ["The client’s IP address", "Information about the client’s browser or software", "The server’s response time", "A session ID"], 
    c: 1, 
    exp: "Verified Answer: B. Information about the client’s browser or software"
  },
  { 
    id: 156, 
    q: "Which HTTP field is used to specify the caching behavior of responses?", 
    a: ["Cache-Control", "Accept-Encoding", "Transfer-Encoding", "Connection"], 
    c: 0, 
    exp: "Verified Answer: A. Cache-Control"
  },
  { 
    id: 157, 
    q: "What is the function of the HTTP Referer field?", 
    a: ["To identify the IP address of the server", "To provide the URL of the page that linked to the resource being requested", "To specify the content length of the request body", "To indicate the preferred language of the response"], 
    c: 1, 
    exp: "Verified Answer: B. To provide the URL of the page that linked to the resource being requested"
  },
  { 
    id: 158, 
    q: "Which HTTP field is used to specify the preferred languages of the client?", 
    a: ["Accept-Language", "Content-Language", "Content-Type", "Accept-Encoding"], 
    c: 0, 
    exp: "Verified Answer: A. Accept-Language"
  },
  { 
    id: 159, 
    q: "What is the purpose of the HTTP Authorization field?", 
    a: ["To send authentication credentials to the server", "To specify the length of the content body", "To define the type of request being made", "To control the caching behavior"], 
    c: 0, 
    exp: "Verified Answer: A. To send authentication credentials to the server"
  },
  { 
    id: 160, 
    q: "Which HTTP header is used to compress the response data?", 
    a: ["Content-Encoding", "Accept-Encoding", "Transfer-Encoding", "Content-Type"], 
    c: 0, 
    exp: "Verified Answer: A. Content-Encoding"
  },
  { 
    id: 161, 
    q: "Which HTTP field is used to define a request's expected response format?", 
    a: ["Accept", "Content-Type", "Authorization", "Host"], 
    c: 0, 
    exp: "Verified Answer: A. Accept"
  },
  { 
    id: 162, 
    q: "Which Burp Suite tool is best suited for extracting sensitive data from intercepted HTTP responses?", 
    a: ["Proxy", "Repeater", "Intruder", "Decoder"], 
    c: 0, 
    exp: "Verified Answer: A. Proxy"
  },
  { 
    id: 163, 
    q: "How can Burp Suite’s Intruder be used for data extraction?", 
    a: ["By brute-forcing login pages to gain unauthorized access", "By sending customized requests to extract data systematically", "By encoding intercepted data for secure storage", "By automatically decrypting encrypted responses"], 
    c: 1, 
    exp: "Verified Answer: B. By sending customized requests to extract data systematically"
  },
  { 
    id: 164, 
    q: "What feature in Burp Suite allows you to identify sensitive data such as credit card numbers in HTTP responses?", 
    a: ["Passive scanning", "Active scanning", "Custom search filters in Proxy history", "Collaborator client"], 
    c: 2, 
    exp: "Verified Answer: C. Custom search filters in Proxy history"
  },
  { 
    id: 165, 
    q: "Which of the following tools is most commonly used for extracting data from web pages by simulating user interaction and parsing HTML?", 
    a: ["Nmap", "Selenium", "Metasploit", "Wireshark"], 
    c: 1, 
    exp: "Verified Answer: B. Selenium"
  },
  { 
    id: 166, 
    q: "Which tool is primarily used for scraping large amounts of data from web pages using Python?", 
    a: ["Burp Suite", "Beautiful Soup", "Nessus", "Nikto"], 
    c: 1, 
    exp: "Verified Answer: B. Beautiful Soup"
  },
  { 
    id: 167, 
    q: "What is the primary function of SQLmap when extracting data from a web application?", 
    a: ["Scanning for open ports", "Exploiting SQL injection vulnerabilities to extract database information", "Sniffing network traffic", "Encrypting sensitive data"], 
    c: 1, 
    exp: "Verified Answer: B. Exploiting SQL injection vulnerabilities to extract database information"
  },
  { 
    id: 168, 
    q: "Which network protocol analyzer can be used to extract sensitive information from captured network traffic?", 
    a: ["Wireshark", "Nmap", "OpenVAS", "John the Ripper"], 
    c: 0, 
    exp: "Verified Answer: A. Wireshark"
  },
  { 
    id: 169, 
    q: "In web scraping, what is the primary purpose of the Python library Scrapy?", 
    a: ["Conducting penetration testing", "Automating web data extraction at scale", "Decrypting sensitive data", "Creating web application firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Automating web data extraction at scale"
  },
  { 
    id: 170, 
    q: "Which advanced technique can help identify an unknown vulnerability in a web application using memory corruption?", 
    a: ["Fuzzing", "Port Scanning", "Code Obfuscation", "Packet Capturing"], 
    c: 0, 
    exp: "Verified Answer: A. Fuzzing"
  },
  { 
    id: 171, 
    q: "What is the primary purpose of using Reverse Engineering in advanced exploitation?", 
    a: ["To encrypt sensitive data", "To bypass authentication mechanisms", "To analyze software binaries for vulnerabilities", "To conduct packet filtering"], 
    c: 2, 
    exp: "Verified Answer: C. To analyze software binaries for vulnerabilities"
  },
  { 
    id: 172, 
    q: "In advanced exploitation, what does ROP (Return-Oriented Programming) help bypass in modern systems?", 
    a: ["Password hashing", "B) Data encryption algorithms", "C) Data Execution Prevention (DEP)", "D) Secure Socket Layer (SSL)"], 
    c: 2, 
    exp: "Verified Answer: C. Data Execution Prevention (DEP)"
  },
  { 
    id: 173, 
    q: "Which advanced exploitation technique allows attackers to execute arbitrary commands by chaining multiple vulnerabilities?", 
    a: ["Command Injection", "Exploit Chaining", "Cross-Site Scripting (XSS)", "SQL Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Exploit Chaining"
  },
  { 
    id: 174, 
    q: "Which tool is commonly used in advanced identification and exploitation for discovering vulnerabilities in compiled binaries?", 
    a: ["Metasploit Framework", "Ghidra", "Nikto", "Wireshark"], 
    c: 1, 
    exp: "Verified Answer: B. Ghidra"
  },
  { 
    id: 175, 
    q: "Which vulnerability allows attackers to extract data from a database by exploiting the application’s failure to properly sanitize user inputs?", 
    a: ["Cross-Site Scripting (XSS)", "SQL Injection", "Remote Code Execution (RCE)", "Cross-Site Request Forgery (CSRF)"], 
    c: 1, 
    exp: "Verified Answer: B. SQL Injection"
  },
  { 
    id: 176, 
    q: "What vulnerability could allow attackers to extract sensitive data from error messages displayed by a web application?", 
    a: ["Information Disclosure", "Buffer Overflow", "Privilege Escalation", "Session Fixation"], 
    c: 0, 
    exp: "Verified Answer: A. Information Disclosure"
  },
  { 
    id: 177, 
    q: "Which type of vulnerability is exploited in an XML file to extract data from a web server?", 
    a: ["Command Injection", "XML External Entity (XXE)", "Path Traversal", "Directory Listing"], 
    c: 1, 
    exp: "Verified Answer: B. XML External Entity (XXE)"
  },
  { 
    id: 178, 
    q: "What type of attack leverages poorly implemented input validation to extract files from a web application’s server?", 
    a: ["Directory Traversal", "Clickjacking", "File Inclusion", "DNS Spoofing"], 
    c: 0, 
    exp: "Verified Answer: A. Directory Traversal"
  },
  { 
    id: 179, 
    q: "Which vulnerability is exploited to intercept and extract sensitive data from unsecured HTTP communications?", 
    a: ["Insecure Deserialization", "Man-in-the-Middle (MITM) Attack", "Command Injection", "Broken Access Control"], 
    c: 1, 
    exp: "Verified Answer: B. Man-in-the-Middle (MITM) Attack"
  },
  { 
    id: 180, 
    q: "Which HTTP method is most vulnerable to exploitation if it is enabled on a web server without proper restrictions?", 
    a: ["GET", "TRACE", "OPTIONS", "HEAD"], 
    c: 1, 
    exp: "Verified Answer: B. TRACE"
  },
  { 
    id: 181, 
    q: "What is the primary security risk associated with enabling the HTTP OPTIONS method?", 
    a: ["It allows attackers to list available HTTP methods on the server", "It reveals the IP address of the server", "It exposes sensitive header information", "It allows file uploads without authentication"], 
    c: 0, 
    exp: "Verified Answer: A. It allows attackers to list available HTTP methods on the server"
  },
  { 
    id: 183, 
    q: "What vulnerability can arise from improper validation of the HTTP DELETE method?", 
    a: ["Unauthorized data deletion from the server", "Bypassing authentication mechanisms", "Execution of remote code on the server", "Disclosure of server configuration files"], 
    c: 0, 
    exp: "Verified Answer: A. Unauthorized data deletion from the server"
  },
  { 
    id: 185, 
    q: "What is the primary purpose of using Wireshark to analyze web applications?", 
    a: ["To modify application source code", "To capture and analyze network packets", "To encrypt sensitive traffic", "To install security patches"], 
    c: 1, 
    exp: "Verified Answer: B. To capture and analyze network packets"
  },
  { 
    id: 186, 
    q: "Which protocol filter in Wireshark would you apply to analyze HTTP requests sent to a web application?", 
    a: ["tcp.port == 443", "http", "dns", "Icmp"], 
    c: 1, 
    exp: "Verified Answer: B. http"
  },
  { 
    id: 187, 
    q: "How can Wireshark help identify sensitive information being transmitted in plaintext by a web application?", 
    a: ["By scanning server logs", "By inspecting unencrypted HTTP traffic", "By performing SQL Injection attacks", "By intercepting VPN tunnels"], 
    c: 1, 
    exp: "Verified Answer: B. By inspecting unencrypted HTTP traffic"
  },
  { 
    id: 188, 
    q: "What type of attack can be detected by observing a large number of identical HTTP requests in Wireshark?", 
    a: ["Cross-Site Scripting (XSS)", "Denial of Service (DoS)", "SQL Injection", "XML External Entity (XXE)"], 
    c: 1, 
    exp: "Verified Answer: B. Denial of Service (DoS)"
  },
  { 
    id: 189, 
    q: "When analyzing a web application with Wireshark, what does the Set-Cookie header in HTTP responses indicate?", 
    a: ["The web server is requesting a file upload", "The client is initiating a database connection", "The server is sending a cookie to the client for session management", "The application is performing a redirect"], 
    c: 2, 
    exp: "Verified Answer: C. The server is sending a cookie to the client for session management"
  },
  { 
    id: 190, 
    q: "Which attack method is commonly used to extract sensitive data by exploiting file inclusion vulnerabilities in a web application?", 
    a: ["Local File Inclusion (LFI)", "Buffer Overflow", "Remote Code Execution", "SQL Injection"], 
    c: 0, 
    exp: "Verified Answer: A. Local File Inclusion (LFI)"
  },
  { 
    id: 191, 
    q: "Which data extraction technique leverages an insecure API to retrieve sensitive information without proper authentication?", 
    a: ["API Enumeration", "Broken Object Level Authorization (BOLA)", "Privilege Escalation", "Command Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Broken Object Level Authorization (BOLA)"
  },
  { 
    id: 192, 
    q: "What does SAST stand for in application security?", 
    a: ["Static Application Security Testing", "Secure Application Software Testing", "Systematic Application Security Testing", "Secure Analysis of Software Tools"], 
    c: 0, 
    exp: "Verified Answer: A. Static Application Security Testing"
  },
  { 
    id: 193, 
    q: "What is the main focus of DAST tools in application security?", 
    a: ["Scanning for vulnerabilities in running applications", "Analyzing source code for security flaws", "Testing the performance of an application", "Encrypting sensitive application data"], 
    c: 0, 
    exp: "Verified Answer: A. Scanning for vulnerabilities in running applications"
  },
  { 
    id: 194, 
    q: "Which of the following is a key difference between SAST and DAST?", 
    a: ["SAST is used for post-deployment testing, while DAST is used for pre-deployment testing", "SAST analyzes code statically, while DAST analyzes applications during execution", "SAST tests APIs, while DAST tests web applications", "SAST only works for mobile apps, while DAST only works for web apps"], 
    c: 1, 
    exp: "Verified Answer: B. SAST analyzes code statically, while DAST analyzes applications during execution"
  },
  { 
    id: 195, 
    q: "Which of the following is a limitation of SAST tools?", 
    a: ["Cannot test code for logical vulnerabilities", "Limited to applications written in C/C++", "Cannot integrate with CI/CD pipelines", "Requires the application to be running during analysis"], 
    c: 0, 
    exp: "Verified Answer: A. Cannot test code for logical vulnerabilities"
  },
  { 
    id: 196, 
    q: "What is one advantage of using DAST tools over SAST tools?", 
    a: ["DAST tools provide instant remediation for vulnerabilities", "DAST tools can detect runtime issues like misconfigurations and access control flaws", "DAST tools require source code for scanning", "DAST tools eliminate the need for manual penetration testing"], 
    c: 1, 
    exp: "Verified Answer: B. DAST tools can detect runtime issues like misconfigurations and access control flaws"
  },
  { 
    id: 197, 
    q: "Which of the following is a common vulnerability detected by SAST tools?", 
    a: ["SQL Injection", "Cross-Site Scripting (XSS)", "Buffer Overflows", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 198, 
    q: "Which stage of the Software Development Life Cycle (SDLC) is SAST most effective in?", 
    a: ["Requirements gathering", "Design phase", "Development phase", "Deployment phase"], 
    c: 2, 
    exp: "Verified Answer: C. Development phase"
  },
  { 
    id: 199, 
    q: "What is one disadvantage of using DAST tools?", 
    a: ["They cannot test running applications", "They require access to the application’s source code", "They are unable to detect vulnerabilities in APIs", "They may produce false positives or negatives for logical vulnerabilities"], 
    c: 3, 
    exp: "Verified Answer: D. They may produce false positives or negatives for logical vulnerabilities"
  },
  { 
    id: 200, 
    q: "Which tool category does OWASP ZAP belong to?", 
    a: ["SAST", "DAST", "Both SAST and DAST", "Neither SAST nor DAST"], 
    c: 1, 
    exp: "Verified Answer: B. DAST"
  },
  { 
    id: 201, 
    q: "What is a best practice when integrating SAST and DAST into an organization's security strategy?", 
    a: ["Use SAST for post-deployment testing only", "Use DAST exclusively, as it identifies runtime vulnerabilities", "Use both SAST and DAST for comprehensive vulnerability detection", "Avoid using both to reduce costs"], 
    c: 2, 
    exp: "Verified Answer: C. Use both SAST and DAST for comprehensive vulnerability detection"
  },
  { 
    id: 202, 
    q: "Which of the following is an example of a popular web application framework for Python?", 
    a: ["Laravel", "Django", "ReactJS", "Ruby on Rails"], 
    c: 1, 
    exp: "Verified Answer: B. Django"
  },
  { 
    id: 203, 
    q: "A company building a high-traffic e-commerce website chooses to use the Laravel framework. What is one key advantage Laravel offers for such projects?", 
    a: ["Provides built-in support for multithreading", "Offers strong database migration and ORM features", "Focuses on front-end user interface design", "Eliminates the need for server-side scripting"], 
    c: 1, 
    exp: "Verified Answer: B. Offers strong database migration and ORM features"
  },
  { 
    id: 204, 
    q: "In a case study of a media-sharing application, the developers used ReactJS. Which type of web application framework is ReactJS classified as?", 
    a: ["Back-end framework", "Front-end library/framework", "Full-stack framework", "Mobile app framework"], 
    c: 1, 
    exp: "Verified Answer: B. Front-end library/framework"
  },
  { 
    id: 205, 
    q: "A web application framework was selected for its modular architecture and middleware support, allowing for custom request/response handling. Which framework is most likely being described?", 
    a: ["Flask", "Express.js", "AngularJS", "Symfony"], 
    c: 1, 
    exp: "Verified Answer: B. Express.js"
  },
  { 
    id: 206, 
    q: "In a real-world project, developers chose Ruby on Rails for a startup's prototype due to its “convention over configuration” philosophy. What does this principle imply?", 
    a: ["Developers must write extensive configuration files for customization", "The framework makes assumptions about application structure to minimize setup effort", "All customization options are disabled to ensure consistency", "The framework supports only one specific use case or project type"], 
    c: 1, 
    exp: "Verified Answer: B. The framework makes assumptions about application structure to minimize setup effort"
  },
  { 
    id: 207, 
    q: "What is the first step in conducting a SAST (Static Application Security Testing) analysis?", 
    a: ["Execute the application to simulate real-world attacks", "Review the application source code or binaries", "Test the application in a staging environment", "Perform load testing to evaluate performance"], 
    c: 1, 
    exp: "Verified Answer: B. Review the application source code or binaries"
  },
  { 
    id: 208, 
    q: "Which of the following is the main purpose of DAST (Dynamic Application Security Testing)?", 
    a: ["Detecting vulnerabilities in uncompiled code", "Simulating real-world attacks on a running application", "Analyzing the application’s design and architecture", "Encrypting sensitive application data"], 
    c: 1, 
    exp: "Verified Answer: B. Simulating real-world attacks on a running application"
  },
  { 
    id: 209, 
    q: "You are testing a web application using both SAST and DAST tools. What is the key benefit of combining these two approaches?", 
    a: ["Reduced cost of testing tools", "Comprehensive detection of vulnerabilities at both code and runtime levels", "Eliminites the need for manual code reviews", "Faster identification of infrastructure issues"], 
    c: 1, 
    exp: "Verified Answer: B. Comprehensive detection of vulnerabilities at both code and runtime levels"
  },
  { 
    id: 210, 
    q: "During a DAST scan, a tool reports a Cross-Site Scripting (XSS) vulnerability. What is the next step to validate this result?", 
    a: ["Check the application’s source code for improper input sanitization", "Use the SAST tool to fix the issue automatically", "Execute the exploit in a controlled environment to verify the vulnerability", "Recompile the application to eliminate runtime issues"], 
    c: 2, 
    exp: "Verified Answer: C. Execute the exploit in a controlled environment to verify the vulnerability"
  },
  { 
    id: 211, 
    q: "A SAST tool reports a potential SQL injection vulnerability in the source code. What is the best method to remediate this issue?", 
    a: ["Use input validation and parameterized queries", "Conduct another DAST scan to confirm the vulnerability", "Encode all output in the application", "Change the database management system to prevent injection"], 
    c: 0, 
    exp: "Verified Answer: A. Use input validation and parameterized queries"
  },
  { 
    id: 212, 
    q: "What is the primary function of the Browser-JSGuard Firefox add-on?", 
    a: ["Block advertisements on web pages", "Detect and analyze malicious or suspicious JavaScript on web pages", "Increase the loading speed of web applications", "Encrypt web traffic for secure browsing"], 
    c: 1, 
    exp: "Verified Answer: B. Detect and analyze malicious or suspicious JavaScript on web pages"
  },
  { 
    id: 213, 
    q: "Which feature of Browser-JSGuard helps identify malicious behavior in a webpage?", 
    a: ["Real-time execution of JavaScript code", "Static code analysis of the JavaScript in a sandboxed environment", "Blocking access to all external resources", "Disabling JavaScript execution by default"], 
    c: 1, 
    exp: "Verified Answer: B. Static code analysis of the JavaScript in a sandboxed environment"
  },
  { 
    id: 214, 
    q: "When using Browser-JSGuard, a webpage is flagged as suspicious. What should be your next step?", 
    a: ["Immediately report the webpage to local authorities", "Avoid interacting with the webpage and close it", "Disable Browser-JSGuard and reload the page to confirm", "Proceed to use the webpage while disabling JavaScript manually"], 
    c: 1, 
    exp: "Verified Answer: B. Avoid interacting with the webpage and close it"
  },
  { 
    id: 215, 
    q: "Browser-JSGuard detects an unusual script attempting to exfiltrate user cookies. What type of vulnerability does this behavior indicate?", 
    a: ["SQL Injection", "Cross-Site Scripting (XSS)", "Remote Code Execution", "Directory Traversal"], 
    c: 1, 
    exp: "Verified Answer: B. Cross-Site Scripting (XSS)"
  },
  { 
    id: 216, 
    q: "Why is Browser-JSGuard particularly useful for cybersecurity professionals during a web security assessment?", 
    a: ["It automates the patching of vulnerabilities in JavaScript code", "It provides detailed alerts and analysis of potentially harmful JavaScript", "It integrates directly with DAST tools for runtime vulnerability analysis", "It offers automatic encryption for all HTTP requests"], 
    c: 1, 
    exp: "Verified Answer: B. It provides detailed alerts and analysis of potentially harmful JavaScript"
  },
  { 
    id: 217, 
    q: "Which of the following tools is primarily used for SAST (Static Application Security Testing)?", 
    a: ["OWASP ZAP", "Veracode", "Burp Suite", "Nikto"], 
    c: 1, 
    exp: "Verified Answer: B. Veracode"
  },
  { 
    id: 218, 
    q: "Which DAST tool is widely used to simulate attacks on web applications during runtime?", 
    a: ["Checkmarx", "OWASP ZAP", "SonarQube", "Bandit"], 
    c: 1, 
    exp: "Verified Answer: B. OWASP ZAP"
  },
  { 
    id: 219, 
    q: "Which tool offers both SAST and DAST capabilities in a single platform?", 
    a: ["Fortify by Micro Focus", "Nikto", "Acunetix", "SQLMap"], 
    c: 0, 
    exp: "Verified Answer: A. Fortify by Micro Focus"
  },
  { 
    id: 220, 
    q: "A cybersecurity team wants to perform static code analysis for Python applications. Which tool would be most suitable?", 
    a: ["Bandit", "AppScan", "Wapiti", "Burp Suite"], 
    c: 0, 
    exp: "Verified Answer: A. Bandit"
  },
  { 
    id: 221, 
    q: "Which of the following DAST tools specializes in automated vulnerability scanning for web applications and APIs?", 
    a: ["SonarQube", "Acunetix", "ESLint", "PMD"], 
    c: 1, 
    exp: "Verified Answer: B. Acunetix"
  },
  { 
    id: 222, 
    q: "What is the primary objective of security management in an organization?", 
    a: ["Maximizing network speed", "Protecting confidentiality, integrity, and availability of information", "Ensuring all applications run without errors", "Enhancing customer experience"], 
    c: 1, 
    exp: "Verified Answer: B. Protecting confidentiality, integrity, and availability of information"
  },
  { 
    id: 223, 
    q: "Which of the following is a key principle of security management?", 
    a: ["Least Privilege", "Open Access", "Centralized Responsibility", "Dynamic Programming"], 
    c: 0, 
    exp: "Verified Answer: A. Least Privilege"
  },
  { 
    id: 224, 
    q: "What does the term “Risk Mitigation” in security management refer to?", 
    a: ["Ignoring potential risks to focus on system performance", "Eliminating all risks completely", "Reducing the likelihood or impact of identified risks", "Outsourcing risks to third-party vendors"], 
    c: 2, 
    exp: "Verified Answer: C. Reducing the likelihood or impact of identified risks"
  },
  { 
    id: 225, 
    q: "Which of the following concepts is NOT a part of the CIA triad in security management?", 
    a: ["Confidentiality", "Integrity", "Authentication", "Availability"], 
    c: 2, 
    exp: "Verified Answer: C. Authentication"
  },
  { 
    id: 226, 
    q: "In security management, what is the purpose of conducting regular security audits?", 
    a: ["To install new hardware in the organization", "To identify and address security vulnerabilities", "To ensure applications are updated to the latest version", "To train employees on productivity tools"], 
    c: 1, 
    exp: "Verified Answer: B. To identify and address security vulnerabilities"
  },
  { 
    id: 227, 
    q: "What is a major reason for insider threats in information security?", 
    a: ["Advanced external hacking tools", "Lack of employee awareness and training", "Frequent software updates", "Over -reliance on firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Lack of employee awareness and training"
  },
  { 
    id: 228, 
    q: "Which of the following is an effective way to reduce human error in information security?", 
    a: ["Increasing the complexity of passwords", "Providing regular security awareness training", "Limiting the use of mobile devices", "Enforcing a bring-your -own-device (BYOD) policy"], 
    c: 1, 
    exp: "Verified Answer: B. Providing regular security awareness training"
  },
  { 
    id: 229, 
    q: "Social engineering attacks primarily exploit which aspect of an organization?", 
    a: ["Network architecture", "Vulnerable software", "Human behavior", "Firewall configurations"], 
    c: 2, 
    exp: "Verified Answer: C. Human behavior"
  },
  { 
    id: 230, 
    q: "What is the role of a “security champion” in an organization?", 
    a: ["To implement all technical security measures", "To advocate and promote security practices among employees", "To enforce penalties for security violations", "To lead penetration testing efforts"], 
    c: 1, 
    exp: "Verified Answer: B. To advocate and promote security practices among employees"
  },
  { 
    id: 231, 
    q: "How can organizations address the human factor in phishing attacks?", 
    a: ["Installing advanced antivirus software", "Conducting phishing simulation exercises and training", "Replacing email communication with instant messaging", "Disabling all external email communication"], 
    c: 1, 
    exp: "Verified Answer: B. Conducting phishing simulation exercises and training"
  },
  { 
    id: 232, 
    q: "Which of the following is an example of a physical threat to an information system?", 
    a: ["Phishing attack", "Malware infection", "Natural disasters", "SQL injection"], 
    c: 2, 
    exp: "Verified Answer: C. Natural disasters"
  },
  { 
    id: 233, 
    q: "What type of threat does ransomware represent in an information system?", 
    a: ["Environmental threat", "Insider threat", "Malware-based threat", "Physical threat"], 
    c: 2, 
    exp: "Verified Answer: C. Malware-based threat"
  },
  { 
    id: 234, 
    q: "Which of the following is a characteristic of an insider threat to information systems?", 
    a: ["It originates from external attackers only", "It involves deliberate or accidental actions by trusted individuals", "It always involves physical damage to hardware", "It only occurs in financial organizations"], 
    c: 1, 
    exp: "Verified Answer: B. It involves deliberate or accidental actions by trusted individuals"
  },
  { 
    id: 235, 
    q: "What is the primary goal of a Distributed Denial of Service (DDoS) attack?", 
    a: ["Stealing sensitive data", "Causing financial losses", "Overloading a system to render it unavailable", "Installing backdoor software"], 
    c: 2, 
    exp: "Verified Answer: C. Overloading a system to render it unavailable"
  },
  { 
    id: 236, 
    q: "Which of the following is a threat posed by weak access controls in an information system?", 
    a: ["Unauthorized access to sensitive data", "Increased network latency", "Higher power consumption of servers", "Slow application updates"], 
    c: 0, 
    exp: "Verified Answer: A. Unauthorized access to sensitive data"
  },
  { 
    id: 237, 
    q: "What type of threat exploits vulnerabilities in software or hardware to gain unauthorized access?", 
    a: ["Environmental threats", "Logical threats", "Social threats", "Physical threats"], 
    c: 1, 
    exp: "Verified Answer: B. Logical threats"
  },
  { 
    id: 238, 
    q: "Which of the following is a common human-based threat to information systems?", 
    a: ["Zero-day vulnerabilities", "Phishing attacks", "DDoS attacks", "Malware infections"], 
    c: 1, 
    exp: "Verified Answer: B. Phishing attacks"
  },
  { 
    id: 239, 
    q: "Which type of threat involves unauthorized physical access to information system components?", 
    a: ["Malware attacks", "Cyber espionage", "Physical security breaches", "Social engineering"], 
    c: 2, 
    exp: "Verified Answer: C. Physical security breaches"
  },
  { 
    id: 240, 
    q: "What is a potential risk of unpatched software in an information system?", 
    a: ["Reduced system speed", "Increased compatibility with newer systems", "Exploitation of vulnerabilities by attackers", "Better performance in cloud environments"], 
    c: 2, 
    exp: "Verified Answer: C. Exploitation of vulnerabilities by attackers"
  },
  { 
    id: 241, 
    q: "Which of the following describes a “zero-day” attack?", 
    a: ["An attack targeting vulnerabilities with available patches", "An attack exploiting a previously unknown vulnerability", "An attack caused by outdated software", "A simulated attack for testing purposes"], 
    c: 1, 
    exp: "Verified Answer: B. An attack exploiting a previously unknown vulnerability"
  },
  { 
    id: 242, 
    q: "What is a key characteristic of phishing attacks?", 
    a: ["Overloading the target system with traffic", "Exploiting physical security weaknesses", "Impersonating a trusted entity to steal information", "Modifying the database without authorization"], 
    c: 2, 
    exp: "Verified Answer: C. Impersonating a trusted entity to steal information"
  },
  { 
    id: 243, 
    q: "Which of the following is a primary goal of an Advanced Persistent Threat (APT)?", 
    a: ["Quick exploitation and withdrawal", "Long-term, undetected access to a target", "Delivering spam emails to many users", "Crashing a system immediately"], 
    c: 1, 
    exp: "Verified Answer: B. Long-term, undetected access to a target"
  },
  { 
    id: 244, 
    q: "What type of attack is SQL injection classified as?", 
    a: ["Malware-based attack", "Network-based attack", "Code injection attack", "Denial-of-service attack"], 
    c: 2, 
    exp: "Verified Answer: C. Code injection attack"
  },
  { 
    id: 245, 
    q: "Which type of attack involves intercepting and altering communication between two parties?", 
    a: ["Denial-of-Service", "Replay Attack", "Man-in-the-Middle Attack", "Phishing"], 
    c: 2, 
    exp: "Verified Answer: C. Man-in-the-Middle Attack"
  },
  { 
    id: 246, 
    q: "What is the primary goal of a brute force attack?", 
    a: ["Exploiting software vulnerabilities", "Crashing a web server", "Guessing credentials through repeated attempts", "Stealing encryption keys"], 
    c: 2, 
    exp: "Verified Answer: C. Guessing credentials through repeated attempts"
  },
  { 
    id: 247, 
    q: "Which of the following is a characteristic of ransomware attacks?", 
    a: ["Encrypting data and demanding payment for decryption", "Stealing passwords through keylogging", "Overloading a network with traffic", "Sending unsolicited emails"], 
    c: 0, 
    exp: "Verified Answer: A. Encrypting data and demanding payment for decryption"
  },
  { 
    id: 248, 
    q: "What type of threat is posed by Cross-Site Scripting (XSS)?", 
    a: ["Modifying server configurations", "Injecting malicious scripts into web pages viewed by users", "Crashing a database server", "Overwriting system files"], 
    c: 1, 
    exp: "Verified Answer: B. Injecting malicious scripts into web pages viewed by users"
  },
  { 
    id: 249, 
    q: "What type of attack exploits the TCP three-way handshake?", 
    a: ["SQL Injection", "SYN Flood Attack", "Buffer Overflow", "Cross-Site Request Forgery"], 
    c: 1, 
    exp: "Verified Answer: B. SYN Flood Attack"
  },
  { 
    id: 250, 
    q: "What is the main focus of a spear phishing attack compared to regular phishing?", 
    a: ["Broad targeting of multiple users", "Targeting specific individuals with personalized messages", "Installing spyware on systems", "Spreading ransomware through email"], 
    c: 1, 
    exp: "Verified Answer: B. Targeting specific individuals with personalized messages"
  },
  { 
    id: 251, 
    q: "What is a threat in the context of information security?", 
    a: ["An event with the potential to harm a system", "An action taken to exploit a vulnerability", "A weakness in the system or network", "A tool used for penetration testing"], 
    c: 0, 
    exp: "Verified Answer: A. An event with the potential to harm a system"
  },
  { 
    id: 252, 
    q: "What is an attack in cybersecurity?", 
    a: ["A potential risk to a system", "A deliberate attempt to exploit a system's vulnerability", "A backup strategy to recover data", "A legal method of testing a network"], 
    c: 1, 
    exp: "Verified Answer: B. A deliberate attempt to exploit a system's vulnerability"
  },
  { 
    id: 253, 
    q: "Which of the following best explains the difference between a threat and an attack?", 
    a: ["Threats are intentional, while attacks are accidental", "Threats represent potential risks, while attacks are active exploitation attempts", "Threats are minor issues, while attacks are critical issues", "Threats are caused by hardware, while attacks are software-based"], 
    c: 1, 
    exp: "Verified Answer: B. Threats represent potential risks, while attacks are active exploitation attempts"
  },
  { 
    id: 254, 
    q: "Which of the following is NOT a classification of threats?", 
    a: ["Physical threats", "Network threats", "Hardware configuration threats", "Environmental threats"], 
    c: 2, 
    exp: "Verified Answer: C. Hardware configuration threats"
  },
  { 
    id: 255, 
    q: "Which category of threats includes natural disasters like floods or earthquakes?", 
    a: ["Physical threats", "Environmental threats", "Human threats", "Malware threats"], 
    c: 1, 
    exp: "Verified Answer: B. Environmental threats"
  },
  { 
    id: 256, 
    q: "Which of the following is an example of a passive attack?", 
    a: ["SQL Injection", "Denial of Service", "Eavesdropping", "Phishing"], 
    c: 2, 
    exp: "Verified Answer: C. Eavesdropping"
  },
  { 
    id: 257, 
    q: "What type of threat is posed by an insider with malicious intent?", 
    a: ["Physical threat", "Internal threat", "External threat", "Environmental threat"], 
    c: 1, 
    exp: "Verified Answer: B. Internal threat"
  },
  { 
    id: 258, 
    q: "What is the primary goal of reconnaissance attacks?", 
    a: ["Overloading the target with traffic", "Gathering information about a target system", "Infecting systems with ransomware", "Manipulating data within a database"], 
    c: 1, 
    exp: "Verified Answer: B. Gathering information about a target system"
  },
  { 
    id: 259, 
    q: "Which of the following is a common method of classifying attacks?", 
    a: ["Based on the system’ s uptime", "Based on the attacker ’s location", "Based on the attack’ s intent (active or passive)", "Based on the encryption used"], 
    c: 2, 
    exp: "Verified Answer: C. Based on the attack’ s intent (active or passive)"
  },
  { 
    id: 260, 
    q: "What type of threat exploits a vulnerability without the knowledge of the system owner?", 
    a: ["Ethical testing", "Zero-day threat", "Reconnaissance", "Physical damage"], 
    c: 1, 
    exp: "Verified Answer: B. Zero-day threat"
  },
  { 
    id: 261, 
    q: "What is the primary difference between an active attack and a passive attack?", 
    a: ["Active attacks attempt to alter system resources, while passive attacks aim to monitor and gather information", "Active attacks are unintentional, while passive attacks are deliberate", "Active attacks target data confidentiality , while passive attacks target data integrity", "Active attacks occur on servers, while passive attacks occur on clients"], 
    c: 0, 
    exp: "Verified Answer: A. Active attacks attempt to alter system resources, while passive attacks aim to monitor and gather information"
  },
  { 
    id: 262, 
    q: "What is the primary goal of information system security?", 
    a: ["Maximizing system speed", "Ensuring data confidentiality , integrity , and availability", "Preventing hardware failures", "Reducing system complexity"], 
    c: 1, 
    exp: "Verified Answer: B. Ensuring data confidentiality , integrity , and availability"
  },
  { 
    id: 263, 
    q: "Which of the following is an example of a physical control for protecting information systems?", 
    a: ["Firewalls", "Biometric locks", "Intrusion detection systems", "Encryption"], 
    c: 1, 
    exp: "Verified Answer: B. Biometric locks"
  },
  { 
    id: 264, 
    q: "What is the purpose of multifactor authentication (MFA) in information system security?", 
    a: ["To replace passwords entirely", "To ensure at least two levels of verification for user access", "To simplify user access procedures", "To monitor network traffic in real-time"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure at least two levels of verification for user access"
  },
  { 
    id: 265, 
    q: "Which of the following strategies helps protect systems against zero-day attacks?", 
    a: ["Updating antivirus software monthly", "Using firewalls only", "Implementing behavior -based intrusion detection systems", "Disabling all network connections"], 
    c: 2, 
    exp: "Verified Answer: C. Implementing behavior -based intrusion detection systems"
  },
  { 
    id: 266, 
    q: "Which principle helps minimize the potential damage caused by a security breach in an organization?", 
    a: ["Defense-in-depth", "Open access policy", "Centralized authentication", "Single-layer security"], 
    c: 0, 
    exp: "Verified Answer: A. Defense-in-depth"
  },
  { 
    id: 267, 
    q: "What is the primary challenge in securing mobile and wireless computing environments?", 
    a: ["Limited hardware capabilities of mobile devices", "High cost of security tools", "Mobility and frequent disconnection from the network", "Incompatibility with wired networks"], 
    c: 2, 
    exp: "Verified Answer: C. Mobility and frequent disconnection from the network"
  },
  { 
    id: 268, 
    q: "Which technology is commonly used to secure wireless communication?", 
    a: ["WEP", "WPA3", "SSL", "FTP"], 
    c: 1, 
    exp: "Verified Answer: B. WPA3"
  },
  { 
    id: 269, 
    q: "What is a common method attackers use to compromise wireless networks?", 
    a: ["Eavesdropping", "Port scanning", "Phishing", "Distributed denial of service (DDoS)"], 
    c: 0, 
    exp: "Verified Answer: A. Eavesdropping"
  },
  { 
    id: 270, 
    q: "How does enabling a VPN enhance security in mobile and wireless computing?", 
    a: ["By blocking malware on the device", "By creating a secure encrypted tunnel for data transmission", "By increasing internet speed", "By replacing firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. By creating a secure encrypted tunnel for data transmission"
  },
  { 
    id: 271, 
    q: "Which of the following is a best practice to secure mobile devices?", 
    a: ["Using default passwords provided by the manufacturer", "Regularly updating the device's operating system and applications", "Disabling all security features for better performance", "Relying only on antivirus software"], 
    c: 1, 
    exp: "Verified Answer: B. Regularly updating the device's operating system and applications"
  },
  { 
    id: 272, 
    q: "What is a common method used by attackers to commit credit card fraud in mobile and wireless environments?", 
    a: ["Distributed Denial of Service (DDoS)", "Phishing attacks through fake websites or mobile apps", "Brute force password cracking", "Social engineering through in-person interaction"], 
    c: 1, 
    exp: "Verified Answer: B. Phishing attacks through fake websites or mobile apps"
  },
  { 
    id: 273, 
    q: "Which of the following is a preventative measure to reduce credit card fraud when using mobile devices?", 
    a: ["Connecting to public Wi-Fi networks", "Using one-time passwords (OTPs) for transactions", "Storing card details in unprotected notes apps", "Disabling all security features"], 
    c: 1, 
    exp: "Verified Answer: B. Using one-time passwords (OTPs) for transactions"
  },
  { 
    id: 274, 
    q: "What is “card skimming” in the context of credit card fraud?", 
    a: ["A technique to bypass PIN verification", "The use of fake card readers to capture card information", "Hacking the mobile operating system to steal data", "Intercepting communication over Bluetooth"], 
    c: 1, 
    exp: "Verified Answer: B. The use of fake card readers to capture card information"
  },
  { 
    id: 275, 
    q: "How can attackers exploit Near Field Communication (NFC) technology for credit card fraud?", 
    a: ["By intercepting encrypted NFC signals", "By cloning NFC-enabled credit cards", "By disabling NFC functionality on the user’s device", "By increasing the range of NFC communication"], 
    c: 1, 
    exp: "Verified Answer: B. By cloning NFC-enabled credit cards"
  },
  { 
    id: 276, 
    q: "What is a key indicator of a secure mobile payment application?", 
    a: ["Support for multiple languages", "The presence of HTTPS in URLs used by the app", "The ability to store passwords locally", "Offering discounts on every transaction"], 
    c: 1, 
    exp: "Verified Answer: B. The presence of HTTPS in URLs used by the app"
  },
  { 
    id: 277, 
    q: "What is the primary objective of Information Security Management (ISM)?", 
    a: ["To develop software for secure systems", "To protect an organization’ s information assets from threats", "To implement new business processes", "To reduce the cost of IT infrastructure"], 
    c: 1, 
    exp: "Verified Answer: B. To protect an organization’ s information assets from threats"
  },
  { 
    id: 278, 
    q: "Which framework is commonly used for Information Security Management?", 
    a: ["ITIL", "COBIT", "ISO/IEC 27001", "Six Sigma"], 
    c: 2, 
    exp: "Verified Answer: C. ISO/IEC 27001"
  },
  { 
    id: 279, 
    q: "What does the “CIA triad” in Information Security Management stand for?", 
    a: ["Confidentiality , Integrity , and Accessibility", "Confidentiality , Integrity , and Availability", "Control, Integrity , and Authentication", "Confidentiality , Identification, and Authorization"], 
    c: 1, 
    exp: "Verified Answer: B. Confidentiality , Integrity , and Availability"
  },
  { 
    id: 280, 
    q: "What is a key responsibility of an Information Security Manager?", 
    a: ["Designing network hardware", "Monitoring and enforcing security policies", "Writing programming scripts for applications", "Managing customer relations"], 
    c: 1, 
    exp: "Verified Answer: B. Monitoring and enforcing security policies"
  },
  { 
    id: 281, 
    q: "Which of the following is a critical component of a successful ISMS?", 
    a: ["Automating all security processes", "Comprehensive risk assessment and management", "Eliminating all human interaction in systems", "Restricting access to the internet"], 
    c: 1, 
    exp: "Verified Answer: B. Comprehensive risk assessment and management"
  },
  { 
    id: 282, 
    q: "Which of the following is an example of a physical security measure in information security?", 
    a: ["Firewall configuration", "Installing anti-virus software", "Biometric access controls", "Using complex passwords"], 
    c: 2, 
    exp: "Verified Answer: C. Biometric access controls"
  },
  { 
    id: 283, 
    q: "What is a threat in the context of information security?", 
    a: ["A physical device to protect systems", "A potential danger that exploits vulnerabilities", "A system vulnerability itself", "A type of encrypted communication"], 
    c: 1, 
    exp: "Verified Answer: B. A potential danger that exploits vulnerabilities"
  },
  { 
    id: 284, 
    q: "What does “vulnerability” mean in information security?", 
    a: ["The ability to defend against an attack", "A weakness in a system that can be exploited by threats", "The process of encrypting sensitive data", "A method of recovering lost data"], 
    c: 1, 
    exp: "Verified Answer: B. A weakness in a system that can be exploited by threats"
  },
  { 
    id: 285, 
    q: "Which of the following is NOT part of the CIA triad?", 
    a: ["Confidentiality", "Integrity", "Accountability", "Availability"], 
    c: 2, 
    exp: "Verified Answer: C. Accountability"
  },
  { 
    id: 286, 
    q: "What is the purpose of encryption in information security?", 
    a: ["To prevent unauthorized physical access", "To convert data into a secure format that only authorized users can read", "To monitor network activity for intrusions", "To authenticate users before access is granted"], 
    c: 1, 
    exp: "Verified Answer: B. To convert data into a secure format that only authorized users can read"
  },
  { 
    id: 287, 
    q: "Which of the following best describes a firewall?", 
    a: ["A device that encrypts sensitive data", "A tool to monitor user behavior", "A system that filters network traffic based on predefined security rules", "A backup solution for critical files"], 
    c: 2, 
    exp: "Verified Answer: C. A system that filters network traffic based on predefined security rules"
  },
  { 
    id: 288, 
    q: "What is the role of access control in information security?", 
    a: ["To detect system vulnerabilities", "To regulate who can view or use resources in a computing environment", "To encrypt sensitive data", "To ensure regular system updates"], 
    c: 1, 
    exp: "Verified Answer: B. To regulate who can view or use resources in a computing environment"
  },
  { 
    id: 289, 
    q: "What does multi-factor authentication (MFA) involve?", 
    a: ["A single password shared among all users", "Verification using two or more different types of credentials", "Encrypting data with a complex algorithm", "Monitoring network traffic for threats"], 
    c: 1, 
    exp: "Verified Answer: B. Verification using two or more different types of credentials"
  },
  { 
    id: 290, 
    q: "What is the purpose of a security policy in an organization?", 
    a: ["To define how users should report incidents", "To establish guidelines and rules for protecting information assets", "To monitor user activity for suspicious behavior", "To enforce physical security measures"], 
    c: 1, 
    exp: "Verified Answer: B. To establish guidelines and rules for protecting information assets"
  },
  { 
    id: 291, 
    q: "What is the primary purpose of conducting a risk assessment in information security?", 
    a: ["To eliminate all potential threats", "To identify , evaluate, and prioritize risks to information assets", "To create new encryption algorithms", "To install the latest antivirus software"], 
    c: 1, 
    exp: "Verified Answer: B. To identify , evaluate, and prioritize risks to information assets"
  },
  { 
    id: 292, 
    q: "What is the primary characteristic of cybercrime?", 
    a: ["Physical damage to computing equipment", "Unauthorized use of the internet to commit illegal activities", "Theft of physical assets", "Use of the internet for marketing purposes"], 
    c: 1, 
    exp: "Verified Answer: B. Unauthorized use of the internet to commit illegal activities"
  },
  { 
    id: 293, 
    q: "Which of the following is an example of a phishing attack?", 
    a: ["Sending emails with malicious links to steal user credentials", "Using brute force to access a secure server", "Monitoring network traffic to intercept sensitive data", "Encrypting user data for ransom"], 
    c: 0, 
    exp: "Verified Answer: A. Sending emails with malicious links to steal user credentials"
  },
  { 
    id: 294, 
    q: "What is ransomware?", 
    a: ["A type of software that improves system performance", "Malware that encrypts files and demands a ransom for the decryption key", "A tool for scanning network vulnerabilities", "A protocol for secure data transmission"], 
    c: 1, 
    exp: "Verified Answer: B. Malware that encrypts files and demands a ransom for the decryption key"
  },
  { 
    id: 295, 
    q: "Which of the following is a common motive for cybercriminals?", 
    a: ["Improving software quality", "Financial gain", "Enhancing network security", "Reducing the cost of IT services"], 
    c: 1, 
    exp: "Verified Answer: B. Financial gain"
  },
  { 
    id: 296, 
    q: "What is the primary difference between a hacker and a cracker?", 
    a: ["Hackers use their skills for legal purposes, while crackers use them for illegal activities", "Hackers are more skilled than crackers", "Crackers work for government agencies, while hackers are independent", "There is no difference between the two"], 
    c: 0, 
    exp: "Verified Answer: A. Hackers use their skills for legal purposes, while crackers use them for illegal activities"
  },
  { 
    id: 297, 
    q: "What is a “botnet” in cybercrime?", 
    a: ["A network of private computers infected with malicious software and controlled as a group without the owners' knowledge", "A type of advanced firewall", "A secure network for government communication", "A tool for data backup"], 
    c: 0, 
    exp: "Verified Answer: A. A network of private computers infected with malicious software and controlled as a group without the owners' knowledge"
  },
  { 
    id: 298, 
    q: "Which of the following describes social engineering?", 
    a: ["Hacking into a server through a technical vulnerability", "Manipulating individuals into divulging sensitive information", "Using complex algorithms to crack passwords", "Analyzing network traffic for security threats"], 
    c: 1, 
    exp: "Verified Answer: B. Manipulating individuals into divulging sensitive information"
  },
  { 
    id: 299, 
    q: "What is identity theft in the context of cybercrime?", 
    a: ["Stealing physical identification cards", "The fraudulent acquisition and use of a person's private identifying information, usually for financial gain", "Changing one's name in a database", "Unauthorized access to a person's social media account"], 
    c: 1, 
    exp: "Verified Answer: B. The fraudulent acquisition and use of a person's private identifying information, usually for financial gain"
  },
  { 
    id: 300, 
    q: "What is the purpose of a Distributed Denial of Service (DDoS) attack?", 
    a: ["To steal credit card information", "To crash a website or online service by overwhelming it with traffic from multiple sources", "To encrypt sensitive data for ransom", "To monitor private communication"], 
    c: 1, 
    exp: "Verified Answer: B. To crash a website or online service by overwhelming it with traffic from multiple sources"
  },
  { 
    id: 301, 
    q: "What is the primary legal concern regarding open communications in cyberspace?", 
    a: ["Cost of communication", "Data privacy and protection", "Speed of data transfer", "Network hardware compatibility"], 
    c: 1, 
    exp: "Verified Answer: B. Data privacy and protection. Open communications often cross jurisdictions, making the legal protection of user data a primary concern."
  },
  { 
    id: 302, 
    q: "What is the primary legal challenge associated with open communications?", 
    a: ["High cost of infrastructure", "Lack of technical expertise", "Ensuring privacy and data protection across jurisdictions", "Limited access to communication networks"], 
    c: 2, 
    exp: "Verified Answer: C. Ensuring privacy and data protection across jurisdictions"
  },
  { 
    id: 303, 
    q: "Which legal framework governs cross-border data transfers in the European Union?", 
    a: ["Data Protection Act (DPA)", "General Data Protection Regulation (GDPR)", "Freedom of Information Act", "Privacy Shield Framework"], 
    c: 1, 
    exp: "Verified Answer: B. General Data Protection Regulation (GDPR)"
  },
  { 
    id: 304, 
    q: "What is a key responsibility of organizations under most data privacy laws regarding open communications?", 
    a: ["To encrypt all user data", "To ensure informed consent for collecting and sharing personal data", "To store data indefinitely for audit purposes", "To disable open communications on public networks"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure informed consent for collecting and sharing personal data"
  },
  { 
    id: 305, 
    q: "Which international treaty addresses cybercrime in open communication networks?", 
    a: ["The Berne Convention", "The Budapest Convention on Cybercrime", "The Hague Convention", "The Paris Agreement"], 
    c: 1, 
    exp: "Verified Answer: B. The Budapest Convention on Cybercrime"
  },
  { 
    id: 306, 
    q: "What is the main purpose of net neutrality laws in open communication systems?", 
    a: ["To block unauthorized access to websites", "To ensure equal access to all internet services without discrimination", "To prioritize data traffic for government organizations", "To prevent data encryption on public networks"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure equal access to all internet services without discrimination"
  },
  { 
    id: 307, 
    q: "Which section of the Indian Penal Code (IPC) deals with identity theft?", 
    a: ["Section 420", "Section 66C of the IT Act", "Section 378", "Section 503"], 
    c: 1, 
    exp: "Verified Answer: B. Section 66C of the IT Act"
  },
  { 
    id: 308, 
    q: "Under the Indian IT Act, what is the punishment for hacking?", 
    a: ["Imprisonment up to 1 year", "Imprisonment up to 3 years and/or a fine of ₹ 5,00,000", "Imprisonment up to 10 years", "Only a fine of ₹ 1,00,000"], 
    c: 1, 
    exp: "Verified Answer: B. Imprisonment up to 3 years and/or a fine of ₹ 5,00,000"
  },
  { 
    id: 309, 
    q: "What is considered “mischief” under Section 425 of the IPC?", 
    a: ["Unauthorized access to bank accounts", "Causing damage to computer systems with intent to destroy information", "Spreading malware unintentionally", "Tampering with evidence in a criminal case"], 
    c: 1, 
    exp: "Verified Answer: B. Causing damage to computer systems with intent to destroy information"
  },
  { 
    id: 310, 
    q: "Which Indian Penal Code section is commonly invoked in cases of cyber fraud?", 
    a: ["Section 403", "Section 406", "Section 420", "Section 411"], 
    c: 2, 
    exp: "Verified Answer: C. Section 420"
  },
  { 
    id: 311, 
    q: "What is the term for accessing someone’ s computer system without authorization under Indian law?", 
    a: ["Data tampering", "Cyber trespass", "Unauthorized access", "Hacking"], 
    c: 3, 
    exp: "Verified Answer: D. Hacking"
  },
  { 
    id: 312, 
    q: "Which of the following is a punishable offense under Indian law regarding cyber crimes?", 
    a: ["Sending spam emails", "Creating fake social media profiles for malicious purposes", "Posting memes on public platforms", "Copying files for personal use"], 
    c: 1, 
    exp: "Verified Answer: B. Creating fake social media profiles for malicious purposes"
  },
  { 
    id: 313, 
    q: "What does Section 43 of the IT Act cover?", 
    a: ["Theft of electronic equipment", "Penalties for causing damage to computer systems and unauthorized downloading", "Punishment for hacking into government websites", "Safeguards for ethical hackers"], 
    c: 1, 
    exp: "Verified Answer: B. Penalties for causing damage to computer systems and unauthorized downloading"
  },
  { 
    id: 314, 
    q: "Which section of the IT Act criminalizes the publication of obscene material online?", 
    a: ["Section 67", "Section 43A", "Section 66F", "Section 68"], 
    c: 0, 
    exp: "Verified Answer: A. Section 67"
  },
  { 
    id: 315, 
    q: "What is the key difference between cyber mischief and cyber fraud?", 
    a: ["Cyber mischief involves intent to deceive, while cyber fraud does not", "Cyber fraud is financially motivated, whereas cyber mischief focuses on disruption or destruction", "Cyber mischief is covered under the IT Act, and cyber fraud is not", "Both terms are synonymous under Indian law"], 
    c: 1, 
    exp: "Verified Answer: B. Cyber fraud is financially motivated, whereas cyber mischief focuses on disruption or destruction"
  },
  { 
    id: 316, 
    q: "What is the punishment under Section 66F of the IT Act for cyber terrorism?", 
    a: ["Fine of 10,00,000", "Life imprisonment", "Imprisonment for 3 years and/or a fine of ₹ 5,00,000", "Imprisonment for 7 years"], 
    c: 1, 
    exp: "Verified Answer: B. Life imprisonment"
  },
  { 
    id: 317, 
    q: "Which international treaty governs cybercrime globally?", 
    a: ["Budapest Convention", "Paris Agreement", "Hague Convention", "UN Charter"], 
    c: 0, 
    exp: "Verified Answer: A. Budapest Convention"
  },
  { 
    id: 318, 
    q: "What is the key focus of the Tallinn Manual?", 
    a: ["Human rights in cyberspace", "Legal principles of armed conflict in cyberspace", "Regulations for data privacy", "International trade laws"], 
    c: 1, 
    exp: "Verified Answer: B. Legal principles of armed conflict in cyberspace"
  },
  { 
    id: 319, 
    q: "Which organization plays a significant role in drafting international guidelines for internet governance?", 
    a: ["ICANN", "UN General Assembly", "ITU (International Telecommunication Union)", "NATO"], 
    c: 2, 
    exp: "Verified Answer: C. ITU (International Telecommunication Union)"
  },
  { 
    id: 320, 
    q: "Under international law, which principle is used to govern the attribution of state-sponsored cyberattacks?", 
    a: ["Principle of proportionality", "Principle of sovereignty", "Principle of non-intervention", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 321, 
    q: "Which international agreement governs cross-border data sharing for law enforcement purposes?", 
    a: ["Hague Convention", "MLA T (Mutual Legal Assistance Treaty)", "Paris Convention", "Geneva Convention"], 
    c: 1, 
    exp: "Verified Answer: B. MLA T (Mutual Legal Assistance Treaty)"
  },
  { 
    id: 322, 
    q: "What is a significant challenge in enforcing international cyber laws?", 
    a: ["Lack of technical expertise", "Difficulty in attributing attacks to specific entities", "Absence of international cooperation", "Complex cybersecurity tools"], 
    c: 1, 
    exp: "Verified Answer: B. Difficulty in attributing attacks to specific entities"
  },
  { 
    id: 323, 
    q: "Which organization developed the “Global Cybersecurity Index”?", 
    a: ["World Economic Forum", "ITU (International Telecommunication Union)", "INTERPOL", "UNDP"], 
    c: 1, 
    exp: "Verified Answer: B. ITU (International Telecommunication Union)"
  },
  { 
    id: 324, 
    q: "What is the role of the Council of Europe in regulating cyber activities?", 
    a: ["Enforcing intellectual property laws", "Drafting policies on privacy and data protection", "Overseeing the Budapest Convention on Cybercrime", "Monitoring global trade regulations"], 
    c: 2, 
    exp: "Verified Answer: C. Overseeing the Budapest Convention on Cybercrime"
  },
  { 
    id: 325, 
    q: "Which law in India governs the publication and transmission of obscene material online?", 
    a: ["IT Act, Section 67", "IPC Section 375", "Copyright Act, 1957", "Cyber Crime Prevention Act"], 
    c: 0, 
    exp: "Verified Answer: A. IT Act, Section 67"
  },
  { 
    id: 326, 
    q: "What does Section 67B of the IT Act, 2000 specifically address?", 
    a: ["Child pornography", "Defamation online", "Cyber terrorism", "Online fraud"], 
    c: 0, 
    exp: "Verified Answer: A. Child pornography"
  },
  { 
    id: 327, 
    q: "Which of the following is a major global treaty addressing online child exploitation?", 
    a: ["Convention on Cybercrime", "Optional Protocol to the Convention on the Rights of the Child", "Hague Convention on Cyber Laws", "Geneva Convention on Digital Safety"], 
    c: 1, 
    exp: "Verified Answer: B. Optional Protocol to the Convention on the Rights of the Child"
  },
  { 
    id: 328, 
    q: "What is a significant challenge in combating obscenity and pornography on the internet?", 
    a: ["Lack of awareness", "Anonymity of offenders", "Inadequate technology", "Limited user base"], 
    c: 1, 
    exp: "Verified Answer: B. Anonymity of offenders"
  },
  { 
    id: 329, 
    q: "What is the penalty under Section 67 of the IT Act for publishing obscene material online?", 
    a: ["2 years imprisonment and a fine of 1 lakh", "3 years imprisonment and a fine of 5 lakhs", "5 years imprisonment and a fine of 10 lakhs", "7 years imprisonment and confiscation of assets"], 
    c: 0, 
    exp: "Verified Answer: A. 2 years imprisonment and a fine of 1 lakh"
  },
  { 
    id: 330, 
    q: "What is “revenge pornography”?", 
    a: ["Publishing explicit material without consent for blackmail", "Sharing public domain images online", "Posting misleading information about a person", "Hacking personal accounts to defame someone"], 
    c: 0, 
    exp: "Verified Answer: A. Publishing explicit material without consent for blackmail"
  },
  { 
    id: 331, 
    q: "Which of the following is NOT a method to combat online pornography?", 
    a: ["Deploying AI tools for content moderation", "Strengthening encryption for anonymity", "Educating users on safe browsing practices", "Strict enforcement of cyber laws"], 
    c: 1, 
    exp: "Verified Answer: B. Strengthening encryption for anonymity"
  },
  { 
    id: 332, 
    q: "What is the primary goal of ethical hacking?", 
    a: ["To exploit systems for financial gain", "To identify and fix security vulnerabilities", "To spread malware across networks", "To develop new hacking tools"], 
    c: 1, 
    exp: "Verified Answer: B. To identify and fix security vulnerabilities"
  },
  { 
    id: 333, 
    q: "Which of the following best describes an ethical hacker?", 
    a: ["A hacker working with malicious intent", "A certified professional authorized to find vulnerabilities", "A freelance hacker working for personal benefit", "A government employee monitoring all systems"], 
    c: 1, 
    exp: "Verified Answer: B. A certified professional authorized to find vulnerabilities"
  },
  { 
    id: 334, 
    q: "What is the first phase in the ethical hacking process?", 
    a: ["Exploitation", "Reconnaissance", "Privilege escalation", "Post-exploitation"], 
    c: 1, 
    exp: "Verified Answer: B. Reconnaissance"
  },
  { 
    id: 335, 
    q: "What is a “white hat hacker”?", 
    a: ["A malicious hacker targeting personal systems", "A hacker who tests security with permission", "A government hacker working covertly", "A hacker specializing in ransomware attacks"], 
    c: 1, 
    exp: "Verified Answer: B. A hacker who tests security with permission"
  },
  { 
    id: 336, 
    q: "Which certification is widely recognized for ethical hacking?", 
    a: ["Certified Information Systems Auditor (CISA)", "Certified Ethical Hacker (CEH)", "Offensive Security Certified Professional (OSCP)", "Certified Network Defender (CND)"], 
    c: 1, 
    exp: "Verified Answer: B. Certified Ethical Hacker (CEH)"
  },
  { 
    id: 337, 
    q: "What distinguishes ethical hacking from malicious hacking?", 
    a: ["Ethical hacking requires advanced tools", "Ethical hacking is authorized and legal", "Ethical hacking uses outdated techniques", "Ethical hacking avoids system testing"], 
    c: 1, 
    exp: "Verified Answer: B. Ethical hacking is authorized and legal"
  },
  { 
    id: 338, 
    q: "Which of the following tools is commonly used in ethical hacking?", 
    a: ["Burp Suite", "Wireshark", "Metasploit", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 339, 
    q: "Which type of hacking involves testing a system without knowing its internal details?", 
    a: ["Black-box testing", "White-box testing", "Gray-box testing", "Penetration testing"], 
    c: 0, 
    exp: "Verified Answer: A. Black-box testing"
  },
  { 
    id: 340, 
    q: "What is a “penetration test”?", 
    a: ["A security measure to block intrusions", "An analysis of user access controls", "A simulated cyberattack to evaluate system defenses", "A report on system design flaws"], 
    c: 2, 
    exp: "Verified Answer: C. A simulated cyberattack to evaluate system defenses"
  },
  { 
    id: 341, 
    q: "Which ethical hacking methodology involves testing for vulnerabilities in software code?", 
    a: ["Social engineering", "Application security testing", "Reverse engineering", "Network monitoring"], 
    c: 1, 
    exp: "Verified Answer: B. Application security testing"
  },
  { 
    id: 342, 
    q: "What does “vulnerability” refer to in ethical hacking?", 
    a: ["A successful attack on a system", "A weakness in a system that can be exploited", "A hacker ’s tool to gain unauthorized access", "A method to encrypt sensitive data"], 
    c: 1, 
    exp: "Verified Answer: B. A weakness in a system that can be exploited"
  },
  { 
    id: 343, 
    q: "What is the term for an ethical hacker testing without any prior knowledge of the system?", 
    a: ["Gray-box testing", "Black-box testing", "White-box testing", "External auditing"], 
    c: 1, 
    exp: "Verified Answer: B. Black-box testing"
  },
  { 
    id: 344, 
    q: "What does the term “exploit” mean in ethical hacking?", 
    a: ["A tool used to strengthen system security", "A method of encrypting data", "A software or script used to take advantage of vulnerabilities", "A type of phishing attack"], 
    c: 2, 
    exp: "Verified Answer: C. A software or script used to take advantage of vulnerabilities"
  },
  { 
    id: 345, 
    q: "What is a “payload” in ethical hacking?", 
    a: ["The part of an exploit that performs a specific task", "The data sent in a phishing email", "A tool to encrypt sensitive information", "A type of denial-of-service attack"], 
    c: 0, 
    exp: "Verified Answer: A. The part of an exploit that performs a specific task"
  },
  { 
    id: 346, 
    q: "What is the purpose of “social engineering” in hacking?", 
    a: ["Encrypting sensitive data", "Exploiting human behavior to gain unauthorized access", "Monitoring network traffic", "Testing the strength of firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Exploiting human behavior to gain unauthorized access"
  },
  { 
    id: 347, 
    q: "What does “zero-day vulnerability” mean?", 
    a: ["A vulnerability known to the public for a long time", "A vulnerability that has no patches available yet", "A vulnerability used in phishing attacks", "A vulnerability related to outdated software"], 
    c: 1, 
    exp: "Verified Answer: B. A vulnerability that has no patches available yet"
  },
  { 
    id: 348, 
    q: "What is “footprinting” in ethical hacking?", 
    a: ["Tracing the physical location of an attacker", "Collecting information about a target system", "Creating an exploit to attack a vulnerability", "Blocking access to a network"], 
    c: 1, 
    exp: "Verified Answer: B. Collecting information about a target system"
  },
  { 
    id: 349, 
    q: "What does “enumeration” mean in ethical hacking?", 
    a: ["Identifying and listing specific network resources or information", "Creating a report of all identified vulnerabilities", "Simulating a distributed denial-of-service attack", "Testing firewalls for weaknesses"], 
    c: 0, 
    exp: "Verified Answer: A. Identifying and listing specific network resources or information"
  },
  { 
    id: 350, 
    q: "What is “reconnaissance” in ethical hacking?", 
    a: ["Testing firewalls for weaknesses", "Gathering information to plan an attack", "Encrypting sensitive data before transmission", "Performing penetration testing on software"], 
    c: 1, 
    exp: "Verified Answer: B. Gathering information to plan an attack"
  },
  { 
    id: 351, 
    q: "What does “hashing” mean in ethical hacking?", 
    a: ["Encrypting data for secure storage", "Converting data into a fixed-length value", "Identifying vulnerabilities in software", "Cracking passwords using brute force"], 
    c: 1, 
    exp: "Verified Answer: B. Converting data into a fixed-length value"
  },
  { 
    id: 352, 
    q: "What is “keylogging” in hacking technologies?", 
    a: ["A method to encrypt sensitive data", "Monitoring and recording keystrokes on a device", "A process to delete data remotely", "A type of firewall protection"], 
    c: 1, 
    exp: "Verified Answer: B. Monitoring and recording keystrokes on a device"
  },
  { 
    id: 353, 
    q: "Which of the following is considered a wireless hacking tool?", 
    a: ["Aircrack-ng", "Burp Suite", "Metasploit", "Nmap"], 
    c: 0, 
    exp: "Verified Answer: A. Aircrack-ng"
  },
  { 
    id: 354, 
    q: "What does a “Trojan horse” in hacking refer to?", 
    a: ["A virus that self-replicates", "A malicious program disguised as a legitimate application", "A method of encrypting sensitive data", "A technique used for network scanning"], 
    c: 1, 
    exp: "Verified Answer: B. A malicious program disguised as a legitimate application"
  },
  { 
    id: 355, 
    q: "What is the primary purpose of a “rootkit”?", 
    a: ["To test the strength of a system’ s encryption", "To gain unauthorized administrative control of a system", "To monitor network traffic", "To encrypt sensitive files"], 
    c: 1, 
    exp: "Verified Answer: B. To gain unauthorized administrative control of a system"
  },
  { 
    id: 356, 
    q: "What is the role of a “packet sniffer” in hacking technologies?", 
    a: ["To block incoming network traffic", "To detect and analyze data packets on a network", "To delete sensitive data from a server", "To encrypt data transmitted over a network"], 
    c: 1, 
    exp: "Verified Answer: B. To detect and analyze data packets on a network"
  },
  { 
    id: 357, 
    q: "Which technology is used to perform “man-in-the-middle” attacks?", 
    a: ["ARP spoofing", "SQL injection", "Cross-site scripting", "DDoS attack"], 
    c: 0, 
    exp: "Verified Answer: A. ARP spoofing"
  },
  { 
    id: 358, 
    q: "What is “session hijacking” in hacking?", 
    a: ["Taking over an active session between a user and a web application", "Creating fake user sessions on a system", "Encrypting user data during a session", "Performing a denial-of-service attack during a session"], 
    c: 0, 
    exp: "Verified Answer: A. Taking over an active session between a user and a web application"
  },
  { 
    id: 359, 
    q: "What is “pharming” in hacking technologies?", 
    a: ["Redirecting users to a fraudulent website without their knowledge", "Harvesting user data through phishing emails", "Infecting systems with malware via downloads", "Blocking access to a legitimate website"], 
    c: 0, 
    exp: "Verified Answer: A. Redirecting users to a fraudulent website without their knowledge"
  },
  { 
    id: 360, 
    q: "Which hacking technology exploits unpatched software vulnerabilities?", 
    a: ["Buffer overflow", "SQL injection", "Exploit kits", "Cross-site scripting"], 
    c: 2, 
    exp: "Verified Answer: C. Exploit kits"
  },
  { 
    id: 361, 
    q: "What is “ethical hacking”?", 
    a: ["Hacking performed for malicious purposes", "Hacking with legal permission to identify vulnerabilities", "Hacking by installing malicious software", "Hacking that involves brute force techniques"], 
    c: 1, 
    exp: "Verified Answer: B. Hacking with legal permission to identify vulnerabilities"
  },
  { 
    id: 362, 
    q: "What is the first phase of ethical hacking?", 
    a: ["Scanning", "Reconnaissance", "Exploitation", "Reporting"], 
    c: 1, 
    exp: "Verified Answer: B. Reconnaissance"
  },
  { 
    id: 363, 
    q: "During which phase of ethical hacking is the vulnerability of the target system actively tested?", 
    a: ["Reconnaissance", "Exploitation", "Scanning", "Reporting"], 
    c: 2, 
    exp: "Verified Answer: C. Scanning"
  },
  { 
    id: 364, 
    q: "What is the main purpose of the “gaining access” phase in ethical hacking?", 
    a: ["To exploit identified vulnerabilities to access the target system", "To monitor the network for unusual activities", "To collect initial information about the target", "To generate a detailed report"], 
    c: 0, 
    exp: "Verified Answer: A. To exploit identified vulnerabilities to access the target system"
  },
  { 
    id: 365, 
    q: "What happens in the “maintaining access” phase of ethical hacking?", 
    a: ["Analyzing vulnerabilities", "Establishing backdoors for future access", "Deleting logs to avoid detection", "Exploiting vulnerabilities in real-time"], 
    c: 1, 
    exp: "Verified Answer: B. Establishing backdoors for future access"
  },
  { 
    id: 366, 
    q: "In which phase of ethical hacking is the system restored to its original state?", 
    a: ["Maintaining access", "Scanning", "Reporting", "Clearing tracks"], 
    c: 3, 
    exp: "Verified Answer: D. Clearing tracks"
  },
  { 
    id: 367, 
    q: "Which ethical hacking phase includes generating a detailed security assessment report?", 
    a: ["Reconnaissance", "Reporting", "Exploitation", "Maintaining access"], 
    c: 1, 
    exp: "Verified Answer: B. Reporting"
  },
  { 
    id: 368, 
    q: "What is “passive reconnaissance” in the first phase of ethical hacking?", 
    a: ["Interacting directly with the target system", "Gathering information without interacting with the target system", "Scanning for open ports", "Deploying exploits on the target system"], 
    c: 1, 
    exp: "Verified Answer: B. Gathering information without interacting with the target system"
  },
  { 
    id: 369, 
    q: "What is the key objective of the “scanning” phase in ethical hacking?", 
    a: ["Exploiting the vulnerabilities in the target system", "Collecting public domain information about the target", "Identifying live hosts, open ports, and services in the target network", "Documenting the vulnerabilities"], 
    c: 2, 
    exp: "Verified Answer: C. Identifying live hosts, open ports, and services in the target network"
  },
  { 
    id: 370, 
    q: "Which phase of ethical hacking uses tools like Metasploit and Nessus?", 
    a: ["Reconnaissance", "Scanning", "Exploitation", "Reporting"], 
    c: 2, 
    exp: "Verified Answer: C. Exploitation"
  },
  { 
    id: 371, 
    q: "Why is “clearing tracks” an essential phase in ethical hacking?", 
    a: ["To prevent legal actions against ethical hackers", "To ensure the target system remains operational after testing", "To avoid detection and maintain the confidentiality of the hacking process", "To generate a final report"], 
    c: 2, 
    exp: "Verified Answer: C. To avoid detection and maintain the confidentiality of the hacking process"
  },
  { 
    id: 372, 
    q: "Which of the following best describes a “White Hat” hacker?", 
    a: ["A hacker who engages in illegal activities for personal gain", "A hacker hired to improve security and find vulnerabilities legally", "A hacker who creates viruses and malware", "A hacker who has no knowledge of cybersecurity but attempts hacking"], 
    c: 1, 
    exp: "Verified Answer: B. A hacker hired to improve security and find vulnerabilities legally"
  },
  { 
    id: 373, 
    q: "What is the primary goal of a “Black Hat” hacker?", 
    a: ["To perform security assessments for organizations", "To expose security flaws for ethical purposes", "To exploit vulnerabilities for malicious purposes", "To assist law enforcement in tracking cybercriminals"], 
    c: 2, 
    exp: "Verified Answer: C. To exploit vulnerabilities for malicious purposes"
  },
  { 
    id: 374, 
    q: "Which hacker type is known as a “Grey Hat” hacker?", 
    a: ["A hacker who follows legal and ethical guidelines", "A hacker who has no ethical boundaries", "A hacker who may break the law but has ethical intentions", "A hacker who is not skilled in cybersecurity"], 
    c: 2, 
    exp: "Verified Answer: C. A hacker who may break the law but has ethical intentions"
  },
  { 
    id: 374, 
    q: "Which hacker type is known as a “Grey Hat” hacker?", 
    a: ["A hacker who follows legal and ethical guidelines", "A hacker who has no ethical boundaries", "A hacker who may break the law but has ethical intentions", "A hacker who is not skilled in cybersecurity"], 
    c: 2, 
    exp: "Verified Answer: C. A hacker who may break the law but has ethical intentions"
  },
  { 
    id: 375, 
    q: "What is the main characteristic of a “Script Kiddie”?", 
    a: ["They write complex hacking scripts to exploit vulnerabilities", "They use pre-made hacking tools without deep understanding", "They work with government agencies for cybersecurity", "They specialize in ethical hacking and penetration testing"], 
    c: 1, 
    exp: "Verified Answer: B. They use pre-made hacking tools without deep understanding"
  },
  { 
    id: 376, 
    q: "What differentiates a “State-Sponsored” hacker from other hacker classes?", 
    a: ["They work independently for personal gain", "They hack government networks for fun", "They are employed by governments for cyber espionage and attacks", "They only perform ethical hacking for companies"], 
    c: 2, 
    exp: "Verified Answer: C. They are employed by governments for cyber espionage and attacks"
  },
  { 
    id: 377, 
    q: "What is the primary role of a Red Team in cybersecurity?", 
    a: ["To simulate real-world attacks and test an organization's defenses", "To defend against cyberattacks and respond to threats", "To ensure compliance with security regulations", "To conduct risk assessments and audits"], 
    c: 0, 
    exp: "Verified Answer: A. To simulate real-world attacks and test an organization's defenses"
  },
  { 
    id: 378, 
    q: "Which team is responsible for defending against attacks and responding to security incidents?", 
    a: ["Red Team", "Blue Team", "Grey Team", "White Team"], 
    c: 1, 
    exp: "Verified Answer: B. Blue Team"
  },
  { 
    id: 379, 
    q: "What is the primary function of a Grey Team in cybersecurity?", 
    a: ["To act as a mediator between Red and Blue Teams", "To launch attacks without following ethical guidelines", "To only focus on security compliance", "To hack systems for personal gain"], 
    c: 0, 
    exp: "Verified Answer: A. To act as a mediator between Red and Blue Teams"
  },
  { 
    id: 380, 
    q: "Which of the following best describes a key difference between the Red and Blue Teams?", 
    a: ["Red Team attacks, while Blue Team defends", "Blue Team attacks, while Red Team defends", "Both teams focus only on compliance and audits", "Red Team reports vulnerabilities, while Blue Team exploits them"], 
    c: 0, 
    exp: "Verified Answer: A. Red Team attacks, while Blue Team defends"
  },
  { 
    id: 381, 
    q: "How do Red and Blue Teams work together effectively in cybersecurity operations?", 
    a: ["By conducting independent tests without coordination", "By engaging in continuous testing and improvement cycles", "By reporting each other ’s failures to management", "By replacing each other periodically"], 
    c: 1, 
    exp: "Verified Answer: B. By engaging in continuous testing and improvement cycles"
  },
  { 
    id: 382, 
    q: "What is the primary difference between an ethical hacker and a cracker?", 
    a: ["Ethical hackers work legally , while crackers engage in illegal activities", "Crackers are certified professionals, while ethical hackers are not", "Ethical hackers steal data, while crackers protect systems", "Ethical hackers do not use hacking tools, while crackers do"], 
    c: 0, 
    exp: "Verified Answer: A. Ethical hackers work legally , while crackers engage in illegal activities"
  },
  { 
    id: 383, 
    q: "Which of the following best describes a cracker?", 
    a: ["A hacker who tests security with permission", "A person who breaks into systems illegally for personal gain", "A security professional working for government agencies", "A cybersecurity researcher working in an ethical manner"], 
    c: 1, 
    exp: "Verified Answer: B. A person who breaks into systems illegally for personal gain"
  },
  { 
    id: 384, 
    q: "What is another term commonly used for an ethical hacker?", 
    a: ["Black Hat Hacker", "White Hat Hacker", "Grey Hat Hacker", "Script Kiddie"], 
    c: 1, 
    exp: "Verified Answer: B. White Hat Hacker"
  },
  { 
    id: 385, 
    q: "How do ethical hackers contribute to cybersecurity?", 
    a: ["By launching cyberattacks to steal financial data", "By identifying and fixing security vulnerabilities in a legal manner", "By spreading malware to test system resilience", "By disrupting government networks to expose flaws"], 
    c: 1, 
    exp: "Verified Answer: B. By identifying and fixing security vulnerabilities in a legal manner"
  },
  { 
    id: 386, 
    q: "Which of the following actions is considered unethical hacking (cracking)?", 
    a: ["Conducting penetration testing with company approval", "Exploiting system vulnerabilities to gain unauthorized access", "Reporting a security weakness to the organization", "Using ethical hacking tools to strengthen security"], 
    c: 1, 
    exp: "Verified Answer: B. Exploiting system vulnerabilities to gain unauthorized access"
  },
  { 
    id: 387, 
    q: "What is the primary goal of an attacker in a cyber attack?", 
    a: ["To secure the victim's system from future threats", "To gain unauthorized access to information or disrupt services", "To improve cybersecurity policies of an organization", "To conduct ethical penetration testing"], 
    c: 1, 
    exp: "Verified Answer: B. To gain unauthorized access to information or disrupt services"
  },
  { 
    id: 388, 
    q: "Which of the following is NOT a common goal of cyber attackers?", 
    a: ["Financial gain through fraud or ransom attacks", "Disrupting critical infrastructure systems", "Strengthening network security by fixing vulnerabilities", "Espionage and stealing confidential data"], 
    c: 2, 
    exp: "Verified Answer: C. Strengthening network security by fixing vulnerabilities"
  },
  { 
    id: 389, 
    q: "Attackers who seek to disrupt online services using methods like DDoS attacks are primarily focused on which goal?", 
    a: ["Data theft", "Financial fraud", "Service disruption", "Gaining system access for future attacks"], 
    c: 2, 
    exp: "Verified Answer: C. Service disruption"
  },
  { 
    id: 390, 
    q: "Which of the following best describes a cyber attack motivated by espionage?", 
    a: ["An attack launched to steal sensitive business or government data", "A cyber attack designed to spread misinformation", "A ransomware attack demanding a financial payment", "A phishing scam targeting individual users"], 
    c: 0, 
    exp: "Verified Answer: A. An attack launched to steal sensitive business or government data"
  },
  { 
    id: 391, 
    q: "Attackers aiming to manipulate stock prices or financial markets often engage in which type of attack?", 
    a: ["Ransomware attacks", "Insider trading and financial fraud", "DDoS attacks", "Cryptojacking"], 
    c: 1, 
    exp: "Verified Answer: B. Insider trading and financial fraud"
  },
  { 
    id: 392, 
    q: "What does the Security , Functionality , and Ease of Use Triangle represent in cybersecurity?", 
    a: ["A framework for developing hacking tools", "The balance between security , system functionality , and user convenience", "A concept used for testing network speeds", "A model for designing firewalls only"], 
    c: 1, 
    exp: "Verified Answer: B. The balance between security , system functionality , and user convenience"
  },
  { 
    id: 393, 
    q: "In the Security , Functionality , and Ease of Use Triangle, increasing security typically results in which of the following?", 
    a: ["Increased system functionality", "Decreased usability", "Improved ease of use", "Elimination of vulnerabilities without drawbacks"], 
    c: 1, 
    exp: "Verified Answer: B. Decreased usability"
  },
  { 
    id: 394, 
    q: "Why is it difficult to achieve a perfect balance between security , functionality , and ease of use?", 
    a: ["Security measures often restrict certain functionalities and complicate usability", "Functionality is always more important than security", "Ease of use is unnecessary in cybersecurity", "Security does not impact functionality in any way"], 
    c: 0, 
    exp: "Verified Answer: A. Security measures often restrict certain functionalities and complicate usability"
  },
  { 
    id: 395, 
    q: "Which of the following is an example of a compromise between security and ease of use?", 
    a: ["Implementing multi-factor authentication (MFA) for logging into an online account", "Removing all security measures to simplify access", "Allowing users to set weak passwords for convenience", "Disabling encryption to improve system speed"], 
    c: 0, 
    exp: "Verified Answer: A. Implementing multi-factor authentication (MFA) for logging into an online account"
  },
  { 
    id: 396, 
    q: "If an organization prioritizes ease of use over security , what risk does it face?", 
    a: ["Faster system performance without security concerns", "Increased risk of cyberattacks due to weak security controls", "Improved security with no usability challenges", "Elimination of all cybersecurity threats"], 
    c: 1, 
    exp: "Verified Answer: B. Increased risk of cyberattacks due to weak security controls"
  },
  { 
    id: 397, 
    q: "Which of the following is a fundamental skill required to become an ethical hacker?", 
    a: ["Advanced knowledge of hacking without legal implications", "Proficiency in programming and scripting languages", "Mastery of social engineering only", "Avoiding cybersecurity certifications"], 
    c: 1, 
    exp: "Verified Answer: B. Proficiency in programming and scripting languages"
  },
  { 
    id: 398, 
    q: "Why is networking knowledge essential for an ethical hacker?", 
    a: ["It helps in understanding how computer networks communicate and identify vulnerabilities", "It is only needed for setting up local networks", "Ethical hacking does not involve networking concepts", "Ethical hackers only focus on application security , not networks"], 
    c: 0, 
    exp: "Verified Answer: A. It helps in understanding how computer networks communicate and identify vulnerabilities"
  },
  { 
    id: 399, 
    q: "Which cybersecurity tool should an ethical hacker be proficient in?", 
    a: ["Burp Suite", "Photoshop", "Microsoft Excel", "Blender"], 
    c: 0, 
    exp: "Verified Answer: A. Burp Suite"
  },
  { 
    id: 400, 
    q: "Why is knowledge of Linux important for ethical hackers?", 
    a: ["Most hacking tools and security-related software are built for Linux environments", "Ethical hacking is only possible on Linux systems", "Windows is not used in cybersecurity", "Ethical hackers do not require operating system knowledge"], 
    c: 0, 
    exp: "Verified Answer: A. Most hacking tools and security-related software are built for Linux environments"
  },
  { 
    id: 401, 
    q: "Which soft skill is crucial for ethical hackers to be successful?", 
    a: ["Strong communication and problem-solving skills", "Ability to memorize passwords only", "Avoiding teamwork and working in isolation", "Ignoring security policies"], 
    c: 0, 
    exp: "Verified Answer: A. Strong communication and problem-solving skills"
  },
  { 
    id: 402, 
    q: "What is the primary objective of a Security Evaluation Plan?", 
    a: ["To ensure security measures are effectively implemented and tested", "To replace existing security policies", "To identify employees responsible for security breaches", "To create unnecessary complexity in security processes"], 
    c: 0, 
    exp: "Verified Answer: A. To ensure security measures are effectively implemented and tested"
  },
  { 
    id: 403, 
    q: "Which of the following is a critical step in creating a Security Evaluation Plan?", 
    a: ["Defining security objectives and scope", "Avoiding documentation for security policies", "Excluding risk assessment from the process", "Only testing security controls without implementation"], 
    c: 0, 
    exp: "Verified Answer: A. Defining security objectives and scope"
  },
  { 
    id: 404, 
    q: "Why is regular security assessment important in a Security Evaluation Plan?", 
    a: ["It helps in identifying vulnerabilities and ensuring compliance", "It increases workload without benefits", "It is only required after a security breach occurs", "It is unnecessary if security tools are already implemented"], 
    c: 0, 
    exp: "Verified Answer: A. It helps in identifying vulnerabilities and ensuring compliance"
  },
  { 
    id: 405, 
    q: "Which tool is commonly used in Security Evaluation Plans for vulnerability assessment?", 
    a: ["Nessus", "Adobe Photoshop", "AutoCAD", "VLC Media Player"], 
    c: 0, 
    exp: "Verified Answer: A. Nessus"
  },
  { 
    id: 406, 
    q: "What role does penetration testing play in a Security Evaluation Plan?", 
    a: ["It helps in identifying exploitable vulnerabilities within a system", "It is not necessary for security evaluation", "It replaces all other security controls", "It only focuses on physical security"], 
    c: 0, 
    exp: "Verified Answer: A. It helps in identifying exploitable vulnerabilities within a system"
  },
  { 
    id: 407, 
    q: "Which of the following is an example of an ethical hacking technique used to test the security of a network?", 
    a: ["Phishing", "Penetration Testing", "Malware Injection", "Social Engineering"], 
    c: 1, 
    exp: "Verified Answer: B. Penetration Testing"
  },
  { 
    id: 408, 
    q: "What type of ethical hacking focuses on testing an organization’ s physical security measures?", 
    a: ["Network Hacking", "Physical Security Testing", "Web Application Hacking", "System Hacking"], 
    c: 1, 
    exp: "Verified Answer: B. Physical Security Testing"
  },
  { 
    id: 409, 
    q: "Which ethical hacking method is used to assess the security of web applications?", 
    a: ["Wi-Fi Hacking", "Web Application Hacking", "Cloud Hacking", "Reverse Engineering"], 
    c: 1, 
    exp: "Verified Answer: B. Web Application Hacking"
  },
  { 
    id: 410, 
    q: "Which type of ethical hacking targets wireless networks to identify security weaknesses?", 
    a: ["Network Hacking", "Wireless Network Hacking", "Mobile Device Hacking", "Cryptographic Hacking"], 
    c: 1, 
    exp: "Verified Answer: B. Wireless Network Hacking"
  },
  { 
    id: 411, 
    q: "What is the primary goal of mobile device hacking in ethical hacking?", 
    a: ["To exploit mobile applications and steal data", "To identify and fix vulnerabilities in mobile operating systems and applications", "To install malware on smartphones", "To bypass legal restrictions on mobile devices"], 
    c: 1, 
    exp: "Verified Answer: B. To identify and fix vulnerabilities in mobile operating systems and applications"
  },
  { 
    id: 412, 
    q: "What is the primary goal of footprinting in ethical hacking?", 
    a: ["Gaining unauthorized access to a system", "Gathering as much information as possible about a target", "Destroying a network’ s security infrastructure", "Installing malware in the target system"], 
    c: 1, 
    exp: "Verified Answer: B. Gathering as much information as possible about a target"
  },
  { 
    id: 413, 
    q: "Which of the following is a passive footprinting technique?", 
    a: ["Port Scanning", "WHOIS Lookup", "SQL Injection", "Buffer Overflow"], 
    c: 1, 
    exp: "Verified Answer: B. WHOIS Lookup"
  },
  { 
    id: 414, 
    q: "What type of social engineering attack involves an attacker pretending to be a legitimate entity in an email to trick victims?", 
    a: ["Phishing", "Shoulder Surfing", "Baiting", "Dumpster Diving"], 
    c: 0, 
    exp: "Verified Answer: A. Phishing"
  },
  { 
    id: 415, 
    q: "What is the purpose of Google Dorking in footprinting?", 
    a: ["To perform brute force attacks", "To find exposed sensitive information using Google search queries", "To create a denial-of-service attack", "To test password strength"], 
    c: 1, 
    exp: "Verified Answer: B. To find exposed sensitive information using Google search queries"
  },
  { 
    id: 416, 
    q: "Which of the following is an example of active footprinting?", 
    a: ["Searching a company’ s website for contact details", "Using Nmap to scan open ports on a target server", "Reading news articles about a target organization", "Checking the WHOIS database"], 
    c: 1, 
    exp: "Verified Answer: B. Using Nmap to scan open ports on a target server"
  },
  { 
    id: 417, 
    q: "What is a common method used in social engineering to trick individuals into revealing their passwords?", 
    a: ["Port Scanning", "Keylogging", "Pretexting", "DoS Attack"], 
    c: 2, 
    exp: "Verified Answer: C. Pretexting"
  },
  { 
    id: 418, 
    q: "What is the main difference between passive and active footprinting?", 
    a: ["Passive footprinting does not interact with the target, while active footprinting does", "Active footprinting is always illegal, while passive footprinting is legal", "Passive footprinting gathers only IP addresses, while active footprinting gathers domain names", "Active footprinting is performed using Google searches, while passive footprinting requires hacking tools"], 
    c: 0, 
    exp: "Verified Answer: A. Passive footprinting does not interact with the target, while active footprinting does"
  },
  { 
    id: 419, 
    q: "Which of the following is a technique used to gather information through discarded physical documents?", 
    a: ["Phishing", "Spear Phishing", "Dumpster Diving", "Tailgating"], 
    c: 2, 
    exp: "Verified Answer: C. Dumpster Diving"
  },
  { 
    id: 420, 
    q: "What is the purpose of tailgating in social engineering?", 
    a: ["To trick a victim into clicking a malicious link", "To follow an authorized person into a restricted area without proper authentication", "To extract sensitive information through social media", "To gain remote access to a target’s computer"], 
    c: 1, 
    exp: "Verified Answer: B. To follow an authorized person into a restricted area without proper authentication"
  },
  { 
    id: 421, 
    q: "Which of the following is a common tool used for footprinting?", 
    a: ["Metasploit", "Shodan", "Burp Suite", "OWASP ZAP"], 
    c: 1, 
    exp: "Verified Answer: B. Shodan"
  },
  { 
    id: 422, 
    q: "What is the primary purpose of using the Traceroute tool in footprinting?", 
    a: ["To scan for open ports on a target system", "To determine the path data takes to reach a destination", "To exploit vulnerabilities in a web application", "To hide an attacker ’s identity while performing reconnaissance"], 
    c: 1, 
    exp: "Verified Answer: B. To determine the path data takes to reach a destination"
  },
  { 
    id: 423, 
    q: "Which network layer does the Traceroute tool primarily operate at?", 
    a: ["Data Link Layer", "Transport Layer", "Network Layer", "Application Layer"], 
    c: 2, 
    exp: "Verified Answer: C. Network Layer"
  },
  { 
    id: 424, 
    q: "What type of packet does the Traceroute tool use in most UNIX-based operating systems?", 
    a: ["ICMP Echo Requests", "UDP Packets with Increasing TTL Values", "TCP SYN Packets", "ARP Packets"], 
    c: 1, 
    exp: "Verified Answer: B. UDP Packets with Increasing TTL Values"
  },
  { 
    id: 425, 
    q: "How does Traceroute determine the path taken by packets?", 
    a: ["By modifying the packet’ s IP address", "By sending packets with a fixed TTL value", "By increasing the TTL value in each packet and recording responses from routers", "By capturing and analyzing network traffic"], 
    c: 2, 
    exp: "Verified Answer: C. By increasing the TTL value in each packet and recording responses from routers"
  },
  { 
    id: 426, 
    q: "Which of the following is a limitation of Traceroute in footprinting?", 
    a: ["It can only identify web servers", "It cannot detect open ports", "Some firewalls block ICMP responses, making Traceroute ineffective", "It can only work on internal networks"], 
    c: 2, 
    exp: "Verified Answer: C. Some firewalls block ICMP responses, making Traceroute ineffective"
  },
  { 
    id: 427, 
    q: "How can Traceroute help ethical hackers during reconnaissance?", 
    a: ["By identifying vulnerable ports on a target", "By mapping the network infrastructure and identifying routers and firewalls", "By performing SQL injection attacks", "By encrypting network traffic"], 
    c: 1, 
    exp: "Verified Answer: B. By mapping the network infrastructure and identifying routers and firewalls"
  },
  { 
    id: 428, 
    q: "Which command can be used in Windows to perform Traceroute?", 
    a: ["tracepath", "tracert", "ping -t", "nslookup"], 
    c: 1, 
    exp: "Verified Answer: B. tracert"
  },
  { 
    id: 429, 
    q: "What information can an attacker gather from Traceroute results?", 
    a: ["Operating system details of the target", "Firewall and router locations in the network path", "Encrypted passwords", "Database schema information"], 
    c: 1, 
    exp: "Verified Answer: B. Firewall and router locations in the network path"
  },
  { 
    id: 430, 
    q: "Which tool is an alternative to Traceroute that provides additional network mapping features?", 
    a: ["Wireshark", "Nmap", "Pathping", "Metasploit"], 
    c: 2, 
    exp: "Verified Answer: C. Pathping"
  },
  { 
    id: 431, 
    q: "How can Traceroute be used for detecting network filtering mechanisms?", 
    a: ["By analyzing which hops respond and which do not", "By scanning for vulnerabilities in a web server", "By identifying all active devices on a network", "By extracting sensitive data from a target"], 
    c: 0, 
    exp: "Verified Answer: A. By analyzing which hops respond and which do not"
  },
  { 
    id: 432, 
    q: "What is the primary purpose of port scanning?", 
    a: ["To identify the operating system of a target machine", "To determine which network devices are active", "To detect open ports and services running on a target system", "To encrypt network traffic"], 
    c: 2, 
    exp: "Verified Answer: C. To detect open ports and services running on a target system"
  },
  { 
    id: 433, 
    q: "Which of the following tools is commonly used for port scanning?", 
    a: ["Metasploit", "Wireshark", "Nmap", "Burp Suite"], 
    c: 2, 
    exp: "Verified Answer: C. Nmap"
  },
  { 
    id: 434, 
    q: "Which type of scan is used to check for active hosts in a network?", 
    a: ["Port Scanning", "Network Scanning", "Vulnerability Scanning", "SQL Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Network Scanning"
  },
  { 
    id: 435, 
    q: "What is the main difference between port scanning and network scanning?", 
    a: ["Port scanning identifies open ports on a single target, while network scanning identifies multiple active hosts in a network", "Port scanning is illegal, while network scanning is legal", "Port scanning is performed only on internal networks, while network scanning is external", "Network scanning only detects TCP-based networks"], 
    c: 0, 
    exp: "Verified Answer: A. Port scanning identifies open ports on a single target, while network scanning identifies multiple active hosts in a network"
  },
  { 
    id: 436, 
    q: "What is the main objective of vulnerability scanning?", 
    a: ["To test firewalls and intrusion detection systems", "To identify security weaknesses in a system or network", "To launch an attack on a remote server", "To prevent brute-force attacks"], 
    c: 1, 
    exp: "Verified Answer: B. To identify security weaknesses in a system or network"
  },
  { 
    id: 437, 
    q: "Which of the following tools is commonly used for vulnerability scanning?", 
    a: ["Wireshark", "Nessus", "Traceroute", "Aircrack-ng"], 
    c: 1, 
    exp: "Verified Answer: B. Nessus"
  },
  { 
    id: 438, 
    q: "Which of the following types of port scanning is considered the most stealthy?", 
    a: ["SYN Scan", "Full Connect Scan", "UDP Scan", "ICMP Scan"], 
    c: 0, 
    exp: "Verified Answer: A. SYN Scan"
  },
  { 
    id: 439, 
    q: "Which of the following is NOT a common type of network scanning?", 
    a: ["ICMP Ping Sweep", "ARP Scanning", "SQL Injection Scanning", "OS Fingerprinting"], 
    c: 2, 
    exp: "Verified Answer: C. SQL Injection Scanning"
  },
  { 
    id: 440, 
    q: "What is a major risk of performing vulnerability scanning on a live production network?", 
    a: ["It may crash systems or disrupt services", "It provides no useful information", "It only works on Windows-based networks", "It can only be performed by hackers"], 
    c: 0, 
    exp: "Verified Answer: A. It may crash systems or disrupt services"
  },
  { 
    id: 441, 
    q: "Which protocol is commonly used by the Ping command for network scanning?", 
    a: ["TCP", "UDP", "ICMP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C. ICMP"
  },
  { 
    id: 442, 
    q: "What is the primary goal of scanning in ethical hacking?", 
    a: ["To exploit system vulnerabilities", "To identify live hosts, open ports, and services running on a system", "To launch brute force attacks", "To disable security measures"], 
    c: 1, 
    exp: "Verified Answer: B. To identify live hosts, open ports, and services running on a system"
  },
  { 
    id: 443, 
    q: "Which of the following is NOT a type of scanning methodology?", 
    a: ["Port Scanning", "Network Scanning", "Vulnerability Scanning", "Keylogging"], 
    c: 3, 
    exp: "Verified Answer: D. Keylogging"
  },
  { 
    id: 444, 
    q: "Which scanning method is used to determine which services are running on a target system?", 
    a: ["OS Fingerprinting", "Port Scanning", "Passive Scanning", "SQL Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Port Scanning"
  },
  { 
    id: 445, 
    q: "What is an advantage of passive scanning over active scanning?", 
    a: ["It provides real-time results", "It is harder to detect by security systems", "It is faster than active scanning", "It does not require network access"], 
    c: 1, 
    exp: "Verified Answer: B. It is harder to detect by security systems"
  },
  { 
    id: 446, 
    q: "Which scanning method is used to identify the operating system of a target machine?", 
    a: ["OS Fingerprinting", "SYN Scanning", "UDP Scanning", "ICMP Ping Sweep"], 
    c: 0, 
    exp: "Verified Answer: A. OS Fingerprinting"
  },
  { 
    id: 447, 
    q: "What is the main difference between TCP Connect Scan and SYN Scan?", 
    a: ["TCP Connect Scan completes the handshake, whereas SYN Scan does not", "TCP Connect Scan is illegal, whereas SYN Scan is legal", "SYN Scan is slower than TCP Connect Scan", "SYN Scan only works on Windows systems"], 
    c: 0, 
    exp: "Verified Answer: A. TCP Connect Scan completes the handshake, whereas SYN Scan does not"
  },
  { 
    id: 448, 
    q: "Which type of scanning focuses on identifying known security flaws in systems?", 
    a: ["Port Scanning", "Vulnerability Scanning", "Network Scanning", "ARP Scanning"], 
    c: 1, 
    exp: "Verified Answer: B. Vulnerability Scanning"
  },
  { 
    id: 449, 
    q: "What is a primary drawback of performing aggressive scanning on a target network?", 
    a: ["It takes too long", "It is undetectable by firewalls", "It may trigger security alerts or even crash systems", "It does not provide accurate results"], 
    c: 2, 
    exp: "Verified Answer: C. It may trigger security alerts or even crash systems"
  },
  { 
    id: 450, 
    q: "Which scanning method attempts to detect live hosts by sending ICMP Echo Requests?", 
    a: ["SYN Scan", "Ping Sweep", "UDP Scan", "Stealth Scan"], 
    c: 1, 
    exp: "Verified Answer: B. Ping Sweep"
  },
  { 
    id: 450, 
    q: "Which scanning method attempts to detect live hosts by sending ICMP Echo Requests?", 
    a: ["SYN Scan", "Ping Sweep", "UDP Scan", "Stealth Scan"], 
    c: 1, 
    exp: "Verified Answer: B. Ping Sweep"
  },
  { 
    id: 451, 
    q: "Which of the following is a tool commonly used for network and vulnerability scanning?", 
    a: ["Wireshark", "Nmap", "John the Ripper", "Metasploit"], 
    c: 1, 
    exp: "Verified Answer: B. Nmap"
  },
  { 
    id: 452, 
    q: "What is the primary purpose of a SYN scan in network reconnaissance?", 
    a: ["To perform a full TCP handshake and establish a connection", "To stealthily identify open ports without completing the handshake", "To flood the target with requests and cause a Denial-of-Service (DoS)", "To scan for vulnerabilities in web applications"], 
    c: 1, 
    exp: "Verified Answer: B. To stealthily identify open ports without completing the handshake"
  },
  { 
    id: 453, 
    q: "Which of the following scanning techniques is also known as a “half-open scan”?", 
    a: ["FIN Scan", "SYN Scan", "NULL Scan", "XMAS Scan"], 
    c: 1, 
    exp: "Verified Answer: B. SYN Scan"
  },
  { 
    id: 454, 
    q: "How does a FIN scan attempt to identify open ports?", 
    a: ["By sending SYN packets and waiting for responses", "By sending a FIN packet to a port and checking for responses", "By flooding the target with TCP requests", "By using malformed packets to crash the target system"], 
    c: 1, 
    exp: "Verified Answer: B. By sending a FIN packet to a port and checking for responses"
  },
  { 
    id: 455, 
    q: "What is the characteristic of an XMAS scan?", 
    a: ["It sends TCP packets with FIN, URG, and PUSH flags set", "It sends SYN packets to multiple ports simultaneously", "It uses spoofed IP addresses to scan a target", "It only works on Windows-based systems"], 
    c: 0, 
    exp: "Verified Answer: A. It sends TCP packets with FIN, URG, and PUSH flags set"
  },
  { 
    id: 456, 
    q: "Why does an XMAS scan often fail against Windows-based systems?", 
    a: ["Windows systems ignore packets with multiple flags set", "Windows systems immediately block such scans", "XMAS scans require a Linux kernel to function", "Windows-based systems do not respond to any scanning attempts"], 
    c: 0, 
    exp: "Verified Answer: A. Windows systems ignore packets with multiple flags set"
  },
  { 
    id: 457, 
    q: "What is the key feature of a NULL scan?", 
    a: ["It sends TCP packets with all flag bits set to 0", "It attempts to flood the target with SYN packets", "It manipulates the TCP sequence numbers to evade detection", "It injects malicious payloads into network traffic"], 
    c: 0, 
    exp: "Verified Answer: A. It sends TCP packets with all flag bits set to 0"
  },
  { 
    id: 458, 
    q: "How does an IDLE scan work to evade detection?", 
    a: ["It spoofs an idle host's IP address to scan a target", "It sends TCP SYN packets directly to the target", "It uses ICMP packets to discover open ports", "It floods the network with UDP packets"], 
    c: 0, 
    exp: "Verified Answer: A. It spoofs an idle host's IP address to scan a target"
  },
  { 
    id: 459, 
    q: "What is the main advantage of using an IDLE scan?", 
    a: ["It is faster than SYN scanning", "It allows scanning without revealing the attacker ’s IP address", "It does not require network access", "It can scan both TCP and UDP ports simultaneously"], 
    c: 1, 
    exp: "Verified Answer: B. It allows scanning without revealing the attacker ’s IP address"
  },
  { 
    id: 460, 
    q: "Which type of scan sends only a FIN flag packet to detect open and closed ports?", 
    a: ["NULL Scan", "XMAS Scan", "SYN Scan", "FIN Scan"], 
    c: 3, 
    exp: "Verified Answer: D. FIN Scan"
  },
  { 
    id: 461, 
    q: "What is a major limitation of NULL, XMAS, and FIN scans?", 
    a: ["They are ineffective against firewalls", "They do not work on Windows-based systems", "They require administrator privileges to run", "They are always detected by IDS/IPS"], 
    c: 1, 
    exp: "Verified Answer: B. They do not work on Windows-based systems"
  },
  { 
    id: 462, 
    q: "What is the primary function of Nmap in the reconnaissance phase?", 
    a: ["To encrypt network traffic", "To scan for open ports and detect running services", "To modify firewall rules", "To analyze web application vulnerabilities"], 
    c: 1, 
    exp: "Verified Answer: B. To scan for open ports and detect running services"
  },
  { 
    id: 463, 
    q: "Which Nmap option is used for service and version detection on open ports?", 
    a: ["-sS", "-sV", "-O", "-Pn"], 
    c: 1, 
    exp: "Verified Answer: B. -sV"
  },
  { 
    id: 464, 
    q: "What information does a WHOIS lookup primarily provide?", 
    a: ["The current open ports on a target system", "Details about domain registration, including ownership, contact, and expiration data", "A list of vulnerabilities in the target’s operating system", "The encrypted traffic between the domain and its visitors"], 
    c: 1, 
    exp: "Verified Answer: B. Details about domain registration, including ownership, contact, and expiration data"
  },
  { 
    id: 465, 
    q: "Which Nmap scan type is commonly referred to as a “stealth scan” because it does not complete the full TCP handshake?", 
    a: ["SYN Scan (-sS)", "TCP Connect Scan (-sT)", "UDP Scan (-sU)", "FIN Scan (-sF)"], 
    c: 0, 
    exp: "Verified Answer: A. SYN Scan (-sS)"
  },
  { 
    id: 466, 
    q: "How can WHOIS data assist in the reconnaissance process?", 
    a: ["By providing a list of active network hosts", "By offering insights into the ownership and administrative contacts of a domain", "By detecting vulnerabilities in server software", "By encrypting communications between the client and server"], 
    c: 1, 
    exp: "Verified Answer: B. By offering insights into the ownership and administrative contacts of a domain"
  },
  { 
    id: 467, 
    q: "Which Nmap option is used to perform a “ping sweep” to identify active hosts in a network?", 
    a: ["-sP or -sn", "-sV", "-O", "-A"], 
    c: 0, 
    exp: "Verified Answer: A. -sP or -sn"
  },
  { 
    id: 468, 
    q: "How does Nmap perform OS fingerprinting on a target system?", 
    a: ["By sending specially crafted packets and analyzing responses", "By decrypting SSL/TLS communications", "By querying WHOIS databases", "By scanning DNS records"], 
    c: 0, 
    exp: "Verified Answer: A. By sending specially crafted packets and analyzing responses"
  },
  { 
    id: 469, 
    q: "What is one potential limitation of WHOIS data in reconnaissance?", 
    a: ["It is only accessible to government agencies", "It can be outdated or privacy-protected, limiting detailed information", "It provides real-time scanning results", "It requires a complete network scan to be effective"], 
    c: 1, 
    exp: "Verified Answer: B. It can be outdated or privacy-protected, limiting detailed information"
  },
  { 
    id: 470, 
    q: "Which of the following Nmap options would enable aggressive scanning that includes OS detection, version detection, script scanning, and traceroute?", 
    a: ["-sS", "-A", "-sU", "-Pn"], 
    c: 1, 
    exp: "Verified Answer: B. -A"
  },
  { 
    id: 471, 
    q: "How does combining Nmap and WHOIS information enhance the reconnaissance process?", 
    a: ["It allows attackers to bypass encryption", "It provides both technical network details and domain ownership information, enabling a more complete target profile", "It automatically patches vulnerabilities", "It focuses solely on social engineering techniques"], 
    c: 1, 
    exp: "Verified Answer: B. It provides both technical network details and domain ownership information, enabling a more complete target profile"
  },
  { 
    id: 472, 
    q: "What is the primary function of Netcraft in OSINT?", 
    a: ["To index Internet-connected devices", "To provide detailed information about web hosting, server infrastructure, and threat intelligence", "To automate email phishing campaigns", "To serve as a firewall for web applications"], 
    c: 1, 
    exp: "Verified Answer: B. To provide detailed information about web hosting, server infrastructure, and threat intelligence"
  },
  { 
    id: 473, 
    q: "Which OSINT tool is best known as the “search engine for Internet-connected devices”?", 
    a: ["Recon-ng", "Netcraft", "Google Dorks", "Shodan"], 
    c: 3, 
    exp: "Verified Answer: D. Shodan"
  },
  { 
    id: 474, 
    q: "What is the main purpose of using Google Dorks in information gathering?", 
    a: ["To launch denial-of-service attacks", "To use advanced search operators to uncover sensitive or hidden information", "To encrypt communications between devices", "To perform automated port scanning"], 
    c: 1, 
    exp: "Verified Answer: B. To use advanced search operators to uncover sensitive or hidden information"
  },
  { 
    id: 475, 
    q: "Which of the following best describes Recon-ng?", 
    a: ["A vulnerability scanner for web applications", "A framework that provides a modular environment for automating web reconnaissance and OSINT collection", "A tool for encrypting and decrypting sensitive files", "A social media monitoring tool"], 
    c: 1, 
    exp: "Verified Answer: B. A framework that provides a modular environment for automating web reconnaissance and OSINT collection"
  },
  { 
    id: 476, 
    q: "How can Netcraft help organizations improve their cybersecurity posture?", 
    a: ["By automatically patching vulnerabilities in web servers", "By providing historical data and threat analysis reports on phishing, malware, and server misconfigurations", "By scanning for wireless network vulnerabilities", "By offering free DDoS protection services"], 
    c: 1, 
    exp: "Verified Answer: B. By providing historical data and threat analysis reports on phishing, malware, and server misconfigurations"
  },
  { 
    id: 477, 
    q: "In what way does Shodan differ significantly from a traditional search engine like Google?", 
    a: ["Shodan focuses on indexing static web pages", "Shodan indexes Internet-connected devices and their associated metadata rather than web content", "Shodan is only used for academic research", "Shodan does not use any search operators"], 
    c: 1, 
    exp: "Verified Answer: B. Shodan indexes Internet-connected devices and their associated metadata rather than web content"
  },
  { 
    id: 478, 
    q: "What can a security professional potentially uncover using Google Dorks?", 
    a: ["Active firewall rules", "Misconfigured databases, sensitive documents, and exposed admin interfaces", "Encrypted communications between devices", "Real-time network traffic analytics"], 
    c: 1, 
    exp: "Verified Answer: B. Misconfigured databases, sensitive documents, and exposed admin interfaces"
  },
  { 
    id: 479, 
    q: "Which feature of Recon-ng makes it particularly useful in a modular OSINT gathering process?", 
    a: ["Its ability to decrypt encrypted files automatically", "Its integration of multiple modules that can be combined to perform different types of reconnaissance tasks", "Its function as a standalone web proxy", "Its capacity to directly exploit vulnerabilities in target systems"], 
    c: 1, 
    exp: "Verified Answer: B. Its integration of multiple modules that can be combined to perform different types of reconnaissance tasks"
  },
  { 
    id: 480, 
    q: "How does Netcraft assist with historical analysis of a target domain?", 
    a: ["By providing real-time data on network traffic", "By showing changes in web server technology , hosting providers, and reported phishing or malware incidents over time", "By performing active vulnerability exploitation", "By offering encrypted communications between users"], 
    c: 1, 
    exp: "Verified Answer: B. By showing changes in web server technology , hosting providers, and reported phishing or malware incidents over time"
  },
  { 
    id: 481, 
    q: "What is a key advantage of using open-source intelligence (OSINT) tools like Netcraft, Shodan, Google Dorks, and Recon-ng?", 
    a: ["They require expensive proprietary software licenses", "They enable comprehensive and cost-ef fective information gathering from publicly available sources", "They automatically fix identified vulnerabilities", "They are only useful for academic research and not real-world security assessments"], 
    c: 1, 
    exp: "Verified Answer: B. They enable comprehensive and cost-ef fective information gathering from publicly available sources"
  },
  { 
    id: 482, 
    q: "What is the primary purpose of the FOCA tool in an OSINT investigation?", 
    a: ["To encrypt sensitive documents", "To extract metadata from documents to fingerprint an organization", "To perform network vulnerability scans", "To monitor social media activity"], 
    c: 1, 
    exp: "Verified Answer: B. To extract metadata from documents to fingerprint an organization"
  },
  { 
    id: 483, 
    q: "Which type of information can FOCA extract from documents for fingerprinting purposes?", 
    a: ["IP addresses, server names, and usernames", "Real-time network traffic", "Web application code vulnerabilities", "Encrypted passwords"], 
    c: 0, 
    exp: "Verified Answer: A. IP addresses, server names, and usernames"
  },
  { 
    id: 484, 
    q: "How can FOCA contribute to mapping an organization’ s digital infrastructure?", 
    a: ["By conducting brute-force password attacks", "By revealing underlying network paths and document creation details from metadata", "By directly compromising servers", "By modifying firewall rules"], 
    c: 1, 
    exp: "Verified Answer: B. By revealing underlying network paths and document creation details from metadata"
  },
  { 
    id: 485, 
    q: "Which of the following file formats can FOCA analyze for metadata extraction?", 
    a: ["PDF, DOCX, XLSX", "MP3, AVI, MKV", "HTML, CSS, JavaScript", "None of the above"], 
    c: 0, 
    exp: "Verified Answer: A. PDF, DOCX, XLSX"
  },
  { 
    id: 486, 
    q: "What is a key benefit of using FOCA in an ethical hacking engagement?", 
    a: ["It automates network penetration without any manual analysis", "It helps identify potential vulnerabilities by revealing sensitive metadata that may have been inadvertently exposed", "It encrypts all data to protect from malware", "It provides real-time intrusion detection"], 
    c: 1, 
    exp: "Verified Answer: B. It helps identify potential vulnerabilities by revealing sensitive metadata that may have been inadvertently exposed"
  },
  { 
    id: 487, 
    q: "What is the primary function of TreePad in the context of security reporting?", 
    a: ["To analyze network traffic", "To serve as a note-taking and outlining tool for compiling and organizing reports", "To perform vulnerability scanning", "To simulate cyberattacks"], 
    c: 1, 
    exp: "Verified Answer: B. To serve as a note-taking and outlining tool for compiling and organizing reports"
  },
  { 
    id: 488, 
    q: "How does TreePad assist ethical hackers in preparing their reports?", 
    a: ["By automating the discovery of vulnerabilities", "By providing a hierarchical and flexible environment to organize and structure the collected data and analysis", "By encrypting all sensitive report data automatically", "By replacing the need for manual report writing"], 
    c: 1, 
    exp: "Verified Answer: B. By providing a hierarchical and flexible environment to organize and structure the collected data and analysis"
  },
  { 
    id: 489, 
    q: "Which feature of TreePad makes it particularly useful for managing extensive investigation notes?", 
    a: ["Its capability to perform real-time scans", "Its ability to create nested outlines and link related documents within the report", "Its built-in network intrusion detection system", "Its automatic vulnerability patching system"], 
    c: 1, 
    exp: "Verified Answer: B. Its ability to create nested outlines and link related documents within the report"
  },
  { 
    id: 490, 
    q: "What is one advantage of using TreePad over traditional word processors for report preparation in ethical hacking?", 
    a: ["It provides built-in encryption for network traffic", "It offers better organization of hierarchical data and easy rearrangement of report sections", "It automatically updates vulnerability databases", "It integrates directly with Nmap and FOCA"], 
    c: 1, 
    exp: "Verified Answer: B. It offers better organization of hierarchical data and easy rearrangement of report sections"
  },
  { 
    id: 491, 
    q: "In a typical security evaluation, how can the combined use of FOCA and TreePad enhance the overall reporting process?", 
    a: ["FOCA identifies vulnerabilities and TreePad automatically patches them", "FOCA extracts and presents metadata information while TreePad is used to systematically organize and present the findings in a detailed, structured report", "FOCA encrypts the report and TreePad decrypts it", "FOCA and TreePad work together to simulate cyberattacks"], 
    c: 1, 
    exp: "Verified Answer: B. FOCA extracts and presents metadata information while TreePad is used to systematically organize and present the findings in a detailed, structured report"
  },
  { 
    id: 492, 
    q: "What is the primary purpose of spidering a web application in Burp Suite?", 
    a: ["To test the application’ s response to SQL injection", "To automatically crawl and enumerate all accessible URLs and parameters within the application", "To exploit known vulnerabilities in the web server", "To encrypt network traffic"], 
    c: 1, 
    exp: "Verified Answer: B. To automatically crawl and enumerate all accessible URLs and parameters within the application"
  },
  { 
    id: 493, 
    q: "Which Burp Suite tool is primarily used for spidering a web application?", 
    a: ["Burp Proxy", "Burp Repeater", "Burp Intruder", "Burp Scanner"], 
    c: 0, 
    exp: "Verified Answer: A. Burp Proxy"
  },
  { 
    id: 494, 
    q: "What is an advantage of performing spidering in Burp Suite?", 
    a: ["It automatically identifies all vulnerabilities in the application", "It helps in discovering hidden directories and endpoints that might not be directly linked from the homepage", "It removes security flaws from the application", "It modifies the application’ s security policies"], 
    c: 1, 
    exp: "Verified Answer: B. It helps in discovering hidden directories and endpoints that might not be directly linked from the homepage"
  },
  { 
    id: 495, 
    q: "How can you manually initiate a web spider in Burp Suite?", 
    a: ["By selecting “Spider this host” from the Target tab", "By using the Burp Suite Decoder tool", "By launching an automated attack in the Intruder tab", "By writing a Python script"], 
    c: 0, 
    exp: "Verified Answer: A. By selecting “Spider this host” from the Target tab"
  },
  { 
    id: 496, 
    q: "Why is it important to configure authentication settings before spidering a web application in Burp Suite?", 
    a: ["To prevent unauthorized access to restricted areas of the application", "To ensure the spider can fully crawl both authenticated and unauthenticated pages", "To block all unauthorized pages from being accessed", "To disable automated scanning tools"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure the spider can fully crawl both authenticated and unauthenticated pages"
  },
  { 
    id: 497, 
    q: "What does mapping the attack surface mean in the context of Burp Suite?", 
    a: ["Identifying all vulnerabilities in a web application", "Understanding all potential entry points and functionalities that can be targeted in an attack", "Exploiting security misconfigurations", "Encrypting web traffic to prevent reconnaissance"], 
    c: 1, 
    exp: "Verified Answer: B. Understanding all potential entry points and functionalities that can be targeted in an attack"
  },
  { 
    id: 498, 
    q: "Which Burp Suite tool helps in visualizing the attack surface of a web application?", 
    a: ["Burp Repeater", "Burp Target", "Burp Scanner", "Burp Decoder"], 
    c: 1, 
    exp: "Verified Answer: B. Burp Target"
  },
  { 
    id: 499, 
    q: "How does Burp Suite Proxy assist in mapping the attack surface?", 
    a: ["It decrypts all SSL/TLS traffic to access encrypted pages", "It captures, modifies, and analyzes HTTP requests and responses to identify potential security weaknesses", "It automatically fixes security vulnerabilities", "It blocks all unnecessary HTTP requests"], 
    c: 1, 
    exp: "Verified Answer: B. It captures, modifies, and analyzes HTTP requests and responses to identify potential security weaknesses"
  },
  { 
    id: 500, 
    q: "What type of data should an ethical hacker look for while mapping the attack surface using Burp Suite?", 
    a: ["API endpoints, hidden directories, and user input fields", "Encrypted SSL certificates", "Server hardware specifications", "Database schema details"], 
    c: 0, 
    exp: "Verified Answer: A. API endpoints, hidden directories, and user input fields"
  },
  { 
    id: 501, 
    q: "How can Burp Suite help in refining the attack surface analysis?", 
    a: ["By integrating with automated vulnerability scanners to validate identified risks", "By generating random attacks on the server", "By modifying the application’ s database structure", "By blocking access to administrative pages"], 
    c: 0, 
    exp: "Verified Answer: A. By integrating with automated vulnerability scanners to validate identified risks"
  },
  { 
    id: 502, 
    q: "What is the primary function of the SYN flag in TCP communication?", 
    a: ["To acknowledge the receipt of data", "To initiate a new TCP connection", "To terminate an existing connection", "To reset a faulty connection"], 
    c: 1, 
    exp: "Verified Answer: B. To initiate a new TCP connection"
  },
  { 
    id: 503, 
    q: "In the TCP three-way handshake, which flags are used in the second step when the server responds to the client?", 
    a: ["SYN + ACK", "FIN + ACK", "RST + ACK", "PSH + URG"], 
    c: 0, 
    exp: "Verified Answer: A. SYN + ACK"
  },
  { 
    id: 504, 
    q: "What does the FIN flag indicate in a TCP connection?", 
    a: ["A request to initiate a connection", "A request to terminate a connection", "An error in the connection", "A request for re-transmission of lost packets"], 
    c: 1, 
    exp: "Verified Answer: B. A request to terminate a connection"
  },
  { 
    id: 505, 
    q: "When is the RST flag used in TCP communication?", 
    a: ["To reset an active TCP connection abruptly", "To acknowledge the receipt of data", "To request data retransmission", "To establish a secure connection"], 
    c: 0, 
    exp: "Verified Answer: A. To reset an active TCP connection abruptly"
  },
  { 
    id: 506, 
    q: "What is the role of the ACK flag in TCP?", 
    a: ["To establish a new connection", "To confirm the receipt of data packets", "To request more data", "To close an existing connection"], 
    c: 1, 
    exp: "Verified Answer: B. To confirm the receipt of data packets"
  },
  { 
    id: 507, 
    q: "Which TCP flag is responsible for ensuring data is pushed immediately to the application layer?", 
    a: ["URG", "PSH", "SYN", "FIN"], 
    c: 1, 
    exp: "Verified Answer: B. PSH"
  },
  { 
    id: 508, 
    q: "What does the URG flag in TCP communication signify?", 
    a: ["That data within the packet is urgent and should be prioritized", "That the packet should be retransmitted", "That the connection should be reset", "That the packet is part of a handshake process"], 
    c: 0, 
    exp: "Verified Answer: A. That data within the packet is urgent and should be prioritized"
  },
  { 
    id: 509, 
    q: "Which TCP flags are used together to indicate the completion of a connection termination?", 
    a: ["SYN + ACK", "FIN + ACK", "PSH + URG", "RST + FIN"], 
    c: 1, 
    exp: "Verified Answer: B. FIN + ACK"
  },
  { 
    id: 510, 
    q: "If a host receives a packet with only the RST flag set, what should it do?", 
    a: ["Ignore the packet", "Retransmit lost packets", "Immediately close the connection", "Request a new connection"], 
    c: 2, 
    exp: "Verified Answer: C. Immediately close the connection"
  },
  { 
    id: 511, 
    q: "In which scenario is an “ACK + PSH” flag combination typically used?", 
    a: ["During a TCP handshake", "When data needs to be pushed immediately to the application layer", "When terminating a connection", "When requesting a retransmission of lost packets"], 
    c: 1, 
    exp: "Verified Answer: B. When data needs to be pushed immediately to the application layer"
  },
  { 
    id: 512, 
    q: "What is the primary purpose of banner grabbing?", 
    a: ["To modify firewall rules", "To detect open ports", "To gather information about services running on a target system", "To exploit a SQL injection vulnerability"], 
    c: 2, 
    exp: "Verified Answer: C. To gather information about services running on a target system"
  },
  { 
    id: 513, 
    q: "Which of the following tools can be used for active banner grabbing?", 
    a: ["Wireshark", "netcat", "Metasploit", "Both B and C"], 
    c: 3, 
    exp: "Verified Answer: D. Both B and C"
  },
  { 
    id: 514, 
    q: "What is the key difference between active and passive banner grabbing?", 
    a: ["Active banner grabbing sends packets to the target, while passive banner grabbing listens to traffic without interaction", "Active banner grabbing requires root access, while passive does not", "Passive banner grabbing provides more detailed information than active", "Active banner grabbing is only used for DNS reconnaissance"], 
    c: 0, 
    exp: "Verified Answer: A. Active banner grabbing sends packets to the target, while passive banner grabbing listens to traffic without interaction"
  },
  { 
    id: 515, 
    q: "Which Nmap command is commonly used for banner grabbing?", 
    a: ["nmap -sP", "nmap -sV", "nmap -A", "nmap -O"], 
    c: 1, 
    exp: "Verified Answer: B. nmap -sV"
  },
  { 
    id: 516, 
    q: "What does OS fingerprinting help an attacker achieve?", 
    a: ["Identify the exact operating system and its version", "Find usernames on a target system", "Perform privilege escalation", "Disable security controls"], 
    c: 0, 
    exp: "Verified Answer: A. Identify the exact operating system and its version"
  },
  { 
    id: 517, 
    q: "What is the purpose of TCP/IP stack fingerprinting in OS detection?", 
    a: ["To analyze the structure of TCP packets to determine the OS", "To find database vulnerabilities", "To brute-force login credentials", "To establish a secure connection"], 
    c: 0, 
    exp: "Verified Answer: A. To analyze the structure of TCP packets to determine the OS"
  },
  { 
    id: 518, 
    q: "Which of the following tools is best suited for passive OS fingerprinting?", 
    a: ["Nmap", "pof", "Netcat", "Metasploit"], 
    c: 1, 
    exp: "Verified Answer: B. pof"
  },
  { 
    id: 519, 
    q: "Which flag combination in a TCP response is commonly used in OS fingerprinting?", 
    a: ["SYN-ACK", "RST-ACK", "PSH-URG", "FIN-PSH"], 
    c: 0, 
    exp: "Verified Answer: A. SYN-ACK"
  },
  { 
    id: 520, 
    q: "What type of banner information can be retrieved using Telnet?", 
    a: ["Only HTTP server information", "Version details of running services", "User credentials", "Encrypted data"], 
    c: 1, 
    exp: "Verified Answer: B. Version details of running services"
  },
  { 
    id: 521, 
    q: "What is the purpose of the ‘nmap -O’ command?", 
    a: ["To detect open ports", "To perform OS fingerprinting", "To scan for malware", "To perform SQL injection testing"], 
    c: 1, 
    exp: "Verified Answer: B. nmap -O"
  },
  { 
    id: 522, 
    q: "How do attackers use proxy servers to mask their identity?", 
    a: ["By encrypting their entire traffic", "By routing their requests through multiple proxy servers to hide their real IP address", "By modifying the MAC address of their device", "By disabling logging on the target system"], 
    c: 1, 
    exp: "Verified Answer: B. By routing their requests through multiple proxy servers to hide their real IP address"
  },
  { 
    id: 523, 
    q: "Which of the following attacks can be performed using an anonymous proxy server?", 
    a: ["SQL Injection", "DDoS Attack", "Man-in-the-Middle Attack", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 524, 
    q: "What is a major risk of open proxy servers on the internet?", 
    a: ["They always encrypt traffic", "They can be used for malicious activities such as launching attacks", "They provide a secure way to browse the web", "They only work with HTTPS traffic"], 
    c: 1, 
    exp: "Verified Answer: B. They can be used for malicious activities such as launching attacks"
  },
  { 
    id: 525, 
    q: "How do attackers use proxy servers in botnet attacks?", 
    a: ["By encrypting botnet communications", "By routing attack traffic through proxies to avoid detection", "By infecting the proxy server with malware", "By using proxies to modify attack payloads"], 
    c: 1, 
    exp: "Verified Answer: B. By routing attack traffic through proxies to avoid detection"
  },
  { 
    id: 526, 
    q: "What is a reverse proxy , and how can attackers exploit it?", 
    a: ["A proxy server used to filter outgoing traffic", "A server that protects backend systems but can be misconfigured for unauthorized access", "A tool used to bypass firewalls", "A VPN service used by attackers"], 
    c: 1, 
    exp: "Verified Answer: B. A server that protects backend systems but can be misconfigured for unauthorized access"
  },
  { 
    id: 527, 
    q: "How do hackers use proxy servers to bypass geo-restrictions for launching attacks?", 
    a: ["By selecting proxy servers in allowed regions", "By modifying the target's IP address", "By using AI-based techniques", "By performing MAC address spoofing"], 
    c: 0, 
    exp: "Verified Answer: A. By selecting proxy servers in allowed regions"
  },
  { 
    id: 528, 
    q: "Which tool is commonly used by attackers to route their traffic through proxy servers?", 
    a: ["Metasploit", "Burp Suite", "ProxyChains", "Nessus"], 
    c: 2, 
    exp: "Verified Answer: C. ProxyChains"
  },
  { 
    id: 529, 
    q: "How do attackers use proxy servers in phishing attacks?", 
    a: ["By modifying the victim’ s browser settings", "By hosting fake login pages on proxy servers to steal credentials", "By scanning for vulnerabilities in proxy configurations", "By encrypting all HTTP traffic"], 
    c: 1, 
    exp: "Verified Answer: B. By hosting fake login pages on proxy servers to steal credentials"
  },
  { 
    id: 530, 
    q: "How do proxies help in session hijacking attacks?", 
    a: ["By intercepting and modifying HTTP headers", "By providing encryption to stolen sessions", "By redirecting traffic through multiple locations", "By creating fake cookies for authentication"], 
    c: 0, 
    exp: "Verified Answer: A. By intercepting and modifying HTTP headers"
  },
  { 
    id: 531, 
    q: "What is the primary method used to detect malicious proxy server usage?", 
    a: ["Blocking all proxy servers", "Monitoring unusual IP addresses and high-frequency traffic patterns", "Using AI-based anti-malware tools", "Disabling HTTPS traffic"], 
    c: 1, 
    exp: "Verified Answer: B. Monitoring unusual IP addresses and high-frequency traffic patterns"
  },
  { 
    id: 532, 
    q: "What is HTTP tunneling used for in cybersecurity?", 
    a: ["Encrypting email communications", "Bypassing firewalls and network restrictions", "Enhancing website loading speeds", "Preventing phishing attacks"], 
    c: 1, 
    exp: "Verified Answer: B. Bypassing firewalls and network restrictions"
  },
  { 
    id: 533, 
    q: "Which tool is commonly used for HTTP tunneling?", 
    a: ["Putty", "HTTPT unnel", "Burp Suite", "Hydra"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPTunnel"
  },
  { 
    id: 534, 
    q: "How does HTTP tunneling help attackers evade detection?", 
    a: ["By encrypting all traffic using VPN", "By hiding malicious commands inside normal HTTP traffic", "By redirecting traffic to a honeypot", "By disabling security logs"], 
    c: 1, 
    exp: "Verified Answer: B. By hiding malicious commands inside normal HTTP traffic"
  },
  { 
    id: 535, 
    q: "Which HTTP method is often exploited in HTTP tunneling attacks?", 
    a: ["GET", "POST", "CONNECT", "DELETE"], 
    c: 2, 
    exp: "Verified Answer: C. CONNECT"
  },
  { 
    id: 536, 
    q: "What is the primary reason attackers use HTTP tunneling instead of direct communication?", 
    a: ["HTTP traffic is always encrypted", "Firewalls often allow HTTP traffic, making it easy to bypass restrictions", "HTTP tunnels are faster than VPNs", "HTTP tunneling prevents data loss"], 
    c: 1, 
    exp: "Verified Answer: B. Firewalls often allow HTTP traffic, making it easy to bypass restrictions"
  },
  { 
    id: 537, 
    q: "What is an indicator of HTTP tunneling activity in a network?", 
    a: ["Large volumes of encrypted DNS queries", "Unexpected long-lived HTTP connections", "Increased ICMP traffic", "A sudden drop in HTTP traffic"], 
    c: 1, 
    exp: "Verified Answer: B. Unexpected long-lived HTTP connections"
  },
  { 
    id: 538, 
    q: "How does HTTP tunneling facilitate Command and Control (C2) communication?", 
    a: ["By allowing malware to send and receive commands through web traffic", "By encrypting all network packets automatically", "By forcing the target system to reboot frequently", "By modifying firewall rules on the target system"], 
    c: 0, 
    exp: "Verified Answer: A. By allowing malware to send and receive commands through web traffic"
  },
  { 
    id: 539, 
    q: "Which security measure can help detect HTTP tunneling?", 
    a: ["Implementing SSL pinning", "Monitoring unusual HTTP traffic patterns and analyzing payloads", "Using NAT for all network communications", "Blocking all incoming HTTP requests"], 
    c: 1, 
    exp: "Verified Answer: B. Monitoring unusual HTTP traffic patterns and analyzing payloads"
  },
  { 
    id: 540, 
    q: "What is a major risk of HTTP tunneling in corporate environments?", 
    a: ["It allows unauthorized data exfiltration", "It slows down the network", "It prevents phishing attacks", "It disables two-factor authentication"], 
    c: 0, 
    exp: "Verified Answer: A. It allows unauthorized data exfiltration"
  },
  { 
    id: 541, 
    q: "Which HTTP tunneling tool is commonly used in penetration testing?", 
    a: ["Slowloris", "HTTPort", "Wireshark", "Nikto"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPort"
  },
  { 
    id: 542, 
    q: "What is the most effective way to prevent anonymous proxy abuse in a network?", 
    a: ["Allow unrestricted proxy usage", "Block known proxy IP addresses and update blacklists regularly", "Disable all outbound traffic", "Use only HTTP-based proxies"], 
    c: 1, 
    exp: "Verified Answer: B. Block known proxy IP addresses and update blacklists regularly"
  },
  { 
    id: 543, 
    q: "How can deep packet inspection (DPI) help defend against proxy-based attacks?", 
    a: ["By detecting and blocking encrypted traffic", "By identifying and filtering malicious traffic hidden in proxy communications", "By preventing all HTTP and HTTPS traffic", "By scanning for viruses in email attachments"], 
    c: 1, 
    exp: "Verified Answer: B. By identifying and filtering malicious traffic hidden in proxy communications"
  },
  { 
    id: 544, 
    q: "Which of the following is a key defensive measure against proxy-based attacks?", 
    a: ["Using Web Application Firewalls (WAFs) to detect suspicious proxy behavior", "Allowing all incoming traffic from public proxies", "Increasing the timeout limit for all proxy connections", "Only allowing traffic over port 8080"], 
    c: 0, 
    exp: "Verified Answer: A. Using Web Application Firewalls (WAFs) to detect suspicious proxy behavior"
  },
  { 
    id: 545, 
    q: "How does geofencing help in mitigating proxy-based attacks?", 
    a: ["It restricts access based on IP location to prevent unauthorized access", "It disables the use of HTTPS to detect proxy traffic", "It blocks all international traffic by default", "It forces all users to use the same proxy server"], 
    c: 0, 
    exp: "Verified Answer: A. It restricts access based on IP location to prevent unauthorized access"
  },
  { 
    id: 546, 
    q: "What is an effective strategy to detect users attempting to bypass security using proxy servers?", 
    a: ["Monitoring DNS traffic for unusual patterns", "Disabling all internet access", "Allowing all incoming and outgoing HTTP traffic", "Increasing firewall timeouts"], 
    c: 0, 
    exp: "Verified Answer: A. Monitoring DNS traffic for unusual patterns"
  },
  { 
    id: 547, 
    q: "What is the primary sign of an HTTP tunneling attack?", 
    a: ["Frequent HTTP requests with large payloads and unusual response patterns", "Increased network performance with low latency", "High CPU usage on client devices", "Standard HTTP traffic with normal response times"], 
    c: 0, 
    exp: "Verified Answer: A. Frequent HTTP requests with large payloads and unusual response patterns"
  },
  { 
    id: 548, 
    q: "Which tool is most commonly used to detect HTTP tunneling attacks in real-time?", 
    a: ["Wireshark", "Microsoft Excel", "Adobe Photoshop", "VLC Media Player"], 
    c: 0, 
    exp: "Verified Answer: A. Wireshark"
  },
  { 
    id: 549, 
    q: "How can organizations mitigate HTTP tunneling attacks effectively?", 
    a: ["Implementing deep packet inspection (DPI) to detect non-HTTP traffic inside HTTP requests", "Disabling SSL/TLS encryption", "Blocking all HTTP and HTTPS traffic", "Reducing the number of allowed HTTP requests per user"], 
    c: 0, 
    exp: "Verified Answer: A. Implementing deep packet inspection (DPI) to detect non-HTTP traffic inside HTTP requests"
  },
  { 
    id: 550, 
    q: "What is an effective firewall-based approach to prevent HTTP tunneling attacks?", 
    a: ["Restricting outbound HTTP traffic to only allowlist-approved destinations", "Disabling all web browsing capabilities", "Allowing unrestricted HTTP traffic to avoid detection", "Blocking all GET and POST requests"], 
    c: 0, 
    exp: "Verified Answer: A. Restricting outbound HTTP traffic to only allowlist-approved destinations"
  },
  { 
    id: 551, 
    q: "Which security measure can help detect encrypted HTTP tunneling (e.g., via HTTPS)?", 
    a: ["TLS/SSL inspection to analyze encrypted traffic for tunneling patterns", "Allowing all HTTPS traffic without inspection", "Using weak encryption to simplify detection", "Enabling only HTTP/"], 
    c: 0, 
    exp: "Verified Answer: A. TLS/SSL inspection to analyze encrypted traffic for tunneling patterns"
  },
  { 
    id: 552, 
    q: "What is IP spoofing?", 
    a: ["Modifying the IP address in packet headers to disguise the sender", "Encrypting IP addresses for security", "Using multiple IP addresses to increase bandwidth", "Blocking specific IP addresses in a firewall"], 
    c: 0, 
    exp: "Verified Answer: A. Modifying the IP address in packet headers to disguise the sender"
  },
  { 
    id: 553, 
    q: "Which of the following attack types commonly use IP spoofing?", 
    a: ["Phishing attacks", "Distributed Denial of Service (DDoS) attacks", "Ransomware attacks", "Social engineering attacks"], 
    c: 1, 
    exp: "Verified Answer: B. Distributed Denial of Service (DDoS) attacks"
  },
  { 
    id: 554, 
    q: "What is the primary purpose of Source IP Spoofing in cyberattacks?", 
    a: ["To increase network speed", "To anonymize legitimate users", "To bypass IP-based security mechanisms", "To establish a direct connection with the victim’ s system"], 
    c: 2, 
    exp: "Verified Answer: C. To bypass IP-based security mechanisms"
  },
  { 
    id: 555, 
    q: "How does an attacker perform IP spoofing in a TCP connection?", 
    a: ["By modifying the source IP address and correctly predicting the sequence numbers", "By simply changing the destination IP address", "By sending data without a TCP handshake", "By encrypting the IP address in transit"], 
    c: 0, 
    exp: "Verified Answer: A. By modifying the source IP address and correctly predicting the sequence numbers"
  },
  { 
    id: 556, 
    q: "What is “Blind Spoofing” in IP spoofing techniques?", 
    a: ["Spoofing an IP without seeing the response packets", "Using an IP address that belongs to the attacker", "Spoofing an IP to gain administrative access", "Using a botnet for spoofing"], 
    c: 0, 
    exp: "Verified Answer: A. Spoofing an IP without seeing the response packets"
  },
  { 
    id: 557, 
    q: "How can network administrators detect IP spoofing attempts?", 
    a: ["Monitoring for unusual source IP addresses and inconsistent traffic patterns", "Blocking all external IP addresses", "Disabling encryption on network packets", "Allowing only IPv4 traffic"], 
    c: 0, 
    exp: "Verified Answer: A. Monitoring for unusual source IP addresses and inconsistent traffic patterns"
  },
  { 
    id: 558, 
    q: "What is a primary countermeasure against IP spoofing?", 
    a: ["Implementing packet filtering techniques like ingress and egress filtering", "Disabling TCP connections", "Using multiple IP addresses for redundancy", "Blocking all incoming traffic"], 
    c: 0, 
    exp: "Verified Answer: A. Implementing packet filtering techniques like ingress and egress filtering"
  },
  { 
    id: 559, 
    q: "How does the SYN flood attack relate to IP spoofing?", 
    a: ["Attackers send a flood of spoofed SYN packets to a target, consuming resources", "It encrypts packets to hide the attack", "It sends fake DNS queries instead of TCP packets", "It involves sending SYN packets with correct IP addresses"], 
    c: 0, 
    exp: "Verified Answer: A. Attackers send a flood of spoofed SYN packets to a target, consuming resources"
  },
  { 
    id: 560, 
    q: "Which protocol is most vulnerable to IP spoofing?", 
    a: ["UDP", "HTTPS", "SSH", "FTP"], 
    c: 0, 
    exp: "Verified Answer: A. UDP"
  },
  { 
    id: 561, 
    q: "Which security measure can help mitigate IP spoofing in corporate networks?", 
    a: ["Implementing network access control (NAC) policies", "Using a weak firewall to allow all incoming traffic", "Relying only on VPNs for security", "Ignoring source IP address validation"], 
    c: 0, 
    exp: "Verified Answer: A. Implementing network access control (NAC) policies"
  },
  { 
    id: 562, 
    q: "What is enumeration in ethical hacking?", 
    a: ["A process of scanning open ports", "A technique used to extract information about a system or network", "A method to encrypt network traffic", "A way to block unauthorized access"], 
    c: 1, 
    exp: "Verified Answer: B. A technique used to extract information about a system or network"
  },
  { 
    id: 563, 
    q: "Which of the following is an example of enumeration?", 
    a: ["Identifying open ports on a system", "Gathering a list of valid usernames from a system", "Capturing encrypted network traffic", "Creating a fake IP address"], 
    c: 1, 
    exp: "Verified Answer: B. Gathering a list of valid usernames from a system"
  },
  { 
    id: 564, 
    q: "Which of the following is NOT a common enumeration technique?", 
    a: ["DNS Zone Transfers", "SNMP enumeration", "Brute force password cracking", "NetBIOS enumeration"], 
    c: 2, 
    exp: "Verified Answer: C. Brute force password cracking"
  },
  { 
    id: 565, 
    q: "What tool is commonly used for SMB enumeration in Windows environments?", 
    a: ["Nmap", "Metasploit", "enum4linux", "Hydra"], 
    c: 2, 
    exp: "Verified Answer: C. enum4linux"
  },
  { 
    id: 566, 
    q: "What is the purpose of LDAP enumeration?", 
    a: ["To list shared folders on a Windows network", "To gather information from Active Directory", "To detect wireless access points", "To scan for open ports"], 
    c: 1, 
    exp: "Verified Answer: B. To gather information from Active Directory"
  },
  { 
    id: 567, 
    q: "Which port is commonly associated with NetBIOS enumeration?", 
    a: ["23", "139", "53", "443"], 
    c: 1, 
    exp: "Verified Answer: B. 139"
  },
  { 
    id: 568, 
    q: "What type of enumeration is performed using the ‘nslookup’ command?", 
    a: ["SMTP enumeration", "DNS enumeration", "NetBIOS enumeration", "SNMP enumeration"], 
    c: 1, 
    exp: "Verified Answer: B. DNS enumeration"
  },
  { 
    id: 569, 
    q: "What is an effective countermeasure against enumeration attacks?", 
    a: ["Allowing unrestricted network access", "Disabling unnecessary services and protocols", "Removing firewall protection", "Running all services on default ports"], 
    c: 1, 
    exp: "Verified Answer: B. Disabling unnecessary services and protocols"
  },
  { 
    id: 570, 
    q: "Which of the following best describes SNMP enumeration?", 
    a: ["Extracting system details using community strings", "Gaining unauthorized access through password brute forcing", "Mapping firewall rules", "Identifying wireless networks"], 
    c: 0, 
    exp: "Verified Answer: A. Extracting system details using community strings"
  },
  { 
    id: 571, 
    q: "Which tool is commonly used for DNS enumeration?", 
    a: ["Nmap", "Metasploit", "dig", "Aircrack-ng"], 
    c: 2, 
    exp: "Verified Answer: C. dig"
  },
  { 
    id: 572, 
    q: "What is password cracking in ethical hacking?", 
    a: ["The process of securing passwords using encryption", "The act of retrieving a password by guessing, brute force, or decryption", "The method of storing passwords in a secure database", "The process of resetting a user’s password legally"], 
    c: 1, 
    exp: "Verified Answer: B. The act of retrieving a password by guessing, brute force, or decryption"
  },
  { 
    id: 573, 
    q: "Which of the following is NOT a password cracking technique?", 
    a: ["Dictionary attack", "Brute force attack", "Rainbow table attack", "Data fragmentation attack"], 
    c: 3, 
    exp: "Verified Answer: D. Data fragmentation attack"
  },
  { 
    id: 574, 
    q: "Which password cracking technique tries every possible combination of characters?", 
    a: ["Dictionary attack", "Brute force attack", "Social engineering", "Phishing"], 
    c: 1, 
    exp: "Verified Answer: B. Brute force attack"
  },
  { 
    id: 575, 
    q: "What is a dictionary attack?", 
    a: ["A method where predefined wordlists are used to guess passwords", "A technique that tries all possible character combinations", "A way to decrypt passwords stored in a database", "A process of encrypting passwords for security"], 
    c: 0, 
    exp: "Verified Answer: A. A method where predefined wordlists are used to guess passwords"
  },
  { 
    id: 576, 
    q: "How does a rainbow table attack work?", 
    a: ["By using a precomputed set of hash values to crack passwords", "By using brute force to guess passwords", "By tricking users into revealing their passwords", "By encrypting passwords to enhance security"], 
    c: 0, 
    exp: "Verified Answer: A. By using a precomputed set of hash values to crack passwords"
  },
  { 
    id: 577, 
    q: "What is the primary weakness of password hashing that rainbow table attacks exploit?", 
    a: ["Lack of password encryption", "Predictability of hashed values", "Use of salt in hashing", "Complexity of password storage"], 
    c: 1, 
    exp: "Verified Answer: B. Predictability of hashed values"
  },
  { 
    id: 578, 
    q: "What technique can prevent rainbow table attacks?", 
    a: ["Using short passwords", "Implementing password hashing with salting", "Storing passwords in plaintext", "Reducing password complexity"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing password hashing with salting"
  },
  { 
    id: 579, 
    q: "What is a hybrid attack?", 
    a: ["A combination of a brute force and dictionary attack", "A method of encrypting passwords securely", "A way to store passwords in a secure vault", "A type of malware used for stealing passwords"], 
    c: 0, 
    exp: "Verified Answer: A. A combination of a brute force and dictionary attack"
  },
  { 
    id: 580, 
    q: "Which of the following tools is commonly used for password cracking?", 
    a: ["Wireshark", "John the Ripper", "Nmap", "Metasploit"], 
    c: 1, 
    exp: "Verified Answer: B. John the Ripper"
  },
  { 
    id: 581, 
    q: "What is the best defense against password cracking attacks?", 
    a: ["Using weak passwords for easy memorization", "Storing passwords in plaintext for easy recovery", "Using multi-factor authentication (MFA) and strong password policies", "Disabling password protection to avoid attacks"], 
    c: 2, 
    exp: "Verified Answer: C. Using multi-factor authentication (MFA) and strong password policies"
  },
  { 
    id: 582, 
    q: "Where are Windows user passwords stored on a local system?", 
    a: ["/etc/passwd", "C:\\Windows\\System32\\config\\SAM", "C:\\Program Files\\Passwords\\Hashes", "C:\\Windows\\Security\\Credentials"], 
    c: 1, 
    exp: "Verified Answer: B. C:\\Windows\\System32\\config\\SAM"
  },
  { 
    id: 583, 
    q: "What tool is commonly used to dump Windows password hashes from the SAM file?", 
    a: ["John the Ripper", "Hashcat", "Mimikatz", "Cain and Abel"], 
    c: 2, 
    exp: "Verified Answer: C. Mimikatz"
  },
  { 
    id: 584, 
    q: "Which hashing algorithm does Windows use to store passwords in the SAM file?", 
    a: ["SHA-256", "NTLM (New Technology LAN Manager)", "MD5", "AES-256"], 
    c: 1, 
    exp: "Verified Answer: B. NTLM (New Technology LAN Manager)"
  },
  { 
    id: 585, 
    q: "Which attack method is most effective for cracking Windows NTLM password hashes?", 
    a: ["Dictionary attack", "Brute force attack", "Rainbow table attack", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 586, 
    q: "What is the purpose of the LM hash in older Windows systems?", 
    a: ["To securely store passwords using encryption", "To allow easy recovery of forgotten passwords", "To provide backward compatibility for authentication", "To prevent brute force attacks"], 
    c: 2, 
    exp: "Verified Answer: C. To provide backward compatibility for authentication"
  },
  { 
    id: 587, 
    q: "Which of the following tools can be used to crack Windows password hashes?", 
    a: ["Ophcrack", "Wireshark", "Metasploit", "Burp Suite"], 
    c: 0, 
    exp: "Verified Answer: A. Ophcrack"
  },
  { 
    id: 588, 
    q: "What is Pass-the-Hash (PtH) attack in Windows security?", 
    a: ["A brute force method to guess passwords", "Using a password hash directly for authentication without decrypting it", "A social engineering technique to steal Windows passwords", "A ransomware attack that encrypts password files"], 
    c: 1, 
    exp: "Verified Answer: B. Using a password hash directly for authentication without decrypting it"
  },
  { 
    id: 589, 
    q: "Which Windows security feature can help mitigate Pass-the-Hash attacks?", 
    a: ["NTLMv1 authentication", "Using strong passwords", "Enabling Windows Defender", "Implementing Credential Guard"], 
    c: 3, 
    exp: "Verified Answer: D. Implementing Credential Guard"
  },
  { 
    id: 590, 
    q: "What is the primary defense against Windows password cracking?", 
    a: ["Using LM hashes for faster authentication", "Disabling Windows Defender", "Enforcing complex passwords and multi-factor authentication (MFA)", "Storing passwords in plaintext"], 
    c: 2, 
    exp: "Verified Answer: C. Enforcing complex passwords and multi-factor authentication (MFA)"
  },
  { 
    id: 591, 
    q: "Which attack method involves intercepting Windows authentication traffic to extract password hashes?", 
    a: ["Brute force attack", "Rainbow table attack", "LLMNR/NBT-NS Poisoning", "Keylogging"], 
    c: 2, 
    exp: "Verified Answer: C. LLMNR/NBT-NS Poisoning"
  },
  { 
    id: 592, 
    q: "What is the primary vulnerability exploited when redirecting SMB logon attempts to an attacker?", 
    a: ["Weak password policies", "SMB relay attack", "Lack of encryption in SMBv3", "Unpatched Windows firewall"], 
    c: 1, 
    exp: "Verified Answer: B. SMB relay attack"
  },
  { 
    id: 593, 
    q: "Which tool is commonly used to conduct SMB relay attacks?", 
    a: ["Wireshark", "Responder", "Nessus", "Nmap"], 
    c: 1, 
    exp: "Verified Answer: B. Responder"
  },
  { 
    id: 594, 
    q: "What is the purpose of an SMB relay attack?", 
    a: ["To create a denial-of-service condition on the victim's machine", "To steal NTLM hashes and authenticate as the victim", "To perform brute force attacks on SMB shares", "To scan the network for open SMB ports"], 
    c: 1, 
    exp: "Verified Answer: B. To steal NTLM hashes and authenticate as the victim"
  },
  { 
    id: 595, 
    q: "Which of the following techniques can help prevent SMB logon redirection attacks?", 
    a: ["Disabling SMBv1", "Enforcing SMB signing", "Using strong passwords", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 596, 
    q: "Which network protocol is commonly exploited to redirect SMB logon requests?", 
    a: ["DNS", "LLMNR/NBT-NS", "FTP", "HTTPS"], 
    c: 1, 
    exp: "Verified Answer: B. LLMNR/NBT-NS"
  },
  { 
    id: 597, 
    q: "How does the Responder tool facilitate SMB authentication redirection?", 
    a: ["By modifying the Windows registry", "By poisoning LLMNR/NBT-NS responses", "By encrypting SMB traffic", "By disabling network firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. By poisoning LLMNR/NBT-NS responses"
  },
  { 
    id: 598, 
    q: "What is an effective countermeasure against SMB authentication redirection attacks?", 
    a: ["Disabling LLMNR and NBT-NS", "Allowing all SMB traffic through firewalls", "Using SMBv1 for backward compatibility", "Enabling Guest access in SMB"], 
    c: 0, 
    exp: "Verified Answer: A. Disabling LLMNR and NBT-NS"
  },
  { 
    id: 599, 
    q: "Which Windows security feature helps protect against SMB relay attacks?", 
    a: ["BitLocker", "Windows Defender Firewall", "SMB Signing", "NTFS permissions"], 
    c: 2, 
    exp: "Verified Answer: C. SMB Signing"
  },
  { 
    id: 600, 
    q: "How can an attacker use a captured NTLM hash after redirecting an SMB logon request?", 
    a: ["Brute force attack", "Pass-the-Hash attack", "SQL Injection", "DoS attack"], 
    c: 1, 
    exp: "Verified Answer: B. Pass-the-Hash attack"
  },
  { 
    id: 600, 
    q: "How can an attacker use a captured NTLM hash after redirecting an SMB logon request?", 
    a: ["Brute force attack", "Pass-the-Hash attack", "SQL Injection", "DoS attack"], 
    c: 1, 
    exp: "Verified Answer: B. Pass-the-Hash attack"
  },
  { 
    id: 601, 
    q: "Which command disables LLMNR to prevent SMB logon redirection attacks in Windows?", 
    a: ["netsh firewall disable SMB", "sc config llmnr start= disabled", "gpedit.msc -> Local Policies -> Disable LLMNR", "Disable-NetAdapterBinding -Name “Ethernet” -ComponentID ms_llmnr"], 
    c: 2, 
    exp: "Verified Answer: C. gpedit.msc -> Local Policies -> Disable LLMNR"
  },
  { 
    id: 602, 
    q: "What is an SMB relay attack?", 
    a: ["An attack where SMB traffic is redirected to a malicious server for credential theft", "A denial-of-service attack against SMB shares", "An attack that modifies SMB file transfers in real-time", "A method to encrypt SMB communications"], 
    c: 0, 
    exp: "Verified Answer: A. An attack where SMB traffic is redirected to a malicious server for credential theft"
  },
  { 
    id: 603, 
    q: "Which of the following tools is commonly used for SMB relay attacks?", 
    a: ["Responder", "Metasploit", "Impacket", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 604, 
    q: "How does SMB relay work in a MITM attack?", 
    a: ["The attacker passively listens to SMB traffic", "The attacker injects malicious SMB requests into network traffic", "The attacker intercepts SMB authentication requests and relays them to a real server", "The attacker forces the victim to send plaintext passwords over SMB"], 
    c: 2, 
    exp: "Verified Answer: C. The attacker intercepts SMB authentication requests and relays them to a real server"
  },
  { 
    id: 605, 
    q: "Which attack technique is often used alongside SMB relay to capture NTLM hashes?", 
    a: ["LLMNR/NBT-NS poisoning", "SQL Injection", "ARP Spoofing", "DNS Spoofing"], 
    c: 0, 
    exp: "Verified Answer: A. LLMNR/NBT-NS poisoning"
  },
  { 
    id: 606, 
    q: "What is a primary countermeasure against SMB relay attacks?", 
    a: ["Disabling SMBv1", "Enforcing SMB signing", "Using complex passwords", "Allowing anonymous SMB connections"], 
    c: 1, 
    exp: "Verified Answer: B. Enforcing SMB signing"
  },
  { 
    id: 607, 
    q: "Why does SMB relay attack work even when NTLM authentication is enabled?", 
    a: ["NTLM authentication does not verify the server’s identity", "NTLM hashes are transmitted in plaintext over SMB", "SMB traffic is always encrypted", "SMB relay attacks do not work with NTLM authentication"], 
    c: 0, 
    exp: "Verified Answer: A. NTLM authentication does not verify the server’s identity"
  },
  { 
    id: 608, 
    q: "What is the role of NTLM authentication in SMB relay attacks?", 
    a: ["It prevents SMB relay attacks by encrypting passwords", "It allows attackers to relay authentication credentials without knowing the password", "It protects against pass-the-hash attacks", "It forces attackers to use brute force to crack passwords"], 
    c: 1, 
    exp: "Verified Answer: B. It allows attackers to relay authentication credentials without knowing the password"
  },
  { 
    id: 609, 
    q: "How can disabling LLMNR/NBT-NS help mitigate SMB relay attacks?", 
    a: ["It prevents DNS resolution", "It stops attackers from redirecting authentication requests to a rogue server", "It blocks all SMB traffic", "It allows SMB signing to work correctly"], 
    c: 1, 
    exp: "Verified Answer: B. It stops attackers from redirecting authentication requests to a rogue server"
  },
  { 
    id: 610, 
    q: "Which Microsoft security feature helps prevent SMB relay attacks?", 
    a: ["Windows Defender", "SMB Signing", "Group Policy Enforcement", "NTFS Permissions"], 
    c: 1, 
    exp: "Verified Answer: B. SMB Signing"
  },
  { 
    id: 611, 
    q: "What is an effective way to prevent SMB traffic from being intercepted on a local network?", 
    a: ["Implementing VLAN segmentation", "Using NTFS permissions", "Encrypting SMBv1 traffic", "Blocking HTTP traffic"], 
    c: 0, 
    exp: "Verified Answer: A. Implementing VLAN segmentation"
  },
  { 
    id: 612, 
    q: "What is a NetBIOS Denial of Service (DoS) attack?", 
    a: ["A method to prevent the victim from resolving NetBIOS names", "A technique for remotely accessing a victim's file system", "An attack targeting SMB file transfers", "A method to gain administrator privileges"], 
    c: 0, 
    exp: "Verified Answer: A. A method to prevent the victim from resolving NetBIOS names"
  },
  { 
    id: 613, 
    q: "Which of the following tools can be used to execute a NetBIOS DOS attack?", 
    a: ["Nbtscan", "Nbtstat", "Metasploit", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 614, 
    q: "How does the “NBName” attack affect a Windows system?", 
    a: ["It continuously overwrites the NetBIOS name table", "It corrupts the system registry", "It forces the system to restart continuously", "It blocks SMB authentication requests"], 
    c: 0, 
    exp: "Verified Answer: A. It continuously overwrites the NetBIOS name table"
  },
  { 
    id: 615, 
    q: "Which port is typically targeted in NetBIOS DoS attacks?", 
    a: ["TCP/135", "UDP/137", "TCP/445", "UDP/161"], 
    c: 1, 
    exp: "Verified Answer: B. UDP/137"
  },
  { 
    id: 616, 
    q: "What happens when a system’s NetBIOS name cache is poisoned?", 
    a: ["The system cannot connect to other NetBIOS devices", "The system automatically reboots", "All NetBIOS names resolve to localhost"], 
    c: 0, 
    exp: "Verified Answer: A. The system cannot connect to other NetBIOS devices"
  },
  { 
    id: 617, 
    q: "Which security measure can help prevent NetBIOS DoS attacks?", 
    a: ["Disabling NetBIOS over TCP/IP", "Allowing LLMNR", "Using SMBv1", "Opening UDP/137 to external networks"], 
    c: 0, 
    exp: "Verified Answer: A. Disabling NetBIOS over TCP/IP"
  },
  { 
    id: 618, 
    q: "How can a firewall mitigate NetBIOS DoS attacks?", 
    a: ["Blocking outbound SMB connections", "Blocking UDP/137 traffic from untrusted sources", "Allowing all NetBIOS traffic", "Enabling anonymous SMB connections"], 
    c: 1, 
    exp: "Verified Answer: B. Blocking UDP/137 traffic from untrusted sources"
  },
  { 
    id: 619, 
    q: "What is a key characteristic of a DDoS attack?", 
    a: ["It is executed by a single machine", "It originates from multiple compromised systems", "It requires physical access to the target network", "It can only target web servers"], 
    c: 1, 
    exp: "Verified Answer: B. It originates from multiple compromised systems"
  },
  { 
    id: 620, 
    q: "Which type of DDoS attack floods a target with spoofed requests that require responses larger than the original request?", 
    a: ["SYN Flood", "UDP Amplification Attack", "Ping of Death", "HTTP Slowloris Attack"], 
    c: 1, 
    exp: "Verified Answer: B. UDP Amplification Attack"
  },
  { 
    id: 621, 
    q: "What is the purpose of a botnet in a DDoS attack?", 
    a: ["To identify vulnerabilities in software", "To send massive amounts of traffic to overwhelm a target", "To patch security holes in a network", "To provide cloud-based storage solutions"], 
    c: 1, 
    exp: "Verified Answer: B. To send massive amounts of traffic to overwhelm a target"
  },
  { 
    id: 622, 
    q: "What is the primary objective of DNS reconnaissance?", 
    a: ["To encrypt DNS queries for security", "To gather information about a target's domain and subdomains", "To modify DNS records for unauthorized access", "To block domain name resolution"], 
    c: 1, 
    exp: "Verified Answer: B. To gather information about a target's domain and subdomains"
  },
  { 
    id: 623, 
    q: "Which of the following tools can be used for DNS reconnaissance?", 
    a: ["nslookup", "dig", "host", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 624, 
    q: "How does a WHOIS lookup help in DNS reconnaissance?", 
    a: ["It provides details about the domain registrar and contact information", "It retrieves the full zone transfer of a domain", "It encrypts DNS queries to prevent reconnaissance", "It modifies DNS records to confuse attackers"], 
    c: 0, 
    exp: "Verified Answer: A. It provides details about the domain registrar and contact information"
  },
  { 
    id: 625, 
    q: "What type of record does a DNS query return when checking for mail servers of a domain?", 
    a: ["A Record", "MX Record", "TXT Record", "PTR Record"], 
    c: 1, 
    exp: "Verified Answer: B. MX Record"
  },
  { 
    id: 626, 
    q: "Which of the following is a defensive measure against DNS reconnaissance?", 
    a: ["Enabling Zone Transfers", "Configuring DNS servers to respond only to trusted queries", "Using publicly available WHOIS records", "Keeping all DNS records unencrypted"], 
    c: 1, 
    exp: "Verified Answer: B. Configuring DNS servers to respond only to trusted queries"
  },
  { 
    id: 627, 
    q: "What is DNS enumeration?", 
    a: ["A process of deleting DNS records from a server", "A technique used to gather DNS records to identify target infrastructure", "A method for encrypting DNS queries", "A protocol used for securing DNS communication"], 
    c: 1, 
    exp: "Verified Answer: B. A technique used to gather DNS records to identify target infrastructure"
  },
  { 
    id: 628, 
    q: "Which type of DNS query attempts to retrieve the full DNS zone file of a domain?", 
    a: ["AXFR", "PTR", "TXT", "CNAME"], 
    c: 0, 
    exp: "Verified Answer: A. AXFR"
  },
  { 
    id: 629, 
    q: "Which tool is commonly used for automated DNS enumeration?", 
    a: ["Metasploit", "Nmap", "Fierce", "Ettercap"], 
    c: 2, 
    exp: "Verified Answer: C. Fierce"
  },
  { 
    id: 630, 
    q: "What is the purpose of a PTR record in DNS enumeration?", 
    a: ["To resolve an IP address to a domain name", "To specify mail servers for a domain", "To store additional DNS metadata", "To redirect one domain to another"], 
    c: 0, 
    exp: "Verified Answer: A. To resolve an IP address to a domain name"
  },
  { 
    id: 631, 
    q: "How can organizations prevent unauthorized DNS enumeration?", 
    a: ["Allowing unrestricted zone transfers", "Using DNSSEC without additional security measures", "Restricting zone transfers to authorized servers", "Disabling DNS query logging"], 
    c: 2, 
    exp: "Verified Answer: C. Restricting zone transfers to authorized servers"
  },
  { 
    id: 632, 
    q: "What is the default scan type used by Nmap when no specific scan type is mentioned?", 
    a: ["SYN scan", "TCP connect scan", "UDP scan", "NULL scan"], 
    c: 0, 
    exp: "Verified Answer: A. SYN scan"
  },
  { 
    id: 633, 
    q: "Which Nmap command is used to perform a simple ping scan to check live hosts?", 
    a: ["nmap -sS", "nmap -sn", "nmap -sU", "nmap -O"], 
    c: 1, 
    exp: "Verified Answer: B. nmap -sn"
  },
  { 
    id: 634, 
    q: "How does Nmap determine if a port is open during a SYN scan (-sS)?", 
    a: ["If it receives an RST response", "If it receives an ICMP Destination Unreachable message", "If it receives a SYN/ACK response", "If it receives a FIN response"], 
    c: 2, 
    exp: "Verified Answer: C. If it receives a SYN/ACK response"
  },
  { 
    id: 635, 
    q: "Which Nmap option is used to perform a service/version detection scan?", 
    a: ["-Ο", "-A", "-sV", "-Pn"], 
    c: 2, 
    exp: "Verified Answer: C. -sV"
  },
  { 
    id: 636, 
    q: "What does the Nmap option -Pn do?", 
    a: ["Skips host discovery and assumes all hosts are online", "Enables aggressive scanning", "Performs an OS detection scan", "Uses ICMP echo requests to find live hosts"], 
    c: 0, 
    exp: "Verified Answer: A. Skips host discovery and assumes all hosts are online"
  },
  { 
    id: 637, 
    q: "Which scan type in Nmap is used for UDP port scanning?", 
    a: ["-sT", "-sS", "-sU", "-sX"], 
    c: 2, 
    exp: "Verified Answer: C. -sU"
  },
  { 
    id: 638, 
    q: "What does Nmap’s -A flag enable?", 
    a: ["Aggressive scanning, including OS and version detection", "Only TCP SYN scanning", "Silent scanning without sending packets", "ARP scanning only"], 
    c: 0, 
    exp: "Verified Answer: A. Aggressive scanning, including OS and version detection"
  },
  { 
    id: 639, 
    q: "What is the primary purpose of a NULL scan (-sN)?", 
    a: ["To bypass firewall rules by sending packets with no flags set", "To detect live hosts on a network", "To scan only UDP ports", "To initiate a full TCP handshake"], 
    c: 0, 
    exp: "Verified Answer: A. To bypass firewall rules by sending packets with no flags set"
  },
  { 
    id: 640, 
    q: "What is the purpose of the --top-ports option in Nmap?", 
    a: ["To specify a specific range of ports to scan", "To scan only the most commonly used ports", "To list the most vulnerable ports", "To scan ports randomly"], 
    c: 1, 
    exp: "Verified Answer: B. To scan only the most commonly used ports"
  },
  { 
    id: 641, 
    q: "What does the -sP option in Nmap do?", 
    a: ["Enables stealth scanning", "Performs a ping sweep to discover live hosts", "Performs an aggressive scan", "Enumerates all services on a host"], 
    c: 1, 
    exp: "Verified Answer: B. Performs a ping sweep to discover live hosts"
  },
  { 
    id: 642, 
    q: "What is the primary function of Nessus?", 
    a: ["Network packet sniffing", "Intrusion detection", "Vulnerability scanning", "Web application firewall"], 
    c: 2, 
    exp: "Verified Answer: C. Vulnerability scanning"
  },
  { 
    id: 643, 
    q: "Which of the following is a common use case for Nessus?", 
    a: ["Password cracking", "Scanning for vulnerabilities in network devices", "Performing a Denial-of-Service attack", "Encrypting network traffic"], 
    c: 1, 
    exp: "Verified Answer: B. Scanning for vulnerabilities in network devices"
  },
  { 
    id: 644, 
    q: "What protocol does Nessus use to authenticate and scan Windows systems?", 
    a: ["SSH", "RDP", "SMB", "Telnet"], 
    c: 2, 
    exp: "Verified Answer: C. SMB"
  },
  { 
    id: 645, 
    q: "Which type of vulnerability scanning does Nessus perform by default?", 
    a: ["Passive scanning", "Active scanning", "Non-intrusive scanning", "Signature-based scanning"], 
    c: 1, 
    exp: "Verified Answer: B. Active scanning"
  },
  { 
    id: 646, 
    q: "What is the primary purpose of Nessus plugins?", 
    a: ["To increase scanning speed", "To detect specific vulnerabilities", "To encrypt scan results", "To bypass firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. To detect specific vulnerabilities"
  },
  { 
    id: 647, 
    q: "How can Nessus be updated to include new vulnerabilities?", 
    a: ["By reinstalling the software", "By manually adding new vulnerabilities", "By updating its plugin database", "Nessus does not require updates"], 
    c: 2, 
    exp: "Verified Answer: C. By updating its plugin database"
  },
  { 
    id: 648, 
    q: "Which Nessus feature allows users to create custom vulnerability scans?", 
    a: ["Predefined Templates", "Compliance Auditing", "Scan Policies", "Risk Calculation"], 
    c: 2, 
    exp: "Verified Answer: C. Scan Policies"
  },
  { 
    id: 649, 
    q: "What type of vulnerabilities can Nessus detect?", 
    a: ["Misconfigurations", "Outdated software versions", "Open ports and services", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 650, 
    q: "What report formats does Nessus support for exporting scan results?", 
    a: ["PDF", "CSV", "HTML", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 651, 
    q: "How does Nessus categorize the severity of vulnerabilities?", 
    a: ["Critical, High, Medium, Low, and Informational", "Severe, Moderate, Minor", "Dangerous, Risky , Safe", "None of the above"], 
    c: 0, 
    exp: "Verified Answer: A. Critical, High, Medium, Low, and Informational"
  },
  { 
    id: 652, 
    q: "Which of the following is an effective countermeasure against brute-force attacks?", 
    a: ["Disabling account lockout policies", "Implementing account lockouts after failed attempts", "Using short, simple passwords", "Allowing unlimited login attempts"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing account lockouts after failed attempts"
  },
  { 
    id: 653, 
    q: "Which hashing algorithm is more secure for storing passwords?", 
    a: ["MD5", "SHA-1", "bcrypt", "Base64"], 
    c: 2, 
    exp: "Verified Answer: C. bcrypt"
  },
  { 
    id: 654, 
    q: "What is a salt in the context of password security?", 
    a: ["A type of encryption", "A random value added to a password before hashing", "A password manager feature", "A type of firewall"], 
    c: 1, 
    exp: "Verified Answer: B. A random value added to a password before hashing"
  },
  { 
    id: 655, 
    q: "Which method helps prevent attackers from using dictionary attacks?", 
    a: ["Allowing users to reuse old passwords", "Enforcing strong password policies", "Limiting password length", "Storing passwords in plaintext"], 
    c: 1, 
    exp: "Verified Answer: B. Enforcing strong password policies"
  },
  { 
    id: 656, 
    q: "Which of the following countermeasures helps defend against keylogging attacks?", 
    a: ["Password reuse", "Enabling two-factor authentication (2FA)", "Using shorter passwords", "Disabling CAPTCHA"], 
    c: 1, 
    exp: "Verified Answer: B. Enabling two-factor authentication (2FA)"
  },
  { 
    id: 657, 
    q: "Which technology protects passwords from being sent in plaintext over the network?", 
    a: ["HTTP", "Telnet", "SSL/TLS", "FTP"], 
    c: 2, 
    exp: "Verified Answer: C. SSL/TLS"
  },
  { 
    id: 658, 
    q: "What is the purpose of a password manager?", 
    a: ["To create and store strong, unique passwords securely", "To generate weak passwords for easy recall", "To monitor network traffic", "To block phishing attacks"], 
    c: 0, 
    exp: "Verified Answer: A. To create and store strong, unique passwords securely"
  },
  { 
    id: 659, 
    q: "Which practice helps prevent social engineering-based password theft?", 
    a: ["Writing down passwords on paper", "Training employees on phishing awareness", "Using a single password for all accounts", "Sharing passwords with trusted colleagues"], 
    c: 1, 
    exp: "Verified Answer: B. Training employees on phishing awareness"
  },
  { 
    id: 660, 
    q: "How does multi-factor authentication (MFA) improve password security?", 
    a: ["It replaces passwords with biometrics", "It requires an additional form of verification, like a code or fingerprint", "It forces password rotation every day", "It hashes the password twice"], 
    c: 1, 
    exp: "Verified Answer: B. It requires an additional form of verification, like a code or fingerprint"
  },
  { 
    id: 661, 
    q: "Which of the following techniques reduces the effectiveness of rainbow table attacks?", 
    a: ["Password rotation", "Hashing with salts", "Using common passwords", "Shortening passwords"], 
    c: 1, 
    exp: "Verified Answer: B. Hashing with salts"
  },
  { 
    id: 662, 
    q: "Which of the following best defines an active attack?", 
    a: ["An attack that only observes data without affecting it", "An attack where the attacker disrupts or modifies data", "An attack that involves installing antivirus software", "An attack that hides the attacker ’s presence without interaction"], 
    c: 1, 
    exp: "Verified Answer: B. An attack where the attacker disrupts or modifies data"
  },
  { 
    id: 663, 
    q: "Which of the following is an example of a passive attack?", 
    a: ["Denial-of-Service (DoS)", "Data eavesdropping", "SQL Injection", "Phishing"], 
    c: 1, 
    exp: "Verified Answer: B. Data eavesdropping"
  },
  { 
    id: 664, 
    q: "In an active attack, what is the attacker ’s primary goal?", 
    a: ["Steal information without detection", "Modify , disrupt, or impersonate communication", "Monitor network traffic for analysis", "Avoid leaving any trace"], 
    c: 1, 
    exp: "Verified Answer: B. Modify , disrupt, or impersonate communication"
  },
  { 
    id: 665, 
    q: "Which type of attack involves packet sniffing without altering data?", 
    a: ["ARP Spoofing", "DNS Spoofing", "Traffic Analysis", "SQL Injection"], 
    c: 2, 
    exp: "Verified Answer: C. Traffic Analysis"
  },
  { 
    id: 666, 
    q: "Which of the following is an example of an active attack?", 
    a: ["Wiretapping", "IP Spoofing", "Traffic Monitoring", "Footprinting"], 
    c: 1, 
    exp: "Verified Answer: B. IP Spoofing"
  },
  { 
    id: 667, 
    q: "Which tool is commonly used for passive attacks like packet sniffing?", 
    a: ["Metasploit", "Wireshark", "Nessus", "John the Ripper"], 
    c: 1, 
    exp: "Verified Answer: B. Wireshark"
  },
  { 
    id: 668, 
    q: "What is the key difference between active and passive attacks?", 
    a: ["Active attacks never modify data, while passive attacks always do", "Active attacks involve interaction or disruption; passive attacks do not", "Passive attacks are more harmful than active attacks", "Passive attacks always lead to system crashes"], 
    c: 1, 
    exp: "Verified Answer: B. Active attacks involve interaction or disruption; passive attacks do not"
  },
  { 
    id: 669, 
    q: "Which of these is an active attack targeting a user’s session?", 
    a: ["Port Scanning", "Session Hijacking", "Network Sniffing", "Password Cracking"], 
    c: 1, 
    exp: "Verified Answer: B. Session Hijacking"
  },
  { 
    id: 670, 
    q: "A hacker captures network traffic to learn about the network topology but does not interfere with it. This is an example of:", 
    a: ["Passive Attack", "Active Attack", "DoS Attack", "SQL Injection"], 
    c: 0, 
    exp: "Verified Answer: A. Passive Attack"
  },
  { 
    id: 671, 
    q: "Which countermeasure is most effective against passive attacks?", 
    a: ["Firewalls", "Encryption", "Honeypots", "Intrusion Prevention Systems"], 
    c: 1, 
    exp: "Verified Answer: B. Encryption"
  },
  { 
    id: 672, 
    q: "What is an offline attack?", 
    a: ["An attack where the hacker actively manipulates the system in real-time", "An attack performed without a direct, continuous connection to the target system", "An attack that targets network infrastructure only", "An attack carried out by physical intrusion into the server room"], 
    c: 1, 
    exp: "Verified Answer: B. An attack performed without a direct, continuous connection to the target system"
  },
  { 
    id: 673, 
    q: "Which of the following is an example of an offline attack?", 
    a: ["Phishing", "Denial of Service", "Brute-force password cracking on stolen hashes", "ARP Spoofing"], 
    c: 2, 
    exp: "Verified Answer: C. Brute-force password cracking on stolen hashes"
  },
  { 
    id: 674, 
    q: "What type of data is typically stolen for offline password cracking?", 
    a: ["Plaintext passwords", "Encrypted password hashes", "IP addresses", "Session tokens"], 
    c: 1, 
    exp: "Verified Answer: B. Encrypted password hashes"
  },
  { 
    id: 675, 
    q: "Which of these is a commonly used tool for offline password cracking?", 
    a: ["Metasploit", "Wireshark", "John the Ripper", "Nessus"], 
    c: 2, 
    exp: "Verified Answer: C. John the Ripper"
  },
  { 
    id: 676, 
    q: "Which attack is often combined with offline attacks to steal hashed credentials?", 
    a: ["ARP Poisoning", "SQL Injection", "Phishing", "Port Scanning"], 
    c: 1, 
    exp: "Verified Answer: B. SQL Injection"
  },
  { 
    id: 677, 
    q: "Why are offline attacks harder to detect?", 
    a: ["They target only unused systems", "They are conducted away from the target system", "They involve physical access to the server", "They require no special skills"], 
    c: 1, 
    exp: "Verified Answer: B. They are conducted away from the target system"
  },
  { 
    id: 678, 
    q: "Which hash algorithm is considered weak and vulnerable to offline attacks?", 
    a: ["SHA-512", "AES-256", "MD5", "Blowfish"], 
    c: 2, 
    exp: "Verified Answer: C. MD5"
  },
  { 
    id: 679, 
    q: "What is a rainbow table attack?", 
    a: ["A method of creating strong passwords", "A type of DoS attack on routers", "A precomputed set of hashes to reverse weak password hashes", "An attack using multiple colored terminals to confuse administrators"], 
    c: 2, 
    exp: "Verified Answer: C. A precomputed set of hashes to reverse weak password hashes"
  },
  { 
    id: 680, 
    q: "Which of the following strengthens passwords against offline attacks?", 
    a: ["Using short, memorable passwords", "Implementing password salts", "Storing passwords in plaintext for easy access", "Encrypting user sessions"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing password salts"
  },
  { 
    id: 681, 
    q: "Which offline attack strategy involves trying every possible combination of characters?", 
    a: ["Dictionary attack", "Phishing", "Hybrid attack", "Brute-force attack"], 
    c: 3, 
    exp: "Verified Answer: D. Brute-force attack"
  },
  { 
    id: 682, 
    q: "What is a keylogger?", 
    a: ["A device that physically locks the keyboard", "A software or hardware tool that records keystrokes", "A tool used to log system events", "An antivirus software"], 
    c: 1, 
    exp: "Verified Answer: B. A software or hardware tool that records keystrokes"
  },
  { 
    id: 683, 
    q: "Which type of keylogger is installed directly onto a victim’ s computer?", 
    a: ["Hardware keylogger", "Software keylogger", "Network keylogger", "BIOS keylogger"], 
    c: 1, 
    exp: "Verified Answer: B. Software keylogger"
  },
  { 
    id: 684, 
    q: "How do hardware keyloggers differ from software keyloggers?", 
    a: ["Hardware keyloggers are faster", "Hardware keyloggers require physical access to the device", "Software keyloggers need administrator permission to run", "Hardware keyloggers are installed using malware"], 
    c: 1, 
    exp: "Verified Answer: B. Hardware keyloggers require physical access to the device"
  },
  { 
    id: 685, 
    q: "What is a rootkit?", 
    a: ["A tool that only logs keystrokes", "A malicious program that hides its existence while enabling control over the system", "A program that cleans viruses", "A file encryption tool"], 
    c: 1, 
    exp: "Verified Answer: B. A malicious program that hides its existence while enabling control over the system"
  },
  { 
    id: 686, 
    q: "Which spyware technique tracks what a user clicks on and which websites they visit?", 
    a: ["Adware", "Screen scraper", "Browser hijacker", "Spy cookie"], 
    c: 0, 
    exp: "Verified Answer: A. Adware"
  },
  { 
    id: 687, 
    q: "Which of these spyware types captures screenshots instead of keystrokes?", 
    a: ["Keylogger", "Screen scraper", "Remote Access Trojan (RAT)", "Spy cookie"], 
    c: 1, 
    exp: "Verified Answer: B. Screen scraper"
  },
  { 
    id: 688, 
    q: "What is a Trojan keylogger?", 
    a: ["A hardware device that records keys", "A standalone keylogger installed via USB", "A keylogger hidden within legitimate software or malware", "A mobile phone keylogger"], 
    c: 2, 
    exp: "Verified Answer: C. A keylogger hidden within legitimate software or malware"
  },
  { 
    id: 689, 
    q: "What’ s the primary goal of spyware?", 
    a: ["To block unauthorized access", "To monitor and steal sensitive user information", "To improve system performance", "To disable malware"], 
    c: 1, 
    exp: "Verified Answer: B. To monitor and steal sensitive user information"
  },
  { 
    id: 690, 
    q: "Which method helps detect a hidden keylogger on a system?", 
    a: ["Checking browser history", "Running a task manager and monitoring suspicious processes", "Deleting system logs", "Changing the keyboard layout"], 
    c: 1, 
    exp: "Verified Answer: B. Running a task manager and monitoring suspicious processes"
  },
  { 
    id: 691, 
    q: "Which is an effective way to protect against spyware and keyloggers?", 
    a: ["Use strong passwords", "Regularly clear browser cache", "Use reputable anti-malware/anti-spyware software", "Only use incognito mode"], 
    c: 2, 
    exp: "Verified Answer: C. Use reputable anti-malware/anti-spyware software"
  },
  { 
    id: 692, 
    q: "What is a Trojan horse in cybersecurity?", 
    a: ["A program that speeds up the computer", "A malicious program disguised as legitimate software", "A hardware failure that crashes the system", "A firewall bypass tool"], 
    c: 1, 
    exp: "Verified Answer: B. A malicious program disguised as legitimate software"
  },
  { 
    id: 693, 
    q: "Which of the following is a key characteristic of a backdoor?", 
    a: ["It provides unauthorized access to a system", "It speeds up system performance", "It protects data from attackers", "It scans for viruses"], 
    c: 0, 
    exp: "Verified Answer: A. It provides unauthorized access to a system"
  },
  { 
    id: 694, 
    q: "How are Trojans typically spread?", 
    a: ["Through antivirus programs", "By hardware malfunctions", "By being disguised as legitimate software or email attachments", "Through browser cookies"], 
    c: 2, 
    exp: "Verified Answer: C. By being disguised as legitimate software or email attachments"
  },
  { 
    id: 695, 
    q: "Which of these is NOT a type of Trojan?", 
    a: ["Remote Access Trojan (RAT)", "Keylogger Trojan", "Ransomware Trojan", "Firewall Trojan"], 
    c: 3, 
    exp: "Verified Answer: D. Firewall Trojan"
  },
  { 
    id: 696, 
    q: "What does a Remote Access Trojan (RAT) do?", 
    a: ["Encrypts files for ransom", "Blocks system access entirely", "Allows attackers to control the infected system remotely", "Deletes the operating system"], 
    c: 2, 
    exp: "Verified Answer: C. Allows attackers to control the infected system remotely"
  },
  { 
    id: 697, 
    q: "Which of the following is a well-known Trojan?", 
    a: ["WannaCry", "Sub7", "Stuxnet", "Petya"], 
    c: 1, 
    exp: "Verified Answer: B. Sub7"
  },
  { 
    id: 698, 
    q: "How do backdoors commonly get installed?", 
    a: ["Through operating system updates", "As part of a legitimate-looking Trojan", "By hardware failure", "Through web browsers only"], 
    c: 1, 
    exp: "Verified Answer: B. As part of a legitimate-looking Trojan"
  },
  { 
    id: 699, 
    q: "Which of these best describes a “Command and Control” (C2) server in the context of Trojans?", 
    a: ["A server that blocks malicious traffic", "A server that controls infected devices remotely", "A server that scans for Trojans", "A backup server for the network"], 
    c: 1, 
    exp: "Verified Answer: B. A server that controls infected devices remotely"
  },
  { 
    id: 700, 
    q: "What is a “Rootkit Trojan”?", 
    a: ["A Trojan designed to clean malware from the system", "A Trojan that hides its presence and other malware on the system", "A Trojan that encrypts files and demands ransom", "A Trojan that disables firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. A Trojan that hides its presence and other malware on the system"
  },	
  { 
    id: 701, 
    q: "What’s an effective countermeasure against Trojans and backdoors?", 
    a: ["Only using incognito mode in the browser", "Installing a software firewall and reliable anti-malware program", "Deleting system logs regularly", "Avoiding antivirus software for faster performance"], 
    c: 1, 
    exp: "Verified Answer: B. Installing a software firewall and reliable anti-malware program"
  },
  { 
    id: 702, 
    q: "What is an overt channel in computer networks?", 
    a: ["A communication path used for legitimate data transfer", "A secret path for data exfiltration", "A type of malware infection route", "A channel that operates only in encrypted networks"], 
    c: 0, 
    exp: "Verified Answer: A. A communication path used for legitimate data transfer"
  },
  { 
    id: 703, 
    q: "Which of the following is an example of a covert channel?", 
    a: ["Sending a file via email attachment", "Hiding data within image metadata", "Transferring files through a secure VPN", "Downloading files from an official website"], 
    c: 1, 
    exp: "Verified Answer: B. Hiding data within image metadata"
  },
  { 
    id: 704, 
    q: "What makes covert channels dangerous in cybersecurity?", 
    a: ["They can transfer large files faster", "They are hard to detect and can bypass security measures", "They encrypt data automatically", "They work only within secure networks"], 
    c: 1, 
    exp: "Verified Answer: B. They are hard to detect and can bypass security measures"
  },
  { 
    id: 705, 
    q: "Which of the following is a characteristic of a storage-based covert channel?", 
    a: ["It manipulates network packet timing", "It embeds data in unused fields of network protocols", "It alters file permissions or metadata to transmit data", "It uses sound waves to transmit information"], 
    c: 2, 
    exp: "Verified Answer: C. It alters file permissions or metadata to transmit data"
  },
  { 
    id: 706, 
    q: "Which protocol is often exploited for creating covert timing channels?", 
    a: ["TCP", "ICMP", "DNS", "UDP"], 
    c: 1, 
    exp: "Verified Answer: B. ICMP"
  },
  { 
    id: 707, 
    q: "What’s the main difference between overt and covert channels?", 
    a: ["Overt channels are encrypted, while covert channels are not", "Overt channels are used for legitimate communication, while covert channels hide unauthorized data", "Covert channels are faster", "Overt channels are only used in secure networks"], 
    c: 1, 
    exp: "Verified Answer: B. Overt channels are used for legitimate communication, while covert channels hide unauthorized data"
  },
  { 
    id: 708, 
    q: "Which of these is a common example of a timing-based covert channel?", 
    a: ["Hiding data within an image", "Modifying file names", "Encoding data through packet transmission delays", "Embedding data in a text file"], 
    c: 2, 
    exp: "Verified Answer: C. Encoding data through packet transmission delays"
  },
  { 
    id: 709, 
    q: "What technique could help detect covert channels?", 
    a: ["Firewall whitelisting only", "Packet analysis and anomaly detection", "Disabling antivirus software", "Relying only on encryption"], 
    c: 1, 
    exp: "Verified Answer: B. Packet analysis and anomaly detection"
  },
  { 
    id: 710, 
    q: "Which tool can attackers use to create covert channels?", 
    a: ["Wireshark", "Netcat", "Loki", "Ping"], 
    c: 2, 
    exp: "Verified Answer: C. Loki"
  },
  { 
    id: 711, 
    q: "What is one effective way to prevent covert channels?", 
    a: ["Block all network traffic", "Implement network traffic analysis and strict access controls", "Rely on a strong firewall only", "Allow only HTTP traffic"], 
    c: 1, 
    exp: "Verified Answer: B. Implement network traffic analysis and strict access controls"
  },
  { 
    id: 712, 
    q: "Which type of Trojan disguises itself as a legitimate program but, once executed, provides unauthorized access to the attacker?", 
    a: ["Rootkit Trojan", "Remote Access Trojan (RAT)", "Data-Sending Trojan", "Botnet Trojan"], 
    c: 1, 
    exp: "Verified Answer: B. Remote Access Trojan (RAT)"
  },
  { 
    id: 713, 
    q: "Which Trojan is specifically designed to hide its presence from the user and system processes?", 
    a: ["Exploit Trojan", "Backdoor Trojan", "Rootkit Trojan", "Proxy Trojan"], 
    c: 2, 
    exp: "Verified Answer: C. Rootkit Trojan"
  },
  { 
    id: 714, 
    q: "A Trojan that logs the victim's keystrokes to steal sensitive information like passwords is known as a:", 
    a: ["Banking Trojan", "Keylogger Trojan", "Destructive Trojan", "Botnet Trojan"], 
    c: 1, 
    exp: "Verified Answer: B. Keylogger Trojan"
  },
  { 
    id: 715, 
    q: "Which Trojan focuses on intercepting financial data during online transactions?", 
    a: ["Keylogger Trojan", "Banking Trojan", "Remote Access Trojan", "Ransomware Trojan"], 
    c: 1, 
    exp: "Verified Answer: B. Banking Trojan"
  },
  { 
    id: 716, 
    q: "What type of Trojan connects the infected device to a larger network of compromised devices controlled by a hacker?", 
    a: ["Proxy Trojan", "Botnet Trojan", "Downloader Trojan", "Rootkit Trojan"], 
    c: 1, 
    exp: "Verified Answer: B. Botnet Trojan"
  },
  { 
    id: 717, 
    q: "Which Trojan type downloads and installs additional malware on the victim’ s system after infection?", 
    a: ["Downloader Trojan", "Remote Access Trojan", "Rootkit Trojan", "Exploit Trojan"], 
    c: 0, 
    exp: "Verified Answer: A. Downloader Trojan"
  },
  { 
    id: 718, 
    q: "Which Trojan type turns the victim’ s device into a proxy server to mask malicious activities?", 
    a: ["Data-Sending Trojan", "Botnet Trojan", "Proxy Trojan", "Destructive Trojan"], 
    c: 2, 
    exp: "Verified Answer: C. Proxy Trojan"
  },
  { 
    id: 719, 
    q: "Which Trojan focuses on damaging or deleting data rather than stealing information?", 
    a: ["Destructive Trojan", "Ransomware Trojan", "Backdoor Trojan", "Botnet Trojan"], 
    c: 0, 
    exp: "Verified Answer: A. Destructive Trojan"
  },
  { 
    id: 720, 
    q: "Which type of Trojan exploits a vulnerability to gain unauthorized access to the system?", 
    a: ["Exploit Trojan", "Banking Trojan", "Botnet Trojan", "Spyware Trojan"], 
    c: 0, 
    exp: "Verified Answer: A. Exploit Trojan"
  },
  { 
    id: 721, 
    q: "Which Trojan spies on the victim’ s activities without their knowledge, capturing data like browsing habits, chat logs, or camera footage?", 
    a: ["Banking Trojan", "Spyware Trojan", "Remote Access Trojan", "Rootkit Trojan"], 
    c: 1, 
    exp: "Verified Answer: B. Spyware Trojan"
  },
  { 
    id: 722, 
    q: "What is the primary purpose of a reverse-connecting Trojan?", 
    a: ["To directly attack the victim’ s system without any connection", "To bypass firewalls by making the victim's system initiate the connection to attacker", "To download other malware onto the victim’ s system", "To slow down the victim’ s internet connection"], 
    c: 1, 
    exp: "Verified Answer: B. To bypass firewalls by making the victim's system initiate the connection to attacker"
  },
  { 
    id: 723, 
    q: "Which of the following is a common reverse-connection Trojan?", 
    a: ["NetBus", "Back Orifice", "Sub7", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 724, 
    q: "How does a reverse-connecting Trojan evade detection?", 
    a: ["It mimics legitimate outbound traffic", "It encrypts all data transfers", "It self-destructs after execution", "It hides inside system updates"], 
    c: 0, 
    exp: "Verified Answer: A. It mimics legitimate outbound traffic"
  },
  { 
    id: 725, 
    q: "What is the key difference between a regular Trojan and a reverse-connecting Trojan?", 
    a: ["Reverse-connecting Trojans rely on user interaction to execute", "Reverse-connecting Trojans require open ports on the attacker ’s machine, not the victim’ s", "Reverse-connecting Trojans do not require installation", "Reverse-connecting Trojans target mobile devices exclusively"], 
    c: 1, 
    exp: "Verified Answer: B. Reverse-connecting Trojans require open ports on the attacker ’s machine, not the victim’ s"
  },
  { 
    id: 726, 
    q: "Which technique do attackers often use with reverse-connecting Trojans to maintain control over infected machines?", 
    a: ["IP Spoofing", "DNS Tunneling", "Dynamic DNS (DDNS) services", "Port Forwarding"], 
    c: 2, 
    exp: "Verified Answer: C. Dynamic DNS (DDNS) services"
  },
  { 
    id: 727, 
    q: "What makes Netcat a powerful tool when used as a Trojan?", 
    a: ["It only functions within local networks", "It can establish both incoming and outgoing connections, enabling remote control", "It requires administrative privileges to run", "It can only transfer files but cannot create shells"], 
    c: 1, 
    exp: "Verified Answer: B. It can establish both incoming and outgoing connections, enabling remote control"
  },
  { 
    id: 728, 
    q: "Which command turns Netcat into a simple backdoor on a victim’ s system?", 
    a: ["nc -z -v target_ip 80", "nc -1 -p 4444 -e/bin/bash", "nc target_ip 80 -e/bin/sh", "nc -u target_ip 4444"], 
    c: 1, 
    exp: "Verified Answer: B. nc -1 -p 4444 -e/bin/bash"
  },
  { 
    id: 729, 
    q: "How can attackers use Netcat to transfer files during an attack?", 
    a: ["By exploiting buffer overflow vulnerabilities", "By using Netcat’ s built-in file transfer capability", "By embedding the file in HTTP traffic", "By compressing files before sending"], 
    c: 1, 
    exp: "Verified Answer: B. By using Netcat’ s built-in file transfer capability"
  },
  { 
    id: 730, 
    q: "Which of the following makes Netcat Trojans harder to detect?", 
    a: ["It uses encrypted communication by default", "It runs as a legitimate-looking process", "It disables antivirus software on the victim’ s machine", "It binds to ports commonly used by web services (e.g., 80, 443)"], 
    c: 3, 
    exp: "Verified Answer: D. It binds to ports commonly used by web services (e.g., 80, 443)"
  },
  { 
    id: 731, 
    q: "How can security analysts detect a Netcat Trojan running on a system?", 
    a: ["By checking for known Netcat filenames", "By analyzing the system’ s process list for “nc.exe” or “netcat”", "By inspecting unusual open ports and listening services", "By running an antivirus scan"], 
    c: 2, 
    exp: "Verified Answer: C. By inspecting unusual open ports and listening services"
  },
  { 
    id: 732, 
    q: "Which of the following is a key sign that a Trojan might be active on your system?", 
    a: ["Frequent browser crashes and errors", "Unusual CPU, memory , or network usage", "A sudden increase in system speed", "Automatic system updates running more frequently"], 
    c: 1, 
    exp: "Verified Answer: B. Unusual CPU, memory , or network usage"
  },
  { 
    id: 733, 
    q: "What behavior might indicate a Trojan is controlling your computer remotely?", 
    a: ["System updates download faster than usual", "Your mouse moves on its own, or applications open/close without input", "Antivirus scans complete quicker", "Files download without user intervention"], 
    c: 1, 
    exp: "Verified Answer: B. Your mouse moves on its own, or applications open/close without input"
  },
  { 
    id: 734, 
    q: "You notice an unknown process running with system privileges. What should you suspect?", 
    a: ["The system is running an update", "A Trojan or malware might be active", "A new driver was installed", "It’s part of routine background processes"], 
    c: 1, 
    exp: "Verified Answer: B. A Trojan or malware might be active"
  },
  { 
    id: 735, 
    q: "Which network behavior is a possible indicator of a Trojan infection?", 
    a: ["Regular traffic to trusted websites", "Periodic traffic to random, unknown IP addresses", "Increased latency during gaming sessions", "Frequent DNS lookups"], 
    c: 1, 
    exp: "Verified Answer: B. Periodic traffic to random, unknown IP addresses"
  },
  { 
    id: 736, 
    q: "A user reports their files have been renamed or modified without their knowledge. What is the likely cause?", 
    a: ["A software update went wrong", "The system file permissions were altered", "A Trojan or ransomware might be tampering with files", "The hard drive is corrupted"], 
    c: 2, 
    exp: "Verified Answer: C. A Trojan or ransomware might be tampering with files"
  },
  { 
    id: 737, 
    q: "What does “wrapping” refer to in the context of malware and trojans?", 
    a: ["Compressing a file to save storage space", "Encrypting data before transmission", "Hiding a malicious payload within a legitimate file or application", "Creating a backup of critical files"], 
    c: 2, 
    exp: "Verified Answer: C. Hiding a malicious payload within a legitimate file or application"
  },
  { 
    id: 738, 
    q: "Which of the following tools is commonly used for Trojan wrapping?", 
    a: ["Netcat", "Veil-Evasion", "Nmap", "Wireshark"], 
    c: 1, 
    exp: "Verified Answer: B. Veil-Evasion"
  },
  { 
    id: 739, 
    q: "Which type of file is most commonly wrapped to deliver malware?", 
    a: [".txt", ".jpg", ".exe", ".csv"], 
    c: 2, 
    exp: "Verified Answer: C. .exe"
  },
  { 
    id: 740, 
    q: "How can security analysts detect wrapped malware files?", 
    a: ["By manually checking file extensions", "Using steganography detection tools", "Through behavioral analysis and sandboxing", "By checking file size"], 
    c: 2, 
    exp: "Verified Answer: C. Through behavioral analysis and sandboxing"
  },
  { 
    id: 741, 
    q: "What is the primary goal of using wrapping in cyberattacks?", 
    a: ["To reduce the size of malicious payloads", "To make malware installation faster", "To evade antivirus detection by hiding the payload", "To confuse the target user"], 
    c: 2, 
    exp: "Verified Answer: C. To evade antivirus detection by hiding the payload"
  },
  { 
    id: 742, 
    q: "What is a Trojan Construction Kit primarily used for?", 
    a: ["Detecting Trojans on a system", "Generating custom Trojans with user-defined payloads", "Creating legitimate software applications", "Patching vulnerabilities in software"], 
    c: 1, 
    exp: "Verified Answer: B. Generating custom Trojans with user-defined payloads"
  },
  { 
    id: 743, 
    q: "Which of the following is an example of a Trojan Maker tool?", 
    a: ["Wireshark", "Havij", "Dark Comet", "Nessus"], 
    c: 2, 
    exp: "Verified Answer: C. Dark Comet"
  },
  { 
    id: 744, 
    q: "What feature is commonly found in Trojan Makers to bypass antivirus detection?", 
    a: ["Network monitoring", "Code obfuscation and encryption", "Data compression", "Performance optimization"], 
    c: 1, 
    exp: "Verified Answer: B. Code obfuscation and encryption"
  },
  { 
    id: 745, 
    q: "Which technique might a Trojan Construction Kit include to maintain persistence on the victim’ s system?", 
    a: ["System reboot prevention", "Registry modification for auto-start", "Remote packet sniffing", "SQL injection capabilities"], 
    c: 1, 
    exp: "Verified Answer: B. Registry modification for auto-start"
  },
  { 
    id: 746, 
    q: "Why are Trojan Construction Kits particularly dangerous for cybersecurity?", 
    a: ["They require advanced programming knowledge to use", "They only work on outdated operating systems", "They allow inexperienced attackers to create sophisticated malware easily", "They only target specific software"], 
    c: 2, 
    exp: "Verified Answer: C. They allow inexperienced attackers to create sophisticated malware easily"
  },
  { 
    id: 747, 
    q: "Which of the following is an essential first step in preventing Trojan infections?", 
    a: ["Installing multiple firewalls", "Avoiding unfamiliar software downloads", "Blocking all network traffic", "Disabling system logs"], 
    c: 1, 
    exp: "Verified Answer: B. Avoiding unfamiliar software downloads"
  },
  { 
    id: 748, 
    q: "How does updating software and operating systems help prevent Trojan attacks?", 
    a: ["It increases system performance", "It patches vulnerabilities that Trojans exploit", "It removes unnecessary programs", "It prevents hardware malfunction"], 
    c: 1, 
    exp: "Verified Answer: B. It patches vulnerabilities that Trojans exploit"
  },
  { 
    id: 749, 
    q: "Which type of firewall is most effective at blocking Trojan communication with an attacker?", 
    a: ["Packet-filtering firewall", "Proxy firewall", "Application-layer firewall", "Stateless firewall"], 
    c: 2, 
    exp: "Verified Answer: C. Application-layer firewall"
  },
  { 
    id: 750, 
    q: "What role does behavior -based antivirus software play in Trojan prevention?", 
    a: ["It checks file extensions", "It analyzes software behavior for suspicious activity", "It deletes unknown files", "It prevents data compression"], 
    c: 1, 
    exp: "Verified Answer: B. It analyzes software behavior for suspicious activity"
  },

  { 
    id: 751, 
    q: "Which of these user practices significantly reduces Trojan risks?", 
    a: ["Using strong, unique passwords", "Disabling antivirus during gaming sessions", "Frequently downloading from torrent sites", "Clicking pop-up advertisements for free software"], 
    c: 0, 
    exp: "Verified Answer: A. Using strong, unique passwords"
  },
  { 
    id: 752, 
    q: "Which tool is designed specifically to analyze network traffic for signs of Trojan activity?", 
    a: ["Burp Suite", "Wireshark", "NMAP", "Netstat"], 
    c: 1, 
    exp: "Verified Answer: B. Wireshark"
  },
  { 
    id: 753, 
    q: "How does User Account Control (UAC) in Windows help prevent Trojans?", 
    a: ["It blocks all incoming traffic", "It prevents unauthorized changes to system settings", "It restricts access to the Internet", "It shuts down the computer when a threat is detected"], 
    c: 1, 
    exp: "Verified Answer: B. It prevents unauthorized changes to system settings"
  },
  { 
    id: 754, 
    q: "Why is endpoint detection and response (EDR) software effective against Trojans?", 
    a: ["It optimizes hardware performance", "It monitors and responds to malicious activities on endpoints in real-time", "It updates system drivers", "It enhances internet speed"], 
    c: 1, 
    exp: "Verified Answer: B. It monitors and responds to malicious activities on endpoints in real-time"
  },
  { 
    id: 755, 
    q: "Which email security practice reduces the chance of Trojan infections?", 
    a: ["Forwarding unknown emails for verification", "Opening email attachments from untrusted sources", "Using email filters to block suspicious attachments", "Allowing macros in all email attachments"], 
    c: 2, 
    exp: "Verified Answer: C. Using email filters to block suspicious attachments"
  },
  { 
    id: 756, 
    q: "How does sandboxing help prevent Trojans?", 
    a: ["It blocks IP addresses", "It isolates suspicious programs from the main system", "It monitors physical hardware", "It encrypts internet connections"], 
    c: 1, 
    exp: "Verified Answer: B. It isolates suspicious programs from the main system"
  },
  { 
    id: 757, 
    q: "What is the primary purpose of Trojan evasion techniques?", 
    a: ["To improve Trojan performance", "To avoid detection by security software", "To infect more machines faster", "To increase system performance"], 
    c: 1, 
    exp: "Verified Answer: B. To avoid detection by security software"
  },
  { 
    id: 758, 
    q: "Which technique involves encrypting Trojan payloads to avoid signature detection?", 
    a: ["Wrapping", "Polymorphism", "Obfuscation", "Tunneling"], 
    c: 2, 
    exp: "Verified Answer: C. Obfuscation"
  },
  { 
    id: 759, 
    q: "How do polymorphic Trojans evade detection?", 
    a: ["By mimicking legitimate software", "By changing their code with each infection", "By running only in Safe Mode", "By deleting antivirus software"], 
    c: 1, 
    exp: "Verified Answer: B. By changing their code with each infection"
  },
  { 
    id: 760, 
    q: "Which evasion technique hides a Trojan within a legitimate file?", 
    a: ["Packing", "Wrapping", "Rootkit", "Spoofing"], 
    c: 1, 
    exp: "Verified Answer: B. Wrapping"
  },
  { 
    id: 761, 
    q: "What is the role of packers in Trojan evasion?", 
    a: ["To increase Trojan size", "To compress and encrypt the Trojan's code", "To duplicate the Trojan", "To slow down system performance"], 
    c: 1, 
    exp: "Verified Answer: B. To compress and encrypt the Trojan's code"
  },
  { 
    id: 762, 
    q: "Which of the following describes a rootkit’ s role in Trojan evasion?", 
    a: ["It boosts Trojan speed", "It modifies system processes to hide the Trojan’ s presence", "It removes antivirus programs", "It increases internet bandwidth"], 
    c: 1, 
    exp: "Verified Answer: B. It modifies system processes to hide the Trojan’ s presence"
  },
  { 
    id: 763, 
    q: "What is the purpose of a Trojan using anti-debugging techniques?", 
    a: ["To prevent reverse engineering and analysis", "To slow down system performance", "To avoid network detection", "To create multiple Trojan copies"], 
    c: 0, 
    exp: "Verified Answer: A. To prevent reverse engineering and analysis"
  },
  { 
    id: 764, 
    q: "How does a time-delay technique help Trojans evade detection?", 
    a: ["It hides the Trojan in system memory", "It delays the execution of the payload to avoid immediate detection", "It disables antivirus programs", "It corrupts system files"], 
    c: 1, 
    exp: "Verified Answer: B. It delays the execution of the payload to avoid immediate detection"
  },
  { 
    id: 765, 
    q: "Which of the following describes a Trojan that activates only under specific conditions?", 
    a: ["Dormant Trojan", "Rootkit Trojan", "Trigger -based Trojan", "Polymorphic Trojan"], 
    c: 2, 
    exp: "Verified Answer: C. Trigger -based Trojan"
  },
  { 
    id: 766, 
    q: "What is a key feature of fileless Trojans that helps them evade detection?", 
    a: ["They rely on user permissions", "They run directly in system memory without creating files on the disk", "They delete themselves after execution", "They only infect backup files"], 
    c: 1, 
    exp: "Verified Answer: B. They run directly in system memory without creating files on the disk"
  },
  { 
    id: 767, 
    q: "What is the primary purpose of system file verification?", 
    a: ["To improve system speed", "To ensure critical system files haven’ t been tampered with", "To optimize disk space", "To manage software installations"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure critical system files haven’ t been tampered with"
  },
  { 
    id: 768, 
    q: "Which command in Windows checks and repairs corrupted system files?", 
    a: ["chkdsk", "diskpart", "sfc /scannow", "msconfig"], 
    c: 2, 
    exp: "Verified Answer: C. sfc /scannow"
  },
  { 
    id: 769, 
    q: "How does Linux verify system file integrity?", 
    a: ["top", "fsck", "md5sum or sha256sum", "grep"], 
    c: 2, 
    exp: "Verified Answer: C. md5sum or sha256sum"
  },
  { 
    id: 770, 
    q: "Which of the following signs indicates system file corruption?", 
    a: ["Slow internet speed", "Frequent application crashes and BSOD (Blue Screen of Death)", "Increased storage space", "Faster boot time"], 
    c: 1, 
    exp: "Verified Answer: B. Frequent application crashes and BSOD (Blue Screen of Death)"
  },
  { 
    id: 771, 
    q: "What happens if system file verification detects an irreparable corrupted file?", 
    a: ["The file is deleted", "The system shuts down", "The file is replaced from a cached backup or installation source", "The system prompts to reinstall the OS"], 
    c: 2, 
    exp: "Verified Answer: C. The file is replaced from a cached backup or installation source"
  },
  { 
    id: 772, 
    q: "What is the key difference between a virus and a worm?", 
    a: ["A virus spreads on its own, while a worm needs user action", "A worm spreads on its own, while a virus needs user action", "Both require user action to spread", "Neither needs user action to spread"], 
    c: 1, 
    exp: "Verified Answer: B. A worm spreads on its own, while a virus needs user action"
  },
  { 
    id: 773, 
    q: "Which of the following best describes how a virus infects a system?", 
    a: ["It attaches itself to legitimate files and executes when the file is opened", "It directly infiltrates the network", "It modifies the boot sector of the hard drive", "It disguises itself as a normal program"], 
    c: 0, 
    exp: "Verified Answer: A. It attaches itself to legitimate files and executes when the file is opened"
  },
  { 
    id: 774, 
    q: "Which of these is a typical behavior of a worm?", 
    a: ["It corrupts user files silently", "It exploits network vulnerabilities to spread", "It disguises itself as legitimate software", "It stays dormant until triggered by the user"], 
    c: 1, 
    exp: "Verified Answer: B. It exploits network vulnerabilities to spread"
  },
  { 
    id: 775, 
    q: "What happens when a virus-infected file is executed?", 
    a: ["It deletes the file", "The virus activates, potentially spreading and causing harm", "It sends user data to a remote server", "It prevents the computer from booting"], 
    c: 1, 
    exp: "Verified Answer: B. The virus activates, potentially spreading and causing harm"
  },
  { 
    id: 776, 
    q: "Which type of malware consumes network bandwidth but may not harm files directly?", 
    a: ["Virus", "Trojan", "Worm", "Ransomware"], 
    c: 2, 
    exp: "Verified Answer: C. Worm"
  },
  { 
    id: 777, 
    q: "How are viruses and worms similar?", 
    a: ["Both require user action to spread", "Both replicate themselves", "Both disguise themselves as legitimate programs", "Both are harmless to files"], 
    c: 1, 
    exp: "Verified Answer: B. Both replicate themselves"
  },
  { 
    id: 778, 
    q: "Which malware type typically causes faster system slowdowns due to its replication method?", 
    a: ["Virus", "Worm", "Trojan", "Adware"], 
    c: 1, 
    exp: "Verified Answer: B. Worm"
  },
  { 
    id: 779, 
    q: "Which type of malware requires a host file to function?", 
    a: ["Worm", "Ransomware", "Virus", "Rootkit"], 
    c: 2, 
    exp: "Verified Answer: C. Virus"
  },
  { 
    id: 780, 
    q: "Which attack is more likely to trigger a Denial-of-Service (DoS) due to rapid replication?", 
    a: ["Virus", "Trojan", "Worm", "Spyware"], 
    c: 2, 
    exp: "Verified Answer: C. Worm"
  },
  { 
    id: 781, 
    q: "Which statement is true about viruses and worms?", 
    a: ["Both need human intervention to spread", "A worm can spread without user action, while a virus cannot", "Viruses replicate faster than worms", "Worms rely on infected files to activate"], 
    c: 1, 
    exp: "Verified Answer: B. A worm can spread without user action, while a virus cannot"
  },
  { 
    id: 782, 
    q: "What makes a polymorphic virus difficult to detect?", 
    a: ["It hides in system files", "It changes its code with each infection", "It attacks only certain operating systems", "It encrypts user data"], 
    c: 1, 
    exp: "Verified Answer: B. It changes its code with each infection"
  },
  { 
    id: 783, 
    q: "Which technique is commonly used by polymorphic viruses to avoid detection?", 
    a: ["Keylogging", "Code obfuscation", "Ransomware encryption", "Social engineering"], 
    c: 1, 
    exp: "Verified Answer: B. Code obfuscation"
  },
  { 
    id: 784, 
    q: "What component remains constant in a polymorphic virus despite its changing code?", 
    a: ["Encryption key", "Payload", "IP address", "Filename"], 
    c: 1, 
    exp: "Verified Answer: B. Payload"
  },
  { 
    id: 785, 
    q: "Which tool is effective in detecting polymorphic viruses?", 
    a: ["Traditional signature-based antivirus", "Behavioral-based antivirus", "Rootkit scanners", "Network firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. Behavioral-based antivirus"
  },
  { 
    id: 786, 
    q: "What is the primary goal of a polymorphic virus?", 
    a: ["To lock user files for ransom", "To evade detection while spreading", "To disable hardware", "To crash the operating system"], 
    c: 1, 
    exp: "Verified Answer: B. To evade detection while spreading"
  },
  { 
    id: 787, 
    q: "What is the most effective way to prevent worms from spreading?", 
    a: ["Use a hardware firewall", "Implement strong password policies", "Patch and update systems regularly", "Restrict physical access"], 
    c: 2, 
    exp: "Verified Answer: C. Patch and update systems regularly"
  },
  { 
    id: 788, 
    q: "Which network defense tool helps detect abnormal traffic patterns caused by worms?", 
    a: ["Proxy servers", "Intrusion Detection Systems (IDS)", "Email filters", "DNS server"], 
    c: 1, 
    exp: "Verified Answer: B. Intrusion Detection Systems (IDS)"
  },
  { 
    id: 789, 
    q: "How can email worms specifically be mitigated?", 
    a: ["Blocking all attachments", "Using email filters and sandboxing attachments", "Disabling internet access", "Allowing only trusted senders"], 
    c: 1, 
    exp: "Verified Answer: B. Using email filters and sandboxing attachments"
  },
  { 
    id: 790, 
    q: "What technique helps slow down worm propagation in networks?", 
    a: ["Load balancing", "Network segmentation", "Port mirroring", "NAT (Network Address Translation)"], 
    c: 1, 
    exp: "Verified Answer: B. Network segmentation"
  },
  { 
    id: 791, 
    q: "Which protocol is commonly abused by worms and should be monitored closely?", 
    a: ["SMTP", "HTTP", "ICMP", "FTP"], 
    c: 2, 
    exp: "Verified Answer: C. ICMP"
  },
  { 
    id: 792, 
    q: "Which worm specifically targeted industrial control systems (ICS) like nuclear plants?", 
    a: ["WannaCry", "Slammer", "Stuxnet", "Mydoom"], 
    c: 2, 
    exp: "Verified Answer: C. Stuxnet"
  },
  { 
    id: 793, 
    q: "What made the WannaCry worm particularly dangerous?", 
    a: ["It was fileless", "It self-spreads via an SMB vulnerability", "It could spread only through emails", "It targeted only one operating system"], 
    c: 1, 
    exp: "Verified Answer: B. It self-spreads via an SMB vulnerability"
  },
  { 
    id: 794, 
    q: "Which worm holds the record for the fastest spread, infecting most systems within 10 minutes?", 
    a: ["Code Red", "Slammer", "Stuxnet", "Conficker"], 
    c: 1, 
    exp: "Verified Answer: B. Slammer"
  },
  { 
    id: 795, 
    q: "What was the payload of the Mydoom worm?", 
    a: ["It encrypted files", "It launched a DDoS attack", "It installed a keylogger", "It wiped system partitions"], 
    c: 1, 
    exp: "Verified Answer: B. It launched a DDoS attack"
  },
  { 
    id: 796, 
    q: "How did Conficker maintain control over infected systems?", 
    a: ["It created an admin account", "It used a fast-flux botnet and domain generation algorithm (DGA)", "It locked users out", "It disabled firewalls"], 
    c: 1, 
    exp: "Verified Answer: B. It used a fast-flux botnet and domain generation algorithm (DGA)"
  },
  { 
    id: 797, 
    q: "Which evasion technique involves altering the structure of the malicious code without affecting its functionality?", 
    a: ["Code Injection", "Polymorphism", "API Hooking", "Rootkit Installation"], 
    c: 1, 
    exp: "Verified Answer: B. Polymorphism"
  },
  { 
    id: 798, 
    q: "What is “packing” in the context of antivirus evasion?", 
    a: ["Compressing malware to make it smaller", "Encrypting the malware’ s code to hide its payload", "Embedding malware in system drivers", "Making the malware mimic a legitimate program"], 
    c: 1, 
    exp: "Verified Answer: B. Encrypting the malware’ s code to hide its payload"
  },
  { 
    id: 799, 
    q: "Which evasion technique runs malicious code directly in memory , avoiding file-based detection?", 
    a: ["Polymorphism", "Heuristic bypassing", "Fileless malware", "DLL Injection"], 
    c: 2, 
    exp: "Verified Answer: C. Fileless malware"
  },
  { 
    id: 800, 
    q: "How does code obfuscation help malware evade antivirus detection?", 
    a: ["It hides the malware inside image files", "It changes the code’ s syntax to make it harder to analyze", "It blocks antivirus software from running", "It creates a fake error message to trick users"], 
    c: 1, 
    exp: "Verified Answer: B. It changes the code’ s syntax to make it harder to analyze"
  },
  { 
    id: 801, 
    q: "What is a sandbox evasion technique commonly used by advanced malware?", 
    a: ["Waiting for user interaction before running", "Running immediately upon launch", "Creating multiple decoy processes", "Deleting antivirus software"], 
    c: 0, 
    exp: "Verified Answer: A. Waiting for user interaction before running"
  },
  { 
    id: 802, 
    q: "Which detection method relies on a database of known malware signatures to identify viruses?", 
    a: ["Heuristic analysis", "Behavior -based detection", "Signature-based detection", "Anomaly detection"], 
    c: 2, 
    exp: "Verified Answer: C. Signature-based detection"
  },
  { 
    id: 803, 
    q: "What is the primary goal of heuristic-based virus detection?", 
    a: ["To block all unknown files", "To compare code against virus databases", "To analyze the code’s behavior and structure", "To scan only running processes"], 
    c: 2, 
    exp: "Verified Answer: C. To analyze the code’s behavior and structure"
  },
  { 
    id: 804, 
    q: "Which detection method monitors how a file behaves in real-time to determine if it’s malicious?", 
    a: ["Static analysis", "Behavior -based detection", "Signature matching", "Sandboxing"], 
    c: 1, 
    exp: "Verified Answer: B. Behavior -based detection"
  },
  { 
    id: 805, 
    q: "What is the purpose of sandboxing in virus detection?", 
    a: ["To compare code to a signature database", "To prevent files from running", "To isolate and observe a file’s behavior in a controlled environment", "To immediately delete suspicious files"], 
    c: 2, 
    exp: "Verified Answer: C. To isolate and observe a file’s behavior in a controlled environment"
  },
  { 
    id: 806, 
    q: "Which detection method compares current system behavior to a baseline of “normal” activity?", 
    a: ["Static analysis", "Anomaly-based detection", "Behavior analysis", "Signature detection"], 
    c: 1, 
    exp: "Verified Answer: B. Anomaly-based detection"
  },
  { 
    id: 807, 
    q: "Which protocol transmits data in plaintext, making it easy for attackers to capture credentials during sniffing attacks?", 
    a: ["HTTPS", "FTP", "SFTP", "SSH"], 
    c: 1, 
    exp: "Verified Answer: B. FTP"
  },
  { 
    id: 808, 
    q: "Which email protocol retrieves emails without encryption by default, exposing credentials to sniffing attacks?", 
    a: ["IMAP", "POP3", "SMTP", "MAPI"], 
    c: 1, 
    exp: "Verified Answer: B. POP3"
  },
  { 
    id: 809, 
    q: "Which older network management protocol uses community strings in plaintext, making it vulnerable to sniffing?", 
    a: ["SNMPv1", "SNMPv3", "LDAP", "IPX"], 
    c: 0, 
    exp: "Verified Answer: A. SNMPv1"
  },
  { 
    id: 810, 
    q: "Which protocol is used to transmit webpages but is insecure because data is sent in plaintext?", 
    a: ["HTTPS", "HTTP", "TCP", "UDP"], 
    c: 1, 
    exp: "Verified Answer: B. HTTP"
  },
  { 
    id: 811, 
    q: "Telnet is often replaced by which secure alternative due to its vulnerability to sniffing?", 
    a: ["SSH", "RDP", "HTTP", "FTP"], 
    c: 0, 
    exp: "Verified Answer: A. SSH"
  },
  { 
    id: 812, 
    q: "Which protocol, commonly used for file sharing, is vulnerable due to older versions not supporting encryption?", 
    a: ["SMBv2", "NFS", "SMBv1", "FTP"], 
    c: 2, 
    exp: "Verified Answer: C. SMBv1"
  },
  { 
    id: 813, 
    q: "Which VoIP protocol often transmits call data in plaintext, making voice conversations susceptible to sniffing?", 
    a: ["SIP", "RTP", "H.323", "SDP"], 
    c: 1, 
    exp: "Verified Answer: B. RTP"
  },
  { 
    id: 814, 
    q: "Which lightweight file-sharing protocol is known for being fast but lacks built-in encryption, making it vulnerable to sniffing?", 
    a: ["SCP", "TFTP", "SFTP", "FTPS"], 
    c: 1, 
    exp: "Verified Answer: B. TFTP"
  },
  { 
    id: 815, 
    q: "Which protocol uses community strings in plaintext for directory services, making it vulnerable to sniffing?", 
    a: ["LDAP", "DNS", "NTP", "DHCP"], 
    c: 0, 
    exp: "Verified Answer: A. LDAP"
  },
  { 
    id: 816, 
    q: "Which protocol used for network time synchronization can be abused for sniffing or even amplification attacks?", 
    a: ["ICMP", "SNMP", "NTP", "RARP"], 
    c: 2, 
    exp: "Verified Answer: C. NTP"
  },
  { 
    id: 817, 
    q: "What is the key difference between active and passive sniffing?", 
    a: ["Active sniffing is undetectable, passive sniffing is noisy", "Active sniffing interacts with traffic, passive sniffing listens quietly", "Active sniffing uses encryption, passive sniffing decrypts data", "Both methods are undetectable"], 
    c: 1, 
    exp: "Verified Answer: B. Active sniffing interacts with traffic, passive sniffing listens quietly"
  },
  { 
    id: 818, 
    q: "Which network type is most vulnerable to passive sniffing?", 
    a: ["Switched networks", "Wireless networks", "Hub-based networks", "Fiber optic networks"], 
    c: 2, 
    exp: "Verified Answer: C. Hub-based networks"
  },
  { 
    id: 819, 
    q: "What is a common goal of active sniffing?", 
    a: ["To capture data without detection", "To intercept and manipulate network traffic", "To encrypt network traffic", "To block all incoming traffic"], 
    c: 1, 
    exp: "Verified Answer: B. To intercept and manipulate network traffic"
  },
  { 
    id: 820, 
    q: "Which technique is commonly used in active sniffing on a switched network?", 
    a: ["Promiscuous mode", "ARP Poisoning", "TCP/IP Fingerprinting", "DNS Spoofing"], 
    c: 1, 
    exp: "Verified Answer: B. ARP Poisoning"
  },
  { 
    id: 821, 
    q: "In passive sniffing, which type of tool is most commonly used?", 
    a: ["Nmap", "Wireshark", "Netcat", "Nessus"], 
    c: 1, 
    exp: "Verified Answer: B. Wireshark"
  },
  { 
    id: 822, 
    q: "What type of attack does active sniffing often lead to?", 
    a: ["DoS attack", "MITM attack", "DNS Poisoning", "Port Scanning"], 
    c: 1, 
    exp: "Verified Answer: B. MITM attack"
  },
  { 
    id: 823, 
    q: "Which method forces a switch to behave like a hub, enabling active sniffing?", 
    a: ["ARP Spoofing", "MAC Flooding", "DNS Spoofing", "SYN Flood"], 
    c: 1, 
    exp: "Verified Answer: B. MAC Flooding"
  },
  { 
    id: 824, 
    q: "What is the primary limitation of passive sniffing in a switched environment?", 
    a: ["High resource consumption", "Requires administrative privileges", "It can only capture broadcast or local traffic", "It triggers firewall alerts"], 
    c: 2, 
    exp: "Verified Answer: C. It can only capture broadcast or local traffic"
  },
  { 
    id: 825, 
    q: "In active sniffing, which tool is commonly used for ARP spoofing?", 
    a: ["Nikto", "Hydra", "Ettercap", "Aircrack-ng"], 
    c: 2, 
    exp: "Verified Answer: C. Ettercap"
  },
  { 
    id: 826, 
    q: "Which countermeasure is most effective against active sniffing attacks like ARP spoofing?", 
    a: ["Using a VPN", "Enabling port mirroring", "Implementing dynamic ARP inspection", "Enabling promiscuous mode on all devices"], 
    c: 2, 
    exp: "Verified Answer: C. Implementing dynamic ARP inspection"
  },
  { 
    id: 827, 
    q: "Which of the following is an essential countermeasure against passive sniffing?", 
    a: ["Enable port mirroring on the switch", "Use strong encryption like HTTPS", "Implement ARP poisoning", "Allow promiscuous mode on all devices"], 
    c: 1, 
    exp: "Verified Answer: B. Use strong encryption like HTTPS"
  },
  { 
    id: 828, 
    q: "What is the simplest way to prevent sniffing on an unsecured wireless network?", 
    a: ["Disable DHCP", "Use WEP encryption", "Implement WPA3 encryption", "Hide the SSID"], 
    c: 2, 
    exp: "Verified Answer: C. Implement WPA3 encryption"
  },
  { 
    id: 829, 
    q: "Which mode must be disabled to prevent devices from capturing traffic not intended for them?", 
    a: ["Stealth mode", "Monitor mode", "Promiscuous mode", "Tunnel mode"], 
    c: 2, 
    exp: "Verified Answer: C. Promiscuous mode"
  },
  { 
    id: 830, 
    q: "Which protocol ensures end-to-end encryption, preventing sniffers from reading emails?", 
    a: ["FTP", "SMTP", "POP3", "Secure IMAP (IMAPS)"], 
    c: 3, 
    exp: "Verified Answer: D. Secure IMAP (IMAPS)"
  },
  { 
    id: 831, 
    q: "Which network configuration limits traffic only to the intended device on a switch?", 
    a: ["Port forwarding", "VLAN segmentation", "Network bridging", "ARP poisoning"], 
    c: 1, 
    exp: "Verified Answer: B. VLAN segmentation"
  },
  { 
    id: 832, 
    q: "What is a key countermeasure against ARP spoofing used in active sniffing?", 
    a: ["DNS filtering", "Static ARP entries", "Port mirroring", "ICMP blocking"], 
    c: 1, 
    exp: "Verified Answer: B. Static ARP entries"
  },
  { 
    id: 833, 
    q: "Which security feature verifies ARP packets against trusted sources to prevent sniffing attacks?", 
    a: ["Port Security", "MAC Filtering", "Dynamic ARP Inspection (DAI)", "IP Spoofing Detection"], 
    c: 2, 
    exp: "Verified Answer: C. Dynamic ARP Inspection (DAI)"
  },
  { 
    id: 834, 
    q: "How does IPSec protect against sniffing attacks?", 
    a: ["It hides the source IP address", "It encrypts and authenticates network traffic", "It blocks incoming packets", "It disables broadcast traffic"], 
    c: 1, 
    exp: "Verified Answer: B. It encrypts and authenticates network traffic"
  },
  { 
    id: 835, 
    q: "Which tool can detect network interfaces running in promiscuous mode (indicating possible sniffing)?", 
    a: ["Netcat", "Wireshark", "Antisniff", "Nmap"], 
    c: 2, 
    exp: "Verified Answer: C. Antisniff"
  },
  { 
    id: 836, 
    q: "What is the role of port security on a switch in preventing sniffing attacks?", 
    a: ["It blocks unauthorized MAC addresses", "It encrypts all network traffic", "It hides VLANs from attackers", "It disables unused ports"], 
    c: 0, 
    exp: "Verified Answer: A. It blocks unauthorized MAC addresses"
  },
  { 
    id: 837, 
    q: "Which filter would capture only TCP traffic on port 80 in Wireshark?", 
    a: ["tcp.port == 80", "port 80 && tcp", "tcp.dstport == 80", "tcp port 80"], 
    c: 3, 
    exp: "Verified Answer: D. tcp port 80"
  },
  { 
    id: 838, 
    q: "Which display filter would show only HTTP traffic in Wireshark?", 
    a: ["tcp contains “http”", "http", "tcp.port == 80 && http", "tcp.http"], 
    c: 1, 
    exp: "Verified Answer: B. http"
  },
  { 
    id: 839, 
    q: "How can you filter only traffic from a specific IP address in Wireshark?", 
    a: ["ip.src == 192.168.1.1", "ip.addr == 192.168.1.1", "host 192.168.1.1", "ip.target == 192.168.1.1"], 
    c: 1, 
    exp: "Verified Answer: B. ip.addr == 192.168.1.1"
  },
  { 
    id: 840, 
    q: "Which capture filter would only collect packets from a specific MAC address?", 
    a: ["ether host 00:1A:2B:3C:4D:5E", "mac.src ==00:1A:2B:3C:4D:5E", "ether.addr ==00:1A:2B:3C:4D:5E", "eth.src ==00:1A:2B:3C:4D:5E"], 
    c: 0, 
    exp: "Verified Answer: A. ether host 00:1A:2B:3C:4D:5E"
  },
  { 
    id: 841, 
    q: "How do you display only DNS traffic in Wireshark?", 
    a: ["dns.port == 53", "udp.port == 53 && dns", "dns", "port 53 && dns"], 
    c: 2, 
    exp: "Verified Answer: C. dns"
  },
  { 
    id: 842, 
    q: "What is the main goal of an ARP poisoning attack?", 
    a: ["To overload the ARP cache with junk entries", "To redirect network traffic by associating the attacker’s MAC address with target’s IP", "To crash the target machine by flooding ARP requests", "To change DNS records on the victim’s machine"], 
    c: 1, 
    exp: "Verified Answer: B. To redirect network traffic by associating the attacker’s MAC address with target’s IP"
  },
  { 
    id: 843, 
    q: "Which tool is commonly used to perform ARP poisoning attacks?", 
    a: ["Metasploit", "Aircrack-ng", "Ettercap", "Wireshark"], 
    c: 2, 
    exp: "Verified Answer: C. Ettercap"
  },
  { 
    id: 844, 
    q: "What type of packet is typically sent during an ARP poisoning attack?", 
    a: ["ARP Request", "ARP Reply", "ICMP Echo Request", "TCP SYN"], 
    c: 1, 
    exp: "Verified Answer: B. ARP Reply"
  },
  { 
    id: 845, 
    q: "How can you detect an ARP poisoning attack on a network?", 
    a: ["By checking for high CPU usage on the router", "By monitoring the DNS cache for unauthorized changes", "By inspecting the ARP table for duplicate IP-MAC mappings", "By looking for increased ICMP traffic"], 
    c: 2, 
    exp: "Verified Answer: C. By inspecting the ARP table for duplicate IP-MAC mappings"
  },
  { 
    id: 846, 
    q: "Which countermeasure can help prevent ARP poisoning attacks?", 
    a: ["Use DNSSEC to secure DNS queries", "Enable MAC address filtering on routers", "Implement static ARP entries or Dynamic ARP Inspection (DAI)", "Use strong passwords for router access"], 
    c: 2, 
    exp: "Verified Answer: C. Implement static ARP entries or Dynamic ARP Inspection (DAI)"
  },
  { 
    id: 847, 
    q: "What is the primary goal of a MAC flooding attack?", 
    a: ["To overload the DNS server with fake requests", "To fill the switch's CAM table, forcing it to act like a hub", "To disconnect users from the network", "To steal Wi-Fi credentials"], 
    c: 1, 
    exp: "Verified Answer: B. To fill the switch's CAM table, forcing it to act like a hub"
  },
  { 
    id: 848, 
    q: "Which tool is commonly used to perform MAC flooding attacks?", 
    a: ["Nmap", "Wireshark", "Macof", "Hydra"], 
    c: 2, 
    exp: "Verified Answer: C. Macof"
  },
  { 
    id: 849, 
    q: "Which type of switch is vulnerable to MAC flooding attacks?", 
    a: ["Layer 3 managed switches", "Unmanaged switches without port security", "Wireless access points", "Routers with firewall enabled"], 
    c: 1, 
    exp: "Verified Answer: B. Unmanaged switches without port security"
  },
  { 
    id: 850, 
    q: "What happens when a switch enters “fail-open” mode due to MAC flooding?", 
    a: ["It shuts down all ports", "It disables IP routing", "It starts broadcasting packets to all ports", "It blocks traffic from unknown MAC addresses"], 
    c: 2, 
    exp: "Verified Answer: C. It starts broadcasting packets to all ports"
  },
  { 
    id: 850, 
    q: "What happens when a switch enters “fail-open” mode due to MAC flooding?", 
    a: ["It shuts down all ports", "It disables IP routing", "It starts broadcasting packets to all ports", "It blocks traffic from unknown MAC addresses"], 
    c: 2, 
    exp: "Verified Answer: C. It starts broadcasting packets to all ports"
  },
  { 
    id: 851, 
    q: "Which security feature helps prevent MAC flooding on modern switches?", 
    a: ["VLAN hopping", "Port mirroring", "Port security with MAC address limiting", "DNSSEC"], 
    c: 2, 
    exp: "Verified Answer: C. Port security with MAC address limiting"
  },
  { 
    id: 852, 
    q: "Which technique involves corrupting a DNS server’s cache with false DNS records?", 
    a: ["DNS Hijacking", "DNS Tunneling", "DNS Cache Poisoning", "Pharming"], 
    c: 2, 
    exp: "Verified Answer: C. DNS Cache Poisoning"
  },
  { 
    id: 853, 
    q: "What type of DNS spoofing technique intercepts DNS requests and responds with fake IP addresses?", 
    a: ["DNS Reflection", "Man-in-the-Middle (MITM) DNS Spoofing", "DNS Zone Transfer", "DNS Amplification"], 
    c: 1, 
    exp: "Verified Answer: B. Man-in-the-Middle (MITM) DNS Spoofing"
  },
  { 
    id: 854, 
    q: "Which DNS spoofing method involves redirecting traffic by modifying the host's local DNS resolver file?", 
    a: ["DNS Cache Poisoning", "Pharming", "Local Host File Poisoning", "DNS Amplification"], 
    c: 2, 
    exp: "Verified Answer: C. Local Host File Poisoning"
  },
  { 
    id: 855, 
    q: "In DNS spoofing, what is the purpose of a “birthday attack”?", 
    a: ["To brute force DNS server credentials", "To guess the transaction ID and forge a DNS response before the legitimate one arrives", "To overload DNS servers with repeated queries", "To poison the DNS cache by modifying authoritative records"], 
    c: 1, 
    exp: "Verified Answer: B. To guess the transaction ID and forge a DNS response before the legitimate one arrives"
  },
  { 
    id: 856, 
    q: "Which protocol feature is most commonly exploited in DNS spoofing attacks?", 
    a: ["TCP three-way handshake", "UDP’s connectionless nature", "ICMP redirect messages", "HTTP keep-alive sessions"], 
    c: 1, 
    exp: "Verified Answer: B. UDP’s connectionless nature"
  },
  { 
    id: 857, 
    q: "Which type of DNS attack tricks a DNS server into accepting malicious data from an unauthorized source?", 
    a: ["DNS Amplification", "DNS Hijacking", "DNS Cache Poisoning", "DNS Tunneling"], 
    c: 2, 
    exp: "Verified Answer: C. DNS Cache Poisoning"
  },
  { 
    id: 858, 
    q: "What is the primary goal of DNS hijacking?", 
    a: ["To redirect DNS queries to a rogue DNS server", "To block users from accessing DNS servers", "To slow down DNS query responses", "To overload the DNS server with requests"], 
    c: 0, 
    exp: "Verified Answer: A. To redirect DNS queries to a rogue DNS server"
  },
  { 
    id: 859, 
    q: "Which DNS attack involves encoding data inside DNS queries and responses to bypass firewalls?", 
    a: ["DNS Spoofing", "DNS Tunneling", "DNS Amplification", "DNS Redirection"], 
    c: 1, 
    exp: "Verified Answer: B. DNS Tunneling"
  },
  { 
    id: 860, 
    q: "Which tool is widely used for performing DNS enumeration and finding subdomains during DNS attacks?", 
    a: ["Nmap", "Netcat", "Dig", "Metasploit"], 
    c: 2, 
    exp: "Verified Answer: C. Dig"
  },
  { 
    id: 861, 
    q: "What is the primary weakness that allows attackers to perform DNS amplification attacks?", 
    a: ["The small size of DNS request packets compared to the large response size", "DNS servers using TCP instead of UDP", "Encryption errors in DNSSEC", "Weak password policies on DNS servers"], 
    c: 0, 
    exp: "Verified Answer: A. The small size of DNS request packets compared to the large response size"
  },
  { 
    id: 862, 
    q: "What is the main characteristic of a Smurf attack?", 
    a: ["Exploiting TCP connections to hijack a session", "Sending ICMP Echo requests to a broadcast address with a spoofed source IP", "Flooding the victim with UDP packets", "Overloading DNS servers with bogus queries"], 
    c: 1, 
    exp: "Verified Answer: B. Sending ICMP Echo requests to a broadcast address with a spoofed source IP"
  },
  { 
    id: 863, 
    q: "Which protocol is primarily exploited in a Smurf attack?", 
    a: ["ТСР", "UDP", "ICMP", "ARP"], 
    c: 2, 
    exp: "Verified Answer: C. ICMP"
  },
  { 
    id: 864, 
    q: "What key defense can prevent a Smurf attack on a router or gateway?", 
    a: ["Enabling port forwarding", "Disabling ICMP traffic on external interfaces", "Using DNS filtering", "Deploying firewalls with NAT"], 
    c: 1, 
    exp: "Verified Answer: B. Disabling ICMP traffic on external interfaces"
  },
  { 
    id: 865, 
    q: "How does an attacker typically amplify the traffic in a Smurf attack?", 
    a: ["By repeatedly sending small TCP packets", "By using multiple botnets to send requests", "By sending ICMP packets to a broadcast address", "By overloading the victim’s DNS server"], 
    c: 2, 
    exp: "Verified Answer: C. By sending ICMP packets to a broadcast address"
  },
  { 
    id: 866, 
    q: "Which of the following is a variation of the Smurf attack that uses UDP instead of ICMP?", 
    a: ["SYN Flood", "DNS Amplification Attack", "Fraggle Attack", "Land Attack"], 
    c: 2, 
    exp: "Verified Answer: C. Fraggle Attack"
  },
  { 
    id: 867, 
    q: "What happens to a server during a SYN flood attack?", 
    a: ["The server crashes immediately", "The server is overwhelmed with incomplete TCP connections", "The server receives malformed UDP packets", "The server’s DNS cache gets poisoned"], 
    c: 1, 
    exp: "Verified Answer: B. The server is overwhelmed with incomplete TCP connections"
  },
  { 
    id: 868, 
    q: "Which phase of the TCP three-way handshake is targeted by a SYN flood attack?", 
    a: ["SYN", "SYN-ACK", "ACK", "FIN"], 
    c: 0, 
    exp: "Verified Answer: A. SYN"
  },
  { 
    id: 869, 
    q: "Which of the following is an effective way to mitigate SYN flood attacks?", 
    a: ["DNS filtering", "SYN cookies", "Disabling ICMP traffic", "Port forwarding"], 
    c: 1, 
    exp: "Verified Answer: B. SYN cookies"
  },
  { 
    id: 870, 
    q: "How can attackers spoof the source IP in a SYN flood attack?", 
    a: ["By modifying DNS records", "By using ARP poisoning", "By forging the IP header in SYN packets", "By sending UDP packets instead"], 
    c: 2, 
    exp: "Verified Answer: C. By forging the IP header in SYN packets"
  },
  { 
    id: 871, 
    q: "What is the primary goal of a SYN flood attack?", 
    a: ["Data exfiltration", "Gaining root access", "Overloading the server’s resources", "Manipulating DNS responses"], 
    c: 2, 
    exp: "Verified Answer: C. Overloading the server’s resources"
  },
  { 
    id: 872, 
    q: "Which of the following tools can help prevent ARP poisoning attacks?", 
    a: ["Wireshark", "Arpwatch", "Netcat", "Nmap"], 
    c: 1, 
    exp: "Verified Answer: B. Arpwatch"
  },
  { 
    id: 873, 
    q: "How can DNS poisoning attacks be mitigated?", 
    a: ["Using shorter TTL values for DNS records", "Implementing DNSSEC", "Blocking port 53", "Using HTTP tunneling"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing DNSSEC"
  },
  { 
    id: 874, 
    q: "What technique prevents ARP poisoning by binding IP addresses to MAC addresses statically?", 
    a: ["Dynamic ARP Inspection", "MAC Flooding", "Static ARP entries", "IP Spoofing"], 
    c: 2, 
    exp: "Verified Answer: C. Static ARP entries"
  },
  { 
    id: 875, 
    q: "Which of the following network configurations helps detect and block poisoning attacks in real-time?", 
    a: ["Spanning Tree Protocol (STP)", "Port Mirroring", "Intrusion Detection Systems (IDS)", "Load Balancing"], 
    c: 2, 
    exp: "Verified Answer: C. Intrusion Detection Systems (IDS)"
  },
  { 
    id: 876, 
    q: "How does enabling DHCP snooping help prevent poisoning attacks?", 
    a: ["It prevents unauthorized devices from joining the network", "It filters DNS traffic", "It validates ARP packets and prevents rogue DHCP servers", "It disables all incoming SYN packets"], 
    c: 2, 
    exp: "Verified Answer: C. It validates ARP packets and prevents rogue DHCP servers"
  },
  { 
    id: 877, 
    q: "Which type of DoS attack floods a network with ICMP Echo Request (ping) packets to overwhelm the target?", 
    a: ["SYN Flood", "Smurf Attack", "HTTP Flood", "UDP Flood"], 
    c: 1, 
    exp: "Verified Answer: B. Smurf Attack"
  },
  { 
    id: 878, 
    q: "What type of DoS attack exploits the three-way handshake by sending SYN packets but never completing the connection?", 
    a: ["UDP Flood", "Teardrop Attack", "SYN Flood", "ICMP Flood"], 
    c: 2, 
    exp: "Verified Answer: C. SYN Flood"
  },
  { 
    id: 879, 
    q: "Which DoS attack involves sending fragmented packets that the target system fails to reassemble?", 
    a: ["Land Attack", "Teardrop Attack", "Ping of Death", "HTTP Flood"], 
    c: 1, 
    exp: "Verified Answer: B. Teardrop Attack"
  },
  { 
    id: 880, 
    q: "In which DoS attack does the attacker spoof the victim’s IP address and flood the target with UDP packets on random ports?", 
    a: ["Land Attack", "Smurf Attack", "UDP Flood", "SYN Flood"], 
    c: 2, 
    exp: "Verified Answer: C. UDP Flood"
  },
  { 
    id: 881, 
    q: "Which rare DoS attack involves sending packets with the same source and destination IP and port?", 
    a: ["Smurf Attack", "Land Attack", "Ping of Death", "HTTP Flood"], 
    c: 1, 
    exp: "Verified Answer: B. Land Attack"
  },
  { 
    id: 882, 
    q: "In a DDoS attack, what is the primary role of the “botnet”?", 
    a: ["To protect the target from the attack", "To coordinate multiple compromised devices to flood the target", "To block the attacker’s IP address", "To repair the victim’s server"], 
    c: 1, 
    exp: "Verified Answer: B. To coordinate multiple compromised devices to flood the target"
  },
  { 
    id: 883, 
    q: "What is the term for the machine that controls the botnet in a DDoS attack?", 
    a: ["Zombie", "Handler", "Master", "Proxy"], 
    c: 2, 
    exp: "Verified Answer: C. Master"
  },
  { 
    id: 884, 
    q: "Which type of DDoS attack aims to exhaust the target’s network bandwidth with a massive volume of traffic?", 
    a: ["Application Layer DDoS", "Protocol DDoS", "Volumetric DDoS", "Reflection DDoS"], 
    c: 2, 
    exp: "Verified Answer: C. Volumetric DDoS"
  },
  { 
    id: 885, 
    q: "In a DDoS attack, what technique involves using spoofed IP addresses to make it harder to trace the attacker?", 
    a: ["ARP Poisoning", "IP Spoofing", "DNS Hijacking", "Man-in-the-Middle"], 
    c: 1, 
    exp: "Verified Answer: B. IP Spoofing"
  },
  { 
    id: 886, 
    q: "Which type of DDoS attack targets the application layer (e.g., HTTP requests) to exhaust server resources?", 
    a: ["SYN Flood", "UDP Flood", "Application Layer DDoS", "ICMP Flood"], 
    c: 2, 
    exp: "Verified Answer: C. Application Layer DDoS"
  },
  { 
    id: 887, 
    q: "What is the primary method attackers use to recruit devices into a botnet?", 
    a: ["By sending a request for permission to the user", "By exploiting vulnerabilities or using malware", "By asking the device for login credentials", "By physically connecting to the device"], 
    c: 1, 
    exp: "Verified Answer: B. By exploiting vulnerabilities or using malware"
  },
  { 
    id: 888, 
    q: "Which protocol is most commonly used by a Command-and-Control (C&C) server to communicate with bots in a botnet?", 
    a: ["SMTP", "FTP", "HTTP/HTTPS", "ICMP"], 
    c: 2, 
    exp: "Verified Answer: C. HTTP/HTTPS"
  },
  { 
    id: 889, 
    q: "What is a “zombie” in the context of botnets?", 
    a: ["A user who clicks on malicious links", "A computer that is infected and controlled by an attacker", "A backup server in a botnet", "A honeypot designed to catch bots"], 
    c: 1, 
    exp: "Verified Answer: B. A computer that is infected and controlled by an attacker"
  },
  { 
    id: 890, 
    q: "Which type of botnet structure makes it harder to take down by eliminating a central Command-and-Control server?", 
    a: ["Star Topology", "Centralized Architecture", "Decentralized (P2P) Architecture", "Hybrid Topology"], 
    c: 2, 
    exp: "Verified Answer: C. Decentralized (P2P) Architecture"
  },
  { 
    id: 891, 
    q: "What technique allows botnets to disguise traffic to blend in with normal web traffic?", 
    a: ["Traffic Injection", "Steganography", "Protocol Mimicry", "Encryption"], 
    c: 2, 
    exp: "Verified Answer: C. Protocol Mimicry"
  },
  { 
    id: 892, 
    q: "What is the key difference between spoofing and hijacking attacks?", 
    a: ["Spoofing involves pretending to be someone else, while hijacking involves taking over an active session", "Spoofing uses encryption, but hijacking doesn’ t", "Hijacking requires malware, while spoofing doesn’ t", "Spoofing only affects websites, but hijacking affects networks"], 
    c: 0, 
    exp: "Verified Answer: A. Spoofing involves pretending to be someone else, while hijacking involves taking over an active session"
  },
  { 
    id: 893, 
    q: "Which type of attack involves injecting malicious content into an ongoing communication between two parties?", 
    a: ["IP Spoofing", "Session Hijacking", "DNS Spoofing", "Email Spoofing"], 
    c: 1, 
    exp: "Verified Answer: B. Session Hijacking"
  },
  { 
    id: 894, 
    q: "Which of the following is an example of spoofing, not hijacking?", 
    a: ["A hacker intercepts a live chat session and takes over the conversation", "A hacker impersonates a trusted IP address to gain access", "An attacker forces a user to log out and steals their session cookie", "A malicious actor injects code into a live video stream"], 
    c: 1, 
    exp: "Verified Answer: B. A hacker impersonates a trusted IP address to gain access"
  },
  { 
    id: 895, 
    q: "Which protocol is particularly vulnerable to session hijacking attacks?", 
    a: ["FTP", "HTTP (without HTTPS)", "SMTP", "UDP"], 
    c: 1, 
    exp: "Verified Answer: B. HTTP (without HTTPS)"
  },
  { 
    id: 896, 
    q: "What countermeasure is most effective against both spoofing and hijacking attacks?", 
    a: ["Using static IP addresses", "Enabling multi-factor authentication", "Implementing encryption and secure protocols like HTTPS", "Regularly changing DNS servers"], 
    c: 2, 
    exp: "Verified Answer: C. Implementing encryption and secure protocols like HTTPS"
  },
  { 
    id: 897, 
    q: "Which type of session hijacking involves predicting the session token or ID to gain unauthorized access?", 
    a: ["Active hijacking", "Blind hijacking", "Session fixation", "Session prediction"], 
    c: 3, 
    exp: "Verified Answer: D. Session prediction"
  },
  { 
    id: 898, 
    q: "In which type of hijacking does the attacker inject malicious commands without seeing the server ’s response?", 
    a: ["Blind hijacking", "Passive hijacking", "Session sidejacking", "TCP hijacking"], 
    c: 0, 
    exp: "Verified Answer: A. Blind hijacking"
  },
  { 
    id: 899, 
    q: "What type of session hijacking involves the attacker gaining access by capturing unencrypted session cookies over a network?", 
    a: ["Passive hijacking", "Session fixation", "Cross-site scripting hijacking", "Session sidejacking"], 
    c: 3, 
    exp: "Verified Answer: D. Session sidejacking"
  },
  { 
    id: 900, 
    q: "Which technique forces a user to use a predefined session ID that the attacker already knows?", 
    a: ["TCP hijacking", "Session fixation", "Active hijacking", "Session sidejacking"], 
    c: 1, 
    exp: "Verified Answer: B. Session fixation"
  },
  { 
    id: 900, 
    q: "Which technique forces a user to use a predefined session ID that the attacker already knows?", 
    a: ["TCP hijacking", "Session fixation", "Active hijacking", "Session sidejacking"], 
    c: 1, 
    exp: "Verified Answer: B. Session fixation"
  },
  { 
    id: 901, 
    q: "Which session hijacking technique involves taking over an active session by taking control of the TCP connection?", 
    a: ["Passive hijacking", "Session fixation", "Active hijacking", "TCP hijacking"], 
    c: 3, 
    exp: "Verified Answer: D. TCP hijacking"
  },
  { 
    id: 902, 
    q: "What is the first step an attacker typically performs before hijacking a session?", 
    a: ["Session prediction", "Sniffing the network traffic", "Injecting malicious packets", "Performing session fixation"], 
    c: 1, 
    exp: "Verified Answer: B. Sniffing the network traffic"
  },
  { 
    id: 903, 
    q: "After identifying the target session, what step does the attacker perform to impersonate the victim?", 
    a: ["Session prediction", "Session token injection", "IP spoofing", "Sequence number prediction"], 
    c: 2, 
    exp: "Verified Answer: C. IP spoofing"
  },
  { 
    id: 904, 
    q: "What technique involves guessing or calculating the next valid session ID?", 
    a: ["Cookie stealing", "TCP hijacking", "Session prediction", "Session fixation"], 
    c: 2, 
    exp: "Verified Answer: C. Session prediction"
  },
  { 
    id: 905, 
    q: "Which action is typically the final step in a successful session hijacking attempt?", 
    a: ["Capturing credentials", "Dropping the victim’ s connection", "Establishing persistent access", "Injecting malicious payloads"], 
    c: 1, 
    exp: "Verified Answer: B. Dropping the victim’ s connection"
  },
  { 
    id: 906, 
    q: "What is the purpose of injecting malicious commands after hijacking a session?", 
    a: ["To crash the server", "To remain undetected", "To exploit the session for sensitive data or further attacks", "To reset the session token"], 
    c: 2, 
    exp: "Verified Answer: C. To exploit the session for sensitive data or further attacks"
  },
  { 
    id: 907, 
    q: "Which of the following is an effective way to prevent session hijacking?", 
    a: ["Using static session IDs", "Encrypting session traffic with HTTPS", "Allowing cookies to be stored in plaintext", "Disabling session timeouts"], 
    c: 1, 
    exp: "Verified Answer: B. Encrypting session traffic with HTTPS"
  },
  { 
    id: 908, 
    q: "What type of cookie attribute helps prevent a session from being accessed via client-side scripts like JavaScript?", 
    a: ["Secure", "HttpOnly", "SameSite", "Persistent"], 
    c: 1, 
    exp: "Verified Answer: B. HttpOnly"
  },
  { 
    id: 909, 
    q: "Which strategy ensures that a session becomes invalid after a period of inactivity?", 
    a: ["Persistent session storage", "Session timeout", "Session fixation", "Token injection"], 
    c: 1, 
    exp: "Verified Answer: B. Session timeout"
  },
  { 
    id: 910, 
    q: "Which of these practices helps prevent session hijacking by verifying that each request comes from the legitimate user?", 
    a: ["Using CAP ТСНА", "Implementing IP address and user-agent binding", "Blocking all cookies", "Allowing unlimited login retries"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing IP address and user-agent binding"
  },
  { 
    id: 911, 
    q: "Which method ensures that a new session ID is generated after a user logs in?", 
    a: ["Session randomization", "Session regeneration", "Session timeout", "Cookie duplication"], 
    c: 1, 
    exp: "Verified Answer: B. Session regeneration"
  },
  { 
    id: 912, 
    q: "Which of the following attacks involves sending malformed HTTP requests to crash a web server?", 
    a: ["SQL Injection", "Cross-Site Scripting", "Buffer Overflow", "Session Hijacking"], 
    c: 2, 
    exp: "Verified Answer: C. Buffer Overflow"
  },
  { 
    id: 913, 
    q: "What is the primary goal of a “Directory Traversal” attack on a web server?", 
    a: ["To inject malicious scripts", "To gain access to restricted files outside the web root", "To overload the server with requests", "To perform password brute force attacks"], 
    c: 1, 
    exp: "Verified Answer: B. To gain access to restricted files outside the web root"
  },
  { 
    id: 914, 
    q: "Which web server vulnerability allows attackers to inject OS-level commands via web input fields?", 
    a: ["SQL Injection", "Command Injection", "Cross-Site Request Forgery", "Clickjacking"], 
    c: 1, 
    exp: "Verified Answer: B. Command Injection"
  },
  { 
    id: 915, 
    q: "What is a common indicator of a successful web server defacement attack?", 
    a: ["Server logs increase", "Website homepage is altered with hacker messages", "Server CPU usage spikes", "Website loads slower"], 
    c: 1, 
    exp: "Verified Answer: B. Website homepage is altered with hacker messages"
  },
  { 
    id: 916, 
    q: "Which web server attack aims to keep the server busy by flooding it with incomplete HTTP requests?", 
    a: ["Smurf Attack", "HTTP Flood", "Slowloris Attack", "DNS Spoofing"], 
    c: 2, 
    exp: "Verified Answer: C. Slowloris Attack"
  },
  { 
    id: 917, 
    q: "Which server vulnerability occurs when user input is improperly handled, resulting in code execution in the browser?", 
    a: ["Buffer Overflow", "SQL Injection", "Cross-Site Scripting (XSS)", "XML External Entity (XXE)"], 
    c: 2, 
    exp: "Verified Answer: C. Cross-Site Scripting (XSS)"
  },
  { 
    id: 918, 
    q: "Which web server attack manipulates the server cache to display malicious content to users?", 
    a: ["Cache Poisoning", "DNS Spoofing", "Session Hijacking", "Cookie Tampering"], 
    c: 0, 
    exp: "Verified Answer: A. Cache Poisoning"
  },
  { 
    id: 919, 
    q: "What is the primary goal of an HTTP Response Splitting attack?", 
    a: ["Overload the server with HTTP requests", "Manipulate server responses to inject malicious headers or content", "Steal cookies from users", "Crash the web server"], 
    c: 1, 
    exp: "Verified Answer: B. Manipulate server responses to inject malicious headers or content"
  },
  { 
    id: 920, 
    q: "What is a common countermeasure to prevent web server brute force attacks?", 
    a: ["Disable cookies", "Implement rate limiting and account lockouts", "Use plaintext passwords", "Increase web server bandwidth"], 
    c: 1, 
    exp: "Verified Answer: B. Implement rate limiting and account lockouts"
  },
  { 
    id: 921, 
    q: "Which tool is commonly used to scan for web server vulnerabilities?", 
    a: ["Nmap", "Burp Suite", "Wireshark", "Metasploit"], 
    c: 1, 
    exp: "Verified Answer: B. Burp Suite"
  },
  { 
    id: 922, 
    q: "Which vulnerability allows attackers to inject malicious SQL queries into input fields?", 
    a: ["Cross-Site Scripting (XSS)", "Command Injection", "SQL Injection", "XML Injection"], 
    c: 2, 
    exp: "Verified Answer: C. SQL Injection"
  },
  { 
    id: 923, 
    q: "What type of vulnerability occurs when untrusted data is included in a web page without proper escaping, leading to code execution in the user’s browser?", 
    a: ["Cross-Site Request Forgery (CSRF)", "Cross-Site Scripting (XSS)", "Server-Side Request Forgery (SSRF)", "Command Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Cross-Site Scripting (XSS)"
  },
  { 
    id: 924, 
    q: "Which type of vulnerability forces users to perform unwanted actions on a trusted website, using their authenticated session?", 
    a: ["CSRF", "XSS", "Insecure Deserialization", "Broken Authentication"], 
    c: 0, 
    exp: "Verified Answer: A. CSRF"
  },
  { 
    id: 925, 
    q: "What vulnerability exploits an application’ s ability to deserialize untrusted data, often leading to remote code execution?", 
    a: ["Command Injection", "Insecure Deserialization", "Remote File Inclusion", "Path Traversal"], 
    c: 1, 
    exp: "Verified Answer: B. Insecure Deserialization"
  },
  { 
    id: 926, 
    q: "Which vulnerability lets an attacker manipulate a server into making unintended HTTP requests to an internal resource?", 
    a: ["SSRF", "LFI", "CSRF", "RCE"], 
    c: 0, 
    exp: "Verified Answer: A. SSRF"
  },
  { 
    id: 927, 
    q: "Which vulnerability involves uploading malicious files (e.g., shell scripts) to a server through web forms or file upload functionalities?", 
    a: ["Local File Inclusion", "Remote File Inclusion", "File Upload Vulnerability", "Command Injection"], 
    c: 2, 
    exp: "Verified Answer: C. File Upload Vulnerability"
  },
  { 
    id: 928, 
    q: "Which vulnerability involves tricking the server into including remote files, often leading to code execution?", 
    a: ["Local File Inclusion", "Remote File Inclusion", "Command Injection", "Path Traversal"], 
    c: 1, 
    exp: "Verified Answer: B. Remote File Inclusion"
  },
  { 
    id: 929, 
    q: "Which type of vulnerability results from improperly validated redirects, allowing attackers to redirect victims to malicious sites?", 
    a: ["Open Redirect", "SSRF", "XSS", "CSRF"], 
    c: 0, 
    exp: "Verified Answer: A. Open Redirect"
  },
  { 
    id: 930, 
    q: "What vulnerability exposes sensitive data, like API keys or passwords, through insufficient encryption or improper data handling?", 
    a: ["Broken Authentication", "Sensitive Data Exposure", "Insecure Deserialization", "SQL Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Sensitive Data Exposure"
  },
  { 
    id: 931, 
    q: "Which vulnerability allows attackers to bypass authentication mechanisms using predictable session IDs or weak tokens?", 
    a: ["Broken Authentication", "Path Traversal", "Command Injection", "Directory Traversal"], 
    c: 0, 
    exp: "Verified Answer: A. Broken Authentication"
  },
  { 
    id: 932, 
    q: "Which web-based password cracking technique involves attempting multiple combinations of usernames and passwords until the correct one is found?", 
    a: ["Dictionary Attack", "Brute Force Attack", "Hybrid Attack", "Rainbow Table Attack"], 
    c: 1, 
    exp: "Verified Answer: B. Brute Force Attack"
  },
  { 
    id: 933, 
    q: "What attack method uses a pre-compiled list of commonly used passwords to crack web accounts?", 
    a: ["Hybrid Attack", "Credential Stuffing", "Dictionary Attack", "Hash Collision Attack"], 
    c: 2, 
    exp: "Verified Answer: C. Dictionary Attack"
  },
  { 
    id: 934, 
    q: "Which technique combines a dictionary attack with slight modifications, like adding numbers or symbols, to guess web-based passwords?", 
    a: ["Hybrid Attack", "Reverse Attack", "Rainbow Table Attack", "Mask Attack"], 
    c: 0, 
    exp: "Verified Answer: A. Hybrid Attack"
  },
  { 
    id: 935, 
    q: "What type of attack involves using stolen username-password pairs from one breached site to access accounts on other sites?", 
    a: ["Phishing Attack", "Man-in-the-Middle Attack", "Credential Stuffing", "Cross-Site Scripting"], 
    c: 2, 
    exp: "Verified Answer: C. Credential Stuffing"
  },
  { 
    id: 936, 
    q: "Which method precomputes password hashes and stores them in a large lookup table to crack passwords faster?", 
    a: ["Rainbow Table Attack", "Brute Force Attack", "Pass-the-Hash Attack", "Time-Based Attack"], 
    c: 0, 
    exp: "Verified Answer: A. Rainbow Table Attack"
  },
  { 
    id: 937, 
    q: "What web-based technique captures password inputs directly from the browser using malicious scripts or trojans?", 
    a: ["Keystroke Logging", "SQL Injection", "Password Spraying", "Reverse Shell"], 
    c: 0, 
    exp: "Verified Answer: A. Keystroke Logging"
  },
  { 
    id: 938, 
    q: "Which password-cracking technique attempts a single password against multiple accounts to avoid triggering rate limits?", 
    a: ["Brute Force Attack", "Password Spraying", "Hybrid Attack", "Session Hijacking"], 
    c: 1, 
    exp: "Verified Answer: B. Password Spraying"
  },
  { 
    id: 939, 
    q: "Which web attack manipulates unvalidated input to extract password data from backend databases?", 
    a: ["Cross-Site Scripting (XSS)", "SQL Injection", "LDAP Injection", "XML Injection"], 
    c: 1, 
    exp: "Verified Answer: B. SQL Injection"
  },
  { 
    id: 940, 
    q: "What technique intercepts web traffic to capture login credentials transmitted in plaintext?", 
    a: ["Session Hijacking", "DNS Spoofing", "Packet Sniffing", "Cookie Poisoning"], 
    c: 2, 
    exp: "Verified Answer: C. Packet Sniffing"
  },
  { 
    id: 941, 
    q: "Which method tricks users into revealing their web credentials by pretending to be a legitimate login page?", 
    a: ["Phishing", "Man-in-the-Middle Attack", "Pharming", "DNS Spoofing"], 
    c: 0, 
    exp: "Verified Answer: A. Phishing"
  },
  { 
    id: 942, 
    q: "Which password-cracking tool is known for its ability to perform fast, parallel brute-force attacks against various network protocols like HTTP , FTP, and SSH?", 
    a: ["John the Ripper", "Hydra", "Aircrack-ng", "Cain and Abel"], 
    c: 1, 
    exp: "Verified Answer: B. Hydra"
  },
  { 
    id: 943, 
    q: "What feature makes “John the Ripper” a powerful password-cracking tool?", 
    a: ["It only supports brute-force attacks", "It automatically detects hash types and supports multiple cracking modes", "It relies solely on pre-built hash tables", "It performs packet sniffing alongside cracking"], 
    c: 1, 
    exp: "Verified Answer: B. It automatically detects hash types and supports multiple cracking modes"
  },
  { 
    id: 944, 
    q: "Which advanced web exploitation technique involves injecting malicious code into a website to execute in other users’ browsers?", 
    a: ["SQL Injection", "Cross-Site Request Forgery (CSRF)", "Cross-Site Scripting (XSS)", "Command Injection"], 
    c: 2, 
    exp: "Verified Answer: C. Cross-Site Scripting (XSS)"
  },
  { 
    id: 945, 
    q: "What is the primary purpose of using a tool like “Burp Suite” in web exploitation?", 
    a: ["Performing password cracking", "Monitoring network traffic", "Intercepting, modifying, and auditin web requests", "Exploiting Wi-Fi networks"], 
    c: 2, 
    exp: "Verified Answer: C. Intercepting, modifying, and auditing web requests"
  },
  { 
    id: 946, 
    q: "Which password-cracking tool specializes in Windows LM/NTLM hashes, VoIP cracking, and packet sniffing?", 
    a: ["THC-Hydra", "John the Ripper", "Cain and Abel", "Medusa"], 
    c: 2, 
    exp: "Verified Answer: C. Cain and Abel"
  },
  { 
    id: 947, 
    q: "Which encryption protocol is considered the weakest and easiest to crack in wireless networks?", 
    a: ["WPA2", "WEP", "WPA", "WPA3"], 
    c: 1, 
    exp: "Verified Answer: B. WEP"
  },
  { 
    id: 948, 
    q: "What is the primary technique used in wireless hacking to force devices to reconnect, capturing the handshake data for cracking?", 
    a: ["Evil Twin Attack", "MAC Spoofing", "Deauthentication Attack", "Packet Injection"], 
    c: 2, 
    exp: "Verified Answer: C. Deauthentication Attack"
  },
  { 
    id: 949, 
    q: "Which tool is widely used for capturing Wi-Fi packets and performing analysis in wireless hacking?", 
    a: ["Wireshark", "Metasploit", "John the Ripper", "Nessus"], 
    c: 0, 
    exp: "Verified Answer: A. Wireshark"
  },
  { 
    id: 950, 
    q: "What is an “Evil Twin Attack” in wireless hacking?", 
    a: ["Creating a duplicate network to trick users into connecting", "Cloning a device’ s MAC address", "Overloading a network with traffic", "Hijacking a legitimate session"], 
    c: 0, 
    exp: "Verified Answer: A. Creating a duplicate network to trick users into connecting"
  },
  { 
    id: 951, 
    q: "Which type of wireless attack involves intercepting and modifying communications between two parties?", 
    a: ["Man-in-the-Middle (MITM)", "MAC Spoofing", "Jamming Attack", "Replay Attack"], 
    c: 0, 
    exp: "Verified Answer: A. Man-in-the-Middle (MITM)"
  },
  { 
    id: 952, 
    q: "Which wireless hacking technique involves overwhelming a wireless network with signals to disrupt communication?", 
    a: ["Evil Twin Attack", "Deauthentication Attack", "Jamming Attack", "MAC Spoofing"], 
    c: 2, 
    exp: "Verified Answer: C. Jamming Attack"
  },
  { 
    id: 953, 
    q: "What is “Wardriving” in the context of wireless hacking?", 
    a: ["Hijacking a Wi-Fi session", "Creating a rogue access point", "Physically driving around to locate unsecured Wi-Fi networks", "Exploiting WPS vulnerabilities"], 
    c: 2, 
    exp: "Verified Answer: C. Physically driving around to locate unsecured Wi-Fi networks"
  },
  { 
    id: 954, 
    q: "Which technique allows hackers to force a device to connect to a rogue access point by pretending to be a trusted one?", 
    a: ["MAC Spoofing", "Karma Attack", "WPS Attack", "Packet Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Karma Attack"
  },
  { 
    id: 955, 
    q: "Which wireless hacking technique targets the WPS feature to quickly retrieve a network’ s WPA/WP A2 password?", 
    a: ["Brute-force attack", "Pixie Dust Attack", "Evil Twin Attack", "ARP Spoofing"], 
    c: 1, 
    exp: "Verified Answer: B. Pixie Dust Attack"
  },
  { 
    id: 956, 
    q: "What is a “Rogue Access Point” attack in wireless hacking?", 
    a: ["A fake AP that mimics a trusted network to steal data", "An AP that floods the network with deauthentication packets", "A script that scans for open Wi-Fi networks", "A method for bypassing WPA encryption"], 
    c: 0, 
    exp: "Verified Answer: A. A fake AP that mimics a trusted network to steal data"
  },
  { 
    id: 957, 
    q: "Which encryption method does WEP use to secure data packets?", 
    a: ["AES", "RSA", "RC4", "Blowfish"], 
    c: 2, 
    exp: "Verified Answer: C. RC4"
  },
  { 
    id: 958, 
    q: "What is the main security flaw in WEP that allows it to be cracked easily?", 
    a: ["Weak password length", "Predictable initialization vector (IV)", "Use of symmetric encryption", "Excessive packet size"], 
    c: 1, 
    exp: "Verified Answer: B. Predictable initialization vector (IV)"
  },
  { 
    id: 959, 
    q: "What type of encryption does WPA2 primarily use?", 
    a: ["DES", "RC4", "AES-CCMP", "SHA-256"], 
    c: 2, 
    exp: "Verified Answer: C. AES-CCMP"
  },
  { 
    id: 960, 
    q: "Which of the following attacks is commonly used to crack WPA/WP A2 passphrases?", 
    a: ["Brute-force attack", "Dictionary attack", "Replay attack", "Deauthentication attack"], 
    c: 1, 
    exp: "Verified Answer: B. Dictionary attack"
  },
  { 
    id: 961, 
    q: "What does WPA3 introduce to prevent offline password cracking attempts?", 
    a: ["WPS PIN", "PMKID", "Simultaneous Authentication of Equals (SAE)", "TKIP"], 
    c: 2, 
    exp: "Verified Answer: C. Simultaneous Authentication of Equals (SAE)"
  },
  { 
    id: 962, 
    q: "Which of these cracking techniques specifically targets WEP encryption?", 
    a: ["Pixie Dust Attack", "Chopchop Attack", "Reaver Attack", "Evil Twin Attack"], 
    c: 1, 
    exp: "Verified Answer: B. Chopchop Attack"
  },
  { 
    id: 963, 
    q: "What is the primary purpose of a Deauthentication Attack in WPA cracking?", 
    a: ["To flood the network with fake packets", "To disconnect a client, forcing a reconnection and capturing the handshake", "To perform a Man-in-the-Middle attack", "To spoof a legitimate access point"], 
    c: 1, 
    exp: "Verified Answer: B. To disconnect a client, forcing a reconnection and capturing the handshake"
  },
  { 
    id: 964, 
    q: "Which of these is a modern, powerful tool used to crack WPA2 and WPA3 PMKID handshakes?", 
    a: ["Ettercap", "Wireshark", "hashcat", "Metasploit"], 
    c: 2, 
    exp: "Verified Answer: C. hashcat"
  },
  { 
    id: 965, 
    q: "What is the key difference between WPA and WPA2 encryption?", 
    a: ["WPA2 uses RC4, while WPA uses AES", "WPA2 uses AES-CCMP , while WPA uses TKIP", "WPA2 supports WPS, while WPA doesn’ t", "WPA supports SAE, while WPA2 doesn’ t"], 
    c: 1, 
    exp: "Verified Answer: B. WPA2 uses AES-CCMP , while WPA uses TKIP"
  },
  { 
    id: 966, 
    q: "Which attack method targets WPS-enabled networks to extract the WPA/WP A2 key?", 
    a: ["Chopchop Attack", "Reaver Attack", "Dictionary Attack", "Evil Twin Attack"], 
    c: 1, 
    exp: "Verified Answer: B. Reaver Attack"
  },
  { 
    id: 967, 
    q: "What is the primary function of a wireless sniffer?", 
    a: ["To boost Wi-Fi signals", "To monitor and capture wireless traffic", "To block unauthorized devices", "To crack passwords"], 
    c: 1, 
    exp: "Verified Answer: B. To monitor and capture wireless traffic"
  },
  { 
    id: 968, 
    q: "What is an “SSID” in a wireless network?", 
    a: ["Secure System Identification", "Subnet System Identifier", "Service Set Identifier", "Server Security Identification"], 
    c: 2, 
    exp: "Verified Answer: C. Service Set Identifier"
  },
  { 
    id: 969, 
    q: "Which tool is commonly used to locate hidden SSIDs in a wireless network?", 
    a: ["Wireshark", "John the Ripper", "Nmap", "Kismet"], 
    c: 3, 
    exp: "Verified Answer: D. Kismet"
  },
  { 
    id: 970, 
    q: "What is the main goal of MAC spoofing?", 
    a: ["To increase network speed", "To bypass MAC address filtering", "To encrypt wireless traffic", "To create a new SSID"], 
    c: 1, 
    exp: "Verified Answer: B. To bypass MAC address filtering"
  },
  { 
    id: 971, 
    q: "Which of the following wireless sniffing modes captures all packets within range, even if they are not intended for the sniffer’s device?", 
    a: ["Managed Mode", "Monitor Mode", "Promiscuous Mode", "Ad-Hoc Mode"], 
    c: 1, 
    exp: "Verified Answer: B. Monitor Mode"
  },
  { 
    id: 972, 
    q: "What type of packet is most useful for identifying a hidden SSID?", 
    a: ["Beacon Frames", "Data Frames", "Probe Response Frames", "Deauthentication Frames"], 
    c: 2, 
    exp: "Verified Answer: C. Probe Response Frames"
  },
  { 
    id: 973, 
    q: "Which of the following is NOT a recommended countermeasure against MAC spoofing?", 
    a: ["Enabling WPA3 encryption", "Implementing MAC address filtering", "Enabling port security on switches", "Using certificate-based authentication"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing MAC address filtering"
  },
  { 
    id: 974, 
    q: "Which protocol’ s management frames are commonly exploited for MAC spoofing and SSID sniffing?", 
    a: ["TCP", "UDP", "ICMP", "IEEE"], 
    c: 3, 
    exp: "Verified Answer: D. IEEE"
  },
  { 
    id: 975, 
    q: "Which of the following attacks involves MAC spoofing to impersonate a legitimate access point?", 
    a: ["Man-in-the-Middle Attack", "Evil Twin Attack", "DNS Spoofing", "ARP Poisoning"], 
    c: 1, 
    exp: "Verified Answer: B. Evil Twin Attack"
  },
  { 
    id: 976, 
    q: "What is a key sign that a device’ s MAC address has been spoofed?", 
    a: ["Higher latency on the network", "Unexpected IP address conflicts", "Increased signal strength", "SSID disappearance"], 
    c: 1, 
    exp: "Verified Answer: B. Unexpected IP address conflicts"
  },
  { 
    id: 977, 
    q: "Which wireless security protocol is considered the most secure for modern networks?", 
    a: ["WEP", "WPA", "WPA2", "WPA3"], 
    c: 3, 
    exp: "Verified Answer: D. WPA3"
  },
  { 
    id: 978, 
    q: "What is the main purpose of disabling SSID broadcasting?", 
    a: ["To increase network speed", "To prevent unauthorized users from easily discovering the network", "To boost signal range", "To improve bandwidth allocation"], 
    c: 1, 
    exp: "Verified Answer: B. To prevent unauthorized users from easily discovering the network"
  },
  { 
    id: 979, 
    q: "Which of the following encryption protocols is outdated and should no longer be used to secure wireless networks?", 
    a: ["WPA2", "WPA3", "WEP", "AES"], 
    c: 2, 
    exp: "Verified Answer: C. WEP"
  },
  { 
    id: 980, 
    q: "What type of firewall is most effective for filtering incoming and outgoing traffic on a wireless network?", 
    a: ["Stateless firewall", "Packet-filtering firewall", "Application-layer firewall", "Stateful firewall"], 
    c: 3, 
    exp: "Verified Answer: D. Stateful firewall"
  },
  { 
    id: 981, 
    q: "Which authentication method uses a central server to manage user credentials for wireless access?", 
    a: ["WPA2-Personal", "WPA2-Enterprise", "WPS", "PSK"], 
    c: 1, 
    exp: "Verified Answer: B. WPA2-Enterprise"
  },
  { 
    id: 982, 
    q: "Which of the following is a feature of WPA3 that enhances security compared to WPA2?", 
    a: ["Pre-Shared Key (PSK)", "Simultaneous Authentication of Equals (SAE)", "WEP encryption", "Open Network Protocol"], 
    c: 1, 
    exp: "Verified Answer: B. Simultaneous Authentication of Equals (SAE)"
  },
  { 
    id: 983, 
    q: "What is the role of MAC address filtering in wireless security?", 
    a: ["It encrypts the traffic between the router and devices", "It hides the network SSID from unauthorized devices", "It allows only devices with specific MAC addresses to connect", "It increases Wi-Fi speed"], 
    c: 2, 
    exp: "Verified Answer: C. It allows only devices with specific MAC addresses to connect"
  },
  { 
    id: 984, 
    q: "What is the best practice to secure your Wi-Fi router ’s administrative access?", 
    a: ["Use the default username and password", "Enable remote access to the router", "Change the default credentials and use a strong password", "Disable encryption on the router"], 
    c: 2, 
    exp: "Verified Answer: C. Change the default credentials and use a strong password"
  },
  { 
    id: 985, 
    q: "Which protocol provides end-to-end encryption for data transmitted over a wireless network?", 
    a: ["WEP", "WPA2 with TKIP", "WPA2 with AES", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C. WPA2 with AES"
  },
  { 
    id: 986, 
    q: "What is the most effective method to prevent unauthorized devices from joining a Wi-Fi network?", 
    a: ["Enable MAC filtering", "Use WPA3 encryption with a strong password", "Hide the SSID", "Reduce Wi-Fi signal strength"], 
    c: 1, 
    exp: "Verified Answer: B. Use WPA3 encryption with a strong password"
  },
  { 
    id: 987, 
    q: "Which type of backdoor device is typically planted in hardware during manufacturing to allow unauthorized remote access?", 
    a: ["Rootkit", "Logic Bomb", "Hardware Trojan", "Firmware Worm"], 
    c: 2, 
    exp: "Verified Answer: C. Hardware Trojan"
  },
  { 
    id: 988, 
    q: "Which of the following is a common way attackers use USB-based backdoor devices?", 
    a: ["To provide faster data transfer", "To bypass network firewalls and deliver payloads", "To install legitimate software", "To create a secure VPN"], 
    c: 1, 
    exp: "Verified Answer: B. To bypass network firewalls and deliver payloads"
  },
  { 
    id: 989, 
    q: "Which network device is most likely to be compromised and turned into a backdoor entry point?", 
    a: ["Router", "Printer", "Smart TV", "External hard drive"], 
    c: 0, 
    exp: "Verified Answer: A. Router"
  },
  { 
    id: 990, 
    q: "What is a primary sign that a system might have a hardware backdoor installed?", 
    a: ["Frequent application crashes", "Unusual network traffic from unknown IPs", "Blue screen errors", "Slow startup times"], 
    c: 1, 
    exp: "Verified Answer: B. Unusual network traffic from unknown IPs"
  },
  { 
    id: 991, 
    q: "Which countermeasure is most effective against backdoor devices?", 
    a: ["Relying on antivirus software", "Regular software updates", "Conducting hardware integrity checks and monitoring network traffic", "Disabling Wi-Fi"], 
    c: 2, 
    exp: "Verified Answer: C. Conducting hardware integrity checks and monitoring network traffic"
  },
  { 
    id: 992, 
    q: "Which biometric system is considered most vulnerable to spoofing attacks?", 
    a: ["Iris recognition", "Face recognition", "Fingerprint recognition", "Voice recognition"], 
    c: 2, 
    exp: "Verified Answer: C. Fingerprint recognition"
  },
  { 
    id: 993, 
    q: "What is the primary goal of biometric spoofing?", 
    a: ["To improve system performance", "To bypass biometric authentication", "To speed up biometric matching", "To secure biometric data"], 
    c: 1, 
    exp: "Verified Answer: B. To bypass biometric authentication"
  },
  { 
    id: 994, 
    q: "Which technique is commonly used to spoof facial recognition systems?", 
    a: ["Retina scanning", "Deepfake videos", "Voice modulation", "Fingerprint molds"], 
    c: 1, 
    exp: "Verified Answer: B. Deepfake videos"
  },
  { 
    id: 995, 
    q: "Which countermeasure can help defend against fingerprint spoofing attacks?", 
    a: ["Using higher resolution cameras", "Liveness detection", "Faster fingerprint scanners", "Multi-factor password input"], 
    c: 1, 
    exp: "Verified Answer: B. Liveness detection"
  },
  { 
    id: 996, 
    q: "What is an emer ging biometric spoofing countermeasure in voice recognition systems?", 
    a: ["Analyzing vocal tone", "Speech-to-text comparison", "Detecting ambient noise", "Voice liveness detection and AI-driven anomaly detection"], 
    c: 3, 
    exp: "Verified Answer: D. Voice liveness detection and AI-driven anomaly detection"
  },
  { 
    id: 997, 
    q: "Which Linux command is commonly used to escalate privileges by switching to the root user?", 
    a: ["chmod", "sudo", "passwd", "whoami"], 
    c: 1, 
    exp: "Verified Answer: B. sudo"
  },
  { 
    id: 998, 
    q: "Which file stores user account information in most Linux distributions?", 
    a: ["/etc/shadow", "/var/log/auth.log", "/etc/passwd", "/bin/bash"], 
    c: 2, 
    exp: "Verified Answer: C. /etc/passwd"
  },
  { 
    id: 999, 
    q: "What is the default port for SSH on Linux systems?", 
    a: ["21", "25", "22", "80"], 
    c: 2, 
    exp: "Verified Answer: C. 22"
  },
  { 
    id: 1000, 
    q: "Which command lists running processes and their details?", 
    a: ["ls", "ps", "chmod", "pwd"], 
    c: 1, 
    exp: "Verified Answer: B. ps"
  },
  { 
    id: 1001, 
    q: "What does the netstat -antp command do?", 
    a: ["Shows file permissions", "Displays network connections", "Kills active processes", "Changes file ownership"], 
    c: 1, 
    exp: "Verified Answer: B. Displays network connections"
  },
  { 
    id: 1002, 
    q: "Which tool is commonly used to brute-force SSH logins on Linux?", 
    a: ["Hydra", "Nikto", "Burp Suite", "Nmap"], 
    c: 0, 
    exp: "Verified Answer: A. Hydra"
  },
  { 
    id: 1003, 
    q: "Which directory contains most of the Linux log files?", 
    a: ["/bin", "/usr", "/var/log", "/home/logs"], 
    c: 2, 
    exp: "Verified Answer: C. /var/log"
  },
  { 
    id: 1004, 
    q: "What is the purpose of the iptables command?", 
    a: ["File permission management", "Network packet filtering and firewall rules", "Process monitoring", "User authentication"], 
    c: 1, 
    exp: "Verified Answer: B. Network packet filtering and firewall rules"
  },
  { 
    id: 1005, 
    q: "What vulnerability allows attackers to execute arbitrary commands by exploiting improperly sanitized inputs in web apps running on Linux?", 
    a: ["Buffer Overflow", "SQL Injection", "Command Injection", "Path Traversal"], 
    c: 2, 
    exp: "Verified Answer: C. Command Injection"
  },
  { 
    id: 1006, 
    q: "Which Linux post-exploitation tool helps attackers maintain persistent access?", 
    a: ["Nmap", "Metasploit", "John the Ripper", "Wireshark"], 
    c: 1, 
    exp: "Verified Answer: B. Metasploit"
  },
  { 
    id: 1007, 
    q: "What is a Linux backdoor?", 
    a: ["A vulnerability in the kernel", "A hidden method to gain unauthorized access", "A firewall misconfiguration", "A Linux update"], 
    c: 1, 
    exp: "Verified Answer: B. A hidden method to gain unauthorized access"
  },
  { 
    id: 1008, 
    q: "Which of the following is a well-known Linux backdoor tool?", 
    a: ["Netcat", "Nmap", "Wireshark", "Fail2Ban"], 
    c: 0, 
    exp: "Verified Answer: A. Netcat"
  },
  { 
    id: 1009, 
    q: "Which Linux process is often targeted to create a backdoor with persistent access?", 
    a: ["init", "bash", "cron", "sudo"], 
    c: 2, 
    exp: "Verified Answer: C. cron"
  },
  { 
    id: 1010, 
    q: "What does a reverse shell backdoor do?", 
    a: ["Downloads malware", "Connects the attacker ’s machine to the victim’ s system", "Uploads data to the attacker ’s server", "Makes the victim’ s machine inaccessible"], 
    c: 1, 
    exp: "Verified Answer: B. Connects the attacker ’s machine to the victim’ s system"
  },
  { 
    id: 1011, 
    q: "Which command can an attacker use to bind a shell to a specific port, creating a basic backdoor?", 
    a: ["ssh", "netcat -lvp 4444 -e /bin/bash", "sudo su", "ping localhost"], 
    c: 1, 
    exp: "Verified Answer: B. netcat -lvp 4444 -e /bin/bash"
  },
  { 
    id: 1012, 
    q: "Which Linux service is commonly backdoored to provide attackers persistent root access?", 
    a: ["Apache", "SSH", "MySQL", "Docker"], 
    c: 1, 
    exp: "Verified Answer: B. SSH"
  },
  { 
    id: 1013, 
    q: "What is the purpose of a “Trojanized” binary in Linux?", 
    a: ["It improves system performance", "It allows unauthorized access while behaving like a normal binary", "It logs user activity for administrators", "It optimizes disk usage"], 
    c: 1, 
    exp: "Verified Answer: B. It allows unauthorized access while behaving like a normal binary"
  },
  { 
    id: 1014, 
    q: "How do attackers hide backdoors in Linux systems?", 
    a: ["By modifying environment variables", "By changing the hostname", "By embedding them in legitimate services or daemons", "By removing kernel modules"], 
    c: 2, 
    exp: "Verified Answer: C. By embedding them in legitimate services or daemons"
  },
  { 
    id: 1015, 
    q: "Which file would an attacker most likely modify to ensure a backdoor script runs automatically on reboot?", 
    a: ["/etc/passwd", "/etc/bashrc", "/etc/rc.local", "/var/log/syslog"], 
    c: 2, 
    exp: "Verified Answer: C. /etc/rc.local"
  },
  { 
    id: 1016, 
    q: "What’ s a common sign that a Linux system may be running a backdoor?", 
    a: ["High CPU temperature", "Unusual outbound network traffic", "Slow internet speed", "Increased disk space"], 
    c: 1, 
    exp: "Verified Answer: B. Unusual outbound network traffic"
  },
  { 
    id: 1017, 
    q: "Which type of IDS analyzes system logs and matches patterns to detect attacks?", 
    a: ["Network-based IDS (NIDS)", "Host-based IDS (HIDS)", "Signature-based IDS", "Anomaly-based IDS"], 
    c: 1, 
    exp: "Verified Answer: B. Host-based IDS (HIDS)"
  },
  { 
    id: 1018, 
    q: "What is a key characteristic of a honeypot?", 
    a: ["It actively blocks incoming traffic", "It serves as a decoy to attract attackers", "It encrypts sensitive data", "It speeds up network performance"], 
    c: 1, 
    exp: "Verified Answer: B. It serves as a decoy to attract attackers"
  },
  { 
    id: 1019, 
    q: "Which type of firewall examines the complete packet, including payload data, to make decisions?", 
    a: ["Packet-filtering firewall", "Circuit-level gateway", "Stateful inspection firewall", "Application-layer firewall"], 
    c: 3, 
    exp: "Verified Answer: D. Application-layer firewall"
  },
  { 
    id: 1020, 
    q: "What’ s a major limitation of signature-based IDS systems?", 
    a: ["It requires high processing power", "It can’t detect known attacks", "It relies on predefined attack patterns and misses zero-day attacks", "It only works on Windows systems"], 
    c: 2, 
    exp: "Verified Answer: C. It relies on predefined attack patterns and misses zero-day attacks"
  },
  { 
    id: 1021, 
    q: "How can a firewall help prevent honeypot detection by attackers?", 
    a: ["By blocking outbound traffic", "By mimicking legitimate services", "By filtering malicious IP addresses", "By hiding the honeypot’ s IP and redirecting traffic stealthily"], 
    c: 3, 
    exp: "Verified Answer: D. By hiding the honeypot’ s IP and redirecting traffic stealthily"
  },
  { 
    id: 1022, 
    q: "Which of the following is NOT considered a type of malware?", 
    a: ["Virus", "Ransomware", "Firewall", "Worm"], 
    c: 2, 
    exp: "Verified Answer: C. Firewall"
  },
  { 
    id: 1023, 
    q: "What type of malware disguises itself as a legitimate program to trick users into executing it?", 
    a: ["Worm", "Trojan", "Adware", "Keylogger"], 
    c: 1, 
    exp: "Verified Answer: B. Trojan"
  },
  { 
    id: 1024, 
    q: "Which malware type encrypts a victim’ s files and demands payment for decryption?", 
    a: ["Spyware", "Rootkit", "Ransomware", "Adware"], 
    c: 2, 
    exp: "Verified Answer: C. Ransomware"
  },
  { 
    id: 1025, 
    q: "A key characteristic of a worm is that it:", 
    a: ["Attaches to legitimate programs", "Spreads without user intervention", "Modifies system files", "Requires user execution to spread"], 
    c: 1, 
    exp: "Verified Answer: B. Spreads without user intervention"
  },
  { 
    id: 1026, 
    q: "What type of malware records a user’s keystrokes to steal sensitive information?", 
    a: ["Adware", "Spyware", "Keylogger", "Worm"], 
    c: 2, 
    exp: "Verified Answer: C. Keylogger"
  },
  { 
    id: 1027, 
    q: "What distinguishes a botnet from other types of malware?", 
    a: ["It only affects mobile devices", "It operates as a collection of compromised computers", "It is harmless and used for system monitoring", "It is the same as a rootkit"], 
    c: 1, 
    exp: "Verified Answer: B. It operates as a collection of compromised computers"
  },
  { 
    id: 1028, 
    q: "Which malware technique is used to evade antivirus detection by modifying its own code?", 
    a: ["Polymorphism", "Ransomware", "Macro virus", "Spyware"], 
    c: 0, 
    exp: "Verified Answer: A. Polymorphism"
  },
  { 
    id: 1029, 
    q: "Which type of malware is commonly used for cyber espionage and covert surveillance?", 
    a: ["Ransomware", "Spyware", "Rootkit", "Adware"], 
    c: 1, 
    exp: "Verified Answer: B. Spyware"
  },
  { 
    id: 1030, 
    q: "What is a rootkit primarily used for?", 
    a: ["Encrypting files for ransom", "Creating popup advertisements", "Gaining persistent access and hiding malware", "Stealing cookies from browsers"], 
    c: 2, 
    exp: "Verified Answer: C. Gaining persistent access and hiding malware"
  },
  { 
    id: 1031, 
    q: "What is a fileless malware attack?", 
    a: ["A type of virus that infects system files", "Malware that operates without installing files on disk", "Malware that hides inside legitimate applications", "A worm that spreads through USB devices"], 
    c: 1, 
    exp: "Verified Answer: B. Malware that operates without installing files on disk"
  },
  { 
    id: 1032, 
    q: "Which of the following is NOT a type of malicious code family?", 
    a: ["Virus", "Worm", "Firewall", "Rootkit"], 
    c: 2, 
    exp: "Verified Answer: C. Firewall"
  },
  { 
    id: 1033, 
    q: "What distinguishes a Trojan from a traditional virus?", 
    a: ["Trojans do not self-replicate", "Trojans modify system files", "Trojans spread through email attachments", "Trojans cannot be removed"], 
    c: 0, 
    exp: "Verified Answer: A. Trojans do not self-replicate"
  },
  { 
    id: 1034, 
    q: "Which malware type is designed to hide itself and maintain long-term access to a system?", 
    a: ["Spyware", "Worm", "Rootkit", "Adware"], 
    c: 2, 
    exp: "Verified Answer: C. Rootkit"
  },
  { 
    id: 1035, 
    q: "What type of malware spreads by injecting itself into legitimate files?", 
    a: ["Keylogger", "Worm", "Virus", "Ransomware"], 
    c: 2, 
    exp: "Verified Answer: C. Virus"
  },
  { 
    id: 1036, 
    q: "Which malicious code family is designed to collect user credentials, monitor keystrokes, and steal personal data?", 
    a: ["Adware", "Keylogger", "Ransomware", "Rootkit"], 
    c: 1, 
    exp: "Verified Answer: B. Keylogger"
  },
  { 
    id: 1037, 
    q: "Which of the following best describes a botnet?", 
    a: ["A network of computers infected by malware and controlled remotely", "A type of virus that spreads via email", "A tool used for ethical hacking", "A legitimate security software"], 
    c: 0, 
    exp: "Verified Answer: A. A network of computers infected by malware and controlled remotely"
  },
  { 
    id: 1038, 
    q: "What is a logic bomb?", 
    a: ["A worm that spreads automatically", "A malicious script that executes under specific conditions", "A virus that cannot be detected", "A program that encrypts files for ransom"], 
    c: 1, 
    exp: "Verified Answer: B. A malicious script that executes under specific conditions"
  },
  { 
    id: 1039, 
    q: "Which malware technique modifies itself to evade signature-based detection?", 
    a: ["Ransomware", "Polymorphic malware", "Spyware", "Trojan"], 
    c: 1, 
    exp: "Verified Answer: B. Polymorphic malware"
  },
  { 
    id: 1040, 
    q: "What differentiates ransomware from other malicious code families?", 
    a: ["It modifies system configurations", "It spreads through network vulnerabilities", "It encrypts user files and demands payment", "It runs in the background without detection"], 
    c: 2, 
    exp: "Verified Answer: C. It encrypts user files and demands payment"
  },
  { 
    id: 1041, 
    q: "What is the primary characteristic of a metamorphic virus?", 
    a: ["It injects malicious scripts into web pages", "It hides inside root directories", "It completely rewrites its own code to evade detection", "It only affects mobile devices"], 
    c: 2, 
    exp: "Verified Answer: C. It completely rewrites its own code to evade detection"
  },
  { 
    id: 1042, 
    q: "Which type of malware leverages artificial intelligence (AI) to adapt and evade detection?", 
    a: ["Ransomware", "AI-Powered Malware", "Keylogger", "Adware"], 
    c: 1, 
    exp: "Verified Answer: B. AI-Powered Malware"
  },
  { 
    id: 1043, 
    q: "What is the primary technique used by modern fileless malware to infect systems?", 
    a: ["Embedding in executable files", "Exploiting system vulnerabilities without writing files to disk", "Attaching to email attachments", "Modifying the master boot record"], 
    c: 1, 
    exp: "Verified Answer: B. Exploiting system vulnerabilities without writing files to disk"
  },
  { 
    id: 1044, 
    q: "Which emer ging malware trend specifically targets Internet of Things (IoT) devices?", 
    a: ["Rootkits", "Botnets", "IoT Malware", "Polymorphic Viruses"], 
    c: 2, 
    exp: "Verified Answer: C. IoT Malware"
  },
  { 
    id: 1045, 
    q: "What is the key characteristic of double extortion ransomware?", 
    a: ["Encrypts user files and threatens to publicly leak stolen data", "Spreads automatically across a network without user interaction", "Uses polymorphic techniques to evade detection", "Deletes system files to render a system unusable"], 
    c: 0, 
    exp: "Verified Answer: A. Double Extortion: Encrypts files AND threatens to leak them."
  },
  { 
    id: 1046, 
    q: "What technique do modern malware variants use to evade sandbox detection?", 
    a: ["Running in Safe Mode", "Detecting virtual environments and delaying execution", "Disabling system updates", "Modifying kernel processes"], 
    c: 1, 
    exp: "Verified Answer: B. Detecting virtual environments and delaying execution"
  },
  { 
    id: 1047, 
    q: "What is the primary purpose of malware analysis?", 
    a: ["To enhance antivirus software performance", "To identify , understand, and mitigate malware threats", "To create new malware variants", "To optimize system performance"], 
    c: 1, 
    exp: "Verified Answer: B. To identify , understand, and mitigate malware threats"
  },
  { 
    id: 1048, 
    q: "What is the difference between static and dynamic malware analysis?", 
    a: ["Static analysis examines malware without executing it, while dynamic analysis observes its behavior during execution", "Static analysis requires internet connectivity , while dynamic analysis does not", "Static analysis modifies malware code, while dynamic analysis does not", "Static analysis is performed in a real environment, while dynamic analysis is performed in a sandbox"], 
    c: 0, 
    exp: "Verified Answer: A. Static analysis examines malware without executing it, while dynamic analysis observes its behavior during execution"
  },
  { 
    id: 1049, 
    q: "Which tool is commonly used for static malware analysis?", 
    a: ["Wireshark", "IDA Pro", "Metasploit", "Aircrack-ng"], 
    c: 1, 
    exp: "Verified Answer: B. IDA Pro"
  },
  { 
    id: 1050, 
    q: "What is the purpose of a sandbox in malware analysis?", 
    a: ["To isolate and safely execute malware for observation", "To detect rootkits in a compromised system", "To improve firewall configurations", "To remove malware from an infected system"], 
    c: 0, 
    exp: "Verified Answer: A. To isolate and safely execute malware for observation"
  },
  { 
    id: 1051, 
    q: "Which method is used to analyze obfuscated malware code?", 
    a: ["Packet sniffing", "Reverse engineering", "Phishing detection", "Code encryption"], 
    c: 1, 
    exp: "Verified Answer: B. Reverse engineering"
  },
  { 
    id: 1052, 
    q: "What type of malware analysis involves executing the malware in a controlled environment?", 
    a: ["Dynamic analysis", "Heuristic analysis", "Signature-based analysis", "Behavioral analysis"], 
    c: 0, 
    exp: "Verified Answer: A. Dynamic analysis"
  },
  { 
    id: 1053, 
    q: "Which tool is used to analyze malware’ s network activity?", 
    a: ["IDA Pro", "Process Monitor", "Wireshark", "Autopsy"], 
    c: 2, 
    exp: "Verified Answer: C. Wireshark"
  },
  { 
    id: 1054, 
    q: "What is heuristic malware analysis?", 
    a: ["A method of identifying malware based on predefined signatures", "A proactive technique that detects malware based on suspicious behaviors", "A way to encrypt malware files to prevent execution", "A technique used to distribute malware payloads"], 
    c: 1, 
    exp: "Verified Answer: B. A proactive technique that detects malware based on suspicious behaviors"
  },
  { 
    id: 1055, 
    q: "Which of the following is an example of a malware analysis framework?", 
    a: ["Burp Suite", "Cuckoo Sandbox", "Nmap", "Nessus"], 
    c: 1, 
    exp: "Verified Answer: B. Cuckoo Sandbox"
  },
  { 
    id: 1056, 
    q: "Why do malware authors use obfuscation techniques?", 
    a: ["To prevent detection by antivirus programs and security analysts", "To make malware run faster", "To improve compatibility with different operating systems", "To reduce the size of the malware file"], 
    c: 0, 
    exp: "Verified Answer: A. To prevent detection by antivirus programs and security analysts"
  },
  { 
    id: 1057, 
    q: "What is the primary goal of malware reverse engineering?", 
    a: ["To modify malware for personal use", "To analyze its behavior and develop countermeasures", "To create new malware variants", "To optimize system performance"], 
    c: 1, 
    exp: "Verified Answer: B. To analyze its behavior and develop countermeasures"
  },
  { 
    id: 1058, 
    q: "Which of the following tools is commonly used for disassembling malware?", 
    a: ["Metasploit", "IDA Pro", "Wireshark", "Aircrack-ng"], 
    c: 1, 
    exp: "Verified Answer: B. IDA Pro"
  },
  { 
    id: 1059, 
    q: "What is the purpose of dynamic analysis in malware reverse engineering?", 
    a: ["To analyze the malware without executing it", "To observe malware behavior during execution", "To encrypt malware payloads", "To generate malware signatures"], 
    c: 1, 
    exp: "Verified Answer: B. To observe malware behavior during execution"
  },
  { 
    id: 1060, 
    q: "What is code obfuscation in the context of malware reverse engineering?", 
    a: ["A technique used to make malware detection easier", "A method to improve malware performance", "A technique used to hide malware code from analysts and antivirus programs", "A way to increase the malware’ s execution speed"], 
    c: 2, 
    exp: "Verified Answer: C. A technique used to hide malware code from analysts and antivirus programs"
  },
  { 
    id: 1061, 
    q: "Which of the following techniques is used to analyze encrypted malware payloads?", 
    a: ["String analysis", "Debugging", "Hashing", "Packet sniffing"], 
    c: 1, 
    exp: "Verified Answer: B. Debugging"
  },
  { 
    id: 1062, 
    q: "What is the core component of the Android operating system that interacts directly with hardware?", 
    a: ["Android Runtime (ART)", "Linux Kernel", "Application Framework", "System Services"], 
    c: 1, 
    exp: "Verified Answer: B. Linux Kernel"
  },
  { 
    id: 1063, 
    q: "Which layer of the Android architecture contains system libraries like SQLite and WebKit?", 
    a: ["Application Framework", "Applications Layer", "Native Libraries Layer", "Android Runtime"], 
    c: 2, 
    exp: "Verified Answer: C. Native Libraries Layer"
  },
  { 
    id: 1064, 
    q: "What is the primary purpose of the Android Runtime (ART)?", 
    a: ["To manage the app’s user interface", "To handle background services", "To execute Android applications using Just-In-Time (JIT) compilation", "To provide network connectivity"], 
    c: 2, 
    exp: "Verified Answer: C. To execute Android applications using Just-In-Time (JIT) compilation"
  },
  { 
    id: 1065, 
    q: "In Android security, which component is responsible for enforcing app permissions?", 
    a: ["Application Framework", "Android Package Manager (APM)", "Linux Kernel", "Android Security Enforcement (ASE)"], 
    c: 2, 
    exp: "Verified Answer: C. Linux Kernel"
  },
  { 
    id: 1066, 
    q: "What role does the Zygote process play in Android architecture?", 
    a: ["Manages network connectivity", "Handles app permissions", "Preloads system libraries and starts new application processes", "Encrypts user data"], 
    c: 2, 
    exp: "Verified Answer: C. Preloads system libraries and starts new application processes"
  },
  { 
    id: 1067, 
    q: "In Android, where are user-installed applications stored by default?", 
    a: ["/system/app", "/data/app", "/storage/emulated/0", "/mnt/sdcard"], 
    c: 1, 
    exp: "Verified Answer: B. /data/app"
  },
  { 
    id: 1068, 
    q: "Which directory in the Android file system contains the kernel, system binaries, and boot scripts?", 
    a: ["/boot", "/system", "/proc", "/dev"], 
    c: 1, 
    exp: "Verified Answer: B. /system"
  },
  { 
    id: 1069, 
    q: "What is the purpose of the /proc directory in Android?", 
    a: ["Stores application data", "Contains kernel process information", "Holds system logs", "Stores external storage files"], 
    c: 1, 
    exp: "Verified Answer: B. Contains kernel process information"
  },
  { 
    id: 1070, 
    q: "Where does Android store user data, app settings, and databases?", 
    a: ["/sdcard", "/data/data", "/system/etc", "/boot"], 
    c: 1, 
    exp: "Verified Answer: B. /data/data"
  },
  { 
    id: 1071, 
    q: "Which directory in Android contains mount points for external storage like SD cards?", 
    a: ["/mnt", "/system/bin", "/data/media", "/cache"], 
    c: 0, 
    exp: "Verified Answer: A. /mnt"
  },
  { 
    id: 1072, 
    q: "What is the correct sequence of stages in the Android build process?", 
    a: ["Compilation → Packaging → Signing → Deployment", "Packaging → Compilation → Deployment → Signing", "Deployment → Compilation → Signing → Packaging", "Signing → Packaging → Compilation → Deployment"], 
    c: 0, 
    exp: "Verified Answer: A. Compilation → Packaging → Signing → Deployment"
  },
  { 
    id: 1073, 
    q: "What tool is primarily used to convert Java/Kotlin code into Dalvik Executable (DEX) files?", 
    a: ["dx", "aapt", "adb", "dvm"], 
    c: 0, 
    exp: "Verified Answer: A. dx"
  },
  { 
    id: 1074, 
    q: "In the Android build process, which file contains compiled resources like XML, images, and other assets?", 
    a: ["AndroidManifest.xml", "classes.dex", "resources.arsc", "build.gradle"], 
    c: 2, 
    exp: "Verified Answer: C. resources.arsc"
  },
  { 
    id: 1075, 
    q: "What is the role of the “APK signer” in the build process?", 
    a: ["To optimize APK size", "To ensure the APK’ s integrity and authenticity", "To compile Java code into bytecode", "To convert Java code into DEX format"], 
    c: 1, 
    exp: "Verified Answer: B. To ensure the APK’ s integrity and authenticity"
  },
  { 
    id: 1076, 
    q: "What is the purpose of the “proguard-rules.pro” file in an Android project?", 
    a: ["It defines network security policies", "It provides rules for code obfuscation and shrinking", "It manages Gradle build scripts", "It optimizes the APK installation process"], 
    c: 1, 
    exp: "Verified Answer: B. It provides rules for code obfuscation and shrinking"
  },
  { 
    id: 1077, 
    q: "What is the main entry point of an Android application?", 
    a: ["activity_main.xml", "MainActivity .java", "AndroidManifest.xml", "onCreate() method"], 
    c: 2, 
    exp: "Verified Answer: C. AndroidManifest.xml"
  },
  { 
    id: 1078, 
    q: "Which component is responsible for handling background operations in an Android app?", 
    a: ["Activity", "Broadcast Receiver", "Service", "Content Provider"], 
    c: 2, 
    exp: "Verified Answer: C. Service"
  },
  { 
    id: 1079, 
    q: "What is the purpose of an Intent in Android?", 
    a: ["To store user preferences", "To interact with hardware components", "To facilitate communication between components", "To define app permissions"], 
    c: 2, 
    exp: "Verified Answer: C. To facilitate communication between components"
  },
  { 
    id: 1080, 
    q: "What is the recommended way to store large amounts of structured data in an Android app?", 
    a: ["SharedPreferences", "SQLite Database", "Internal Storage", "External Storage"], 
    c: 1, 
    exp: "Verified Answer: B. SQLite Database"
  },
  { 
    id: 1081, 
    q: "Which Android component is used to share data between applications?", 
    a: ["Activity", "Content Provider", "Broadcast Receiver", "Fragment"], 
    c: 1, 
    exp: "Verified Answer: B. Content Provider"
  },
  { 
    id: 1082, 
    q: "What is the main security feature that isolates Android applications from each other?", 
    a: ["Permissions", "Sandboxing", "Encryption", "Firewall"], 
    c: 1, 
    exp: "Verified Answer: B. Sandboxing"
  },
  { 
    id: 1083, 
    q: "Which security mechanism prevents an Android app from accessing sensitive system resources without user approval?", 
    a: ["App Signing", "SELinux", "Permission System", "Encryption"], 
    c: 2, 
    exp: "Verified Answer: C. Permission System"
  },
  { 
    id: 1084, 
    q: "What role does SELinux play in Android security?", 
    a: ["Prevents app crashes", "Implements Mandatory Access Control (MAC)", "Encrypts user data", "Manages network security"], 
    c: 1, 
    exp: "Verified Answer: B. Implements Mandatory Access Control (MAC)"
  },
  { 
    id: 1085, 
    q: "What security feature was introduced in Android Oreo (8.0)?", 
    a: ["Project Treble", "Fingerprint unlock", "Adaptive Icons", "Picture-in-Picture"], 
    c: 0, 
    exp: "Verified Answer: A. Project Treble (Intro of Modular architecture)"
  },
  { 
    id: 1086, 
    q: "How does Android protect user data stored on the device?", 
    a: ["Full-disk encryption and file-based encryption", "Sandboxing and firewalls", "Permissions and kernel security", "Two-factor authentication"], 
    c: 0, 
    exp: "Verified Answer: A. Full-disk encryption and file-based encryption"
  },
  { 
    id: 1087, 
    q: "What does rooting an Android device primarily allow a user to do?", 
    a: ["Install any app without restrictions", "Gain administrative (superuser) access", "Unlock the bootloader automatically", "Improve battery life"], 
    c: 1, 
    exp: "Verified Answer: B. Gain administrative (superuser) access"
  },
  { 
    id: 1088, 
    q: "What is the biggest security risk of rooting an Android device?", 
    a: ["Decreased battery life", "Higher chances of malware attacks", "Inability to install apps", "Reduced storage space"], 
    c: 1, 
    exp: "Verified Answer: B. Higher chances of malware attacks"
  },
  { 
    id: 1089, 
    q: "Which tool is commonly used to root Android devices?", 
    a: ["Magisk", "Nmap", "SELinux", "Wireshark"], 
    c: 0, 
    exp: "Verified Answer: A. Magisk"
  },
  { 
    id: 1090, 
    q: "What is the primary difference between rooting and unlocking the bootloader?", 
    a: ["Rooting grants superuser access, while unlocking the bootloader allows installing custom firmware", "Unlocking the bootloader gives admin privileges, while rooting allows app installations", "Rooting is permanent, while unlocking the bootloader is temporary", "There is no difference between them"], 
    c: 0, 
    exp: "Verified Answer: A. Rooting grants superuser access, while unlocking the bootloader allows installing custom firmware"
  },
  { 
    id: 1091, 
    q: "Which of the following security features is often disabled when a device is rooted?", 
    a: ["Google Play Protect", "Android Runtime (ART)", "NFC functionality", "Screen brightness settings"], 
    c: 0, 
    exp: "Verified Answer: A. Google Play Protect"
  },
  { 
    id: 1092, 
    q: "What is the primary purpose of using an Android Emulator?", 
    a: ["To test Android applications on a virtual device", "To enhance the performance of real Android devices", "To replace the need for a physical smartphone", "To debug only hardware-related issues"], 
    c: 0, 
    exp: "Verified Answer: A. To test Android applications on a virtual device"
  },
  { 
    id: 1093, 
    q: "Which of the following tools is used to launch and manage the Android Emulator?", 
    a: ["Android Debug Bridge (ADB)", "Android Virtual Device (AVD) Manager", "Fastboot", "Logcat"], 
    c: 1, 
    exp: "Verified Answer: B. Android Virtual Device (AVD) Manager"
  },
  { 
    id: 1094, 
    q: "What is a key requirement for running an Android Emulator efficiently?", 
    a: ["At least 1GB of RAM", "A GPU with OpenGL ES support", "High speed Internet", "A physical keyboard"], 
    c: 1, 
    exp: "Verified Answer: B. A GPU with OpenGL ES support"
  },
  { 
    id: 1095, 
    q: "Which CPU architecture is typically NOT supported by most Android Emulators?", 
    a: ["x86", "ARM", "MIPS", "ARM64"], 
    c: 2, 
    exp: "Verified Answer: C. MIPS"
  },
  { 
    id: 1096, 
    q: "What tool is commonly used to send commands to an Android Emulator from the command line?", 
    a: ["ADB (Android Debug Bridge)", "Gradle", "Dalvik Debug Monitor", "Android Profiler"], 
    c: 0, 
    exp: "Verified Answer: A. ADB (Android Debug Bridge)"
  },
  { 
    id: 1097, 
    q: "What is the primary function of Android Debug Bridge (ADB)?", 
    a: ["To debug network-related issues in Android apps", "To create a backup of Android devices", "To provide a command-line interface for interacting with Android devices", "To install custom ROMs on Android devices"], 
    c: 2, 
    exp: "Verified Answer: C. To provide a command-line interface for interacting with Android devices"
  },
  { 
    id: 1098, 
    q: "Which command is used to list all connected devices in ADB?", 
    a: ["adb devices", "adb list", "adb connect", "adb show"], 
    c: 0, 
    exp: "Verified Answer: A. adb devices"
  },
  { 
    id: 1099, 
    q: "What must be enabled on an Android device to use ADB commands?", 
    a: ["Root access", "Developer options and USB debugging", "Bootloader unlocking", "Wireless debugging"], 
    c: 1, 
    exp: "Verified Answer: B. Developer options and USB debugging"
  },
  { 
    id: 1100, 
    q: "Which ADB command is used to install an APK on a connected device?", 
    a: ["adb push <apk-file>/data/app/", "adb install <apk-file>", "adb shell install <apk-file>", "adb apk install <apk-file>"], 
    c: 1, 
    exp: "Verified Answer: B. adb install <apk-file>"
  },
  { 
    id: 1101, 
    q: "What command is used to access an Android device’ s shell via ADB?", 
    a: ["adb shell", "adb connect shell", "adb cmd", "adb root shell"], 
    c: 0, 
    exp: "Verified Answer: A. adb shell"
  },
  { 
    id: 1102, 
    q: "Which of the following tools is specifically designed for mobile security penetration testing?", 
    a: ["Burp Suite", "MobSF", "Metasploit", "Nessus"], 
    c: 1, 
    exp: "Verified Answer: B. MobSF"
  },
  { 
    id: 1103, 
    q: "What is the primary function of Drozer in mobile security testing?", 
    a: ["Identifying network vulnerabilities", "Exploiting security flaws in Android applications", "Reverse engineering iOS apps", "Encrypting mobile data"], 
    c: 1, 
    exp: "Verified Answer: B. Exploiting security flaws in Android applications"
  },
  { 
    id: 1104, 
    q: "Which penetration testing tool is used to test security flaws in iOS applications?", 
    a: ["AndroBugs", "Frida", "SQLmap", "Wireshark"], 
    c: 1, 
    exp: "Verified Answer: B. Frida"
  },
  { 
    id: 1105, 
    q: "Which of the following tools can be used for Android app reverse engineering?", 
    a: ["Netcat", "Apktool", "Nmap", "Aircrack-ng"], 
    c: 1, 
    exp: "Verified Answer: B. Apktool"
  },
  { 
    id: 1106, 
    q: "Which mobile security testing tool is used for analyzing Android app permissions and security vulnerabilities?", 
    a: ["Nmap", "QARK", "Burp Suite", "Nikto"], 
    c: 1, 
    exp: "Verified Answer: B. QARK"
  },
  { 
    id: 1107, 
    q: "Which OWASP Mobile Top 10 vulnerability is associated with hardcoded API keys in an app’s source code?", 
    a: ["M1: Improper Platform Usage", "M2: Insecure Data Storage", "M4: Insecure Authentication", "M10: Extraneous Functionality"], 
    c: 3, 
    exp: "Verified Answer: D. M10: Extraneous Functionality"
  },
  { 
    id: 1108, 
    q: "Which vulnerability occurs when sensitive data is stored in a location that is easily accessible, such as SharedPreferences or unencrypted databases?", 
    a: ["M2: Insecure Data Storage", "M3: Insecure Communication", "M4: Insecure Authentication", "M7: Poor Code Quality"], 
    c: 0, 
    exp: "Verified Answer: A. M2: Insecure Data Storage"
  },
  { 
    id: 1109, 
    q: "What OWASP vulnerability can be exploited if an app fails to enforce strong authentication mechanisms?", 
    a: ["M1: Improper Platform Usage", "M4: Insecure Authentication", "M6: Insecure Authorization", "M9: Reverse Engineering"], 
    c: 1, 
    exp: "Verified Answer: B. M4: Insecure Authentication"
  },
  { 
    id: 1110, 
    q: "If an attacker intercepts sensitive user data due to the lack of SSL/TLS encryption, which OWASP vulnerability does it relate to?", 
    a: ["M3: Insecure Communication", "M5: Insufficient Cryptography", "M7: Poor Code Quality", "M8: Code Tampering"], 
    c: 0, 
    exp: "Verified Answer: A. M3: Insecure Communication"
  },
  { 
    id: 1111, 
    q: "What is the main risk of weak or broken cryptographic algorithms in mobile apps?", 
    a: ["Data can be easily intercepted", "Attackers can easily decrypt sensitive data", "It allows unauthorized API access", "It slows down app performance"], 
    c: 1, 
    exp: "Verified Answer: B. Attackers can easily decrypt sensitive data"
  },
  { 
    id: 1112, 
    q: "What OWASP vulnerability is exploited when an attacker manipulates application logic to gain unauthorized access to resources?", 
    a: ["M4: Insecure Authentication", "M6: Insecure Authorization", "M8: Code Tampering", "M10: Extraneous Functionality"], 
    c: 1, 
    exp: "Verified Answer: B. M6: Insecure Authorization"
  },
  { 
    id: 1113, 
    q: "Reverse engineering an APK to extract API keys and security tokens relates to which OWASP vulnerability?", 
    a: ["M1: Improper Platform Usage", "M9: Reverse Engineering", "M7: Poor Code Quality", "M10: Extraneous Functionality"], 
    c: 1, 
    exp: "Verified Answer: B. M9: Reverse Engineering"
  },
  { 
    id: 1114, 
    q: "What is the primary risk of an insecure logging mechanism in mobile applications?", 
    a: ["Poor app performance", "Exposure of sensitive user data in logs", "Slower network communication", "Reduced application security"], 
    c: 1, 
    exp: "Verified Answer: B. Exposure of sensitive user data in logs"
  },
  { 
    id: 1115, 
    q: "If an attacker modifies an app's behavior by injecting malicious code or altering its functionalities, which OWASP vulnerability is being exploited?", 
    a: ["M3: Insecure Communication", "M5: Insufficient Cryptography", "M8: Code Tampering", "M10: Extraneous Functionality"], 
    c: 2, 
    exp: "Verified Answer: C. M8: Code Tampering"
  },
  { 
    id: 1116, 
    q: "Which of the following methods helps prevent OWASP Mobile Top 10 vulnerabilities?", 
    a: ["Using hardcoded credentials", "Storing sensitive data in plaintext", "Implementing SSL/TLS encryption", "Disabling authentication mechanisms"], 
    c: 2, 
    exp: "Verified Answer: C. Implementing SSL/TLS encryption"
  },
  { 
    id: 1117, 
    q: "Which attack involves modifying an APK file to inject malicious code before repackaging it?", 
    a: ["Phishing Attack", "Code Injection Attack", "Reverse Engineering Attack", "Repackaging Attack"], 
    c: 3, 
    exp: "Verified Answer: D. Repackaging Attack"
  },
  { 
    id: 1118, 
    q: "Which tool is commonly used for reverse engineering Android apps?", 
    a: ["Wireshark", "Metasploit", "Apktool", "Nikto"], 
    c: 2, 
    exp: "Verified Answer: C. Apktool"
  },
  { 
    id: 1119, 
    q: "What type of attack occurs when an attacker injects malicious JavaScript into an Android WebView component?", 
    a: ["SQL Injection", "Clickjacking", "Cross-Site Scripting (XSS)", "Remote Code Execution"], 
    c: 2, 
    exp: "Verified Answer: C. Cross-Site Scripting (XSS)"
  },
  { 
    id: 1120, 
    q: "What is the primary goal of an overlay attack in Android apps?", 
    a: ["To perform brute-force attacks on passwords", "To create a fake screen over a legitimate app to steal credentials", "To gain root access on a device", "To inject malicious code into an app"], 
    c: 1, 
    exp: "Verified Answer: B. To create a fake screen over a legitimate app to steal credentials"
  },
  { 
    id: 1121, 
    q: "Which attack targets the Android Binder IPC mechanism to escalate privileges?", 
    a: ["ARP Poisoning", "Man-in-the-Middle Attack", "Dirty COW Attack", "Binder Overflow Attack"], 
    c: 3, 
    exp: "Verified Answer: D. Binder Overflow Attack"
  },
  { 
    id: 1122, 
    q: "What is a common method used by attackers to distribute malicious Android apps outside the Play Store?", 
    a: ["Through official Play Store updates", "Through social engineering and third-party app stores", "Through SSL/TLS encryption", "By modifying the Google Play Protect settings"], 
    c: 1, 
    exp: "Verified Answer: B. Through social engineering and third-party app stores"
  },
  { 
    id: 1123, 
    q: "What type of attack exploits accessibility services to gain control over an Android device?", 
    a: ["Remote Code Execution", "Keylogging Attack", "Accessibility Exploit Attack", "MAC Spoofing"], 
    c: 2, 
    exp: "Verified Answer: C. Accessibility Exploit Attack"
  },
  { 
    id: 1124, 
    q: "Which attack involves an attacker capturing and modifying network traffic between a mobile app and its server?", 
    a: ["Phishing Attack", "SQL Injection", "Man-in-the-Middle (MITM) Attack", "Social Engineering"], 
    c: 2, 
    exp: "Verified Answer: C. Man-in-the-Middle (MITM) Attack"
  },
  { 
    id: 1125, 
    q: "What is the impact of an Android Clickjacking Attack?", 
    a: ["The attacker crashes the device", "The attacker gains access to hidden features by tricking the user into clicking invisible UI elements", "The app bypasses Google Play Protect", "The attacker deletes data from the app"], 
    c: 1, 
    exp: "Verified Answer: B. The attacker gains access to hidden features by tricking the user into clicking invisible UI elements"
  },
  { 
    id: 1126, 
    q: "What Android security feature helps prevent dynamic code loading attacks?", 
    a: ["Google Play Protect", "SELinux", "Certificate Pinning", "ProGuard"], 
    c: 1, 
    exp: "Verified Answer: B. SELinux"
  },
  { 
    id: 1127, 
    q: "What is the primary method used in a Smishing attack?", 
    a: ["Fake emails pretending to be from legitimate sources", "Malicious SMS messages tricking users into revealing sensitive information", "Fake social media posts with malicious links", "Phone calls impersonating bank representatives"], 
    c: 1, 
    exp: "Verified Answer: B. Malicious SMS messages tricking users into revealing sensitive information"
  },
  { 
    id: 1128, 
    q: "Which of the following is a common sign of a Smishing attack?", 
    a: ["The message is from an unknown sender and contains a suspicious link", "The message is from a trusted friend", "The SMS is from an official government agency and includes official contact details", "The SMS is sent via end-to-end encrypted messaging apps"], 
    c: 0, 
    exp: "Verified Answer: A. The message is from an unknown sender and contains a suspicious link"
  },
  { 
    id: 1129, 
    q: "What is a common goal of Smishing attacks?", 
    a: ["To make phone calls to victims", "To infect mobile devices with ransomware", "To steal credentials, personal data, or financial information", "To perform denial-of-service attacks on mobile networks"], 
    c: 2, 
    exp: "Verified Answer: C. To steal credentials, personal data, or financial information"
  },
  { 
    id: 1130, 
    q: "How can users protect themselves from Smishing attacks?", 
    a: ["Clicking on links only if they come from unknown numbers", "Ignoring SMS messages from known contacts", "Avoiding messages that urge immediate action and verifying the sender’s identity", "Replying to suspicious SMS messages to confirm their legitimacy"], 
    c: 2, 
    exp: "Verified Answer: C. Avoiding messages that urge immediate action and verifying the sender’s identity"
  },
  { 
    id: 1131, 
    q: "Which of the following is a real-world example of a Smishing attack?", 
    a: ["Fake banking alerts asking for OTP verification via SMS", "Malicious mobile apps found on the Play Store", "Phishing emails with fake invoice attachments", "Drive-by downloads from compromised websites"], 
    c: 0, 
    exp: "Verified Answer: A. Fake banking alerts asking for OTP verification via SMS"
  },
  { 
    id: 1132, 
    q: "Which type of web-based attack targets Android users by embedding malicious code in legitimate websites?", 
    a: ["Clickjacking", "Drive-by Download", "SIM Swapping", "ARP Spoofing"], 
    c: 1, 
    exp: "Verified Answer: B. Drive-by Download"
  },
  { 
    id: 1133, 
    q: "How does a Clickjacking attack work on Android devices?", 
    a: ["It tricks users into clicking hidden malicious elements by overlaying fake UI components", "It forces the device to restart continuously", "It clones a legitimate app to steal user credentials", "It disables app permissions automatically"], 
    c: 0, 
    exp: "Verified Answer: A. It tricks users into clicking hidden malicious elements by overlaying fake UI components"
  },
  { 
    id: 1134, 
    q: "What is a common goal of a Man-in-the-Middle (MitM) attack on Android browsers?", 
    a: ["To delete all browsing history", "To inject malicious JavaScript into web pages", "To optimize internet speed", "To automatically install Android system updates"], 
    c: 1, 
    exp: "Verified Answer: B. To inject malicious JavaScript into web pages"
  },
  { 
    id: 1135, 
    q: "Which security mechanism helps prevent Cross-Site Scripting (XSS) attacks on Android web apps?", 
    a: ["Disabling JavaScript entirely", "Implementing Content Security Policy (CSP)", "Allowing all pop-ups from trusted websites", "Clearing cache and cookies frequently"], 
    c: 1, 
    exp: "Verified Answer: B. Implementing Content Security Policy (CSP)"
  },
  { 
    id: 1136, 
    q: "How can Android users protect themselves from Web-Based Attacks?", 
    a: ["Using outdated browsers to avoid tracking", "Only installing apps from third-party sources", "Keeping browsers and apps updated and using HTTPS websites", "Avoiding Wi-Fi connections completely"], 
    c: 2, 
    exp: "Verified Answer: C. Keeping browsers and apps updated and using HTTPS websites"
  },
  { 
    id: 1137, 
    q: "Which attack targets Android devices by setting up a rogue Wi-Fi network to capture user data?", 
    a: ["Bluejacking", "Evil Twin Attack", "Phishing", "SQL Injection"], 
    c: 1, 
    exp: "Verified Answer: B. Evil Twin Attack"
  },
  { 
    id: 1138, 
    q: "What is the main objective of a Man-in-the-Middle (MitM) attack on Android devices?", 
    a: ["To drain the battery of the device", "To intercept and alter network communications", "To delete installed applications", "To install ransomware automatically"], 
    c: 1, 
    exp: "Verified Answer: B. To intercept and alter network communications"
  },
  { 
    id: 1139, 
    q: "Which of the following tools is commonly used to perform network sniffing on Android devices?", 
    a: ["Metasploit", "Wireshark", "Apktool", "Frida"], 
    c: 1, 
    exp: "Verified Answer: B. Wireshark"
  },
  { 
    id: 1140, 
    q: "How does a DNS Hijacking attack affect an Android user?", 
    a: ["It blocks access to all internet services", "It redirects the user to malicious websites without their knowledge", "It forces the Android device to reset", "It installs unauthorized applications remotely"], 
    c: 1, 
    exp: "Verified Answer: B. It redirects the user to malicious websites without their knowledge"
  },
  { 
    id: 1141, 
    q: "What technique is commonly used to bypass HTTPS security on an Android device?", 
    a: ["SSL Stripping", "SIM Cloning", "Brute-force attacks", "Social Engineering"], 
    c: 0, 
    exp: "Verified Answer: A. SSL Stripping"
  },
  { 
    id: 1142, 
    q: "What type of social engineering attack involves sending fake SMS messages to trick Android users into revealing personal information?", 
    a: ["Vishing", "Smishing", "Pretexting", "Pharming"], 
    c: 1, 
    exp: "Verified Answer: B. Smishing"
  },
  { 
    id: 1143, 
    q: "Which attack involves an attacker impersonating a legitimate service over a phone call to deceive mobile users into revealing credentials?", 
    a: ["Phishing", "Vishing", "Baiting", "Tailgating"], 
    c: 1, 
    exp: "Verified Answer: B. Vishing"
  },
  { 
    id: 1144, 
    q: "In the context of Android security, which method involves an attacker leaving an infected mobile charger in a public place to trick users into plugging in their devices?", 
    a: ["Piggybacking", "Juice Jacking", "Shoulder Surfing", "Rogue Access Point"], 
    c: 1, 
    exp: "Verified Answer: B. Juice Jacking"
  },
  { 
    id: 1145, 
    q: "An attacker lures an Android user into installing a fake application that appears useful but secretly steals data. What type of social engineering attack is this?", 
    a: ["Pretexting", "Baiting", "Shoulder Surfing", "Pharming"], 
    c: 1, 
    exp: "Verified Answer: B. Baiting"
  },
  { 
    id: 1146, 
    q: "How does a pharming attack target Android users through social engineering?", 
    a: ["By redirecting users to fake websites through manipulated DNS settings", "By asking users directly for sensitive information over a call", "By sending fraudulent text messages containing malicious links", "By using fake social media accounts to gain trust"], 
    c: 0, 
    exp: "Verified Answer: A. By redirecting users to fake websites through manipulated DNS settings"
  },
  { 
    id: 1147, 
    q: "Which of the following MITM techniques allows an attacker to intercept and modify data between an Android device and a Wi-Fi network?", 
    a: ["Evil Twin Attack", "SIM Swapping", "Smishing", "Session Hijacking"], 
    c: 0, 
    exp: "Verified Answer: A. Evil Twin Attack"
  },
  { 
    id: 1148, 
    q: "What is the primary goal of a MITM attack on an Android device?", 
    a: ["To delete user data remotely", "To intercept and manipulate communication between the device and another system", "To install malware through fake app stores", "To perform a factory reset of the device"], 
    c: 1, 
    exp: "Verified Answer: B. To intercept and manipulate communication between the device and another system"
  },
  { 
    id: 1149, 
    q: "How can an attacker perform a MITM attack on an Android device using ARP poisoning?", 
    a: ["By modifying the device's firmware", "By creating a fake application with malicious permissions", "By tricking the local network into associating the attacker’s MAC address with gateway’s IP", "By forcing the device to reboot into a vulnerable mode"], 
    c: 2, 
    exp: "Verified Answer: C. By tricking the local network into associating the attacker’s MAC address with gateway’s IP"
  },
  { 
    id: 1150, 
    q: "What tool can be used by an attacker to launch MITM attacks on Android devices connected to public Wi-Fi?", 
    a: ["Wireshark", "Netcat", "Ettercap", "All of the above"], 
    c: 3, 
    exp: "Verified Answer: D. All of the above"
  },
  { 
    id: 1151, 
    q: "Which countermeasure is most effective in preventing MITM attacks on Android devices?", 
    a: ["Using a VPN when connecting to public networks", "Disabling Bluetooth and NFC", "Keeping the device in airplane mode", "Avoiding screen lock passwords"], 
    c: 0, 
    exp: "Verified Answer: A. Using a VPN when connecting to public networks"
  },
  { 
    id: 1152, 
    q: "Which of the following is a primary method used by mobile malware to infect Android devices?", 
    a: ["Drive-by downloads", "Rooting the device manually", "Connecting to a secured Wi-Fi network", "Enabling airplane mode"], 
    c: 0, 
    exp: "Verified Answer: A. Drive-by downloads"
  },
  { 
    id: 1153, 
    q: "What type of mobile malware is designed to secretly send premium-rate SMS messages without user consent?", 
    a: ["Spyware", "Trojan", "SMS Trojan", "Adware"], 
    c: 2, 
    exp: "Verified Answer: C. SMS Trojan"
  },
  { 
    id: 1154, 
    q: "How does ransomware affect mobile devices?", 
    a: ["It locks the screen and demands a ransom to regain access", "It increases the device’ s processing speed", "It allows users to install paid apps for free", "It prevents malware from entering the device"], 
    c: 0, 
    exp: "Verified Answer: A. It locks the screen and demands a ransom to regain access"
  },
  { 
    id: 1155, 
    q: "Which of the following is NOT a common goal of mobile malware?", 
    a: ["Stealing sensitive user data", "Encrypting data for legitimate security purposes", "Displaying intrusive advertisements", "Gaining unauthorized remote access to the device"], 
    c: 1, 
    exp: "Verified Answer: B. Encrypting data for legitimate security purposes"
  },
  { 
    id: 1156, 
    q: "What is a common way mobile malware spreads through fake applications?", 
    a: ["Downloading from third-party app stores", "Receiving SMS alerts from mobile carriers", "Using two-factor authentication", "Installing updates from official sources"], 
    c: 0, 
    exp: "Verified Answer: A. Downloading from third-party app stores"
  },
  { 
    id: 1157, 
    q: "What is the primary purpose of static analysis in Android app security testing?", 
    a: ["Examining the app’s behavior at runtime", "Analyzing the app’s code without executing it", "Monitoring network traffic of the app", "Checking for app updates in the Play Store"], 
    c: 1, 
    exp: "Verified Answer: B. Analyzing the app’s code without executing it"
  },
  { 
    id: 1158, 
    q: "Which tool is commonly used for decompiling Android APKs for security analysis?", 
    a: ["Metasploit", "Wireshark", "JADX", "OWASP ZAP"], 
    c: 2, 
    exp: "Verified Answer: C. JADX"
  },
  { 
    id: 1159, 
    q: "In dynamic analysis, what is a common method to observe an Android app's runtime behavior?", 
    a: ["Inspecting logs using Logcat", "Editing the AndroidManifest.xml file", "Using static analysis tools like MobSF", "Checking file permissions manually"], 
    c: 0, 
    exp: "Verified Answer: A. Inspecting logs using Logcat"
  },
  { 
    id: 1160, 
    q: "Which file contains an Android app’s permissions and essential metadata?", 
    a: ["build.gradle", "MainActivity.java", "AndroidManifest.xml", "res/layout/activity_main.xml"], 
    c: 2, 
    exp: "Verified Answer: C. AndroidManifest.xml"
  },
  { 
    id: 1161, 
    q: "What is the primary role of Frida in Android app analysis?", 
    a: ["Reverse engineering Java code", "Injecting scripts to manipulate app behavior at runtime", "Generating API keys for secure communication", "Encrypting sensitive user data"], 
    c: 1, 
    exp: "Verified Answer: B. Injecting scripts to manipulate app behavior at runtime"
  },
  { 
    id: 1162, 
    q: "What is the primary function of Mobile Security Framework (MobSF)?", 
    a: ["Detecting root access on Android devices", "Performing static and dynamic analysis of mobile applications", "Encrypting sensitive files on Android devices", "Blocking malicious apps from running"], 
    c: 1, 
    exp: "Verified Answer: B. Performing static and dynamic analysis of mobile applications"
  },
  { 
    id: 1163, 
    q: "Which file format does MobSF primarily analyze for Android applications?", 
    a: [".IPA", ".EXE", ".APK", ".BAT"], 
    c: 2, 
    exp: "Verified Answer: C. .APK"
  },
  { 
    id: 1164, 
    q: "In static analysis, which of the following is NOT performed by MobSF?", 
    a: ["Reverse engineering the APK", "Extracting sensitive information from decompiled code", "Monitoring app behavior at runtime", "Identifying hardcoded credentials and API keys"], 
    c: 2, 
    exp: "Verified Answer: C. Monitoring app behavior at runtime"
  },
  { 
    id: 1165, 
    q: "What does MobSF use to capture network traffic during dynamic analysis of an Android app?", 
    a: ["Wireshark", "Burp Suite", "An embedded proxy", "Nmap"], 
    c: 2, 
    exp: "Verified Answer: C. An embedded proxy"
  },
  { 
    id: 1166, 
    q: "What is a key advantage of using MobSF for Android app analysis?", 
    a: ["Requires no setup or installation", "Performs both static and dynamic analysis in a single framework", "Provides real-time antivirus protection", "Can only analyze Android applications, not iOS apps"], 
    c: 1, 
    exp: "Verified Answer: B. Performs both static and dynamic analysis in a single framework"
  }
];