
import { useState } from 'react'
import './App.css'
import Model from './Model'
function App(){
  const[isShow, setIsShow] = useState(false)
  const [isOfferAccept, setIsOfferAccept] = useState(false)
  

  function handleOpenModel(){
    setIsShow(true)
  }

  function handleClose(){
    setIsShow(false)
  }

  function handleOfferAccept(){
    setIsOfferAccept(true)
    setIsShow(false)
  }

  return (
    <>
    <div className="show-offer">
      { !isOfferAccept && <button onClick={handleOpenModel} className="offer-btn">Show Offer</button>}
      {isOfferAccept && <div>Offer Accepted</div>}
    </div>
    {
      isShow && <Model handleClose={handleClose} handleOfferAccept={handleOfferAccept}/>
    }
    </>
  )
}

export default App