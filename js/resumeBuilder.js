/*
This is empty on purpose! Your code to build the resume will go here.
 */

var inName = function() {
  return (bio.firstName + " " + bio.lastName.toUpperCase());
};

var bio = {
  "firstName": "Princess",
  "lastName": "Ruthie",
  "role": "Web Developer",
  "contacts": {
    "mobile": "215-555-1234",
    "email": "missruthie@gmail.com",
    "github": "princessRuthie",
    "twitter": "theOnlyRuthie",
    "location": "Philadelphia"
  },
  "welcomeMessage": "lorem ipsum",
  "bioPic": "images/fry.jpg",
  "skills": [
    "awesomeness", "RWD", "JavaScript"
  ],
  "display": function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", inName());

    var formattedPhotUrl = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    for (var key in bio.contacts) {
      if (bio.contacts.hasOwnProperty(key)) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
        $("#topContacts").append(formattedContact);
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
      var school = education.schools[i];
      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

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
      var onlineSchool = education.onlineCourses[k];
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineSchool.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool.school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineSchool.dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineSchool.url);
      currentEntry.append(
        formattedOnlineTitle + formattedOnlineSchool,
        formattedOnlineDates,
        formattedOnlineURL);
    }
  }
};

education.display();

var employmentHistory = {
  "workOne": {
    "position": "Research Technologist",
    "employer": "Thomas Jefferson University",
    "yearsWorked": "2016-2018",
    "city": "Philadelphia",
    "description": "do stuff",
  },
  "workTwo": {
    "position": "Researcher",
    "employer": "Thomas Jefferson University",
    "yearsWorked": "2015-2016",
    "city": "Philadelphia",
    "description": "do other stuff",
  }
};

// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';

// for (index in employmentHistory){
//   $("#workExperience").append(HTMLworkStart);
//   console.log(index);
//   $("#workExperience").append(HTMLworkTitle.replace("%data%", employmentHistory[index].position));
// }

var projects = {
  "projects": [{
      "skillLearned": "JavaScript",
      "projectDates": "2017",
      "projectTitle": "placeholder1",
      "projectImage": "images/fry.jpg",
      "projectDescription": "made first stuff"
    },
    {
      "skillLearned": "html",
      "projectDates": "2017",
      "projectTitle": "placeholder2",
      "projectImage": "images/fry.jpg",
      "projectDescription": "made stuff"
    }
  ]
};

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    var project = projects.projects[i];
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projectTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.projectDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.projectDescription);
    var formattedPhotUrl = HTMLprojectImage.replace("%data%", project.projectImage);
    console.log(project.projectTitle);

    $(".project-entry:last").append(formattedTitle).append(formattedDates)
      .append(formattedDescription).append(formattedPhotUrl);
  }
}

// projects.display = function(){
//   for(var project in projects.projects){
//     $("#projects").append(HTMLprojectStart);
//     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[0]);
//     $(".project-entry:last").append(formattedTitle);
//   }
// }

projects.display();


// var education = {
//   "school":"Georgia Tech",
//   "yearsAttended":"2017-2019",
//   "city":"Atlanta"
// }
//
//
// $("#education").append(HTMLschoolStart).append(education.school);
/*
// var HTMLschoolStart = '<div class="education-entry"></div>';
// var HTMLschoolName = '<a href="#">%data%';
// var HTMLschoolDegree = ' -- %data%</a>';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';
// var HTMLschoolLocation = '<div class="location-text">%data%</div>';
// var HTMLschoolMajor = '<em><br>Major: %data%</em>';

*/




function displayWork() {

  for (var key in employmentHistory) {
    $("#workExperience").append(HTMLworkStart);
    /*
    //Uncaught TypeError: Cannot read property 'position' of undefined:
    console.log(employmentHistory[workItem].employer);
    console.log(employmentHistory.workItem.employer);
    */
    var formattedEmployer = HTMLworkEmployer.replace("%data%", employmentHistory[key].employer);
    console.log(formattedEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%", employmentHistory[key].position);
    var consolidatedEmpoyerPosition = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", employmentHistory[key].yearsWorked);
    var formattedLocation = HTMLworkLocation.replace("%data%", employmentHistory[key].city);
    var formattedDescription = HTMLworkDescription.replace("%data%", employmentHistory[key].description);
    $(".work-entry:last").append(consolidatedEmpoyerPosition).append(formattedDates).append(formattedLocation)
      .append(formattedDescription);
  };
}
displayWork();

$("#mapDiv").append(googleMap);
