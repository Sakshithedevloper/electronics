import React from 'react'

const Register = () => {
  return (
    <div className='registration'>
        <h1 className='member'>Member Registration - FREE</h1>
        <h2 className='benefit'>Benefits of Registration</h2>
        <p>If you are a dealer, distributer or importer - After free registration, you will get many benefits free of cost by reaching thousands of people online. Few of these benefits are like your company details including contact numbers will be displayed on all the dealers list pages in product categories you deal in. We also offer some paid premium registration services for dealers like posting own price for product, spare part and repair service charges etc. which can be edited and modified at any time. Please read the below registration form carefully and fill the required details for registration.
        </p>
    <div className='signup'>
    <h3>Dealer registration signup</h3>
    <p>Please fill the details related to your company for listing your business profile in Dealer-List to get many benefits. Registration is quick and free! Please note that fields marked * are required.
    </p>
    <div className='input-text'>
    <input type='text'  placeholder='Your Full Name'/>
    <input type='text'  placeholder='Your Company Name'/>
    <input type='text'  placeholder='Your Company Description'/>
    <input type='text'  placeholder='Contact'/>
    <input type='text'  placeholder='City'/>
    <input type='text'  placeholder='Country'/>
    <input type='text'  placeholder='Mobile Number'/>
    <input type='text'  placeholder='Fax'/>
    <input type='text'  placeholder='Website'/>
    </div>
</div>
    </div>
  )
}

export default Register