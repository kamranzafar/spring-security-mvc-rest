# Spring Security-MVC-REST template

This is a working template project, which show cases a sample multi-tier Spring web application and RESTful services based on 
Spring __IoC__, __Seurity__ and __MVC__; with a JQuery/Ajax/Bootstrap based frontend. It demostrates how to use Spring MVC to 
create RESTful services, and at the same time keeping a clean separation between the Controllers and REST resources.

This template can easily be extended into a fully functional Spring web application.

## Usage

1. Clone this project, __git clone git://github.com/kamranzafar/spring-security-mvc-rest.git__
2. Update the __security.xml__ file to provide your username and password (default is kamran/password)
3. Build the war file with maven, __mvn clean compile war:war__
4. Deploy on Tomcat.

After this you can login to the application from the browser (http://localhost:8080/spring-mvc-rest) using the given username and password.

[![Build Status](https://travis-ci.org/kamranzafar/spring-security-mvc-rest.png?branch=master)](https://travis-ci.org/kamranzafar/spring-security-mvc-rest)
