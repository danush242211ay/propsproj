import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = () => {
  return (
    <div className='card'>
        <div className='top'>
          <img src='data:image/png;base64,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'></img>
          <button>save <Bookmark size={18} color="black" strokeWidth={1}/></button>
        </div>
        <div className='center'>
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card