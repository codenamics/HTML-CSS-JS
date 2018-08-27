$(document).ready(function() {
    $('.your-class').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true

    });
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

    });
});

const $filters = $('#filter-list [data-target]'),
    $boxes = $('#portfolioItem [data-category]');

$filters.on('click', function(e) {
    e.preventDefault();
    const $this = $(this);
    let $filterColor = $this.attr('data-target');

    if ($filterColor == 'all') {
        $boxes.removeClass('is-animated')
            .fadeOut().promise().done(function() {
                $boxes.addClass('is-animated').fadeIn();
            });
    } else {
        $boxes.removeClass('is-animated')
            .fadeOut().promise().done(function() {
                $boxes.filter('[data-category = "' + $filterColor + '"]')
                    .addClass('is-animated').fadeIn();
            });
    }
});

const navToogle = document.getElementById('nav-scroll');
const navLink = document.getElementsByClassName('nav-link');

window.addEventListener('scroll', () => {
    const currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100)
    if (currentScroll == 0) {
        navToogle.style.background = 'transparent';
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.color = "#fff";
        }
    } else if (currentScroll > 0) {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].style.color = "#000";
        }
        navToogle.style.background = '#fff';
    }
});

const filter = document.getElementById('filter');
const filterCat = document.getElementById('filter-categories');

filter.addEventListener('click', () => {
    filterCat.classList.toggle('filter-active');
    filterCat.classList.toggle('filter-inactive');
})


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