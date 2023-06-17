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
		title: 'UWC Day',
		description:
			'International peace day and United World Colleges Day. On such occasions, students in the different colleges are asked to come together and showcase their cultures'
	},
	{
		src: 'activities/gyumri-1.jpg',
		title: 'Trip to Gyumri, Armenia',
		description:
			'Excursion to Gyumri, one of the largest cities of Armenia located near the Turkish border.'
	},
	{
		src: 'activities/uwcd-strike-1.jpg',
		title: 'Climate Justice Strike in UWC Dilijan'
	},
	{
		src: 'activities/tedx-1.jpg',
		title: 'TedX Youth Conference at UWC Dilijan'
	},
	{
		src: 'activities/last-school-day-2021.jpeg',
		title: 'Last school day (2021)'
	},
	{
		src: 'activities/barcelona-1.jpg',
		title: 'High School trip to Barcelona'
	},
	{
		src: 'activities/uwc-owe.jpeg',
		title: 'UWC Italy OWE',
		description: 'Introduction days to the UWC Colleges in Rome, Italy'
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
		status: 'completed',
		current: false,
		short: 'junior high school',
		istitution: 'Giacomo Jaqueiro',
		diploma: 'Junior High School Diploma',
		description:
			'I attended the junior high school in Buttigliera Alta and achieved outstanding results, graduating with a top grade of 100 cum laude. My graduation "mini-thesis" focused on the intersection of Artificial Intelligence, Turing\'s Machine, and ethical considerations in computing. To showcase my knowledge and skills, I programmed a math game in C# for the final oral exam and even challenged my professors to play.',
		examsubjects: [],
		projects: [
			{
				id: 'photo-contest',
				title: 'Photography contest',
				description:
					"Ho avuto l'opportunità di organizzare un concorso fotografico per la scuola media Giacomo Jaqueiro, in collaborazione con la professoressa di tecnologia e il professore di italiano. Il mio compito principale è stato quello di creare un sito web per le iscrizioni al concorso, dove ho anche formulato il regolamento ufficiale del concorso. In seguito, ho deciso di estendere il concorso a tutto il paese, in collaborazione con il comune di Buttigliera Alta. Per garantire la giusta valutazione delle fotografie, ho creato un comitato di fotografi professionisti che si sono occupati della selezione dei vincitori. Insieme alla scuola, ho anche preparato dei premi per i vincitori. La fase conclusiva del concorso è stata l'annuncio dei vincitori. Ho organizzato un evento presso la scuola, dove sono stati annunciati i vincitori e si è festeggiato il loro successo. Mi sono sentito molto soddisfatto del lavoro svolto e sono rimasto molto felice di vedere la partecipazione degli studenti alla competizione.",
				images: [{ src: 'projects/photo-contest.jpeg' }],
				url: 'https://concorsofotograficogiacomojaquerio.wordpress.com/'
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
		description:
			'I attended the "IIS Blaise Pascal" Applied Sciences high school in Giaveno, driven by my passion for computer science. In my first year, I developed an app to assist teachers in selecting students for oral tests. Throughout my second and third years, I was honored to receive academic merit scholarships from the school. During my high school years, I successfully balanced my academic pursuits with my dedication to climate activism. In fact, I founded the Fridays For Future Turin movement and actively participated in promoting environmental awareness. In my third year, I embarked on the application process for the United World Colleges, and I was elated to be accepted for studies in Armenia. Upon returning from Armenia, I took the initiative to organize seminars and lessons to educate others about the Armenian genocide and the ongoing conflicts in the region.',
		examsubjects: [],
		projects: [
			// Progetto Armenia
			{
				id: 'project-armenia',
				title: 'Progetto Armenia',
				description:
					"Dopo l'esperienza all'estero in Armenia, ho capito che avevo la responsabilità di sensibilizzare le persone sulla situazione di guerra nel paese. Mi sono messo in contatto con una studentessa di origini armene al Pascal e insieme abbiamo lavorato per creare un calendario di seminari sull'Armenia, che potesse raggiungere tutte le classi e gli studenti della scuola. Il progetto è stato battezzato come Progetto Armenia ed è stato inserito nel programma di educazione civica di quest'anno. Inoltre, coordinando con la vicepreside, abbiamo stabilito le date dei seminari e creato il contenuto che comprendeva il contesto storico e culturale dell'Armenia e delle ragioni geopolitiche e culturali del conflitto con l'Azerbaigian. Siamo riusciti a coinvolgere un gran numero di studenti e il feedback è stato molto positivo. Il progetto ci ha permesso di educare le persone sulla situazione in Armenia e sensibilizzarle sulle tematiche geopolitiche e culturali del conflitto. Questo progetto è stato una grande opportunità per me e per la mia partner armena di promuovere la pace e la comprensione attraverso l'educazione.",
				images: [],
				url: '/civics'
			},
			// Progetto dama
			{
				id: 'mai-checkers',
				title: 'Progetto Dama',
				description:
					'Encouraged by my computer science teacher, I embarked on a project to develop a game for the CS class. Opting to test my coding abilities, I chose to create a checkers game. Initially, I considered using Java for local development, but ultimately decided to leverage web technologies like TypeScript and Next.js. Seeking an extra challenge, I set out to code a 3D interface for the game. With determination and perseverance, I successfully completed the project and proudly published it online for others to enjoy. This experience allowed me to not only sharpen my coding skills but also showcase my ability to adapt and explore new technologies.',
				url: '/projects',
				images: [{ src: 'projects/checkers.png' }]
			},

			// Progetto Tutoraggio
			{
				id: 'pascal-tutoring',
				title: 'Progetto Tutoraggio',
				description:
					"Sono stato felice di collaborare come tutor di informatica al progetto di Tutoraggio del Pascal, avviato su iniziativa della scuola Blaise Pascal. Ho offerto ripetizioni di INFORMATICA agli studenti della scuola, sia in presenza che online durante la pandemia del COVID-19. Il mio ruolo consisteva nel potenziare gli argomenti svolti a scuola, ma anche nell'aiutare gli studenti con difficoltà specifiche nella comprensione della materia. Mi sono coordinato con la professoressa di informatica, Veronica Cinti, per organizzare le lezioni e pianificare gli argomenti da trattare. Siamo riusciti a fornire un supporto personalizzato ai ragazzi, individuando i punti deboli e offrendo lezioni mirate per affrontare le difficoltà. Sono stato molto contento di poter essere utile alla scuola e ai ragazzi e di contribuire al loro percorso formativo. Ho cercato di stimolare la loro curiosità, incoraggiandoli a esplorare argomenti più avanzati e offrendo loro spunti per approfondire gli argomenti di loro interesse. ",
				url: '/extracurriculars',
				images: []
			},

			// Repl Code Challenge
			{
				id: 'reply-challenge',
				title: 'Reply Code Challenge',
				description:
					"Su consiglio della professoressa Cinti, io e un altro studente dell'IIS Blaise Pascal abbiamo partecipato con successo alla competizione Reply Code Challenge, dimostrando le nostre capacità di programmazione e rappresentando orgogliosamente la nostra scuola.",
				url: '/extracurriculars',
				images: []
			},

			// Ragazzi Irresponsabili
			{
				id: 'ragazzi-irresponsabili',
				title: 'Documentario "Ragazzi Irresponsabili"',
				description:
					'Sono stato fortunato ad avere l\'opportunità di incontrare Ezio Maisto, un regista che stava cercando di realizzare un documentario sul movimento Fridays for Future, e sono diventato uno dei protagonisti del documentario intitolato "Ragazzi Irresponsabili".Per un anno intero ho partecipato attivamente alle riprese, documentando le manifestazioni e le proteste per il cambiamento climatico in cui sono stato coinvolto, insieme ad altri giovani attivisti. Grazie a questo documentario ho avuto la possibilità di condividere la mia esperienza con un pubblico più vasto, dando voce alle preoccupazioni che condivido con molti altri riguardo al futuro del nostro pianeta. Sono felice di condividere che il documentario "Ragazzi Irresponsabili" è stato premiato al film festival di Cinemambiente a Torino, un importante evento dedicato ai film e ai documentari che affrontano temi ambientali, nonchè alla cinquantesima edizione del Giffoni Film Festival. Il documentario è tuttora disponibile online su Infinity+ di Mediaset.',
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
			// TED X
			{
				id: 'tedx-youth',
				title: 'TedX Youth @ UWCDilijan',
				description:
					"TED (Technology, Entertainment, Design) è una conferenza annuale fondata nel 1984 che ha come obiettivo di diffondere idee e conoscenze attraverso discorsi motivazionali di massimo 18 minuti. L'evento principale si svolge a Vancouver, in Canada, ma TED ha anche organizzato eventi TEDx in tutto il mondo. TEDxYouth è una versione del formato TEDx che si concentra su giovani sotto i 18 anni e cerca di ispirarli a diffondere idee e soluzioni innovative alle sfide che la loro generazione affronta. Assieme ad altri studenti della mia scuola in Armenia, mi sono impegnato nella formazione del team organizzativo della conferenza TEDxYouth@UWCDilijan. Grazie alla mia esperienza nell'organizzazione di eventi, ho deciso di occuparmi della LOGISTICA dell'evento, distribuendo gli incarichi e COORDINANDO le attività del team.",
				images: [{ src: 'activities/tedx-1.jpg' }]
			},

			// Yearbook Committee
			{
				id: 'uwcd-yearbook',
				title: 'Yearbook Committee',
				description:
					"Durante l'anno scolastico 2021-2022 ho avuto la fortuna di entrare a far parte della commissione Annuario presso la scuola UWC Dilijan. Essendo sempre stato appassionato di fotografia, mi sono concentrato sulla raccolta di foto di eventi e momenti sociali della scuola per includerle nell'annuario. Inoltre, insieme ad un altro fotografo nella scuola, ci siamo impegnati ad ottenere i fotoritratti di tutti gli studenti e docenti della scuola, cercando di catturare la personalità di ognuno di loro. Durante la fase di progettazione dell'annuario, ho contribuito al design e alla disposizione delle pagine, cercando di creare un prodotto visivamente accattivante. Mi sono occupato anche della logistica, assicurandomi che tutte le immagini raccolte fossero di alta qualità e pronte per essere stampate. "
			},

			// Sustainability Committee
			{
				id: 'uwcd-sustco',
				title: 'Sunstainability Committee',
				description:
					"Durante il mio anno all'estero, ho avuto l'onore di essere ELETTO per far parte della commissione sostenibilità della prestigiosa scuola internazionale UWC Dilijan College. In questa veste, ho avuto la possibilità di collaborare con la commissione per l'ORGANIZZAZIONE di una serie di progetti sulla sostenibilità, con l'obiettivo di rendere la scuola più ecologica e responsabile nei confronti dell'ambiente. In particolare, ho avuto modo di interloquire e di MEDIARE con l'amministrazione della scuola per l'implementazione di politiche sostenibili, come il risparmio di energia e l'installazione di pannelli solari, al fine di ridurre l'impatto ambientale della scuola. Inoltre, ho collaborato con il comune di Dilijan per l'implementazione di un sistema di riciclo per la scuola, in collaborazione con una ONG di Yerevan. Grazie alle mie conoscenze e alla mia passione per la sostenibilità, ho offerto il mio contributo per l'educazione degli studenti sulla questione ambientale, promuovendo la raccolta differenziata e il riciclo dei rifiuti, nonché l'adozione di comportamenti più sostenibili nella vita quotidiana. Inoltre, ho partecipato attivamente all’organizzazione di varie attività della commissione, dando il mio supporto al coordinamento e all'organizzazione di eventi legati alla sostenibilità.",
				images: [{ src: 'activities/uwcd-strike-1.jpg' }],
				url: 'https://www.uwcdilijan.org/news-events/school-news/~board/school-news/post/we-brought-millions-and-millions-of-people-onto-the-streets-david-wicker-italy-uwcd23-about-the-global-climate-strike-movement'
			},

			// UWC Climate Panel
			{
				id: 'uwcd-panel',
				title: 'UWC Climate Panel',
				description:
					"Sono stato il COORDINATORE della commissione sostenibilità presso la scuola UWC Dilijan College e ho avuto l'onore di organizzare il SEMINARIO INTERNAZIONALE sul clima, chiamato 'UWC Climate Panel'. L'evento si è svolto online e ha coinvolto numerosi esperti nel campo della sostenibilità, tra cui scienziati, divulgatori e attivisti. Ho contattato personalmente ciascuno di loro per assicurarmi che fossero disponibili per parlare all'evento. L'obiettivo principale del UWC Climate Panel era di sensibilizzare la comunità internazionale sulla necessità di promuovere la sostenibilità e affrontare le problematiche globali dei cambiamenti climatici. Inoltre, si è voluto mettere in luce le difficoltà che le comunità più colpite dai cambiamenti climatici devono affrontare quotidianamente e il ruolo delle comunità indigene nella lotta per la difesa dell'ambiente e del clima. Uno degli aspetti più sfidanti dell'organizzazione del seminario è stato il coordinamento delle diverse sedi UWC sparse in tutto il mondo. Grazie a Zoom, siamo riusciti a connettere i 18 collegi UWC in modo che gli studenti potessero partecipare in tempo reale e fare domande ai relatori. Ho avuto il compito di MODERARE la discussione e di raccogliere le domande dal pubblico e dagli studenti, in modo che i relatori potessero rispondere alle loro preoccupazioni e domande.",
				images: [{ src: 'projects/climate-panel.jpeg' }],
				url: 'https://www.eventbrite.com/e/uwcd-climate-panel-registration-262379011687'
			},

			// Outdoor leadership
			{
				id: 'uwcd-outdoor',
				title: 'Outdoor Leadership',
				description:
					"Sono stato molto fortunato ad essere SELEZIONATO come membro del comitato di Outdoor Leadership alla scuola UWC Dilijan in Armenia. Ho lavorato a stretto contatto con il nostro insegnante, un veterano della guerra dei 44 giorni tra l'Armenia e l'Azerbaigian, per COORDINARE le attività sportive della scuola. È stata un'esperienza incredibile partecipare a numerose escursioni nel territorio armeno, tra cui camminate e scalate. La più memorabile è stata una camminata di una settimana nelle montagne armene, che comprendeva anche un'introduzione all'esplorazione di grotte. Sono stato molto felice di avere la responsabilità di gestire le escursioni sciistiche invernali presso gli impianti sciistici sovietici di Tsaghkadzor e di fornire lezioni di sci ai miei compagni. Questa esperienza mi ha insegnato a lavorare in team e a gestire situazioni di emergenza in ambienti remoti e difficili. Inoltre, mi ha permesso di scoprire le bellezze naturali dell'Armenia e di apprezzare la cultura locale.",
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
		description:
			"With a keen interest in computer science, I have been accepted into Maastricht University to pursue my bachelor's degree in the field. Maastricht's dynamic and diverse environment drew me in, offering an enriching academic experience. Beyond my love for computer science, I am also deeply aware of the climate crisis. I aspire to merge my passion for technology with my concern for the environment, seeking ways to leverage computer science to address climate science challenges. Looking ahead, I envision myself completing a bachelor's degree that provides a strong foundation in computer science. With this knowledge, I plan to pursue a Master's degree in Machine Learning, delving deeper into the fascinating world of artificial intelligence and its applications. My academic journey in Maastricht is driven by a desire to make a meaningful contribution to the intersection of computer science and climate science. I am excited to embark on this path and explore the vast possibilities that lie ahead.",
		examsubjects: [],
		projects: [
			{
				id: 'maas-4-climate',
				title: 'Maastricht for Climate',
				description:
					"Sono stato accettato all'Università di Maastricht dove mi specializzerò in ingegneria informatica. Da subito, ho iniziato a cercare opportunità per connettermi con gli studenti e la realtà ambientalista della città. Durante questa ricerca, sono entrato in contatto con gli attivisti di Maastricht for Climate (M4C), una ONG no-profit guidata dagli studenti dell'università. Dato che l'organizzazione cerca nuovi membri ogni anno per coprire le cariche più importanti, ho deciso di CANDIDARMI per diventare il nuovo presidente della ONG grazie alla mia esperienza pregressa nell'ambito dell'attivismo climatico. I membri dell'ONG mi hanno votato a favore, e il mio mandato inizierà ad agosto. Attualmente, sto lavorando attivamente all'organizzazione di eventi per il mese di settembre. Uno dei primi eventi ai quali parteciperò è l'evento di accoglienza dei nuovi studenti all'università di Maastricht, dove avrò il compito di RAPPRESENTANTE l'ONG e reclutare nuovi membri. Sono entusiasta di questo nuovo incarico e mi auguro di poter svolgere un ruolo attivo nell'organizzazione di progetti che promuovano la sostenibilità e la lotta ai cambiamenti climatici nella mia comunità universitaria.",
				url: 'https://www.maastrichtforclimate.nl/'
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
		role: 'Student',
		activity: 'campus STEM "Intro all\'Intelligenza Artificiale e Computer Vision"',
		institution: 'ASSOCIAZIONE CULTURALE "SCUOLA DI FORMAZIONE SCIENTIFICA LUIGI LAGRANGE"',
		institutionUrl: 'https://associazionelagrange.it/',
		description:
			"Sono stato uno studente del Campus STEM presso la Scuola di Formazione Scientifica Luigi Lagrange, dove ho partecipato al corso “Intro all’Intelligenza Artificiale e Computer Vision”. La mia esperienza è stata estremamente formativa, e ho imparato molte nozioni fondamentali per la mia crescita professionale. Durante il corso ho avuto l'opportunità di apprendere come utilizzare algoritmi di machine learning per guidare i movimenti di un modellino di macchina, attraverso l'uso di sensori e una serie di programmi di codifica."
	},
	// Computer camp
	{
		id: 'stem-ki',
		area: ActivityArea.computerscience,
		year: 2019,
		month: 7,
		role: 'Student',
		activity: 'campus STEM "Programmieren 4.0 - Künstliche Intelligenz"',
		institution: 'Computer Camp',
		institutionUrl: 'https://www.computercamp.de/kurse/programmieren-40',
		description:
			"Sono stato uno studente al campus PROGRAMMIEREN 4.0 KÜNSTLICHE INTELLIGENZ presso il ComputerCamp di Föckinghausen. Durante il corso, ho avuto l'opportunità di approfondire le mie conoscenze di programmazione e apprendere le basi di C# e Python, due linguaggi di programmazione essenziali per lo sviluppo di software e applicazioni. Quello che mi ha affascinato di più è stato imparare a sviluppare algoritmi di machine learning per la guida autonoma nei videogiochi. Grazie alle lezioni e alle attività pratiche, ho imparato a utilizzare gli strumenti giusti per creare algoritmi che potessero imparare dai dati e migliorare nel tempo."
	},

	// RELATED TO CLIMATE
	{
		id: 'uwcd-sustco',
		area: ActivityArea.climate,
		year: 2021,
		month: 10,
		role: 'Coordinator',
		activity: 'Sustainability Committee',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description:
			"Durante il mio anno all'estero, ho avuto l'onore di essere ELETTO per far parte della commissione sostenibilità della prestigiosa scuola internazionale UWC Dilijan College. In questa veste, ho avuto la possibilità di collaborare con la commissione per l'ORGANIZZAZIONE di una serie di progetti sulla sostenibilità, con l'obiettivo di rendere la scuola più ecologica e responsabile nei confronti dell'ambiente. In particolare, ho avuto modo di interloquire e di MEDIARE con l'amministrazione della scuola per l'implementazione di politiche sostenibili, come il risparmio di energia e l'installazione di pannelli solari, al fine di ridurre l'impatto ambientale della scuola. Inoltre, ho collaborato con il comune di Dilijan per l'implementazione di un sistema di riciclo per la scuola, in collaborazione con una ONG di Yerevan. Grazie alle mie conoscenze e alla mia passione per la sostenibilità, ho offerto il mio contributo per l'educazione degli studenti sulla questione ambientale, promuovendo la raccolta differenziata e il riciclo dei rifiuti, nonché l'adozione di comportamenti più sostenibili nella vita quotidiana. Inoltre, ho partecipato attivamente all’organizzazione di varie attività della commissione, dando il mio supporto al coordinamento e all'organizzazione di eventi legati alla sostenibilità.",
		images: [{ src: 'activities/sustco-1.jpg' }, { src: 'activities/sustco-2.jpg' }],
		url: 'https://www.uwcdilijan.org/news-events/school-news/~board/school-news/post/we-brought-millions-and-millions-of-people-onto-the-streets-david-wicker-italy-uwcd23-about-the-global-climate-strike-movement'
	},
	{
		id: 'ragazzi-irresponsabili',
		area: ActivityArea.climate,
		year: 2020,
		month: 1,
		role: 'Protagonist',
		activity: 'Documentary "Ragazzi Irresponsabili"',
		institution: 'Italia che Cambia',
		institutionUrl: 'https://www.italiachecambia.org/',
		description:
			'Sono stato fortunato ad avere l\'opportunità di incontrare Ezio Maisto, un regista che stava cercando di realizzare un documentario sul movimento Fridays for Future, e sono diventato uno dei protagonisti del documentario intitolato "Ragazzi Irresponsabili". Per un anno intero ho partecipato attivamente alle riprese, documentando le manifestazioni e le proteste per il cambiamento climatico in cui sono stato coinvolto, insieme ad altri giovani attivisti. Grazie a questo documentario ho avuto la possibilità di condividere la mia esperienza con un pubblico più vasto, dando voce alle preoccupazioni che condivido con molti altri riguardo al futuro del nostro pianeta. Sono felice di condividere che il documentario "Ragazzi Irresponsabili" è stato premiato al film festival di Cinemambiente a Torino, un importante evento dedicato ai film e ai documentari che affrontano temi ambientali, nonchè alla cinquantesima edizione del Giffoni Film Festival Il documentario è tuttora disponibile online su Infinity+ di Mediaset',
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
		role: 'Organizer',
		activity: 'UWC Climate Panel',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description:
			"Sono stato il COORDINATORE della commissione sostenibilità presso la scuola UWC Dilijan College e ho avuto l'onore di organizzare il SEMINARIO INTERNAZIONALE sul clima, chiamato 'UWC Climate Panel'. L'evento si è svolto online e ha coinvolto numerosi esperti nel campo della sostenibilità, tra cui scienziati, divulgatori e attivisti. Ho contattato personalmente ciascuno di loro per assicurarmi che fossero disponibili per parlare all'evento. L'obiettivo principale del UWC Climate Panel era di sensibilizzare la comunità internazionale sulla necessità di promuovere la sostenibilità e affrontare le problematiche globali dei cambiamenti climatici. Inoltre, si è voluto mettere in luce le difficoltà che le comunità più colpite dai cambiamenti climatici devono affrontare quotidianamente e il ruolo delle comunità indigene nella lotta per la difesa dell'ambiente e del clima. Uno degli aspetti più sfidanti dell'organizzazione del seminario è stato il coordinamento delle diverse sedi UWC sparse in tutto il mondo. Grazie a Zoom, siamo riusciti a connettere i 18 collegi UWC in modo che gli studenti potessero partecipare in tempo reale e fare domande ai relatori. Ho avuto il compito di MODERARE la discussione e di raccogliere le domande dal pubblico e dagli studenti, in modo che i relatori potessero rispondere alle loro preoccupazioni e domande.",
		images: [{ src: 'activities/uwcd-panel-12.jpeg' }]
	},
	{
		id: 'ted-countdown',
		area: ActivityArea.climate,
		year: 2021,
		month: 10,
		role: 'Speaker',
		activity: 'TED Countdown Summit',
		institution: 'TED',
		institutionUrl: 'https://countdown.ted.com/',
		description:
			"Sono stato invitato a RAPPRESENTARE Fridays For Future al TED Countdown Summit 2022 ad Edimburgo, un evento che mira a porre attenzione sulla lotta al cambiamento climatico. Ho partecipato alla conferenza incontrando numerosi attivisti da diversi paesi, tra cui Alexandria Villaseñor e Ayisha Siddiqa, con cui ho collaborato nella realizzazione di seminari sull'importanza dell'attivismo nella lotta per il clima. Durante il summit, ho MEDIATO tra il team organizzativo di TED e il gruppo di attivisti invitati nella gestione di un panel con il CEO di Shell, Ben van Beurden. Tuttavia, insieme ad un gruppo di attivisti, abbiamo deciso di BOICOTTARE il discorso di Ben van Beurden, invitando il pubblico a lasciare la sala in luce delle attività di Shell che danneggiano l'ambiente. Ho anche avuto l'opportunità di incontrare numerose personalità attivamente impegnate nella battaglia per il clima, tra cui il VICEPRESIDENTE AL GORE, la segretaria del UNFCCC PATRICIA ESPINOSA e CHRISTIANA FIGUERES, nonchè Emma Watson.",
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
		role: 'Student',
		activity: 'Oxford School of Climate Change',
		institution: 'Oxford Climate Society',
		institutionUrl: 'https://www.oxfordclimatesociety.com/',
		description:
			'Ho avuto la fortuna di partecipare al corso intensivo "Oxford Climate School" organizzato dalla Oxford Climate Society. Il corso ha offerto una panoramica completa e approfondita sui temi del cambiamento climatico e delle politiche ambientali, con un focus particolare sui modelli di sviluppo sostenibile. Gli esperti del settore hanno fornito una serie di lezioni sulle questioni ambientali e sui cambiamenti climatici, analizzando le loro cause e le possibili soluzioni. Inoltre, abbiamo avuto l\'opportunità di partecipare a discussioni e attività pratiche, mettendo in pratica ciò che avevamo appreso.',
		url: 'https://www.oxfordclimatesociety.com/the-oxford-school-of-climate-change.html'
	},
	{
		id: 'maastricht-for-climate',
		area: ActivityArea.climate,
		year: 2023,
		month: 5,
		role: 'President',
		activity: 'Maastricht for Climate',
		institution: 'Maastricht for Climate',
		institutionUrl: 'https://www.maastrichtforclimate.nl/',
		description:
			"Sono stato accettato all'Università di Maastricht dove mi specializzerò in ingegneria informatica. Da subito, ho iniziato a cercare opportunità per connettermi con gli studenti e la realtà ambientalista della città. Durante questa ricerca, sono entrato in contatto con gli attivisti di Maastricht for Climate (M4C), una ONG no-profit guidata dagli studenti dell'università. Dato che l'organizzazione cerca nuovi membri ogni anno per coprire le cariche più importanti, ho deciso di CANDIDARMI per diventare il nuovo presidente della ONG grazie alla mia esperienza pregressa nell'ambito dell'attivismo climatico. I membri dell'ONG mi hanno votato a favore, e il mio mandato inizierà ad agosto. Attualmente, sto lavorando attivamente all'organizzazione di eventi per il mese di settembre. Uno dei primi eventi ai quali parteciperò è l'evento di accoglienza dei nuovi studenti all'università di Maastricht, dove avrò il compito di RAPPRESENTANTE l'ONG e reclutare nuovi membri. Sono entusiasta di questo nuovo incarico e mi auguro di poter svolgere un ruolo attivo nell'organizzazione di progetti che promuovano la sostenibilità e la lotta ai cambiamenti climatici nella mia comunità universitaria."
	},
	{
		id: 'bocconi-school',
		area: ActivityArea.climate,
		year: 2019,
		month: 12,
		role: 'Student',
		activity: 'Bocconi Summer School - International Politics & EU for Sustainable Development',
		institution: 'Bocconi University',
		institutionUrl:
			'https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/summer+school/',
		description:
			"Dopo un processo di selezione, ho avuto l'opportunità di partecipare come studente ai corsi di 'International Politics' e 'EU for Sustainable Development' presso la Bocconi Summer School. Sono stati due corsi molto interessanti che mi hanno permesso di approfondire la mia conoscenza su questioni politiche ed economiche internazionali, nonché sulle sfide ambientali e di sviluppo sostenibile. La Bocconi Summer School è un programma estivo organizzato dalla prestigiosa Università Bocconi di Milano, dedicato a studenti universitari provenienti da tutto il mondo che desiderano approfondire le loro conoscenze in un ambiente accademico stimolante e internazionale. Durante il programma, gli studenti hanno la possibilità di scegliere tra una vasta gamma di corsi in diverse discipline, tra cui economia, finanza, management, diritto e scienze politiche.",
		images: [{ src: 'activities/tedx-1.jpg' }]
	},

	// RELATED TO LEADERSHIP
	{
		id: 'to-mun',
		area: ActivityArea.leadership,
		year: 2019,
		month: 1,
		role: 'Delegate',
		activity: 'Italian Model United Nations (Honorable Mention and Best Delegate Awards)',
		institution: 'United Network',
		institutionUrl: 'https://www.unitednetwork.it/en/home-en/',
		description:
			"Ho partecipato per due anni consecutivi all'Italian Model United Nations di Torino, un evento che simula le sessioni delle Nazioni Unite in cui studenti di tutto il mondo si riuniscono per discutere questioni globali e cercare soluzioni. Ho trovato questa esperienza estremamente stimolante e gratificante, poiché mi ha dato l'opportunità di migliorare le mie abilità di comunicazione, di lavoro di squadra e di problem-solving. Ho partecipato a diverse commissioni, tra cui la Commissione Diritti Umani e la Commissione per lo Sviluppo Sostenibile, e ho dovuto negoziare con altri delegati, prendere decisioni importanti e cercare di trovare compromessi per risolvere le questioni in esame. Inoltre, ho coinvolto anche alcuni dei miei compagni di classe in questa esperienza, aiutandoli a prepararsi per il Model United Nations e fornendo loro supporto durante l'evento. Sono stato premiato con l'HONORABLE MENTION nel mio primo anno e ho vinto il premio di BEST DELEGATE nel mio secondo anno, un riconoscimento che mi ha fatto sentire molto orgoglioso del lavoro svolto. ",
		images: [{ src: 'activities/imun-1.jpeg' }, { src: 'activities/imun-2.jpeg' }],
		url: 'https://www.unitednetwork.it/progetti/imun/imun-torino/'
	},
	{
		id: 'pascal-tutoring',
		area: ActivityArea.community,
		year: 2020,
		month: 11,
		role: 'Tutor di Informatica',
		activity: 'Progetto Tutoraggio',
		institution: 'IIS Blaise Pascal',
		institutionUrl: 'https://www.pascalgiaveno.edu.it/',
		description:
			"Ho collaborato come tutor di informatica al progetto di Tutoraggio del Pascal, avviato su iniziativa della scuola Blaise Pascal. Ho offerto ripetizioni di informatica agli studenti della scuola, sia in presenza che online durante la pandemia del COVID-19. Il mio ruolo consisteva nel potenziare gli argomenti svolti a scuola, ma anche nell'aiutare gli studenti con difficoltà specifiche nella comprensione della materia. Mi sono coordinato con la professoressa di informatica, Veronica Cinti, per organizzare le lezioni e pianificare gli argomenti da trattare. Siamo riusciti a fornire un supporto personalizzato ai ragazzi, individuando i punti deboli e offrendo lezioni mirate per affrontare le difficoltà. ",
		url: 'https://www.pascalgiaveno.edu.it/scheda-progetto/tutoraggio/'
	},
	{
		id: 'tedx-youth',
		area: ActivityArea.leadership,
		year: 2022,
		month: 4,
		role: 'Organizer',
		activity: 'TEDxYouth Conference',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description: 'general.lorem-ipsum',
		images: [{ src: 'activities/tedx-1.jpg' }],
		url: 'https://www.ted.com/tedx/events/49371'
	},
	{
		id: 'outdoor-leadership',
		area: ActivityArea.leadership,
		year: 2021,
		month: 11,
		role: 'Member',
		activity: 'Outdoor Leadership',
		institution: 'UWC Dilijan College',
		institutionUrl: 'https://www.uwcdilijan.org/',
		description:
			"Sono stato molto fortunato ad essere selectionato come membro del comitato di Outdoor Leadership alla scuola UWC Dilijan in Armenia. Ho lavorato a stretto contatto con il nostro insegnante, un veterano della guerra dei 44 giorni tra l'Armenia e l'Azerbaigian, per COORDINARE le attività sportive della scuola. È stata un'esperienza incredibile partecipare a numerose escursioni nel territorio armeno, tra cui camminate e scalate. La più memorabile è stata una camminata di una settimana nelle montagne armene, che comprendeva anche un'introduzione all'esplorazione di grotte. Sono stato molto felice di avere la responsabilità di gestire le escursioni sciistiche invernali presso gli impianti sciistici sovietici di Tsaghkadzor e di fornire lezioni di sci ai miei compagni. Questa esperienza mi ha insegnato a lavorare in team e a gestire situazioni di emergenza in ambienti remoti e difficili. Inoltre, mi ha permesso di scoprire le bellezze naturali dell'Armenia e di apprezzare la cultura locale.",
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
	language = 'Language',
	climate = 'Climate',
	computerscience = 'Computer Science',
	mooc = 'MOOC'
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
		year: 2021,
		month: 8,
		logo: 'udemy.svg',
		institutionUrl: 'https://www.udemy.com/'
	},

	// MERN
	{
		id: 'mern',
		type: CertificationType.mooc,
		title: 'MERN Stack Front to Back: Full Stack React, Redux & Node.js',
		institution: 'Udemy',
		year: 2021,
		month: 8,
		logo: 'udemy.svg',
		institutionUrl: 'https://www.udemy.com/'
	},

	// Flutter
	{
		id: 'flutter',
		type: CertificationType.mooc,
		title: 'Flutter & Dart - The Complete Guide',
		institution: 'Udemy',
		year: 2021,
		month: 8,
		logo: 'udemy.svg',
		institutionUrl: 'https://www.udemy.com/'
	},

	// Java Masterclass
	{
		id: 'java',
		type: CertificationType.mooc,
		title: 'Java Programming Masterclass',
		institution: 'Udemy',
		year: 2021,
		month: 8,
		logo: 'udemy.svg',
		institutionUrl: 'https://www.udemy.com/'
	},

	// Python Bootcamp
	{
		id: 'python',
		type: CertificationType.mooc,
		title: 'Complete Python Bootcamp',
		institution: 'Udemy',
		year: 2021,
		month: 8,
		logo: 'udemy.svg',
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

// ACTIVISM
export interface ActivismExperience {
	id: string;
	title: string;
	description: string;
	year: number;
	month: number;
	day?: number;
	location: string;
	images?: Photo[];
}

export const activism: ActivismExperience[] = [
	{
		id: 'fff-turin',
		title: 'Founded Fridays For Future Turin',
		description: 'general.lorem-ipsum',
		year: 2019,
		month: 1,
		location: 'Turin'
	},
	{
		id: 'fff-italia',
		title: 'Founded Fridays For Future Italia',
		description: 'general.lorem-ipsum',
		year: 2019,
		month: 3,
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
	{
		id: 'fff-turin',
		title: 'Foundated Fridays For Future Turin',
		description: 'general.lorem-ipsum'
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
