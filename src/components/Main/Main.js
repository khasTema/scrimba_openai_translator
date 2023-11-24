import React, { useState } from 'react';
import styles from './Main.module.css';
import { HeadLine } from '../HeadLine/HeadLine';
import { BUTTON, GPT_MODEL, HEADLINES, LANGUAGES } from '../../consts';
import { TextArea } from '../TextArea/TextArea';
import { Selector } from '../Selector/Selector';
import { Button } from '../Button/Button';
import OpenAI from 'openai';

export const Main = () => {

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    })

    const [input, setInput] = useState('')
    const [language, setLanguage] = useState(LANGUAGES.UA)
    const [isTranslating, setIsTranslating] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [result , setResult] = useState('')

    const handleLanguagePick = (e) => {
        setLanguage(e.target.value)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const getTranslation = async () => {
        try{
            setIsLoading(true)
            const result = await openai.chat.completions.create({
                model: GPT_MODEL,
                temperature: 1.1,
                max_tokens: 20,
                messages: [
                    {
                        'role': 'system',
                        'content': `You are expert in ${language} language. You translate provided text. `
                    },
                    {
                        'role': 'user',
                        'content': `${input}`
                    }
                ]
            })
            setIsLoading(false)
            setResult(result.choices[0].message.content)
        } catch(error){
            console.error(error)
            setIsLoading(false)
            setResult('AI is not responding, please try again later.')
            
        }
    }

    const handleButtonClick = () => {
        setIsTranslating(prev => !prev)
        if(!isTranslating) {
            getTranslation()
        } else {
            setInput('')
        }
        
    }

  return (
    <main className={styles.main}>
        <HeadLine 
            text={!isTranslating ? HEADLINES.TRANSLATE : HEADLINES.ORIGINAL} 
        />
        <TextArea 
            input={input} 
            onChange={handleInput}
        />
        <HeadLine 
            text={!isTranslating ? HEADLINES.LANGUAGE : HEADLINES.TRANSLATION} 
        />
        {
            !isTranslating ? 
            <Selector onChange={handleLanguagePick}/> 
            : <TextArea input={isLoading ? 'loading...' : result}/>

        }
        <Button 
            action={!isTranslating ? BUTTON.ACT : BUTTON.REFRESH} 
            onClick={handleButtonClick}
        />
    </main>
  )
}
