import React, { Component } from 'react'
import '../css/style.css'
import Header from '../component/header'
import MenCard from '../component/mencard'
import WomenCard from '../component/womencard'


class home extends Component{
  render() {
  return (
    <div className='home'>
      <Header></Header>
      <div className="subheader">
        <p>Flash Sale</p>
      </div>
      <div className='gridlist'>
        <MenCard></MenCard>
        <WomenCard></WomenCard>
        <MenCard></MenCard>
        <WomenCard></WomenCard>
      </div>

      <br></br>

      <div className="subheader">
        <p>Categories</p>
      </div>

      <br></br>

      <div className='gridlist'>
         <a href='/mens-clothing'>
         <div className='greencard'>
              <p className='greencardtext'>Men's Clothing</p>
        </div>
        </a>
          
        <a href='/womens-clothing'>
         <div className='pinkcard'>
              <p className='greencardtext'>Women's Clothing</p>
        </div>
        </a>
        
      </div>
      
    </div>
  );
}
}

export default home
