const myProjects = [
	{
		title: 'VR Video Saratov',
		url: 'https://videosaratov.netlify.app/',
		desc: 'Prerobena moja prva web stranka a viac detailov k nej.',
		logo: require('@/assets/images/projects/vr-logo.png'),
		github: '',
		color: {
			main: '#4a12be',
			second: '#e9093e',
			title: '#00f3ff',
		},
		stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
		images: [
			require('@/assets/images/projects/vr-bg.png'),
			require('@/assets/images/projects/mobile-right.png'),
			require('@/assets/images/projects/desktop-left.jpg'),
		],
		id: 0,
	},
	{
		title: 'David Havlín Website',
		url: 'https://davidhavlin.netlify.app/',
		desc: 'skuska',
		logo: require('@/assets/images/projects/dh-logo.png'),
		color: {
			main: '#4a12be',
			second: '#e9093e',
			title: '#00f3ff',
		},
		stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt'],
		images: [
			require('@/assets/images/projects/desktop-left.jpg'),
			require('@/assets/images/projects/desktop-left.jpg'),
			require('@/assets/images/projects/desktop-left.jpg'),
		],
		id: 1,
	},
	{
		title: 'NETFLIX clone',
		url: 'https://davidhavlin.netlify.app/',
		desc: 'skuska',
		logo: require('@/assets/images/projects/nf-logo.png'),
		color: {
			main: '#e61e25',
			second: '#e9093e',
			title: '#00f3ff',
		},
		stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt'],
		images: [
			require('@/assets/images/projects/nf-desktop-left.png'),
			require('@/assets/images/projects/nf-desktop-left.png'),
			require('@/assets/images/projects/nf-desktop-left.png'),
		],
		id: 2,
	},
]

export default myProjects
