function Button({ text }) {
  return (
    <button style={{
      padding: "10px 15px",
      background: "#14B8A6",
      color: "white",
      border: "none",
      borderRadius: "5px"
    }}>
      {text}
    </button>
  )
}

export default Button