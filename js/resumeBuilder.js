/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $(document).click(function(loc){
//
// });

var bio = {
  "firstName": "Princess",
  "lastName": "Ruthie",
  "role": "Web Developer",
  "contacts": {
  "email":"missruthie@gmail.com",
  "twitter":"theOnlyRuthie",
  "github": "princessRuthie",
  "location": "Philadelphia"},
  "photoUrl":"images/fry.jpg",
  "welcomeMessage": "lorem ipsum",
  "skills": [
    "awesomeness","RWD","JavaScript"]
};

var inName = function(){
  return (bio.firstName + " " + bio.lastName.toUpperCase());
}

// if (bio.skills){
//   $("#header").append(HTMLskillsStart);
//   // var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
//
//   bio.skills.forEach(function(item){
//     $("#skills").append(HTMLskills.replace("%data%", item));
//   });
//
//     console.log(bio.skills);
// };

var educationJson = {
  "schools":[
    {
      "name":"bc",
      "city":"ma",
      "major":"cs"
    },
    {
      "name":"taiwan normal",
      "city":"taipei",
      "major":"chinese"
    }
  ]
};

function displayEducation(){
  for (var i = 0; i<educationJson.schools.length; i++){
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append("test " + i);

  }
}
displayEducation();

var employmentHistory = {
  "workOne": {
    "position":"Research Technologist",
    "employer": "Thomas Jefferson University",
    "yearsWorked":"2016-2018",
    "city":"Philadelphia",
    "description":"do stuff",
  },
  "workTwo": {
    "position":"Researcher",
    "employer": "Thomas Jefferson University",
    "yearsWorked":"2015-2016",
    "city":"Philadelphia",
    "description":"do other stuff",
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

projects.display = function(){
  for (var i = 0; i<projects.projects.length; i++){
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


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", inName());

var formattedPhotUrl = HTMLbioPic.replace("%data%", bio.photoUrl);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole).prepend(formattedName);
$("#header").append(formattedMessage);
$("#header").append(formattedPhotUrl).append(HTMLskillsStart);

for (i =0; i<bio.skills.length; i++){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#header").append(formattedSkill);
};

for (var key in bio.contacts){
  var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
  $("#topContacts").append(formattedContact);
};


function displayWork(){

  for (var key in employmentHistory){
    $("#workExperience").append(HTMLworkStart);
    /*
    //Uncaught TypeError: Cannot read property 'position' of undefined:
    console.log(employmentHistory[workItem].employer);
    console.log(employmentHistory.workItem.employer);
    */
    var formattedEmployer = HTMLworkEmployer.replace("%data%", employmentHistory[key].employer);
    console.log(formattedEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%", employmentHistory[key].position);
    var consolidatedEmpoyerPosition = formattedEmployer+formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", employmentHistory[key].yearsWorked);
    var formattedLocation = HTMLworkLocation.replace("%data%", employmentHistory[key].city);
    var formattedDescription = HTMLworkDescription.replace("%data%", employmentHistory[key].description);
    $(".work-entry:last").append(consolidatedEmpoyerPosition).append(formattedDates).append(formattedLocation)
    .append(formattedDescription);
  };
}
displayWork();

$("#mapDiv").append(googleMap);
