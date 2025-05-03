const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://pretix.eu/api/v1/organizers/neonbites/events/villa-flaire/quotas/', {
  headers: {
    'Authorization': 'ii47f8zlmbtvf8lu5jodwgh0yxjpbgst8a9cuy5xmlg8kzc935q05q913x3jfo56'
  }
})
  .then(res => res.json())
  .then(data => {
    const quota = data.results.find(q => q.name === 'General Admission');
    fs.writeFileSync('./data/tickets.json', JSON.stringify({ tickets_left: quota.cached_available_number }));
  });
