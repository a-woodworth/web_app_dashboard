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


// Charts
// *Line Chart*
let trafficLineChart = new Chart(trafficChart, {
  type: 'line',
  data: trafficDefaultChart,
  options: trafficChartOptions
});

// *Bar Chart*
let dailyBarChart = new Chart(dailyTrafficBarChart, {
  type: 'bar',
  data: dailyBarChartData,
  options: dailyBarChartOptions
});

// *Doughnut Chart*
let mobileDoughnutChart = new Chart(mobileUsersChart, {
  type: 'doughnut',
  data: mobileDoughnutChartData,
  options: mobileDoughnutChartOptions
});

// Traffic Navigation Bar
const trafficNavList = document.querySelector('.traffic-nav');
const trafficNavListItems = [...document.querySelector('.traffic-nav').getElementsByTagName('li')];
const trafficNavHourly = trafficNavListItems[0];
const trafficNavDaily = trafficNavListItems[1];
const trafficNavWeekly = trafficNavListItems[2];
const trafficNavMonthly = trafficNavListItems[3];

trafficNavList.addEventListener('click', (e) => {
  let trafficNavListItem = e.target;
  let activeTrafficChart = trafficNavList.querySelector('.active');

  // Check if traffic nav label is active
  if (trafficNavListItem !== activeTrafficChart && 
      trafficNavListItems.includes(trafficNavListItem)) {

    trafficNavListItem.classList.add('active');
    activeTrafficChart.classList.remove('active');
  }

  // Get selected chart
  if (trafficNavListItem === trafficNavHourly) {
    trafficLineChart.destroy();
    trafficLineChart = new Chart(trafficChart, {
      type: 'line',
      data: trafficDataByHour,
      options: trafficChartOptions
    });
  } else if (trafficNavListItem === trafficNavDaily) {
    trafficLineChart.destroy();
    trafficLineChart = new Chart(trafficChart, {
      type: 'line',
      data: trafficDataByDay,
      options: trafficChartOptions
    });
  } else if (trafficNavListItem === trafficNavWeekly) {
    trafficLineChart.destroy();
    trafficLineChart = new Chart(trafficChart, {
      type: 'line',
      data: trafficDataByWeek,
      options: trafficChartOptions
    });
  } else if (trafficNavListItem === trafficNavMonthly) {
    trafficLineChart.destroy();
    trafficLineChart = new Chart(trafficChart, {
      type: 'line',
      data: trafficDataByMonth,
      options: trafficChartOptions
    });
  } 
});
