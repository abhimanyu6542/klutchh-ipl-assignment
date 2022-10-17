import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./Table.css";

class HostedCity extends Component {
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
          name: "Match",
          data: [49,32,10,5,66,85,60,61]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
         <p className="title">Hosted City</p>
            
            <ol className="citylist">
                    <li>1 - Hyderabad</li>
                    <li>2 - Pune</li>
                    <li>3 - Rajkot</li>
                    <li>4- Indore</li>
                    <li>5 - Bangalore</li>
                    <li>6 - Mumbai</li>
                    <li>7 - Delhi</li>
                    <li>8 - Kolkata</li>
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
        <div>
        </div>
      </div>
    );
  }
}

export default HostedCity;