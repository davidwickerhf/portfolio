// {$_(variable)}

export const tabs = [
	{ id: 1, name: 'tabs.welcome', url: '/', icon: 'home' },
	{ id: 2, name: 'tabs.academics', url: '/academics', icon: 'school' },
	{ id: 3, name: 'tabs.extracurriculars', url: '/extracurriculars', icon: 'camping' },
	{ id: 4, name: 'tabs.certifications', url: '/certifications', icon: 'badge' },
	{ id: 5, name: 'tabs.work-experience', url: '/work', icon: 'apartment' },
	{ id: 6, name: 'tabs.civics', url: '/civics', icon: 'public' },
	{ id: 7, name: 'tabs.activism', url: '/activism', icon: 'nature' },
	{ id: 8, name: 'tabs.publications', url: '/publications', icon: 'feed' },
	{ id: 9, name: 'tabs.personal-projects', url: '/projects', icon: 'integration_instructions' },
	{ id: 10, name: 'tabs.photography', url: '/photography', icon: 'photo_camera' }
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
		src: 'activities/uwcd-day-1.jpg',
		title: 'gallery.uwc.title',
		description: 'gallery.uwc.text'
	},
	{
		src: 'activities/gyumri-1.jpg',
		title: 'gallery.gyumri.title',
		description: 'gallery.gyumri.text'
	},
	{
		src: 'activities/uwcd-strike-1.jpg',
		title: 'gallery.sustco.title',
		url: '/academics#uwcd-sustco'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'gallery.tedx.title',
		url: '/academics#tedx-youth'
	},
	{
		src: 'activities/last-school-day-2021.jpeg',
		title: 'gallery.lastday.title'
	},
	{
		src: 'activities/barcelona-1.jpg',
		title: 'gallery.barcelona.title'
	},
	{
		src: 'activities/uwc-owe.jpeg',
		title: 'gallery.owe.title',
		description: 'gallery.owe.text'
	}
];

// ACADEMICS AND CURRICULAR ACTIVITIES
export interface Project {
	id: string;
	title: string;
	description: string;
	images?: Photo[];
	url?: string;
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
		status: 'academics.status.completed',
		current: false,
		short: 'academics.giacomo.short',
		istitution: 'academics.giacomo.istitution',
		diploma: 'academics.giacomo.diploma',
		description: 'academics.giacomo.desc',
		examsubjects: [],
		projects: [
			{
				id: 'photo-contest',
				title: 'academics.giacomo.projects.contest.title',
				description: 'academics.giacomo.projects.contest.desc',
				images: [{ src: 'projects/photo-contest.jpeg' }],
				url: 'https://concorsofotograficogiacomojaquerio.wordpress.com/'
			}
		]
	},
	{
		id: 'pascal',
		beginYear: 2018,
		endYear: 2023,
		status: 'academics.status.current',
		current: true,
		short: 'academics.pascal.short',
		logo: 'pascal.png',
		url: 'https://pascalgiaveno.edu.it/',
		istitution: 'academics.pascal.istitution',
		diploma: 'academics.pascal.diploma',
		description: 'academics.pascal.desc',
		examsubjects: [],
		projects: [
			// Progetto Armenia
			{
				id: 'project-armenia',
				title: 'academics.pascal.projects.armenia.title',
				description: 'academics.pascal.projects.armenia.desc',
				images: [],
				url: '/civics'
			},
			// Progetto dama
			{
				id: 'mai-checkers',
				title: 'academics.pascal.projects.dama.title',
				description: 'academics.pascal.projects.dama.desc',
				url: '/projects#mai-checkers',
				images: [{ src: 'projects/checkers.png' }, { src: 'projects/checkers-2.png' }]
			},

			// Progetto Tutoraggio
			{
				id: 'pascal-tutoring',
				title: 'academics.pascal.projects.tutoring.title',
				description: 'academics.pascal.projects.tutoring.desc',
				url: '/extracurriculars#pascal-tutoring'
			},

			// Repl Code Challenge
			{
				id: 'reply-challenge',
				title: 'academics.pascal.projects.reply.title',
				description: 'academics.pascal.projects.reply.desc',
				url: '/extracurriculars#pascal-tutoring'
			},

			// Ragazzi Irresponsabili
			{
				id: 'ragazzi-irresponsabili',
				title: 'academics.pascal.projects.film.title',
				description: 'academics.pascal.projects.film.desc',
				url: '/activism',
				images: [
					{ src: 'activism/ragazzi-irresponsabili-2.jpeg' },
					{ src: 'activism/ragazzi-irresponsabili-1.jpeg' }
				]
			}
		]
	},
	{
		id: 'uwcdilijan',
		beginYear: 2020,
		endYear: 2021,
		status: 'academics.status.dp1',
		current: false,
		short: 'academics.uwc.short',
		logo: 'uwcdilijan.png',
		url: 'https://www.uwcdilijan.org/',
		istitution: 'academics.uwc.istitution',
		diploma: 'academics.uwc.diploma',
		description: 'academics.uwc.desc',
		examsubjects: [
			'HL Mathematics Analysis and Approaches',
			'HL Physics',
			'HL Philosophy',
			'HL English Language and Literature',
			'SL Self Taught Italian literature',
			'SL Environmental Systems and Societies'
		],
		projects: [
			// TED X
			{
				id: 'tedx-youth',
				title: 'academics.uwc.projects.tedx.title',
				description: 'academics.uwc.projects.tedx.desc',
				images: [{ src: 'activities/tedx-1.jpg' }]
			},

			// Yearbook Committee
			{
				id: 'uwcd-yearbook',
				title: 'academics.uwc.projects.yearbook.title',
				description: 'academics.uwc.projects.yearbook.desc'
			},

			// Sustainability Committee
			{
				id: 'uwcd-sustco',
				title: 'academics.uwc.projects.sustco.title',
				description: 'academics.uwc.projects.sustco.desc',
				images: [{ src: 'activities/sustco-1.jpg' }, { src: 'activities/sustco-2.jpg' }],
				url: 'https://www.uwcdilijan.org/news-events/school-news/~board/school-news/post/we-brought-millions-and-millions-of-people-onto-the-streets-david-wicker-italy-uwcd23-about-the-global-climate-strike-movement'
			},

			// UWC Climate Panel
			{
				id: 'uwcd-panel',
				title: 'academics.uwc.projects.panel.title',
				description: 'academics.uwc.projects.panel.desc',
				images: [{ src: 'activities/uwcd-panel-12.jpeg' }],
				url: 'https://www.eventbrite.com/e/uwcd-climate-panel-registration-262379011687'
			},

			// Outdoor leadership
			{
				id: 'uwcd-outdoor',
				title: 'Outdoor Leadership',
				description: 'academics.uwc.projects.outdoor.desc',
				images: [
					{ src: 'activities/outdoor-leader-1.jpg' },
					{ src: 'activities/outdoor-leader-2.jpg' },
					{ src: 'activities/outdoor-leader-3.jpg' },
					{ src: 'activities/outdoor-leader-4.jpg' }
				],
				url: ''
			}

			//
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
		description: 'academics.maas.desc',
		examsubjects: [],
		projects: [
			{
				id: 'maas-4-climate',
				title: 'academics.maas.projects.m4c.title',
				description: 'academics.maas.projects.m4c.desc',
				url: 'https://www.maastrichtforclimate.nl/'
			}
		]
	}
];

// EXTRACURRICULARS
export enum ActivityArea {
	computerscience = 'extracurriculars.area.cs',
	climate = 'extracurriculars.area.climate',
	leadership = 'extracurriculars.area.leadership',
	community = 'extracurriculars.area.community'
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
	images?: Photo[];
	url?: string;
}

export const activities: Activity[] = [
	// RELATED TO CS
	// AI campus
	{
		id: 'stem-ai',
		area: ActivityArea.computerscience,
		year: 2019,
		month: 12,
		role: 'extracurriculars.role.student',
		activity: 'extracurriculars.stemai.activity',
		institution: 'ASSOCIAZIONE CULTURALE "SCUOLA DI FORMAZIONE SCIENTIFICA LUIGI LAGRANGE"',
		institutionUrl: 'https://associazionelagrange.it/',
		description: 'extracurriculars.stemai.desc'
	},
	// Computer camp
	{
		id: 'stem-ki',
		area: ActivityArea.computerscience,
		year: 2019,
		month: 7,
		role: 'extracurriculars.role.student',
		activity: 'extracurriculars.stemki.activity',
		institution: 'Computer Camp',
		institutionUrl: 'https://www.computercamp.de/kurse/programmieren-40',
		description: 'extracurriculars.stemki.desc'
	},

	// RELATED TO CLIMATE
	{
		id: 'uwcd-sustco',
		area: ActivityArea.climate,
		year: 2021,
		month: 10,
		role: 'extracurriculars.role.coordinator',
		activity: 'extracurriculars.sustco.activity',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description: 'academics.uwc.projects.sustco.desc',
		images: [{ src: 'activities/sustco-1.jpg' }, { src: 'activities/sustco-2.jpg' }],
		url: 'https://www.uwcdilijan.org/news-events/school-news/~board/school-news/post/we-brought-millions-and-millions-of-people-onto-the-streets-david-wicker-italy-uwcd23-about-the-global-climate-strike-movement'
	},
	{
		id: 'ragazzi-irresponsabili',
		area: ActivityArea.climate,
		year: 2020,
		month: 1,
		role: 'extracurriculars.role.protagonist',
		activity: 'extracurriculars.docu.activity',
		institution: 'Italia che Cambia',
		institutionUrl: 'https://www.italiachecambia.org/',
		description: 'extracurriculars.docu.desc',
		images: [
			{ src: 'activism/ragazzi-irresponsabili-1.jpeg' },
			{ src: 'activism/ragazzi-irresponsabili-2.jpeg' },
			{ src: 'activities/ragazzi-irresponsabili-3.jpeg' }
		],
		url: 'https://mediasetinfinity.mediaset.it/movie/ragazziirresponsabili/ragazzi-irresponsabili_F310153901000101'
	},
	{
		id: 'uwcd-panel',
		area: ActivityArea.climate,
		year: 2022,
		month: 2,
		role: 'extracurriculars.role.organizer',
		activity: 'academics.uwc.projects.panel.title',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description: 'academics.uwc.projects.panel.desc',
		images: [{ src: 'activities/uwcd-panel-12.jpeg' }]
	},
	{
		id: 'ted-countdown',
		area: ActivityArea.climate,
		year: 2021,
		month: 10,
		role: 'extracurriculars.role.speaker',
		activity: 'TED Countdown Summit',
		institution: 'TED',
		institutionUrl: 'https://countdown.ted.com/',
		description: 'extracurriculars.tedc.desc',
		images: [
			{ src: 'activities/countdown-1.jpeg' },
			{ src: 'activities/countdown-2.jpeg' },
			{ src: 'activities/countdown-3.jpeg' },
			{ src: 'activities/countdown-4.jpeg' },
			{ src: 'activities/countdown-6.jpeg' },
			{ src: 'activities/countdown-7.jpeg' },
			{ src: 'activities/countdown-8.jpeg' }
		],
		url: 'https://countdown.ted.com/events/countdown-summit-2021'
	},
	{
		id: 'oxford-climate',
		area: ActivityArea.climate,
		year: 2022,
		month: 3,
		role: 'extracurriculars.role.student',
		activity: 'Oxford School of Climate Change',
		institution: 'Oxford Climate Society',
		institutionUrl: 'https://www.oxfordclimatesociety.com/',
		description: 'extracurriculars.osocc.desc',
		url: 'https://www.oxfordclimatesociety.com/the-oxford-school-of-climate-change.html'
	},
	{
		id: 'maastricht-for-climate',
		area: ActivityArea.climate,
		year: 2023,
		month: 5,
		role: 'extracurriculars.role.president',
		activity: 'Maastricht for Climate',
		institution: 'Maastricht for Climate',
		institutionUrl: 'https://www.maastrichtforclimate.nl/',
		description: 'academics.maas.projects.m4c.desc'
	},
	{
		id: 'bocconi-school',
		area: ActivityArea.climate,
		year: 2019,
		month: 12,
		role: 'extracurriculars.role.student',
		activity: 'Bocconi Summer School - International Politics & EU for Sustainable Development',
		institution: 'extracurriculars.bocconi.institution',
		institutionUrl:
			'https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/summer+school/',
		description: 'extracurriculars.bocconi.desc'
	},

	// RELATED TO LEADERSHIP
	{
		id: 'to-mun',
		area: ActivityArea.leadership,
		year: 2019,
		month: 1,
		role: 'extracurriculars.role.delegate',
		activity: 'Italian Model United Nations (Honorable Mention and Best Delegate Awards)',
		institution: 'United Network',
		institutionUrl: 'https://www.unitednetwork.it/en/home-en/',
		description: 'extracurriculars.imun.desc',
		images: [{ src: 'activities/imun-1.jpeg' }, { src: 'activities/imun-2.jpeg' }],
		url: 'https://www.unitednetwork.it/progetti/imun/imun-torino/'
	},
	{
		id: 'pascal-tutoring',
		area: ActivityArea.community,
		year: 2020,
		month: 11,
		role: 'extracurriculars.role.tutor',
		activity: 'academics.pascal.projects.tutoring.title',
		institution: 'IIS Blaise Pascal',
		institutionUrl: 'https://www.pascalgiaveno.edu.it/',
		description: 'extracurriculars.tutor.desc',
		url: 'https://www.pascalgiaveno.edu.it/scheda-progetto/tutoraggio/'
	},
	{
		id: 'tedx-youth',
		area: ActivityArea.leadership,
		year: 2022,
		month: 4,
		role: 'extracurriculars.role.organizer',
		activity: 'academics.uwc.projects.tedx.title',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description: 'academics.uwc.projects.tedx.desc',
		images: [{ src: 'activities/tedx-1.jpg' }],
		url: 'https://www.ted.com/tedx/events/49371'
	},
	{
		id: 'outdoor-leadership',
		area: ActivityArea.leadership,
		year: 2021,
		month: 11,
		role: 'extracurriculars.role.member',
		activity: 'Outdoor Leadership',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description: 'academics.uwc.projects.outdoor.desc',
		images: [
			{ src: 'activities/outdoor-leader-1.jpg' },
			{ src: 'activities/outdoor-leader-2.jpg' },
			{ src: 'activities/outdoor-leader-3.jpg' },
			{ src: 'activities/outdoor-leader-4.jpg' }
		]
	}
];

// CERTIFICATIONS
export enum CertificationType {
	language = 'certifications.type.language',
	climate = 'certifications.type.climate',
	computerscience = 'certifications.type.cs',
	mooc = 'certifications.type.mooc'
}

export interface Certification {
	id: string;
	type: CertificationType;
	description?: string;
	title: string;
	grade?: string;
	year: number;
	month: number;
	logo?: string;
	institution: string;
	institutionUrl?: string;
	url?: string;
}

export const certifications: Certification[] = [
	// LANGUAGE CERTIFICATIONS
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
	},
	{
		id: 'english-first',
		type: CertificationType.language,
		title: 'First English Certificate',
		grade: 'Grade A - 186/190 - Level C1',
		institution: 'Cambridge University Press & Assessment English',
		year: 2018,
		month: 5,
		logo: 'cambridge.png',
		institutionUrl: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/'
	},
	{
		id: 'english-ket',
		type: CertificationType.language,
		title: 'Key English Test',
		grade: 'Pass with Distinction - 150/150 - Level B1',
		institution: 'Cambridge University Press & Assessment English',
		year: 2017,
		month: 5,
		logo: 'cambridge.png',
		institutionUrl: 'https://www.cambridgeenglish.org/exams-and-tests/advanced/'
	},
	{
		id: 'german-b1',
		type: CertificationType.language,
		title: 'Goethe Zertifikat B1',
		grade: 'Level B1',
		institution: 'Goethe Institute',
		year: 2020,
		month: 7,
		logo: 'goethe.svg',
		institutionUrl: 'https://www.goethe.de/en/index.html'
	},

	// COMPUTER SCIENCE
	// HarvardX
	{
		id: 'harvard',
		type: CertificationType.computerscience,
		title: "CS50's Introduction to Artificial Intelligence with Python",
		institution: 'Harvardx',
		year: 2021,
		month: 12,
		logo: 'harvard.png',
		institutionUrl: 'https://vpal.harvard.edu/harvardx/'
	},

	// MITx
	{
		id: 'mit',
		type: CertificationType.computerscience,
		title: '6.00.1x Introduction to Computer Science and Programming Using Python',
		institution: 'MITx',
		year: 2021,
		month: 8,
		logo: 'mit.png',
		institutionUrl: 'https://mitxonline.mit.edu/'
	},

	// MOOOOC

	// PHP
	{
		id: 'php',
		type: CertificationType.mooc,
		title: 'Object Oriented PHP & MVC',
		institution: 'Udemy',
		year: 2022,
		month: 6,
		logo: 'udemy.png',
		institutionUrl: 'https://www.udemy.com/'
	},

	// MERN
	{
		id: 'mern',
		type: CertificationType.mooc,
		title: 'MERN Stack Front to Back: Full Stack React, Redux & Node.js',
		institution: 'Udemy',
		year: 2022,
		month: 5,
		logo: 'udemy.png',
		institutionUrl: 'https://www.udemy.com/'
	},

	// Flutter
	{
		id: 'flutter',
		type: CertificationType.mooc,
		title: 'Flutter & Dart - The Complete Guide',
		institution: 'Udemy',
		year: 2021,
		month: 3,
		logo: 'udemy.png',
		institutionUrl: 'https://www.udemy.com/'
	},

	// Java Masterclass
	{
		id: 'java',
		type: CertificationType.mooc,
		title: 'Java Programming Masterclass',
		institution: 'Udemy',
		year: 2020,
		month: 9,
		logo: 'udemy.png',
		institutionUrl: 'https://www.udemy.com/'
	},

	// Python Bootcamp
	{
		id: 'python',
		type: CertificationType.mooc,
		title: 'Complete Python Bootcamp',
		institution: 'Udemy',
		year: 2019,
		month: 2,
		logo: 'udemy.png',
		institutionUrl: 'https://www.udemy.com/'
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
		overview: 'work.mediamente.overview',
		technologies: [
			{
				title: 'PHP'
			},
			{
				title: 'JavaScript'
			},

			{
				title: 'SCSS'
			},
			{
				title: 'MySQL'
			}
		],
		issues: ['work.mediamente.issues.1', 'work.mediamente.issues.2', 'work.mediamente.issues.3'],
		requirements: [
			'work.mediamente.req.calendar',
			'work.mediamemte.req.widget',
			'work.mediamemte.req.table',
			'work.mediamemte.req.booking',
			'work.mediamemte.req.auth',
			'work.mediamemte.req.db',
			'work.mediamemte.req.search',
			'work.mediamemte.req.reservations',
			'work.mediamemte.req.responsive',
			'work.mediamemte.req.admin'
		]
	}
];

// ACTIVISM
export interface ActivismExperience {
	id: string;
	title: string;
	description: string;
	year: number;
	location: string;
	images?: Photo[];
}

export const activism: ActivismExperience[] = [
	// FFF Torino
	{
		id: 'fff-turin',
		title: 'Foundation of Fridays for Future Turin',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Turin'
	},

	// FFF Italia
	{
		id: 'fff-italia',
		title: 'Foundation of Fridays For Future Italy',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// FFF international
	{
		id: 'fff-int',
		title: 'International Fridays For Future network',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// EU Parliament Strasburgo
	{
		id: 'eu-strasbourg',
		title: 'First international meeting at the EU Parliament in Strasburg',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// Global Strikes
	{
		id: 'global-strikes',
		title: 'Global climate strikes',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// - Assemblee nazionali
	// - 2a Assemblea FFF Italia (Napoli)
	{
		id: 'assemblee',
		title: 'FFF Italy national assemblies',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// - Aachen central strike
	{
		id: 'aachen',
		title: 'International strike in Aachen',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// - Occupazione parlamento europeo
	{
		id: 'eu-parliament',
		title: 'Occupation of the European Parliament on election day',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// - Lausanne International FFF Meeting
	{
		id: 'smile',
		title: 'SMILE (Summer Meeting in Lausanne, Europe)',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	},

	// DEC
	{
		id: 'dec',
		title: 'Climate Emergency Declarations',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	}
];

// CIVICS ARMENIA
export interface CivcsTopic {
	id: string;
	title: string;
	description: string;
	images?: Photo[];
	url?: string;
}

export const civics: CivcsTopic[] = [
	// Motvazioni
	{
		id: 'motivations',
		title: 'civics.motivations.title',
		description: 'civics.motivations.desc'
	},
	// Hamidian massacre
	{
		id: 'hamidian-massacre',
		title: 'civics.hamidian.title',
		description: 'civics.hamidian.desc',
		url: 'https://www.armenian-genocide.org/hamidian.html',
		images: [{ src: 'civics/hamidian-1.jpeg' }]
	},
	// Odio raziale, prima guerra mondiale
	{
		id: 'ww1',
		title: 'civics.1915.title',
		description: 'civics.1915.desc',
		url: 'https://www.armenian-genocide.org/genocide.html',
		images: [
			{ src: 'civics/genocide-1.jpeg' },
			{ src: 'civics/genocide-2.jpeg' },
			{ src: 'civics/genocide-3.jpeg' },
			{ src: 'civics/genocide-4.jpeg' },
			{ src: 'civics/genocide-5.webp' },
			{ src: 'civics/genocide-6.jpeg' }
		]
	},

	// Statistics and Genocide rememberance
	{
		id: 'genocide',
		title: 'civics.rememberance.title',
		description: 'civics.rememberance.desc',
		images: [
			{ src: 'civics/rememberance-1.gif' },
			{ src: 'civics/rememberance-2.jpeg' },
			{ src: 'civics/rememberance-3.jpeg' },
			{ src: 'civics/rememberance-4.jpeg' }
		]
	},

	// Indipendenza Artsakh e guerra del 1988
	{
		id: 'artsakh',
		title: 'civics.artsakh.title',
		description: 'civics.artsakh.desc',
		images: [{ src: 'civics/artsakh-1.jpeg' }, { src: 'civics/artsakh-2.png' }]
	},

	// 44 day war 2021
	{
		id: '44-war',
		title: 'civics.44.title',
		description: 'civics.44.desc',
		images: [
			{ src: 'civics/44-1.webp' },
			{ src: 'civics/44-2.jpeg' },
			{ src: 'civics/44-3.jpeg' },
			{ src: 'civics/44-4.jpeg' }
		]
	},

	// Il conflitto continua (guerra Settembre 2022, conflitto )
	{
		id: 'continued-conflict',
		title: 'civics.further.title',
		description: 'civics.further.desc',
		images: [
			{ src: 'civics/2022-1.jpeg' },
			{ src: 'civics/2022-2.jpeg' },
			{ src: 'civics/2022-3.jpeg' },
			{ src: 'civics/2022-4.jpeg' }
		]
	},

	// Artsakh blokade
	{
		id: 'blockade',
		title: 'civics.blockade.title',
		description: 'civics.blockade.desc',
		images: [
			{ src: 'civics/blockade-1.jpeg' },
			{ src: 'civics/blockade-2.jpeg' },
			{ src: 'civics/blockade-3.jpg' },
			{ src: 'civics/blockade-4.png' }
		]
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
	logo?: string;
	longDescription?: string;
	url?: string;
	technologies: Technology[];
	images?: Photo[];
	issues?: string[];
	github?: string;
	sandbox?: string;
}

export const typescript: Technology = {
	title: 'TypeScript',
	url: 'https://www.typescriptlang.org/'
};

export const next: Technology = {
	title: 'Next.js',
	url: 'https://nextjs.org/'
};

export const react: Technology = {
	title: 'React.js',
	url: 'https://react.dev/'
};

export const jotai: Technology = {
	title: 'Jotai.js',
	url: 'https://jotai.org/'
};

export const three: Technology = {
	title: 'Three.js',
	url: 'https://threejs.org/'
};

export const tailwind: Technology = {
	title: 'Tailwind CSS',
	url: 'https://tailwindcss.com/'
};

export const vercel: Technology = {
	title: 'Vercel',
	url: 'https://vercel.com/'
};

export const svelte: Technology = {
	title: 'Svelte',
	url: 'https://svelte.dev/'
};

export const sveltekit: Technology = {
	title: 'SvelteKit',
	url: 'https://kit.svelte.dev/'
};

export const dart: Technology = {
	title: 'Dark',
	url: 'https://dart.dev/'
};

export const flutter: Technology = {
	title: 'Flutter',
	url: 'https://flutter.dev/'
};

export const python: Technology = {
	title: 'Python',
	url: 'https://python.dev/'
};

export const projects: PersonalProject[] = [
	// Portfolio
	{
		id: 'portfolio',
		title: 'projects.portfolio.title',
		year: 2023,
		subtitle: 'projects.portfolio.subtitle',
		shortDescription: 'projects.portfolio.short',
		longDescription: 'projects.portfolio.long',
		url: 'https://david.wicker.life/',
		logo: 'wicker.svg',
		technologies: [typescript, tailwind, svelte, sveltekit, vercel],
		images: [
			{
				src: 'projects/wicker-1.png'
			},
			{
				src: 'projects/wicker-2.png'
			},
			{
				src: 'projects/wicker-3.png'
			},
			{
				src: 'projects/wicker-4.png'
			}
		],
		issues: [
			'projects.portfolio.issues.state',
			'projects.portfolio.issues.dynamic',
			'projects.portfolio.issues.responsive'
		],
		github: 'https://github.com/davidwickerhf/portfolio'
	},
	// Mai Checkers
	{
		id: 'mai-checkers',
		title: 'Mai Checkers',
		year: 2023,
		subtitle: 'projects.checkers.subtitle',
		shortDescription: 'projects.checkers.short',
		longDescription: 'projects.checkers.long',
		url: 'https://checkers.wicker.life/',
		logo: 'maicheckers.svg',
		technologies: [typescript, next, react, jotai, three, tailwind, vercel],
		images: [
			{
				src: 'projects/checkers-2.png'
			},
			{
				src: 'projects/checkers.png'
			}
		],
		issues: [
			'projects.checkers.issues.state',
			'projects.checkers.issues.moves',
			'projects.checkers.issues.3d',
			'projects.checkers.issues.3dstate'
		],
		github: 'https://github.com/wickerlife/checkers',
		sandbox:
			'https://codesandbox.io/p/github/wickerlife/checkers/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cliwtfx24000b3b6mgef6pkij%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522cliwtfx24000d3b6mv5a0grvw%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cliwtfx24000b3b6mgef6pkij%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cliwtfx24000a3b6m9skoceo6%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522cliwtfx24000b3b6mgef6pkij%2522%252C%2522activeTabId%2522%253A%2522cliwtfx24000a3b6m9skoceo6%2522%257D%252C%2522cliwtfx24000d3b6mv5a0grvw%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cliwtfx24000c3b6miy7a84do%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%257D%255D%252C%2522id%2522%253A%2522cliwtfx24000d3b6mv5a0grvw%2522%252C%2522activeTabId%2522%253A%2522cliwtfx24000c3b6miy7a84do%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D'
	},

	// Mai Letters
	{
		id: 'letters',
		title: 'Mai Letters',
		year: 2022,
		subtitle: 'projects.letters.subtitle',
		shortDescription: 'projects.letters.short',
		url: 'https://nisha.wicker.life/',
		logo: 'letters.png',
		technologies: [typescript, tailwind, next, jotai, vercel],
		images: [
			{ src: 'projects/hunt-1.png' },
			{ src: 'projects/hunt-2.png' },
			{ src: 'projects/hunt-3.png' },
			{ src: 'projects/hunt-4.png' }
		],
		github: 'https://github.com/davidwickerhf/nisha'
	},

	// Mai Choices
	{
		id: 'choices',
		title: 'Mai Choices',
		year: 2021,
		subtitle: 'projects.choices.subtitle',
		shortDescription: 'projects.choices.short',
		longDescription: 'projects.choices.long',
		logo: 'choices.svg',
		technologies: [dart, flutter],
		images: [{ src: 'projects/choices-1.png' }, { src: 'projects/choices-2.png' }],
		github: 'https://github.com/wickerlife/mychoices'
	},

	// Insta Client
	{
		id: 'instaclient',
		title: 'InstaClient Library',
		year: 2020,
		subtitle: 'projects.instaclient.subtitle',
		shortDescription: 'projects.instaclient.short',
		longDescription: 'projects.instaclient.long',
		technologies: [python],
		github: 'https://github.com/davidwickerhf/instaclient'
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
		description: 'publications.revolution.desc',
		url: 'https://www.amazon.it/Revolution-Will-Not-Litigated-English-ebook/dp/B0C1W1XZLG/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZBK1K5POZ02S&keywords=the+revolution+will+not+be+litigated&qid=1686644886&sprefix=the+revolution+will+not+be+litigated,aps,113&sr=8-1',
		image: 'revolution.jpeg'
	},
	{
		id: 'stonesoup',
		title: 'Stone Soup for a Sustainable World: Life-Changing Stories of Young Heroes',
		authors: ['Marianne Larned'],
		publisher: 'Stone Soup Institute',
		year: 2021,
		description: 'publications.stonesoup.desc',
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
