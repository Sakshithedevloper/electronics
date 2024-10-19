import React from 'react'

export const Table = () => {
    const data = [
        { id: 1, name: 'Keyborad', brandname: 'gigabyte',unitprice: 1100 },
        { id: 2, name: 'Hard disk', brandname: 'gigabyte',unitprice: 1100 },
        { id: 3, name: 'Mother board', brandname: 'gigabyte',unitprice: 1100 },
        { id: 4, name: 'Printer', brandname: 'gigabyte',unitprice: 1100 },
        { id: 5, name: 'Ram disk', brandname: 'gigabyte',unitprice: 1100 },
        { id: 6, name: 'Dvd writer', brandname: 'gigabyte',unitprice: 1100 },,
        { id: 7, name: 'Cpu', brandname: 'gigabyte',unitprice: 1100},
        { id: 8, name: 'Led monitor', brandname: 'gigabyte',unitprice: 1100 },
        { id: 9, name: 'Web cam', brandname: 'gigabyte',unitprice: 1100 },
        { id: 10, name: 'Printer',brandname: 'gigabyte',unitprice: 1100 },
        { id: 11, name: 'Cabinet smps', brandname: 'gigabyte',unitprice: 1100 },
        { id: 12, name: 'Cpu', brandname: 'gigabyte',unitprice: 1100 },
        { id: 13, name: 'Hard disk', brandname: 'gigabyte',unitprice: 1100 },
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
