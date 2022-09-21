## **Hello,**

### We are pleased to introduce our Calorie Tracker App.

### This is an innovative project, therefore you are able to add food, which will come with calories and that will be added.

### The code is written in JavaScript, HTML, CSS. Framework used is Expo and React Native.

### **Enjoy using our app Daniela, Joanna, Sheryl**

#

# Calorie Tracker App

The idea was that we would like to create an app, which holds our food calories and will tell us how much it was consumed.\
There is a contact form, which you can use to share with idea, order Premium version, notify errors.

## Roadmap of the report

To make this point life we used a tool Jira, where we created tickets with tasks. **Jira** was divided to start, progress & complete. After,

- come up with an idea of the application
- decide what features you need, analysis of potential problems, create tasks
- pick up tasks
- create plan
- start working on tickets
- consultations between member whenever need\

To start work on additional things we had to:

- create a google account
- create an API access
- create a emailj account
- create Figma account
- design an app
- start implementing elements
- test local/live
- create screens directory
- create components directory
- create assets directory
- test local/live
- Final test
- write documentation

We have been using Agile development from the planning until we finished the product at the expected stage. We have been continuesly reviewing code and ajust whenever need. Every implementation has been tested to ensure a high quality of product.

Objectives of the app's prototype:

- a customer view

1. deliver an intuitive app for fast food insertion and instant caolories calculation
2. prototype 1 day input of food
3. sending an email to the app owner

- a developer view

1. implement API
2. create accounts mentioned above
3. design an app and its features
4. enable log in and log out
5. validation a form
6. create a contact email

Future aims are:

- more days added
- a submission of calories calculation 
- a possibility to share on Facebook, Instagram or with friends

## Customer application instruction - background

To open up the app you have to use Expo for Android or iOS.\
You will see the login page, where you type a username and a password if you already have. Otherwise you have to register.
All boxes are mandatory positions to fill in. If you fail to do so, it will not transfer you further.\
You must write your e-mail address. It must be valid.\
Once you got to the home page you will see buttons at the bottom of the screen, very easy to navigate.\
There is a logout button, which will take you to login page.

## Product Manager, Developers, Testers

## Files to run our app:

1. directory expo-shared, idea:

- are default;

2. directory assets:

- photo, icons, etc;

3. directory src holds dir components and dir screens

- components: buttons, input, logo, track button;

- screens: bottom navigation, contact, food list, home, login, new password, register, reset password, stack navigation;

4. Main repository:

- .gitignore
- App.js - run the app;
- README.md - the app's documentation;
- app.json - default;
- babel.config.js - created to handle navigations;
- package-lock.json - default;
- package.json;

## System Requirements

### 1. Requirements

To run application on the test mode, there are a few requirements.
We will list software and versions required, otherwise there may be issue with the testing.
Please remember that:
* Run **npm install** when you downlad the project for the first time.

* Run **npm start** to start the server.


### 1.1 Software

1\. Expo\
2\. Installed emulator Android or iOS or webpackage\
3\. Visual Studio Code; version 1.70 and above\

### 1.2 Package Installation

ReactNative and its library listed below:

`npm i react-native-safe-area-context`
`npx expo install react-native-safe-area-context@4.3.1`
`npm install @react-navigation/native @react-navigation/native-stack`
`npm install react-native-screens react-native-safe-area-context`
`npm install @rneui/themed @rneui/base`
`npm install @rneui/base@edge @rneui/themed@edge`
`npx expo install react-native-screens@~3.15.0`
`npm install @react-navigation/bottom-tabs`
`npm install react-native`
`npm install react-native-webviewreact-native-webview`
`npm install react-native-reanimated`

NB: no version restrictions. It is always recommended to have the latest, unless otherwise stated.
Please bear in mind that sometimes you might have to re-install packages.

## Code explanation

Here, we would like to give you overview of the code structure and for what it is responsible.

1\. App -
Is responsble for running stack navigation, which consists of login, erset password and registration and allows to connect with bottom navigation, where there are home button, check meal button, contact form and logout. 
The logout will transfer you directly to Login page.

2\. Back-end & Front-end - are written in React Native using JavaScript language. However, the contact form uses HTML and CSS to ensure that you are able to send ann email.

3\. Testing -
Unfortunately, we were not be able to write a test due to short time period. This is what is in our future goals. Although, we were running live/local tests after every implementation or change to ensure the code is written correctly and will not stop customer against using it.\
Testing User Interaction was conducted through checkinng if every button works as meant to if it directs to the right site. If the monits are displayed correctly. If the layout, buttons, icons are displayed.
Also, End-To-End Tests was performed to check how the app behaves on different devices as well as what layout UI is displayed. It is another kind of validated UI experience. The test was done on Android emulator, Android mobile phone and on web in a mobile version.

React Native has built-in 2 static analysis: Linters and Type checking.
Linters ensures that the common errors, unsused code and a style flag are highlighted to prevent pitfalls. called: ESLint\
Type checking ensures that whatever value you are passing into a function matches to what function was design; ensures that a correct data type is passed in. called\
The structuring test JEST would be used to test one thing at the time and using simple **it function**. We would make sure that the tested code is splited to smaller pieces to run independly.

Unit test works similar to JEST, so one or anothe would be used.

We would use mocking to check if our API supplies correctly.

We would test components (UI components), which means we will check if what we render it is not broken and is delivered in a good quality to the Customer. For example Test Renderer.






4\. User testing and back-end testing on different machines to ensure the code works wherever is used.

## Implementation process

We are proud of our app, because in a very short time we were able to deliver our objectives. In fact we have to decide, which elements will be implemented in the future due to lack of the time.

Future aims are:

- possibility to add more days with calculation
- possibility of sending report to a customer's email
- pedometr
- integration testing : UNITEST or JEST

We have been successful, because we were able to talk and bring up issues, problems we met. We were collaborative and supportive. In fact we have learn a lot during this project. Also, here has to be repeated that the Agile methodology is, because it gave us a lot flexibility for testing, improvements and correcting things not working. Now, our challenges, these are common, but not limited.

Our challenges were:

- not knowing ourselves
- working remotely
- time management
- lack of self confidence in ability to implement APIs
- communication
- challenges with creating a correct navigation, login, render webpage, functions, useState
- not knowing additional packages required
- not knowing the technologies and theirs limitations
- not knowing API routes we implemented
- problem with understanding principles of React Native usage and its components.

