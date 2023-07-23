import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'


const Language = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }


    return (
        <div>
            <button onClick={() => changeLanguage('ru')} className='language'>Ru</button>
            <button onClick={() => changeLanguage('en')} className='language'>En</button>
        </div>
    )
}

export default Language