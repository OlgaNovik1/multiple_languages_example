import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next'

const Title = () => {
    const { t } = useTranslation();
    // console.log(t)

    return (
        <h1>{t("title")}</h1>
    )
}

export default Title