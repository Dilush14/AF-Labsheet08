function Testimonial({ name, quote, image }) {
  return (
    <section className="testimonial">
      <img src={image} alt={name} />
      <p>"{quote}"</p>
      <h4>- {name}</h4>
    </section>
  )
}

export default Testimonial