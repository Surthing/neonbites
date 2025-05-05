const fs = require('fs');

fetch('https://pretix.eu/api/v1/organizers/neonbites/events/villa-flaire/quotas/?availability=true', {
  headers: {
    'Authorization': 'Token '
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data);  // Add this
    const quota = data.results.find(q => q.name === 'General Admission');
    fs.writeFileSync('./data/tickets.json', JSON.stringify({ tickets_left: quota.cached_available_number }));
  });
