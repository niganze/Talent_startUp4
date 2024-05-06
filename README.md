# Talent_startUp4



Hello ✋, I'm Alain NIGANZE from the University of Rwanda, currently pursuing studies in computer and software engineering. At the moment, I'm enrolled in an embedded systems course. Through this course, I'm engaged in the following embedded system project


**Project Overview: GateGuard Visitor Notifier with Fingerprint Confirmation**

GateGuard Visitor Notifier is an intelligent gate monitoring system aimed at keeping visitors informed about their entry status and prompting homeowners to take action if a visitor experiences prolonged wait times. The system communicates with visitors through an LCD display. If a visitor presses the button multiple times, indicating an extended wait, they have the option to confirm their identity via fingerprint scanning. Once confirmed, the system promptly alerts the homeowner about the visitor's presence, ensuring timely attention to their arrival.

**Key Features:**
1. *Visitor Notification*: The system notifies visitors at the gate, confirming that their presence has been detected and that someone is coming to open the gate.
2. *Fingerprint Confirmation*: If visitors have been waiting for an extended period, they can use a fingerprint sensor to confirm their identity, allowing the system to send a notification to the homeowner.
3. *Wireless Communication*: The ESP32's built-in Wi-Fi capability allows it to send messages to the homeowner's phone via Telegram or WhatsApp when a visitor is waiting for too long or confirms their identity with a fingerprint.
4. *LCD Display*: A 16x2 character LCD provides feedback to visitors, indicating that they are recognized and the gate will be opened soon.

**Components**
- *Microcontroller*: ESP32, with built-in Wi-Fi for wireless communication.
- *Push Button*: Simulates a doorbell press to initiate the system.
- *Fingerprint Sensor*: Used by visitors to confirm their identity if they are waiting too long at the gate.
- *Communication Module*: Wi-Fi capability in the ESP32 to send notifications.
- *LCD Display*: Provides messages to visitors at the gate.
- *Breadboard and Jumper Wires*: For prototyping and connecting components.
- *Power Supply/Battery*: To power the system.

**Software Tools:**

- *Arduino IDE*: For programming the ESP32.
- *Fingerprint Sensor Library*: To manage fingerprint sensor operations.
- *Telegram/WhatsApp API*: To send notifications to the homeowner's phone.

**How It Works:**

1. *Visitor Arrival*: When a visitor arrives at the gate and presses the doorbell (push button), the ESP32 detects the signal.
2. *Display Message*: The LCD displays a message like "We know you're here. Someone will open the gate soon," reassuring the visitor.
3. *Fingerprint Verification*:Our push button will be equipped with the capability to initiate fingerprint scanning. The system will then read the scanned fingerprint to determine the duration of the visitor's wait, based on the number of times they pressed the button. 
4. *Notification to Homeowner*: The ESP32 sends a message to the homeowner's phone, alerting them that a visitor is waiting at the gate and whether they are recognized or not.

**Implementation Considerations:**

**- *Fingerprint Enrollment*: The system should allow the homeowner to enroll fingerprints for regular visitors or family members securely.**
- *Notification System*: Use Telegram or WhatsApp APIs to send messages to the homeowner's phone, indicating visitor status and whether fingerprint confirmation has occurred.
- *Security and Privacy*: Ensure fingerprint data is stored securely, within the sensor, not transmitted over the internet.
- *Fallback Options*: Consider providing a manual override or a secondary method to alert the homeowner if the fingerprint sensor fails or there are security concerns.

GateGuard Visitor Notifier ensures visitors are not kept waiting without feedback, and homeowners are promptly notified if a visitor is waiting too long or has confirmed their identity. It enhances communication and minimizes the inconvenience for visitors at the gate.
