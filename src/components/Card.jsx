function Card({ title, description, image }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={image} alt={title} width="100%" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card