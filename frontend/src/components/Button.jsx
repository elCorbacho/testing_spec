function Button({ children, className = '', variant = 'primary', ...props }) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')

  return (
    <button className={classes} {...props}>
      <span className="btn-label">{children}</span>
    </button>
  )
}

export default Button
