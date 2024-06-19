import { useEffect } from 'react';
import './Popup.css';

function Popup({item, isOpen, close}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      event.key === 'Escape' && close()
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isOpen, close])

  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'}>
        <div className='popup__container'>
            <button type="button" className="popup__close-button" onClick={close}></button>
            <h4 className='popup__title'>{item.title}</h4>
            <p className='popup__text'>{item.body}</p>
        </div>
        
    </div>
  )
}

export default Popup