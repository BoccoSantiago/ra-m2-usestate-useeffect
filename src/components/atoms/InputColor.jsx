import React from 'react'
import PropTypes from 'prop-types'

function InputColor({ name, color, onChange }) {
  return <input name={name} value={color} type="color" onChange={onChange} />
}

InputColor.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputColor
