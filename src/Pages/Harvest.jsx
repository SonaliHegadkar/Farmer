import React, { Component } from 'react';
import Form from './Form';
import Calendar from './Calendar';
//import './Harvest.css';


class Harvest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crops: [
        {
          name: "Winter Squash",
          seasons: [
            { start: "2018-01-01", end: "2018-02-01" },
            { start: "2018-09-01", end: "2018-12-31" },
          ]
        },
        {
          name: "Strawberries",
          seasons: [
            { start: "2018-04-01", end: "2018-07-01" },
            { start: "2018-01-01", end: "2018-01-01" },
          ]
        },
        {
          name: "Apples",
          seasons: [
            { start: "2018-07-15", end: "2018-12-31" },
            { start: "2018-01-01", end: "2018-03-01" },
          ]
        },
      ],
      svgLink: "#"
    }
  }
  
  addCrop() {
    this.setState({
      crops: [
        ...this.state.crops,
        {
          name: "",
          seasons: [
            { start: "2018-01-01", end: "2018-01-01" },
            { start: "2018-01-01", end: "2018-01-01" },
          ],
        }
      ]
    })
  }
  
  deleteCrop(index) {
    this.setState({
      crops: [
        ...this.state.crops.slice(0, index),
        ...this.state.crops.slice(index + 1),
      ]
    })
  }
  
  downloadSvg() {
    const svg = document.getElementById("svg-container").innerHTML;
    this.setState({
      svgLink: `data:application/octet-stream;base64,${btoa(svg)}`
    })
  }
  
  updateCrop(index, {
    name,
    startOne,
    endOne,
    startTwo,
    endTwo,
  }) {
    const crops = this.state.crops
    if (name || name === "") {
      this.setState({
        crops: [
          ...crops.slice(0, index),
          {
            ...crops[index],
            name,
          },
          ...crops.slice(index + 1),
        ]
      })
    }
    if (startOne) {
      this.setState({
        crops: [
          ...crops.slice(0, index),
          {
            ...crops[index],
            seasons: [
              {
                ...crops[index].seasons[0],
                start: startOne,
              },
              crops[index].seasons[1],
            ]
          },
          ...crops.slice(index + 1),
        ]
      })
    }
    if (endOne) {
      this.setState({
        crops: [
          ...crops.slice(0, index),
          {
            ...crops[index],
            seasons: [
              {
                ...crops[index].seasons[0],
                end: endOne,
              },
              crops[index].seasons[1],
            ]
          },
          ...crops.slice(index + 1),
        ]
      })
    }
    if (startTwo) {
      this.setState({
        crops: [
          ...crops.slice(0, index),
          {
            ...crops[index],
            seasons: [
              crops[index].seasons[0],
              {
                ...crops[index].seasons[1],
                start: startTwo,
              },
            ]
          },
          ...crops.slice(index + 1),
        ]
      })
    }
    if (endTwo) {
      this.setState({
        crops: [
          ...crops.slice(0, index),
          {
            ...crops[index],
            seasons: [
              crops[index].seasons[0],
              {
                ...crops[index].seasons[1],
                end: endTwo,
              },
            ]
          },
          ...crops.slice(index + 1),
        ]
      })
    }
  }
  
  render() {
    return (
      <div id="app">
        <header className='hea'>
          <h1 id='mus'>Harvest Calendar Generator</h1>
          <p id='abc'>For small farms and local farmers markets, a harvest calendar can be an effective marketing visualization. It shows customers when their favorite fruits and vegetables will be in season, or it can simply be used to browse what is currently available.</p>
        </header>
        <div id="form-container">
          <div id="instructions">
            <h3 id='mus3'>How to use it</h3>
            <p id='abc'>Add the crops you sell to the calendar and set the date range when they are available. Harvest windows which span one calendar year to the next will require two date ranges. When you're finished, download the calendar as an SVG file and use it in your promotional materials.</p>
            <button 
              className="btn" 
              onClick={() => this.addCrop()}
            >
              Add Crop
            </button>
            <a 
              className="btn1"
              href={this.state.svgLink}
              download="harvest-calendar.svg"
              onClick={() => this.downloadSvg()}
            >
              Download
            </a>

          </div>
          <Form 
            id="form"
            crops={this.state.crops}
            updateCrop={this.updateCrop.bind(this)}
            deleteCrop={this.deleteCrop.bind(this)}
          />
        </div>
        <Calendar crops={this.state.crops} />
        
      </div>
    );
  }
}

export default Harvest;
