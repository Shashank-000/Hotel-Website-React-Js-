import React,{Component} from 'react';
import './Form.css';
import './App.css'
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Rooms from './Rooms';
import Form from "./Form";  
import { BrowserRouter, Route,Link } from 'react-router-dom';
import r1 from './roomspic/r1.jfif';
import r2 from './roomspic/r2.jfif';
import r3 from './roomspic/r3.jfif';
import r4 from './roomspic/r4.jfif';
import e1 from './roomspic/e1.jpg';
import e2 from './roomspic/e2.jpg';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    < BrowserRouter >
      <Menu/>  
      
      <switch>
       <Route path="/"           exact component={Home} />
       <Route path="/about"      exact component={About} />
       <Route path="/contact"    exact component={Contact} />
       <Route path="/rooms"      exact component={Rooms}/>
       <Route path="/NameForm"   exact component={Form}/>
       <Route path="/Room1"      exact component={Room1}/>
       <Route path="/Room2"      exact component={Room2}/>
       <Route path="/Room3"      exact component={Room3}/>
       <Route path="/Room4"      exact component={Room4}/>
       <Route path="/E1"         exact component={E1} />
       <Route path="/E2"         exact component={E2} />
      </switch>
      <Footer/>
    </BrowserRouter>
  );
}



class NameForm extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event)
  {
    alert('Your Response is sumited. We will contact you soon.');
    event.preventDefault();
  }

  render() 
  {
    return (
      <>
       <form onSubmit={this.handleSubmit}>
          
            <p></p>
            <input  type="text" placeholder="Full Name" name='Name' value={this.state.value} onChange={this.handleChange} required />
            <p></p>
            <input  type="number" placeholder="Mobile No " required/>
            <p></p>
            <input  type='text' placeholder='Address Line 1' required></input>
            <p></p>
            <input  type='text' placeholder='Address Line 2' required></input>
            <p></p>
            <input  type='text' placeholder='Address Line 3' required></input>
            <p></p>
            <input  type='number' placeholder='Number of days ' required></input>
            <p></p>
            <input  type="submit" value="Submit" required/>  
      </form>
     
      </>
    );
  }
}


const Home = () => {
  return (
    <>
          <div className="appdiv" >
                        <label><p style={{fontWeight:'bold'}}>Select City:</p></label>
                        
                          <select name="Select City"> 
                            <option value="value1">New Delhi</option>
                            <option value="value2">Banglore</option>
                            <option value="value3">Mumbai</option>
                          </select>
                        
                        <label><p style={{fontWeight:'bold'}}>Type:</p></label>
                          <select>
                              <option>Suite </option>
                              <option >Deluxe Room </option>
                              <option>Standard Room</option>
                          </select>
                        <label><p style={{fontWeight:'bold'}}>NUMBER OF ROOMS:</p></label>   
                        <input type="number"></input>
                        <button>BOOK NOW</button>         
          </div>
    <div style={{display:'flex',width:'100%',height:'350px'}}>
            <div className="container">
                  <Link to="E1">   <img src={e1}alt="hello"></img></Link>
                  <div className="overlay">EXCLUSIVE ROOMS</div>
            </div>

            <div className="container">
                <Link to="E2">   <img src={e2}alt="hello"></img> </Link>
                <div className="overlay">EXCLUSIVE ROOMS</div>
            </div>
    </div>      
     </>     
    )
}
    const Room1= () =>{
      return (
        <>
      <div style={{display:'flex',width:'100%',height:'350px'}}>

      
          <div style={{width:'40%',backgroundColor:'lightgrey',float:'left'}} >
            <img style={{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20,width:500,height:300}}
              src={r1}alt="hello"></img>
          </div>

            <div style={{width:'60%',backgroundColor:'lightblue',float:'left',padding:20}}>
                <p>
                  <h4>Double Bed Air conditioned Room </h4>
                  <h4>1 Balcony</h4>
                  <h4>24 Hrs. Wifi.</h4>
                  <h4>Bathroom with all accessories</h4>
                  <h4>1 Day 1 Night @ INR 1200(Including Gst)</h4>
                </p>
                  <NavLink style={{width:200}}> 
                      <Link to="NameForm" 
                      style={{border:"2px solid blue",
                      float:'left',paddingLeft:20,
                      paddingTop:15,paddingRight:20,
                      paddingBottom:20,color:'red',
                      borderRadius:2}}> BOOK NOW </Link>
                  </NavLink>
            </div>
      

      </div>
        </>
      )
    }
    const Room2= () =>{
      return (
        <>
        <div style={{display:'flex',width:'100%',height:'350px'}}>
            <div style={{width:'40%',backgroundColor:'lightgrey',float:'left'}}>
              <img style={{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20,width:500,height:300}}
                src={r2} alt="hello"></img>
            </div>
       
            <div style={{width:'60%',backgroundColor:'lightblue',float:'left',padding:20}}>
                    <p>
                      <h4>Double Bed Air conditioned Room </h4>
                      <h4>1 Balcony</h4>
                      <h4>24 Hrs. Wifi.</h4>
                      <h4>Bathroom with all accessories</h4>
                      <h4>1 Day 1 Night-INR 1000(Including Gst)</h4>
                    
                    </p>
                    <NavLink style={{width:200,float:'left'}}> 
                    <Link to="NameForm" 
                    style={{border:"2px solid blue",
                    float:'left',paddingLeft:20,
                    paddingTop:15,paddingRight:20,
                    paddingBottom:20,color:'red',
                    borderRadius:2}}> BOOK NOW</Link>
                    </NavLink>
             </div>
        </div>      
        </>
      )
    }

    const Room3= () =>{
      return (
        <>
 <div style={{display:'flex',width:'100%',height:'350px'}}> 
       <div style={{width:'40%',backgroundColor:'lightgrey',float:'left'}} >
         <img style={{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20,width:500,height:300}}
          src={r3} alt="hello"></img>
       </div>
       
       <div style={{width:'60%',backgroundColor:'lightblue',float:'left',padding:20}}>
        <p>
          <h4>Double Bed Air conditioned Room </h4>
          <h4>1 Balcony</h4>
          <h4>24 Hrs. Wifi.</h4>
          <h4>Bathroom with all accessories</h4>
          <h4>1 Day 1 Night@INR 1000(Including Gst)</h4>
        </p>
        <NavLink style={{width:200,float:'left'}}> 
        <Link to="NameForm" 
        style={{border:"2px solid blue",
        float:'left',paddingLeft:20,
        paddingTop:15,paddingRight:20,
        paddingBottom:20,color:'red',
        borderRadius:2}}> BOOK NOW</Link>
        </NavLink>
       </div>
       
 </div>       
        </>
      )
    }
    const Room4= () =>{
      return (
       
      <div style={{display:'flex',width:'100%',height:'350px'}}>  

          <div style={{width:'40%',backgroundColor:'lightgrey',float:'left'}} >
              <img style={{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20,width:500,height:300}}
                src={r4} alt="hello"></img>
          </div>
       
          <div style={{width:'60%',backgroundColor:'lightblue',float:'left',padding:20}}>
              <p>
                <h4>Double Bed Air conditioned Room </h4>
                <h4>1 Balcony</h4>
                <h4>24 Hrs. Wifi.</h4>
                <h4>Bathroorm with all accessories</h4>
                <h4>1 Day 1 Night@INR 3200(Including Gst)</h4> 
              </p>
              <NavLink style={{width:200,float:'left'}}> 
              <Link to="NameForm" 
              style={{border:"2px solid blue",
              float:'left',paddingLeft:20,
              paddingTop:15,paddingRight:20,
              paddingBottom:20,color:'red',
              borderRadius:2}}> BOOK NOW</Link>
              </NavLink>
          </div>
      </div>
        
      )
    }
 const E1 =()=>{
    return(
      <>
      <div style={{display:'flex',height:'350px',padding:'20px'}}>

          <div style={{width:'40%',height:'100%',paddingLeft:'20px'}}>
            <img src={e1} alt='hello'></img>
          </div>
          <div style={{padding:'20px',backgroundColor:'silver',
              color:'royalblue', width:'60%',height:'300px',
             }}>
            <h2>Exclusive Two Rooms Flat</h2>
            <h2>Sea View Windows and Balconies</h2>
            <h2>Seperate Pool</h2>
            <h2>INR 2400 per Day</h2>
            <NavLink style={{width:200,float:'left'}}> 
              <Link to="NameForm" 
              style={{border:"2px solid blue",
              float:'left',paddingLeft:20,
              paddingTop:15,paddingRight:20,
              paddingBottom:20,color:'red',
              borderRadius:2}}> BOOK NOW</Link>
          </NavLink>
          </div>
      </div>  
      </>
    )
  }

  const E2 =()=>{
    return(
      <>
      <div style={{display:'flex',height:'350px',padding:'20px'}}>

          <div style={{width:'40%',height:'100%',paddingLeft:'20px'}}>
            <img src={e2} alt='hello'></img>
          </div>
          <div style={{padding:'20px',backgroundColor:'silver',
              color:'royalblue', width:'60%',height:'300px',
             }}>
            <h2>Exclusive Sea view mountain view rooms</h2>
            <h2>Bathrooms with premium fittings</h2>
            <h2>Car facilities to airports  </h2>
            <h2>INR 2400 per Day</h2> 
            <NavLink style={{width:200,float:'left'}}> 
              <Link to="NameForm" 
              style={{border:"2px solid blue",
              float:'left',paddingLeft:20,
              paddingTop:15,paddingRight:20,
              paddingBottom:20,color:'red',
              borderRadius:2}}> BOOK NOW</Link>
          </NavLink>
          </div>
      </div>  
      </>
    )
  }

    
export default App;