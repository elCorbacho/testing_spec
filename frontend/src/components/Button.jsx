function Button({ children, className = '', variant = 'primary', ...props }) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')
  const isDisabled = Boolean(props.disabled)

  return (
    <button className={classes} aria-disabled={isDisabled} {...props}>
      <span className="btn-label">{children}</span>
    </button>
  )
}

export default Button
