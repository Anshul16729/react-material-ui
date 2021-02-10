import { Button,ButtonGroup,Checkbox,Radio } from '@material-ui/core';
import { Delete,Favorite,FavoriteBorder } from '@material-ui/icons';
import React,{ useState } from 'react';
import './App.css';

function App() {

  //Buttons
  const [color,setColor] =useState("primary")
  const [disableBtn,setDisableBtn] =useState(false)
 function customMe()
  {
    setColor("secondary");
    // alert("Function Called")
    // setDisableBtn(true);
  }

  //Checkbox
  const [name,setName] =useState([])
  function getValue(e){
    let data=name;
    data.push(e.target.value)
    console.log(data)
  }

  // Radio button 
  const [gender,setGender] = useState("female")
  const testFunction=(e)=>{
    console.log(e.target.value)
    setGender(e.target.value);
  }

  return (
    <div className="App">
      <h1>React Material-UI</h1>
      <button>Click me</button>
      {/* Material Ui buttons */}
      <Button 
      color={color}
      variant="outlined"
      onClick={()=>{customMe()}}
      disabled={disableBtn}
      // size="small"
      // startIcon={<Delete/>}
      endIcon={<Delete/>}
      >Material Ui button
      </Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary"> Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>

      {/*  ButtonGroup */}
      <h1>Material-Ui | ButtonGroup</h1>
      <ButtonGroup 
      color="primary" 
      variant="outlined" 
      // orientation="row"
      // orientation="vertical"
      >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>

       {/*  checkbox */}
       <h1>Material-Ui | Checkbox</h1>
        <Checkbox color="primary" value="Anshul" onChange={(e) =>{getValue(e)}}/>
        <Checkbox color="primary" value="Sam" onChange={(e) =>{getValue(e)}}/>
        <Checkbox color="primary" value="xyz" indeterminate onChange={(e) =>{getValue(e)}}/>
        <Checkbox color="secondary" value="xyz" onChange={(e) =>{getValue(e)}} icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>

         {/*   Radio button */}
       <h1>Material-Ui | Radio button</h1>
       <div>
       <span>Male</span>
      <Radio 
      color="primary"
      value="male"
      checked={gender==="male"}
      onChange={testFunction}
      />
       <span>Female</span>
      <Radio 
      value="female"
      checked={gender==="female"}
      onChange={testFunction}
      />
      
       </div>














    </div>
  );
}

export default App;
