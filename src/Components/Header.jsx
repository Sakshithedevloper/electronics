import React from 'react'
import { NavLink} from 'react-router-dom'

const NewHeader = () => {
  return (
    <div className='main'>
    <header className='container' style={{width:'100%',height:'50px'}}>Kay Vee Enterprices </header>
    <div className='nav'>
      <ul className='list'>
        <li><NavLink to = '/'>HOME</NavLink></li>
        <li><NavLink to = '/price list'>PRICE LIST</NavLink></li>
        <li><NavLink to = '/dealers list'>DEALERS LIST</NavLink></li>
        <li><NavLink to = '/dealers register'>DEALERS REGISTER</NavLink></li>
        <li><NavLink to = '/dealers login'>DEALERS LOGIN</NavLink></li>
      </ul>
      <p className='para'>Kay Vee Enterprices Address and mobile numbers and Latest Price </p>
    </div>
    </div>
  )
}

export default NewHeader;