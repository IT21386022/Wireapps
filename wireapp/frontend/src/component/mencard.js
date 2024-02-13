import React, { Component } from 'react'
import MenImage from '../assests/image.png'

class mencard extends Component {
  render(){
  return (
    <div>
      <div className='card'>
        <div className='cardheader'>
          <p>Mens' Cotton Jacket</p>
        </div>
        <div className='cardimage'>
          <center><img src={MenImage} alt="Men's Cotton Jacket" /></center>
        </div>
        <div className='cardcocontainer'>
          <div className='cardprice'>
            <p>Rs 55.99</p>
          </div>
          <div className='cardtext'>
            <p>Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default mencard
