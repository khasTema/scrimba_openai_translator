import React from 'react'
import styles from './HeadLine.module.css'

export const HeadLine = ({text}) => {
  return (
    <h2 className={styles.headline}>{text} &#128071;</h2>
  )
}
