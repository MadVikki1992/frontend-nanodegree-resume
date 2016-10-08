var name = "Madison Hug";
var role = "Web Designer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (skills === true){ $("#skills").append(HTMLskillsStart)}

var experience = {
	"experience": [{
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

$("#workExperience").append(experience);

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

$("#education").append(education);

var contact = {
	"contact": [{
		"name": "Madison Hug",
		"phone": "9102008969",
		"email": "hug.v.mad2013@gmail.com"
	}]
};
$("#footerContacts").append(contact);




