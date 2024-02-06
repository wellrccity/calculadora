import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

import { Container, Content, Row, Column } from './styles'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [resultNumber, setResultNumber] = useState('0');
  const [addedNumber, setAddedNumber] = useState('0');
  const [parenthesis, setParenthesis] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setResultNumber('0');
    setParenthesis('');
  }
  const handleAddNumber = (num) => {
    if(!isNaN(Number(num))){
      setAddedNumber(num);
         
    }
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
      
    
    
  }
  const handleSumNumbers = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      

    }else {
      const sum = Number(firstNumber) + Number(addedNumber)
      setFirstNumber(sum);
      setResultNumber(sum);
    }
    handleAddNumber('+');

  }
  const handleResult = () => {
    const equation = currentNumber.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('√', 'Math.sqrt');
    const result = String(eval(equation+parenthesis));
    const lenght = result.length
    if(lenght > 11){
      const maxlenght = lenght-11
      const limitResult = result.slice(0, -maxlenght);
    }
    
    setResultNumber(eval(limitResult));
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} extra={parenthesis}/>
        <Input value={resultNumber} />
        <Row>                                  
            <Button label='√' onClick={() => handleAddNumber(' √(') > setParenthesis(')')}/>
            <Button label='X' onClick={() => handleAddNumber(' x ')} />
            <Button label='÷' onClick={() => handleAddNumber(' ÷ ')}/>
            <Button label='C' onClick={() => handleOnClear()}/>
          </Row>
        <Row>
            <Button label='7' onClick={() => handleAddNumber('7')} />
            <Button label='8' onClick={() => handleAddNumber('8')}/>
            <Button label='9' onClick={() => handleAddNumber('9')}/>
            <Button label='-' onClick={() => handleAddNumber('-')}/>
          </Row>
         <Row>
            <Button label='4' onClick={() => handleAddNumber('4')} />
            <Button label='5' onClick={() => handleAddNumber('5')}/>
            <Button label='6' onClick={() => handleAddNumber('6')}/>
            <Button label='+' onClick={() => handleAddNumber(' + ')}/>
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
