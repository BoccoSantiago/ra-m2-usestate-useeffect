import React from 'react'
import PropTypes from 'prop-types'

function InputNumber({ name, size, onChange }) {
  return (
    <input min={0} name={name} value={size} type="number" onChange={onChange} />
  )
}

InputNumber.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputNumber
