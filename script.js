

const cityInput = document.querySelector(".city-input");
const suggestionsDiv = document.getElementById("suggestions");

// List of city names (you can expand this list)
const cityNames = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Patna",
    "Bhopal",
    "Surat",
    "Visakhapatnam",
    "Agra",
    "Varanasi",
    "Thane",
    "Bhubaneswar",
    "Amritsar",
    "Raipur",
    "Coimbatore",
    "Kochi",
    "Ludhiana",
    "Vadodara",
    "Nashik",
    "Madurai",
    "Allahabad",
    "Ranchi",
    "Srinagar",
    "Chandigarh",
    "Guwahati",
    "Shimla",
    "Jammu",
    "Dehradun",
    "Gangtok",
    "Agartala",
    "Itanagar",
    "Imphal",
    "Kohima",
    "Bengaluru",
    "Thiruvananthapuram",
    "Dispur",
    "Panaji",
    "Shillong",
    "Baramulla",
    "Leh",
    "Puducherry",
    "Kavaratti",
    "Rajkot",
    "Jodhpur",
    "Kota",
    "Salem",
    "Tiruchirappalli",
    "Gorakhpur",
    "Warangal",
    "Hubli-Dharwad",
    "Dhanbad",
    "Amravati",
    "Bilaspur",
    "Jamshedpur",
    "Ujjain",
    "Gulbarga",
    "Rourkela",
    "Aligarh",
    "Jalandhar",
    "Bokaro Steel City",
    "Gopalpur",
    "Moradabad",
    "Mathura",
    "Noida",
    "Ajmer",
    "Siliguri",
    "Udaipur",
    "Belgaum",
    "Nellore",
    "Tirunelveli",
    "Malegaon",
    "Guntur",
    "Davangere",
    "Kollam",
    "Akola",
    "Udupi",
    "Dharwad",
    "Bongaigaon",
    "Bhagalpur",
    "Gaya",
    "Haldia",
    "Bhilai",
    "Rohtak",
    "Korba",
    "Bilaspur",
    "Bharatpur",
    "Hapur",
    "Karaikudi",
    "Patiala",
    "Bhavnagar",
    "Ambala",
    "Navi Mumbai",
    "Aurangabad",
    "Ratnagiri",
    "Bareilly",
    "Bhiwandi",
    "Trichy",
    "Nizamabad",
    "Parbhani",
    "Bijapur",
    "Kakinada",
    "Darbhanga",
    "Nalgonda",
    "Panipat",
    "Firozabad",
    "Kurnool",
    "Rajahmundry",
    "Vijayawada",
    "Tirupati",
    "Guntakal",
    "Nanded",
    "Karimnagar",
    "Srikakulam",
    "Bhuj",
    "Nadiad",
    "Bardhaman",
    "Bettiah",
    "Saharsa",
    "Dehri",
    "Motihari",
    "Dumka",
    "Hazaribagh",
    "Ramgarh",
    "Sahibganj",
    "Jamalpur",
    "Buxar",
    "Aurangabad",
    "Sultanpur",
    "Baran",
    "Dholpur",
    "Pali",
    "Balotra",
    "Sujangarh",
    "Gangapur",
    "Lachhmangarh",
    "Phalodi",
    "Sardarshahar",
    "Rawatsar",
    "Sirohi",
    "Sumerpur",
    "Bhinmal",
    "Kota",
    "Jhalawar",
    "Khetri",
    "Fatehpur",
    "Deoria",
    "Azamgarh",
    "Mau",
    "Farrukhabad",
    "Firozabad",
    "Etawah",
    "Rae Bareli",
    "Unnao",
    "Sitapur",
    "Barabanki",
    "Bahraich",
    "Basti",
    "Faizabad",
    "Sultanpur",
    "Ambedkar Nagar",
    "Shravasti",
    "Gonda",
    "Balrampur",
    "Kaiserganj",
    "Chandauli",
    "Mirzapur",
    "Bhadohi",
    "Sonbhadra",
    "Jaunpur",
    "Ghazipur",
    "Mau",
    "Ballia",
    "Pratapgarh",
    "Allahabad",
    "Bara Banki",
    "Hardoi",
    "Agra",
    "Mathura",
    "Firozabad",
    "Mainpuri",
    "Etah",
    "Hathras",
    "Kasganj",
    "Budaun",
    "Bareilly",
    "Pilibhit",
    "Shahjahanpur",
    "Lakhimpur",
    "Sitapur",
    "Hardoi",
    "Unnao",
    "Lucknow",
    "Rae Bareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Firozabad",
    "Mainpuri",
    "Etah",
    "Hathras",
    "Kasganj",
    "Budaun",
    "Bareilly",
    "Pilibhit",
    "Shahjahanpur",
    "Lakhimpur",
    "Sitapur",
    "Hardoi",
    "Unnao",
    "Lucknow",
    "Rae Bareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "jabalpur",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",
    "Pratapgarh",
    "Kaushambi",
    "Fatehpur",
    "Allahabad",
    "Farrukhabad",
    "Kannauj",
    "Etawah",
    "Auraiya",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Jalaun",
    "Jhansi",
    "Lalitpur",
    "Hamirpur",
    "Mahoba",
    "Banda",
    "Chitrakoot",
    "Raebareli",

   
];

// Function to display city name suggestions
function displaySuggestions(suggestions) {
    suggestionsDiv.innerHTML = "";
    const inputRect = cityInput.getBoundingClientRect(); // Get input field's position and dimensions
    suggestionsDiv.style.width = inputRect.width + "px"; // Set suggestion box width to match input field
    suggestionsDiv.style.left = inputRect.left + "px"; // Position it at the left edge of the input field
    suggestionsDiv.style.top = inputRect.bottom + "px"; // Position it just below the input field
    
    suggestions.forEach((suggestion) => {
        const suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion");
        suggestionElement.textContent = suggestion;
        suggestionElement.addEventListener("click", () => {
            cityInput.value = suggestion;
            suggestionsDiv.innerHTML = ""; // Clear suggestions when a suggestion is clicked
        });
        suggestionsDiv.appendChild(suggestionElement);
    });
    suggestionsDiv.style.display = suggestions.length > 0 ? "block" : "none";
}

// ... (rest of your code)

// Event listener for input field changes
cityInput.addEventListener("input", () => {
    const inputText = cityInput.value.toLowerCase();
    const matchingCities = cityNames.filter((city) =>
        city.toLowerCase().includes(inputText)
    );
    displaySuggestions(matchingCities);
});

// Close the suggestions when clicking outside the input field
document.addEventListener("click", (event) => {
    if (event.target !== cityInput) {
        suggestionsDiv.style.display = "none";
    }
});













const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const API_KEY = "187daa2949da824bc9dc23fc0e7449e6"; // API key for OpenWeatherMap API

const createWeatherCard = (cityName, weatherItem, index) => {
    if(index === 0) { // HTML for the main weather card
        return `<div class="details">
                    <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>${weatherItem.weather[0].description}</h6>
                </div>`;
    } else { // HTML for the other five day forecast card
        return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </li>`;
    }
}

const getWeatherDetails = (cityName, latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
        // Filter the forecasts to get only one forecast per day
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if (!uniqueForecastDays.includes(forecastDate)) {
                return uniqueForecastDays.push(forecastDate);
            }
        });

        // Clearing previous weather data
        cityInput.value = "";
        currentWeatherDiv.innerHTML = "";
        weatherCardsDiv.innerHTML = "";

        // Creating weather cards and adding them to the DOM
        fiveDaysForecast.forEach((weatherItem, index) => {
            const html = createWeatherCard(cityName, weatherItem, index);
            if (index === 0) {
                currentWeatherDiv.insertAdjacentHTML("beforeend", html);
            } else {
                weatherCardsDiv.insertAdjacentHTML("beforeend", html);
            }
        });        
    }).catch(() => {
        alert("An error occurred while fetching the weather forecast!");
    });
}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    
    // Validate city name
    if (cityName === "") {
        alert("Please enter a city name.");
        return;
    }

    // Check if the city name is too short
    if (cityName.length < 3) {
        alert("Please enter a valid city name.");
        return;
    }
    
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    
    // Get entered city coordinates (latitude, longitude, and name) from the API response
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                alert(`City not found. Please check the spelling and try again.`);
            } else {
                const { lat, lon, name } = data[0];
                getWeatherDetails(name, lat, lon);
            }
        })
        .catch(() => {
            alert("An error occurred while fetching the coordinates!");
        });
}

const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords; // Get coordinates of user location
            // Get city name from coordinates using reverse geocoding API
            const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
            fetch(API_URL).then(response => response.json()).then(data => {
                const { name } = data[0];
                getWeatherDetails(name, latitude, longitude);
            }).catch(() => {
                alert("An error occurred while fetching the city name!");
            });
        },
        error => { // Show alert if user denied the location permission
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again.");
            } else {
                alert("Geolocation request error. Please reset location permission.");
            }
        });
}



// Function to display error message
function displayErrorMessage(message) {
    const errorDiv = document.querySelector(".error-message");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

// Function to clear error message
function clearErrorMessage() {
    const errorDiv = document.querySelector(".error-message");
    errorDiv.style.display = "none";
    errorDiv.textContent = "";
}

// Function to update weather data based on selected unit
async function updateWeatherData() {
    const cityName = cityInput.value.trim();
    if (cityName === "") return;

    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${selectedUnit}&appid=${API_KEY}`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("City not found. Please check the spelling and try again.");
        }

        const data = await response.json();

        if (!data || data.list.length === 0) {
            throw new Error("City not found. Please check the spelling and try again.");
        }

        const { name } = data.city;
        const fiveDaysForecast = data.list.slice(0, 5);

        // Clear previous error message
        clearErrorMessage();

        // Clear previous weather data
        currentWeatherDiv.innerHTML = "";
        weatherCardsDiv.innerHTML = "";

        // Create and display weather cards
        fiveDaysForecast.forEach((weatherItem, index) => {
            const html = createWeatherCard(name, weatherItem, index, selectedUnit);
            if (index === 0) {
                currentWeatherDiv.insertAdjacentHTML("beforeend", html);
            } else {
                weatherCardsDiv.insertAdjacentHTML("beforeend", html);
            }
        });
    } catch (error) {
        // Display the error message to the user
        displayErrorMessage(error.message);
    }
}

// Event listener for unit toggle change
const unitToggle = document.querySelectorAll('input[name="unit"]');
unitToggle.forEach((unit) => {
    unit.addEventListener("change", updateWeatherData);
});

// Initial fetch when the page loads
updateWeatherData();


const weatherQuotes = [
    "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather. - John Ruskin",
    "To appreciate the beauty of a snowflake, it is necessary to stand out in the cold. - Aristotle",
    "The best thing one can do when it's raining is to let it rain. - Henry Wadsworth Longfellow",
    "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life. - John Updike",
    "Bad weather always looks worse through a window. - Tom Lehrer",
    "Wherever you go, no matter what the weather, always bring your own sunshine. - Anthony J. D'Angelo",
    "A change in the weather is sufficient to recreate the world and ourselves. - Marcel Proust",
    "Winter is not a season, it's a celebration. - Anamika Mishra",
];
function displayRandomWeatherQuote() {
    const quoteContainer = document.querySelector(".quote-container");
    const randomIndex = Math.floor(Math.random() * weatherQuotes.length);
    const randomQuote = weatherQuotes[randomIndex];

    // Display the random quote in the HTML
    quoteContainer.textContent = randomQuote;
}

// Call the function to display a random weather quote when the page loads
displayRandomWeatherQuote();






locationButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());


