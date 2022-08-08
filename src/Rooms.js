import React from'react';

import { Link} from 'react-router-dom';
import r1 from './roomspic/r1.jfif';
import r2 from './roomspic/r2.jfif';
import r3 from './roomspic/r3.jfif';
import r4 from './roomspic/r4.jfif';
import './rooms.css';
const Rooms=()=>
{
    return(
        <div className="grid-container">
            <div className="grid-item">
                    <Link to="Room1"><img src={r1} alt="hello"></img></Link>
                    <div  className="desc"><h4> Featured Double Bed</h4></div>
                </div>
                             
                <div className="grid-item">
                    <Link to="Room2"><img src={r2} alt="hello"></img></Link>   
                    <div className="desc"><h4>Featured Double Bed</h4></div>
                </div>
            
                
                <div className="grid-item">
                    <Link to="Room3">   <img src={r3} alt="hello"></img> </Link>
                    <div className="desc"><h4>Featured Double Bed</h4></div>
                </div>
            
                <div className="grid-item">
                    <Link to="Room4">   <img src={r4} alt="hello"></img> </Link>
                    <div className="desc"><h4> LUXARY MOUNTAIN VIEW</h4></div>
                </div>  
        </div>
       
         
      
    )
}
export default Rooms;