// **Chart Colors**
const primaryColor = '#7477BF';
const secondaryColor = '#78CF82';
const tertiaryColor = '#51B6C8';
const barBorderColor = 'rgb(104, 107, 172)';
const lineBgColor = 'rgb(112, 104, 201, 0.3)';
const lineBorderColor = 'rgb(204, 204, 204)';

// Data for Hourly Traffic Chart
let trafficDataByHour = {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
   '11-7', '18-24', '25-31'],
  datasets: [{
    label: 'Hourly Traffic',
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500],
  }]
};

let trafficDataByDay = {

};

let trafficDataByWeek = {

};

let trafficDataByMonth = {

};

// Data for Daily Traffic Chart
let dailyBarChartData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100]
  }]
};

// Data for Mobile Users Doughnut Chart
let mobileDoughnutChartData = {
  labels: ['Desktop', 'Tablet', 'Phones'],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500]
  }]
};

// Chart Layout/Styles
// **Traffic Line Chart**
let trafficChartOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  backgroundColor: lineBgColor,
  borderColor: lineBorderColor,
  borderWidth: 1,
  fill: true,
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true,
  scales: {
    y: {
      min: 0,
      suggestedMax: 2500,
      ticks: {
        maxTicksLimit: 6,
        stepSize: 500
      }
    }
  },
  tension: 0.5
};

// **Daily Traffic Bar Chart**
let dailyBarChartOptions = {
  backgroundColor: primaryColor,
  borderColor: barBorderColor,
  borderWidth: 1,
  plugins: {
    legend: {
      display: false,
    }
  },
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 250,
      ticks: {
        stepSize: 50
      }
    }
  }
};

// **Mobile Users Doughnut Chart**
let mobileDoughnutChartOptions = {
  aspectRatio: 2,
  backgroundColor: [
    primaryColor,
    secondaryColor,
    tertiaryColor
  ],
  borderWidth: 0,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        font: {
          weight: 800
        }
      }
    }
  }
};
