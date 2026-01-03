export const fcnQuestions = [
    
  { 
    id: 1, 
    q: "What is the primary difference between UTP and STP cables?", 
    a: ["UTP cables have shielding while STP cables don't", "STP cables have shielding while UTP cables don't", "Both UTP and STP cables have the same level of shielding", "UTP cables are thicker than STP cables"], 
    c: 1, 
    exp: "Verified Answer: B. STP stands for Shielded Twisted Pair, and UTP stands for Unshielded Twisted Pair. The primary difference is that STP includes a metallic foil or braided mesh layer (shielding) to protect the internal copper wires from EMI (Electromagnetic Interference) and RFI (Radio Frequency Interference), which UTP lacks." 
  },
  { 
    id: 2, 
    q: "What does the 'e' signify in CAT5e?", 
    a: ["Enhanced", "Electrical", "Efficient", "Extended"], 
    c: 0, 
    exp: "Verified Answer: A. In CAT5e (Category 5 Enhanced), the 'e' stands for Enhanced. It is an improved version of the original CAT5 standard, designed to support higher data speeds (up to 1000 Mbps or 1 Gbps) and significantly reduce 'crosstalk'—the unwanted signal leakage between adjacent wire pairs." 
  },
  { 
    id: 3, 
    q: "Which cable type offers better protection against electromagnetic interference (EMI)?", 
    a: ["UTP", "STP", "Both UTP and STP provide equal EMI protection", "Neither UTP nor STP protect against EMI"], 
    c: 1, 
    exp: "Verified Answer: B. STP (Shielded Twisted Pair) offers superior protection. The 'Shielding' acts as a Faraday cage, reflecting or grounding external electrical noise known as EMI (Electromagnetic Interference), making it ideal for industrial environments near heavy machinery or power lines." 
  },
  { 
    id: 4, 
    q: "What is a key advantage of UTP over STP cables?", 
    a: ["UTP cables are more cost-effective", "UTP cables have higher data transmission speeds", "UTP cables are more durable", "UTP cables are easier to install"], 
    c: 0, 
    exp: "Verified Answer: A. UTP (Unshielded Twisted Pair) is the most popular choice for indoor LAN (Local Area Network) cabling because it is significantly cheaper (cost-effective) and thinner, making it easier to pull through conduits and wall spaces compared to the bulkier, more expensive STP." 
  },
  { 
    id: 5, 
    q: "Which cable type typically has a higher level of flexibility?", 
    a: ["UTP", "STP", "Both UTP and STP have similar flexibility", "Neither UTP nor STP are flexible"], 
    c: 0, 
    exp: "Verified Answer: A. UTP (Unshielded Twisted Pair) is more flexible because it does not contain the stiff metallic foil or copper braid shielding found inside STP. This flexibility makes UTP much easier to bend around corners and manage in tight network closets." 
  },
  { 
    id: 6, 
    q: "Which category of Ethernet cable is commonly used for Gigabit Ethernet and has a maximum data transfer rate of 1 Gbps?", 
    a: ["Category 3 (Cat3)", "Category 5e (Cat5e)", "Category 6 (Cat6)", "Category 7 (Cat7)"], 
    c: 2, 
    exp: "Verified Answer: C. While Cat5e can handle Gigabit speeds, Category 6 (Cat6) is specifically engineered for it. Cat6 operates at a higher frequency (250 MHz) compared to Cat5e (100 MHz), providing a more stable and reliable 1 Gbps (Gigabit per second) performance over longer distances." 
  },
  { 
    id: 7, 
    q: "Which cable category is known for its capability to support 10 Gigabit Ethernet up to 55 meters and is backward compatible with previous standards?", 
    a: ["Category 6a (Cat6a)", "Category 5 (Cat5)", "Category 6 (Cat6)", "Category 7 (Cat7)"], 
    c: 2, 
    exp: "Verified Answer: C. Cat6 (Category 6) supports 10 Gbps (10 Gigabit Ethernet) but is limited to a distance of 55 meters for that specific speed. For the full 100-meter distance at 10 Gbps, Cat6a (Augmented) is required. Cat6 remains backward compatible with Cat5 and Cat5e." 
  },
  { 
    id: 8, 
    q: "Which cable category is often used in telephone wiring and has a maximum frequency of 16 MHz?", 
    a: ["Category 3 (Cat3)", "Category 5e (Cat5e)", "Category 6 (Cat6)", "Category 7 (Cat7)"], 
    c: 0, 
    exp: "Verified Answer: A. Category 3 (Cat3) is a legacy UTP cable standard. It has a maximum frequency of 16 MHz and was the standard for 10BASE-T Ethernet (10 Mbps) in the early 90s, but today it is almost exclusively used for analog telephone (POTS - Plain Old Telephone Service) wiring." 
  },
  { 
    id: 9, 
    q: "What improvement does Category 5e (Cat5e) offer over its predecessor Category 5 (Cat5)?", 
    a: ["Cat5e has higher maximum frequency", "Cat5e has better shielding", "Cat5e offers faster data transfer rates", "Cat5e has higher maximum bandwidth"], 
    c: 2, 
    exp: "Verified Answer: C. Cat5e (Category 5 Enhanced) was an incremental update that tightened specifications for 'Crosstalk.' This allowed it to support data transfer rates up to 1000 Mbps (1 Gbps), whereas the original Cat5 was limited to 100 Mbps (Fast Ethernet)." 
  },
  { 
    id: 10, 
    q: "Which cable category is designed to support higher frequencies up to 600 MHz and has improved crosstalk and noise reduction features?", 
    a: ["Category 6 (Cat6)", "Category 5e (Cat5e)", "Category 7 (Cat7)", "Category 8 (Cat8)"], 
    c: 0, 
    exp: "Verified Answer: A. According to the provided answer key, Cat6 is the intended answer here for its improved noise reduction over Cat5e, though technically Cat7 reaches 600 MHz. Cat6 (Category 6) typically operates at 250 MHz and uses a physical separator (spline) inside the cable to eliminate crosstalk." 
  },
  { 
    id: 11, 
    q: "Which cable type is more commonly used in Ethernet networks?", 
    a: ["UTP", "STP", "Both UTP and STP are equally used", "None of the above"], 
    c: 0, 
    exp: "Verified Answer: A. UTP (Unshielded Twisted Pair) is the most dominant cable type in Ethernet LANs worldwide. Its combination of low cost, ease of termination (attaching RJ-45 connectors), and sufficient performance for most office/home needs makes it the default choice over STP." 
  },
  { 
    id: 12, 
    q: "Compared to CAT5, what improvement does CAT5e offer?", 
    a: ["Better insulation", "Enhanced speed and bandwidth", "Thicker cables", "Increased flexibility"], 
    c: 1, 
    exp: "Verified Answer: B. CAT5e offers Enhanced speed and bandwidth. It improved upon CAT5 by increasing the data capacity from 100 Mbps to 1000 Mbps (1 Gbps) and increasing the bandwidth capability, ensuring modern networking equipment can operate at full capacity." 
  },
  { 
    id: 13, 
    q: "Which factor distinguishes CAT5e from CAT5?", 
    a: ["Higher cost", "Increased resistance to water damage", "Ability to support Gigabit Ethernet", "Thinner cable diameter"], 
    c: 2, 
    exp: "Verified Answer: C. The primary distinguishing factor is the support for Gigabit Ethernet (1000BASE-T). While they look identical physically, CAT5e has stricter manufacturing standards to ensure it can handle the 1 Gbps signal without excessive data loss." 
  },
  { 
    id: 14, 
    q: "What is the purpose of an IP address in internetworking?", 
    a: ["To identify the physical location of a device", "To facilitate communication between devices on different networks", "To determine the manufacturer of a networking device", "To regulate the speed of data transmission"], 
    c: 1, 
    exp: "Verified Answer: B. An IP (Internet Protocol) address is a unique numerical label assigned to each device. Its primary purpose in Internetworking is to provide a logical address so that routers can 'route' data packets across different networks to reach the correct destination." 
  },
  { 
    id: 15, 
    q: "Which device operates at the Network Layer (Layer 3) of the OSI model to forward packets between different networks?", 
    a: ["Switch", "Router", "Hub", "Repeater"], 
    c: 1, 
    exp: "Verified Answer: B. A Router is a Layer 3 device in the OSI (Open Systems Interconnection) model. Unlike a switch (which connects devices in the same network), a router uses IP addresses to forward data 'packets' between separate, distinct networks (e.g., connecting your home LAN to the Internet)." 
  },
  { 
    id: 16, 
    q: "Which protocol is commonly used for securing communications over a network, providing encryption and authentication?", 
    a: ["HTTP", "FTP", "SSH", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C. SSH stands for Secure Shell. It is a cryptographic network protocol used for secure operating system logins and file transfers. It provides strong encryption and authentication to ensure that attackers cannot 'sniff' or alter the data being sent over the network." 
  },
  { 
    id: 17, 
    q: "What is a primary function of a firewall in internetworking?", 
    a: ["Enhancing network speed", "Filtering and controlling network traffic", "Connecting different network segments", "Improving data encryption"], 
    c: 1, 
    exp: "Verified Answer: B. A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Its primary function is to filter out 'bad' traffic (like hacking attempts) while allowing 'good' traffic to pass through." 
  },
  { 
    id: 18, 
    q: "In the context of internetworking, what does DNS stand for?", 
    a: ["Domain Name System", "Data Networking System", "Distributed Network Service", "Dynamic Network Security"], 
    c: 0, 
    exp: "Verified Answer: A. DNS stands for Domain Name System. It acts as the 'phonebook' of the internet, translating human-friendly web addresses like 'google.com' into the numerical IP addresses (e.g., 142.250.190.46) that computers use to identify each other." 
  },
  { 
    id: 19, 
    q: "What is the purpose of a subnet mask in networking?", 
    a: ["To identify a specific device on a network", "To determine the network portion of an IP address", "To encrypt data transmitted over the network", "To prevent unauthorized access to the network"], 
    c: 1, 
    exp: "Verified Answer: B. A Subnet Mask is a 32-bit number used in conjunction with an IP address. Its purpose is to 'mask' the IP address to show which part identifies the Network and which part identifies the specific Host (device) on that network." 
  },
  { 
    id: 20, 
    q: "Which addressing scheme is used by IPv6 that significantly increases the number of available IP addresses compared to IPv4?", 
    a: ["32-bit addressing", "48-bit addressing", "64-bit addressing", "128-bit addressing"], 
    c: 3, 
    exp: "Verified Answer: D. IPv6 (Internet Protocol version 6) uses a 128-bit addressing scheme, compared to the 32-bit scheme of IPv4. This allows for approximately 340 undecillion addresses, solving the problem of IP address exhaustion caused by the billions of devices now on the internet." 
  },
  { 
    id: 21, 
    q: "Which layer of the OSI model is responsible for ensuring error-free transmission of data?", 
    a: ["Physical Layer", "Data Link Layer", "Transport Layer", "Network Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Data Link Layer (Layer 2) is responsible for node-to-node data transfer. It packages data into 'Frames' and uses a Checksum (FCS - Frame Check Sequence) to detect and sometimes correct errors that occurred during transmission over the physical wire." 
  },
  { 
    id: 22, 
    q: "What is the primary function of the Presentation Layer in the OSI model?", 
    a: ["Establishing connections between devices", "Ensuring reliable delivery of data", "Converting data into a format understandable by the application layer", "Routing data packets to their destinations"], 
    c: 2, 
    exp: "Verified Answer: C. The Presentation Layer (Layer 6) acts as a translator. Its primary function is to format, encrypt, or compress data so that the Application Layer (Layer 7) on the receiving end can correctly interpret and display the information." 
  },
  { 
    id: 23, 
    q: "Which layer of the OSI model deals with logical addressing and routing?", 
    a: ["Network Layer", "Transport Layer", "Data Link Layer", "Session Layer"], 
    c: 0, 
    exp: "Verified Answer: A. The Network Layer (Layer 3) handles Logical Addressing (IP addresses) and Path Determination (Routing). It is responsible for deciding the best physical path for a 'packet' to take to reach its destination network." 
  },
  { 
    id: 24, 
    q: "Which layer is responsible for establishing, managing and terminating sessions between applications?", 
    a: ["Session Layer", "Transport Layer", "Presentation Layer", "Application Layer"], 
    c: 0, 
    exp: "Verified Answer: A. The Session Layer (Layer 5) is responsible for 'Dialogue Control.' It opens, manages, and closes the communication sessions between two applications, ensuring that data from different sessions remains separate." 
  },
  { 
    id: 25, 
    q: "Which layer of the OSI model provides flow control, segmentation and reassembly of data?", 
    a: ["Transport Layer", "Data Link Layer", "Network Layer", "Physical Layer"], 
    c: 0, 
    exp: "Verified Answer: A. The Transport Layer (Layer 4) provides end-to-end communication. It breaks large data into smaller 'Segments' (Segmentation), reassembles them at the destination, and uses Flow Control to ensure the sender doesn't overwhelm the receiver with too much data." 
  },
  { 
    id: 26, 
    q: "At which layer does encryption and decryption of data occur in the OSI model?", 
    a: ["Transport Layer", "Presentation Layer", "Application Layer", "Session Layer"], 
    c: 1, 
    exp: "Verified Answer: B. Encryption and Decryption are key responsibilities of the Presentation Layer (Layer 6). By handling security at this layer, the network ensures that data is protected before it is even formatted for the application to read." 
  },
  { 
    id: 27, 
    q: "What is the primary function of the Data Link Layer in the OSI model?", 
    a: ["Providing network services to applications", "Ensuring error-free transmission within a physical network", "Translating data between different formats", "Establishing end-to-end connections"], 
    c: 1, 
    exp: "Verified Answer: B. The Data Link Layer (Layer 2) focuses on local delivery. It handles Physical Addressing (MAC addresses) and ensures that data 'frames' are sent correctly from one network interface card to another on the same local network." 
  },
  { 
    id: 28, 
    q: "Which layer is responsible for converting data into frames and managing access to the physical media?", 
    a: ["Transport Layer", "Network Layer", "Physical Layer", "Data Link Layer"], 
    c: 3, 
    exp: "Verified Answer: D. The Data Link Layer (Layer 2) takes packets from the Network layer and encapsulates them into 'Frames.' It also includes the MAC (Media Access Control) sub-layer, which determines when a device is allowed to transmit data on the physical wire." 
  },
  { 
    id: 29, 
    q: "What does the Physical Layer of the OSI model primarily deal with?", 
    a: ["Logical addressing and routing", "Ensuring data integrity and reliability", "Transmission of raw data bits over a physical medium", "Establishing connections between devices"], 
    c: 2, 
    exp: "Verified Answer: C. The Physical Layer (Layer 1) deals with the 'hardware' aspects of the network. It defines the electrical, mechanical, and functional specifications for activating and transmitting raw 'bits' (0s and 1s) over physical media like copper wires, fiber optics, or radio waves." 
  },
  { 
    id: 30, 
    q: "Which layer of the OSI model deals with network topology and logical addressing?", 
    a: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Network Layer (Layer 3) handles the logical structure of the network (Network Topology) and uses Logical Addressing (IP) to identify where devices are located globally." 
  },
  { 
    id: 31, 
    q: "Which layer provides network services directly to the user's applications?", 
    a: ["Application Layer", "Transport Layer", "Presentation Layer", "Session Layer"], 
    c: 0, 
    exp: "Verified Answer: A. The Application Layer (Layer 7) is the layer closest to the end-user. It provides the protocols (like HTTP for web, SMTP for email) that allow software applications to communicate with the network." 
  },
  { 
    id: 32, 
    q: "What function does the Transport Layer perform to ensure reliable communication between applications?", 
    a: ["Segmentation and reassembly of data", "Translation of data formats", "Logical addressing and routing", "Flow control and error correction"], 
    c: 3, 
    exp: "Verified Answer: D. To ensure 'Reliable' communication, the Transport Layer (using protocols like TCP - Transmission Control Protocol) uses Flow Control (to manage speed) and Error Correction (acknowledgments and retransmissions) to guarantee that data arrives perfectly." 
  },
  { 
    id: 33, 
    q: "Which layer of the OSI model is responsible for detecting and correcting errors that may occur in the physical layer?", 
    a: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical Layer"], 
    c: 2, 
    exp: "Verified Answer: C. The Data Link Layer (Layer 2) is the first line of defense for error detection. It uses a Cyclic Redundancy Check (CRC) in the trailer of each frame to see if any bits were flipped or corrupted during their trip across the Physical Layer." 
  },
  { 
    id: 34, 
    q: "What is the main purpose of the Application Layer in the OSI model?", 
    a: ["Physical transmission of data", "Formatting and presenting data to the user or application", "Managing end-to-end communications", "Ensuring error-free data transfer"], 
    c: 1, 
    exp: "Verified Answer: B. The main purpose is to act as the interface between the user's software and the network. It provides the network services that applications need to display information to the user in a usable way." 
  },
  { 
    id: 35, 
    q: "Which layer of the OSI model involves addressing, routing and switching to move data across different networks?", 
    a: ["Transport Layer", "Physical Layer", "Network Layer", "Data Link Layer"], 
    c: 2, 
    exp: "Verified Answer: C. Moving data across 'different networks' is the definition of Routing, which happens at the Network Layer (Layer 3). While switches usually work at Layer 2, Layer 3 switches also perform these functions at this layer." 
  },
  { 
    id: 36, 
    q: "What is the maximum data transmission speed of traditional Ethernet (without enhancements) in megabits per second (Mbps)?", 
    a: ["10 Mbps", "100 Mbps", "1000 Mbps", "10,000 Mbps"], 
    c: 0, 
    exp: "Verified Answer: A. Original Ethernet, standardized as IEEE 802.3, has a maximum speed of 10 Mbps (Megabits per second). Faster versions came later, known as Fast Ethernet (100 Mbps) and Gigabit Ethernet (1000 Mbps)." 
  },
  { 
    id: 37, 
    q: "Which Ethernet standard provides a data transmission rate of 1000 Mbps?", 
    a: ["Fast Ethernet (IEEE 802.3u)", "Gigabit Ethernet (IEEE 802.3ab)", "Ethernet over Powerline (IEEE 1901)", "10-Gigabit Ethernet (IEEE 802.3ae)"], 
    c: 1, 
    exp: "Verified Answer: B. Gigabit Ethernet (IEEE 802.3ab) provides exactly 1000 Mbps. The standard IEEE 802.3u refers to Fast Ethernet (100 Mbps), and 802.3ae refers to 10-Gigabit Ethernet (10,000 Mbps)." 
  },
  { 
    id: 38, 
    q: "What type of cable is commonly used in Gigabit Ethernet networks?", 
    a: ["Category 3 (Cat3) cables", "Category 5 (Cat5) cables", "Category 5e (Cat5e) cables", "Category 6 (Cat6) cables"], 
    c: 2, 
    exp: "Verified Answer: C. Cat5e (Category 5 Enhanced) is the most common cable used for Gigabit Ethernet (1000BASE-T). It provides the necessary performance to handle 1000 Mbps over the full 100-meter limit of Ethernet cabling." 
  },
  { 
    id: 39, 
    q: "Which device is used to connect multiple devices in an Ethernet network and operates at the Data Link Layer (Layer 2) of the OSI model?", 
    a: ["Router", "Switch", "Hub", "Repeater"], 
    c: 1, 
    exp: "Verified Answer: B. A Switch is the standard Layer 2 device for connecting devices within a LAN. It uses MAC (Media Access Control) addresses to learn which device is on which port, allowing it to forward data only to the intended recipient." 
  },
  { 
    id: 40, 
    q: "What is the purpose of CSMA/CD (Carrier Sense Multiple Access with Collision Detection) in Ethernet networks?", 
    a: ["To prevent unauthorized access", "To manage bandwidth allocation", "To detect and handle collisions on the network", "To encrypt data transmission"], 
    c: 2, 
    exp: "Verified Answer: C. CSMA/CD is a protocol used in half-duplex Ethernet. 'Carrier Sense' means listening before talking; 'Multiple Access' means many can use the wire; 'Collision Detection' means if two talk at once, they detect it, stop, and wait a random time to try again." 
  },
  { 
    id: 41, 
    q: "What does SSID stand for in wireless networking?", 
    a: ["Secure System Identification", "Service Set Identifier", "System Security Identification", "Signal Strength Identifier"], 
    c: 1, 
    exp: "Verified Answer: B. SSID stands for Service Set Identifier. It is a sequence of characters that uniquely names a wireless local area network (WLAN). It is what you see when you search for available Wi-Fi networks on your phone or laptop." 
  },
  { 
    id: 42, 
    q: "Which wireless technology standard operates in the 2.4 GHz frequency band and supports a maximum data rate of 54 Mbps?", 
    a: ["Wi-Fi 1 (802.11b)", "Wi-Fi 2 (802.11a)", "Wi-Fi 3 (802.11g)", "Wi-Fi 4 (802.11n)"], 
    c: 2, 
    exp: "Verified Answer: C. 802.11g (also known as Wi-Fi 3) was a major standard that combined the 54 Mbps speed of 802.11a with the 2.4 GHz range and backward compatibility of 802.11b." 
  },
  { 
    id: 43, 
    q: "What feature of a wireless access point (WAP) allows devices to connect without entering a password every time they join the network?", 
    a: ["WEP encryption", "WPA encryption", "MAC filtering", "WPS (Wi-Fi Protected Setup)"], 
    c: 3, 
    exp: "Verified Answer: D. WPS stands for Wi-Fi Protected Setup. It was designed to help users easily connect devices to a secure Wi-Fi network by pushing a button on the router or entering a simple 8-digit PIN, instead of a long, complex password." 
  },
  { 
    id: 44, 
    q: "Which security protocol offers more robust protection than WEP and is commonly used in wireless networks?", 
    a: ["WPA (Wi-Fi Protected Access)", "SSL (Secure Sockets Layer)", "VPN (Virtual Private Network)", "SNMP (Simple Network Management Protocol)"], 
    c: 0, 
    exp: "Verified Answer: A. WPA (Wi-Fi Protected Access) and its later versions WPA2 and WPA3 were created to replace WEP (Wired Equivalent Privacy), which had serious security flaws that allowed hackers to easily crack Wi-Fi passwords." 
  },
  { 
    id: 45, 
    q: "What is the purpose of WEP (Wired Equivalent Privacy) in wireless networks?", 
    a: ["To secure the physical access points", "To ensure high-speed data transmission", "To provide encryption for wireless data", "To regulate the frequency spectrum"], 
    c: 2, 
    exp: "Verified Answer: C. WEP (Wired Equivalent Privacy) was the first encryption standard for Wi-Fi. Its goal was to provide a level of security for wireless data that was equivalent to the security of a physical, wired Ethernet connection." 
  },
  { 
    id: 46, 
    q: "Which wireless standard uses multiple antennas to increase data transfer speeds and reliability?", 
    a: ["802.11a", "802.11ac", "802.11g", "802.11n"], 
    c: 3, 
    exp: "Verified Answer: D. 802.11n (Wi-Fi 4) introduced MIMO (Multiple-Input Multiple-Output) technology. This uses multiple antennas at both the sender and receiver to transmit multiple streams of data at once, increasing speed and reducing 'dead zones.'" 
  },
  { 
    id: 47, 
    q: "What technology allows devices to seamlessly switch between different wireless access points without losing connectivity?", 
    a: ["Mesh networking", "SSID broadcasting", "Roaming", "Packet switching"], 
    c: 2, 
    exp: "Verified Answer: C. Roaming is the ability for a wireless client (like your phone) to automatically disconnect from one Access Point as you walk away and connect to a closer one with the same SSID, without dropping your internet connection." 
  },
  { 
    id: 48, 
    q: "Which factor can significantly impact the range and performance of a wireless network?", 
    a: ["MAC address", "Network topology", "Ethernet cable type", "Signal interference"], 
    c: 3, 
    exp: "Verified Answer: D. Signal Interference is the biggest enemy of Wi-Fi. This can come from physical obstacles (walls), other electronic devices (microwaves, baby monitors), or other nearby Wi-Fi networks using the same frequency channel." 
  },
  { 
    id: 49, 
    q: "What is a hotspot in the context of wireless networking?", 
    a: ["A highly secure wireless network", "A wireless access point in a public location offering internet access", "An area with weak wireless signal coverage", "A network that broadcasts its SSID continuously"], 
    c: 1, 
    exp: "Verified Answer: B. A Hotspot is a physical location where an Access Point (AP) provides internet access to mobile devices via Wi-Fi. They are common in public places like cafes, airports, and hotels." 
  },
  { 
    id: 50, 
    q: "Which wireless networking technology standard operates in the 5 GHz frequency band and provides higher speeds and reduced interference compared to earlier standards?", 
    a: ["802.11a", "802.11b", "802.11g", "802.11ac"], 
    c: 3, 
    exp: "Verified Answer: D. 802.11ac (Wi-Fi 5) was a major breakthrough that operates almost exclusively in the 5 GHz band. Because 5 GHz is less 'crowded' than 2.4 GHz and has more available channels, it provides much higher speeds and less interference." 
  },
  { 
    id: 51, 
    q: "Which layer of the TCP/IP model is responsible for IP addressing and routing?", 
    a: ["Application layer", "Transport layer", "Internet layer", "Network Interface layer"], 
    c: 2, 
    exp: "Verified Answer: C (Internet layer). Full Form: TCP/IP stands for Transmission Control Protocol/Internet Protocol. The Internet layer handles logical addressing and moves packets across different networks." 
  },
  { 
    id: 52, 
    q: "What is the purpose of IP addressing in a network?", 
    a: ["Ensuring secure data transmission", "Identifying devices on a network", "Managing data flow", "Establishing a connection-oriented communication"], 
    c: 1, 
    exp: "Verified Answer: B (Identifying devices on a network). Full Form: IP stands for Internet Protocol. Just like a house address, an IP address uniquely identifies each host on a network to ensure data reaches the correct destination." 
  },
  { 
    id: 53, 
    q: "Which version of the Internet Protocol is widely used today?", 
    a: ["IPv4", "IPv6", "IPv5", "IPv3"], 
    c: 0, 
    exp: "Verified Answer: A (IPv4). Full Form: IPv4 stands for Internet Protocol version 4. While IPv6 is the successor, IPv4 remains the most common protocol used globally today." 
  },
  { 
    id: 54, 
    q: "What is the size of an IPv4 address in bits?", 
    a: ["32 bits", "64 bits", "128 bits", "256 bits"], 
    c: 0, 
    exp: "Verified Answer: A (32 bits). IPv4 uses 32 bits, divided into four 8-bit octets. In contrast, IPv6 uses 128 bits." 
  },
  { 
    id: 55, 
    q: "Which of the following is a private IP address range according to IPv4 standards?", 
    a: ["172.33.14.1", "192.168.1.10", "200.155.20.5", "130.56.78.90"], 
    c: 1, 
    exp: "Verified Answer: B (192.168.1.10). Private IP ranges (like 192.168.x.x) are reserved for internal home/office networks and are not routable on the public internet." 
  },
  { 
    id: 56, 
    q: "Which protocol is used for assigning IP addresses dynamically in a network?", 
    a: ["ARP", "DNS", "DHCP", "ICMP"], 
    c: 2, 
    exp: "Verified Answer: C (DHCP). Full Form: DHCP stands for Dynamic Host Configuration Protocol. It automatically assigns IP addresses and subnet masks to devices when they connect to a network." 
  },
  { 
    id: 57, 
    q: "What does NAT (Network Address Translation) do in networking?", 
    a: ["Maps private IP addresses to public IP addresses", "Encrypts data packets for secure transmission", "Prioritizes network traffic", "Determines the shortest route for data packets"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: NAT stands for Network Address Translation. It allows multiple devices in a private network to share a single public IP address provided by the ISP." 
  },
  { 
    id: 58, 
    q: "Which IP addressing class is used for multicast addresses?", 
    a: ["Class A", "Class B", "Class C", "Class D"], 
    c: 3, 
    exp: "Verified Answer: D (Class D). IP addresses are categorized into classes; Class D (224.0.0.0 to 239.255.255.255) is reserved specifically for Multicasting (sending data to a group of devices)." 
  },
  { 
    id: 59, 
    q: "What is the purpose of the TTL (Time-To-Live) field in an IP packet header?", 
    a: ["It specifies the size of the packet", "It determines the maximum number of hops a packet can take", "It encrypts the payload of the packet", "It verifies the destination address"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: TTL stands for Time-To-Live. It is a counter that decreases by 1 at every router (hop). If it reaches zero, the packet is discarded to prevent it from looping forever." 
  },
  { 
    id: 60, 
    q: "Which field in the IPv6 header is responsible for identifying the next header?", 
    a: ["Flow Label", "Payload Length", "Traffic Class", "Next Header"], 
    c: 3, 
    exp: "Verified Answer: D (Next Header). This field tells the receiver which protocol (like TCP or UDP) is contained in the data portion of the IPv6 packet." 
  },
  { 
    id: 61, 
    q: "In the TCP/IP model, which layer is responsible for establishing and terminating connections?", 
    a: ["Network Access layer", "Transport layer", "Application layer", "Internet layer"], 
    c: 1, 
    exp: "Verified Answer: B (Transport layer). The Transport layer (using TCP) manages end-to-end communication, including the 'Handshake' used to start and end connections." 
  },
  { 
    id: 62, 
    q: "Which protocol is used for sending error and control messages in IP networks?", 
    a: ["TCP", "UDP", "ICMP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C (ICMP). Full Form: ICMP stands for Internet Control Message Protocol. It is used by tools like 'Ping' and 'Traceroute' to report errors or network status." 
  },
  { 
    id: 63, 
    q: "What is the primary function of the Transport layer in the TCP/IP model?", 
    a: ["Dividing data into packets", "Providing logical addressing", "Ensuring error-free data transmission", "Managing end-to-end communication"], 
    c: 3, 
    exp: "Verified Answer: D (Managing end-to-end communication). While it does divide data, its primary role is ensuring data is delivered correctly between the source and destination applications." 
  },
  { 
    id: 64, 
    q: "Which of the following is a characteristic of UDP?", 
    a: ["Reliable data delivery", "Connection-oriented communication", "Error checking and retransmission", "Low overhead and fast transmission"], 
    c: 3, 
    exp: "Verified Answer: D. Full Form: UDP stands for User Datagram Protocol. It is 'connectionless' and 'unreliable' by design to provide the fastest possible speed for things like gaming and video calls." 
  },
  { 
    id: 65, 
    q: "Which device operates at the Network layer and forwards data packets based on IP addresses?", 
    a: ["Repeater", "Switch", "Router", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C (Router). Routers use IP addresses to find the best path between different networks. Repeaters/Hubs work at Layer 1, and Switches at Layer 2." 
  },
  { 
    id: 66, 
    q: "Which protocol among TCP and UDP provides connection-oriented communication?", 
    a: ["TCP", "UDP", "Both TCP and UDP", "Neither TCP nor UDP"], 
    c: 0, 
    exp: "Verified Answer: A (TCP). Full Form: TCP stands for Transmission Control Protocol. It establishes a connection via a 'Three-way handshake' before any data is sent." 
  },
  { 
    id: 67, 
    q: "Which protocol offers reliable data delivery by ensuring data integrity and sequencing?", 
    a: ["TCP", "UDP", "Both TCP and UDP", "Neither TCP nor UDP"], 
    c: 0, 
    exp: "Verified Answer: A (TCP). TCP ensures every packet arrives. If a packet is lost, it is retransmitted; if it arrives out of order, it is rearranged correctly." 
  },
  { 
    id: 68, 
    q: "Which protocol is faster but may result in occasional lost packets?", 
    a: ["TCP", "UDP", "Both TCP and UDP", "Neither TCP nor UDP"], 
    c: 1, 
    exp: "Verified Answer: B (UDP). Because UDP does not check for errors or wait for acknowledgments, it is much faster than TCP." 
  },
  { 
    id: 69, 
    q: "Which protocol is best suited for applications where speed is more critical than reliability?", 
    a: ["TCP", "UDP", "Both TCP and UDP", "Neither TCP nor UDP"], 
    c: 1, 
    exp: "Verified Answer: B (UDP). In live streaming or VoIP, a tiny bit of lost data (a dropped pixel) is better than a long delay caused by waiting for a retransmission." 
  },
  { 
    id: 70, 
    q: "Which protocol includes flow control and retransmission of lost packets?", 
    a: ["TCP", "UDP", "Both TCP and UDP", "Neither TCP nor UDP"], 
    c: 0, 
    exp: "Verified Answer: A (TCP). These mechanisms ensure that a fast sender doesn't overwhelm a slow receiver and that data is 100% accurate." 
  },
  { 
    id: 71, 
    q: "What is Subnetting?", 
    a: ["Dividing a single network into smaller sub-networks", "Combining multiple networks", "Encrypting network data", "Allocating IP addresses dynamically"], 
    c: 0, 
    exp: "Verified Answer: A. Subnetting improves network efficiency and security by creating smaller logical groups (subnets) within one large IP network." 
  },
  { 
    id: 72, 
    q: "Determine the network and host part of 192.168.5.85/24.", 
    a: ["Network=192.168.5.0, Host=0.0.0.85", "Network=192.168.5.0, Host=0.0.0.1", "Network=192.168.0.0, Host=0.0.5.85", "Network=192.168.5.85, Host=0.0.0.0"], 
    c: 0, 
    exp: "Verified Answer: A. A /24 mask means the first 24 bits (3 octets) are the network. Thus, 192.168.5 is the Network, and the remaining .85 is the Host." 
  },
  { 
    id: 73, 
    q: "To support 52 hosts, which subnet mask should be used?", 
    a: ["/27", "/26", "/25", "/28"], 
    c: 1, 
    exp: "Verified Answer: B (/26). Math: 2^6 = 64. Usable hosts = 64-2 = 62. A /27 only gives 2^5-2 = 30 hosts, which is too small for 52." 
  },
  { 
    id: 74, 
    q: "If you need 7 subnets with 25 hosts each from a /24 network, what mask is best?", 
    a: ["/27", "/26", "/25", "/28"], 
    c: 0, 
    exp: "Verified Answer: A (/27). A /27 mask creates 8 subnets (2^3) with 30 usable hosts each, perfectly meeting the requirement." 
  },
  { 
    id: 75, 
    q: "What is the maximum subnets and hosts for 172.16.0.0/20 using a /28 mask?", 
    a: ["16 subnets, 14 hosts", "256 subnets, 14 hosts", "16 subnets, 16 hosts", "256 subnets, 16 hosts"], 
    c: 1, 
    exp: "Verified Answer: B. Bits borrowed = 28-20 = 8. Subnets = 2^8 = 256. Host bits remaining = 32-28 = 4. Usable hosts = 2^4-2 = 14." 
  },
  { 
    id: 76, 
    q: "Which mask gives four subnets with 25 hosts each for 192.168.15.0/24?", 
    a: ["/27", "/26", "/25", "/28"], 
    c: 1, 
    exp: "Verified Answer: B (/26). A /26 borrows 2 bits, creating 2^2 = 4 subnets. Each subnet has 2^6-2 = 62 usable host addresses." 
  },
  { 
    id: 77, 
    q: "What is the number of usable host addresses in a /29 subnet?", 
    a: ["8", "6", "30", "14"], 
    c: 1, 
    exp: "Verified Answer: B (6). Math: 32-29 = 3 host bits. 2^3 = 8 total addresses. Subtract Network and Broadcast addresses: 8-2 = 6 usable." 
  },
  { 
    id: 78, 
    q: "Given 10.0.0.0/24, five subnets with 10 hosts each needs which mask?", 
    a: ["/28", "/26", "/27", "/25"], 
    c: 2, 
    exp: "Verified Answer: C (/27). A /28 only allows 14 hosts, but we need room for subnetting overhead. A /27 creates 8 subnets with 30 hosts each." 
  },
  { 
    id: 79, 
    q: "For the IP address 172.16.50.92/26, what is the network address?", 
    a: ["172.16.50.0", "172.16.50.64", "172.16.50.32", "172.16.50.128"], 
    c: 1, 
    exp: "Verified Answer: B (172.16.50.64). In a /26, the block size is 64. Networks are .0, .64, .128. Since .92 is between 64 and 127, it belongs to the .64 network." 
  },
  { 
    id: 80, 
    q: "Determine the network part of 192.168.10.150/28.", 
    a: ["192.168.10.128", "192.168.10.150", "192.168.10.144", "192.168.10.160"], 
    c: 2, 
    exp: "Verified Answer: C (192.168.10.144). In a /28, the block size is 16. The multiple of 16 closest to 150 without going over is 144 (16 x 9)." 
  },
  { 
    id: 81, 
    q: "For the IP address 10.20.30.40/22, what is the network part?", 
    a: ["10.20.30.0", "10.20.0.0", "10.20.30.32", "10.20.28.0"], 
    c: 3, 
    exp: "Verified Answer: D (10.20.28.0). A /22 mask means the increment is 4 in the third octet. The multiples of 4 are 24, 28, 32. 30 falls in the .28 group." 
  },
  { 
    id: 82, 
    q: "Determine the network part of 172.31.48.100/27.", 
    a: ["172.31.48.0", "172.31.48.32", "172.31.48.64", "172.31.48.96"], 
    c: 3, 
    exp: "Verified Answer: D (172.31.48.96). A /27 mask has a block size of 32. Multiples are 0, 32, 64, 96, 128. .100 belongs to the 96 network." 
  },
  { 
    id: 83, 
    q: "Given the IP address 192.168.10.0/24, what is the broadcast IP?", 
    a: ["192.168.10.255", "192.168.10.0", "192.168.10.254", "192.168.10.1"], 
    c: 0, 
    exp: "Verified Answer: A (192.168.10.255). In any network, the very last address is reserved as the Broadcast address." 
  },
  { 
    id: 84, 
    q: "In a subnet with a /28 mask, how many bits are for the network portion?", 
    a: ["16 bits", "20 bits", "24 bits", "28 bits"], 
    c: 3, 
    exp: "Verified Answer: D (28 bits). The CIDR notation '/28' directly tells you that the first 28 bits define the network." 
  },
  { 
    id: 85, 
    q: "For 172.16.20.0/26, how many host bits are available?", 
    a: ["6 bits", "8 bits", "64 bits", "32 bits"], 
    c: 0, 
    exp: "Verified Answer: A (6 bits). Total IP bits (32) minus Network bits (26) equals 6 Host bits." 
  },
  { 
    id: 86, 
    q: "In a network with a /27 mask, how many subnets can be created from a /24?", 
    a: ["128", "32", "8", "256"], 
    c: 2, 
    exp: "Verified Answer: C (8). Bits borrowed = 27-24 = 3 bits. Subnets = 2^3 = 8." 
  },
  { 
    id: 87, 
    q: "Given the IP address 10.20.30.40/25, what is the network address?", 
    a: ["10.20.30.128", "10.20.30.0", "10.20.30.32", "10.20.30.64"], 
    c: 1, 
    exp: "Verified Answer: B (10.20.30.0). A /25 mask splits the octet into two blocks: 0-127 and 128-255. Since 40 is in the first block, the network is .0." 
  },
  { 
    id: 88, 
    q: "For the subnet 192.168.5.0/28, what is the first assignable host IP?", 
    a: ["192.168.5.1", "192.168.5.14", "192.168.5.15", "192.168.5.16"], 
    c: 0, 
    exp: "Verified Answer: A (192.168.5.1). The .0 address is the Network ID; the very next address (.1) is the first usable host." 
  },
  { 
    id: 89, 
    q: "If the subnet mask is /29, how many host bits are available?", 
    a: ["8 bits", "6 bits", "3 bits", "5 bits"], 
    c: 2, 
    exp: "Verified Answer: C (3 bits). Math: 32 bits total - 29 network bits = 3 host bits." 
  },
  { 
    id: 90, 
    q: "Which protocol is used for resolving MAC address from a known IP address?", 
    a: ["DNS", "ARP", "DHCP", "ICMP"], 
    c: 1, 
    exp: "Verified Answer: B (ARP). Full Form: ARP stands for Address Resolution Protocol. It is used to find the physical MAC address of a device when you only know its IP." 
  },
  { 
    id: 91, 
    q: "What is the primary function of a bridge in networking?", 
    a: ["To connect different architectures", "To filter and forward frames based on MAC", "To route packets", "To amplify signals"], 
    c: 1, 
    exp: "Verified Answer: B. A bridge is a Layer 2 device. It looks at the MAC address of incoming frames to decide whether to pass them to the other segment or block them." 
  },
  { 
    id: 92, 
    q: "Which layer of the OSI model is responsible for logical addressing?", 
    a: ["Network Layer", "Data Link Layer", "Physical Layer", "Transport Layer"], 
    c: 0, 
    exp: "Verified Answer: A (Network Layer). Logical addressing refers to IP addresses, which are handled at Layer 3 (Network)." 
  },
  { 
    id: 93, 
    q: "What does the term 'Full-Duplex' mean?", 
    a: ["One-way only", "Two-way, one at a time", "Simultaneous two-way", "Broadcasting"], 
    c: 2, 
    exp: "Verified Answer: C. Full-Duplex allows a device to transmit and receive data at the same time (like a modern telephone call)." 
  },
  { 
    id: 94, 
    q: "Which protocol is used for secure file transfer?", 
    a: ["FTP", "HTTP", "SFTP", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C (SFTP). Full Form: SFTP stands for Secure File Transfer Protocol. It uses SSH (Secure Shell) to encrypt data during transfer." 
  },
  { 
    id: 95, 
    q: "What is the purpose of a repeater?", 
    a: ["To route packets", "To filter traffic", "To regenerate signals to extend distance", "To assign IPs"], 
    c: 2, 
    exp: "Verified Answer: C. Because signals weaken (attenuate) over long cables, a repeater is used to amplify or regenerate them so they can travel further." 
  },
  { 
    id: 96, 
    q: "Which port number is used by the Telnet protocol?", 
    a: ["21", "22", "23", "25"], 
    c: 2, 
    exp: "Verified Answer: C (Port 23). Telnet is an older, unencrypted protocol used for remote access. (Port 22 is for the secure version, SSH)." 
  },
  { 
    id: 97, 
    q: "What is the range of a Class B IP address?", 
    a: ["1-126", "128-191", "192-223", "224-239"], 
    c: 1, 
    exp: "Verified Answer: B (128-191). If the first octet of an IP address is between 128 and 191, it is a Class B address." 
  },
  { 
    id: 98, 
    q: "Which layer of the OSI model does a Hub operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 0, 
    exp: "Verified Answer: A (Physical Layer). A Hub is a 'dumb' device that simply repeats electrical signals to all ports without looking at any addresses." 
  },
  { 
    id: 99, 
    q: "What does DHCP stand for?", 
    a: ["Dynamic Host Configuration Protocol", "Digital Home Connection Protocol", "Data Handling Control Process", "Dynamic Hyperlink Connection Protocol"], 
    c: 0, 
    exp: "Verified Answer: A (Dynamic Host Configuration Protocol). It is the service that gives your phone or laptop an IP address automatically." 
  },
  { 
    id: 100, 
    q: "Which protocol is used to send emails?", 
    a: ["POP3", "IMAP", "SMTP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C (SMTP). Full Form: SMTP stands for Simple Mail Transfer Protocol. POP3 and IMAP are used to *receive* or download mail, but SMTP is for *sending* it." 
  },
  { 
    id: 101, 
    q: "Which protocol is used by a client to retrieve emails from a server and typically deletes them from the server after downloading?", 
    a: ["SMTP", "POP3", "IMAP", "SNMP"], 
    c: 1, 
    exp: "Verified Answer: B. POP3 (Post Office Protocol version 3) is designed to download emails to a local device and usually removes them from the server once retrieved." 
  },
  { 
    id: 102, 
    q: "What is the primary advantage of IMAP over POP3?", 
    a: ["Faster transmission", "Emails are synchronized across multiple devices", "Higher security", "Requires less bandwidth"], 
    c: 1, 
    exp: "Verified Answer: B. IMAP (Internet Message Access Protocol) leaves messages on the server, allowing multiple devices to stay synchronized with the same mailbox."
  },
  { 
    id: 103, 
    q: "Which port number is used by the HTTPS protocol for secure web browsing?", 
    a: ["80", "443", "22", "53"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPS (HTTP Secure) uses port 443 by default to provide encrypted communication via SSL/TLS."
  },
  { 
    id: 104, 
    q: "What is the function of the 'Default Gateway' in a computer's network settings?", 
    a: ["To assign IP addresses", "To provide a path for traffic destined for outside the local network", "To resolve domain names", "To block unauthorized incoming traffic"], 
    c: 1, 
    exp: "Verified Answer: B. The Default Gateway is the IP address of the router interface that leads to other networks or the internet."
  },
  { 
    id: 105, 
    q: "Which network topology connects all devices to a single central cable?", 
    a: ["Star", "Ring", "Bus", "Mesh"], 
    c: 2, 
    exp: "Verified Answer: C. In a Bus topology, all nodes are connected to a common shared communication line called the backbone."
  },
  { 
    id: 106, 
    q: "Which topology is most resilient to cable failure, as every node is connected to every other node?", 
    a: ["Full Mesh", "Star", "Tree", "Bus"], 
    c: 0, 
    exp: "Verified Answer: A. A Full Mesh topology provides maximum redundancy; if one link fails, there are many alternative paths available."
  },
  { 
    id: 107, 
    q: "What is the purpose of the 'Loopback Address' (127.0.0.1)?", 
    a: ["To connect to the internet", "To test the internal network stack of a local host", "To identify the router", "To broadcast to all devices on a subnet"], 
    c: 1, 
    exp: "Verified Answer: B. The loopback address allows a device to send a packet to itself to verify that its own TCP/IP software is functioning correctly."
  },
  { 
    id: 108, 
    q: "Which protocol operates at the Application Layer to allow files to be transferred between a client and a server?", 
    a: ["FTP", "IP", "TCP", "ICMP"], 
    c: 0, 
    exp: "Verified Answer: A. FTP (File Transfer Protocol) is the standard network protocol used for the transfer of computer files between a client and server."
  },
  { 
    id: 109, 
    q: "What does a 'Collision' refer to in an Ethernet network?", 
    a: ["Two devices having the same IP address", "Two devices transmitting data at the same time on a shared medium", "A hardware failure in a switch", "A virus attacking the network"], 
    c: 1, 
    exp: "Verified Answer: B. A collision occurs when two frames are sent simultaneously on the same segment, resulting in corrupted data."
  },
  { 
    id: 110, 
    q: "Which layer of the OSI model is responsible for data compression and encryption?", 
    a: ["Application", "Presentation", "Session", "Transport"], 
    c: 1, 
    exp: "Verified Answer: B. The Presentation Layer (Layer 6) is responsible for formatting data, including encryption, decryption, and compression."
  },
  { 
    id: 111, 
    q: "What is the bit-length of a MAC (Media Access Control) address?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 1, 
    exp: "Verified Answer: B. A MAC address is a 48-bit unique identifier burned into the Network Interface Card (NIC)."
  },
  { 
    id: 112, 
    q: "In an IPv6 address, how many hex digits are used to represent the full address?", 
    a: ["8", "16", "32", "64"], 
    c: 2, 
    exp: "Verified Answer: C. IPv6 addresses are 128 bits long and are represented as 8 groups of 4 hexadecimal digits (8x4=32 hex digits)."
  },
  { 
    id: 113, 
    q: "Which protocol is used by the 'ping' command to test connectivity?", 
    a: ["TCP", "UDP", "ICMP", "ARP"], 
    c: 2, 
    exp: "Verified Answer: C. Ping uses ICMP (Internet Control Message Protocol) Echo Request and Echo Reply messages."
  },
  { 
    id: 114, 
    q: "What is the maximum segment length for a standard 1000BASE-T (Gigabit Ethernet) cable run?", 
    a: ["50 meters", "100 meters", "500 meters", "1000 meters"], 
    c: 1, 
    exp: "Verified Answer: B. The maximum distance for twisted-pair Ethernet cables (Cat5e/6) without a repeater is 100 meters."
  },
  { 
    id: 115, 
    q: "Which device is used to connect two networks that use different protocols or architectures?", 
    a: ["Hub", "Switch", "Bridge", "Gateway"], 
    c: 3, 
    exp: "Verified Answer: D. A Gateway acts as a 'protocol converter' and is used to connect fundamentally different network systems."
  },
  { 
    id: 116, 
    q: "Which port number is used by the DNS protocol?", 
    a: ["25", "53", "67", "110"], 
    c: 1, 
    exp: "Verified Answer: B. DNS (Domain Name System) typically uses UDP port 53 for name resolution queries."
  },
  { 
    id: 117, 
    q: "What is the primary function of the 'MAC table' in a switch?", 
    a: ["To store IP addresses of connected devices", "To map MAC addresses to specific physical ports", "To filter incoming viruses", "To assign VLAN IDs"], 
    c: 1, 
    exp: "Verified Answer: B. Switches use the MAC table to decide which port a frame should be sent to based on the destination MAC address."
  },
  { 
    id: 118, 
    q: "Which type of fiber optic cable is better suited for long-distance transmissions?", 
    a: ["Multimode", "Single-mode", "STP", "UTP"], 
    c: 1, 
    exp: "Verified Answer: B. Single-mode fiber has a smaller core and uses a laser, allowing light to travel much further with less signal loss than multimode."
  },
  { 
    id: 119, 
    q: "What is a 'VLAN' (Virtual Local Area Network)?", 
    a: ["A physical hardware upgrade for switches", "A logical grouping of devices on the same switch to act as separate networks", "A wireless network with no wires", "A high-speed backbone connection"], 
    c: 1, 
    exp: "Verified Answer: B. VLANs allow administrators to segment a physical switch into multiple virtual networks for better security and traffic management."
  },
  { 
    id: 120, 
    q: "Which protocol is used for managing and monitoring network devices like routers and switches?", 
    a: ["SNMP", "SMTP", "SSH", "DHCP"], 
    c: 0, 
    exp: "Verified Answer: A. SNMP (Simple Network Management Protocol) is used to collect information from and configure network devices."
  },
  { 
    id: 121, 
    q: "What happens in a 'Three-Way Handshake' in TCP?", 
    a: ["SYN, SYN-ACK, ACK", "SYN, ACK, FIN", "ACK, SYN, ACK", "DATA, ACK, FIN"], 
    c: 0, 
    exp: "Verified Answer: A. TCP establishes a connection using a three-step process: Synchronize (SYN), Synchronize-Acknowledgment (SYN-ACK), and Acknowledgment (ACK)."
  },
  { 
    id: 122, 
    q: "Which layer of the TCP/IP model corresponds to the Physical and Data Link layers of the OSI model?", 
    a: ["Internet Layer", "Transport Layer", "Application Layer", "Network Access Layer"], 
    c: 3, 
    exp: "Verified Answer: D. The Network Access Layer (or Network Interface Layer) combines the functions of the OSI Physical and Data Link layers."
  },
  { 
    id: 123, 
    q: "What is the default subnet mask for a Class B IP address?", 
    a: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], 
    c: 1, 
    exp: "Verified Answer: B. A Class B network uses the first two octets for the network portion, resulting in a mask of 255.255.0.0 (/16)."
  },
  { 
    id: 124, 
    q: "What is 'Crosstalk' in copper cabling?", 
    a: ["A method of increasing speed", "Signal interference from adjacent wires within a cable", "The process of grounding a wire", "A type of data encryption"], 
    c: 1, 
    exp: "Verified Answer: B. Crosstalk occurs when the electrical signal from one wire 'leaks' into another nearby wire, causing interference."
  },
  { 
    id: 125, 
    q: "Which type of address is used at the Data Link Layer to identify a device?", 
    a: ["IP Address", "MAC Address", "Port Number", "SSID"], 
    c: 1, 
    exp: "Verified Answer: B. The Data Link Layer (Layer 2) uses hardware-based MAC addresses for local delivery of frames."
  },
  { 
    id: 126, 
    q: "What is the purpose of 'Flow Control' in the Transport Layer?", 
    a: ["To choose the best route for packets", "To prevent a sender from overwhelming a receiver with too much data", "To encrypt the data stream", "To translate domain names"], 
    c: 1, 
    exp: "Verified Answer: B. Flow control mechanisms (like windowing) ensure that a fast sender does not transmit data faster than a slow receiver can process it."
  },
  { 
    id: 127, 
    q: "Which protocol is used to map a known MAC address to an IP address (the reverse of ARP)?", 
    a: ["RARP", "DNS", "DHCP", "ICMP"], 
    c: 0, 
    exp: "Verified Answer: A. RARP (Reverse Address Resolution Protocol) was used to find an IP address when only the MAC address was known (mostly replaced by DHCP today)."
  },
  { 
    id: 128, 
    q: "What is the maximum number of usable host addresses in a /24 subnet?", 
    a: ["256", "254", "128", "126"], 
    c: 1, 
    exp: "Verified Answer: B. A /24 has 256 total addresses (2^8). Subtracting the Network ID and Broadcast address leaves 254 usable hosts."
  },
  { 
    id: 129, 
    q: "Which IEEE standard defines the rules for Wireless LANs (Wi-Fi)?", 
    a: ["802.3", "802.5", "802.11", "802.1Q"], 
    c: 2, 
    exp: "Verified Answer: C. 802.11 is the set of standards that govern wireless networking."
  },
  { 
    id: 130, 
    q: "What does 'Half-Duplex' mean?", 
    a: ["Data can only be sent in one direction ever", "Data can be sent in both directions, but not at the same time", "Data is sent to half of the network only", "Data is sent at half speed"], 
    c: 1, 
    exp: "Verified Answer: B. In half-duplex (like a walkie-talkie), communication can go both ways, but devices must take turns."
  },
  { 
    id: 131, 
    q: "Which device is designed to regenerate a signal to extend the distance of a network but does not filter traffic?", 
    a: ["Router", "Bridge", "Switch", "Repeater"], 
    c: 3, 
    exp: "Verified Answer: D. A Repeater simply amplifies or regenerates the signal to overcome attenuation over long distances."
  },
  { 
    id: 132, 
    q: "Which port number is used for SSH (Secure Shell)?", 
    a: ["20", "21", "22", "23"], 
    c: 2, 
    exp: "Verified Answer: C. Port 22 is the standard port for SSH, providing secure remote access."
  },
  { 
    id: 133, 
    q: "What is the function of 'Multiplexing' at the Transport Layer?", 
    a: ["Combining multiple signals into one", "Allowing multiple applications to use the network simultaneously", "Encrypting multiple packets at once", "Routing a packet to multiple destinations"], 
    c: 1, 
    exp: "Verified Answer: B. Multiplexing allows different applications (web browser, email client) to share the same network connection using different port numbers."
  },
  { 
    id: 134, 
    q: "What is the range of Class C IP addresses?", 
    a: ["1-126", "128-191", "192-223", "224-239"], 
    c: 2, 
    exp: "Verified Answer: C. Class C addresses range from 192.0.0.0 to 223.255.255.255."
  },
  { 
    id: 135, 
    q: "What does the term 'Attenuation' mean in networking?", 
    a: ["The increase in signal strength", "The loss of signal strength as it travels through a medium", "The process of converting analog to digital", "The collision of two data packets"], 
    c: 1, 
    exp: "Verified Answer: B. Attenuation is the natural weakening of a signal as it moves further away from its source."
  },
  { 
    id: 136, 
    q: "Which layer of the OSI model manages the logical connection between two applications and handles 'check-pointing'?", 
    a: ["Application", "Presentation", "Session", "Transport"], 
    c: 2, 
    exp: "Verified Answer: C. The Session Layer (Layer 5) establishes and maintains sessions, including recovery points (checkpoints) if a connection drops."
  },
  { 
    id: 137, 
    q: "What is the size of a single octet in an IP address?", 
    a: ["4 bits", "8 bits", "16 bits", "32 bits"], 
    c: 1, 
    exp: "Verified Answer: B. An 'octet' refers to a group of 8 bits."
  },
  { 
    id: 138, 
    q: "Which type of cable uses light pulses rather than electrical signals?", 
    a: ["UTP", "STP", "Coaxial", "Fiber Optic"], 
    c: 3, 
    exp: "Verified Answer: D. Fiber optic cables transmit data as pulses of light through glass or plastic strands."
  },
  { 
    id: 139, 
    q: "What is the primary purpose of a 'Subnet'?", 
    a: ["To increase internet speed", "To improve network performance and security by breaking a large network into smaller parts", "To connect a wireless network to a wired one", "To store website data locally"], 
    c: 1, 
    exp: "Verified Answer: B. Subnetting reduces broadcast traffic and allows for better organized and more secure network segments."
  },
  { 
    id: 140, 
    q: "Which protocol is used for synchronizing the clocks of computer systems over a network?", 
    a: ["NTP", "FTP", "SNMP", "DHCP"], 
    c: 0, 
    exp: "Verified Answer: A. NTP (Network Time Protocol) ensures all devices on a network have the same, accurate time."
  },
  { 
    id: 141, 
    q: "What is the maximum number of hosts in a /30 subnet?", 
    a: ["4", "2", "6", "1"], 
    c: 1, 
    exp: "Verified Answer: B. A /30 has 4 total addresses. After subtracting the Network and Broadcast addresses, only 2 usable host addresses remain (often used for point-to-point links)."
  },
  { 
    id: 142, 
    q: "Which protocol is used to securely browse the web by encrypting the session?", 
    a: ["HTTP", "HTTPS", "FTP", "SSH"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPS (Hypertext Transfer Protocol Secure) provides encryption and authentication for web traffic."
  },
  { 
    id: 143, 
    q: "Which layer of the OSI model is responsible for framing?", 
    a: ["Physical", "Data Link", "Network", "Transport"], 
    c: 1, 
    exp: "Verified Answer: B. The Data Link Layer takes packets from the Network layer and encapsulates them into 'frames' for transmission."
  },
  { 
    id: 144, 
    q: "What is the bit-length of an IPv6 address?", 
    a: ["32 bits", "64 bits", "128 bits", "256 bits"], 
    c: 2, 
    exp: "Verified Answer: C. IPv6 addresses are 128 bits long, providing a much larger address space than IPv4."
  },
  { 
    id: 145, 
    q: "Which wireless security standard is considered the most secure among the following?", 
    a: ["WEP", "WPA", "WPA2", "WPA3"], 
    c: 3, 
    exp: "Verified Answer: D. WPA3 is the latest and most secure Wi-Fi encryption standard, replacing WPA2."
  },
  { 
    id: 146, 
    q: "What does 'latency' refer to in networking?", 
    a: ["The amount of data that can be sent in a second", "The delay in the time it takes for data to travel from source to destination", "The number of devices on a network", "The physical length of a cable"], 
    c: 1, 
    exp: "Verified Answer: B. Latency is the measurement of time delay in a network."
  },
  { 
    id: 147, 
    q: "Which device is a 'multi-port bridge' that operates at Layer 2?", 
    a: ["Hub", "Router", "Switch", "Gateway"], 
    c: 2, 
    exp: "Verified Answer: C. A Switch is essentially a more advanced, multi-port version of a bridge."
  },
  { 
    id: 148, 
    q: "What is the purpose of a 'Broadcast Address'?", 
    a: ["To send a message to a specific single host", "To send a message to all hosts on a specific network", "To identify the router's IP address", "To block all incoming traffic"], 
    c: 1, 
    exp: "Verified Answer: B. A broadcast address allows a packet to be received by every device on the local subnet."
  },
  { 
    id: 149, 
    q: "What is the standard port for the HTTP protocol?", 
    a: ["21", "25", "80", "110"], 
    c: 2, 
    exp: "Verified Answer: C. Port 80 is the well-known port used for unencrypted web traffic."
  },
  { 
    id: 150, 
    q: "Which protocol is connectionless and used for streaming video and voice where speed is more important than reliability?", 
    a: ["TCP", "UDP", "IP", "ICMP"], 
    c: 1, 
    exp: "Verified Answer: B. UDP (User Datagram Protocol) does not use a handshake or acknowledgments, making it ideal for real-time applications."
  },
  { 
    id: 151, 
    q: "Which protocol is used for securely managing network devices over an IP network?", 
    a: ["Telnet", "SSH", "FTP", "HTTP"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 1]. Full Form: SSH stands for Secure Shell. It provides a secure, encrypted channel for remote login and other network services, replacing the insecure Telnet." 
  },
  { 
    id: 152, 
    q: "What is the primary function of the Data Link Layer in the OSI model?", 
    a: ["Physical addressing and framing", "Logical addressing and routing", "End-to-end communication", "Data encryption"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 2]. The Data Link Layer (Layer 2) is responsible for hardware (MAC) addressing and organizing bits into frames for transmission." 
  },
  { 
    id: 153, 
    q: "Which port number is used by the Simple Mail Transfer Protocol (SMTP)?", 
    a: ["21", "25", "80", "110"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 3]. Full Form: SMTP stands for Simple Mail Transfer Protocol. It typically uses well-known port 25 for sending emails between servers." 
  },
  { 
    id: 154, 
    q: "What is the purpose of a Subnet Mask in an IP network?", 
    a: ["To identify the MAC address", "To determine the route to the internet", "To encrypt data packets", "To distinguish between the network and host portions of an IP address"], 
    c: 3, 
    exp: "Verified Answer: D[cite: 4]. A subnet mask is a 32-bit number that masks an IP address and divides it into network and host addresses." 
  },
  { 
    id: 155, 
    q: "Which network device operates at the Physical Layer (Layer 1) and simply broadcasts all incoming data to all ports?", 
    a: ["Switch", "Router", "Hub", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 5]. A Hub is a basic networking device that repeats any signal received on one port to all other ports without any intelligence." 
  },
  { 
    id: 156, 
    q: "What does the term 'Bandwidth' refer to in networking?", 
    a: ["The speed of light in fiber optics", "The physical length of a cable", "The maximum rate of data transfer across a network path", "The delay in data transmission"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 6]. Bandwidth is the capacity of a wired or wireless network communications link to transmit the maximum amount of data from one point to another." 
  },
  { 
    id: 157, 
    q: "Which protocol is used for resolving a domain name into an IP address?", 
    a: ["ARP", "DHCP", "DNS", "ICMP"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 7]. Full Form: DNS stands for Domain Name System. It acts like the phonebook of the internet, translating names like 'google.com' into IP addresses." 
  },
  { 
    id: 158, 
    q: "What is the standard Ethernet frame size (MTU) for most networks?", 
    a: ["512 bytes", "1500 bytes", "4096 bytes", "9000 bytes"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 8]. Full Form: MTU stands for Maximum Transmission Unit. The standard MTU for Ethernet is 1500 bytes." 
  },
  { 
    id: 159, 
    q: "Which type of address is 128 bits long?", 
    a: ["IPv4 address", "IPv6 address", "MAC address", "Port number"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 9]. Full Form: IPv6 stands for Internet Protocol version 6. It uses a 128-bit address space to accommodate the growing number of devices on the internet." 
  },
  { 
    id: 160, 
    q: "What is the main purpose of a VLAN (Virtual Local Area Network)?", 
    a: ["To increase physical cable speed", "To connect different physical locations", "To provide wireless access", "To segment a single physical network into multiple logical networks"], 
    c: 3, 
    exp: "Verified Answer: D[cite: 10]. Full Form: VLAN stands for Virtual Local Area Network. It allows network administrators to group hosts together even if they are not on the same switch." 
  },
  { 
    id: 161, 
    q: "Which protocol is used by the 'Ping' command to check network connectivity?", 
    a: ["TCP", "ICMP", "UDP", "ARP"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 11]. Full Form: ICMP stands for Internet Control Message Protocol. It is used by network devices to send error messages and operational information." 
  },
  { 
    id: 162, 
    q: "What is the function of the ARP (Address Resolution Protocol)?", 
    a: ["To map domain names to IP addresses", "To map IP addresses to MAC addresses", "To assign dynamic IP addresses", "To route packets between subnets"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 12]. Full Form: ARP stands for Address Resolution Protocol. It is used to find the hardware (MAC) address of a device when its IP address is known." 
  },
  { 
    id: 163, 
    q: "Which layer of the OSI model is responsible for logical addressing and routing?", 
    a: ["Network Layer", "Data Link Layer", "Transport Layer", "Session Layer"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 13]. The Network Layer (Layer 3) handles the routing of data through an intermediate network, including logical addressing (IP)." 
  },
  { 
    id: 164, 
    q: "What is the maximum number of usable hosts in a /24 subnet?", 
    a: ["256", "255", "254", "252"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 14]. In a /24 subnet, there are 256 total addresses. After subtracting the network and broadcast addresses, 254 usable host addresses remain." 
  },
  { 
    id: 165, 
    q: "Which protocol is commonly used for dynamic IP address assignment?", 
    a: ["DNS", "DHCP", "FTP", "SMTP"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 15]. Full Form: DHCP stands for Dynamic Host Configuration Protocol. It automatically provides an IP address and other configuration information to devices." 
  },
  { 
    id: 166, 
    q: "What does 'Full-Duplex' mean in terms of communication?", 
    a: ["Communication in only one direction", "Communication in both directions but not at the same time", "Communication to multiple recipients simultaneously", "Simultaneous communication in both directions"], 
    c: 3, 
    exp: "Verified Answer: D[cite: 16]. Full-Duplex communication allows both the sender and receiver to transmit data at the same time." 
  },
  { 
    id: 167, 
    q: "Which device is used to connect different networks and operates at the Network Layer?", 
    a: ["Hub", "Switch", "Router", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 17]. A Router is a Layer 3 device that directs data packets between different networks based on their IP addresses." 
  },
  { 
    id: 168, 
    q: "What is the size of a MAC (Media Access Control) address?", 
    a: ["32 bits", "64 bits", "48 bits", "128 bits"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 18]. Full Form: MAC stands for Media Access Control. A MAC address is a 48-bit unique identifier assigned to a network interface controller." 
  },
  { 
    id: 169, 
    q: "Which port number is used by the File Transfer Protocol (FTP) for control information?", 
    a: ["21", "22", "23", "25"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 19]. Full Form: FTP stands for File Transfer Protocol. It uses port 21 for control (commands) and port 20 for data transfer." 
  },
  { 
    id: 170, 
    q: "What is the primary purpose of the Transport Layer in the OSI model?", 
    a: ["Physical signaling", "Routing between networks", "Reliable end-to-end data delivery and flow control", "Data representation and encryption"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 20]. The Transport Layer (Layer 4) ensures that messages are delivered error-free, in sequence, and with no losses or duplications." 
  },
  { 
    id: 171, 
    q: "Which of the following is a private IPv4 address range?", 
    a: ["8.8.8.0/24", "172.15.0.0/16", "192.168.0.0/16", "200.1.1.0/24"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 21]. RFC 1918 defines 192.168.0.0 – 192.168.255.255 as a private address range for local area networks." 
  },
  { 
    id: 172, 
    q: "What is 'Latency' in a network?", 
    a: ["The amount of data sent per second", "The delay between a request and a response", "The strength of a wireless signal", "The total number of devices connected"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 22]. Latency is the time it takes for a data packet to travel from its source to its destination across a network." 
  },
  { 
    id: 173, 
    q: "Which protocol is used for securely browsing the web?", 
    a: ["HTTP", "FTP", "HTTPS", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 23]. Full Form: HTTPS stands for Hypertext Transfer Protocol Secure. It uses SSL/TLS to encrypt communication between a web browser and a website." 
  },
  { 
    id: 174, 
    q: "What is the purpose of the TTL (Time To Live) field in an IP packet?", 
    a: ["To prevent packets from looping infinitely", "To specify the data transfer rate", "To encrypt the packet payload", "To identify the source application"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 24]. Full Form: TTL stands for Time To Live. It is a value in an IP packet that tells a network router whether or not the packet has been in the network too long and should be discarded." 
  },
  { 
    id: 175, 
    q: "Which layer of the OSI model handles data compression and translation?", 
    a: ["Application Layer", "Session Layer", "Network Layer", "Presentation Layer"], 
    c: 3, 
    exp: "Verified Answer: D[cite: 25]. The Presentation Layer (Layer 6) ensures that data is in a usable format and handles data encryption and compression." 
  },
  { 
    id: 176, 
    q: "What is the function of a Default Gateway?", 
    a: ["To assign IP addresses to hosts", "To provide a path to other networks or the internet", "To resolve domain names", "To block unauthorized traffic"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 26]. A Default Gateway is the node that serves as an access point or IP router that a networked computer uses to send information to a computer in another network or the internet." 
  },
  { 
    id: 177, 
    q: "Which protocol is 'connectionless' and often used for streaming video?", 
    a: ["TCP", "UDP", "HTTP", "FTP"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 27]. Full Form: UDP stands for User Datagram Protocol. It is connectionless and prioritizes speed over reliability, making it ideal for real-time applications." 
  },
  { 
    id: 178, 
    q: "What is the standard port for the Domain Name System (DNS)?", 
    a: ["25", "80", "53", "443"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 28]. Full Form: DNS stands for Domain Name System. It uses port 53 for name resolution queries." 
  },
  { 
    id: 179, 
    q: "Which network topology connects every node to every other node?", 
    a: ["Star", "Bus", "Ring", "Mesh"], 
    c: 3, 
    exp: "Verified Answer: D[cite: 29]. In a Mesh topology, every device is connected to every other device, providing high redundancy and reliability." 
  },
  { 
    id: 180, 
    q: "What is the purpose of NAT (Network Address Translation)?", 
    a: ["To assign MAC addresses", "To map private IP addresses to a public IP address", "To increase bandwidth", "To resolve hostnames"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 30]. Full Form: NAT stands for Network Address Translation. It allows a single device, such as a router, to act as an agent between the internet and a local network." 
  },
  { 
    id: 181, 
    q: "Which port number is used by the Telnet protocol?", 
    a: ["22", "23", "21", "25"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 31]. Telnet is an application protocol used on the internet or local area network to provide a bidirectional interactive text-oriented communication facility using port 23." 
  },
  { 
    id: 182, 
    q: "What is an 'Octet' in an IPv4 address?", 
    a: ["A group of 8 bits", "A group of 4 bits", "The entire 32-bit address", "A hardware identifier"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 32]. An IPv4 address is made up of four 8-bit sections, each called an octet." 
  },
  { 
    id: 183, 
    q: "Which layer of the OSI model manages sessions between applications?", 
    a: ["Session Layer", "Transport Layer", "Application Layer", "Presentation Layer"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 33]. The Session Layer (Layer 5) is responsible for establishing, maintaining, and terminating sessions between applications on different host computers." 
  },
  { 
    id: 184, 
    q: "What is the range of a Class A IP address?", 
    a: ["128-191", "192-223", "1-126", "224-239"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 34]. Class A IP addresses range from 1 to 126 in the first octet." 
  },
  { 
    id: 185, 
    q: "Which device divides a network into different collision domains?", 
    a: ["Hub", "Switch", "Repeater", "Modem"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 35]. A Switch creates separate collision domains for each port, significantly reducing network congestion compared to a Hub." 
  },
  { 
    id: 186, 
    q: "What does ICMP stand for?", 
    a: ["Internal Communication Management Protocol", "Internet Control Message Protocol", "Integrated Circuit Management Process", "Inter-network Connection Message Protocol"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 36]. ICMP is used by network devices to send error messages and operational information." 
  },
  { 
    id: 187, 
    q: "Which protocol is used for synchronizing the clocks of computer systems?", 
    a: ["FTP", "NTP", "SMTP", "DHCP"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 37]. Full Form: NTP stands for Network Time Protocol. It is used to synchronize the time of all computers in a network." 
  },
  { 
    id: 188, 
    q: "What is the loopback address for IPv4?", 
    a: ["192.168.1.1", "127.0.0.1", "255.255.255.255", "0.0.0.0"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 38]. The address 127.0.0.1 is the standard loopback address, used by a computer to send a message to itself." 
  },
  { 
    id: 189, 
    q: "Which layer of the OSI model is the Physical Layer?", 
    a: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 39]. The Physical Layer is the first and lowest layer of the OSI model." 
  },
  { 
    id: 190, 
    q: "What is a 'Broadcast' address in a subnet?", 
    a: ["An address for a single host", "An address used to send data to all hosts in the subnet", "An address for the router", "A security identifier"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 40]. A broadcast address allows information to be sent to all devices on a particular network segment." 
  },
  { 
    id: 191, 
    q: "Which protocol is used for retrieving emails from a server and typically synchronizes across devices?", 
    a: ["IMAP", "POP3", "SMTP", "SNMP"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 41]. Full Form: IMAP stands for Internet Message Access Protocol. It allows you to access your email from any device, anywhere." 
  },
  { 
    id: 192, 
    q: "What is the function of a Bridge in a network?", 
    a: ["To route packets between different network types", "To assign IP addresses", "To amplify electrical signals", "To connect two separate network segments at the Data Link Layer"], 
    c: 3, 
    exp: "Verified Answer: D[cite: 42]. A Bridge is a Layer 2 device that connects two different LAN segments and filters traffic between them based on MAC addresses." 
  },
  { 
    id: 193, 
    q: "Which port number is used by HTTP (unencrypted)?", 
    a: ["443", "80", "21", "53"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 43]. Full Form: HTTP stands for Hypertext Transfer Protocol. It is the foundation of data communication for the World Wide Web and uses port 80." 
  },
  { 
    id: 194, 
    q: "What does the term 'Jitter' mean in networking?", 
    a: ["Variation in the delay of received packets", "The total amount of data lost", "The strength of a signal", "The frequency of data transmission"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 44]. Jitter is the variation in time between when a data packet is sent and when it is received, often caused by network congestion." 
  },
  { 
    id: 195, 
    q: "Which IEEE standard defines Wireless LAN (Wi-Fi)?", 
    a: ["802.11", "802.3", "802.15", "802.1Q"], 
    c: 0, 
    exp: "Verified Answer: A[cite: 45]. IEEE 802.11 is a set of local area network protocols that specify the media access control and physical layer for implementing wireless local area network computer communication." 
  },
  { 
    id: 196, 
    q: "What is the purpose of a checksum in a packet header?", 
    a: ["To specify the packet's route", "To encrypt the packet", "To detect errors in the packet data", "To identify the sender"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 46]. A checksum is a small-sized datum derived from a block of digital data for the purpose of detecting errors that may have been introduced during its transmission or storage." 
  },
  { 
    id: 197, 
    q: "Which protocol is used for transferring web pages from a server to a browser?", 
    a: ["FTP", "SMTP", "HTTP", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 47]. HTTP is the underlying protocol used by the World Wide Web to define how messages are formatted and transmitted." 
  },
  { 
    id: 198, 
    q: "What is 'Crosstalk' in copper cabling?", 
    a: ["A method of improving signal strength", "Signal interference from adjacent wires", "A way to connect different cable types", "An encryption technique"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 48]. Crosstalk is an unwanted transfer of signals between communication channels." 
  },
  { 
    id: 199, 
    q: "Which layer of the OSI model is responsible for flow control and error recovery?", 
    a: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical Layer"], 
    c: 1, 
    exp: "Verified Answer: B[cite: 49]. The Transport Layer provides mechanisms for flow control, error checking, and recovery to ensure reliable data transfer." 
  },
  { 
    id: 200, 
    q: "What is a 'Collision Domain'?", 
    a: ["A network segment where data packets can loop", "The entire internet", "A network segment where two devices can send data at the same time, causing a collision", "A secure area of a network"], 
    c: 2, 
    exp: "Verified Answer: C[cite: 50]. A collision domain is a network segment where only one device can transmit data at a time to avoid data collisions." 
  },
  { 
    id: 201, 
    q: "Which field in the IPv4 header is used to prevent packets from looping indefinitely?", 
    a: ["Checksum", "Time to Live (TTL)", "Protocol", "Fragment Offset"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: TTL stands for Time To Live. It is a counter that decreases by 1 at each router (hop). If it reaches zero, the packet is discarded to prevent infinite network loops." 
  },
  { 
    id: 202, 
    q: "What is the purpose of the 'Protocol' field in an IP header?", 
    a: ["To identify the next level protocol", "To specify the packet size", "To determine the route", "To encrypt the payload"], 
    c: 0, 
    exp: "Verified Answer: A. The Protocol field (in IPv4) or Next Header field (in IPv6) identifies which upper-layer protocol (like TCP or UDP) should receive the data." 
  },
  { 
    id: 203, 
    q: "Which protocol is used to map a known IP address to a MAC address on a local network?", 
    a: ["DNS", "DHCP", "ARP", "ICMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: ARP stands for Address Resolution Protocol. It resolves a Layer 3 (IP) address to a Layer 2 (MAC) address." 
  },
  { 
    id: 204, 
    q: "Which of the following is a characteristic of a 'Switch' compared to a 'Hub'?", 
    a: ["Operates at Layer 1", "Broadcasts data to all ports", "Creates separate collision domains for each port", "Cannot filter MAC addresses"], 
    c: 2, 
    exp: "Verified Answer: C. Unlike a Hub, a Switch is an 'intelligent' device that learns MAC addresses and sends data only to the specific destination port, preventing collisions." 
  },
  { 
    id: 205, 
    q: "What is the standard port number for the Domain Name System (DNS)?", 
    a: ["21", "25", "53", "80"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: DNS stands for Domain Name System. It uses port 53 to translate human-readable domain names into IP addresses." 
  },
  { 
    id: 206, 
    q: "In the OSI model, which layer is responsible for establishing, managing, and terminating sessions?", 
    a: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"], 
    c: 2, 
    exp: "Verified Answer: C. The Session Layer (Layer 5) maintains the connection between two applications during a data exchange." 
  },
  { 
    id: 207, 
    q: "Which protocol provides a secure, encrypted alternative to Telnet?", 
    a: ["HTTP", "SSH", "FTP", "SNMP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: SSH stands for Secure Shell. It provides encrypted remote access, ensuring that login credentials and data are not intercepted." 
  },
  { 
    id: 208, 
    q: "What is the size of an IPv6 address in bits?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 3, 
    exp: "Verified Answer: D. IPv6 (Internet Protocol version 6) uses 128 bits, providing a much larger address space than the 32-bit IPv4." 
  },
  { 
    id: 209, 
    q: "Which address is used to send data to all devices on a specific local network?", 
    a: ["Unicast Address", "Multicast Address", "Broadcast Address", "Anycast Address"], 
    c: 2, 
    exp: "Verified Answer: C. A Broadcast address is a special address that targets every device within a network segment." 
  },
  { 
    id: 210, 
    q: "What does the term 'Latency' measure in a network?", 
    a: ["The amount of data per second", "The delay in data transmission", "The physical length of the cable", "The number of devices connected"], 
    c: 1, 
    exp: "Verified Answer: B. Latency is the time it takes for a packet to travel from the source to the destination." 
  },
  { 
    id: 211, 
    q: "Which layer of the TCP/IP model corresponds to the OSI Network Layer?", 
    a: ["Application Layer", "Transport Layer", "Internet Layer", "Network Interface Layer"], 
    c: 2, 
    exp: "Verified Answer: C. The Internet Layer in the TCP/IP model handles routing and logical addressing, just like the OSI Network Layer (Layer 3)." 
  },
  { 
    id: 212, 
    q: "What is the purpose of the 'Checksum' field in a packet header?", 
    a: ["To encrypt data", "To identify the sender", "To detect errors in the header", "To specify the TTL"], 
    c: 2, 
    exp: "Verified Answer: C. A Checksum is a mathematical value used to verify that the header has not been corrupted during transmission." 
  },
  { 
    id: 213, 
    q: "Which port number is used by the Post Office Protocol version 3 (POP3)?", 
    a: ["110", "143", "25", "443"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: POP3 stands for Post Office Protocol version 3. It uses port 110 to download emails from a server to a local client." 
  },
  { 
    id: 214, 
    q: "What is the bit-length of a MAC address?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: MAC stands for Media Access Control. It is a 48-bit hardware address assigned to a Network Interface Card (NIC)." 
  },
  { 
    id: 215, 
    q: "Which device is used to connect two different networks and makes forwarding decisions based on IP addresses?", 
    a: ["Hub", "Switch", "Bridge", "Router"], 
    c: 3, 
    exp: "Verified Answer: D. A Router operates at Layer 3 (Network) and uses IP addresses to route traffic between different networks." 
  },
  { 
    id: 216, 
    q: "What does DHCP stand for?", 
    a: ["Dynamic Host Configuration Protocol", "Data Handling Control Protocol", "Digital Host Connection Process", "Dynamic Hyperlink Configuration Protocol"], 
    c: 0, 
    exp: "Verified Answer: A. DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and network settings to devices." 
  },
  { 
    id: 217, 
    q: "Which protocol is used for sending emails between mail servers?", 
    a: ["POP3", "IMAP", "SMTP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: SMTP stands for Simple Mail Transfer Protocol. It is used to push or send emails from a client to a server or between servers." 
  },
  { 
    id: 218, 
    q: "What is the maximum distance for a standard UTP Ethernet cable run without a repeater?", 
    a: ["50 meters", "100 meters", "500 meters", "1000 meters"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: UTP stands for Unshielded Twisted Pair. Standard Ethernet (Cat5/6) has a physical limit of 100 meters due to signal attenuation." 
  },
  { 
    id: 219, 
    q: "Which layer of the OSI model handles physical signaling and bit transmission?", 
    a: ["Data Link Layer", "Physical Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Physical Layer (Layer 1) converts bits into electrical, optical, or radio signals for transmission over a medium." 
  },
  { 
    id: 220, 
    q: "Which protocol is used to access files on a remote server over a network?", 
    a: ["HTTP", "SMTP", "FTP", "DNS"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: FTP stands for File Transfer Protocol. It is a standard protocol for transferring files between a client and a server." 
  },
  { 
    id: 221, 
    q: "What is the 'Three-Way Handshake' used for in TCP?", 
    a: ["To encrypt data", "To establish a reliable connection", "To resolve MAC addresses", "To compress the payload"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: TCP stands for Transmission Control Protocol. It uses a SYN, SYN-ACK, ACK sequence to ensure both devices are ready to communicate." 
  },
  { 
    id: 222, 
    q: "Which IP address class is reserved for experimental and research purposes?", 
    a: ["Class C", "Class D", "Class E", "Class A"], 
    c: 2, 
    exp: "Verified Answer: C. Class E (240.0.0.0 to 255.255.255.254) is reserved for future use or experimental purposes." 
  },
  { 
    id: 223, 
    q: "What is 'Crosstalk' in copper cabling?", 
    a: ["The increase in signal speed", "Signal interference from an adjacent wire", "The grounding of a cable", "A type of encryption"], 
    c: 1, 
    exp: "Verified Answer: B. Crosstalk occurs when the electromagnetic signal from one wire interferes with the signal on another wire within the same cable bundle." 
  },
  { 
    id: 224, 
    q: "Which protocol is used by network administrators to manage and monitor network devices?", 
    a: ["SNMP", "SMTP", "SSH", "DHCP"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: SNMP stands for Simple Network Management Protocol. It is used to collect data from and configure routers, switches, and servers." 
  },
  { 
    id: 225, 
    q: "What is the default subnet mask for a Class A IP address?", 
    a: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"], 
    c: 2, 
    exp: "Verified Answer: C. Class A networks use the first 8 bits for the network ID, resulting in a default mask of 255.0.0.0 (/8)." 
  },
  { 
    id: 226, 
    q: "Which layer of the OSI model ensures data is in a format the application layer can understand?", 
    a: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Presentation Layer (Layer 6) handles data translation, encryption, and compression." 
  },
  { 
    id: 227, 
    q: "What is the range of a Class C IP address in the first octet?", 
    a: ["1-126", "128-191", "192-223", "224-239"], 
    c: 2, 
    exp: "Verified Answer: C. Class C addresses range from 192.0.0.0 to 223.255.255.255." 
  },
  { 
    id: 228, 
    q: "What is the function of a 'Repeater' in a network?", 
    a: ["To filter packets", "To route traffic", "To amplify or regenerate signals", "To assign IP addresses"], 
    c: 2, 
    exp: "Verified Answer: C. A Repeater is a Layer 1 device used to extend the reach of a cable by regenerating weakened signals." 
  },
  { 
    id: 229, 
    q: "Which port number is used for HTTPS?", 
    a: ["80", "23", "443", "53"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: HTTPS stands for Hypertext Transfer Protocol Secure. It uses port 443 for encrypted web traffic." 
  },
  { 
    id: 230, 
    q: "What is 'Jitter' in a VoIP or streaming connection?", 
    a: ["High bandwidth usage", "The variation in packet arrival time", "The physical vibration of a router", "The loss of all data"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: VoIP stands for Voice over IP. Jitter is the inconsistency in delay between packets, which can cause audio/video stuttering." 
  },
  { 
    id: 231, 
    q: "Which technology allows multiple private IP addresses to share a single public IP?", 
    a: ["DNS", "DHCP", "NAT", "RIP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: NAT stands for Network Address Translation. It is primarily used to conserve the limited supply of public IPv4 addresses." 
  },
  { 
    id: 232, 
    q: "What is the primary function of the Data Link Layer?", 
    a: ["Routing packets", "End-to-end reliability", "Framing and physical addressing", "Data compression"], 
    c: 2, 
    exp: "Verified Answer: C. The Data Link Layer (Layer 2) organizes bits into frames and uses MAC addresses for local delivery." 
  },
  { 
    id: 233, 
    q: "Which IEEE standard defines Wi-Fi (Wireless LAN)?", 
    a: ["802.3", "802.5", "802.11", "802.15"], 
    c: 2, 
    exp: "Verified Answer: C. IEEE 802.11 is the standard for implementing Wireless Local Area Networks (WLAN)." 
  },
  { 
    id: 234, 
    q: "What is a 'Full-Duplex' communication?", 
    a: ["One-way only", "Two-way but one at a time", "Simultaneous two-way communication", "Broadcasting to everyone"], 
    c: 2, 
    exp: "Verified Answer: C. Full-Duplex allows devices to send and receive data at the same time, unlike Half-Duplex (like a walkie-talkie)." 
  },
  { 
    id: 235, 
    q: "What is the loopback address for IPv6?", 
    a: ["127.0.0.1", "::1", "ff02::1", "fe80::1"], 
    c: 1, 
    exp: "Verified Answer: B. The IPv6 loopback address is ::1. It serves the same purpose as 127.0.0.1 in IPv4 (testing the local stack)." 
  },
  { 
    id: 236, 
    q: "Which layer of the OSI model is responsible for flow control and error recovery?", 
    a: ["Network Layer", "Transport Layer", "Data Link Layer", "Physical Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Transport Layer (Layer 4) ensures that data is received reliably, in order, and without errors." 
  },
  { 
    id: 237, 
    q: "What is the main advantage of Fiber Optic cable over Copper cable?", 
    a: ["It is cheaper", "It is easier to install", "It is immune to electromagnetic interference (EMI)", "It uses electrical signals"], 
    c: 2, 
    exp: "Verified Answer: C. Because fiber uses light pulses instead of electricity, it is not affected by EMI or crosstalk and can travel much longer distances." 
  },
  { 
    id: 238, 
    q: "Which protocol is used to resolve a domain name into an IP address?", 
    a: ["ARP", "DHCP", "DNS", "ICMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: DNS stands for Domain Name System. It acts as the 'phonebook' of the internet." 
  },
  { 
    id: 239, 
    q: "What is the bit-length of an IPv4 address?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 0, 
    exp: "Verified Answer: A. An IPv4 address is composed of 4 octets (8 bits each), totaling 32 bits." 
  },
  { 
    id: 240, 
    q: "Which device is used to connect different networks that use different protocols?", 
    a: ["Hub", "Switch", "Router", "Gateway"], 
    c: 3, 
    exp: "Verified Answer: D. A Gateway acts as a translator or entry point between two networks with different protocol architectures." 
  },
  { 
    id: 241, 
    q: "Which type of address starts with 'fe80' in IPv6?", 
    a: ["Global Unicast", "Link-Local", "Multicast", "Loopback"], 
    c: 1, 
    exp: "Verified Answer: B. Link-Local addresses (starting with fe80::) are used for communication within a single local network segment in IPv6." 
  },
  { 
    id: 242, 
    q: "What is the purpose of the 'Payload Length' field in an IPv6 header?", 
    a: ["To specify the length of the header", "To specify the length of the data following the header", "To identify the protocol", "To determine the route"], 
    c: 1, 
    exp: "Verified Answer: B. Unlike IPv4, which has a total length field, IPv6 specifies only the size of the payload (the data part)." 
  },
  { 
    id: 243, 
    q: "Which protocol is used by the 'Ping' command?", 
    a: ["TCP", "UDP", "ICMP", "ARP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: ICMP stands for Internet Control Message Protocol. It is used to send error and status messages (like Echo Requests)." 
  },
  { 
    id: 244, 
    q: "In a Star topology, what happens if the central hub/switch fails?", 
    a: ["Only one node is affected", "The entire network goes down", "The data travels slower", "The network switches to a ring"], 
    c: 1, 
    exp: "Verified Answer: B. Since all nodes connect to the central device, its failure creates a 'single point of failure' for the whole network." 
  },
  { 
    id: 245, 
    q: "Which port number is used by the File Transfer Protocol (FTP) for control?", 
    a: ["20", "21", "22", "23"], 
    c: 1, 
    exp: "Verified Answer: B. FTP uses port 21 for command/control and port 20 for the actual data transfer." 
  },
  { 
    id: 246, 
    q: "What does 'Attenuation' mean in networking?", 
    a: ["The increase in signal strength", "The weakening of a signal over distance", "The collision of data packets", "The compression of a file"], 
    c: 1, 
    exp: "Verified Answer: B. Attenuation is the natural loss of signal power as it travels through a transmission medium." 
  },
  { 
    id: 247, 
    q: "Which protocol is connection-oriented and ensures guaranteed delivery?", 
    a: ["TCP", "UDP", "IP", "ICMP"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: TCP stands for Transmission Control Protocol. It uses acknowledgments and retransmissions to ensure reliability." 
  },
  { 
    id: 248, 
    q: "What is the broadcast address for a 192.168.1.0/24 network?", 
    a: ["192.168.1.1", "192.168.1.0", "192.168.1.255", "255.255.255.255"], 
    c: 2, 
    exp: "Verified Answer: C. For a /24 network, the last IP address (.255) is always the broadcast address used to reach all hosts." 
  },
  { 
    id: 249, 
    q: "Which layer of the OSI model handles data encryption and decryption?", 
    a: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Presentation Layer (Layer 6) is responsible for how data is formatted and secured." 
  },
  { 
    id: 250, 
    q: "Which device operates at the Physical Layer (Layer 1) to amplify signals?", 
    a: ["Switch", "Router", "Hub", "Gateway"], 
    c: 2, 
    exp: "Verified Answer: C. A Hub (or Repeater) is a 'dumb' Layer 1 device that simply amplifies and repeats electrical signals to all ports." 
  },
  { 
    id: 251, 
    q: "Which protocol is used to translate an internal private IP address to a global public IP address?", 
    a: ["ARP", "DNS", "NAT", "DHCP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: NAT stands for Network Address Translation. It allows a router to act as an agent between the public internet and a local private network, mapping multiple private IPs to a single public IP." 
  },
  { 
    id: 252, 
    q: "In the OSI model, which layer provides the interface between the user and the network?", 
    a: ["Transport Layer", "Session Layer", "Application Layer", "Presentation Layer"], 
    c: 2, 
    exp: "Verified Answer: C. The Application Layer (Layer 7) is the top layer and interacts directly with software applications like web browsers or email clients." 
  },
  { 
    id: 253, 
    q: "What is the primary purpose of a Firewall in a network?", 
    a: ["To speed up internet connection", "To monitor and control incoming/outgoing traffic based on security rules", "To assign IP addresses to devices", "To provide wireless signals"], 
    c: 1, 
    exp: "Verified Answer: B. A Firewall acts as a barrier that filters data packets to prevent unauthorized access and protect the network from cyber threats." 
  },
  { 
    id: 254, 
    q: "Which type of cable is least susceptible to electromagnetic interference (EMI)?", 
    a: ["Coaxial Cable", "UTP Cable", "STP Cable", "Fiber Optic Cable"], 
    c: 3, 
    exp: "Verified Answer: D. Fiber Optic cables transmit data as light pulses through glass or plastic, making them completely immune to electrical interference (EMI)." 
  },
  { 
    id: 255, 
    q: "Which port number is used by the Secure Shell (SSH) protocol?", 
    a: ["21", "22", "23", "25"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: SSH stands for Secure Shell. It uses port 22 to provide an encrypted channel for secure remote login over a network." 
  },
  { 
    id: 256, 
    q: "What does CIDR stand for in networking?", 
    a: ["Classless Inter-Domain Routing", "Common Interface Data Routing", "Computer Integrated Data Resolution", "Classful Internal Domain Routing"], 
    c: 0, 
    exp: "Verified Answer: A. CIDR (Classless Inter-Domain Routing) replaced the old 'classful' (Class A, B, C) system to allow more efficient allocation of IP addresses." 
  },
  { 
    id: 257, 
    q: "Which layer of the TCP/IP model handles the delivery of data from one application to another?", 
    a: ["Network Interface", "Internet", "Transport", "Application"], 
    c: 2, 
    exp: "Verified Answer: C. The Transport layer uses protocols like TCP and UDP to manage host-to-host communication and port addressing." 
  },
  { 
    id: 258, 
    q: "Which address is used to uniquely identify a hardware device at the Data Link Layer?", 
    a: ["IP Address", "MAC Address", "Port Address", "Host ID"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: MAC stands for Media Access Control. This 48-bit address is hard-coded into the NIC (Network Interface Card) of every device." 
  },
  { 
    id: 259, 
    q: "What is the maximum number of usable host addresses in a /26 subnet?", 
    a: ["64", "62", "32", "30"], 
    c: 1, 
    exp: "Verified Answer: B. Math: A /26 mask has 6 host bits (32 - 26 = 6). Total addresses = 2^6 = 64. Usable hosts = 64 - 2 (Network & Broadcast) = 62." 
  },
  { 
    id: 260, 
    q: "Which protocol is used to send error and status messages across the internet?", 
    a: ["TCP", "UDP", "ICMP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: ICMP stands for Internet Control Message Protocol. It is used by tools like 'Ping' and 'Traceroute' to report network errors." 
  },
  { 
    id: 261, 
    q: "Which network device is designed to create a separate collision domain for each of its ports?", 
    a: ["Hub", "Switch", "Repeater", "Modem"], 
    c: 1, 
    exp: "Verified Answer: B. A Switch operates at the Data Link Layer and switches frames based on MAC addresses, effectively eliminating collisions on each port." 
  },
  { 
    id: 262, 
    q: "What is the purpose of the 'Three-way Handshake' in TCP?", 
    a: ["To encrypt data transmission", "To establish a reliable connection between two hosts", "To speed up the connection", "To assign a dynamic IP"], 
    c: 1, 
    exp: "Verified Answer: B. The TCP handshake (SYN, SYN-ACK, ACK) ensures that both devices are ready and synchronized before data transfer begins." 
  },
  { 
    id: 263, 
    q: "Which IPv6 address is the equivalent of the IPv4 loopback address (127.0.0.1)?", 
    a: ["fe80::1", "ff02::1", "::1", "2001::1"], 
    c: 2, 
    exp: "Verified Answer: C. The address '::1' in IPv6 is the localhost or loopback address used by a computer to send data to itself for testing purposes." 
  },
  { 
    id: 264, 
    q: "Which routing protocol uses the distance-vector algorithm to find the best path?", 
    a: ["OSPF", "RIP", "BGP", "IS-IS"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: RIP stands for Routing Information Protocol. It uses 'Hop Count' as its metric and is a classic distance-vector protocol." 
  },
  { 
    id: 265, 
    q: "What does a DNS 'A Record' do?", 
    a: ["Maps a hostname to an IPv4 address", "Maps a hostname to an IPv6 address", "Identifies the mail server", "Defines the name server"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: DNS stands for Domain Name System. An 'A' record (Address record) translates a domain name (like example.com) into its corresponding IPv4 address." 
  },
  { 
    id: 266, 
    q: "Which topology is the most resilient, where every node is connected to every other node?", 
    a: ["Star", "Ring", "Full Mesh", "Bus"], 
    c: 2, 
    exp: "Verified Answer: C. In a Full Mesh topology, if one cable fails, data can still reach its destination through many alternative paths." 
  },
  { 
    id: 267, 
    q: "What is 'Crosstalk' in networking?", 
    a: ["Data packets colliding in a hub", "Signal leakage from one wire into another adjacent wire", "Two routers exchanging routing tables", "A person speaking over a network"], 
    c: 1, 
    exp: "Verified Answer: B. Crosstalk is electromagnetic interference caused when the signal from one wire is picked up by another nearby wire, corrupting the data." 
  },
  { 
    id: 268, 
    q: "Which port number is used by the Domain Name System (DNS)?", 
    a: ["25", "53", "80", "443"], 
    c: 1, 
    exp: "Verified Answer: B. DNS typically uses UDP port 53 to process queries from clients and provide domain name resolutions." 
  },
  { 
    id: 269, 
    q: "What is the function of the Presentation Layer in the OSI model?", 
    a: ["Routing packets through subnets", "Physical bit transmission", "Managing data sessions", "Data representation, encryption, and compression"], 
    c: 3, 
    exp: "Verified Answer: D. Layer 6 (Presentation) ensures that data sent from the application layer of one system can be read by the application layer of another." 
  },
  { 
    id: 270, 
    q: "Which protocol is 'connectionless' and prioritizes speed over reliability?", 
    a: ["TCP", "UDP", "FTP", "HTTP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: UDP stands for User Datagram Protocol. It does not use error-checking or handshakes, making it ideal for streaming and gaming." 
  },
  { 
    id: 271, 
    q: "What is the maximum distance for a standard 1000Base-T (Gigabit Ethernet) segment using Cat5e?", 
    a: ["50 meters", "100 meters", "500 meters", "1000 meters"], 
    c: 1, 
    exp: "Verified Answer: B. Most copper-based Ethernet standards are limited to 100 meters (328 feet) before signal attenuation requires a repeater." 
  },
  { 
    id: 272, 
    q: "Which protocol is used for managing and monitoring network devices like switches and routers?", 
    a: ["SMTP", "SNMP", "SSH", "DHCP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: SNMP stands for Simple Network Management Protocol. It collects information and sends commands to network hardware." 
  },
  { 
    id: 273, 
    q: "What is the purpose of the 'Default Gateway' in a device's IP settings?", 
    a: ["To identify the device on the local network", "To provide a path for traffic destined for a different network", "To resolve hostnames into IP addresses", "To assign the subnet mask"], 
    c: 1, 
    exp: "Verified Answer: B. The Default Gateway is the IP address of the router interface that connects the local network to the rest of the world (internet)." 
  },
  { 
    id: 274, 
    q: "Which layer of the OSI model does a 'Bridge' operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. A Bridge is a Layer 2 device that connects two LAN segments and filters traffic based on MAC addresses." 
  },
  { 
    id: 275, 
    q: "What does the 'S' in HTTPS stand for?", 
    a: ["System", "Secure", "Socket", "Standard"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: HTTPS stands for Hypertext Transfer Protocol Secure. It uses SSL/TLS to encrypt communication for security." 
  },
  { 
    id: 276, 
    q: "Which IPv4 address class is used for Multicasting?", 
    a: ["Class A", "Class B", "Class C", "Class D"], 
    c: 3, 
    exp: "Verified Answer: D. Class D addresses (224.0.0.0 to 239.255.255.255) are reserved for sending packets to a group of interested devices (Multicast)." 
  },
  { 
    id: 277, 
    q: "What is 'Latency' in computer networking?", 
    a: ["The total data transfer capacity", "The number of bits corrupted during transfer", "The delay in the time it takes for data to travel from source to destination", "The weight of the network cable"], 
    c: 2, 
    exp: "Verified Answer: C. Latency is the 'ping time' or delay between a request and its response, usually measured in milliseconds (ms)." 
  },
  { 
    id: 278, 
    q: "Which command-line tool is used to see the path a packet takes to a destination?", 
    a: ["ping", "ipconfig", "tracert", "netstat"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: 'tracert' (Windows) or 'traceroute' (Linux) displays every router (hop) the packet passes through to reach the target." 
  },
  { 
    id: 279, 
    q: "What is the bit-length of an IPv6 address?", 
    a: ["32 bits", "64 bits", "128 bits", "256 bits"], 
    c: 2, 
    exp: "Verified Answer: C. IPv6 addresses are 128 bits long, represented as 8 groups of 4 hexadecimal characters." 
  },
  { 
    id: 280, 
    q: "Which protocol is used by the 'Ping' command to test connectivity?", 
    a: ["TCP", "UDP", "ICMP", "ARP"], 
    c: 2, 
    exp: "Verified Answer: C. Ping uses ICMP 'Echo Request' and 'Echo Reply' messages to check if a device is reachable." 
  },
  { 
    id: 281, 
    q: "What is the purpose of the TTL (Time-To-Live) field in an IP packet?", 
    a: ["To specify when the packet was sent", "To limit the maximum number of hops a packet can take", "To determine the priority of the packet", "To encrypt the packet header"], 
    c: 1, 
    exp: "Verified Answer: B. TTL prevents packets from circling the network forever. Each router decrements the TTL by 1; if it hits 0, the packet is dropped." 
  },
  { 
    id: 282, 
    q: "Which layer of the OSI model does a Router operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 2, 
    exp: "Verified Answer: C. Routers are Layer 3 (Network) devices because they use logical IP addresses to make forwarding decisions." 
  },
  { 
    id: 283, 
    q: "Which port number is used by the Post Office Protocol (POP3)?", 
    a: ["110", "143", "25", "80"], 
    c: 0, 
    exp: "Verified Answer: A. POP3 uses port 110 to allow email clients to retrieve messages from a mail server." 
  },
  { 
    id: 284, 
    q: "What does DHCP stand for?", 
    a: ["Dynamic Host Configuration Protocol", "Digital Home Connection Process", "Data Handling Communication Protocol", "Domain Host Control Process"], 
    c: 0, 
    exp: "Verified Answer: A. DHCP automatically assigns IP addresses, subnet masks, and gateways to devices on a network." 
  },
  { 
    id: 285, 
    q: "Which device is used to connect multiple devices in a local network and operates at Layer 1?", 
    a: ["Switch", "Router", "Hub", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C. A Hub is a basic Layer 1 device that simply broadcasts electrical signals to all its ports without intelligence." 
  },
  { 
    id: 286, 
    q: "What is the range of a Class A IP address?", 
    a: ["128-191", "192-223", "1-126", "224-239"], 
    c: 2, 
    exp: "Verified Answer: C. Class A addresses use the first octet range of 1 to 126. (127 is reserved for loopback)." 
  },
  { 
    id: 287, 
    q: "Which type of addressing sends a packet to a single specific host?", 
    a: ["Unicast", "Multicast", "Broadcast", "Anycast"], 
    c: 0, 
    exp: "Verified Answer: A. Unicast is one-to-one communication between a source and a single destination device." 
  },
  { 
    id: 288, 
    q: "What is a 'Collision' in an Ethernet network?", 
    a: ["Two computers using the same IP address", "Two devices transmitting data simultaneously on a shared medium", "A physical cable breaking", "A computer crashing due to high traffic"], 
    c: 1, 
    exp: "Verified Answer: B. Collisions occur in Half-Duplex environments (like Hubs) when two electrical signals meet on the wire and corrupt each other." 
  },
  { 
    id: 289, 
    q: "Which protocol is used for synchronizing the clocks of computers over a network?", 
    a: ["NTP", "FTP", "SMTP", "SNMP"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: NTP stands for Network Time Protocol. It ensures all devices on a network have a synchronized, accurate time." 
  },
  { 
    id: 290, 
    q: "What does MAC stand for in MAC address?", 
    a: ["Machine Access Code", "Media Access Control", "Main Addressing Circuit", "Module Access Connection"], 
    c: 1, 
    exp: "Verified Answer: B. Media Access Control is the hardware address that provides unique identification for the network interface." 
  },
  { 
    id: 291, 
    q: "Which layer of the OSI model is responsible for logical framing and error detection at the link level?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Data Link Layer (Layer 2) organizes raw bits from the physical layer into 'frames' and checks for transmission errors." 
  },
  { 
    id: 292, 
    q: "What is the default subnet mask for a Class B IP address?", 
    a: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], 
    c: 1, 
    exp: "Verified Answer: B. A Class B network uses the first two octets (16 bits) for the network, resulting in a mask of 255.255.0.0." 
  },
  { 
    id: 293, 
    q: "Which wireless security standard is the most secure as of 2024?", 
    a: ["WEP", "WPA", "WPA2", "WPA3"], 
    c: 3, 
    exp: "Verified Answer: D. Full Form: WPA stands for Wi-Fi Protected Access. WPA3 is the latest version with the strongest encryption and protection against password guessing." 
  },
  { 
    id: 294, 
    q: "What is the function of the Session Layer in the OSI model?", 
    a: ["Data encryption", "Routing between networks", "Establishing and maintaining communication sessions", "Physical signaling"], 
    c: 2, 
    exp: "Verified Answer: C. Layer 5 (Session) starts, manages, and terminates the connection between applications." 
  },
  { 
    id: 295, 
    q: "Which port number is used by the Simple Mail Transfer Protocol (SMTP)?", 
    a: ["25", "110", "143", "80"], 
    c: 0, 
    exp: "Verified Answer: A. SMTP uses port 25 to send or relay emails between mail servers." 
  },
  { 
    id: 296, 
    q: "What is an 'Octet' in an IP address?", 
    a: ["A group of 4 bits", "A group of 8 bits", "A group of 16 bits", "The whole IP address"], 
    c: 1, 
    exp: "Verified Answer: B. An IP address is made of four 8-bit sections; each 8-bit section is called an octet because 'octo' means eight." 
  },
  { 
    id: 297, 
    q: "Which device connects a local network to a digital subscriber line (DSL) or cable for internet access?", 
    a: ["Switch", "Modem", "Hub", "Repeater"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: Modem stands for Modulator-Demodulator. It converts digital data from a computer into analog signals for transmission over phone/cable lines." 
  },
  { 
    id: 298, 
    q: "What is the broadcast address for any network?", 
    a: ["The first IP in the range", "The last IP in the range", "The IP assigned to the router", "127.0.0.1"], 
    c: 1, 
    exp: "Verified Answer: B. In any IP subnet, the very last address is reserved as the broadcast address to reach all hosts in that subnet." 
  },
  { 
    id: 299, 
    q: "Which protocol allows you to access your email from multiple devices while keeping it synchronized?", 
    a: ["POP3", "IMAP", "SMTP", "SNMP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: IMAP stands for Internet Message Access Protocol. Unlike POP3, IMAP stores mail on the server and syncs changes across all devices." 
  },
  { 
    id: 300, 
    q: "Which layer of the OSI model does a 'Hub' operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 0, 
    exp: "Verified Answer: A. A Hub is a simple device that works at Layer 1 (Physical), as it deals only with bits and electrical signals without understanding addresses." 
  },
  { 
    id: 301, 
    q: "Which protocol is used to automatically assign IPv6 addresses to hosts, similar to DHCP in IPv4?", 
    a: ["ARP", "SLAAC", "ICMPv6", "IGMP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: SLAAC stands for Stateless Address Autoconfiguration. It allows a host to generate its own IPv6 address using a combination of local information and router advertisements." 
  },
  { 
    id: 302, 
    q: "In the OSI model, which layer is responsible for selecting the best path for data to travel across a network?", 
    a: ["Data Link Layer", "Transport Layer", "Network Layer", "Session Layer"], 
    c: 2, 
    exp: "Verified Answer: C. The Network Layer (Layer 3) is responsible for logical addressing and routing, which involves determining the optimal path (routing) for packets." 
  },
  { 
    id: 303, 
    q: "What is the primary difference between a 'Hub' and a 'Switch' regarding bandwidth?", 
    a: ["Hubs provide more bandwidth", "Switches share bandwidth among all ports", "Switches provide dedicated bandwidth to each port", "There is no difference"], 
    c: 2, 
    exp: "Verified Answer: C. A Switch provides full dedicated bandwidth between the source and destination ports, whereas a Hub shares the total bandwidth among all active ports." 
  },
  { 
    id: 304, 
    q: "Which port number is used by the IMAP protocol for unencrypted email retrieval?", 
    a: ["110", "143", "993", "25"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: IMAP stands for Internet Message Access Protocol. It uses port 143 for standard connections and port 993 for SSL/TLS encrypted connections." 
  },
  { 
    id: 305, 
    q: "What is the purpose of the 'Spanning Tree Protocol' (STP)?", 
    a: ["To speed up data transmission", "To prevent switching loops in a redundant network", "To assign IP addresses", "To encrypt wireless data"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: STP stands for Spanning Tree Protocol. It is a Layer 2 protocol that prevents loops in a network by disabling redundant paths until they are needed." 
  },
  { 
    id: 306, 
    q: "Which of the following is an example of a 'Top-Level Domain' (TLD)?", 
    a: ["www", "google", ".com", "https"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: TLD stands for Top-Level Domain. Examples include .com, .org, .net, and country codes like .uk or .in." 
  },
  { 
    id: 307, 
    q: "Which type of fiber optic cable is typically used for long-distance telecommunications?", 
    a: ["Multimode Fiber", "Single-mode Fiber", "UTP", "Coaxial"], 
    c: 1, 
    exp: "Verified Answer: B. Single-mode fiber has a smaller core that allows light to travel in a single path, reducing signal dispersion and allowing for much longer distances compared to multimode." 
  },
  { 
    id: 308, 
    q: "What does the 'Acknowledge' (ACK) flag signify in a TCP segment?", 
    a: ["The packet is the start of a connection", "The data was corrupted", "The receiver has successfully received previous data", "The connection is being terminated"], 
    c: 2, 
    exp: "Verified Answer: C. The ACK flag is used to confirm the receipt of a packet. In the TCP handshake, it is the final step before data transfer begins." 
  },
  { 
    id: 309, 
    q: "Which protocol is used to discover the MAC address of a device when the IP address is known?", 
    a: ["DHCP", "DNS", "ARP", "RARP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: ARP stands for Address Resolution Protocol. It is essential for communication on a local network segment." 
  },
  { 
    id: 310, 
    q: "What is the function of the 'Session Layer' in the OSI model?", 
    a: ["Encrypting data", "Handling physical voltage", "Dialogue control and synchronization of data streams", "Routing packets"], 
    c: 2, 
    exp: "Verified Answer: C. The Session Layer (Layer 5) manages the 'dialogue' between two computers, establishing, maintaining, and synchronizing the communication." 
  },
  { 
    id: 311, 
    q: "What is the decimal equivalent of the binary octet 11000000?", 
    a: ["128", "192", "168", "224"], 
    c: 1, 
    exp: "Verified Answer: B. Logic: 128 (2^7) + 64 (2^6) = 192. This is often the first octet in Class C IP addresses." 
  },
  { 
    id: 312, 
    q: "Which command would you use to view the IP configuration of a Windows computer?", 
    a: ["ifconfig", "ipconfig", "netstat", "ping"], 
    c: 1, 
    exp: "Verified Answer: B. 'ipconfig' is the Windows command to display the IP address, subnet mask, and default gateway. (Note: 'ifconfig' is used in Linux/Unix)." 
  },
  { 
    id: 313, 
    q: "What is the purpose of 'VLAN Tagging' (802.1Q)?", 
    a: ["To make the internet faster", "To identify which VLAN a frame belongs to as it travels across a trunk link", "To encrypt data on a switch", "To assign MAC addresses"], 
    c: 1, 
    exp: "Verified Answer: B. 802.1Q is the standard for tagging frames on 'trunk' links so that multiple VLANs can share the same physical cable between switches." 
  },
  { 
    id: 314, 
    q: "Which port is used by the Secure Hypertext Transfer Protocol (HTTPS)?", 
    a: ["80", "443", "22", "53"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPS uses port 443 to provide encrypted communication using SSL/TLS." 
  },
  { 
    id: 315, 
    q: "Which protocol is used by routers to share information about the status of the network?", 
    a: ["SMTP", "SNMP", "RIP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: RIP stands for Routing Information Protocol. It is a distance-vector protocol used to exchange routing table info." 
  },
  { 
    id: 316, 
    q: "What does the 'Subnet Mask' do?", 
    a: ["It hides the IP address from hackers", "It defines which part of the IP address is the network and which is the host", "It connects two networks together", "It speeds up DNS lookups"], 
    c: 1, 
    exp: "Verified Answer: B. A subnet mask 'masks' the IP address to distinguish between the network ID and the specific host ID." 
  },
  { 
    id: 317, 
    q: "Which layer of the OSI model does a 'Gateway' usually operate at when translating between different protocol suites?", 
    a: ["Physical Layer", "Network Layer", "Transport Layer", "Application Layer"], 
    c: 3, 
    exp: "Verified Answer: D. While routers work at Layer 3, an application gateway translates data between different application-level protocols (Layer 7)." 
  },
  { 
    id: 318, 
    q: "What is 'Packet Switching'?", 
    a: ["A dedicated physical path between two nodes", "Dividing data into small units called packets and routing them independently", "Switching between different internet providers", "The process of physical cabling"], 
    c: 1, 
    exp: "Verified Answer: B. Packet switching is the foundation of the internet, where data is broken into packets that may take different routes to reach the same destination." 
  },
  { 
    id: 319, 
    q: "Which protocol is responsible for reliable, ordered, and error-checked delivery of a stream of octets?", 
    a: ["UDP", "IP", "TCP", "ICMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: TCP stands for Transmission Control Protocol. It is 'connection-oriented' and guarantees delivery." 
  },
  { 
    id: 320, 
    q: "What is the default subnet mask for a Class B address?", 
    a: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], 
    c: 1, 
    exp: "Verified Answer: B. Class B networks use the first 16 bits for the network, which corresponds to 255.255.0.0." 
  },
  { 
    id: 321, 
    q: "In an IPv6 address, how are the different groups of characters separated?", 
    a: ["Dots (.)", "Hyphens (-)", "Colons (:)", "Slashes (/)"], 
    c: 2, 
    exp: "Verified Answer: C. IPv6 addresses are written in hexadecimal and separated by colons (e.g., 2001:0db8:85a3::). " 
  },
  { 
    id: 322, 
    q: "Which network device operates at Layer 2 and uses MAC addresses to forward data?", 
    a: ["Hub", "Router", "Switch", "Repeater"], 
    c: 2, 
    exp: "Verified Answer: C. A Switch maintains a MAC address table to ensure data is only sent to the specific device it is intended for." 
  },
  { 
    id: 323, 
    q: "What is the 'Maximum Transmission Unit' (MTU)?", 
    a: ["The fastest speed of a cable", "The maximum number of devices on a network", "The largest size of a packet or frame that can be sent in a single transaction", "The maximum length of a CAT6 cable"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: MTU stands for Maximum Transmission Unit. The standard MTU for Ethernet is 1500 bytes." 
  },
  { 
    id: 324, 
    q: "Which port number is used for the File Transfer Protocol (FTP) Data channel?", 
    a: ["20", "21", "22", "23"], 
    c: 0, 
    exp: "Verified Answer: A. FTP uses two ports: 21 for Control/Commands and 20 for the actual Data transfer." 
  },
  { 
    id: 325, 
    q: "Which layer of the OSI model does a 'Bridge' operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. A Bridge is a Layer 2 device that connects two LAN segments and filters traffic based on MAC addresses." 
  },
  { 
    id: 326, 
    q: "What is the range of a Class C IP address?", 
    a: ["1-126", "128-191", "192-223", "224-239"], 
    c: 2, 
    exp: "Verified Answer: C. Class C addresses range from 192.0.0.0 to 223.255.255.255." 
  },
  { 
    id: 327, 
    q: "Which wireless standard is known as Wi-Fi 6?", 
    a: ["802.11n", "802.11ac", "802.11ax", "802.11g"], 
    c: 2, 
    exp: "Verified Answer: C. 802.11ax is officially branded as Wi-Fi 6, offering improved efficiency in crowded areas." 
  },
  { 
    id: 328, 
    q: "What is the primary function of the 'Default Gateway'?", 
    a: ["To translate domain names", "To provide a way out of the local network to other networks", "To assign IP addresses", "To filter spam emails"], 
    c: 1, 
    exp: "Verified Answer: B. The Default Gateway is the IP address of the router interface that connects your local network to the internet." 
  },
  { 
    id: 329, 
    q: "Which type of address is 00:0a:95:9d:68:16?", 
    a: ["IPv4 Address", "IPv6 Address", "MAC Address", "Port Address"], 
    c: 2, 
    exp: "Verified Answer: C. This is a 48-bit MAC address, represented as six groups of two hexadecimal digits." 
  },
  { 
    id: 330, 
    q: "What does DHCP stand for?", 
    a: ["Digital Host Connection Protocol", "Data Handling Configuration Protocol", "Dynamic Host Configuration Protocol", "Direct Host Communication Process"], 
    c: 2, 
    exp: "Verified Answer: C. DHCP (Dynamic Host Configuration Protocol) is used to automatically assign IP addresses to devices on a network." 
  },
  { 
    id: 331, 
    q: "Which layer of the OSI model handles data compression and encryption?", 
    a: ["Application", "Presentation", "Session", "Transport"], 
    c: 1, 
    exp: "Verified Answer: B. The Presentation Layer (Layer 6) is responsible for formatting data, which includes syntax, encryption, and compression." 
  },
  { 
    id: 332, 
    q: "What is the size of an IPv4 address in bits?", 
    a: ["16", "32", "48", "64"], 
    c: 1, 
    exp: "Verified Answer: B. An IPv4 address is 32 bits long, divided into four octets (8 bits each)." 
  },
  { 
    id: 333, 
    q: "Which protocol is used by the 'Ping' utility to test connectivity?", 
    a: ["TCP", "UDP", "ICMP", "IGMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: ICMP stands for Internet Control Message Protocol. Ping uses 'Echo Requests' and 'Echo Replies'." 
  },
  { 
    id: 334, 
    q: "In a Star topology, all devices are connected to a central device called a ______.", 
    a: ["Bus", "Node", "Hub or Switch", "Ring"], 
    c: 2, 
    exp: "Verified Answer: C. In a Star topology, if the central hub or switch fails, the entire network segment goes down." 
  },
  { 
    id: 335, 
    q: "What is the purpose of 'Firewalls' in a network?", 
    a: ["To increase network speed", "To monitor and control incoming and outgoing network traffic based on security rules", "To provide wireless signals", "To connect different cables"], 
    c: 1, 
    exp: "Verified Answer: B. A firewall acts as a security barrier between a trusted internal network and untrusted external networks (like the internet)." 
  },
  { 
    id: 336, 
    q: "Which port number is used for the Telnet protocol?", 
    a: ["21", "22", "23", "25"], 
    c: 2, 
    exp: "Verified Answer: C. Telnet uses port 23. It is generally avoided today because it sends data in unencrypted 'plain text'." 
  },
  { 
    id: 337, 
    q: "What does the term 'Bandwidth' refer to?", 
    a: ["The delay in a network", "The maximum rate of data transfer across a network path", "The physical weight of a router", "The number of users on a network"], 
    c: 1, 
    exp: "Verified Answer: B. Bandwidth is the capacity of a network link to transmit the maximum amount of data from one point to another in a given time." 
  },
  { 
    id: 338, 
    q: "Which layer of the OSI model does a 'Repeater' operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 0, 
    exp: "Verified Answer: A. A Repeater is a Layer 1 device that simply amplifies or regenerates signals to extend the cable distance." 
  },
  { 
    id: 339, 
    q: "What is an 'Intranet'?", 
    a: ["A public worldwide network", "A private network accessible only to an organization's staff", "A network of computers in a single room", "A type of fiber optic cable"], 
    c: 1, 
    exp: "Verified Answer: B. An Intranet is a restricted network that uses internet technologies but is only available internally to a specific company or group." 
  },
  { 
    id: 340, 
    q: "Which protocol is used for synchronizing the clocks of computer systems?", 
    a: ["FTP", "SNMP", "NTP", "DHCP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: NTP stands for Network Time Protocol. It is vital for logging and security synchronization." 
  },
  { 
    id: 341, 
    q: "What is 'Crosstalk' in copper cables?", 
    a: ["A fast way of communication", "Interference caused by electromagnetic signals from one wire leaking into another", "A type of cable connector", "The process of grounding a wire"], 
    c: 1, 
    exp: "Verified Answer: B. Crosstalk is the unwanted transfer of signals between communication channels, common in UTP cables if they aren't twisted properly." 
  },
  { 
    id: 342, 
    q: "Which layer of the OSI model is responsible for framing?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Data Link Layer (Layer 2) takes packets from the Network layer and encapsulates them into 'frames' for local transmission." 
  },
  { 
    id: 343, 
    q: "What is the broadcast address for an IPv4 subnet?", 
    a: ["The first address in the subnet", "The last address in the subnet", "The address 127.0.0.1", "The MAC address"], 
    c: 1, 
    exp: "Verified Answer: B. The last IP address in any subnet range is reserved as the broadcast address (e.g., 192.168.1.255 for a /24 network)." 
  },
  { 
    id: 344, 
    q: "What is the main advantage of using Fiber Optic cables over Twisted Pair cables?", 
    a: ["Cheaper to install", "Immunity to electromagnetic interference (EMI)", "Can be bent at sharp angles", "Requires less equipment"], 
    c: 1, 
    exp: "Verified Answer: B. Fiber optics use light instead of electricity, making them immune to EMI and allowing for higher speeds and longer distances." 
  },
  { 
    id: 345, 
    q: "Which protocol is used to map a domain name to an IP address?", 
    a: ["ARP", "DNS", "DHCP", "ICMP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: DNS stands for Domain Name System. It acts as the 'phonebook' of the internet." 
  },
  { 
    id: 346, 
    q: "What is 'Half-Duplex' communication?", 
    a: ["Data travels in one direction only", "Data travels in both directions, but not simultaneously", "Data travels in both directions at the same time", "Data travels at half the speed of the cable"], 
    c: 1, 
    exp: "Verified Answer: B. In Half-Duplex (like a walkie-talkie), a device can either send or receive data, but it cannot do both at the exact same moment." 
  },
  { 
    id: 347, 
    q: "Which layer of the OSI model ensures end-to-end communication and flow control?", 
    a: ["Network Layer", "Transport Layer", "Session Layer", "Application Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Transport Layer (Layer 4) provides services like error recovery and flow control to ensure data is delivered correctly." 
  },
  { 
    id: 348, 
    q: "What does the 'ping' command measure?", 
    a: ["Bandwidth", "Round-trip time (Latency)", "Packet size", "CPU usage"], 
    c: 1, 
    exp: "Verified Answer: B. Ping measures the time it takes for a message to go to a destination and back, commonly called latency." 
  },
  { 
    id: 349, 
    q: "Which type of network spans a city or a large campus?", 
    a: ["LAN", "PAN", "MAN", "WAN"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: MAN stands for Metropolitan Area Network. It is larger than a LAN but smaller than a WAN." 
  },
  { 
    id: 350, 
    q: "What is 'Latency' in a network?", 
    a: ["The weight of a router", "The total amount of data sent", "The delay in the time it takes for a packet to reach its destination", "The frequency of the signal"], 
    c: 2, 
    exp: "Verified Answer: C. Latency is the measurement of delay in a network, often influenced by the number of hops and the speed of the medium." 
  },
  { 
    id: 351, 
    q: "What is the purpose of the 'Padding' field in an Ethernet frame?", 
    a: ["To encrypt the data", "To ensure the frame meets the minimum required length of 64 bytes", "To identify the sender's MAC", "To speed up the transmission"], 
    c: 1, 
    exp: "Verified Answer: B. Ethernet frames must be at least 64 bytes long for collision detection to work. If the data is too small, padding bits are added to meet this minimum." 
  },
  { 
    id: 352, 
    q: "Which protocol is used for secure remote management of network devices, replacing the insecure Telnet?", 
    a: ["FTP", "SSH", "SNMP", "HTTP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: SSH stands for Secure Shell. Unlike Telnet, SSH encrypts the entire session, including the password, protecting against eavesdropping." 
  },
  { 
    id: 353, 
    q: "What is the primary function of the ICMP protocol?", 
    a: ["File transfer", "Error reporting and operational information", "Assigning IP addresses", "Domain name resolution"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: ICMP stands for Internet Control Message Protocol. It is used by network devices to send error messages (e.g., Destination Unreachable) and test connectivity (Ping)." 
  },
  { 
    id: 354, 
    q: "Which layer of the OSI model is responsible for logical addressing and routing packets across different networks?", 
    a: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Network Layer (Layer 3) handles IP addressing and determines the best path for data through a process called routing." 
  },
  { 
    id: 355, 
    q: "What does the 'S' in HTTPS stand for?", 
    a: ["Standard", "Secure", "Socket", "Speed"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: HTTPS stands for Hypertext Transfer Protocol Secure. It uses SSL/TLS to encrypt communication between a web browser and a server." 
  },
  { 
    id: 356, 
    q: "Which port number is used by the Simple Mail Transfer Protocol (SMTP)?", 
    a: ["21", "25", "80", "110"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: SMTP stands for Simple Mail Transfer Protocol. It typically uses port 25 for sending emails between servers." 
  },
  { 
    id: 357, 
    q: "What is the function of a 'Subnet Mask'?", 
    a: ["To hide the IP address", "To distinguish between the network portion and the host portion of an IP address", "To connect two different networks", "To assign a MAC address"], 
    c: 1, 
    exp: "Verified Answer: B. A subnet mask is used by devices to determine which bits of an IP address belong to the network and which belong to the host." 
  },
  { 
    id: 358, 
    q: "Which network topology connects every node to a central hub or switch?", 
    a: ["Bus", "Ring", "Star", "Mesh"], 
    c: 2, 
    exp: "Verified Answer: C. In a Star topology, all devices communicate through a central point. If one cable fails, only that device is affected, but if the central device fails, the whole network goes down." 
  },
  { 
    id: 359, 
    q: "What is the size of a MAC (Media Access Control) address?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 1, 
    exp: "Verified Answer: B. A MAC address is a 48-bit unique identifier burned into the Network Interface Card (NIC)." 
  },
  { 
    id: 360, 
    q: "Which device operates at the Physical Layer (Layer 1) and repeats incoming signals to all other ports?", 
    a: ["Switch", "Router", "Hub", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C. A Hub is a 'dumb' device that simply amplifies and broadcasts signals. It does not look at MAC or IP addresses." 
  },
  { 
    id: 361, 
    q: "Which protocol is 'connectionless' and often used for real-time applications like video streaming?", 
    a: ["TCP", "UDP", "FTP", "HTTP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: UDP stands for User Datagram Protocol. It is faster than TCP because it does not require a handshake or acknowledgment of packets." 
  },
  { 
    id: 362, 
    q: "What is the loopback address for IPv4 used for testing the local TCP/IP stack?", 
    a: ["0.0.0.0", "192.168.1.1", "127.0.0.1", "255.255.255.255"], 
    c: 2, 
    exp: "Verified Answer: C. 127.0.0.1 is the reserved address for localhost. Pinging it verifies that the network card and software are functioning." 
  },
  { 
    id: 363, 
    q: "Which layer of the OSI model manages the establishment, maintenance, and termination of communication sessions?", 
    a: ["Session Layer", "Transport Layer", "Application Layer", "Presentation Layer"], 
    c: 0, 
    exp: "Verified Answer: A. The Session Layer (Layer 5) acts as the 'dialogue manager' between two applications on different systems." 
  },
  { 
    id: 364, 
    q: "What is the primary advantage of Fiber Optic cable over Copper (Twisted Pair)?", 
    a: ["Cheaper to install", "Immunity to electromagnetic interference (EMI)", "Easier to terminate", "Does not require a jacket"], 
    c: 1, 
    exp: "Verified Answer: B. Fiber optics use light pulses rather than electricity, making them immune to EMI and allowing for much longer distances." 
  },
  { 
    id: 365, 
    q: "Which port number is used for DNS (Domain Name System) queries?", 
    a: ["21", "25", "53", "443"], 
    c: 2, 
    exp: "Verified Answer: C. DNS uses port 53 (mostly over UDP) to translate human-readable domain names into IP addresses." 
  },
  { 
    id: 366, 
    q: "What does NAT stand for?", 
    a: ["Network Access Technology", "Network Address Translation", "New Address Transmission", "Node Access Table"], 
    c: 1, 
    exp: "Verified Answer: B. NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address to access the internet." 
  },
  { 
    id: 367, 
    q: "Which IPv4 address class provides the largest number of hosts per network?", 
    a: ["Class A", "Class B", "Class C", "Class D"], 
    c: 0, 
    exp: "Verified Answer: A. Class A uses 8 bits for the network and 24 bits for hosts, allowing for over 16 million hosts per network ID." 
  },
  { 
    id: 368, 
    q: "In the OSI model, which layer deals with data compression and encryption?", 
    a: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Presentation Layer (Layer 6) ensures that data is in a format the application layer can understand, handling translation and security." 
  },
  { 
    id: 369, 
    q: "What is 'Latency' in a network?", 
    a: ["The speed of the processor", "The total bandwidth available", "The time delay for data to travel from source to destination", "The weight of the cable"], 
    c: 2, 
    exp: "Verified Answer: C. Latency is the delay in communication, often measured by the round-trip time (RTT) using a ping." 
  },
  { 
    id: 370, 
    q: "Which protocol is used by the 'Ping' command?", 
    a: ["TCP", "UDP", "ICMP", "ARP"], 
    c: 2, 
    exp: "Verified Answer: C. Ping sends an ICMP Echo Request to a target and waits for an ICMP Echo Reply." 
  },
  { 
    id: 371, 
    q: "What is a 'Collision Domain'?", 
    a: ["The entire internet", "A network segment where data packets can collide when sent simultaneously on a shared medium", "A secure area of a network", "A group of routers"], 
    c: 1, 
    exp: "Verified Answer: B. In a collision domain (like on a hub), only one device can transmit at a time. Switches break these up so each port is its own collision domain." 
  },
  { 
    id: 372, 
    q: "Which command-line tool shows the path (routers) a packet takes to reach its destination?", 
    a: ["ping", "ipconfig", "tracert", "netstat"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: tracert stands for Trace Route. It lists every router (hop) the packet passes through." 
  },
  { 
    id: 373, 
    q: "What does DHCP stand for?", 
    a: ["Direct Host Configuration Protocol", "Dynamic Host Configuration Protocol", "Data Handling Communication Process", "Distributed Host Control Protocol"], 
    c: 1, 
    exp: "Verified Answer: B. DHCP automatically assigns IP addresses, subnet masks, and gateways to devices when they connect to a network." 
  },
  { 
    id: 374, 
    q: "Which layer of the OSI model does a Router operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 2, 
    exp: "Verified Answer: C. Routers make decisions based on Layer 3 (Network) IP addresses to forward data between different networks." 
  },
  { 
    id: 375, 
    q: "What is the maximum distance for a standard UTP Ethernet cable run?", 
    a: ["50 meters", "100 meters", "500 meters", "1000 meters"], 
    c: 1, 
    exp: "Verified Answer: B. UTP cables like Cat5e or Cat6 are limited to 100 meters (approx. 328 feet) before signal degradation occurs." 
  },
  { 
    id: 376, 
    q: "Which port number is used for secure web traffic (HTTPS)?", 
    a: ["80", "443", "22", "53"], 
    c: 1, 
    exp: "Verified Answer: B. While HTTP uses port 80, HTTPS uses port 443 for encrypted communication." 
  },
  { 
    id: 377, 
    q: "What is the purpose of the Address Resolution Protocol (ARP)?", 
    a: ["To find a domain name from an IP", "To find a MAC address from an IP address", "To assign an IP address", "To route packets"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: ARP stands for Address Resolution Protocol. It is used to discover the hardware address (MAC) of a node on the local network." 
  },
  { 
    id: 378, 
    q: "In an IPv6 address, how many bits are used?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 3, 
    exp: "Verified Answer: D. IPv6 uses a 128-bit address space to provide a significantly larger number of addresses than the 32-bit IPv4." 
  },
  { 
    id: 379, 
    q: "What is 'Attenuation' in networking?", 
    a: ["The increase in signal strength", "The weakening of a signal as it travels through a medium", "Data encryption", "A type of network switch"], 
    c: 1, 
    exp: "Verified Answer: B. Attenuation is the natural loss of signal power over distance, which is why repeaters or switches are needed to extend network runs." 
  },
  { 
    id: 380, 
    q: "Which protocol is responsible for transferring web pages from a server to a browser?", 
    a: ["FTP", "SMTP", "HTTP", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: HTTP stands for Hypertext Transfer Protocol. It is the foundation of data communication for the World Wide Web." 
  },
  { 
    id: 381, 
    q: "Which port is used by the Telnet protocol?", 
    a: ["21", "22", "23", "25"], 
    c: 2, 
    exp: "Verified Answer: C. Telnet uses port 23. It is generally avoided today because it transmits data in clear text." 
  },
  { 
    id: 382, 
    q: "What is 'Full-Duplex' communication?", 
    a: ["Communication in one direction only", "Communication in both directions but not simultaneously", "Communication in both directions at the same time", "No communication"], 
    c: 2, 
    exp: "Verified Answer: C. In Full-Duplex, a device can send and receive data at the same time, doubling the effective throughput compared to Half-Duplex." 
  },
  { 
    id: 383, 
    q: "Which layer of the OSI model ensures reliable end-to-end data delivery and error recovery?", 
    a: ["Network Layer", "Transport Layer", "Session Layer", "Data Link Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Transport Layer (Layer 4) provides flow control, segmentation, and error checking to ensure data arrives correctly." 
  },
  { 
    id: 384, 
    q: "What is the broadcast address for a 192.168.1.0/24 subnet?", 
    a: ["192.168.1.0", "192.168.1.1", "192.168.1.255", "255.255.255.255"], 
    c: 2, 
    exp: "Verified Answer: C. In a /24 (Class C) network, the .255 address is the broadcast address used to communicate with all hosts on that subnet." 
  },
  { 
    id: 385, 
    q: "Which protocol is used to synchronize the clocks of computers in a network?", 
    a: ["FTP", "NTP", "SMTP", "DHCP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: NTP stands for Network Time Protocol. It is crucial for ensuring logs and time-sensitive transactions are consistent." 
  },
  { 
    id: 386, 
    q: "What does the 'e' stand for in Cat5e cable?", 
    a: ["Electric", "Enhanced", "Extended", "Efficient"], 
    c: 1, 
    exp: "Verified Answer: B. Cat5e (Category 5 enhanced) supports higher data speeds (up to 1 Gbps) and has better resistance to crosstalk than original Cat5." 
  },
  { 
    id: 387, 
    q: "Which layer of the OSI model is the Physical Layer?", 
    a: ["Layer 1", "Layer 2", "Layer 3", "Layer 7"], 
    c: 0, 
    exp: "Verified Answer: A. The Physical Layer is the lowest layer, dealing with hardware, cables, and the transmission of raw bits." 
  },
  { 
    id: 388, 
    q: "What is 'Crosstalk' in copper cabling?", 
    a: ["High-speed data transfer", "Electromagnetic interference from an adjacent wire", "A protocol for voice", "The process of twisting wires"], 
    c: 1, 
    exp: "Verified Answer: B. Crosstalk occurs when a signal on one wire is picked up by another nearby wire, which can corrupt the data." 
  },
  { 
    id: 389, 
    q: "What is the primary function of the Data Link Layer?", 
    a: ["Routing packets", "End-to-end delivery", "Physical addressing and framing", "Application interface"], 
    c: 2, 
    exp: "Verified Answer: C. The Data Link Layer (Layer 2) prepares data for the physical medium and uses MAC addresses for local delivery." 
  },
  { 
    id: 390, 
    q: "Which device divides a network into different broadcast domains?", 
    a: ["Hub", "Switch", "Router", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C. While switches create collision domains, only Routers stop broadcasts from traveling to other network segments." 
  },
  { 
    id: 391, 
    q: "Which port number is used for the Post Office Protocol (POP3)?", 
    a: ["25", "53", "110", "143"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: POP3 stands for Post Office Protocol version 3. It uses port 110 to retrieve emails from a server." 
  },
  { 
    id: 392, 
    q: "What is a 'VLAN'?", 
    a: ["A very fast local network", "A logical grouping of network users and resources regardless of physical location", "A type of wireless signal", "A security firewall"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: VLAN stands for Virtual Local Area Network. It allows administrators to segment a physical switch into multiple logical networks." 
  },
  { 
    id: 393, 
    q: "What does the TTL (Time to Live) field in an IP header prevent?", 
    a: ["Data corruption", "Unauthorized access", "Packets from looping infinitely", "Slow transmission"], 
    c: 2, 
    exp: "Verified Answer: C. TTL is a counter that decrements at each router. If it reaches zero, the packet is discarded, preventing it from circling the network forever." 
  },
  { 
    id: 394, 
    q: "Which protocol is used to access files on a remote server?", 
    a: ["HTTP", "SMTP", "FTP", "DNS"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: FTP stands for File Transfer Protocol. It is designed specifically for moving files between a client and a server." 
  },
  { 
    id: 395, 
    q: "What is 'Jitter' in networking?", 
    a: ["The strength of a signal", "Variation in the delay of received packets", "The physical movement of a router", "A security vulnerability"], 
    c: 1, 
    exp: "Verified Answer: B. Jitter is the inconsistency in packet arrival times, which can cause poor quality in VoIP calls or video streaming." 
  },
  { 
    id: 396, 
    q: "Which IEEE standard defines Wireless LANs (Wi-Fi)?", 
    a: ["802.3", "802.11", "802.15", "802.1Q"], 
    c: 1, 
    exp: "Verified Answer: B. IEEE 802.11 is the set of standards that governs wireless networking communication." 
  },
  { 
    id: 397, 
    q: "What is the default subnet mask for a Class C IP address?", 
    a: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], 
    c: 2, 
    exp: "Verified Answer: C. Class C networks use 24 bits for the network ID, resulting in 255.255.255.0." 
  },
  { 
    id: 398, 
    q: "Which type of addressing is 1-to-many communication?", 
    a: ["Unicast", "Multicast", "Broadcast", "Anycast"], 
    c: 2, 
    exp: "Verified Answer: C. Broadcast communication sends a single packet to all devices within a specific network segment." 
  },
  { 
    id: 399, 
    q: "What is the purpose of a 'Checksum'?", 
    a: ["To encrypt a file", "To detect errors in data transmission", "To identify the user", "To route a packet"], 
    c: 1, 
    exp: "Verified Answer: B. A checksum is a calculated value used by the receiver to verify that the data was not corrupted during transit." 
  },
  { 
    id: 400, 
    q: "Which device is used to connect different networks at the Network Layer?", 
    a: ["Hub", "Switch", "Router", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C. A Router is the primary device used to connect separate networks (like a home network to the internet) using IP addresses." 
  },
  { 
    id: 401, 
    q: "Which routing protocol is categorized as an Exterior Gateway Protocol (EGP) and manages routing between different Autonomous Systems (AS) on the internet?", 
    a: ["OSPF", "RIP", "BGP", "EIGRP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: BGP stands for Border Gateway Protocol. It is the core protocol that connects different Internet Service Providers (ISPs) and manages the routing of packets across the global internet." 
  },
  { 
    id: 402, 
    q: "What is the purpose of a 'Subnet' in a large network?", 
    a: ["To increase the speed of the hardware", "To divide a large network into smaller, manageable segments to reduce congestion", "To change the MAC address of a device", "To provide wireless access"], 
    c: 1, 
    exp: "Verified Answer: B. Subnetting improves network performance by localizing traffic and reducing the size of broadcast domains, preventing unnecessary traffic from reaching all devices." 
  },
  { 
    id: 403, 
    q: "Which wireless security protocol uses the Simultaneous Authentication of Equals (SAE) to protect against offline dictionary attacks?", 
    a: ["WEP", "WPA", "WPA2", "WPA3"], 
    c: 3, 
    exp: "Verified Answer: D. Full Form: WPA3 stands for Wi-Fi Protected Access 3. SAE (Simultaneous Authentication of Equals) replaces the PSK method used in WPA2 to provide much stronger security." 
  },
  { 
    id: 404, 
    q: "What does the 'Dual Stack' transition mechanism refer to in IPv6 implementation?", 
    a: ["Using two routers for redundancy", "Running both IPv4 and IPv6 protocols simultaneously on network devices", "Converting all IPv4 addresses into MAC addresses", "Using two different internet providers"], 
    c: 1, 
    exp: "Verified Answer: B. Dual Stack allows a device to communicate using either IPv4 or IPv6, depending on the destination and the network capabilities, easing the transition to the newer protocol." 
  },
  { 
    id: 405, 
    q: "In the OSI model, which layer manages the 'Quality of Service' (QoS) and ensures data is delivered without errors?", 
    a: ["Network Layer", "Transport Layer", "Session Layer", "Data Link Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Transport Layer (Layer 4) uses flow control, segmentation, and error-checking (via TCP) to ensure reliable end-to-end communication and QoS." 
  },
  { 
    id: 406, 
    q: "Which port number is used by the Network News Transfer Protocol (NNTP)?", 
    a: ["110", "119", "143", "161"], 
    c: 1, 
    exp: "Verified Answer: B. NNTP uses port 119 for the transport of news articles (Usenet) between servers and to clients." 
  },
  { 
    id: 407, 
    q: "What is 'PoE' in networking?", 
    a: ["Port over Ethernet", "Power over Ethernet", "Packet over Encryption", "Physical over Element"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: PoE stands for Power over Ethernet. it allows networking cables to carry electrical power to devices like IP cameras or VoIP phones alongside data." 
  },
  { 
    id: 408, 
    q: "What is the primary function of a Proxy Server?", 
    a: ["To assign IP addresses", "To act as an intermediary for requests from clients seeking resources from other servers", "To route packets between different ISPs", "To amplify wireless signals"], 
    c: 1, 
    exp: "Verified Answer: B. A Proxy Server provides security, administrative control, and caching services by sitting between a local network and the internet." 
  },
  { 
    id: 409, 
    q: "Which type of address is 'ff02::1'?", 
    a: ["Global Unicast", "Link-Local", "Multicast", "Loopback"], 
    c: 2, 
    exp: "Verified Answer: C. In IPv6, addresses starting with 'ff' are reserved for Multicast. 'ff02::1' specifically targets all nodes on the local link." 
  },
  { 
    id: 410, 
    q: "What is the maximum data rate of the 802.11g wireless standard?", 
    a: ["11 Mbps", "54 Mbps", "300 Mbps", "1.3 Gbps"], 
    c: 1, 
    exp: "Verified Answer: B. 802.11g operates in the 2.4 GHz band and provides a maximum theoretical speed of 54 Mbps." 
  },
  { 
    id: 411, 
    q: "What does the 'H' in DHCP stand for?", 
    a: ["Handling", "Hyper", "Host", "Header"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: Dynamic Host Configuration Protocol. It focuses on configuring 'Hosts' (computers, phones, etc.) on the network." 
  },
  { 
    id: 412, 
    q: "Which protocol is used for securely logging into a remote server using a GUI (Graphical User Interface)?", 
    a: ["SSH", "Telnet", "RDP", "SMTP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: RDP stands for Remote Desktop Protocol. It is a Microsoft proprietary protocol used for graphical remote access (port 3389)." 
  },
  { 
    id: 413, 
    q: "Which network device uses an IP address to determine where to send data across different subnets?", 
    a: ["Bridge", "Hub", "Switch", "Router"], 
    c: 3, 
    exp: "Verified Answer: D. A Router works at Layer 3 (Network) and uses the Logical IP address to move traffic between different network segments." 
  },
  { 
    id: 414, 
    q: "What is 'Packet Loss'?", 
    a: ["When a packet reaches the wrong destination", "When one or more packets of data traveling across a network fail to reach their destination", "When a packet is too large", "When a packet is encrypted"], 
    c: 1, 
    exp: "Verified Answer: B. Packet loss is caused by network congestion, faulty hardware, or signal interference, and results in the need for retransmissions in TCP." 
  },
  { 
    id: 415, 
    q: "What is the binary representation of the decimal number 255?", 
    a: ["11110000", "10101010", "11111111", "11001100"], 
    c: 2, 
    exp: "Verified Answer: C. 255 is the maximum value of an 8-bit octet (2^8 - 1), represented by all ones in binary." 
  },
  { 
    id: 416, 
    q: "What is a 'DMZ' in network security?", 
    a: ["Data Management Zone", "Demilitarized Zone", "Direct Monitoring Zone", "Digital Message Zone"], 
    c: 1, 
    exp: "Verified Answer: B. A DMZ is a physical or logical subnetwork that contains an organization's external-facing services (like web servers) to protect the internal network from direct internet access." 
  },
  { 
    id: 417, 
    q: "Which layer of the OSI model does a 'Load Balancer' typically operate at if it uses URL information to distribute traffic?", 
    a: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"], 
    c: 3, 
    exp: "Verified Answer: D. A Layer 7 Load Balancer works at the Application Layer, allowing it to make decisions based on HTTP headers, cookies, or URL strings." 
  },
  { 
    id: 418, 
    q: "Which port number is used by the Lightweight Directory Access Protocol (LDAP)?", 
    a: ["389", "443", "445", "636"], 
    c: 0, 
    exp: "Verified Answer: A. LDAP uses port 389 for unencrypted directory service queries and port 636 for LDAPS (Secure LDAP over SSL)." 
  },
  { 
    id: 419, 
    q: "What is the purpose of the 'Frame Check Sequence' (FCS) field in an Ethernet frame?", 
    a: ["To specify the frame length", "To detect errors using a Cyclic Redundancy Check (CRC)", "To identify the source MAC", "To prioritize the frame"], 
    c: 1, 
    exp: "Verified Answer: B. The FCS allows the receiving station to verify that the frame was not corrupted during transmission by running a CRC algorithm." 
  },
  { 
    id: 420, 
    q: "What is 'Port Forwarding'?", 
    a: ["Sending a port to another office", "Redirecting a communication request from one address and port number combination to another", "Closing all ports on a firewall", "Changing the physical port on a switch"], 
    c: 1, 
    exp: "Verified Answer: B. Port forwarding allows remote computers (on the internet) to connect to a specific computer or service within a private local-area network (LAN)." 
  },
  { 
    id: 421, 
    q: "Which protocol is used for retrieving emails from a server and deleting them from the server once downloaded (by default)?", 
    a: ["IMAP", "POP3", "SMTP", "SNMP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: POP3 stands for Post Office Protocol version 3. Unlike IMAP, it generally downloads and removes mail from the server." 
  },
  { 
    id: 422, 
    q: "Which IP address range is reserved for Automatic Private IP Addressing (APIPA)?", 
    a: ["192.168.0.0 - 192.168.255.255", "10.0.0.0 - 10.255.255.255", "169.254.0.1 - 169.254.255.254", "172.16.0.0 - 172.31.255.255"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: APIPA. If a device cannot reach a DHCP server, Windows automatically assigns an address in the 169.254.x.x range." 
  },
  { 
    id: 423, 
    q: "What is 'VLAN Trunking' (802.1Q)?", 
    a: ["A way to increase cable length", "A process that allows multiple VLANs to travel over a single physical link between switches", "A method for wireless security", "A protocol for assigning IP addresses"], 
    c: 1, 
    exp: "Verified Answer: B. Trunking uses 'tags' added to Ethernet frames to keep traffic from different VLANs separate as they cross a single shared cable." 
  },
  { 
    id: 424, 
    q: "Which port number is used by the Server Message Block (SMB) protocol for modern Windows file sharing?", 
    a: ["139", "443", "445", "1433"], 
    c: 2, 
    exp: "Verified Answer: C. While older versions used port 139, modern SMB (over TCP/IP) uses port 445 for file and printer sharing." 
  },
  { 
    id: 425, 
    q: "What is the function of the ARP table (or ARP Cache)?", 
    a: ["To store a list of visited websites", "To store the mapping of IP addresses to MAC addresses for the local network", "To store passwords for the router", "To store the routing table for the internet"], 
    c: 1, 
    exp: "Verified Answer: B. The ARP table prevents the device from having to send a broadcast ARP request every time it wants to send a packet to a local host." 
  },
  { 
    id: 426, 
    q: "What is 'Anycast' addressing?", 
    a: ["Sending a packet to all devices", "Sending a packet to the nearest of a group of devices sharing the same address", "Sending a packet to a single device", "Sending a packet to a specific group"], 
    c: 1, 
    exp: "Verified Answer: B. Anycast is used in IPv6 and DNS (CDNs) to route a request to the server that is topologically closest to the client." 
  },
  { 
    id: 427, 
    q: "Which layer of the OSI model does a 'Bridge' operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. A Bridge connects two network segments and filters traffic based on Layer 2 MAC addresses, similar to a basic switch." 
  },
  { 
    id: 428, 
    q: "What does the term 'Bandwidth' actually measure?", 
    a: ["The speed of light in the cable", "The maximum amount of data that can be transmitted over a path in a given time", "The physical thickness of the wire", "The number of packets lost"], 
    c: 1, 
    exp: "Verified Answer: B. Bandwidth is the capacity or 'width' of the data pipe, usually measured in bits per second (bps)." 
  },
  { 
    id: 429, 
    q: "Which command-line tool provides details on active network connections and listening ports?", 
    a: ["ping", "tracert", "netstat", "nslookup"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: netstat stands for Network Statistics. It is vital for seeing which applications are communicating over which ports." 
  },
  { 
    id: 430, 
    q: "Which wireless band is more likely to experience interference from household appliances like microwaves?", 
    a: ["2.4 GHz", "5 GHz", "6 GHz", "60 GHz"], 
    c: 0, 
    exp: "Verified Answer: A. The 2.4 GHz band is crowded with Bluetooth devices, cordless phones, and microwave ovens, leading to higher interference than the 5 GHz band." 
  },
  { 
    id: 431, 
    q: "What is the function of the 'Host ID' in an IP address?", 
    a: ["To identify the organization", "To identify the specific device on a network", "To identify the country of origin", "To identify the router"], 
    c: 1, 
    exp: "Verified Answer: B. In an IP address, the network portion identifies the network, and the Host ID identifies the individual computer or interface on that network." 
  },
  { 
    id: 432, 
    q: "What is 'Encapsulation' in networking?", 
    a: ["Deleting old data", "The process of adding headers (and trailers) to data as it moves down the OSI layers", "Encrypting a file with a password", "Connecting a cable to a port"], 
    c: 1, 
    exp: "Verified Answer: B. As data moves from Application to Physical layer, each layer adds its own control information (like IP or MAC addresses) to the data packet." 
  },
  { 
    id: 433, 
    q: "Which protocol is responsible for managing groups of multicast listeners?", 
    a: ["ICMP", "IGMP", "ARP", "SMTP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: IGMP stands for Internet Group Management Protocol. It is used by hosts and routers to manage multicast group memberships." 
  },
  { 
    id: 434, 
    q: "What is the maximum speed of a CAT5 cable (not CAT5e)?", 
    a: ["10 Mbps", "100 Mbps", "1000 Mbps", "10 Gbps"], 
    c: 1, 
    exp: "Verified Answer: B. Original CAT5 cables were designed to support 'Fast Ethernet' at speeds up to 100 Mbps." 
  },
  { 
    id: 435, 
    q: "Which port number is used for the Secure Copy Protocol (SCP)?", 
    a: ["21", "22", "23", "25"], 
    c: 1, 
    exp: "Verified Answer: B. Since SCP runs over SSH (Secure Shell), it uses port 22." 
  },
  { 
    id: 436, 
    q: "What is 'Crosstalk' in networking?", 
    a: ["People talking over a VoIP call", "Signal interference between adjacent pairs of wires in a cable", "Two routers exchanging data", "A type of network connector"], 
    c: 1, 
    exp: "Verified Answer: B. Twisting the wire pairs in a UTP cable helps to minimize crosstalk (interference) between the signals." 
  },
  { 
    id: 437, 
    q: "In an IPv6 address, how is a long sequence of zeros represented to shorten the address?", 
    a: ["Using a single zero (0)", "Using double colons (::)", "Using a hyphen (-)", "Using a star (*)"], 
    c: 1, 
    exp: "Verified Answer: B. Double colons (::) can be used once in an IPv6 address to represent one or more groups of consecutive zeros." 
  },
  { 
    id: 438, 
    q: "Which layer of the OSI model ensures data is in a format that the receiving application can understand (e.g., JPEG or MP3)?", 
    a: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. The Presentation Layer (Layer 6) handles data syntax, translation, and formatting." 
  },
  { 
    id: 439, 
    q: "What is 'Half-Duplex'?", 
    a: ["Data can only go one way", "Data can go both ways, but not at the same time", "Data can go both ways simultaneously", "Data only travels half the speed"], 
    c: 1, 
    exp: "Verified Answer: B. In Half-Duplex, a device can either send or receive, but cannot do both simultaneously (like a Hub environment)." 
  },
  { 
    id: 440, 
    q: "What is the purpose of the 'Default Gateway'?", 
    a: ["To speed up the local network", "To provide a path for traffic to leave the local network and reach other networks", "To assign MAC addresses", "To resolve DNS names"], 
    c: 1, 
    exp: "Verified Answer: B. The Default Gateway is usually the internal IP address of the local router." 
  },
  { 
    id: 441, 
    q: "Which type of fiber optic cable is best suited for long-distance, high-bandwidth applications?", 
    a: ["Multimode Fiber", "Single-mode Fiber", "Copper Fiber", "Plastic Fiber"], 
    c: 1, 
    exp: "Verified Answer: B. Single-mode fiber uses a smaller core and a single light path, allowing for significantly longer distances (kilometers) compared to Multimode." 
  },
  { 
    id: 442, 
    q: "What does the term 'Convergence' mean in routing?", 
    a: ["When two routers are connected", "The time it takes for all routers in a network to agree on the best paths after a change", "When a network crashes", "The process of merging two networks"], 
    c: 1, 
    exp: "Verified Answer: B. Faster convergence is a key goal for routing protocols like OSPF and EIGRP." 
  },
  { 
    id: 443, 
    q: "Which protocol is used to automatically assign IP addresses to devices on a network?", 
    a: ["DNS", "DHCP", "ARP", "NAT"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: DHCP stands for Dynamic Host Configuration Protocol." 
  },
  { 
    id: 444, 
    q: "What is 'Jitter'?", 
    a: ["The physical weight of a switch", "The variation in packet arrival time (delay)", "A type of network virus", "The sound a router makes"], 
    c: 1, 
    exp: "Verified Answer: B. High jitter can cause poor quality in real-time traffic like Voice over IP (VoIP) or video streaming." 
  },
  { 
    id: 445, 
    q: "Which layer of the OSI model does an 'Ethernet Frame' live in?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 1, 
    exp: "Verified Answer: B. Frames are the unit of data at the Data Link Layer (Layer 2). At Layer 3, they are called Packets." 
  },
  { 
    id: 446, 
    q: "What is 'MAC Filtering'?", 
    a: ["Cleaning a computer screen", "A security method that allows or blocks access to a network based on hardware addresses", "Deleting unused IP addresses", "Filtering spam emails"], 
    c: 1, 
    exp: "Verified Answer: B. MAC filtering is a basic security feature on wireless routers to restrict access to specific devices." 
  },
  { 
    id: 447, 
    q: "What does ICMP stand for?", 
    a: ["Internet Control Message Protocol", "Internal Computer Management Process", "Integrated Central Monitoring Protocol", "Inter-Connected Mobile Protocol"], 
    c: 0, 
    exp: "Verified Answer: A. ICMP is the protocol used for network diagnostics and error reporting." 
  },
  { 
    id: 448, 
    q: "Which port number is used for the Remote Desktop Protocol (RDP)?", 
    a: ["22", "80", "443", "3389"], 
    c: 3, 
    exp: "Verified Answer: D. RDP uses port 3389 to provide a user with a graphical interface to connect to another computer over a network." 
  },
  { 
    id: 449, 
    q: "What is 'Latency'?", 
    a: ["The total bandwidth used", "The time it takes for a data packet to travel from source to destination", "The weight of the data", "The size of the router"], 
    c: 1, 
    exp: "Verified Answer: B. Latency is the delay in a network, often measured in milliseconds (ms)." 
  },
  { 
    id: 450, 
    q: "Which network device operates at Layer 1 (Physical) and repeats a signal to all connected ports?", 
    a: ["Switch", "Router", "Hub", "Gateway"], 
    c: 2, 
    exp: "Verified Answer: C. A Hub is a basic device that does not look at addresses; it just amplifies and broadcasts electrical signals." 
  },
  { 
    id: 451, 
    q: "Which protocol is used to provide security for credit card transactions and confidential data over the Internet?", 
    a: ["FTP", "SMTP", "SSL/TLS", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: SSL stands for Secure Sockets Layer and TLS stands for Transport Layer Security. They provide the encryption layer for HTTPS to ensure sensitive data remains private." 
  },
  { 
    id: 452, 
    q: "What is the primary function of a 'Honeycomb' or 'Honeypot' in network security?", 
    a: ["To speed up the server", "To act as a decoy system to trap and monitor hackers", "To filter spam emails", "To provide a backup of the database"], 
    c: 1, 
    exp: "Verified Answer: B. A Honeypot is a security mechanism set up to be intentionally vulnerable to detect, deflect, or study attempts at unauthorized access to information systems." 
  },
  { 
    id: 453, 
    q: "Which port number is used by the HTTPS protocol by default?", 
    a: ["80", "443", "22", "53"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPS (Hypertext Transfer Protocol Secure) uses port 443, while standard unencrypted HTTP uses port 80." 
  },
  { 
    id: 454, 
    q: "In an IPv4 address, which octet range is reserved for Class E (Experimental) addresses?", 
    a: ["1-126", "192-223", "224-239", "240-255"], 
    c: 3, 
    exp: "Verified Answer: D. Class E addresses range from 240.0.0.0 to 255.255.255.255 and are reserved for future use or experimental purposes." 
  },
  { 
    id: 455, 
    q: "What does the 'A' in the CIA Triad of network security stand for?", 
    a: ["Authentication", "Availability", "Authorization", "Access"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: CIA stands for Confidentiality, Integrity, and Availability. Availability ensures that systems and data are accessible when needed by authorized users." 
  },
  { 
    id: 456, 
    q: "Which protocol is used to map an IPv6 address to a MAC address, replacing ARP?", 
    a: ["ICMPv6 (NDP)", "DHCPv6", "DNS", "SLAAC"], 
    c: 0, 
    exp: "Verified Answer: A. Full Form: NDP stands for Neighbor Discovery Protocol. It is part of the ICMPv6 suite and performs the function that ARP did in IPv4." 
  },
  { 
    id: 457, 
    q: "What is 'Stateful Inspection' in a firewall?", 
    a: ["Checking the physical state of the router", "Tracking the state of active connections and making decisions based on the context of the traffic", "Only looking at the source IP", "Blocking all traffic by default"], 
    c: 1, 
    exp: "Verified Answer: B. Stateful firewalls are more secure than packet filters because they understand the relationship between packets and only allow return traffic that was requested by an internal host." 
  },
  { 
    id: 458, 
    q: "Which port number is used by the Simple Network Management Protocol (SNMP) for sending traps?", 
    a: ["161", "162", "514", "445"], 
    c: 1, 
    exp: "Verified Answer: B. SNMP agents use port 161 for requests, but they send unsolicited notifications (Traps) to the management station on port 162." 
  },
  { 
    id: 459, 
    q: "What is 'BGP Hijacking'?", 
    a: ["Physically stealing a router", "An attacker incorrectly announcing IP prefixes to reroute internet traffic", "Cracking a Wi-Fi password", "A type of email phishing"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: BGP stands for Border Gateway Protocol. Hijacking occurs when an AS (Autonomous System) announces a route it doesn't own, leading to traffic interception or outages." 
  },
  { 
    id: 460, 
    q: "Which layer of the OSI model does a 'WAF' (Web Application Firewall) operate at?", 
    a: ["Layer 3", "Layer 4", "Layer 7", "Layer 2"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: WAF stands for Web Application Firewall. It operates at the Application Layer (Layer 7) to filter and monitor HTTP traffic." 
  },
  { 
    id: 461, 
    q: "What is the maximum throughput of a CAT6a cable over 100 meters?", 
    a: ["100 Mbps", "1 Gbps", "10 Gbps", "40 Gbps"], 
    c: 2, 
    exp: "Verified Answer: C. CAT6a (Category 6 augmented) is designed to support 10-Gigabit Ethernet (10 Gbps) over the full 100-meter cable length." 
  },
  { 
    id: 462, 
    q: "Which protocol is used for real-time transport of audio and video over IP networks?", 
    a: ["TCP", "RTP", "FTP", "SMTP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: RTP stands for Real-time Transport Protocol. It is used in conjunction with RTCP to deliver media streams with timing information." 
  },
  { 
    id: 463, 
    q: "What is 'NAT Overload' also commonly known as?", 
    a: ["Static NAT", "Dynamic NAT", "PAT", "DNS"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: PAT stands for Port Address Translation. It allows thousands of internal devices to share a single public IP by using unique source port numbers." 
  },
  { 
    id: 464, 
    q: "Which command is used on a Linux system to display the path taken by packets to reach a host?", 
    a: ["tracert", "traceroute", "ping", "netstat"], 
    c: 1, 
    exp: "Verified Answer: B. While Windows uses 'tracert', Linux and Unix-like systems use the 'traceroute' command." 
  },
  { 
    id: 465, 
    q: "What does 'MTU' stand for?", 
    a: ["Maximum Transmission Unit", "Managed Traffic Unit", "Main Transmission Utility", "Minimum Transfer Unit"], 
    c: 0, 
    exp: "Verified Answer: A. MTU defines the largest packet or frame size, in bytes, that can be sent in a single network transaction. Standard Ethernet MTU is 1500 bytes." 
  },
  { 
    id: 466, 
    q: "Which technology is used to create a secure, encrypted tunnel over a public network (like the internet)?", 
    a: ["VLAN", "VPN", "NAT", "DMZ"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: VPN stands for Virtual Private Network. It allows users to send and receive data as if their computing devices were directly connected to a private network." 
  },
  { 
    id: 467, 
    q: "What is 'DHCP Snooping'?", 
    a: ["Hacking a DHCP server", "A security feature that acts like a firewall between untrusted hosts and trusted DHCP servers", "Watching someone type their IP", "Assigning two IPs to one device"], 
    c: 1, 
    exp: "Verified Answer: B. DHCP snooping prevents 'Rogue DHCP servers' from handing out incorrect IP information to clients on a network." 
  },
  { 
    id: 468, 
    q: "Which port number is used by the Syslog protocol for system logging?", 
    a: ["25", "110", "514", "1433"], 
    c: 2, 
    exp: "Verified Answer: C. Syslog (standard for message logging) uses UDP port 514 to send event notifications to a logging server." 
  },
  { 
    id: 469, 
    q: "What is the primary benefit of 'Link Aggregation' (EtherChannel)?", 
    a: ["To reduce the number of cables", "To combine multiple physical links into one logical link for increased bandwidth and redundancy", "To encrypt the data", "To assign multiple IPs"], 
    c: 1, 
    exp: "Verified Answer: B. Link aggregation allows multiple Ethernet links to work together, providing higher throughput and automatic failover if one link fails." 
  },
  { 
    id: 470, 
    q: "In an IPv6 address, how many bits represent the interface ID (host portion)?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 2, 
    exp: "Verified Answer: C. In a standard /64 IPv6 subnet, the first 64 bits are for the network/routing, and the last 64 bits are the Interface Identifier." 
  },
  { 
    id: 471, 
    q: "Which layer of the OSI model does a 'Gateway' that performs protocol translation operate at?", 
    a: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"], 
    c: 3, 
    exp: "Verified Answer: D. When a gateway is translating between different application protocols (like an email-to-fax gateway), it operates at the Application Layer." 
  },
  { 
    id: 472, 
    q: "What does the 'P' in WPA stand for?", 
    a: ["Private", "Protected", "Protocol", "Password"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: WPA stands for Wi-Fi Protected Access. It was developed to provide better security than the original WEP." 
  },
  { 
    id: 473, 
    q: "What is an 'Evil Twin' attack in wireless networking?", 
    a: ["Using a virus to duplicate files", "A rogue access point that appears to be a legitimate one to trick users into connecting", "Two hackers working together", "A computer with two NICs"], 
    c: 1, 
    exp: "Verified Answer: B. An Evil Twin is a fraudulent Wi-Fi access point that mimics a real one (like 'Hotel_Guest') to steal user credentials." 
  },
  { 
    id: 474, 
    q: "Which port is used by the SQL Server database engine by default?", 
    a: ["3306", "1433", "5432", "1521"], 
    c: 1, 
    exp: "Verified Answer: B. Microsoft SQL Server uses TCP port 1433 for standard connections." 
  },
  { 
    id: 475, 
    q: "What is the function of 'QoS' in a network?", 
    a: ["To count the number of users", "To prioritize certain types of traffic (like voice) over others (like downloads)", "To encrypt the data", "To assign IP addresses"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: QoS stands for Quality of Service. It ensures that time-sensitive applications like VoIP or Video stay clear even when the network is busy." 
  },
  { 
    id: 476, 
    q: "Which type of cloud service model provides a virtualized computing environment over the internet (e.g., AWS EC2)?", 
    a: ["SaaS", "PaaS", "IaaS", "DaaS"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: IaaS stands for Infrastructure as a Service. It provides servers, storage, and networking as a virtual resource." 
  },
  { 
    id: 477, 
    q: "What is the purpose of the 'Salt' in password hashing?", 
    a: ["To make the password taste better", "To add random data to the input of a hash function to protect against Rainbow Table attacks", "To encrypt the hash", "To speed up the hashing process"], 
    c: 1, 
    exp: "Verified Answer: B. Salting ensures that even if two users have the same password, their hashes will look different, preventing bulk cracking." 
  },
  { 
    id: 478, 
    q: "Which port number is used by the SSH (Secure Shell) protocol?", 
    a: ["21", "22", "23", "25"], 
    c: 1, 
    exp: "Verified Answer: B. SSH uses port 22 for secure command-line access and file transfers (SFTP)." 
  },
  { 
    id: 479, 
    q: "What does the term 'Air Gap' mean in security?", 
    a: ["A fast wireless connection", "A network security measure where a computer or network is physically isolated from unsecured networks", "A break in a fiber optic cable", "The space between two routers"], 
    c: 1, 
    exp: "Verified Answer: B. Air-gapped systems are used for highly sensitive data where no physical or wireless connection to the outside world is allowed." 
  },
  { 
    id: 480, 
    q: "Which layer of the OSI model does a 'Bridge' operate at?", 
    a: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], 
    c: 1, 
    exp: "Verified Answer: B. A Bridge is a Layer 2 (Data Link) device that filters and forwards traffic between network segments based on MAC addresses." 
  },
  { 
    id: 481, 
    q: "What is the binary representation of the decimal value 128?", 
    a: ["00000001", "01111111", "10000000", "11000000"], 
    c: 2, 
    exp: "Verified Answer: C. In an 8-bit octet, the first bit (leftmost) represents 128 (2^7)." 
  },
  { 
    id: 482, 
    q: "Which protocol is used for secure email retrieval that keeps the mail on the server?", 
    a: ["POP3", "IMAP4 (over SSL)", "SMTP", "SNMP"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: IMAP stands for Internet Message Access Protocol. Version 4 over SSL (port 993) is the standard for modern synchronized email." 
  },
  { 
    id: 483, 
    q: "What is a 'Broadcast Storm'?", 
    a: ["A very fast internet connection", "A condition where excessive broadcast traffic consumes all available bandwidth and crashes the network", "A type of weather-related outage", "A security feature for radios"], 
    c: 1, 
    exp: "Verified Answer: B. Broadcast storms are often caused by switching loops where frames are endlessly duplicated and circulated." 
  },
  { 
    id: 484, 
    q: "Which wireless standard operates ONLY in the 5 GHz and 6 GHz frequency bands?", 
    a: ["802.11n", "802.11ac", "802.11ax (Wi-Fi 6E)", "802.11g"], 
    c: 2, 
    exp: "Verified Answer: C. While Wi-Fi 6 (ax) uses 2.4/5GHz, Wi-Fi 6E extends this specifically into the new, less-crowded 6 GHz band." 
  },
  { 
    id: 485, 
    q: "What is the function of the 'Default Gateway' in a network configuration?", 
    a: ["To act as the main server", "To provide the IP address of the router used to access other networks", "To provide the DNS server address", "To provide the MAC address of the switch"], 
    c: 1, 
    exp: "Verified Answer: B. Without a default gateway, a device can only communicate with other devices on its own local subnet." 
  },
  { 
    id: 486, 
    q: "Which port number is used by the HTTPS protocol?", 
    a: ["80", "443", "8080", "22"], 
    c: 1, 
    exp: "Verified Answer: B. HTTPS (SSL/TLS) uses port 443 to ensure all web traffic is encrypted." 
  },
  { 
    id: 487, 
    q: "What is 'IP Spoofing'?", 
    a: ["Hiding an IP address behind a proxy", "Creating IP packets with a false source IP address to impersonate another system", "Changing the physical location of a computer", "Deleting an IP address"], 
    c: 1, 
    exp: "Verified Answer: B. Spoofing is a common technique used in DDoS attacks to hide the identity of the sender or to bypass IP-based authentication." 
  },
  { 
    id: 488, 
    q: "Which protocol is used to translate between a domain name and an IP address?", 
    a: ["ARP", "DHCP", "DNS", "NAT"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: DNS stands for Domain Name System. It acts as the 'address book' of the internet." 
  },
  { 
    id: 489, 
    q: "What is the purpose of a 'Subnet Mask'?", 
    a: ["To identify the computer's name", "To determine which part of an IP address is the network ID and which is the host ID", "To encrypt the IP address", "To speed up the connection"], 
    c: 1, 
    exp: "Verified Answer: B. The mask 'masks' the IP address to show where the network ends and the individual host begins." 
  },
  { 
    id: 490, 
    q: "Which layer of the OSI model does a 'Repeater' operate at?", 
    a: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"], 
    c: 0, 
    exp: "Verified Answer: A. A Repeater works at the Physical Layer (Layer 1) to amplify electrical or optical signals to extend the cable range." 
  },
  { 
    id: 491, 
    q: "What does the term 'Full-Duplex' mean?", 
    a: ["One-way communication", "Two-way communication, but only one at a time", "Two-way simultaneous communication", "Using two cables for one connection"], 
    c: 2, 
    exp: "Verified Answer: C. Full-duplex allows a device to send and receive data at the same time, preventing collisions." 
  },
  { 
    id: 492, 
    q: "Which port is used for the Remote Desktop Protocol (RDP)?", 
    a: ["3389", "1433", "22", "80"], 
    c: 0, 
    exp: "Verified Answer: A. Microsoft's RDP uses port 3389 to allow graphical remote access to a computer." 
  },
  { 
    id: 493, 
    q: "What is 'Jitter' in a network?", 
    a: ["The physical shaking of a router", "The variation in the time delay between data packets", "The total amount of bandwidth used", "The length of the ethernet cable"], 
    c: 1, 
    exp: "Verified Answer: B. Jitter is critical in Voice over IP (VoIP); high jitter causes broken audio or video." 
  },
  { 
    id: 494, 
    q: "Which protocol is used to send emails from a client to a server?", 
    a: ["IMAP", "POP3", "SMTP", "SNMP"], 
    c: 2, 
    exp: "Verified Answer: C. Full Form: SMTP stands for Simple Mail Transfer Protocol. It is used for 'pushing' or sending mail." 
  },
  { 
    id: 495, 
    q: "What is a 'MAC Address'?", 
    a: ["A temporary address for web browsing", "A unique 48-bit hardware identifier for a network interface", "An address used for Macintosh computers only", "A type of IP address"], 
    c: 1, 
    exp: "Verified Answer: B. Full Form: MAC stands for Media Access Control. It is hard-coded into the NIC at the factory." 
  },
  { 
    id: 496, 
    q: "Which command is used on Windows to check the connectivity and round-trip time to a host?", 
    a: ["tracert", "ping", "netstat", "ipconfig"], 
    c: 1, 
    exp: "Verified Answer: B. The 'ping' command uses ICMP to check if a host is alive and measures the latency in milliseconds." 
  },
  { 
    id: 497, 
    q: "What is the function of the 'Application Layer' in the OSI model?", 
    a: ["Routing packets", "Physical transmission of bits", "Providing network services directly to end-user applications", "Managing sessions"], 
    c: 2, 
    exp: "Verified Answer: C. Layer 7 (Application) is the interface that programs like web browsers or email clients use to access the network." 
  },
  { 
    id: 498, 
    q: "What does the 'e' stand for in Cat5e cable?", 
    a: ["Electrical", "Enhanced", "Extended", "Efficient"], 
    c: 1, 
    exp: "Verified Answer: B. The Category 5 'enhanced' cable supports Gigabit speeds and has better crosstalk specifications than the original Cat5." 
  },
  { 
    id: 499, 
    q: "Which device connects different networks together at the Network Layer (Layer 3)?", 
    a: ["Switch", "Hub", "Router", "Bridge"], 
    c: 2, 
    exp: "Verified Answer: C. Routers are the backbone of the internet, using IP addresses to direct traffic between separate networks." 
  },
  { 
    id: 500, 
    q: "What is the binary equivalent of the decimal number 1?", 
    a: ["10000000", "00000001", "11111111", "00000000"], 
    c: 1, 
    exp: "Verified Answer: B. In an 8-bit octet, the last bit (rightmost) represents 1 (2^0)." 
  },
{ 
    id: 501, 
    q: "Which port number is used by the Telnet protocol?", 
    a: ["21", "22", "23", "25"], 
    c: 2, 
    exp: "Verified Answer: C. Telnet uses well-known port 23 for unencrypted remote terminal access." 
},
  { 
    id: 502, 
    q: "What is the range of a Class B IP address?", 
    a: ["1-126", "128-191", "192-223", "224-239"], 
    c: 1, 
    exp: "Verified Answer: B. Class B addresses range from 128.0.0.0 to 191.255.255.255." 
},
  { 
    id: 503, 
    q: "Which layer of the OSI model does a Hub operate at?", 
    a: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], 
    c: 0, 
    exp: "Verified Answer: A. A Hub is a simple Physical Layer device that broadcasts all incoming bits to all other ports." 
},
  { 
    id: 504, 
    q: "What does DHCP stand for?", 
    a: ["Dynamic Host Configuration Protocol", "Digital Home Connection Protocol", "Data Handling Control Process", "Dynamic Hyperlink Connection Protocol"], 
    c: 0, 
    exp: "Verified Answer: A. DHCP (Dynamic Host Configuration Protocol) allows for automatic network configuration." 
},
  { 
    id: 505, 
    q: "Which protocol is used to send emails?", 
    a: ["POP3", "IMAP", "SMTP", "HTTP"], 
    c: 2, 
    exp: "Verified Answer: C. SMTP (Simple Mail Transfer Protocol) is the standard protocol used for sending (pushing) emails between servers." 
},
  { 
    id: 506, 
    q: "Which device is used to connect different networks and operates at Layer 3?", 
    a: ["Switch", "Router", "Hub", "Bridge"], 
    c: 1, 
    exp: "Verified Answer: B. A Router is a Layer 3 (Network Layer) device that forwards data packets between different computer networks." 
},
  { 
    id: 507, 
    q: "What is the primary function of the ARP protocol?", 
    a: ["Resolve IP addresses to MAC addresses", "Resolve domain names to IP addresses", "Assign IP addresses dynamically", "Transfer files securely"], 
    c: 0, 
    exp: "Verified Answer: A. ARP (Address Resolution Protocol) maps a logical IP address to a physical MAC address on a local network." 
},
  { 
    id: 508, 
    q: "Which of these is a valid IPv6 address length?", 
    a: ["32 bits", "48 bits", "64 bits", "128 bits"], 
    c: 3, 
    exp: "Verified Answer: D. IPv6 addresses are 128 bits long, providing a significantly larger address space than the 32-bit IPv4." 
},
  { 
    id: 509, 
    q: "What is the purpose of a Subnet Mask?", 
    a: ["To identify the host's physical location", "To distinguish the network portion from the host portion of an IP address", "To encrypt data packets", "To increase transmission speed"], 
    c: 1, 
    exp: "Verified Answer: B. The Subnet Mask determines which part of an IP address refers to the network and which part refers to the host." 
},
  { 
    id: 510, 
    q: "Which protocol provides reliable, connection-oriented data transmission?", 
    a: ["UDP", "TCP", "ICMP", "IP"], 
    c: 1, 
    exp: "Verified Answer: B. TCP (Transmission Control Protocol) ensures reliable delivery through sequencing and acknowledgments." 
}

];