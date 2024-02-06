/* eslint no-eval: 0 */
import {Input, SubInput} from './components/Input/index'
import Button from './components/Button';
import { useState } from 'react';

import { Container, Content, Row, Column } from './styles'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [ansNumber, setAnsNumber] = useState('*')
  const [eqNumber, setEqNumber] = useState('');
  const [addedNumber, setAddedNumber] = useState('0');
  const [parenthesis, setParenthesis] = useState('');


  const handleParenthesis = (value) => {
    let open
    console.log(value)
    if(value === '('){
      handleAddNumber('(')
      setParenthesis(prev => `${prev}${')'}`) 
      open = true
    }else if(open == true){
      handleAddNumber(')')
      setParenthesis('') 
      open = false
      console.log(open)
    }
    
  }
  const handleOnClear = () => {
    setEqNumber('Ans = '+ansNumber);
    setCurrentNumber('0');    
    setParenthesis('');
  }
  const handleAns = () => {
    if(!isNaN(Number(ansNumber))){
      setEqNumber('Ans = '+ansNumber);
    }
  }

  const handleClearEntry = () => {
    const len = currentNumber.length
    let removed
    try {
          if(currentNumber.slice(len-1,len) === '('){
            setParenthesis('');
          }
          if(currentNumber.slice(len-2,len) === '√('){
            setCurrentNumber(currentNumber.slice(0,-2))
            removed = 2
          }else{

            setCurrentNumber(currentNumber.slice(0,-1))
            removed = 1
          }
          if(currentNumber.length-removed === 0){
            handleOnClear();
          }
    }catch{
      handleOnClear();
    }
  }

  const handleAddNumber = (num) => {

    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
      
    
    
  }
  
  const handleResult = () => {
    const equation = currentNumber.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('√', 'Math.sqrt');
    const result = String(eval(equation+parenthesis));
    const lenght = result.length

    const maxlenght = lenght-11
    const limitResult = result.slice(0, -maxlenght);

    setAnsNumber(result)
   
    setEqNumber(currentNumber+parenthesis+' =')
    setCurrentNumber(eval(limitResult));
    setParenthesis('')
    
  }


  return (
    <Container>
      <Content>
        <SubInput value={eqNumber} />
        <Input value={currentNumber} extra={parenthesis} />
        <Row>                                  
            <Button label='(' onClick={() => handleParenthesis('(') > handleAns()}/>
            <Button label=')' onClick={() => handleParenthesis(')') > handleAns()} />
            <Button label='CE' onClick={() => handleClearEntry()} />

          </Row>
        <Row>                                  
            <Button label='√' onClick={() => handleAddNumber('√(') > setParenthesis(')')}/>
            <Button label='X' onClick={() => handleAddNumber(' x ') > handleAns()} />
            <Button label='÷' onClick={() => handleAddNumber(' ÷ ') > handleAns()}/>
            <Button label='C' onClick={() => handleOnClear()}/>
          </Row>
        <Row>
            <Button label='7' onClick={() => handleAddNumber('7')} />
            <Button label='8' onClick={() => handleAddNumber('8')}/>
            <Button label='9' onClick={() => handleAddNumber('9')}/>
            <Button label='-' onClick={() => handleAddNumber(' - ') > handleAns()}/>
          </Row>
         <Row>
            <Button label='4' onClick={() => handleAddNumber('4')} />
            <Button label='5' onClick={() => handleAddNumber('5')}/>
            <Button label='6' onClick={() => handleAddNumber('6')}/>
            <Button label='+' onClick={() => handleAddNumber(' + ') > handleAns()}/>
          </Row>
          <Row>
            <Button label='1' onClick={() => handleAddNumber('1')} />
            <Button label='2' onClick={() => handleAddNumber('2')}/>
            <Button label='3' onClick={() => handleAddNumber('3')}/>
            <Button label='=' onClick={() => handleResult()}/>
          </Row>
          <Row>          
            <Button label='0' onClick={() => handleAddNumber('0')}/>
          </Row>
          
      </Content>
    </Container>
  );
}

export default App;
