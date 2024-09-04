import React from "react";

function InputArea(props) {
  return (
    <div 
    className="form">
      <input 
      onChange={props.onHandleChange}
      type="text" 
      value={props.inputText} 
      />
      <button 
      onClick={props.onAddItem}>
      <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
