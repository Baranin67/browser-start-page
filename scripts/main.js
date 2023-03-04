const searchInput = document.getElementById('search-input');
const submitBtn = document.getElementById('search-button');
const changeSearchEngineBtn = document.getElementById('change-search-engine-button');
const searchEngineLogo = document.getElementById('logo');

const searchEngineList = ['duckduckgo', 'brave', 'google', 'bing', 'stackoverflow'];
let activeSearchEngine = 0;
const getActiveSearchEngine = () => searchEngineList[activeSearchEngine];

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

searchInput.placeholder = placeholders[getActiveSearchEngine()];

let query = '';
searchInput.addEventListener('change', e => {
	query = e.target.value;
});

submitBtn.addEventListener('click', () => {
	if (query === '') return;
	window.open(links.browsing[getActiveSearchEngine()].replace('%query%', query), '_blank');
});

changeSearchEngineBtn.addEventListener('click', () => {
	if (activeSearchEngine === searchEngineList.length) {
		activeSearchEngine = 0;
		return;
	}
	activeSearchEngine++;

	searchInput.placeholder = placeholders[getActiveSearchEngine()];
	searchEngineLogo.src = `../assets/images/${getActiveSearchEngine()}-logo.png`;
});