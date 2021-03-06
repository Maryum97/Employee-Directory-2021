<h1 style="align: center;">Employee Directory</h1>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />
This application is covered by the MIT License.

## 🔍 Description
This repository contains the homework assignment conducted through the teaching facilities of the Univesity of Birmingham, in the third phase of the Coding Bootcamp; a web application by the name "Employee Directory". This application was made possible and simplified by making use of the very popular <b>React.js</b> framework. Different "components" have been put together, with JavaScript functionality added to each, to create a singular more complex application, which is very useful for managers who wish to keep track of their employees, although the generic "employees" used in this app are retrieved using an API call. The user is able to view all employees on the landing page, and they can filter employees by either first or last name, or title. The user can also sort employees by age, phone number, or in alphabetical order.

Here is what the delpoyed application looks like in the browser:
![App](https://user-images.githubusercontent.com/73832871/117571776-d85ebd00-b0c7-11eb-8f04-bf826b0ce832.png)
<br>

Here is the link to the deployted application on heroku:
<a href="https://safe-temple-65370.herokuapp.com/">MyReactApp - Employee Directory</a>

## Table of Contents
- [Description](#description)
- [Installations](#installations)
- [Instructions](#instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## 💾 Installations
You can simply gain access to this repository after having created a Github account, and with the following applications installed on your local device:

1. VS Code
2. Git Bash/Terminal
3. Node.js

Then in VSC terminal, install some dependencies as explained in the 'Instructions' section below.

## ⚙️ Instructions
After installing the above, clone the repository to your local device, and run the following commands in the local terminal in VS Code:

> // to install the node modules
<br></br>
> npm install

<br>

> // to install react-dom, axios, and bootstrap, a few of the main dependancies (libraries)
<br></br>
> npm install react-dom axios bootstrap

<br>

> // to run the server in the browser 
<br></br>
> npm start

<br>

Once done, simply open the browser and view all the employees in the table. Filter out the employees by writing the first OR last name, OR their title, in the search bar. On clicking the 'Find Employee' button, you will be presented with the employees who share the name you have searched for. To reset the search, simply click on the 'Reset Search' button, and the page will load a random list of employees into the table again. Using the three buttons provided, sort the employees with the respective purpose of each button, as suggested by the names: 'Sort By Age', 'Sort Alphabetically', and 'Sort By Phone Number'. These sort buttons also work for filtered employees.

The same applies for using the app through the public link provided in the 'Description' section above.

## 💻 Usage
The app is as simple to use as explained in the description above; it has made use of very sophisticated programming tools, listed below:

1. React JS Framework
2. JavaScript for logic
3. Bootstrap for styling
4. CSS for styling
5. Axios library for fetching info (API call)
6. API -> URL: <a href="https://randomuser.me/api/?">Random Users</a>
7. React-dom from React libraries, for page connections (though not utilised in this assignment)
8. React Hooks, for page functionality, in functional components

The app has been deployed using heroku.

## 👪 Contributing
If you wish to contribute to my app, contact me using the details below and gain access to my Github repository with your Github account today! Create your own branch and make amendments to my code, to make improvements or for marketing purposes. There are several aspects about this application which show some room for improvement, such as the following:

1. The search options could be enhanced by allowing users to search for an employee's Full Name, Location, or even email
2. The sort options could be expnaded, by allowing to sort by Geographical Location, which is far more complex because of use of extra methods, like longitude, latitude, etc.
3. The search history could be saved in the local storage, or in a separate database, so that it may be accessed later
4. New features could be adjusted in the app, such as redirecting a user to a separate page when they click on an employee, whilst hiding their important info on the main page. The new page would show more detailed information about that employee.

## ✏️ Tests
There were no particular test that this app has been made to pass, except for the app to be running in the browser erroe free. with all the functionality taking place as programmed. The app is also responsive in the browser page, which means it is accecible on most devices.

## 💐 Credits
I used quite a bit of help from the following sources:
1. YouTube.com
2. W3Schools.com
3. StackOverflow.com
4. ReactJS.org
5. Github.com
6. AskBCS Learning Assistants

## ✋ Questions
If you have any questions, feel free to contact me using the details provided below:<br />
<br />
:octocat: Find me on GitHub: [Maryum97](https://github.com/Maryum97)<br />
<br />
✉️ Email me with any questions: maryumbokhari97@gmail.com<br /><br />

_This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_