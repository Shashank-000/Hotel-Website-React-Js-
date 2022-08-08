import React from 'react';
import Dp from './carspic/Dp.jpg';

const Profile =()=>
{
    return(
        <div style={{width:'500px',height:'500px',display:'flex',flexDirection:'row',background: `linear-gradient(rgb(64, 139, 255),white)`,alignContent:'center',alignItems:'center'}}>
                        <div style={{width:'200px',height:'300px',backgroundColor:'limegreen',marginLeft:"auto"}}>
                            <img style={{width:'200px',height:'300px'}} src={Dp}></img>
                        </div>

                        <div  style={{width:'200px',height:'300px',backgroundColor:'navy',display:'flex',flexDirection:'column',marginRight:'auto'}}>
                            <div style={{width:'200px',height:'80px',backgroundColor:'white',marginTop:'20px'}}>
                                <p>infoshashank28@gmail.com</p>
                            </div>
                            <div style={{width:'200px',height:'80px',backgroundColor:'white',marginTop:'20px'}}>
                                <p>DOB:28 July 2020</p>
                            </div>
                            <div style={{width:'200px',height:'70px',backgroundColor:'grey',marginTop:'20px'}}>
                                <p>Mobile:7033192591</p>
                            </div>  
                        </div>
        </div>
    )
}
export default Profile; 