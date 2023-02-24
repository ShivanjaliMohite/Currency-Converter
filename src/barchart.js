import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



const BarChart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Currency distribution',
      },
    },
  };
  
  const labels = props.labelArray[0];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Currency Value',
        data: props.currencyDetails[0],
        backgroundColor: 'rgba(0,0,255,0.7)',
        borderColor: 'rgba(0,0,255,0.9)',
        barTickness:1,
      }
    ],
  };
  console.log("labels ", labels);
  console.log("data ", props.currencyDetails);
    return ( 
        <Bar options={options} data={data} />
     );
}
 
export default BarChart;