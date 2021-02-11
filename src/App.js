import { Button, ButtonGroup, Checkbox, Radio, Slider, Select, MenuItem, TextField,Switch,Box,Container,Grid,Hidden,Tab,Tabs,AppBar,Menu } from '@material-ui/core';
import { Delete, Favorite, FavoriteBorder } from '@material-ui/icons';
import { Link,Route,BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

function App() {

  //Buttons
  const [color, setColor] = useState("primary")
  const [disableBtn, setDisableBtn] = useState(false)
  function customMe() {
    setColor("secondary");
    // alert("Function Called")
    // setDisableBtn(true);
  }

  //Checkbox
  const [name, setName] = useState([])
  function getValue(e) {
    let data = name;
    data.push(e.target.value)
    console.log(data)
  }

  // Radio button 
  const [gender, setGender] = useState("female")
  const testFunction = (e) => {
    console.log(e.target.value)
    setGender(e.target.value);
  }

  //   Slider 
  const mark = [
    {
      value: 0,
      label: "start"
    },
    {
      value: 100,
      label: "middle"
    }, {
      value: 200,
      label: "stop"
    },
    {
      value: 75,
      label: "custom"
    }
  ]

  const getvalue = (e, val) => {
    console.log(val)
  }

  //Range Slider
  const [val, setVal] = useState([40, 100])
  const updateVal = (e, item) => {
    setVal(item)
  }

  // Select
  const [course, setCourse] = useState("")
  const updateCourse = (e, val) => {
    console.log(e.target.value)
    setCourse(e.target.target)
  }

  // Text Field
  const getData = (e) => {
    console.log(e.target.value)
  }

  // Switch
  const getValuee=(e,val)=>{
    console.log(val)
  }

  // Tabs
  const [value,setValue] = useState(0)
  const handleTabs=(e,val)=>{
    console.log(val)
    setValue(val)
  }

  // Routing
  const [anchor,setAnchor] = useState(null)
  const openMenu=(event)=>{
    setAnchor(event.currentTarget)
  }

  const closeMenu=(event)=>{
    setAnchor(null)
  }

  return (
    <div className="App">
      <h1>React Material-UI</h1>
      <button>Click me</button>
      {/* Material Ui buttons */}
      <Button
        color={color}
        variant="outlined"
        onClick={() => { customMe() }}
        disabled={disableBtn}
        // size="small"
        // startIcon={<Delete/>}
        endIcon={<Delete />}
      >Material Ui button
      </Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary"> Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>

      {/*  ButtonGroup */}
      <h2>Material-Ui | ButtonGroup</h2>
      <ButtonGroup color="primary" variant="outlined" // orientation="row" // orientation="vertical"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      {/*  checkbox */}
      <h2>Material-Ui | Checkbox</h2>
      <Checkbox color="primary" value="Anshul" onChange={(e) => { getValue(e) }} />
      <Checkbox color="primary" value="Sam" onChange={(e) => { getValue(e) }} />
      <Checkbox color="primary" value="xyz" indeterminate onChange={(e) => { getValue(e) }} />
      <Checkbox color="secondary" value="xyz" onChange={(e) => { getValue(e) }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />

      {/*   Radio button */}
      <h2>Material-Ui | Radio button</h2>
      <div>
        <span>Male</span>
        <Radio color="primary" value="male" checked={gender === "male"} onChange={testFunction} />
        <span>Female</span>
        <Radio value="female" checked={gender === "female"} onChange={testFunction}
      /></div>

      {/*   Slider */}
      <h2>Material-Ui | Slider</h2>
      <div style={{ width: 300, margin: 40 }}>
        <Slider color="primary" defaultValue="100" valueLabelDisplay="auto" max={200} step={10} marks={mark} onChange={getvalue} // orientation="vertical"
      /></div>

      <h2>Material-Ui | Range Slider</h2>
      <div style={{ width: 400, margin: 40 }}>
        <Slider value={val} max={200} onChange={updateVal}
        /> </div>

      {/*   Select */}
      <h2>Material-Ui | Select</h2>
      <Select value={course} displayEmpty onChange={updateCourse}>
        <MenuItem value="">Select Course</MenuItem>
        <MenuItem value={1}>Node</MenuItem>
        <MenuItem value={2}>PHP</MenuItem>
        <MenuItem value={3}>Java</MenuItem>
        <MenuItem value={4}>JavaScript</MenuItem>
      </Select>

      {/*   Text field */}
      <h2>Material-Ui | Text field</h2>
      <TextField label="Enter Address" color="secondary" variant="outlined" type="password" onChange={getData} />

      {/*  Switch */}
      <h2>Material-Ui | Switch</h2>
      <Switch color="primary" size="small" //by default size medium hota h 
      onChange={getValuee}  />

        {/*  Box | Layout */}
        <h2>Material-Ui | Box | Layout</h2>
       <Box component="span" style={{color:'red'}} clone m={3} p={3} // m for margin; p for padding
       ><Button>Hello</Button></Box>

        {/*  Container | Layout */}
        <h2>Material-Ui | Container | Layout</h2>
          <Container maxWidth="xs" style={{backgroundColor:'skyblue'}} > 
          <h4>Container | Layout</h4></Container>
          <Container maxWidth="sm" style={{backgroundColor:'skyblue'}} > 
          <h4>Container | Layout</h4></Container>
          <Container maxWidth="md" style={{backgroundColor:'skyblue'}} > 
          <h4>Container | Layout</h4></Container>
          <Container fix maxWidth="lg" style={{backgroundColor:'skyblue'}} //fix apne ap adjust hoti jati h screen k acc.
          > <h4>Container | Layout</h4></Container>

         {/*  Grid system for responsive layout */}
         <h2>Material-Ui | Grid system for responsive layout</h2>
          <Grid item xs={12}  container spacing={2}>
            <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'green'}}>Block 1</h3></Grid>
            <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'green'}}>Block 2</h3></Grid>
            <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'green'}}>Block 3</h3></Grid>
            <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'green'}}>Block 4</h3></Grid>
          </Grid>

            {/*  Hidden | Layout */}
         <h2>Material-Ui | Hidden | Layout</h2>
        <Grid item xs={12}  container spacing={2}>
          <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'orange'}}>Block 1</h3></Grid>
          <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'orange'}}>Block 2</h3></Grid>
          <Hidden only={['sm','xs']}><h3 style={{backgroundColor:'orange',flex:1}}>Block 3</h3></Hidden>
          <Grid item lg={3} sm={6} xs={12}><h3 style={{backgroundColor:'orange'}}>Block 4</h3></Grid>
        </Grid>

         {/*  Tabs | Tab | Tab panel */}
         <h2>Material-Ui | Tabs </h2>
         <AppBar position="static">
           <Tabs value={value} onChange={handleTabs}>
             <Tab label="Item 1"/>
             <Tab label="Item 2"/>
             <Tab label="Item 3"/>
             <Tab label="Item 4"/>
           </Tabs>
         </AppBar>
         <TabPanel value={value} index={0}> Item One Details </TabPanel>
         <TabPanel value={value} index={1}> Item Two Details </TabPanel>
         <TabPanel value={value} index={2}> Item Three Details </TabPanel>
         <TabPanel value={value} index={3}> Item Four Details </TabPanel>

          {/*  Menu with react routing */}
         <Router>
         <h2>Material-Ui | Menu with react routing </h2>
         <Button variant="secondary" onClick={openMenu}>Menu</Button>
         <Menu open={anchor} onClose={closeMenu}>
           <MenuItem onClick={closeMenu}> <Link to="/">Home</Link></MenuItem> 
           <MenuItem onClick={closeMenu}> <Link to="/about">About</Link></MenuItem> 
         </Menu>
         <Route path="/about"> <About/> </Route>
         <Route exact path="/"> <Home/> </Route>
         </Router>





















    </div>
  );
}

function TabPanel(props){
  const {children,value,index}=props;
  return (<div>
    {
      value==index &&
     ( <h2>{children}</h2>)
    }
  </div>)
}

function Home(){
  return (<h1>Home</h1>)
}

function About(){
  return (<h1>About</h1>)
}


export default App;
