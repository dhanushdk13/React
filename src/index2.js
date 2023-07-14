import React from 'react'
import ReactDOM from 'react-dom'

const skills=[
    ['HTML',10],
    ['CSS',7],
    ['Javascript',9],
    ['React',10],
]

const Skill = ({skill: [tech,level]})=>{
    <li>
        {tech} {level}
    </li>
}

const Skills = ({skills})=>{
    const skillist = skills.map((skill)=> <Skill skill={skill}/>) 
    console.log(skillist)
    return <ul>{skillist}</ul>
}

const App = ()=>{
    return(
        <div className='container'>
            <div>
                    <h1>Skills Level</h1>
                    <Skills skills={skills}/>
            </div>

        </div>
    )
}

const RootElement = document.getElementById('root')
ReactDOM.render(<App/>,RootElement)