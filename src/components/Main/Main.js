import React, { useState } from 'react';
import styles from './Main.module.css';
import { HeadLine } from '../HeadLine/HeadLine';
import { BUTTON, HEADLINES, LANGUAGES } from '../../consts';
import { TextArea } from '../TextArea/TextArea';
import { Selector } from '../Selector/Selector';
import { Button } from '../Button/Button';
import OpenAI from 'openai';

export const Main = () => {

    const openai = new OpenAI({
        apiKey: `${process.env.OPENAI_API_KEY}`,
        dangerouslyAllowBrowser: true
    })

    const [input, setInput] = useState('')
    const [language, setLanguage] = useState(LANGUAGES.UA)
    const [isTranslating, setIsTranslating] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLanguagePick = (e) => {
        setLanguage(e.target.value)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleButtonClick = () => {
        setIsTranslating(prev => !prev)
        setIsLoading(true)
    }

  return (
    <main className={styles.main}>
        <HeadLine text={!isTranslating ? HEADLINES.TRANSLATE : HEADLINES.ORIGINAL} />
        <TextArea value={input} onChange={handleInput}/>
        <HeadLine text={!isTranslating ? HEADLINES.LANGUAGE : HEADLINES.TRANSLATION} />
        {!isTranslating ? <Selector onChange={handleLanguagePick}/> : <TextArea input={isLoading ? 'loading...' : 'check'}/>}
        <Button action={!isTranslating ? BUTTON.ACT : BUTTON.REFRESH} onClick={handleButtonClick}/>
    </main>
  )
}
