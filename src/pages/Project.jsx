function Project() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Project Overview</h1>
      <div className="text-lg mb-6">
        <p className="mb-8">
          Streamline communication between visitors and homeowners at gated properties, enhancing security and responsiveness.
        </p>
        <p className="mb-8">
          <span className="font-bold">How It Works:</span> <br />
          <span className="ml-4">
            <span className="font-bold">Visitor Alert:</span> A visitor at the gate can press a button to alert the household of their arrival. This triggers an audible sound inside the house, notifying anyone at home that there is someone at the gate. <br />
            <span className="font-bold">Homeowner Response:</span> If someone is at home, they can press a button to send a predefined SMS message to the visitor. The message appears on an OLED display at the gate and informs the visitor to "just wait a little bit." <br />
            <span className="font-bold">Backup Notification:</span> If no one is available to respond to the visitor's alert, the system automatically sends an SMS message to the homeowner, indicating that there's a person at the gate requesting entry. This message enables the homeowner to either contact a family member who is nearby or respond to the visitor with a custom SMS indicating that "sorry, there's no one around." This custom message is also displayed on the OLED at the gate.
          </span>
        </p>
        <div className="mb-8">
          <p className="font-bold mb-2">Key Components:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Microcontroller (ESP32)</li>
            <li>Push buttons, OLED display, buzzer</li>
            <li>Wi-Fi module for communication</li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="font-bold mb-2">Implementation Steps:</p>
          <ol className="list-decimal list-inside ml-4">
            <li>Hardware Setup</li>
            <li>Software Development</li>
            <li>Testing and Calibration</li>
            <li>Deployment and Maintenance</li>
          </ol>
        </div>
        <div className="mb-8">
          <p className="font-bold mb-2">Problems Addressed:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Unclear Visitor Communication</li>
            <li>Delayed Homeowner Response</li>
            <li>Security Concerns</li>
            <li>Visitor Feedback</li>
            <li>Visitor Management in Absence</li>
            <li>Inefficient Communication Channels</li>
            <li>Customization and Flexibility</li>
          </ul>
        </div>
        <p className="mb-8">
          <span className="font-bold">Overall Solution:</span> Improves visitor and homeowner experience with reliable, secure, and efficient communication, enhancing security and convenience at gated properties.
        </p>
      </div>
    </div>
  );
}

export default Project;

