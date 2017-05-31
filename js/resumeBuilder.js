var work = {
    "jobs": [{
            "employer": "Freelancer",
            "title": "Freelancer",
            "location": "Berlin, DE",
            "dates": "2017",
            "description": "lorem..."
        },
        {
            "employer": "Rocket Internet SE",
            "title": "Head of Customer Systems Operations",
            "location": "Berlin, DE",
            "dates": "2015-2016",
            "description": "lorem..."
        },
        {
            "employer": "audibene GmbH",
            "title": "Head of Finance & Controlling, PO Salesforce.com",
            "location": "Berlin, DE",
            "dates": "2013-2015",
            "description": "yoyo"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Thermondo",
            "dates": "2017",
            "description": "Salesforce Rollout",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Movinga",
            "dates": "2017",
            "description": "Business Development - Sales Focus",
            "images": ["images/197x148.gif"]
        }
    ]
};

var bio = {
    "name": "Jasper Roll",
    "role": "Freelancer",
    "welcomeMessage": "Hello to my CV",
    "biopic": "images/jaro-q-600_medium_2x.jpg",
    "contacts": {
        "mobile": "+49123456789",
        "email": "jasper.roll@omnify.de",
        "github": "jRsoLi",
        "twitter": "Ja_Roll",
        "location": "Berlin, DE",
    },
    "skills": ["Salesforce", "Business"]
};

var education = {
    "schools": [{
            "name": "WHU",
            "location": "Vallendar, DE",
            "degree": "Bachelor of Science",
            "dates": "2011-2013",
            "url": "http://www.whu.edu",
            "majors": ["Business Administration", "Finance"]
        },
        {
            "name": "UNC - Kenan Flegler Business School",
            "location": "Chapel Hill, NC, USA",
            "degree": "Study Abroad Semester",
            "dates": "2015",
            "url": "http://www.unc.edu",
            "majors": ["Business Administration"]
        }
    ],
    "onlineCourses": [{
            "title": "Frontend Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        },
        {
            "title": "Python Course",
            "school": "Coursera",
            "dates": "2016",
            "url": "http://www.coursera.com"
        }
    ]
};

bio.display = function() {
    //Header Information

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    function displayContactInfo() {
        formattedContactInfo.forEach(function(info) {
            $("#topContacts").append(info);
            $("#footerContacts").append(info);
        });
    }

    function displaySkills() {
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
    }

    displayContactInfo();
    displaySkills();
};

bio.display();

work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job) {

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedWorkEmployerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
};

work.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(project) {

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedProjectImage);
            });
        });
    }
};

projects.display();

education.display = function() {

    function displaySchools() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLonlineClasses.replace("Online Classes", "Schools"));
            $("#education").append(HTMLschoolStart);

            education.schools.forEach(function(school) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);

                school.majors.forEach(function(major) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(formattedSchoolMajor);
                });

            });
        }
    }

    function displayCourses() {
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);

            education.onlineCourses.forEach(function(course) {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            });
        }
    }

    displaySchools();
    displayCourses();
};

education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#internationalize").append(internationalizeButton);

$("#mapDiv").append(googleMap);
