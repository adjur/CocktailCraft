import React from 'react'
import './ToTopArrow.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ToTopArrow = () => {
  return (
    <section className='arrowSection'>
            <div className='arrowContainer'>
                <div className='arrowTitle'>{title}</div>
                <div>
                    <a href={link} className='arrowIcon' aria-label={title}>
                        <ArrowUpwardIcon className='icon' />
                    </a>
                </div>
            </div>
        </section>
  )
}

export default ToTopArrow