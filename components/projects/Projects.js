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
            titles: '#0089ff',
            url: '#03e8fc',
		},
        stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
        bg: require('@/assets/images/projects/vr-bg.webp'),
		images: [
			require('@/assets/images/projects/vr03.webp'),
			require('@/assets/images/projects/vr02.webp'),
			require('@/assets/images/projects/vr-bg.webp'),
		],
		id: 0,
	},
	{
		title: 'David Havlín Website',
		url: 'https://davidhavlin.com/',
		desc: 'Moja osobná portfolio stránka ktorú som sa pokúsil spraviť trošku netradične.',
        logo: require('@/assets/images/projects/dh-logo.png'),
        github: 'https://github.com/davidhavlin/dhavlin.github.io',
		color: {
			main: '#4a12be',
			second: '#e9093e',
            title: '#00f3ff',
            titles: '#0089ff',
            url: '#81ffff',
		},
        stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt'],
        bg: require('@/assets/images/projects/desktop-left.webp'),
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
            title: '#fff',
            titles: '#fff',
            url: '#ff0841',
		},
        stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt'],
        bg: require('@/assets/images/projects/nf-desktop-left.webp'),
		images: [
			require('@/assets/images/projects/nf-desktop-left.webp'),
			require('@/assets/images/projects/nf-desktop-left.webp'),
			require('@/assets/images/projects/nf-desktop-left.webp'),
		],
		id: 2,
    },
]

export default myProjects
