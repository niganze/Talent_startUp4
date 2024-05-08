# Talent_startUp4



Hello ✋, I'm Alain NIGANZE from the University of Rwanda, currently pursuing studies in computer and software engineering. At the moment, I'm enrolled in an embedded systems course. Through this course, I'm engaged in the following embedded system project


Gate Guard Visitor Notification System

Objective: Develop a system to facilitate communication between visitors and homeowners at a gated property. The system will allow visitors to notify the homeowner of their presence, and the homeowner to send messages to the visitor to either wait or indicate that they are unavailable.

System Overview The system allows a visitor to press a button at a gate to notify the homeowner of their arrival. The homeowner can then respond, either by pressing a button to send a predefined SMS message to the visitor or by sending a custom SMS message to communicate further. Additionally, if the visitor does not receive a response within a certain time, an SMS alert is sent to the house.

Key Components

Microcontroller: At the heart of the system, responsible for managing button inputs, sending and receiving SMS, and controlling the system's logic. we will use ESP 32
Push Buttons: One button for the visitor at the gate, one button for the homeowner inside the house.
OLED Display: Optionally, this can be used to display status messages at the gate (like "Please wait...").
Buzzer: An audible alert to indicate when the homeowner should check their SMS or alert the visitor when the button is pressed.
Power Supply: To power the entire system, considering any battery backup in case of power outages. -Wi-Fi module: for allowing communication between a visitor and homeowner. We will use ESP 32
System Logic
Visitor Button Pressed: When the visitor presses the button at the gate, the microcontroller triggers an action. Buzzer will give alert at a house informing them of a visitor at the gate.
In the house Button Pressed: If the homeowner presses their button, the system sends an SMS to the OLED at the gate with a predefined message (like "Please wait, we're coming").
Visitor Waiting Too Long: If the visitor presses the button and there is no response within a predefined time (e.g., 60 seconds), the system sends an SMS to the homeowner, notifying them that a visitor is still at the gate. The homeowner can then respond with a custom SMS to the visitor on OLED screento either ask them to wait longer or inform them that they are not available.
Implementation Steps
Hardware Setup: Set up the microcontroller, connect the Wi-fi module, push buttons, OLED, buzzer, and any other components. Ensure proper power supply and wiring.
Software Development: Write the embedded software to handle button presses, manage timers, send SMS messages via the Wi-fi module, and control alerts.
Testing and Calibration: Test the system to ensure reliable communication and proper handling of edge cases, such as delayed SMS or button bounce.
Deployment and Maintenance: Once the system is deployed, monitor its performance and be prepared to make adjustments to timing or SMS content as needed.
5.Problems to Solve

Unclear Visitor Communication:Visitors at gated properties often have difficulty alerting homeowners of their arrival. This project creates a straightforward method for visitors to notify homeowners, reducing confusion and enhancing communication. -Delayed Homeowner Response:Without a reliable system, homeowners may not realize a visitor is waiting at the gate, leading to long wait times and frustration. This project ensures prompt notifications to the homeowner, reducing wait times and improving visitor satisfaction.
Security Concerns:unverified visitors at the gate can pose a security risk. This system allows homeowners to be informed of a visitor's presence, enhancing property security by enabling controlled access and communication. -Visitor Feedback: Visitors often need feedback to confirm that their presence has been acknowledged. The system provides instant feedback through audible or visual signals, ensuring visitors know their notification has been received. -Visitor Management in Absence:When homeowners are not at home, visitors need to be informed. The system can alert the homeowner remotely, allowing them to communicate with visitors even when they are not on the property. This flexibility improves visitor experience and reduces confusion. -Inefficient Communication Channels:Traditional methods of visitor notification, such as doorbells or intercoms, can be inefficient or unavailable at gated properties. This system utilizes SMS communication, ensuring a reliable channel for alerts and responses. -Customization and Flexibility: The system provides a customizable platform for homeowners to respond to visitors. This flexibility enables homeowners to send predefined or custom SMS messages, enhancing communication and reducing misunderstandings.
Overall Solution By addressing these problems, the gate guard visitor notification system improves the overall experience for visitors and homeowners. It creates a reliable, secure, and efficient communication channel at gated properties, enhancing security and convenience. The system's flexibility and scalability allow for future enhancements and adaptability to various property types and layouts.
