fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));