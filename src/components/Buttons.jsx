import React from 'react';
import '../css/Buttons.css'

function Buttons({ buttonType, buttonText, clickFunc,buttonIcon }) {

  const renderButton = () => {
    switch (buttonType) {
      case 'elevatedButton1':
        return <button 
                className="elevated-button1" 
                onClick={clickFunc}>
                {buttonText}{buttonIcon}
              </button>;

      case 'elevatedButton2':
        return <button 
                className="elevated-button2" 
                onClick={clickFunc}>
                {buttonText}{buttonIcon}
              </button>;

      case 'tonalButton':
        return <button 
                className="tonal-button" 
                onClick={clickFunc}>
                {buttonText}{buttonIcon}
              </button>;

      case 'outlineButton1':
        return <button 
                className="outline-button1" 
                onClick={clickFunc}>
                {buttonText}{buttonIcon}
              </button>;

      case 'outlineButton2':
        return <button 
                  className="outline-button2" 
                  onClick={clickFunc}>
                  {buttonText}{buttonIcon}
                </button>;

      default:
        return null;
    }
  };

  return <div className='buttons'>{renderButton()}</div>;
}

export default Buttons;
