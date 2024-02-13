import React, { Component } from 'react'
import WomenImage from '../assests/women.png'

class womencard extends Component {
  render(){
  return (
    <div>
      <div className='card1'>
        <div className='cardheader1'>
          <p>Women's Short Sleeve</p>
        </div>
        <div className='cardimage1'>
          <center><img src={WomenImage} alt="Men's Cotton Jacket" /></center>
        </div>
        <div className='cardcocontainer1'>
          <div className='cardprice1'>
            <p>Rs 7.95</p>
          </div>
          <div className='cardtext1'>
            <p>100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default womencard
