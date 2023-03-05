const searchInput = document.getElementById('search-input');
const submitBtn = document.getElementById('search-button');
const changeSearchEngineBtn = document.getElementById('change-search-engine-button');
const searchEngineLogo = document.getElementById('logo');

const searchEngineLogoPath = '../images/%name%-logo.png';

// Search engine data
const searchEngineList = ['duckduckgo', 'brave', 'google', 'bing', 'stackoverflow'];
let activeSearchEngineID = 0;
const getActiveSearchEngine = () => searchEngineList[activeSearchEngineID];
const links = {
	browsing: {
		duckduckgo: 'https://duckduckgo.com/?q=%query%&atb=v360-1&ia=about',
		google: 'https://www.google.com/search?q=%query%',
		bing: 'https://www.bing.com/search?q=%query%',
		brave: 'https://search.brave.com/search?q=%query%',
		stackoverflow: 'https://stackoverflow.com/search?q=%query%'
	}
}
const placeholders = {
	duckduckgo: 'Szukaj na DuckDuckGo...',
	google: 'Szukaj w Google...',
	bing: 'Szukaj w Bing...',
	brave: 'Szukaj w Brave...',
	stackoverflow: 'Szukaj na StackOverflow...',
}

// Initial setup
searchInput.placeholder = placeholders[getActiveSearchEngine()];
document.title = placeholders[getActiveSearchEngine()];
searchInput.focus();

// Search input change listener
let query = '';
searchInput.addEventListener('change', e => query = e.target.value);

// Submit button click listener
submitBtn.addEventListener('click', () => {
	if (query === '') return;
	window.open(links.browsing[getActiveSearchEngine()].replace('%query%', searchInput.value), '_blank');
});

// Key down listener
window.addEventListener('keydown', e => e.key === 'Enter' && submitBtn.click());

// Change search engine button click listener
changeSearchEngineBtn.addEventListener('click', () => {
	if (activeSearchEngineID === searchEngineList.length - 1)
		activeSearchEngineID = 0;
	else activeSearchEngineID++;

	searchInput.placeholder = placeholders[getActiveSearchEngine()];
	searchEngineLogo.src = searchEngineLogoPath.replace('%name%', getActiveSearchEngine());
	document.title = placeholders[getActiveSearchEngine()];
});