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
function updateChartData(chart, newData) {
  chart.data.labels = newData.labels;
  chart.data.datasets = newData.datasets;
  chart.update();
};

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
    updateChartData(trafficLineChart, trafficDataByHour);
  } else if (trafficNavListItem === trafficNavDaily) {
    updateChartData(trafficLineChart, trafficDataByDay);
  } else if (trafficNavListItem === trafficNavWeekly) {
    updateChartData(trafficLineChart, trafficDataByWeek);
  } else if (trafficNavListItem === trafficNavMonthly) {
    updateChartData(trafficLineChart, trafficDataByMonth);
  } 
});


// Message Users
let members = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
const user = document.getElementById('autoComplete');
const message = document.getElementById('user-message');
const send = document.getElementById('send');

send.addEventListener('click', () => {

  // Make sure user field and message are filled out
  if ( user.value  === '' && message.value === '' ) {
    alert('Please fill out user and message fields before sending message.');
  } else if ( user.value === '' ) {
    alert('Please fill out user field before sending message.');
  } else if ( message.value === '' ) {
    alert('Please fill out message field before sending message.');
  } else {
    alert(`Message successfully sent to ${user.value}.`);
  }
});

// Add autoComplete.js for user name search when messaging
// * Info & usage guide at: https://tarekraafat.github.io/autoComplete.js/ * 
const autoCompleteJS = new autoComplete({
  selector: "#autoComplete",
  data: {
    src: members
  },
  resultItem: {
    highlight: {
      render: true
    }
  },
  events: {
    input: {
      selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection;
      }
    }
  }
});


// Settings -- save preferences in local storage
const emailSetting = document.getElementById('email-setting');
const profileSetting = document.getElementById('profile-setting');
const timezoneSetting = document.querySelector('.timezone');
const saveSetting = document.getElementById('save');
const cancelSetting = document.getElementById('cancel');

getUserSettings();

saveSetting.addEventListener('click', ()=> {
  saveUserSettings();
});

cancelSetting.addEventListener('click', ()=> {
  // Remove settings from local storage
  localStorage.clear();

  // Reset toggle sliders and select box
  emailSetting.checked = null;
  profileSetting.checked = null;
  timezoneSetting.value = '';
});

function saveUserSettings() {
  localStorage.setItem('emailSetting', emailSetting.checked);
  localStorage.setItem('profileSetting', profileSetting.checked);
  localStorage.setItem('timezoneSetting', timezoneSetting.value);
};

function getUserSettings() {
  if (localStorage.emailSetting) {
    localStorage.getItem(emailSetting);
  }

  if (localStorage.profileSetting) {
    localStorage.getItem(profileSetting);
  }

  if (localStorage.timezoneSetting ) {
    localStorage.getItem(timezoneSetting);
  }
};
