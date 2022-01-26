// Chart Variables
// *Charts*
const trafficChart = document.getElementById('traffic-chart');
const dailyTrafficBarChart = document.getElementById('daily-chart');
const mobileUsersChart = document.getElementById('mobile-chart');

// **Chart Colors**
const primaryColor = '#7477BF';
const secondaryColor = '#78CF82';
const tertiaryColor = '#51B6C8';
const barBorderColor = 'rgb(104, 107, 172)';
const lineBgColor = 'rgb(112, 104, 201, 0.3)';
const lineBorderColor = 'rgb(204, 204, 204)';

// Data for Traffic Charts
let trafficDefaultChart = {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
   '11-7', '18-24', '25-31'],
  datasets: [{
    label: 'Hourly Traffic',
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500]
  }]
};

let trafficDataByHour = {
  labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10',
   '11-7', '18-24', '25-31'],
  datasets: [{
    label: 'Hourly Traffic',
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500]
  }]
};

let trafficDataByDay = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [{
    label: 'Daily Traffic',
    data: [350, 2100, 1750, 1375, 1900, 1000, 925]
  }]
};

let trafficDataByWeek = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Weekly Traffic',
    data: [2175, 1050, 1500, 500]
  }]
};

let trafficDataByMonth = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Monthly Traffic',
    data: [1800, 1575, 2500, 1700, 2100, 1500, 1175, 850, 1200, 1950, 1175, 800]
  }]
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
