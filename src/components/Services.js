import React from 'react'
import training from '../../src/assets/training.svg';
import development from '../../src/assets/development.svg';
import web from '../../src/assets/web.svg';
import ServicesRendered from './ServicesRendered';
import './services.css'

const Services = () => {
  return (
    <div className='services'>
      <h1>Services I Rendered</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br />  elit.Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
      <div className='topRendered'>
        <ServicesRendered myImage={training} text={'Training'} smallText={'I offer instructor-led training in a way that fits with the way you work. '} />
        <ServicesRendered myImage={web} text={'Responsive Web Design'} smallText={'I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.'} />
        <ServicesRendered myImage={development} text={'Web Development'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.'} />
      </div>
      <div className='bottomRendered'>
        <ServicesRendered myImage={development} text={'QGIS Mapping'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.'}/>
        <ServicesRendered myImage={training} text={'Training'} smallText={'I offer instructor-led training in a way that fits with the way you work. '}/>
        <ServicesRendered myImage={web} text={'Graphics Design'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.'}/>
      </div>
    </div>
  )
}

export default Services