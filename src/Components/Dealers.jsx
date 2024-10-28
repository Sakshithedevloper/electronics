import React from 'react'

const Dealers = () => {
  const data2 = [
    { id:1, company:'demo' , contactperson:'Navneet', mobilenumber:'9988013244'},
    { id:2, company:'demo' , contactperson:'Shikha', mobilenumber:'9988013244' },
    { id:3, company:'demo' , contactperson:'Neeraj', mobilenumber:'9988013244'},
    { id:4, company:'demo' , contactperson:'Raj', mobilenumber:'9988013244' },
    { id:5, company:'demo' , contactperson:'Anil', mobilenumber:'9988013244' },
    { id:6, company:'demo' , contactperson:'Deepu', mobilenumber:'9988013244' },,
    { id:7, company:'demo' , contactperson:'Shilpi', mobilenumber:'9988013244'},
    { id:8, company:'demo' , contactperson:'Ashok', mobilenumber:'9988013244' },
    { id:9, company:'demo' , contactperson:'Mukesh', mobilenumber:'9988013244'},
    { id:10, company:'demo' , contactperson:'Rawat', mobilenumber:'9988013244' },
    
  ];

  return (

    <div>
      <p className='dealer'>Listing of Computer Dealers and Distributers</p>
      <h2></h2>
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Company</th>
            <th>Contact Person</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.company}</td>
              <td>{user.contactperson}</td>
              <td>{user.mobilenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default Dealers