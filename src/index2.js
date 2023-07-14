//Number generator
import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css';

const Apply_colour= (props) =>{
   return <div className='box-style' style={{backgroundColor: props.colour}}>{props.number}</div>
}



const isPrime =(number)=>{
      if(number !==0 && number !==1){
        for(var i =2; i<=Math.sqrt(number);i++){
          if(number%i === 0){
            return false;
          }
        }
        return true;
      }     
    }

const GetColour = (number) =>{
      if(isPrime(number)){
        return 'red';
      }
      else if(number % 2 === 0 ){
        return 'green';
      }
      else if(number % 2 === 1){
        return 'yellow'
      }
    };

const Grid_map= ({numbers}) =>{
    const number_list = numbers.map((number) =>(
      <Apply_colour number={number} colour={GetColour(number)} />
    ))
    return <div className='grid-container'>{number_list}</div>
}

const App=()=>{
  const numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  return (
      
      <div className='app-container'>
          <center><h1>Number Generator</h1></center>
          <Grid_map numbers={numbers}/>
        
      </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)

