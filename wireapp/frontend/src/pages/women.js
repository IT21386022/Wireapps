import React, { Component } from 'react'
import '../css/style.css'
import Header from '../component/header'
import WomenCard from '../component/womencard'

class women extends Component {
  render(){
  return (
    <div className='Women'>
      <Header></Header>
      <div className="subheader">
        <p>Womens Clothing</p>
      </div>
      <div className='gridlist'>
        <WomenCard></WomenCard>
        <WomenCard></WomenCard>
        <WomenCard></WomenCard>
        <WomenCard></WomenCard>
      </div>
      <div className='gridlist'>
        <WomenCard></WomenCard>
        <WomenCard></WomenCard>
        <WomenCard></WomenCard>
        <WomenCard></WomenCard>
      </div>
    </div>
  )
}
}

export default women
