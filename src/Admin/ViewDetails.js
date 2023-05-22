import React from 'react'
import Header from './Header'

export default function ViewDetails() {
  return (
    <div>
      <Header/>
      <div className='formarea1'>
      <table className="table table-transperant text-light  table-striped" style={{border:'1px solid white'}}>
      <thead>
    <tr>
      <th scope="col" className='table_border'>Index</th>
      <th scope="col" className='table_border'>Movie Name</th>
      <th scope="col" className='table_border'>Detail</th>
      <th scope="col" className='table_border'>Duration</th>
      <th scope="col" className='table_border'>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"  className='table_border'>1</th>
      <td className='table_border'>Mark</td>
      <td className='table_border'>Otto</td>
      <td className='table_border'>@mdo</td>
      <td className='table_border'>@mdo</td>

    </tr>
    
  </tbody>
          </table>
      </div>
    </div>
  )
}
