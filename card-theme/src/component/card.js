import React,{useState} from 'react'
import './card.css'


const Card = (props) => {

const [light, setLight] = useState(true);


  return (
    <div className = "wrapper" 
    style={{
      backgroundColor: light ? "#5CB8E4": "#181818",
      color: light ? "#181818" : "#5CB8E4"
    }}
    
    
    > 

        <div className ='header'>
            <h1>{props.title}</h1>
        </div>

        

        <button 
        style={{
          backgroundColor: light ? "#181818": "#5CB8E4",
          color: light ? "#5CB8E4" : "#181818"
        }}
        onClick = {() => {setLight(!light)}}
        
        >{light ? "click for lightmode":"click for darkmode"}</button>
        
    </div>
  )
}

export default Card