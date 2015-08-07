var skills = ["HTML", "CSS", "Python", "Django", "Java", "Android Development", "JavaScript", "Jquery"];

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
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "A test",
			"dates": 2015,
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
			"images": ["images/test.png", "images/test1.png"]
		},
		{
			"title": "A test",
			"dates": 2015,
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
			"images": ["images/test.png", "images/test1.png"]
		},
		{
			"title": "A test",
			"dates": 2015,
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
			"images": ["images/test.png", "images/test1.png"]
		}
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

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedTime = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var toAppend = formattedTitle + formattedTime + formattedDescription;

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

	var formattedMobile = HTMLmobile.replace("%data%", 123456789);
	var formattedEmail = HTMLemail.replace("%data%", "adhyan2095@gmail.com");
	var formattedTwitter  = HTMLtwitter.replace("%data%", "@tech_adhyan");
	var formattedGithub = HTMLgithub.replace("%data%", "ad-os");
	var formattedLocation = HTMLlocation.replace("%data%", "Noida");
	var toAppend = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;

	$("#footerContacts").append(toAppend); 
}

bio.footer();
