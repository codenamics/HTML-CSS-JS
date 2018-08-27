
var ddData = [
    {


        value: 1,
        selected: true,
        description: "6876 76** **** 0789",
        imageSrc: "./img/CardSmall.png"
    },
    {

        value: 2,
        description: "6876 76** **** 0789",
        imageSrc: "./img/CardSmall.png"

    },
    {

        value: 3,
        description: "6876 76** **** 0789",
        imageSrc: "./img/CardSmall.png"

    },
    {

        value: 4,
        description: "6876 76** **** 0789",
        imageSrc: "./img/CardSmall.png"

    },
    {

        value: 5,
        description: "6876 76** **** 0789",
        imageSrc: "./img/CardSmall.png"

    }
];

$('#myDropdown').ddslick({
    data: ddData,
    width: 300,
    selectText: "Select your preferred social network",
    imagePosition: "left",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});




var ctx = document.getElementById('chart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(1000, 1000, 1000, 0);
gradientStroke.addColorStop(1, "#922c88");
gradientStroke.addColorStop(0.25, "#922c88");
gradientStroke.addColorStop(0.5, "#922c88");
gradientStroke.addColorStop(0, "#922c88");
var data = {
    legend: false,
    labels: ["Mon", "Tue", "Wed", "Thu", "Friday", "Sat", "Sun", "Mon"],
    datasets: [{
        fill: false,
        backgroundColor: gradientStroke,
        borderColor: gradientStroke,
        borderWidth: 4,
        data: [3800, 2000, 7000, 5000, 6000, 4000, 7000, 4000],
        pointBorderWidth: 9,
        pointRadius: 9,
        pointBorderColor: 'transparent',
        pointHoverRadius: 8,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#922c88',
        pointBackgroundColor: 'transparent'


    }]
};
var options = {
    hover: {
        mode: 'index',
        intersect: false
    },
    tooltips: {
        backgroundColor: '#FFF',
        bodyFontColor: '#393f5b',
        bodyFontSize: 20,
        displayColors: false,
        bodySpacing: 10,
        intersect: false,
        bodyFontStyle: 'bold',
        xPadding: 15,
        yPadding: 15,
        mode: 'index',
        callbacks: {
            title: function () { }
        }
    },
    legend: {
        display: false
    },
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "#6e6e6e26",
                padding: 0,
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 8000,
                stepSize: 2000,
                display: true
            }
        }],
        xAxes: [{
            gridLines: {
                display: false,
                color: "#6e6e6e26",

            },
            ticks: {
                fontSize: 14,
                fontColor: '#afb6d4',
            }
        }]
    }
};

let draw = Chart.controllers.line.prototype.draw;
Chart.controllers.line.prototype.draw = function () {
    draw.apply(this, arguments);
    let ctx = this.chart.chart.ctx;
    let _stroke = ctx.stroke;
    ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = '#4b4b4b8e';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 2;
        _stroke.apply(this, arguments);
        ctx.restore();
    }
};
Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function (ease) {
        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            var activePoint = this.chart.tooltip._active[0],
                ctx = this.chart.ctx,
                x = activePoint.tooltipPosition().x,
                topY = this.chart.scales['y-axis-0'].top,
                bottomY = this.chart.scales['y-axis-0'].bottom;

            // draw line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#6e6e6e26';
            ctx.shadowBlur = 1;
            ctx.stroke();
            ctx.restore();
        }
        Chart.controllers.line.prototype.draw.call(this, ease);
    }
});
var chart = new Chart(ctx, {
    type: 'LineWithLine',
    data: data,
    options: options
});

var config = {
    type: 'doughnut',
    data: {

        datasets: [{
            data: [
                200,
                200,
                300,
                400
            ],
            backgroundColor: [
                "#922c88",
                "#7ed321",
                "#7abec5",
                "#ff3270"

            ],
        }]

    },
    options: {
        responsive: true,
        cutoutPercentage: 95

    }
};


window.onload = function () {
    var ctx = document.getElementById("donut").getContext("2d");
    window.myPie = new Chart(ctx, config);
};