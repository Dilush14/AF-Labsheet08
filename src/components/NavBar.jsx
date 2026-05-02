function NavBar() {
  return (
    <nav style={{ background: "#0F766E", padding: "10px", color: "white" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default NavBar