const HistoryPopup = ({ setPopupOpen, closePopup }) => {
    return (
        <div className="history-popup">
        <div className="history-popup__content">
            <h2>COMPONENT NAME 20245</h2>
           <ImageGrid setPopupOpen={setPopupOpen} setComponentImage={setComponentImage}/>
        </div>
        </div>
    );
    }