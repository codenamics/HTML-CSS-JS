import { fetchForcast } from './fetch'
import { ui } from './ui'

const btn = document.getElementById('btn')
const btn_modal = document.getElementById('btn-modal')
const btn_cancel = document.getElementById('btn-cancel')

btn.addEventListener('click', () => {

    let city = document.getElementById('city').value
    let country = document.getElementById('country').value

    if (country !== '' && city !== '') {
        fetchForcast.fetchCall(country, city)
            .then(res => ui.showWeather(res.resData))
            .catch(err => console.log(err));
        fetchForcast.fetchCurrent(country, city)
            .then(res => ui.showCurrent(res.resData))
            .catch(err => console.log(err));

        ui.hideModal()
        ui.hideAlert()
        ui.clearFields()

    } else {
        ui.alert();
    }

})

btn_modal.addEventListener('click', () => {
    ui.displayModal();
})

btn_cancel.addEventListener('click', () => {
    ui.hideModal()
    ui.hideAlert()
    ui.clearFields()
})

$(window).on('load', function() {
    window.slickSettings = {
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,

        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    };
    $('.weather__forcast').slick(window.slickSettings);
})