// Create Alert Notifications
const alertBanner = document.getElementById('alert');

// Create HTML for banner
alertBanner.innerHTML = `
  <div class="alert-banner" id="alert">
    <p><span class="bold">Alert:</span> You have <span class="bold">6</span> 
    unread messages</p>
    <button class="alert-banner-close">x</button>
  </div>
`;

// Close Alert Banner
alertBanner.addEventListener('click', (e)=> {
  const element = e.target;
  if (element.classList.contains('alert-banner-close')) {
    alertBanner.style.display = "none";
  }
});


// Notifications Dropdown
const notifications = document.querySelector('.notifications-content');
const bellIcon = document.querySelector('.notifications-icon');

// When bell clicked, show or hide notifications
bellIcon.addEventListener('click', (e)=> {
  showNotifications();
});

function showNotifications() {
  notifications.classList.toggle('show-notifications');

  // If notifications showing, hide if clicking on something else
  window.addEventListener('click', (e)=> {
    if (!e.target.matches('.notifications-icon')) {
      const myNotifications = notifications;
      if (myNotifications.classList.contains('show-notifications')) {
        myNotifications.classList.remove('show-notifications');
      }
    }
  });
};


// Traffic Chart
const trafficChart = document.getElementById('traffic-chart');

let trafficDataHourly = new Chart(trafficChart, {
  type: 'line',
  data: trafficDataByHour,
  options: trafficChartOptions
});

// Daily Traffic Bar Chart
const dailyTrafficBarChart = document.getElementById('daily-chart');

let dailyBarChart = new Chart(dailyTrafficBarChart, {
  type: 'bar',
  data: dailyBarChartData,
  options: dailyBarChartOptions
});

// Mobile Users Doughnut Chart
const mobileUsersChart = document.getElementById('mobile-chart');

let mobileDoughnutChart = new Chart(mobileUsersChart, {
  type: 'doughnut',
  data: mobileDoughnutChartData,
  options: mobileDoughnutChartOptions
});
