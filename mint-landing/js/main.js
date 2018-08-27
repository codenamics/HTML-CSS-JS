$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' +
                this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(document).ready(function() {
    $('.persons').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,

            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }, ]
    });
    $('.say__row').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });
});

var ctx = document.getElementById('chart').getContext("2d");
var gradientStroke = ctx.createLinearGradient(1000, 1000, 1000, 0);
gradientStroke.addColorStop(1, "rgb(33, 240, 43)");
gradientStroke.addColorStop(0.25, "rgb(21, 168, 226)");
gradientStroke.addColorStop(0.5, "rgb(21, 168, 226)");
gradientStroke.addColorStop(0, "rgb(14, 144, 177)");
var data = {
    legend: false,
    labels: ["02 FEB", "03 FEB", "04 FEB", "05 FEB", "06 FEB", "07 FEB", "08 FEB", "09 FEB", "10 FEB", "11 FEB", "12 FEB"],
    datasets: [{
        fill: false,
        backgroundColor: gradientStroke,
        borderColor: gradientStroke,
        borderWidth: 4,
        data: [9412, 17000, 18000, 11000, 9254, 7200, 11600, 15644, 11222, 13333, 12545],
        pointBorderWidth: 9,
        pointRadius: 9,
        pointBorderColor: 'transparent',
        pointHoverRadius: 8,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: '#27f327',
        pointHoverBorderColor: 'white',
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
            title: function() {}
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
                max: 20000,
                stepSize: 5000,
                display: false
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
Chart.controllers.line.prototype.draw = function() {
    draw.apply(this, arguments);
    let ctx = this.chart.chart.ctx;
    let _stroke = ctx.stroke;
    ctx.stroke = function() {
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
    draw: function(ease) {
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