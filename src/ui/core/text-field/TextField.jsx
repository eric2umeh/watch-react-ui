import React, { useState, useRef } from 'react';
import './TextField.css';

function TextField({
  value, 
  name,
  onChange, 
  label,
  disabled,
  type,
}) {
    
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  return (
    <div
      className={`form-field ${focused ? 'is-focused' : ''} ${
        value.length > 0 ? 'has-value' : ''
      }`}>
      <div className='control'>
        <label onClick={() => ref.current.focus()}>{label}</label>
        <input
            ref={ref}
            disabled={disabled}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => {
                setFocused(false)
            }}
        />
      </div>
    </div>
  );
}

export default TextField
