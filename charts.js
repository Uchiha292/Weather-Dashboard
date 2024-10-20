let barChartInstance = null;
let doughnutChartInstance = null;
let lineChartInstance = null;

function resetCharts() {
    if (barChartInstance) barChartInstance.destroy();
    if (doughnutChartInstance) doughnutChartInstance.destroy();
    if (lineChartInstance) lineChartInstance.destroy();
}

function updateCharts(data) {
    const barData = [];
    const doughnutData = { clear: 0, cloudy: 0, rainy: 0, thunderstorm: 0, snowy: 0 };
    const lineData = [];

    for (let i = 0; i < 5; i++) {
        const weatherCondition = data.list[i].weather[0].main.toLowerCase();
        const temp = data.list[i].main.temp;

        barData.push(temp);
        lineData.push(temp);

        if (weatherCondition === "clear") {
            doughnutData.clear++;
        } 
        else if (weatherCondition === "clouds") {
            doughnutData.cloudy++;
        } 
        else if (weatherCondition === "thunderstorm") {
            doughnutData.thunderstorm++;
        } 
        else if (weatherCondition === "rain") {
            doughnutData.rainy++;
        } 
        else if (weatherCondition === "snow") {
            doughnutData.snowy++;
        }
    }

    const barCtx = document.getElementById('barChart').getContext('2d');
    barChartInstance = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [{
                label: 'Temperature (°C)',
                data: barData,
                backgroundColor: 'lightblue',
                borderColor: 'blue',
                borderWidth: 1
            }]
        },
        options: {
            animation: {
                duration: 2000,
                easing: 'easeInOutBounce'
            }
        }
    });

    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    doughnutChartInstance = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Clear', 'Cloudy', 'Rainy', 'Thunderstorm', 'Snowy'],
            datasets: [{
                data: [doughnutData.clear, doughnutData.cloudy, doughnutData.rainy, doughnutData.thunderstorm, doughnutData.snowy],
                backgroundColor: ['yellow', 'gray', 'blue', 'purple', 'white']
            }]
        },
        options: {
            animation: {
                duration: 1500
            }
        }
    });

    const lineCtx = document.getElementById('lineChart').getContext('2d');
    lineChartInstance = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [{
                label: 'Temperature (°C)',
                data: lineData,
                fill: false,
                borderColor: 'blue',
                borderWidth: 2
            }]
        },
        options: {
            animation: {
                duration: 2500,
                easing: 'easeInOutCubic'
            }
        }
    });
}