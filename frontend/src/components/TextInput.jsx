function TextInput({
  label,
  id,
  as = 'input',
  className = '',
  ...props
}) {
  const fieldId = id || props.name
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
        <textarea id={fieldId} className={classes} {...props} />
      ) : as === 'select' ? (
        <select id={fieldId} className={classes} {...props} />
      ) : (
        <input id={fieldId} className={classes} {...props} />
      )}
    </div>
  )
}

export default TextInput
