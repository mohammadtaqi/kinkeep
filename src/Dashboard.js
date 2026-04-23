function Dashboard() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f0f4ff",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1>👨‍👩‍👧 My Family</h1>
      <p style={{ color: "gray" }}>People you stay connected with</p>

      <div style={{ marginTop: "30px" }}>

        <div style={{
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
            <h3 style={{ margin: 0 }}>👵 Grandma</h3>
            <p style={{ margin: "4px 0 0", color: "gray", fontSize: "13px" }}>
              Last contacted: 3 days ago
            </p>
          </div>
          <button style={{
            background: "#4f46e5",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Send Message
          </button>
        </div>

        <div style={{
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
            <h3 style={{ margin: 0 }}>👨 Uncle Raj</h3>
            <p style={{ margin: "4px 0 0", color: "gray", fontSize: "13px" }}>
              Last contacted: 1 week ago
            </p>
          </div>
          <button style={{
            background: "#4f46e5",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Send Message
          </button>
        </div>

        <div style={{
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
            <h3 style={{ margin: 0 }}>👩 Aunt Priya</h3>
            <p style={{ margin: "4px 0 0", color: "gray", fontSize: "13px" }}>
              Last contacted: 2 weeks ago
            </p>
          </div>
          <button style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;