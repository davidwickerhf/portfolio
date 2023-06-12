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
	title: string;
	description: string;
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
