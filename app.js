const topRegionsBtn = document.getElementById('link-regions');
const mainPage = document.getElementById('main-page');
const regionPage = document.querySelector('.regions');

const mainRegions = document.querySelector('.main-reg');
const regionMeniu = document.querySelector('.regions-menu');
const homeBtn = document.querySelector('.main-menu button');

function getRegionsHTML(region) {
  return ` 
   <div id=${region.id} class="card-regions">
  <h2>${region.name}</h2>
  <h3>${region.country}</h3>
  <p>${region.info}</p>
  <img class="img2" src=${region.img} alt=${region.alt} />
  <a href=${region.link}>Enjoy activities!</a>
</div>`;
}

function getRegionMeniuHTML(region) {
  return `
  <a href="#${region.id}"
  ><img src=${region.img1} alt=${region.alt} />${region.name}</a
>`;
}

function displayRegions(regions) {
  let regionsHTML = regions.map((region) => {
    return getRegionsHTML(region);
  });
  let regionsMeniuHTML = regions.map((region) => {
    return getRegionMeniuHTML(region);
  });
  regionMeniu.innerHTML = regionsMeniuHTML.join('');
  mainRegions.innerHTML = regionsHTML.join('');
}

topRegionsBtn.addEventListener('click', () => {
  mainPage.classList.add('invisible');
  regionPage.classList.add('visible');
  displayRegions(regions);
});

homeBtn.addEventListener('click', () => {
  mainPage.classList.add('visible');
  regionPage.classList.add('invisible');
});

console.log(cities.name);
