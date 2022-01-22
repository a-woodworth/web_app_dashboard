// Close alert
const alertBanner = document.getElementById('alert');

// Create HTML for banner
alertBanner.innerHTML = `
  <div class="alert-banner" id="alert">
    <p><span class="bold">Alert:</span> You have <span class="bold">6</span> 
    unread messages</p>
    <button class="alert-banner-close">x</button>
  </div>
`;

alertBanner.addEventListener('click', (e)=> {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alertBanner.style.display = "none";
  }
});

// Traffic Chart
const trafficChart = document.getElementById('traffic-chart');

let trafficDataHourly = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', 
    '27-3', '4-10', '11-7', '18-24', '25-31'],
    datasets: [{
      label: 'Hourly Traffic',
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500],
      fill: true,
      backgroundColor: 'rgb(213, 214, 236, 0.5)',
      borderColor: 'rgb(204, 204, 204)',
      borderWidth: 1,
      tension: 0.5,
      showLine: true
    }],
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 2500,
        ticks: {
          stepSize: 500
        }
      }
    }
  }
});

// Daily Traffic Bar Chart
const dailyBarChart = document.getElementById('daily-chart');

let dailyDataBar = new Chart(dailyBarChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      label: 'Daily Traffic',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: 'rgb(116, 119, 191)',
      borderColor: 'rgb(104, 107, 172)',
      borderWidth: 1
    }],
  },
  options: {
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
  }
});

// Mobile Users Doughnut Chart
const mobileUsersChart = document.getElementById('mobile-chart');

let mobileDataDoughnut = new Chart(mobileUsersChart, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
      label: '# of Users',
      data: [65, 20, 15],
      backgroundColor: [
      'rgb(104, 107, 172)',
      'rgb(129, 201, 143)',
      'rgb(81, 182, 200)'
      ],
      hoverOffset: 4,
      borderWidth: 0
    }],
  },
  options: {
    aspectRatio: 2,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 15,
          boxHeight: 10,
          font: {
            weight: 800
          }
        }
      }
    },
  },
});

