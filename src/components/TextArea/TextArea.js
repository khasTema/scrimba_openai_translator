import React from 'react'
import styles from './TextArea.module.css'

export const TextArea = ({input, onChange, readOnly}) => {
  return (
    <textarea 
        type="text" 
        className={styles.textArea} 
        placeholder='your text' 
        value={input}
        onChange={onChange}
        aria-label='text input'
        readOnly={readOnly}
    />
  )
}
