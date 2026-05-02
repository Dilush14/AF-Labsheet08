function Testimonial({ name, quote }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <p>"{quote}"</p>
      <h4>- {name}</h4>
    </div>
  )
}

export default Testimonial