import React from 'react'
import s from './Header.module.scss'
import menu from '../Charger_Customs_Free_Psd_Template-assets/Menu.png'
import Logo from './Logo'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className={s.Main}>
            <div className={s.Header}>
                <span className={s.Icons}>
                    <Logo />
                </span>
                <div className={s.bar}>
                    <ul>
                        <li><Link className={s.Link} to='aboutus' smooth={true}>ABOUT US</Link></li>
                        <li><Link className={s.Link} to='services' smooth={true}>SERVICES</Link></li>
                        <li><Link className={s.Link} to='projects' smooth={true}>PROJECTS</Link></li>
                    </ul>
                </div>
            </div>
            <div className={s.Chargers}>
                <div className={s.MainText}>
                    We're <br />
                    Charger
             </div>
                <div className={s.SecondText}>
                    One of the most powerful and recognized brand <br />
                    names in the custom automotive industry.
                </div>
                <div className={s.More}>
                    <a href='#' className={s.ref}>READ MORE</a>
                </div>
                <div className={s.line}>
                </div>
            </div>
            <div className={s.End}>
                <div className={s.lastbar}>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>
                <div className={s.Numbers}>
                    <div className={s.first}>01</div>
                    <div className={s.between}></div>
                    <div className={s.Second}>10</div>
                </div>
                <div className={s.scroll}><Link className={s.Link} to='footer' smooth={true}>Scroll down</Link></div>
            </div>
        </div>
    )
}

export default Header