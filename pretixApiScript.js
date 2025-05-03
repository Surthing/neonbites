const fs = require('fs');

fetch('https://pretix.eu/api/v1/organizers/neonbites/events/villa-flaire/quotas/?availability=true', {
  headers: {
    'Authorization': 'Token ii47f8zlmbtvf8lu5jodwgh0yxjpbgst8a9cuy5xmlg8kzc935q05q913x3jfo56'
  }
})
  .then(res => res.json())
  .then(data => {
    console.log(data);  // Add this
    const quota = data.results.find(q => q.name === 'General Admission');
    fs.writeFileSync('./data/tickets.json', JSON.stringify({ tickets_left: quota.cached_available_number }));
  });
