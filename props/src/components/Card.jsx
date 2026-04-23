import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {
  return (
    <div className='card'>
        <div className='top'>
          <img src={props.logo}></img>
          <button>save <Bookmark size={18} color="black" strokeWidth={1}/></button>
        </div>
        <div className='center'>
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.t1}</h4>
            <h4>{props.t2}</h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>${props.pay}/day</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card