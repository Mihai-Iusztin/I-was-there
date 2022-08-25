const topRegionsBtn = document.getElementById('link-regions');
const topCitiesBtn = document.getElementById('link-cities');
const topCountriesBtn = document.getElementById('link-countries');

const mainPage = document.getElementById('main-page');
const regionPage = document.querySelector('.regions');

const mainRegions = document.querySelector('.main-reg');
const regionMeniu = document.querySelector('.regions-menu');
const homeBtn = document.querySelector('.main-menu:first-child button');
const regionBtn = document.querySelector('.main-menu button:nth-child(2)');
const citiesBtn = document.querySelector('.main-menu button:nth-child(3)');
const countryBtn = document.querySelector('.main-menu button:nth-child(4)');

console.log(regionBtn);

function getRegionsHTML(place) {
  return ` 
   <div id=${place.id} class="card-regions">
  <h2>${place.name}</h2>
  <h3>${place.country}</h3>
  <p>${place.info}</p>
  <img class="img2" src=${place.img} alt=${place.alt} />
  <a href=${place.link}>Enjoy activities!</a>
</div>`;
}

function getRegionMeniuHTML(place) {
  return `
  <a href="#${place.id}"
  ><img src=${place.img1} alt=${place.alt} />${place.name}</a
>`;
}

function displayRegions(places) {
  let regionsHTML = places.map((place) => {
    return getRegionsHTML(place);
  });
  let regionsMeniuHTML = places.map((place) => {
    return getRegionMeniuHTML(place);
  });
  regionMeniu.innerHTML = regionsMeniuHTML.join('');
  mainRegions.innerHTML = regionsHTML.join('');
}

topRegionsBtn.addEventListener('click', () => {
  mainPage.classList.add('invisible');
  regionPage.classList.add('visible');
  displayRegions(regions);
});

topCitiesBtn.addEventListener('click', () => {
  mainPage.classList.add('invisible');
  regionPage.classList.add('visible');
  displayRegions(cities);
});
topCountriesBtn.addEventListener('click', () => {
  mainPage.classList.add('invisible');
  regionPage.classList.add('visible');
  displayRegions(countries);
});

homeBtn.addEventListener('click', () => {
  regionPage.classList.remove('visible');
  mainPage.classList.remove('invisible');
  mainPage.classList.add('main');
});

regionBtn.addEventListener('click', () => {
  regionPage.classList.remove('invisible');
  regionPage.classList.add('visible');
  mainPage.classList.add('invisible');
  displayRegions(regions);
});

citiesBtn.addEventListener('click', () => {
  regionPage.classList.remove('invisible');
  regionPage.classList.add('visible');
  mainPage.classList.add('invisible');
  displayRegions(cities);
});

countryBtn.addEventListener('click', () => {
  regionPage.classList.remove('invisible');
  regionPage.classList.add('visible');
  mainPage.classList.add('invisible');
  displayRegions(countries);
});
