import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinChart = () => {
  const params = useParams();
  const [stats, setStats] = useState([]);
  axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=inr&days=7`).then((resp) => {
    setStats(resp.data.prices);
    // console.log(resp.data.prices); 
  }).catch((error) => {
    alert("Error in fetching data");
  });

  const coinChartData = Object.values(stats).map(value => ({ x: value[0], y: value[1] }));
  // console.log(coinChartData);
  const options = {
    Response: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM/DD')),
    datasets: [
      {
        fill: true,
        label:
          params.id,
        data: coinChartData.map(value => value.y),
        borderColor: "#304146",
        backgroundColor: "#CCD1D1"
      }
    ]
  }
  return (
    <>
      <div>
        <Line options={options} data={data} width={'1000px'} height={'500px'} />
      </div>
    </>
  )
}

export default CoinChart