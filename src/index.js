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

import React from 'react'
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