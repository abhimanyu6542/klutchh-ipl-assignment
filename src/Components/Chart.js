import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Table.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1,2,3,4,5,6,7,8]
        }
      },
      series: [
        {
          name: "Match Win",
          data: [10,13,42,42,70,73,77,92]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
         <p className="title"> Number Of Match Win</p>
            
            <ol className="citylist">
                    <li>1 - Rising Pune Supergiant</li>
                    <li>2 - Gujarat Lions</li>
                    <li>3 - Sunrisers Hyderabad</li>
                    <li>4- Delhi Daredevils</li>
                    <li>5 - King XI Punjab</li>
                    <li>6 - Royal Challenger- Bangalore</li>
                    <li>7 - Kolkata Knight Riders</li>
                    <li>8 - Mumbai Indians</li>
                </ol>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="350"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;