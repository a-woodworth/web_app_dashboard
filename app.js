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

