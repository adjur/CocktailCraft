import React from 'react';
import './ToTopArrow.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ToTopArrow = ({ title = "Back to Top", link = "#" }) => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className='arrowSection'>
      <div className='arrowContainer'>
        <a href={link} className='arrowIcon' aria-label={title} onClick={handleScrollToTop}>
          <ArrowUpwardIcon className='icon' />
          <span className='arrowLabel'>{title}</span>
        </a>
      </div>
    </section>
  );
};

export default ToTopArrow;
