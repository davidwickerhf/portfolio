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
		diploma: 'International Baccalaureate (DP1)',
		description:
			'Following a rigorous selection process facilitated by the Italian UWC committee, I was awarded an academic scholarship to study at UWC Dilijan College in Armenia. Pursuing the International Baccalaureate (IB) program, I had the freedom to choose my exam subjects based on my interests and aspirations. UWC Dilijan College boasted a vibrant and multicultural environment, with students representing more than 90 different nationalities. This diversity extended to the faculty as well, with professors bringing varied backgrounds and perspectives to the classroom. However, due to unforeseen financial hardships and the resurfacing conflict between Armenia and Azerbaijan, I regrettably had to return to Italy after completing DP1 (Diploma Program Year 1). Nonetheless, the experience I gained during my time at UWC Dilijan was invaluable, exposing me to global perspectives and fostering lifelong connections with peers from around the world.',
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
				images: [{ src: 'activities/sustco-1.jpg' }, { src: 'activities/sustco-2.jpg' }],
				url: 'https://www.uwcdilijan.org/news-events/school-news/~board/school-news/post/we-brought-millions-and-millions-of-people-onto-the-streets-david-wicker-italy-uwcd23-about-the-global-climate-strike-movement'
			},

			// UWC Climate Panel
			{
				id: 'uwcd-panel',
				title: 'UWC Climate Panel',
				description:
					"Sono stato il COORDINATORE della commissione sostenibilità presso la scuola UWC Dilijan College e ho avuto l'onore di organizzare il SEMINARIO INTERNAZIONALE sul clima, chiamato 'UWC Climate Panel'. L'evento si è svolto online e ha coinvolto numerosi esperti nel campo della sostenibilità, tra cui scienziati, divulgatori e attivisti. Ho contattato personalmente ciascuno di loro per assicurarmi che fossero disponibili per parlare all'evento. L'obiettivo principale del UWC Climate Panel era di sensibilizzare la comunità internazionale sulla necessità di promuovere la sostenibilità e affrontare le problematiche globali dei cambiamenti climatici. Inoltre, si è voluto mettere in luce le difficoltà che le comunità più colpite dai cambiamenti climatici devono affrontare quotidianamente e il ruolo delle comunità indigene nella lotta per la difesa dell'ambiente e del clima. Uno degli aspetti più sfidanti dell'organizzazione del seminario è stato il coordinamento delle diverse sedi UWC sparse in tutto il mondo. Grazie a Zoom, siamo riusciti a connettere i 18 collegi UWC in modo che gli studenti potessero partecipare in tempo reale e fare domande ai relatori. Ho avuto il compito di MODERARE la discussione e di raccogliere le domande dal pubblico e dagli studenti, in modo che i relatori potessero rispondere alle loro preoccupazioni e domande.",
				images: [{ src: 'activities/uwcd-panel-12.jpeg' }],
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
		overview:
			"During my PCTO (Periodo di Collaborazione Temporanea e Obbligatoria) experience, which is a mandatory requirement for the Italian final exam, I had the opportunity to work as an intern at Mediamente Consulting. Over a period of slightly over two weeks, I dedicated myself full-time to this role. My primary task was to develop a booking system to streamline the company's rental management processes. Working closely with my supervisor, I utilized my skills in PHP and JavaScript to create a robust system. Once completed, I seamlessly integrated the booking system into the company's existing website code base. This valuable hands-on experience allowed me to apply my programming knowledge in a real-world setting, honing my technical skills and problem-solving abilities. Furthermore, it provided me with a deeper understanding of the practical applications of software development within a professional environment.",
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
		issues: [
			'Working with an existing code base written by another author posed challenges, especially since it was originally designed as a standalone static website and not a web app. To make the necessary modifications, I had to implement a Model-View-Controller (MVC) architecture from scratch using vanilla PHP and JavaScript. This involved understanding the existing code structure, identifying the key components, and redesigning them to fit the requirements of the booking system.',
			'Connecting the backend and frontend proved to be a challenge due to the absence of a framework in the original code base. This meant that managing the communication and data flow between the backend and frontend had to be handled manually. To achieve this, I relied on jQuery to handle dynamic updates to the user interface (UI) and synchronize the data with the backend. It required meticulous attention to detail and careful coordination to ensure a seamless integration between the different components of the system.',
			'One additional hurdle I faced was learning PHP on the go. Since I took on the project without prior knowledge of PHP, I had to quickly familiarize myself with the language to effectively navigate and work with the existing code base. This involved studying PHP syntax, understanding its principles, and leveraging online resources and documentation to grasp the intricacies of the language. It was a valuable learning experience that allowed me to expand my programming skills and adapt to new technologies and frameworks.'
		],
		requirements: [
			'Calendar functionality to display booked dates for each car.',
			'Widget displaying current bookings and available cars in real-time.',
			'Table showcasing all company cars with relevant details (e.g., model, availability, location, last revision).',
			'Ability for users to book a car, specifying desired dates and additional preferences.',
			'User authentication and role-based access to ensure secure booking management.',
			'Integration with a database to store and retrieve car booking information.',
			'Search and filtering options to find specific cars based on criteria (e.g., location, features).',
			'Reservation management system to handle conflicts, overlapping bookings, and car availability updates.',
			'Responsive design for seamless usage across devices (desktop, mobile, tablets).',
			'Administrative features for system maintenance, including adding/removing cars, updating car details, and generating reports.'
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
		title: 'Founded Fridays For Future Turin',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Turin'
	},
	// FFF Italia
	{
		id: 'fff-italia',
		title: 'Founded Fridays For Future Italia',
		description: 'general.lorem-ipsum',
		year: 2019,
		location: 'Italy'
	}

	// FFF international

	//EU Parliament Strasburgo

	// - Elezione delegato di FFF Torino

	// - 1a Assemblea FFF Italia (Milano)

	// - 2a Assemblea FFF Italia (Napoli)

	// - Aachen central strike

	// - Berlin meeting (Luisa)

	// - Occupazione parlamento europeo

	// - Occupazione miniera germania

	// - Lausanne International FFF Meeting

	// - TOWARDS MEETING (ma poi covid)
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
		title: 'Motivations behind the genocide',
		description:
			"The motivations behind the Armenian genocide are rooted in a combination of political, ethnic, and ideological factors. During the declining years of the Ottoman Empire, a rising tide of nationalism and ethno-religious tensions fueled the desire for a homogenous Turkish state. The Armenian population, seen as a distinct ethnic and religious minority, became scapegoats for the empire's woes. The nationalist Young Turks movement, which gained power in 1908, sought to establish a Turkish-dominated empire and viewed the Armenians as a threat. With the outbreak of World War I, the Armenians were accused of collaborating with enemy forces, providing a pretext for their targeted extermination. Political and military leaders implemented a systematic campaign of deportation, mass killings, forced labor, and starvation, aiming to eradicate the Armenian presence from their historic homeland. The genocide's motivations included territorial expansion, ethno-religious nationalism, and the desire to eliminate perceived threats to the Ottoman Empire's stability."
	},
	// Hamidian massacre
	{
		id: 'hamidian-massacre',
		title: 'Hamidian massacre',
		description:
			'The Hamidian Massacre, also known as the Armenian Massacres of 1894-1896, refers to a series of violent attacks against the Armenian population in the Ottoman Empire during the rule of Sultan Abdul Hamid II. The massacres were primarily motivated by religious and ethnic tensions, as well as the desire to suppress Armenian nationalist aspirations. The first major wave of massacres occurred in 1894 in the city of Sasun, followed by widespread violence targeting Armenians in various regions of the empire. The deadliest phase took place between 1895 and 1896, with massacres occurring in cities such as Istanbul, Trebizond, Van, and Diyarbakir. While specific figures are disputed, it is estimated that over 300.000 Armenians were killed during this period. The atrocities involved mass killings, forced conversions, rape, looting, and destruction of Armenian villages and churches. The Hamidian Massacre served as a prelude to the later Armenian Genocide in 1915, highlighting the persistent persecution and violence faced by the Armenian population in the Ottoman Empire. The events of the Hamidian Massacre played a significant role in shaping the Armenian national consciousness and the subsequent struggle for recognition and justice.',
		url: 'https://www.armenian-genocide.org/hamidian.html',
		images: [{ src: 'civics/hamidian-1.jpeg' }]
	},
	// Odio raziale, prima guerra mondiale
	{
		id: 'ww1',
		title: '1915 Genocide',
		description:
			'The Armenian Genocide, also known as the Armenian Holocaust, was a systematic extermination campaign carried out by the Ottoman Empire during World War I. The genocide aimed to eliminate the Armenian population and involved mass killings, forced deportations, and death marches.  In 1915, the Ottoman government enacted the Tehcir Law, which authorized the deportation and relocation of Armenians from their ancestral lands. Under the pretext of national security, Armenians were rounded up from their homes, separated from their families, and forced to march long distances to detention centers and concentration camps. These forced deportations resulted in widespread death and suffering.  The deportations were often accompanied by extreme violence, with Armenians subjected to brutal conditions, starvation, and massacres along the way. The marches of death referred to the grueling journeys endured by the deportees, where countless Armenians perished due to exhaustion, exposure to harsh elements, and systematic killings by Ottoman forces. Estimates of the number of Armenian victims vary, but it is widely accepted that over one million Armenians lost their lives during the genocide. The atrocities included mass killings, executions, forced labor, sexual violence, and the destruction of Armenian cultural and religious heritage.',
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
		title: 'Legacy and rememberance',
		description:
			'The Armenian Genocide remains a contentious issue, with denial and lack of international recognition creating ongoing debates surrounding its historical and political implications. Efforts for acknowledgment, justice, and remembrance continue as part of the Armenian struggle for recognition and the prevention of future genocides. The true scale of the Armenian Genocide may never be fully known due to the deliberate destruction of evidence and ongoing denial by some parties. \n\n The recognition of the Armenian Genocide has been a complex and contentious issue. Despite overwhelming evidence and scholarly consensus, the recognition of the genocide has faced significant challenges, primarily due to political considerations and denial by the Turkish government. Several countries, including Argentina, Belgium, Canada, France, Germany, Italy, the Netherlands, Russia, Sweden, and Uruguay, have officially recognized the Armenian Genocide. The European Parliament, the Council of Europe, and the World Council of Churches have also acknowledged the genocide. However, recognition has been inconsistent, and some nations have been reluctant to use the term "genocide" for fear of straining diplomatic relations with Turkey. The Turkish government, successor to the Ottoman Empire, vehemently denies the term "genocide" and contends that the events were a result of wartime conditions. The denial of the Armenian Genocide has had lasting consequences, affecting the healing process, justice for the victims, and preventing the prevention of future genocides.  The Armenian diaspora, along with scholars, activists, and human rights organizations, continue to advocate for wider recognition and acknowledgment of the genocide. Efforts for recognition have gained momentum in recent years, with more countries, institutions, and public figures openly acknowledging the Armenian Genocide. The recognition and remembrance of the Armenian Genocide are crucial steps in confronting the past, honoring the victims, and preventing similar atrocities from occurring in the future. The Armenian Genocide was recognized by the United States of American only in 2023',
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
		title: 'Artsakh and the 1988 war with Azerbaijan',
		description:
			'The Artsakh (Nagorno-Karabakh) conflict and the war between Armenia and Azerbaijan in 1988 were pivotal events in the region. The conflict emerged when the Nagorno-Karabakh Autonomous Oblast, primarily inhabited by ethnic Armenians, expressed its desire to join Armenia. In 1988, the regional legislature in Nagorno-Karabakh passed a resolution requesting the transfer of administrative control from Azerbaijan to Armenia. This led to protests and demonstrations, escalating tensions between the two communities. The conflict intensified in 1991 when both Armenia and Azerbaijan declared independence following the collapse of the Soviet Union. Armed clashes erupted, resulting in a full-scale war between the two countries. The war witnessed significant military operations, including the shelling of cities, ethnic cleansing, and large-scale displacement of people. The war lasted until 1994 when a ceasefire agreement was signed, leaving Nagorno-Karabakh and several surrounding regions under the control of ethnic Armenian forces. Despite the ceasefire, the conflict remained unresolved, and sporadic clashes continued over the years, leading to casualties and tensions between Armenia and Azerbaijan.',
		images: [{ src: 'civics/artsakh-1.jpeg' }, { src: 'civics/artsakh-2.png' }]
	},

	// 44 day war 2021
	{
		id: '44-war',
		title: '44 day war of 2020',
		description:
			'The 44-day war in 2021 between Armenia and Azerbaijan, often referred to as the Second Nagorno-Karabakh War, was a significant escalation of the longstanding conflict over the Nagorno-Karabakh region. The war began on September 27, 2020, when intense fighting broke out along the line of contact between Armenian and Azerbaijani forces. The conflict saw heavy artillery shelling, air strikes, and ground offensives from both sides. The use of advanced weaponry, including drones, played a significant role in the hostilities. Azerbaijan made significant territorial gains during the war, recapturing several districts surrounding the Nagorno-Karabakh region that had been under Armenian control since the early 1990s. The Azerbaijani forces also advanced into parts of Nagorno-Karabakh itself, including the strategically important city of Shusha. The war resulted in a high number of casualties on both sides, including civilians, and led to the displacement of thousands of people. There were also reports of war crimes and human rights abuses committed by both Armenian and Azerbaijani forces. A ceasefire agreement brokered by Russia was signed on November 10, 2020, effectively ending the active phase of the conflict. Under the agreement, Azerbaijan retained control over the territories it had recaptured during the war, while a Russian peacekeeping contingent was deployed to oversee the ceasefire and ensure stability in the region. The war had significant political and humanitarian implications, reshaping the balance of power in the region and prompting discussions about the future status of Nagorno-Karabakh. Efforts to address the underlying issues and find a lasting peaceful solution to the conflict continue through diplomatic negotiations mediated by the OSCE Minsk Group co-chairs (Russia, France, and the United States).',
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
		title: 'Further conflicts in 2022',
		description:
			'In recent events, Azerbaijan has launched attacks in various directions near the borders of Armenia, specifically targeting positions in Vardenis, Goris, Kapan, and Jermuk. The province of Syunik in southern Armenia has been occupied as a result. These attacks have not been limited to specific areas but have occurred along the entire Armenia-Azerbaijan border, including near Dilijan. Additionally, in response to the escalating conflict, young men aged 18 and above have been recruited and deployed to the front lines. The situation remains tense and continues to evolve as both sides are engaged in military actions.',
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
		title: 'Ongoing blockade of Artsakh',
		description:
			'The Lachin corridor, serving as the only passage connecting inland Armenia with Artsakh, has been effectively blocked by Azeri activists, whose actions have now been succeeded by the presence of Azerbaijani soldiers. This blockade has resulted in the isolation of Artsakh for an extended period exceeding 150 days. Consequently, the region is grappling with a severe scarcity of essential supplies, including food and medicine, which have been unable to reach those in need. Despite concerted efforts to provide humanitarian assistance, the delivery of aid has been obstructed, further exacerbating the already precarious circumstances faced by the people of Artsakh. The ongoing blockade has cast a deep shadow over the region, highlighting the urgent need for a resolution and the restoration of access to vital resources and support.',
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
		title: 'Portfolio',
		year: 2023,
		subtitle: 'Personal presentation portfolio in Svelte',
		shortDescription:
			'Motivated by the requirement for a personal website for my maturity exam, I embraced the challenge and developed one using the Svelte framework.',
		longDescription:
			"To push my boundaries, I chose to step out of my comfort zone and develop my portfolio website using Svelte and SvelteKit. Prior to implementation, I meticulously designed the website's layout and appearance using Figma. To cater to a wider audience, the website incorporates full translation capabilities between English and Italian, made possible through the integration of the i18n library. In terms of user experience, the website offers both a light and dark mode, allowing visitors to toggle between the two based on their preference. Ensuring easy maintenance and scalability, all the content on the website is dynamically rendered from a single source of truth. This setup enables hassle-free modifications to the website's content without the need to make changes to the source code itself.",
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
			"Site-wide state: Managing the state of the dark theme and language preference presented a challenge. I leveraged Svelte Stores to handle this, ensuring that user preferences were saved locally in the browser's local storage.",
			'Loading content dynamically: Rather than hard-coding content and to enhance reusability, I sought a solution to load the website\'s content from an external source of truth. To avoid the need for a web server, I opted to utilize a "constants.ts" file. This file, structured based on TypeScript models, allowed for dynamic content rendering across the site.',
			'Responsive design: Crafting a responsive layout that adapted seamlessly across various devices and screen sizes was a significant challenge. I employed CSS media queries and flexible grid systems to achieve a visually appealing and functional design that catered to different viewing experiences.'
		],
		github: 'https://github.com/davidwickerhf/portfolio'
	},
	// Mai Checkers
	{
		id: 'mai-checkers',
		title: 'Mai Checkers',
		year: 2023,
		subtitle: 'Online checkers game',
		shortDescription:
			'Encouraged by my computer science teacher, I developed a checkers game. Initially, I considered using Java for local development, but ultimately decided to leverage web technologies like TypeScript and Next.js',
		longDescription:
			"In my pursuit of challenging myself in developing the Checkers game, I decided to push the boundaries by creating a 3D interface. To accomplish this, I utilized Blender to design 3D models of the game pieces. To implement the 3D elements and render the models, I employed the open-source libraries Three.js and react-three-fiber. These powerful tools allowed me to create a dynamic and immersive 3D board for the game. To manage the application's state, I chose to utilize Jotai, as its atom-based state management system perfectly suited the requirements of the project. Its ease of use facilitated smooth integration within the game. Building upon my prior experience, I implemented the game using React and Next.js. These technologies provided a solid foundation and allowed me to leverage my existing knowledge effectively. Finally, thanks to Vercel, I was able to host the web page, making the game accessible and available for others to enjoy online.",
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
			"State management: The challenge involved refining the way the game's state was managed. I recognized the need for a more structured approach and created TypeScript models to represent different components of the state, such as BoardState, PieceState, and PlayerState.",
			"Calculating possible moves: Implementing an algorithm to determine all possible moves a player could make posed a challenge. I developed a recursive path-finding algorithm that analyzed available moves, filtered them based on the game state, and sorted them by the number of steps the piece would take. I drew inspiration from Dijkstra's algorithm while creating this algorithm.",
			'3D modeling and rendering: Creating 3D models of the checkers game pieces using Blender required skill and attention to detail. Additionally, implementing the rendering of these 3D models on the game board using Three.js and react-three-fiber was a technical challenge.',
			'Integrating state management with 3D interface: Combining the state management system, Jotai, with the 3D interface created complexities that needed to be addressed. Ensuring smooth communication and synchronization between the game state and the 3D elements required careful coordination.'
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
		subtitle: 'Personal online treasure hunt for saint-valentine',
		shortDescription:
			"In celebration of Saint Valentine's Day and the desire to do something special for my long-distance relationship, I embarked on the creation of an online treasure hunt. This interactive experience allows the user to uncover the next letter or clue by solving a series of engaging puzzles",
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
		subtitle: 'Personal online treasure hunt for saint-valentine',
		shortDescription:
			'Mobile application that enables students to track and categorize their decisions.',
		longDescription:
			'Designed for Android using Flutter, this app enables students to track and categorize their decisions, revealing correlations between past choices. By visualizing decision patterns, it promotes self-reflection and informed decision-making. With an intuitive interface, it empowers students to enhance their decision-making skills and cultivate self-awareness. Whether for academic, career, or personal choices, this app serves as a valuable tool to facilitate proactive and mindful choice management.',
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
		subtitle: 'Personal online treasure hunt for saint-valentine',
		shortDescription:
			'This open-source Python library enables developers to programmatically access Instagram features, providing a seamless way to integrate Instagram functionalities into their own applications and projects.',
		longDescription:
			"Developed in Python 3, this library utilizes Selenium and Chromedrivers to scrape Instagram and emulate user interactions. It offers programmatic access to Instagram's functionalities, including logging in, following users, liking posts, sending DMs, and posting on the feed. The library has gained significant popularity, with over 140k downloads by developers worldwide. Its ease of use and comprehensive feature set make it a valuable tool for integrating Instagram features into various projects and applications.",
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
		description:
			"Ho avuto l'opportunità di incontrare Katie Eder, un'avvocato che si occupa di questioni ambientali e della difesa degli attivisti, dopo che ho riscontrato problematiche legali dovute alla mia partecipazione all'occupazione del parlamento europeo. Grazie al suo supporto, ho poi avuto la fortuna di partecipare ad un incontro con attivisti presso la sede della Rockefeller Foundation a Bellagio, dove ho potuto discutere con attivisti provenienti da diverse parti del mondo, impegnati in battaglie ambientali simili alla mia. I partecipanti dell'incontro includevano Ka Hsaw Wa, un attivista birmano che da una vita lotta per contrastare le lobby di Exxon Mobil, e Farhana Yamin, avvocato per Extinction Rebellion. Abbiamo avuto l'opportunità di scambiare idee e confrontarci sulla migliore strategia da adottare per combattere le cause ambientali che ci stanno a cuore. In seguito, ho partecipato ad un'intervista che è stata inclusa nel libro scritto da Katie Eder e Mark Gevisser, intitolato 'The Revolution Will Not Be Litigated'. Il libro presenta una prefazione di Jane Fonda, una recensione di Greta Thunberg e una dell'ex preside della Yale Law School.",
		url: 'https://www.amazon.it/Revolution-Will-Not-Litigated-English-ebook/dp/B0C1W1XZLG/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZBK1K5POZ02S&keywords=the+revolution+will+not+be+litigated&qid=1686644886&sprefix=the+revolution+will+not+be+litigated,aps,113&sr=8-1',
		image: 'revolution.jpeg'
	},
	{
		id: 'stonesoup',
		title: 'Stone Soup for a Sustainable World: Life-Changing Stories of Young Heroes',
		authors: ['Marianne Larned'],
		publisher: 'Stone Soup Institute',
		year: 2021,
		description:
			"Sono entrato in contatto con l'autrice Marianne Larned, che stava scrivendo un libro sui cambiamenti climatici e sugli attivisti che si battono per preservare l'ambiente. Sono stato onorato di essere incluso nel libro assieme ad altri 100 attivisti per il clima. Questo libro è stato poi utilizzato come fonte di ispirazione per la realizzazione di un programma di lezioni sul cambiamento climatico e sull'attivismo nelle scuole del Massachusetts, grazie all'organizzazione non governativa \"Stone Soup for a Sustainable World\". La mia esperienza come attivista è stata utilizzata per sviluppare un curriculum educativo interattivo che ha aiutato a diffondere la consapevolezza sul cambiamento climatico e sulle azioni che possiamo intraprendere per proteggere l'ambiente. Sono stato particolarmente felice di apprendere che il libro ha ricevuto recensioni positive da personaggi come Matt Damon, Danny Glover e Jane Goodall, il che dimostra l'importanza e la rilevanza dei temi affrontati nel libro.",
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
