import { images } from "./constants";

export const abouts = [
	{
		id: "1",
		title: "Web Development",
		description:
			"I'm a JavaScript developer with a good understanding of OOP principles, and I have a solid foundation in web development.",
		imageUrl: images.about02,
	},
	{
		id: "2",
		title: "Frontend Developer",
		description:
			"I am a frontend developer with a passion for building beautiful and functional web applications.",
		imageUrl: images.about01,
	},
];

export const skills = [
	{ id: "1", name: "HTML", icon: images.html },
	{ id: "2", name: "CSS", icon: images.css },
	{ id: "3", name: "BootStrap", icon: images.bootstrap },
	{ id: "4", name: "Sass", icon: images.sass },
	{ id: "5", name: "Material UI", icon: images.material },
	{ id: "6", name: "Tailwind", icon: images.tailwind },
	{ id: "7", name: "JavaScript", icon: images.javascript },
	{ id: "8", name: "React JS", icon: images.react },
	{ id: "9", name: "Redux Toolkit", icon: images.redux },
	{ id: "10", name: "Git", icon: images.git },
];

export const experiences = [
	{
		id: "1",
		year: "2021",
		works: [
			{
				id: "1",
				name: "work 1",
				title: "Frontend Developer",
				company: "Freelancing",
				description: "I worked as a frontend developer",
			},
		],
	},
	{
		id: "2",
		year: "2022",
		works: [
			{
				id: "2",
				name: "work 2",
				title: "React Developer",
				company: "Side Project",
				description:
					"I worked on LostChild: A platform to help recover missing and abducted children",
			},
			{
				id: "3",
				name: "work 3",
				title: "Frontend Developer",
				company: "Smart Cards Applications",
				description: "I worked as a Frontend developer - React Js",
			},
		],
	},
	{
		id: "3",
		year: "2023",
		works: [
			{
				id: "4",
				name: "work 4",
				title: "Frontend Developer",
				company: "Damen E-payment",
				description: "I am currently working as a Frontend developer",
			},
		],
	},
];

export const testimonials = [
	{
		id: "1",
		name: "Ahmed",
		company: "DXC",
		imageUrl: images.test,
		feedback: "Great job, would recommend!",
	},
	{
		id: "2",
		name: "Mohamed",
		company: "Amazon",
		imageUrl: images.test,
		feedback: "Bahaa is a good developer!",
	},
];

export const brands = [
	{ id: "1", name: "Smart Cards", imageUrl: images.smart },
	{ id: "2", name: "Damen E-Payments", imageUrl: images.damen },
];

export const projects = [
	{
		id: "1",
		title: "Expense Tracker",
		description: "React Js web app to track expenses",
		projectLink: "https://by-expense-tracker.netlify.app/",
		codeLink:
			"https://github.com/bahaayoussof/react-the-complete-guide/tree/master/expenses-tracker",
		imageUrl: images.expensesTracker,
		tags: ["React JS", "All"],
	},
	{
		id: "2",
		title: "ConFusion",
		description: "A reservation web portal",
		projectLink: "",
		codeLink: "https://github.com/bahaayoussof/conFusion",
		imageUrl: images.confusion,
		tags: ["Bootstrap", "All"],
	},
	{
		id: "3",
		title: "Menu",
		description: "Menu web app (restaurant menu)",
		projectLink: "",
		codeLink: "https://github.com/bahaayoussof/react-projects/tree/master/05-menu",
		imageUrl: images.menu,
		tags: ["React JS", "All"],
	},
	{
		id: "4",
		title: "Color Generator",
		description: "Web app helps you to generate color",
		projectLink: "https://bahaa-color-generator.netlify.app/",
		codeLink: "https://github.com/bahaayoussof/react-projects/tree/master/09-color-generator",
		imageUrl: images.colorGenerator,
		tags: ["React Js", "All"],
	},
	{
		id: "5",
		title: "Kanban",
		description: "Todo List",
		projectLink: "",
		codeLink: "https://github.com/bahaayoussof/kanban-board",
		imageUrl: images.kanban,
		tags: ["React JS", "Web App", "All"],
	},
	{
		id: "6",
		title: "Material Blog",
		description: "ReactJs Web blog Using Material UI",
		projectLink: "https://material-template-sand.vercel.app/",
		codeLink: "https://github.com/bahaayoussof/material-template",
		imageUrl: images.materialTemp,
		tags: ["Material UI", "All", "Web App", "React JS"],
	},
	{
		id: "7",
		title: "Admin Dashboard",
		description: "ReactJs admin dashboard",
		projectLink: "https://by-admin-dashboard.vercel.app/",
		codeLink: "https://github.com/bahaayoussof/admin-dashboard",
		imageUrl: images.dashboard,
		tags: ["React JS", "Material UI", "All", "Web App"],
	},
	{
		id: "8",
		title: "Snapgram",
		description: "ReactJs instagram clone",
		projectLink: "https://snapgram-by.vercel.app/",
		codeLink: "https://github.com/bahaayoussof/snapgram",
		imageUrl: images.snapgram,
		tags: ["React JS", "Tailwind", "All", "Web App"],
	},
];
