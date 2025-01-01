// API URL for exchange rates
const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';

// Fetch exchange rates and populate dropdowns
async function loadCurrencies() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Get currency dropdown elements
  const fromCurrency = document.getElementById('from-currency');
  const toCurrency = document.getElementById('to-currency');

  // Add currency options to dropdowns
  for (let currency in data.rates) {
    const option = `<option value="${currency}">${currency}</option>`;  //Template literal you can insert variables or expressions directly into a string using ${}
    fromCurrency.innerHTML += option;
    toCurrency.innerHTML += option;
  }
}  

// Convert the entered amount
async function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from-currency').value;
  const to = document.getElementById('to-currency').value;

  if (!amount) {
    alert('Please enter an amount');
    return;
  }

  const response = await fetch(apiUrl);
  const data = await response.json();

  // Calculate the converted amount
  const rateFrom = data.rates[from];
  const rateTo = data.rates[to];
  const result = (amount / rateFrom) * rateTo;

  // Display the result
  document.getElementById('result').innerText = 
    `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}

// Load currencies when the page loads
loadCurrencies();