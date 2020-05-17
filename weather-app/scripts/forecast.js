const key = 'iTvjoPVLx6fo6KDP6xTJWSMDMURB0rME';
const password = "azerty54";
const mail = 'mowglysofiann@gmail.com';

const getCurrent = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const q = `${id}?apikey=${key}`;

    const response = await fetch(base + q);
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const q = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + q);
    const data = await response.json();

    return data[0];
}
