import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

const Buttons = () => {
    const { t } = useTranslation();

    return (
        <div className='registration'>
            <button className='register'>
                {t("register")}
            </button>
        </div>
    )
}

export default Buttons