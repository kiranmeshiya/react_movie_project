import React from 'react'
import Header from './Header'
import Overlay from '../component/Overlay'
import { useNavigate } from 'react-router-dom'
export default function AddDetails() {
  
   let navigate = useNavigate();
  const handleSubmit = () => {
      navigate('/viewdetails');
  }
  return (
    <div>
      <Overlay/>
      <Header/>
      
      <div className='formarea'>
      <form className="payment-card-form" onSubmit={handleSubmit}>
                  <div className="form-group w-100">
                    <label htmlFor="card1">Movie Name</label>
                    <input type="text" id="card1" />
                    
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="card2"> Name on the Card</label>
                    <input type="text" id="card2" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card3">Expiration</label>
                    <input type="text" id="card3" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card4">CVV</label>
                    <input type="text" id="card4" placeholder="CVV" />
                  </div>
                  <div className="form-group w-100">
                    <label htmlFor="card2"> Name on the Card</label>
                    <input type="text" id="card2" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card3">Expiration</label>
                    <input type="text" id="card3" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card4">CVV</label>
                    <input type="text" id="card4" placeholder="CVV" />
                  </div><div className="form-group w-100">
                    <label htmlFor="card2"> Name on the Card</label>
                    <input type="text" id="card2" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card3">Expiration</label>
                    <input type="text" id="card3" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card4">CVV</label>
                    <input type="text" id="card4" placeholder="CVV" />
                  </div>
                  <div className="form-group text-center pt-4">
                    <input type="submit" className="custom-button" Value="Add" />
                  </div>
                </form>
      </div>
    </div>
  )
}
