
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [EMI, SetEMI] = useState(0)


  const handleChange = (e) => {
    console.log(e.target.id, e.target.value)
    const id = e.target.id;
    const value = parseInt(e.target.value)

    if (id === "principle") {
      setPrinciple(value)
    } else if (id === 'interest') {
      setInterest(value)
    } else {
      setYears(value)
    }
  }
  //formula
  // P(r(1+r)^n/((1+r)^n)-1)
  function calculateEMI() {
    let r = interest;
    if (principle && r && years) {
      r = r / 12 / 100; //per month interest
      const calcPow = Math.pow(1 + r, years * 12)
      const amount = principle * ((r * calcPow) / (calcPow - 1));
      SetEMI(Math.round(amount))
    }

  }

  useEffect(() => {
    calculateEMI()
  }, [principle, interest, years])


  return (
    <div
      className='loan-calc'>
      <h1>Mortgage Calculator</h1>
      <div className='inputs'>

        <p>Principle</p>
        <input
          onChange={handleChange}
          type="number" id="principle" />

        <p>Interest</p>
        <input

          onChange={handleChange}
          type="number" id="interest" />

        <p>Years</p>
        <input

          onChange={handleChange}
          type="number" id="years" />

      </div>
      <div className='output'>
        Your EMI is {EMI}
      </div>
    </div>
  )
}

export default App
