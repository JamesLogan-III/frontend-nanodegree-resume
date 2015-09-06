	var bio = {
		"name" : "James Logan",
		"role" : "Web Developer",
		"contacts" : {
			"email" : "loganJA@gmail.com",
			"mobile" : "206-227-0074",
			"github" : "JamesLogan-III",
			"twitter" : "@JA_Logan",
			"location" : "Seattle, WA, USA"
		},
		"biopic" : "images/james-logan.png",
		"welcomeMessage" : "Hello! Welcome!",
		"skills" :  ["ASP", "HTML5", "JSP", "CSS 2-3", "XHTML", "JavaScript", "jQuery", "Less", "Sass", "Apache Velocity", "ASP.Net MVC 4", "Search Engine Optimization", "Microformats", "AJAX", "XML", "Bootstrap", "Java", "PHP", "C#", "VB.net", "Visual Basic 6", "LotusScript", "Lotus Formula Language", "MS SQL Server", "DB2", "MySQL", "MaxDB", "SQLlite"]
	};

	bio.display = function() {
		var name = bio.name;
		var formattedName = HTMLheaderName.replace("%data%", name);

		var role = bio.role;
		var formattedRole = HTMLheaderRole.replace("%data%", role);

		var picture = bio.biopic;
		var formattedPic = HTMLbioPic.replace("%data%", picture);

		var welcome = bio.welcomeMessage;
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", welcome);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPic);
		$("#header").append(formattedWelcome);

		var email = bio.contacts.email;
		var formattedEmail = HTMLemail.replace("%data%", email);

		var mobile = bio.contacts.mobile;
		var formattedMobile = HTMLmobile.replace("%data%", mobile);

		var github = bio.contacts.github;
		var formattedGithub = HTMLgithub.replace("%data%", github);

		var twitter = bio.contacts.twitter;
		var formattedTwitter = HTMLtwitter.replace("%data%", twitter);

		var locations = bio.contacts.location;
		var formattedLocation = HTMLlocation.replace("%data%", locations);

		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}

		$("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedTwitter, formattedLocation);
		$("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedTwitter, formattedLocation);
	};

	var projects = {
		"projects" : [
			{
				"title" : "Sample Project 1 - Bacon Ipsum, BaconMockup, and LoremPixel",
				"images" : ["http://baconmockup.com/197/148", "http://lorempixel.com/197/148/food/"],
				"dates" : "2010-2011",
				"description" : "Bacon ipsum dolor amet turkey boudin tail pork chop, tongue chicken swine pork belly bresaola. Brisket cow ball tip, bresaola landjaeger kielbasa pig ground round corned beef bacon porchetta biltong sirloin. Bacon corned beef doner brisket biltong ball tip venison short loin tri-tip. Ham strip steak meatloaf shoulder bresaola shank short ribs picanha landjaeger pancetta chuck. Ham tri-tip shank picanha, venison shoulder brisket prosciutto andouille hamburger."
			},
			{
				"title" : "Sample Project 2 - Futurama Ipsum and Lorempicsum",
				"images" : ["http://lorempicsum.com/futurama/627/197/4", "http://lorempicsum.com/futurama/148/197/5"],
				"dates" : "3000-3010",
				"description" : "<p>Bender, I didn't know you liked cooking. That's so cute. We need rest.  The spirit is willing, but the flesh is spongy and bruised. I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. OK, if everyone's finished being stupid. Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages!</p><p>Good news, everyone! I've taught the toaster to feel love! No! Don't jump! Maybe I love you so much I love you no matter who you are pretending to be. These old Doomsday Devices are dangerously unstable. I'll rest easier not knowing where they are. You guys go on without me! I'm going to go&hellip; look for more stuff to steal!</p><ul><li>Robot 1-X, save my friends!  And Zoidberg!</li><li>Would you censor the Venus de Venus just because you can see her spewers?</li><li>Ven ve voke up, ve had zese wodies.</li><li>You guys go on without me! I'm going to go&hellip; look for more stuff to steal!</li><li>Soon enough.</li></ul><h3>A Big Piece of Garbage</h3><p>Ooh, name it after me! Who said that? SURE you can die! You want to die?! Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be...</p>"
			}
		]
	};

	projects.display = function() {
		for(project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	};

	var work = {
		"jobs" : [
			{
				"employer" : "Expeditors International of Washington",
				"title" : "Developer III",
				"location" : "Seattle, WA, USA",
				"dates" : "2009-Present",
				"description" : "<ul><li>Participated as a subject matter expert and development and governance team member for an enterprise-wide Lotus Notes to Microsoft SharePoint 2013 migration</li><li>Developed office locator system for expeditors.com using Google maps</li><li>Redeveloped content for two existing websites to remove dependency on a content management system (miamifreezone.com and ftzworld.com)</li><li>Engineered back-end delivery systems for the location data and news as part of the project team building a mobile application</li><li>Implemented translated content and design changes to external website supporting eight languages including design changes to support Arabic</li><li>Worked as subject matter expert and developer on project team working on a total rewrite of public facing website (expeditors.com)</li><li>Developed and implemented a WordPress hosting service for internal users</li><li>Researched, evaluated, installed, and administered several open source applications to fill gaps in internal services, including Mediawiki, WordPress, Git, Apache Solr, Piwik, PHPMotion, Joomla, phpBB, JForum, and WampServer, PHPiCalendar, and Drupal</li><li>Implemented third party design work to redevelop an existing web presence (tradewin.net)</li><li>Worked in conjunction with business owners to create and design a new web property (certuspact.com)</li></ul>"
			},
			{
				"employer" : "Expeditors International of Washington",
				"title" : "Web Development / Data Warehouse Supervisor",
				"location" : "Seattle, WA, USA",
				"dates" : "2005-2009",
				"description" : "<ul><li>Managed two groups of three people responsible for Intranet and external websites, data warehouse reporting, and a webmaster</li><li>Lead a team in developing, implementing, and training a documentation strategy for the entire IS department</li><li>Developed a documentation search engine, crawling Mediawiki, Bugzilla, Maven POM websites, and subsections of the company Intranet, using Apache Nutch and custom PHP index builders</li><li>Worked in conjunction with marketing and graphic designers to redesign public website (tradewin.net)</li></ul>"
			},
			{
				"employer" : "Expeditors International of Washington",
				"title" : "Web / Lotus Notes / Data Warehouse Developer",
				"location" : "Seattle, WA, USA",
				"dates" : "2003-2005",
				"description" : "<ul><li>Developed a customer application from an internal tool reporting on textile quotas leveraging Lotus Notes, DB2, Java and Active Server Pages</li><li>Developed and curated a repository of RSS feeds for the purpose of content reuse throughout the Intranet</li><li>Worked as part of a team that overhauled the company Intranet, introducing Taxonomy and a search driven interface, using Lotus Notes, DB2, Java, and Apache Nutch as a search engine</li></ul>"
			},
			{
				"employer" : "Expeditors International of Washington",
				"title" : "Lotus Notes / Data Warehouse Developer",
				"location" : "Seattle, WA, USA",
				"dates" : "2001-2003",
				"description" : "<ul><li>Developed and automated complex custom reports for business leaders and senior management</li><li>Analyzed and developed a variety of Lotus Notes applications working directly with business sponsors</li><li>Worked in conjunction with marketing and graphic designers to redesign expeditors.com</li></ul>"
			},
			{
				"employer" : "United Parcel Service",
				"title" : "Loader",
				"location" : "Seattle, WA, USA",
				"dates" : "2001-2001",
				"description" : "Load and Unload Airplanes"
			},
			{
				"employer" : "Kenworth Truck Company",
				"title" : "Cab Assembler",
				"location" : "Renton, WA, USA",
				"dates" : "1999-2000",
				"description" : "Sleeper Cab Assembly"
			},
			{
				"employer" : "United States Marine Corps",
				"title" : "Hawk Missle System Fire Control Crewman",
				"location" : "Yuma, AZ, USA",
				"dates" : "1994-1998",
				"description" : "Control Missles"
			},
			{
				"employer" : "Ivars Seafood Bar",
				"title" : "Shift Manager",
				"location" : "Renton, WA, USA",
				"dates" : "1992-1994",
				"description" : "Manage Shifts"
			}
		]
	};

	work.display = function (){
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}

	var education = {
		"schools" : [
			{
				"name" : "University of Phoenix",
				"dates" : "2003-2005",
				"location" : "Bellevue, WA, USA",
				"majors" : ["Business Management"],
				"degree" : "Bachelor of Science",
				"url" : "http://www.phoenix.edu/"
			},
			{
				"name" : "University of Washington",
				"dates" : "2002-2003",
				"location" : "Seattle, WA, USA",
				"majors" : ["Java2 Programming"],
				"degree" : "Certificate",
				"url" : "http://www.pce.uw.edu/"
			},
			{
				"name" : "Bellevue College",
				"dates" : "1998-2001",
				"location" : "Bellevue, WA, USA",
				"majors" : ["Client/Server Programming"],
				"degree" : "Associate of Arts",
				"url" : "http://www.bellevuecollege.edu/"
			},
			{
				"name" : "Arizona Western College",
				"dates" : "1998",
				"location" : "Yuma, AZ, USA",
				"majors" : ["General Studies"],
				"degree" : "None",
				"url" : "https://www.azwestern.edu/"
			}
		],
		"onlineCourses" : [
			{
				"title" : "Front-End Deveoloper Nanodegree",
				"date" : "2015",
				"school" : "Udacity",
				"url" : "https://www.udacity.com/"
			},
			{
				"title" : "Developing Microsoft SharePoint Server 2013 Advanced Solutions (MS-20489)",
				"date" : "2014",
				"school" : "QuickStart (Formerly SQLSoft)",
				"url" : "http://www.quickstart.com/"
			},
			{
				"title" : "Developing Microsoft SharePoint Server 2013 Core Solutions (MS-20488)",
				"date" : "2013",
				"school" : "QuickStart (Formerly SQLSoft)",
				"url" : "http://www.quickstart.com/"
			},
			{
				"title" : "Developing ASP.NET MVC 4 Web Applications (MS-20486)",
				"date" : "2013",
				"school" : "QuickStart (Formerly SQLSoft)",
				"url" : "http://www.quickstart.com/"
			},
			{
				"title" : "Programming in HTML5 with JavaScript and CSS3 (MS-20480)",
				"date" : "2013",
				"school" : "QuickStart (Formerly SQLSoft)",
				"url" : "http://www.quickstart.com/"
			},
			{
				"title" : "SharePoint 2010 for Business Users, Power Users, and Site Owners",
				"date" : "2011",
				"school" : "QuickStart (Formerly SQLSoft)",
				"url" : "http://www.quickstart.com/"
			},
			{
				"title" : "SharePoint Governance - Planning and Oversight",
				"date" : "2011",
				"school" : "QuickStart (Formerly SQLSoft)",
				"url" : "http://www.quickstart.com/"
			}
		]
	};

	education.display = function(){
		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last a").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

			school.majors.forEach(function(major) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry:last").append(formattedSchoolMajor);
			});
		});

		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
			education.onlineCourses.forEach(function (course) {
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);

				$(".education-entry:last")
					.append(formattedOnlineTitle + formattedOnlineSchool)
					.append(formattedOnlineDates)
					.append(formattedOnlineURL)
					.append('<br>');
			});
		}
	};

	bio.display();
	education.display();
	work.display();
	projects.display();

	$("#mapDiv").append(googleMap);