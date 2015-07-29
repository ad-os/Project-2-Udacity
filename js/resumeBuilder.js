/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ["HTML", "CSS", "Python", "Django", "Java", "Android Development", "JavaScript", "Jquery"]

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
	"picture URL": "images/adhyan.jpg",
	"welcome Message": "Keep Trying!, Keep Learning! and follow your dreams.",
	"skills": skills
};

var work = {
	jobs: [
		{
			"position": "Student",
			"employer": "Jamia Millia Islamia",
			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"time": "2013 - May 2017"
		},
	]
};

var education = {
	"schools": [
		{
			"name": "Jamia Millia Islamia",
			"location": "New Delhi",
			"majors": ["CS"]
		},
		{
			"name": "City Montessori School",
			"location": "Lucknow"
		},
		{
			"name": "GMSSS",
			"location": "Chandigarh"
		}
	],
	"onlineCourses": [
		{
			"title": "Python Django Course",
			"school": "Udemy",
			"dates": 2014
		},
		{
			"title": "Web Development Course",
			"school": "Udemy",
			"dates": "2015"	
		}

	]
};

var projects = {
	"projects": [
		{
			"title": "A test",
			"date": 2015,
			"description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
			"images": ["images/test.png", "images/test1.png"]
		}
	]
};



var name =  "Adhyan Srivastava";
var formattedBioPic = HTMLbioPic.replace("%data%", "images/adhyan.jpg");
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", "Keep Learning!");

$("#header").append(formattedBioPic);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedWelcomeMessage);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill); 
	}
}

function displayWork () {

	for (i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		var formattedEmployerTitle = formattedWork + formattedTitle;
		var formattedTime = HTMLworkDates.replace("%data%", work.jobs[i].time)

		$(".work-entry").append(formattedEmployerTitle);
		$(".work-entry").append(formattedTime);
		$(".work-entry").append(formattedDescription);
	}
}

displayWork();

$("#main").append(internationalizeButton);

function inName() {
	var list = name.split(" ");
	var firstName = list[0];
	var lastName = list[1];
	firstName = firstName[0].toUpperCase();
	lastName = lastName.toUpperCase();
	var finalName = firstName + " " + lastName;
	return finalName;
}

projects.display = function () {

	for (var i in projects.projects) {


		console.log("Adhyan");
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);

		var formattedTime = HTMLprojectDates.replace("%data%", projects.projects[i].date);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

		$(".project-entry").append(formattedTitle);
		$(".project-entry").append(formattedTime);
		$(".project-entry").append(formattedDescription);
	}
}

projects.display();

$("#map-div").append(googleMap);
