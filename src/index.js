/*
import React from 'react'
import ReactDOM from 'react-dom'



const divstyle={
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ADD8E6',
  borderRadius: '15px',
  padding: '20px',
  margin: '20px',
  border: '10px white',
  textAlign: 'center',
}

const instyle={
  justifyContent: 'center',
  display : 'inline-block',
  borderRadius: '5px',
  textAlign: 'center',
  border: '2px white',
  margin: '10px',
  padding: '10px',
  
}

const exstyle={
  justifyContent: 'center',
  display : 'inline-block',
}

const btnstyle={
  borderRadius: '5px',
  textAlign: 'center',
  border: '2px white',
  margin: '10px',
  color: 'white',
  backgroundColor: '#F75D59',
  padding: '10px',
  width: '300px',
}

const main = (
  <div style={divstyle}>
    <h1><center>Subscribe</center></h1>
    <br/>
    <p><center>Sign up with your email to receive updates</center></p>
    <br/>
    <div style={exstyle}>
    <input type='text' placeholder='First Name' style={instyle}/>
    <input type='text' placeholder='Last Name' style={instyle}/>
    <input type='text' placeholder='Email' style={instyle}/>
    </div>
    <br/>
    <button type='submit' style={btnstyle}>Subscribe</button>
   
  </div>


)
const rootElement = document.getElementById('root')

ReactDOM.render(main, rootElement)*/

/*import React from 'react'
import ReactDOM from 'react-dom'

const skills=[
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Skill = ({ skill: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

const Skills = ({skills})=>{
    const skillist = skills.map((skill)=> <Skill skill={skill}/>) 
    console.log(skillist)
    return <div>{skillist}</div>
}

const App = ()=>{
    return(
        <div className='container'>
            <div>
                    <h1>Countries List</h1>
                    <Skills skills={skills}/>
            </div>

        </div>
    )
}

const RootElement = document.getElementById('root')
ReactDOM.render(<App/>,RootElement)
*/

// Number generator 

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