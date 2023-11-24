import React from 'react'
import styles from './Selector.module.css'
import { LANGUAGES } from '../../consts'

export const Selector = ({onChange}) => {
  return (
    <div className={styles.main}>
        <input type="radio" id="ES" name="fav_language" value={LANGUAGES.ES} onChange={onChange}/>
        <label htmlFor="ES">{LANGUAGES.ES} 🇪🇦</label>
        <br/>
        <input type="radio" id="DE" name="fav_language" value={LANGUAGES.DE} onChange={onChange}/>
        <label htmlFor="DE">{LANGUAGES.DE} 🇩🇪</label>
        <br/>
        <input type="radio" id="FR" name="fav_language" value={LANGUAGES.FR} onChange={onChange}/>
        <label htmlFor="FR">{LANGUAGES.FR} 🇫🇷</label>
    </div>
  )
}
