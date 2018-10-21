const navToogle = document.getElementById('nav-scroll');
const navBar = document.getElementsByClassName('navbar')[0];
const navLink = document.getElementsByClassName('nav-link');

window.addEventListener('scroll', () => {
    const currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100)
    if (currentScroll == 0) {
        navToogle.style.background = 'transparent';
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.color = "#fff";
        }
        navBar.style.padding = '40px 0';
    } else if (currentScroll > 0) {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.color = "#000";
        }
        navToogle.style.background = '#fff';
        navBar.style.padding = '15px 0';
    }
});


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

$(document).ready(function () {

    $('.carousel__row').slick({
        autoplay: true,
        autoplaySpeed: 4000,
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
        },]
    }),
        $('.clients__row').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: false,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 2,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
            }, {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },]
        }),
        $('.partners__carousel').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
    
            ]
    
        }),
        $('.post__carousel').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            responsive: [{
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
    
            ]
    
        });
       
});

window.sr = ScrollReveal();

sr.reveal('.showcase-left1', {
    duration: 1000,
    origin: 'left',

});
sr.reveal('.showcase-left2', {
    duration: 1500,
    origin: 'left',

});
sr.reveal('.showcase-left3', {
    duration: 2000,
    origin: 'left',

});
sr.reveal('.showcase-right1', {
    duration: 1000,
    origin: 'right',

});
sr.reveal('.showcase-right2', {
    duration: 1500,
    origin: 'right',
});
sr.reveal('.showcase-right3', {
    duration: 2000,
    origin: 'right',

});
sr.reveal('.showcase-bottom', {
    duration: 2000,
    distance: '50px',
    origin: 'bottom'
});
sr.reveal('.t1', {
    duration: 1000,
    origin: 'top'
});
sr.reveal('.t2', {
    duration: 2000,
    origin: 'top',


});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});