import searchEngineList from '../configs/searchEngines.json' assert {type: 'json'};

const searchInput = document.querySelector('#search-input');
const submitBtn = document.querySelector('#search-button');
const changeSearchEngineBtn = document.querySelector('#change-search-engine-button');
const searchEngineLogo = document.querySelector('#logo');

const searchEngineLogoPath = '../images/%name%-logo.png';
let activeSearchEngineID = 0;
const getActiveSearchEngineID = () => { return parseInt(window.localStorage.getItem('active-search-engine') || '0'); }
const updateSearchEngineLocalStorage = () => { return window.localStorage.setItem('active-search-engine', activeSearchEngineID.toString()); }
const getActiveSearchEngine = () => { return searchEngineList[getActiveSearchEngineID()]; }

const updateSearchBar = () => {
	searchInput.placeholder = getActiveSearchEngine().searchbar_placeholder;
	searchEngineLogo.src = searchEngineLogoPath.replace('%name%', getActiveSearchEngine().id);
	document.title = getActiveSearchEngine().searchbar_placeholder;
}

// Initial setup
const init = () => {
	activeSearchEngineID = getActiveSearchEngineID();
	updateSearchBar();
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

		updateSearchEngineLocalStorage();
		updateSearchBar();
	});
}

init();
setupEventListeners();