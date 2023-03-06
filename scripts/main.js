import searchEngineList from '../configs/searchEngines.json' assert {type: 'json'};

const searchInput = document.getElementById('search-input');
const submitBtn = document.getElementById('search-button');
const changeSearchEngineBtn = document.getElementById('change-search-engine-button');
const searchEngineLogo = document.getElementById('logo');

const searchEngineLogoPath = '../images/%name%-logo.png';

// Search engine data
let activeSearchEngineID = 0;
const getActiveSearchEngine = () => searchEngineList[activeSearchEngineID];

// Initial setup
const init = () => {
	searchInput.placeholder = getActiveSearchEngine().searchbar_placeholder;
	document.title = getActiveSearchEngine().searchbar_placeholder;
	searchInput.focus();
}

// Event listeners setup
const setupEventListeners = () => {
	// Search input change listener
	let query = '';
	searchInput.addEventListener('change', e => query = e.target.value);

	// Submit button click listener
	submitBtn.addEventListener('click', () => {
		if (query === '') return;
		window.open(getActiveSearchEngine().link_pattern.replace('%query%', searchInput.value));
	});

	// Key down listener
	window.addEventListener('keyup', e => e.key === 'Enter' && submitBtn.click());

	// Change search engine button click listener
	changeSearchEngineBtn.addEventListener('click', () => {
		if (activeSearchEngineID === searchEngineList.length - 1)
			activeSearchEngineID = 0;
		else activeSearchEngineID++;

		searchInput.placeholder = getActiveSearchEngine().searchbar_placeholder;
		searchEngineLogo.src = searchEngineLogoPath.replace('%name%', getActiveSearchEngine().id);
		document.title = getActiveSearchEngine().searchbar_placeholder;
	});
}

init();
setupEventListeners();