import React, { useState } from 'react'

function App() {
  const store = [{val: '1'}, {val: '2'}, {val: '3'}, {val: '4'}, {val: '5'}, {val: '+'}, {val: '6'}, {val: '7'}, {val: '8'},
   {val: '9'}, {val: '0'}, {val: '-'}, {val: '*'}, {val: '/'}, {val: '.'}]

  const operation = [{val: '='}, {val: 'C'}, {val: 'CE'}] 
  const [value, setValue] = useState('0')

  let buttons = store.map((button, index) => {
    return <button key={index} onClick={() => typeNum(button.val)} >
      {button.val}
    </button>
  })
  let operations = operation.map((operat, index) => {
    return <button key={index} onClick={() => doAct(operat.val)} >
      {operat.val}
    </button>
  })

  function typeNum (num) {
    let currentVal = value
    if (value === '0') {
      currentVal = ''
    } 
    currentVal += num
    setValue(currentVal)
  }

  function doAct(key) {
    if (key === 'C') {
      setValue('0')
    } else if (key === 'CE') {
      (value.length != '1') ? setValue(value.substring(0, value.length-1)) : setValue('0') 
    } else if (key === '=') {
      setValue(eval(value))
      }
  }

  return (
    <div className="calculator">
      <input value={value} type="text" />
      {buttons}
      {operations}
    </div>
  );
}

export default App;
