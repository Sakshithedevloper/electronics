import React from 'react'

const Price = () => {
  return (
    <div style={{justifyContent:'center',alignItems:'center'}}>
        <h1 className='price'>Best place to know India Latest Computer Hardware rate list </h1>
        <div>
          <select className='sorting'>
          <option>Select a Product</option>
          <option>Digital camera</option>
          <option>Headphone</option>
          <option>CCTV Camera</option>
          <option>Mobile</option>
          <option>Motherboard</option>
          <option>Laptop</option>
          </select>
          <p className='card'>Graphics Card Price List </p>
          <div style={{width:'100%',height:'600px',border:'1px solid black'}}></div>
        </div>
       

    </div>
  )
}

export default Price