function switchTheme() {
	const html = document.documentElement;

	html.classList.toggle('lightTheme');
};

function share() {
	try {
		if (navigator.share) {
			navigator.share({
				title: 'Noowz | DevLinks',
				url: 'https://noowz-devlinks.pages.dev'
			});

			console.info('You have shared the link successfully!');
		} else {
			alert('Your browser does not support the Web Share API!');
		};
	} catch (error) {
		console.error(`An error occured while using the Web share API!\nError: ${error}`);
	};
};