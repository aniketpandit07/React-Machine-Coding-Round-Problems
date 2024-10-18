import { useEffect, useState } from 'react'
import './App.css'
const FAQItem = ({faq, index}) => {
    const [isShow, setIsshow] = useState(false);
    useEffect(()=>{
        if(index === 0){
            setIsshow(true)
        }
    },[])


    function handleClick(){
        setIsshow((isShow)=>!isShow)
    }
  return (
    <div className="faq-box">
      <div className="question " onClick={handleClick}>
        <button className={isShow?'arrow ':''} >></button>
        <div>{faq.question}</div>
      </div>
      { isShow && <div className='answer'>{faq.answer}</div>}
    </div>
  )
}

export default FAQItem
