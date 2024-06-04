import React from 'react'
import './Arrow.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Arrow = ({ title, link }) => {
    return (
        <section className='arrowSection'>
            <div className='arrowContainer'>
                <div className='arrowTitle'>{title}</div>
                <div>
                    <a href={link} className='arrowIcon' aria-label={title}>
                        <ArrowDownwardIcon className='icon' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Arrow