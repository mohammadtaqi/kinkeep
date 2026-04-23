<<<<<<< HEAD
import { useState, useEffect } from "react";

function Dashboard() {
  const [relatives, setRelatives] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch contacts FROM your backend when page loads
  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => res.json())
      .then((data) => {
        setRelatives(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setLoading(false);
      });
  }, []);

  const fakeAIMessages = {
    1: "Hey Grandma! Just thinking of you today 💛 Hope you're feeling well and eating good food. Miss you lots!",
    2: "Hey Uncle Raj! It's been a while — hope everything is great with you. Let's catch up soon!",
    3: "Hi Aunt Priya! I realised it's been 2 weeks since we spoke — really sorry about that. How are you doing? 🤗",
  };
=======
import { useState } from "react";

const relatives = [
  { id: 1, name: "Grandma", emoji: "👵", lastContact: "3 days ago", urgent: false },
  { id: 2, name: "Uncle Raj", emoji: "👨", lastContact: "1 week ago", urgent: false },
  { id: 3, name: "Aunt Priya", emoji: "👩", lastContact: "2 weeks ago", urgent: true },
];

const fakeAIMessages = {
  1: "Hey Grandma! Just thinking of you today 💛 Hope you're feeling well and eating good food. Miss you lots!",
  2: "Hey Uncle Raj! It's been a while — hope everything is great with you. Let's catch up soon!",
  3: "Hi Aunt Priya! I realised it's been 2 weeks since we spoke — really sorry about that. How are you doing? 🤗",
};

function Dashboard() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
>>>>>>> 2d4aef91986d690ac6acd775ec3cedc592f29465

  function handleSendClick(relative) {
    setSelectedContact(relative);
    setMessageSent(false);
  }

<<<<<<< HEAD
  // Send message TO your backend
  function handleConfirmSend() {
    fetch("http://localhost:5000/message/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contactId: selectedContact.id,
        message: fakeAIMessages[selectedContact.id],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Message saved:", data);
        setMessageSent(true);
        setTimeout(() => {
          setSelectedContact(null);
          setMessageSent(false);
        }, 2000);
      })
      .catch((err) => console.error("Error sending message:", err));
=======
  function handleConfirmSend() {
    setMessageSent(true);
    setTimeout(() => {
      setSelectedContact(null);
      setMessageSent(false);
    }, 2000);
>>>>>>> 2d4aef91986d690ac6acd775ec3cedc592f29465
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f0f4ff",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1>👨‍👩‍👧 My Family</h1>
      <p style={{ color: "gray" }}>People you stay connected with</p>

<<<<<<< HEAD
      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: "center", marginTop: "60px", color: "gray" }}>
          <div style={{ fontSize: "40px" }}>⏳</div>
          <p>Loading your family...</p>
        </div>
      )}

=======
>>>>>>> 2d4aef91986d690ac6acd775ec3cedc592f29465
      {/* Contact Cards */}
      <div style={{ marginTop: "30px" }}>
        {relatives.map((relative) => (
          <div key={relative.id} style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <div>
              <h3 style={{ margin: 0 }}>
                {relative.emoji} {relative.name}
              </h3>
              <p style={{ margin: "4px 0 0", color: "gray", fontSize: "13px" }}>
                Last contacted: {relative.lastContact}
              </p>
            </div>
            <button
              onClick={() => handleSendClick(relative)}
              style={{
<<<<<<< HEAD
                background: "#4f46e5",
=======
                background: relative.urgent ? "#ef4444" : "#4f46e5",
>>>>>>> 2d4aef91986d690ac6acd775ec3cedc592f29465
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Send Message
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedContact && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}>
          <div style={{
            background: "white",
            padding: "32px",
            borderRadius: "16px",
            width: "400px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}>
            {messageSent ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "48px" }}>✅</div>
                <h3 style={{ color: "#22c55e" }}>Message Sent!</h3>
                <p style={{ color: "gray" }}>
                  Your message to {selectedContact.name} is on its way 💛
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ marginTop: 0 }}>
                  ✉️ Message to {selectedContact.emoji} {selectedContact.name}
                </h3>

                <p style={{ fontSize: "12px", color: "#4f46e5", fontWeight: "bold", marginBottom: "8px" }}>
                  🤖 AI wrote this in YOUR style:
                </p>

                <div style={{
                  background: "#f0f4ff",
                  border: "1px solid #e0e7ff",
                  borderRadius: "10px",
                  padding: "16px",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                  color: "#1e1e2e"
                }}>
                  {fakeAIMessages[selectedContact.id]}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => setSelectedContact(null)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      background: "white",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "gray"
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmSend}
                    style={{
                      flex: 1,
                      padding: "12px",
                      background: "#4f46e5",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "15px"
                    }}
                  >
                    Send ✈️
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;