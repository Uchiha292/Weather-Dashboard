$(document).ready(function() {
    window.searchCity = function() {
        const city = $('#search-bar').val().trim();
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a valid city name.');
        }
    };

    $('#search-bar').on('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCity();
        }
    });

    $('#search-button').on('click', function() {
        searchCity();
    });
});
