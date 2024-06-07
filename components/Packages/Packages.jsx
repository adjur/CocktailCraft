import React from 'react'
import './Packages.css'

const Packages = () => {
  return (
    <section id='Packages' className='packages'>
      <div className='package-titles-div'>
        <div className='package-layer1'>
          <h1 className='package-titles'>Packages to Host</h1>
        </div>
      </div>
      <div className='detailsParagraph'>
        <p className='package-details'>
          Comprehensive packages that include everything needed to craft delicious cocktails and entertain your guests, except the alcohol.</p>
        <p className='package-details'>
          Each package includes premium mixers, reusable recipe cards, and fresh fruit delivered right to your doorstep, ensuring your party is a hit without the hassle.
        </p>
      </div>
      <div className='parentPackage'>
        <div className='pack1'>Packages</div>
        <div className='pack2'>Packages</div>
        <div className='pack3'>Packages</div>
      </div>
    </section>
  )
}

export default Packages