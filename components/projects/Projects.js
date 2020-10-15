// prettier-ignore
const myProjects = [
	{
		title: 'VR Video Saratov',
		url: 'https://videosaratov.netlify.app/',
		desc: 'Prerobená moja vôbec prvá web stránka pre virtuálnu realitu.',
		logo: require('@/assets/images/projects/vr-logo.png'),
		github: 'https://github.com/davidhavlin/videosaratov',
		color: {
			main: '#4a12be',
			second: '#e9093e',
			title: '#00f3ff',
		},
		stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
		images: [
			require('@/assets/images/projects/vr-bg.webp'),
			require('@/assets/images/projects/mobile-right.png'),
			require('@/assets/images/projects/desktop-left.webp'),
		],
		id: 0,
	},
	{
		title: 'David Havlín Website',
		url: 'https://davidhavlin.netlify.app/',
		desc: 'Moja osobná portfolio stránka ktorú som sa pokúsil spraviť trošku netradične.',
        logo: require('@/assets/images/projects/dh-logo.png'),
        github: 'https://github.com/davidhavlin/dhavlin.github.io',
		color: {
			main: '#4a12be',
			second: '#e9093e',
			title: '#00f3ff',
		},
		stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt'],
		images: [
			require('@/assets/images/projects/desktop-left.webp'),
			require('@/assets/images/projects/desktop-left.webp'),
			require('@/assets/images/projects/desktop-left.webp'),
		],
		id: 1,
	},
	{
		title: 'NETFLIX clone',
		url: 'https://davidhavlin.netlify.app/',
		desc: 'Coming soon',
        logo: require('@/assets/images/projects/nf-logo.png'),
        github: 'none',
		color: {
			main: '#e61e25',
			second: '#e9093e',
			title: '#00f3ff',
		},
		stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt'],
		images: [
			require('@/assets/images/projects/nf-desktop-left.webp'),
			require('@/assets/images/projects/nf-desktop-left.webp'),
			require('@/assets/images/projects/nf-desktop-left.webp'),
		],
		id: 2,
    },
]

export default myProjects
