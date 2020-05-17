const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    const cityDts = await getCity(city);
    const weather = await getCurrent(cityDts.Key);

    return {
        cityDts: cityDts,
        weather: weather
    };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    const cityWeather = updateCity(city);
    console.log(cityWeather);
});