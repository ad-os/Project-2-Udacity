var skills = ["HTML", "CSS", "60 FPS Rendering", "JavaScript", "Critical Rendering Path", "Object Oriented Programming", "Chrome developer tools", "Jasmine", "HTML5 Canvas", "Jquery",
	"JavaScript Testing framework", "Bootstrap", "GruntJs", "Knockout", "Python", "Java", "Django"];

var bio = {
	"name": "Adhyan",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "+919560319498",
		"email": "adhyan2095@gmail.com",
		"github": "ad-os",
		"twitter": "@tech_adhyan",
		"location": "Noida"
	},
	"welcomeMessage": "Keep Trying! Keep Learning! and follow your dreams.",
	"biopic": "images/adhyan.jpg",
	"skills": skills
};

var education = {
	"schools": [
		{
			"name": "Jamia Millia Islamia, New Delhi - India",
			"location": "New Delhi",
			"degree": "B.Tech in CS",
			"majors": [],
			"dates": 2017,
			"url": "jmi.ac.in"
		}
	],
	"onlineCourses": [
		{
			"title": "The Complete Web Developer Course",
			"school": "Udemy",
			"date": 2015,
			"url": "https://www.udemy.com/complete-web-developer-course/learn/",
		},
		{
			"title": "6.00.1x: Introduction to Computer Science and Programming Using Python",
			"school": "Edx",
			"date": 2014,
			"url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x7",
		}
	]
};

var work = {
	jobs: [
		{
			"employer": "Jamia Millia Islamia",
			"title": "Student",
			"location": "New Delhi",
			"dates": "2013 - May 2017",
			"description": "I am a passionate geek in the field of computer science.I like to explore different areas in the computer's field whether it is related to algorithms or development of mobile/web.Building real life projects fascinates me:-).The curiosity of learning and making real world projects entails me to learn new technologies every other day.The most awesome thing I like about myself is that I get motivated too often which encourages me to work hard."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Portfolio-FrontEnd",
			"link": "http://ad-os.github.io/Portfolio/",
			"dates": 2015,
			"description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"image": "images/portfolio-fend.png",
			"githublink": 'https://github.com/ad-os/Portfolio',
		},
		{
			"title": "Neighborhood-Map",
			"link": "http://ad-os.github.io/Neighborhood-Map/",
			"dates": 2015,
			"description": "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and instagram APIs.",
			"image": "images/neighborhood-map.png",
			"githublink": 'https://github.com/ad-os/Neighborhood-Map',
		},
		{
			"title": "Arcade-Game",
			"link": "http://ad-os.github.io/Arcade-Game/",
			"dates": 2015,
			"description": "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
			"image": "images/ArcadeGame.png",
			"githublink": 'https://github.com/ad-os/Arcade-Game',
		},
		{
			"title": "Feed Reader",
			"link": "http://ad-os.github.io/feedreader/",
			"dates": 2015,
			"description": "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
			"image": "feedReader.png",
			"githublink": 'https://github.com/ad-os/feedreader',
		},
		{
			"title": "Website Optimization",
			"link": "ad-os.github.io/Website-Optimization",
			"dates": 2015,
			"description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
			"image": "portfolioTemplate.png",
			"githublink": 'https://github.com/ad-os/Website-Optimization',
		},
	]
};

bio.display = function() {

	var name =  bio.name;
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var toAppend = formattedBioPic + formattedName + formattedRole + formattedWelcomeMessage;

	$("#header").append(toAppend);

	if (bio.skills.length) {
		$("#header").append(HTMLskillsStart);
		for (var i in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill); 
		}	
	}
}

bio.display();

work.display = function () {

	var length;
	length = work.jobs.length;

	for (var i = 0 ; i < length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		var formattedEmployerTitle = formattedWork + formattedTitle;
		var formattedTime = HTMLworkDates.replace("%data%", work.jobs[i].dates)
		var toAppend = formattedEmployerTitle + formattedTime + formattedDescription;

		$(".work-entry:last").append(toAppend);
	}
}

work.display();

function inName() {
	var list = name.split(" ");
	var firstName = list[0];
	var lastName = list[1];
	firstName = firstName[0].toUpperCase();
	lastName = lastName.toUpperCase();
	var finalName = firstName + " " + lastName;
	return finalName;
}

projects.display = function() {

	var length;
	length = projects.projects.length;

	for (var i  = 0; i < length; i++) {

		$("#projects" + (i)).append(HTMLprojectStart);
		$('.project' + i + '-desc').text(projects.projects[i].description);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedLink = HTMLprojectLink.replace("#", projects.projects[i].link);
		var formattedTime = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var formattedGithubLink = HTMLgithubLink.replace("#", projects.projects[i].githublink);
		var toAppend = formattedTitle + formattedLink + formattedGithubLink;

		$(".project-entry:last").append(toAppend);
	}
}

projects.display();

education.display = function() {

	var length;
	var toAppend;
	$("#map-div").append(googleMap);
	length = education.schools.length;

	for (var i = 0; i < length; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		toAppend = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates;

		$(".education-entry:last").append(toAppend);
	}

	$("#education:last").append(HTMLonlineClasses);
	length = education.onlineCourses.length;

	for (var i = 0; i < length; i++) {

		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		toAppend = formattedOnlineTitle + formattedOnlineSchool + formattedDate + formattedOnlineUrl;

		$(".education-entry:last").append(toAppend);

	}
}

education.display();

bio.footer = function () {

	var formattedMobile = HTMLmobile.replace("%data%", "+91956031948");
	var formattedEmail = HTMLemail.replace("%data%", "adhyan2095@gmail.com");
	var formattedTwitter  = HTMLtwitter.replace("%data%", "@tech_adhyan");
	var formattedGithub = HTMLgithub.replace("%data%", "ad-os");
	var formattedLocation = HTMLlocation.replace("%data%", "Noida");
	var toAppend = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;

	$("#footerContacts").append(toAppend); 
}

bio.footer();
