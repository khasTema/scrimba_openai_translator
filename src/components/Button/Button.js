import React from 'react'
import styles from './Button.module.css'

export const Button = ({action, onClick}) => {
  return (
    <button 
      className={styles.button} 
      onClick={onClick} 
      aria-label='push the button'
    >
        {action}
    </button>
  )
}
