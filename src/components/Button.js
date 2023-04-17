import PropTypes from 'prop-types'

const Button = ({ onClick, text, class_name }) => {
  return (
    <button
      onClick={onClick}
      className={class_name}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  class_name: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button