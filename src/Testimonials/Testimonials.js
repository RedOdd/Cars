import React from 'react'
import s from './Testimonials.module.scss'


const Testimonials = () => {
    return (
        <div className={s.Testimonials}>
                <div className={s.Text}>
                These guys do amazing work here. They made my <br/>
                car awesome.
                </div>
                <div className={s.Name}>
                    -John Brown
                </div>
                
        </div>
    )
}

export default Testimonials