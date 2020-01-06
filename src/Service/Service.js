import React from 'react'
import s from './Service.module.scss'


const Service = () => {
    return (
        <div className={s.Service}>
            <div className={s.disc}>
            <div className={s.text}>Services</div>
            </div>
            <div className={s.cars}>
            <div className={s.info}>
                <div className={s.MainText}>
               <div className={s.tunings}>Tuning</div>
            </div>
            </div>   
             
            <div className={s.restolation}>
                <div className={s.textres}>Restolation</div>
            </div>
            <div className={s.repairs}>
                <div className={s.texrep}>Repairs</div>
                </div>
                </div> 
        </div>
    )
}

export default Service