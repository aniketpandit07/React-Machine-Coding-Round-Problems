function Model({handleClose, handleOfferAccept}){
    function outsideClick(e){
        if(e.target.className === 'model'){
            handleClose();
        }
    }

    return (
        <>
        <div onClick={outsideClick} className="model">
            <div className="model-content">
            <button onClick={handleClose} className="close-btn"> X</button>
            <div className="content">
                click the content below to accept amazing offer
            </div>
            <button onClick={handleOfferAccept} className="accept-btn"> Accept Offer</button>
            </div>
        </div>
        </>
    )
}

export default Model