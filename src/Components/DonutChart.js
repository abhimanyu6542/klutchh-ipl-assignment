import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./Table.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Mumbai Indians', 'Rajasthan Royals', 'King XI Punjab', 'Sunrisers Hyderabad', 'Royal Challenger-Bangalore'],
  datasets: [
    {
      label: '# of Votes',
      data: ["2017", "2019", "2010", "2013", "2013"],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
  <div  className='pie'>
    <p className="title"> Super Over Year</p>
  <Pie data={data} height={"100px"} width={"100px"} />
  </div>
  )
}
