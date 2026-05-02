function Button({ text, variant }) {
  return (
    <button className={variant === 'outline' ? 'btn outline' : 'btn'}>
      {text}
    </button>
  )
}

export default Button