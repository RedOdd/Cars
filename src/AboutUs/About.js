import React from 'react'
import s from './About.module.scss'
import Man from '../Charger_Customs_Free_Psd_Template-assets/Man.png'



const About = () => {
    return (
        <div className={s.About}>
            <div className={s.Image}>
                <img src={Man} className={s.pic}/>
            </div>
            <div className={s.Content}>
                <div className={s.us}>About us</div>
                <div className={s.Middle}></div>
                <div className={s.Text}>Charger Customs - luxury automotive restyling center <br/>
                 based in Corona, California. There is no limit to what <br/>
                  we can do.</div>
                  <button className={s.button}>MORE</button>
            </div>
        </div>
    )
}

export default About