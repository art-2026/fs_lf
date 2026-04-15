import React from "react";

function DashboardHeader() {
  // Inline JSON style
  const headerStyle = {
    backgroundColor: "#1e3a8a",
    color: "white",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px"
  };

  return (
    <header style={headerStyle}>
      <h1>E-Commerce Product Review Dashboard</h1>
      <p>Choose a product and submit your review</p>
    </header>
  );
}

export default DashboardHeader;
