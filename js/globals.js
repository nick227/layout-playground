const activeFields = [];
let currentPlaceholderPosition;
let currentPlaceholderId;
let currentTooltip = null;
let currentSubTooltip = null;
let currentViewEdit = null;
let activeElement = null;
const localPlaceholderKey = 'placeholderPosition';
const localSearchTypeKey = 'searchType';
const localViewStatusKey = 'viewStatus';
const defaultPlaceholderPosition = 6;
const tools = ['padding', 'colors'/*, 'height', 'width', 'layout'*/];

const lang = {
	media: 'Search for media',
	fields: 'Start typing fields',
	tools: 'Talk to us... ',
	map: 'Looking for something?',
	view: 'How can we help?',
	broadcast: 'Find other broadcasters'
};
