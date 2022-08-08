import React from 'react';

import A1 from './roomspic/A1.jpg';
import A3 from './roomspic/A3.jpg';
import A4 from './roomspic/A4.jpg';


const About=()=>
{
    return(     
        <>
        <div >
            <div style={{backgroundColor:'coral'
                         ,height:'80px',margin:'4px',padding:"20px"   }}>
                <p style={{textAlign:'center',color:'red',fontFamily:'cursive'}}>This Hotel  is establsihed in year 2000. 
                     Fron the establishment to till date We are delivering best in class service from past two decades.
                    This has made us proud on our Employees, our  customers and every person who has contirbuted to this hotel . </p>
            </div>
            <div>
                <img style={{width:'800px',
                            height:'400px'
                            }}
                src={A1} alt='hello'>
                </img>
                <p style={{backgroundColor:'grey',color:'gold',
                            height:'50px',width:'800px',
                            textAlign:'center',fontSize:'larger',
                            fontWeight:'bold'}}>
                    We    have   Premium   siitng   areas   in   Suits </p>
            </div> 
        
        <div style={{textAlign:'right'}}>
                <img style={{width:'800px',
                            height:'400px'}}
                src={A3} alt='hello'>
                </img>
                <p style={{backgroundColor:'grey',color:'gold',
                            height:'50px',width:'800px',
                            textAlign:'center',fontSize:'larger',
                            fontWeight:'bold',marginLeft:'463px'}}>
                    We  provide the best in class lounges </p>
        </div> 
        <div>
                <img style={{width:'800px',
                            height:'400px'
                            }}
                src={A4} alt='hello'>
                </img>
                <p style={{backgroundColor:'grey',color:'gold',
                            height:'50px',width:'800px',
                            textAlign:'center',fontSize:'larger',
                            fontWeight:'bold'}}>
                     Pool side resturants.</p>
            </div> 
        </div>  
        </>
    )
}
export default About;
