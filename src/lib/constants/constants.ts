// {$_(variable)}

export const tabs = [
	{ id: 1, name: 'tabs.welcome', url: '/', icon: 'home' },
	{ id: 2, name: 'tabs.academics', url: '/academics', icon: 'school' },
	{ id: 3, name: 'tabs.extracurriculars', url: '/extracurriculars', icon: 'camping' },
	{ id: 4, name: 'tabs.certifications', url: '/certifications', icon: 'badge' },
	{ id: 5, name: 'tabs.work-experience', url: '/work', icon: 'apartment' },
	{ id: 6, name: 'tabs.activism', url: '/activism', icon: 'nature' },
	{ id: 7, name: 'tabs.publications', url: '/publications', icon: 'feed' },
	{ id: 8, name: 'tabs.personal-projects', url: '/projects', icon: 'integration_instructions' },
	{ id: 9, name: 'tabs.photography', url: '/photography', icon: 'photo_camera' }
];

export const socials = [
	{ name: 'instagram', url: 'https://instagram.com/davidwickerhf' },
	{ name: 'linkedin', url: 'https://linkedin.com/in/davidwickerhf' },
	{ name: 'github', url: 'https://github.com/davidwickerhf' }
];

// WELCOME PAGE
// Photo gallery

export interface Photo {
	src: string;
	title?: string;
	description?: string;
	url?: string;
	year?: number;
	related?: string;
}

export const galleryPics: Photo[] = [
	{
		src: 'activities/tedx-1.jpg',
		title: 'FIRST',
		description: 'general.lorem-ipsum'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'TedX Youth Conference at UWC Dilijan',
		description: 'general.lorem-ipsum'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'TedX Youth Conference at UWC Dilijan',
		description: 'general.lorem-ipsum'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'TedX Youth Conference at UWC Dilijan',
		description: 'general.lorem-ipsum'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'TedX Youth Conference at UWC Dilijan',
		description: 'general.lorem-ipsum'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'TedX Youth Conference at UWC Dilijan',
		description: 'general.lorem-ipsum'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'LAST',
		description: 'general.lorem-ipsum'
	}
];

// ACADEMICS AND CURRICULAR ACTIVITIES
export interface Project {
	id: string;
	title: string;
	description: string;
	images: string[];
	url: string;
}

export interface School {
	id: string;
	beginYear: number;
	endYear: number;
	status: string;
	current: boolean;
	istitution: string;
	url?: string;
	logo?: string;
	darkLogo?: string;
	short: string;
	diploma: string;
	description: string;
	examsubjects: string[];
	projects: Project[];
}

// { id: 1,id: 1,beginYear: 2014, endYear: 2018, status: '', istitution: '', diploma: '', description: '', examsubjects: [], projects: [{title: '', description: '', images: [], url: ''}] }
export const academics: School[] = [
	{
		id: 'giacomo-jaqueiro',
		beginYear: 2014,
		endYear: 2018,
		status: 'completed',
		current: false,
		short: 'junior high school',
		istitution: 'Giacomo Jaqueiro',
		diploma: 'Junior High School Diploma',
		description: 'general.lorem-ipsum',
		examsubjects: [],
		projects: [
			{
				id: 'photo-contest',
				title: 'Photography contest',
				description: 'general.lorem-ipsum',
				images: [],
				url: ''
			}
		]
	},
	{
		id: 'pascal',
		beginYear: 2018,
		endYear: 2023,
		status: 'currently attending',
		current: true,
		short: 'high school',
		logo: 'pascal.png',
		url: 'https://pascalgiaveno.edu.it/',
		istitution: 'IIS Blaise Pascal',
		diploma: 'Applied sciences high school diploma',
		description: 'general.lorem-ipsum',
		examsubjects: [],
		projects: [
			{
				id: 'project-armenia',
				title: 'Project Armenia',
				description: 'general.lorem-ipsum',
				images: [],
				url: ''
			}
		]
	},
	{
		id: 'uwcdilijan',
		beginYear: 2020,
		endYear: 2021,
		status: 'completed DP1',
		current: false,
		short: 'year abroad',
		logo: 'uwcdilijan.png',
		url: 'https://www.uwcdilijan.org/',
		istitution: 'UWC Dilijan College',
		diploma: 'International Baccalaureate',
		description: 'general.lorem-ipsum',
		examsubjects: [
			'HL Mathematics Analysis and Approaches',
			'HL Physics',
			'HL Philosophy',
			'HL English Language and Literature',
			'SL Self Taught Italian literature',
			'SL Environmental Systems and Societies'
		],
		projects: [
			{
				id: 'tedx-youth',
				title: 'TedX Youth @ UWCDilijan',
				description: 'general.lorem-ipsum',
				images: ['activities/tedx-1.jpg'],
				url: ''
			}
		]
	},
	{
		id: 'maastrichtuniversity',
		beginYear: 2023,
		endYear: 2026,
		status: 'enrolled',
		current: false,
		short: 'bachelor',
		logo: 'maas.png',
		url: 'https://www.maastrichtuniversity.nl/',
		darkLogo: 'light-maas.png',
		istitution: 'Maastricht University',
		diploma: 'BSc in Computer Science',
		description: 'general.lorem-ipsum',
		examsubjects: [],
		projects: [
			{
				id: 'maas-4-climate',
				title: 'Maastricht 4 Climate',
				description: 'general.lorem-ipsum',
				images: [],
				url: ''
			}
		]
	}
];

// EXTRACURRICULARS
export enum ActivityArea {
	computerscience = 'Computer Science',
	climate = 'Climate and Sustainability',
	leadership = 'Leadership',
	community = 'Creativity and Community'
}

export interface Activity {
	id: string;
	area: ActivityArea;
	year: number;
	month: number;
	role: string;
	activity: string;
	institution: string;
	institutionUrl?: string;
	description: string;
	images?: string[];
	url?: string;
}

export const activities: Activity[] = [
	{
		id: 'stem-ai',
		area: ActivityArea.computerscience,
		year: 2019,
		month: 7,
		role: 'Student',
		activity: 'campus STEM "Intro all\'Intelligenza Artificiale e Computer Vision"',
		institution: 'ASSOCIAZIONE CULTURALE "SCUOLA DI FORMAZIONE SCIENTIFICA LUIGI LAGRANGE"',
		institutionUrl: 'https://associazionelagrange.it/',
		description: 'general.lorem-ipsum',
		images: ['activities/tedx-1.jpg'],
		url: 'https://github.com/davidwickerhf'
	},
	{
		id: 'stem-ki',
		area: ActivityArea.computerscience,
		year: 2019,
		month: 12,
		role: 'Student',
		activity: 'campus STEM "Programmieren 4.0 - Künstliche Intelligenz"',
		institution: 'Computer Camp',
		institutionUrl: 'https://www.computercamp.de/kurse/programmieren-40',
		description: 'general.lorem-ipsum',
		images: ['activities/tedx-1.jpg'],
		url: ''
	}
];

// CERTIFICATIONS
export enum CertificationType {
	language = 'Language',
	climate = 'Climate',
	computerscience = 'Computer Science'
}

export interface Certification {
	id: string;
	type: CertificationType;
	description?: string;
	title: string;
	grade: string;
	year: number;
	month: number;
	logo?: string;
	institution: string;
	institutionUrl?: string;
	url?: string;
}

export const certifications: Certification[] = [
	{
		id: 'english-cae',
		type: CertificationType.language,
		title: 'Certificate in Advanced English',
		grade: 'Grade A - 205/210 - Level C2',
		institution: 'Cambridge University Press & Assessment English',
		year: 2022,
		month: 7,
		logo: 'cambridge.png',
		institutionUrl: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/'
	}
];

// WORK EXPERIENCE
export interface WorkExperience {
	id: string;
	type: string;
	year: number;
	company: string;
	companyUrl?: string;
	images?: Photo[];
	overview?: string;
	technologies?: Technology[];
	issues?: string[];
	requirements?: string[];
}

export const work: WorkExperience[] = [
	{
		id: 'mediamente',
		type: 'internship',
		company: 'Mediamente Consulting',
		companyUrl: 'https://www.mediamenteconsulting.it/',
		year: 2023,
		images: [
			{
				src: 'work/mediamente-1.png'
			},
			{
				src: 'work/mediamente-2.png'
			}
		],
		overview: 'general.lorem-ipsum',
		technologies: [
			{
				title: 'PHP'
			},
			{
				title: 'JavaScript'
			},
			{
				title: 'Ajax'
			},
			{
				title: 'SCSS'
			},
			{
				title: 'MySQL'
			}
		],
		issues: ['general.lorem-ipsum-short', 'general.lorem-ipsum-short'],
		requirements: ['Car booking', 'Tracking number of available cars']
	}
];

// PERSONAL PROJECTS
export interface Technology {
	title: string;
	url?: string;
}

export interface PersonalProject {
	id: string;
	title: string;
	subtitle: string;
	year: number;
	shortDescription: string;
	logo: string;
	longDescription?: string;
	url?: string;
	technologies: Technology[];
	images?: Photo[];
	issues?: string[];
	github?: string;
	sandbox?: string;
}

export const projects: PersonalProject[] = [
	{
		id: 'mai-checkers',
		title: 'Mai Checkers',
		year: 2023,
		subtitle: 'Online checkers game',
		shortDescription: 'general.lorem-ipsum-short',
		longDescription: 'general.lorem-ipsum',
		url: 'https://checkers.wicker.life/',
		logo: 'maicheckers.svg',
		technologies: [
			{
				title: 'TypeScript'
			},
			{
				title: 'Next.js'
			},
			{
				title: 'React.js'
			},
			{
				title: 'Jotai.js'
			},
			{
				title: 'Three.js'
			},
			{
				title: 'Tailwind CSS'
			},
			{
				title: 'Vercel'
			}
		],
		images: [
			{
				src: 'photography/yerevan-1.jpg'
			},
			{
				src: 'photography/yerevan-2.jpg'
			},
			{
				src: 'photography/yerevan-3.jpg'
			}
		],
		issues: ['general.lorem-ipsum', 'general.lorem-ipsum'],
		github: 'https://github.com/wickerlife/checkers',
		sandbox:
			'https://codesandbox.io/p/github/wickerlife/checkers/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cliwtfx24000b3b6mgef6pkij%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cliwtfx24000d3b6mv5a0grvw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cliwtfx24000b3b6mgef6pkij%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cliwtfx24000a3b6m9skoceo6%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522cliwtfx24000b3b6mgef6pkij%2522%252C%2522activeTabId%2522%253A%2522cliwtfx24000a3b6m9skoceo6%2522%257D%252C%2522cliwtfx24000d3b6mv5a0grvw%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cliwtfx24000c3b6miy7a84do%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%255D%252C%2522id%2522%253A%2522cliwtfx24000d3b6mv5a0grvw%2522%252C%2522activeTabId%2522%253A%2522cliwtfx24000c3b6miy7a84do%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D'
	}
];
// PUBBLICATIONS
export interface Publication {
	id: string;
	title: string;
	authors: string[];
	publisher: string;
	year: number;
	description: string;
	url: string;
	image?: string;
}

export const publications: Publication[] = [
	{
		id: 'revolution',
		title: 'The revolution will not be litigated',
		authors: ['Katie Redford', 'Mark Gevisser'],
		publisher: 'OR Books',
		year: 2023,
		description: 'general.lorem-ipsum',
		url: 'https://www.amazon.it/Revolution-Will-Not-Litigated-English-ebook/dp/B0C1W1XZLG/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZBK1K5POZ02S&keywords=the+revolution+will+not+be+litigated&qid=1686644886&sprefix=the+revolution+will+not+be+litigated,aps,113&sr=8-1',
		image: 'revolution.jpeg'
	},
	{
		id: 'stonesoup',
		title: 'Stone Soup for a Sustainable World: Life-Changing Stories of Young Heroes',
		authors: ['Marianne Larned'],
		publisher: 'Stone Soup Institute',
		year: 2021,
		description: 'general.lorem-ipsum',
		url: 'https://www.amazon.it/Stone-Soup-Sustainable-World-Life-Changing/dp/0578893800/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GHV9BVUUKJKZ&keywords=stone+soup+for+a+sustainable+world&qid=1686786824&sprefix=stone+soup+for+a+sustainabile+world,aps,91&sr=8-1',
		image: 'stonesoup.jpeg'
	}
];

// PHOTOGRAPHY PORTFOLIO
export interface Location {
	title: string;
	description?: string;
	images: Photo[];
}

export const portfolio: Location[] = [
	{
		title: 'Armenia',
		description: 'general.lorem-ipsum',
		images: [
			{
				src: 'photography/yerevan-1.jpg'
			},
			{
				src: 'photography/yerevan-2.jpg'
			},
			{
				src: 'photography/yerevan-3.jpg'
			},
			{
				src: 'photography/yerevan-4.jpg'
			},
			{
				src: 'photography/yerevan-5.jpg'
			},
			{
				src: 'photography/yerevan-6.jpg'
			},
			{
				src: 'photography/yerevan-7.jpg'
			}
		]
	}
];
