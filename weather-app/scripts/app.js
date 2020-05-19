const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const cardDts = document.querySelector('.details');

const updateUI = (data) => {
    // const cityDts = data.cityDts;
    // const weather = data.weather;
    // destructure object

    const {cityDts, weather} = data;

    console.log(cityDts, weather);

    cardDts.innerHTML = `
        <div class="text-muted text-uppercase text-center details">
            <h5 class="my-3">${cityDts.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
            </div>
        </div>
    `;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {
    const cityDts = await getCity(city);
    const weather = await getCurrent(cityDts.Key);

    return { cityDts, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
});