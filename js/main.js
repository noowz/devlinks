const html = document.documentElement;

const img = document.querySelector('#profile img');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	img.setAttribute('src', '../img/avatar_lightTheme.png');
} else {
	img.setAttribute('src', '../img/avatar_darkTheme.png');
};

window.matchMedia('(prefers-color-scheme: light)').addListener(event => {
	const theme = event.matches ? 'light' : 'dark';

	if (theme === 'light') {
		img.setAttribute('src', '../img/avatar_lightTheme.png');
	} else {
		img.setAttribute('src', '../img/avatar_darkTheme.png');
	};
});

function switchTheme() {
	html.classList.toggle('lightTheme');

	if (html.classList.contains('lightTheme')) {
		img.setAttribute('src', '../img/avatar_lightTheme.png');
	} else {
		img.setAttribute('src', '../img/avatar_darkTheme.png');
	};
};

function share() {
	try {
		if (navigator.share) {
			navigator.share({
				title: 'Noowz | DevLinks',
				url: 'https://noowz-devlinks.vercel.app'
			});

			console.info('You have shared the link successfully!');
		} else {
			alert('Your browser does not support the Web Share API!');
		};
	} catch (error) {
		console.error(`An error occured while using the Web share API!\nError: ${error}`);
	};
};