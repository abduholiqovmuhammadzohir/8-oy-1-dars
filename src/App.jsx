import './App.css'
import logo from "./assets/logo.svg"
import visitor from "./assets/visitor.svg"
import menu from "./assets/menu.svg"
import profile from "./assets/profile.png"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import icon from "./assets/Icon.svg"
import { useState } from 'react';
import ApexChart from './components/Apexchart';
import Tag from './components/Tag';
import Left from './components/Left';
import Integratsiya from './components/Integratsiya/inde'

function App() {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <>
      <div className="container">
        <div className="navbar">
          <img src={logo} alt="" />
          <img src={menu} alt="" />
          <div className="profile">
            <img src={profile} />
            <FormControl className='select' variant="standard" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="demo-simple-select-standard-label">Austin Robertson</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

          </div>
        </div>
        <div className="medium">
          <div className="right">
            <div className="cards">
              <div className="card">
                <img src={icon} alt="" />
                <div className="text">
                  <p>Tracking loyihalari</p>
                  <h4>5 ta</h4>
                  <h5>(7 ta subloyiha)</h5>
                </div>
              </div>
              <div className="card">
                <img src={icon} alt="" />
                <div className="text">
                  <p>Sharh olish loyihalari</p>
                  <h4>15 ta</h4>
                  <h5>(7 ta subloyiha)</h5>
                </div>
              </div>
              <div className="card">
                <img src={icon} alt="" />
                <div className="text">
                  <p>Mijozlar</p>
                  <h4>12,345 ta</h4>
                  <h5>(563 ta subloyiha)</h5>
                </div>
              </div>
            </div>
            <div className="apexchart">
              <h1>Tracking loyihasi</h1>
              <ApexChart></ApexChart>
            </div>
            <div className="tag">
              <Tag></Tag>
            </div>
          </div>
          <div className="left">
            <Left></Left>
            <div className="visitor">
              <img src={visitor} alt="" />
            </div>
            <Integratsiya></Integratsiya>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
