import React from 'react'
import PropTypes from 'prop-types'

const wrapperStyles = {
  margin: 'auto',
  maxWidth: '50.25rem',
  oveflow: 'auto'
}

export const Wrapper = ({ children }) => (
  <div style={wrapperStyles}>{children}</div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
