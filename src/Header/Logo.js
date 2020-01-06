import React from 'react'
import s from './Header.module.scss'
import icon from '../Charger_Customs_Free_Psd_Template-assets/Icon.png'

const Logo = () => {
    return (
                <span className={s.icons}>
                    <img src={icon} className={s.icon} />
                    <div className={s.Changer}>CHANGER</div>
                    <div className={s.Customs}>CUSTOMS</div>
                </span>
    )
}

export default Logo