/*
  "provider": "https://www.exchangerate-api.com",
  "WARNING_UPGRADE_TO_V6": "https://www.exchangerate-api.com/docs/free",
  "terms": "https://www.exchangerate-api.com/terms",
  "base": "USD",
  "date": "2025-01-02",
  "time_last_updated": 1735776002,
  "rates": {
    "USD": 1,
    "AED": 3.67,
    "AFN": 70.48,
    "ALL": 93.79,
    "AMD": 396.72,
    "ANG": 1.79,
    "AOA": 918.26,
    "ARS": 1032.5,
    "AUD": 1.61,
    "AWG": 1.79,
    "AZN": 1.7,
    "BAM": 1.89,
    "BBD": 2,
    "BDT": 119.54,
    "BGN": 1.89,
    "BHD": 0.376,
    "BIF": 2948.23,
    "BMD": 1,
    "BND": 1.37,
    "BOB": 6.92,
    "BRL": 6.18,
    "BSD": 1,
    "BTN": 85.71,
    "BWP": 13.99,
    "BYN": 3.33,
    "BZD": 2,
    "CAD": 1.44,
    "CDF": 2845.87,
    "CHF": 0.907,
    "CLP": 993.89,
    "CNY": 7.32,
    "COP": 4406.67,
    "CRC": 508.83,
    "CUP": 24,
    "CVE": 106.39,
    "CZK": 24.32,
    "DJF": 177.72,
    "DKK": 7.2,
    "DOP": 61.12,
    "DZD": 135.74,
    "EGP": 50.84,
    "ERN": 15,
    "ETB": 126.56,
    "EUR": 0.965,
    "FJD": 2.32,
    "FKP": 0.799,
    "FOK": 7.2,
    "GBP": 0.799,
    "GEL": 2.81,
    "GGP": 0.799,
    "GHS": 14.89,
    "GIP": 0.799,
    "GMD": 72.59,
    "GNF": 8626.94,
    "GTQ": 7.71,
    "GYD": 209.24,
    "HKD": 7.77,
    "HNL": 25.42,
    "HRK": 7.27,
    "HTG": 130.66,
    "HUF": 396.6,
    "IDR": 16260.64,
    "ILS": 3.64,
    "IMP": 0.799,
    "INR": 85.71,
    "IQD": 1311.03,
    "IRR": 41962.07,
    "ISK": 138.49,
    "JEP": 0.799,
    "JMD": 156.13,
    "JOD": 0.709,
    "JPY": 157.23,
    "KES": 129.34,
    "KGS": 86.98,
    "KHR": 4037.62,
    "KID": 1.61,
    "KMF": 474.69,
    "KRW": 1475.88,
    "KWD": 0.308,
    "KYD": 0.833,
    "KZT": 524.95,
    "LAK": 21879.88,
    "LBP": 89500,
    "LKR": 292.92,
    "LRD": 184.01,
    "LSL": 18.83,
    "LYD": 4.92,
    "MAD": 10.11,
    "MDL": 18.42,
    "MGA": 4706.5,
    "MKD": 59.16,
    "MMK": 2099.39,
    "MNT": 3434.17,
    "MOP": 8,
    "MRU": 39.89,
    "MUR": 46.97,
    "MVR": 15.46,
    "MWK": 1741.85,
    "MXN": 20.81,
    "MYR": 4.47,
    "MZN": 63.98,
    "NAD": 18.83,
    "NGN": 1533.91,
    "NIO": 36.81,
    "NOK": 11.38,
    "NPR": 137.14,
    "NZD": 1.79,
    "OMR": 0.384,
    "PAB": 1,
    "PEN": 3.76,
    "PGK": 4.03,
    "PHP": 58.16,
    "PKR": 278.29,
    "PLN": 4.13,
    "PYG": 7840.55,
    "QAR": 3.64,
    "RON": 4.79,
    "RSD": 112.61,
    "RUB": 112.29,
    "RWF": 1404.65,
    "SAR": 3.75,
    "SBD": 8.53,
    "SCR": 14.28,
    "SDG": 544.81,
    "SEK": 11.06,
    "SGD": 1.37,
    "SHP": 0.799,
    "SLE": 22.92,
    "SLL": 22918.83,
    "SOS": 571.82,
    "SRD": 35.6,
    "SSP": 3895.5,
    "STN": 23.64,
    "SYP": 12978.75,
    "SZL": 18.83,
    "THB": 34.32,
    "TJS": 10.92,
    "TMT": 3.5,
    "TND": 3.19,
    "TOP": 2.39,
    "TRY": 35.36,
    "TTD": 6.79,
    "TVD": 1.61,
    "TWD": 32.83,
    "TZS": 2417.05,
    "UAH": 42.04,
    "UGX": 3688.19,
    "UYU": 43.72,
    "UZS": 12884.32,
    "VES": 52.03,
    "VND": 25475.41,
    "VUV": 118.74,
    "WST": 2.81,
    "XAF": 632.92,
    "XCD": 2.7,
    "XDR": 0.765,
    "XOF": 632.92,
    "XPF": 115.14,
    "YER": 249.55,
    "ZAR": 18.84,
    "ZMW": 27.93,
    "ZWL": 25.8
  }
}*/


const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';


async function loadCurrencies() {
  const response = await fetch(apiUrl);
  console.log(response.json())
  const data = await response.json();


  
  const fromCurrency = document.getElementById('from-currency');
  const toCurrency = document.getElementById('to-currency');

  for (let currency in data.rates) {
    const option = `<option value="${currency}">${currency}</option>`;  //Template literal you can insert variables or expressions directly into a string using ${}
    fromCurrency.innerHTML += option;
    toCurrency.innerHTML += option;
  }
}  


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

  
  const rateFrom = data.rates[from];
  const rateTo = data.rates[to];
  const result = (amount / rateFrom) * rateTo;


  document.getElementById('result').innerText = 
    `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}

loadCurrencies();


function prime(a) {
  for (let i = 0; i > 5; i++) {
    if (i % 2 != 0) {
      console.log('not prime')
    }
    else{
      console.log('prime')
    }
  }
}

