var inName = function() {
  return (bio.name);
};

var bio = {
  "name": "Princess Ruthie",
  "role": "Web Developer",
  "contacts": {
    "mobile": "215-555-1234",
    "email": "missruthie@gmail.com",
    "github": "princessRuthie",
    "twitter": "theOnlyRuthie",
    "location": "Philadelphia"
  },
  "welcomeMessage": "lorem ipsum",
  "biopic": "images/fry.jpg",
  "skills": [
    "awesomeness", "RWD", "JavaScript"
  ],
  "display": function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role),
      formattedName = HTMLheaderName.replace("%data%", inName()),
      formattedPhotUrl = HTMLbioPic.replace("%data%", bio.biopic),
      formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    for (var key in bio.contacts) {
      if (bio.contacts.hasOwnProperty(key)) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
        $("#topContacts,#footerContacts").append(formattedContact);
      }
    }
    $("#header").prepend(formattedRole).prepend(formattedName);
    $("#header").append(formattedMessage);
    $("#header").append(formattedPhotUrl).append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#header").append(formattedSkill);
    }
  }
};

bio.display();

var education = {
  "schools": [{
      "name": "Boston College",
      "location": "ma",
      "degree": "ba",
      "majors": [
        "math", "compsci"
      ],
      "dates": "2015-2016",
      "url": "fauxrl.com"
    },
    {
      "name": "taiwan normal",
      "location": "taipei",
      "degree": "Chinese Training",
      "majors": ["chinese"],
      "dates": "2014-2015",
      "url": "fauxrl.com"
    }
  ],
  "onlineCourses": [{
      "title": "fakeTitle",
      "school": "fakeSchool",
      "dates": "date1 to date2",
      "url": "fauxrl.com"
    },
    {
      "title": "fakeTitle2",
      "school": "fakeSchool",
      "dates": "date1 to date2",
      "url": "fauxrl.com"
    }
  ],
  "display": function() {
    var currentEntry;
    for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      currentEntry = $(".education-entry:last");
      var school = education.schools[i],
        formattedSchoolName = HTMLschoolName.replace("%data%", school.name),
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree),
        formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates),
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

      console.log(formattedSchoolName + formattedSchoolDegree);
      currentEntry.append(
        formattedSchoolName + formattedSchoolDegree,
        formattedSchoolDates
      );
      for (var j = 0; j < school.majors.length; j++) {
        var major = school.majors[j];
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        currentEntry.append(formattedMajor);
      }
      currentEntry.append(formattedSchoolLocation);
    }
    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
      $("#education").append(HTMLschoolStart);
      currentEntry = $(".education-entry:last");

      var onlineSchool = education.onlineCourses[k],
        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title),
        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool.school),
        formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates),
        formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineSchool.url);
      currentEntry.append(
        formattedOnlineTitle + formattedOnlineSchool,
        formattedOnlineDates,
        formattedOnlineURL);
    }
  }
};

education.display();

var work = {
  "jobs": [{
      "employer": "Thomas Jefferson University",
      "title": "Research Technologist",
      "location": "Philadelphia",
      "dates": "2016-2018",
      "description": "do stuff",
    },
    {
      "employer": "Thomas Jefferson University",
      "title": "Researcher",
      "location": "Philadelphia",
      "dates": "2015-2016",
      "description": "do other stuff",
    }
  ],
  "display": function() {
    var currentEntry;
    for (var i = 0; i < work.jobs.length; i++) {
      var currentJob = work.jobs[i];
      $("#workExperience").append(HTMLworkStart);
      currentEntry = $("#workExperience:last");
      var formattedEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer);
      console.log(formattedEmployer);
      var formattedTitle = HTMLworkTitle.replace("%data%", currentJob.title);
      var consolidatedEmpoyerPosition = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", currentJob.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", currentJob.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", currentJob.description);
      $(".work-entry:last").append(consolidatedEmpoyerPosition).append(formattedDates).append(formattedLocation)
        .append(formattedDescription);
    }
  }
};

work.display();

var projects = {
  "projects": [{
      "title": "placeholder1",
      "dates": "2017",
      "description": "made first stuff",
      "images": [
        "images/fry.jpg",
        "images/fry.jpg"
      ],
      "skillLearned": "JavaScript",
    },
    {
      "title": "placeholder2",
      "dates": "2017",
      "description": "made first stuff",
      "images": [
        "images/fry.jpg",
        "images/fry.jpg"
      ],
      "skillLearned": "JavaScript",
    }
  ],
  "display": function() {
    var currentEntry;
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);
      currentEntry = $(".project-entry:last");
      var project = projects.projects[i],
       formattedTitle = HTMLprojectTitle.replace("%data%", project.title),
       formattedDates = HTMLprojectDates.replace("%data%", project.dates),
       formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      console.log(project.title);

      currentEntry.append(formattedTitle).append(formattedDates)
        .append(formattedDescription);
      for (var j = 0; j < project.images.length; j++) {
        var formattedImageUrl = HTMLprojectImage.replace("%data%", project.images[j]);
        currentEntry.append(formattedImageUrl);
      }
    }
  }
};

projects.display();

$("#mapDiv").append(googleMap);
