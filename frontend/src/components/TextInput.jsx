function TextInput({
  label,
  id,
  as = 'input',
  className = '',
  describedBy,
  ...props
}) {
  const fieldId = id || props.name
  const ariaProps = describedBy ? { 'aria-describedby': describedBy } : {}
  const classes = [
    as === 'textarea' ? 'form-textarea' : as === 'select' ? 'form-select' : 'form-input',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-group brutal-field">
      {label ? (
        <label className="form-label" htmlFor={fieldId}>
          {label}
        </label>
      ) : null}

      {as === 'textarea' ? (
        <textarea id={fieldId} className={classes} {...ariaProps} {...props} />
      ) : as === 'select' ? (
        <select id={fieldId} className={classes} {...ariaProps} {...props} />
      ) : (
        <input id={fieldId} className={classes} {...ariaProps} {...props} />
      )}
    </div>
  )
}

export default TextInput
