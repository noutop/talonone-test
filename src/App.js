import React, {useState} from 'react'
import './App.css';

const formatToPhone = (value) => {
  if (!value) return value;
  const inputValue = value.replace(/[^\d]/g, '');
  const inputLength = inputValue.length;
  
  if (inputLength < 4){
    return inputValue;
  } 
  if (inputLength < 7){
    return `(${inputValue.slice(0, 3)}) ${inputValue.slice(3)}`;
  } 
  if (inputLength < 11){
    return `(${inputValue.slice(0, 3)}) ${inputValue.slice(3, 6)}-${inputValue.slice(6, 10)}`;
  }
  return inputValue
  
};

const unFormat = (value) => {
  if (!value) return value;
  const inputValue = value.replace(/[^\d]/g, '');
  return '+1' +inputValue;
}

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChangeInput = (event) => {
    setPhoneNumber(() => formatToPhone(event.target.value) )    
  }

  return (  
    <div className="input-container">
      <h1>Talon One Test</h1>
      <input
        name="phone" 
        value={phoneNumber}
        type="text"
        placeholder="(xxx) xxx-xxxx"
        onChange={handleChangeInput}
      />
      <p> Value: {unFormat(phoneNumber)}</p>
    </div>
  );
}

export default App;
