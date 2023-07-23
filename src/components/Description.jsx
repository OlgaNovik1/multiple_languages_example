import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

const Description = () => {
    const { t } = useTranslation();
    return (
        <div className='description'>
            {t("description")}
        </div>
    )
}

export default Description