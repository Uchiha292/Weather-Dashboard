const apiKey = '762a7fe9250b4cbd017ba1ecd247e5af';
let weatherData = [];

function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    resetTable();

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            updateTable(data);
        },
        error: function() {
            displayError();
        }
    });
}

function resetTable() {
    $('#forecast-table tbody').empty();
    weatherData = [];
}

function updateTable(data) {
    for (let i = 0; i < data.list.length; i += 8) {
        const date = new Date(data.list[i].dt * 1000).toLocaleDateString();
        const temp = parseFloat(data.list[i].main.temp.toFixed(1));
        const weather = data.list[i].weather[0].description;

        weatherData.push(temp);

        $('#forecast-table tbody').append(`
            <tr>
                <td>${date}</td>
                <td>${temp} °C</td>
                <td>${weather}</td>
            </tr>
        `);
    }
}

function displayError() {
    alert('City not found. Please try again.');
}