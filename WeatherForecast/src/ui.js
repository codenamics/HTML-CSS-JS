 class UI {
     showCurrent(weather) {
         //Future feature to change background according to description
         //  let rain = weather.weather[0].main
         //  if (rain === "Haze") {
         //      document.getElementById('wrapper').style.background = "url('https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?cs=srgb&dl=black-and-white-clear-cool-459451.jpg&fm=jpg')";
         //  }
         let output = ''
         output += `

         <div class="weather__current-box">
         <h5 class="city">${weather.name}</h5>
         <span class="country">${weather.sys.country}</span>
         <span class="desc">${weather.weather[0].description}</span>
         <ul>
             <li><span>humidity:</span><span>${weather.main.humidity}%</span></li>
             <li><span>pressure:</span><span>${weather.main.pressure}</span></li>
             <li><span>temperature:</span><span>${weather.main.temp}</span></li>
             <li><span>max:</span><span>${weather.main.temp_max}</span></li>
             <li><span>min:</span><span>${weather.main.temp_min}</span></li>

         </ul>
     </div>
              
              `
         document.getElementById('current-weather').innerHTML = output
     }
     showWeather(weather) {

         let output = ''

         let forcasts = weather.list.slice(1, 5)
         forcasts.forEach(forcast => {
             output += `
             <div class="weather__forcast-box">
             <span><strong>${forcast.dt_txt}</strong></span>
             <ul>
             <li><span>description:</span><span>${forcast.weather[0].description}</span></li>
                 <li><span>humidity:</span><span>${forcast.main.humidity}</span></li>
                 <li><span>presure:</span><span>${forcast.main.pressure}</span></li>
                 <li><span>temp:</span><span>${forcast.main.temp}</span></li>
             </ul>
         </div> `
         })
         document.getElementById('forcast').innerHTML = output;
         $('.weather__forcast')[0].slick.refresh();
     }
     displayModal() {
         document.getElementById('form').style.display = 'flex'
     }
     hideModal() {
         document.getElementById('form').style.display = 'none'
     }
     alert() {
         document.getElementById('city').style.borderColor = 'red'
         document.getElementById('country').style.borderColor = 'red'
     }
     hideAlert() {
         document.getElementById('city').style.borderColor = '#F3F3F3'
         document.getElementById('country').style.borderColor = '#F3F3F3'

     }
     clearFields() {
         document.getElementById('city').value = ''
         document.getElementById('country').value = ''
     }

 }

 export const ui = new UI()