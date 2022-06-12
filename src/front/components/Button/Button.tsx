import * as React from 'react'
import './button.css'

type Props = {
  onButtonClick: () => void;
}

const Button = ({onButtonClick}: Props) => {
  return(
    <button onClick={onButtonClick} className='button'>
      Go!
    </button>
  )
}

export default Button;