class FetchData {
    constructor() {
        this.apiKey = '4e2b39896dcc3622534cc498191bdc35';


    }
    async fetchCurrent(country, city) {
        const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.apiKey}`);
        const resData = await getData.json();
        return {
            resData
        }
    }
    async fetchCall(country, city) {
        const getData = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${this.apiKey}`)
        const resData = await getData.json()
        return {
            resData
        }
    }
}

export const fetchForcast = new FetchData()