import React from 'react'
import s from './Footer.module.scss'
import Logo from '../Header/Logo'


const Footer = () => {
    return (
        <div>
            <span className={s.Footer}>
                <Logo/>  
            </span>
            <span className={s.Feedback}>
                    <ul>
                        <li><a>Facebook</a></li>
                        <li><a>Twitter</a></li>
                        <li><a>Youtube</a></li>
                    </ul>
                </span>
            </div>
    )
}
export default Footer