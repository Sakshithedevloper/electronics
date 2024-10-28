import React from 'react'

export const Table = () => {
    const data = [
        { id: 1, name: 'Keyborad', brandname: '--',unitprice: '--' },
        { id: 2, name: 'Hard disk', brandname: '--',unitprice: '--' },
        { id: 3, name: 'Mother board', brandname: '--',unitprice: '--' },
        { id: 4, name: 'Printer', brandname: '--',unitprice: '--' },
        { id: 5, name: 'Ram disk', brandname: '--',unitprice: '--' },
        { id: 6, name: 'Dvd writer', brandname: '--',unitprice: '--' },,
        { id: 7, name: 'Cpu', brandname: '--',unitprice: '--'},
        { id: 8, name: 'Led monitor', brandname: '--',unitprice: '--' },
        { id: 9, name: 'Web cam', brandname: '--',unitprice: '--' },
        { id: 10, name: 'Printer',brandname: '--',unitprice: '--' },
        { id: 11, name: 'Cabinet smps', brandname: '--',unitprice: '--' },
        { id: 12, name: 'Cpu', brandname: '--',unitprice: '--' },
        { id: 13, name: 'Hard disk', brandname: '--',unitprice: '--' },
      ];

  return (
    <div>

<h2></h2>
      <table>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Brandname</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.brandname}</td>
              <td>{user.unitprice}</td>
            </tr>
          ))}
        </tbody>
      </table>



    </div>
  )
}
