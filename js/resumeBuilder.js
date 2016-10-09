var name = "Madison Hug";
var role = "Web Designer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(HTMLskillsStart);
//$("#education").append(HTMLschoolStart);
//$("#education").append(HTMLonlineClasses);

var work = {
	"jobs": [{
		"employer": "DietDirect",
		"title": "Graphic Designer",
		"location": "Wilmington, NC",
		"dates": "2015-Present",
		"description": "Graphic Designer in the marketing department. Managing, creating, and scheduling emails for 3 company websites."
	}, {
		"employer": "Big Wolf Designs",
		"title": "Web and Graphic Designer",
		"location": "Wilmington, NC",
		"dates": "2014-2015",
		"description": "I was the owner of this small company. Designing all graphic and website projects. Focused mainly on logos and custom Wordpress sites for clients."
	}, {
		"employer": "Queensboro Co.",
		"title": "Graphic Designer",
		"location": "Wilmington, NC",
		"dates": "2014",
		"description": "Graphic Designer for marketing department. Created banner ads, color correction for product images, emails, and flyers."
	}, {
		"employer": "Huify",
		"title": "Graphic Intern",
		"location": "Wilmington, NC",
		"dates": "2013",
		"description": "Graphic Designer with marketing firm. Worked alongside owners and other interns to create SEO eBooks, blog posts, maintain social media accounts."
	}]
};

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEmployers = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

	$(".work-entry:last").append(formattedEmployers);
};

var skills = {
	"skills": ["HTML,", " CSS,", " Wordpress,", " Javascript,", " Flash,", " Photoshop,", " Illustrator,", " Magento,", " Email Branding & Management"]
};

$("#skills").append(skills.skills);

var education = {
	"schools": [{
		"name": "Full Sail University",
		"degree": "BS",
		"major": "Web Design and Development"
	}],
	"onlineCourses": [{
		"name": "Udacity",
		"degree": "Front-End Web Development"
	}]
};

for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	var formattedSchoolDegree = formattedSchool + formattedMajor + formattedDegree;

	$(".education-entry:last").append(formattedSchoolDegree);
};

for (online in education.onlineCourses) {
	$("#education").append(HTMLonlineClasses);

	var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].name);
	var formattedonlineDegree = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].degree);
	var formattedonlineEntry = formattedonlineSchool + formattedonlineDegree;

	$(".education-entry:last").append(formattedonlineEntry);
};

var contact = {
	"contact": [{
		"name": "Madison Hug",
		"phone": "9102008969",
		"email": "hug.v.mad2013@gmail.com"
	}]
};
$("#footerContacts").append(contact.contact);




