import React, { Component } from 'react'
import MenCard from '../component/mencard'
import Header from '../component/header'
import '../css/style.css'

class men extends Component {
  render(){
  return (
    <div className='Men'>
      <Header></Header>
      <div className="subheader">
        <p>Mens Clothing</p>
      </div>
      <div className='gridlist'>
        <MenCard></MenCard>
        <MenCard></MenCard>
        <MenCard></MenCard>
        <MenCard></MenCard>
      </div>
      <div className='gridlist'>
        <MenCard></MenCard>
        <MenCard></MenCard>
        <MenCard></MenCard>
        <MenCard></MenCard>
      </div>
      
    </div>
  )
}
}

export default men
