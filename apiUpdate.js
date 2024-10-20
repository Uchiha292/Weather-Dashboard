const apiKey = '762a7fe9250b4cbd017ba1ecd247e5af';

function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            resetWeatherWidget();
            resetCharts();

            updateWeatherWidget(data);
            updateCharts(data);
        },
        error: function() {
            displayError("City not found. Please try another city.");
        }
    });
}

function displayError(message) {
    $('#city-name').text("Error!");
    $('#weather-description').text(message);
    $('#temperature').text('Temperature: N/A');

    resetCharts();

    $('#weather-widget').css('background-color', 'lightgray');
}

function resetWeatherWidget() {
    $('#city-name').text('City Name');
    $('#weather-description').text('Weather Description');
    $('#temperature').text('Temperature: --°C');
    $('#weather-widget').css('background-color', 'lightgray');
}

function updateWeatherWidget(data) {
    const cityName = $('#city-name');
    const weatherDescription = $('#weather-description');
    const temperature = $('#temperature');

    cityName.text(data.city.name);
    weatherDescription.text(data.list[0].weather[0].description);
    temperature.text(`Temperature: ${data.list[0].main.temp}°C`);

    const weatherWidget = $('#weather-widget');
    const condition = data.list[0].weather[0].main.toLowerCase();

    if (condition.includes("cloud")) {
        weatherWidget.css('background-color', 'gray');
    } else if (condition.includes("sun")) {
        weatherWidget.css('background-color', 'yellow');
    } else if (condition.includes("rain")) {
        weatherWidget.css('background-color', 'lightblue');
    } else {
        weatherWidget.css('background-color', 'lightgray');
    }
}