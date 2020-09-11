import React, { Component } from 'react';
import Header from './Header';
import './App.css';


class App extends Component {
  render() {
    let subscribers=[
      {
        name:"Shaunak",
        phone:12345678
      },
      {
        name:"apple",
        phone:214567895
      }
    ]
    return (
  
    <div className="component-container">
      <Header/>
      <div className="component-body-container">

        <button className="custom-btn add-btn"> Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">shaunak</span><br/>
          <span className ="grid-item phone-heading">12345678</span>
        </div>

        {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            })
          }
        </div>
      </div>
    );
        }
