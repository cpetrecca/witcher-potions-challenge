### Author 
Cristian Petrecca

### App description and intention manifest
Application for calculating best damage output on configurable amount of potions, some of the code structure aspects are an overkill for the requested specification but I believe its optimal for subsequent functionalities scalations and/or changes.

There are three possible approaches from a statewise perspective:
 A: the requested as the functionality triggers on a submit button click event using useRef hook on an uncontrolled component with minimum state management focusing on performance.
 B: A more Reactish proposal, with fully controlled component where the potions are managed with useState and useEffect hooks to automatically show result on component reevaluations after state changes.
 C: An overcomplex solution for the challenge where we use Context API to manage the states having in mind that these potions may in the future be needed in siblings components so we avoid props drillings providing the information needed to the whole app.

...could be an 4th possible option using a Flux architectural library as Redux but I don´t think makes any sense at all for this particular case.
 
I will go forward with the C option as I believe is the best one for demonstrating overall knowledge on React functionalities.

Regarding the amount of Potions and damage calcultion I opted for a conf file to easily escalate potions or change damage logic as needed without changing the code.

Components not really TDD made but Unit Tests in place. To be honest this is not my strongest skill but took the chance to refresh knowledge and will be the first to say I have plenty of space room to learn here.

Best damage combination algorithm made on a custom Hook
Installed  @testing-library/react-hooks for testing Hook without making a test component but couldnt make it work properly so tested main functionalities against dummy data.

 

As an autocritic all the dev dependencies should had been instaled under that or moved in the package.json file


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies
https://react-icons.github.io/react-icons
https://chakra-ui.com/
@testing-library/react-hooks

### Overall structure
components -> Where the components lives
layout->Layout components
datamodels -> Data models for app entities
        //Datamodel just as exported type as there is no internal funcionality needed
hooks -> Custom hooks for app
asset/images ->Images used 
config ->Configuration files
utils -> Utilities functions
store -> Context API providers

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies needed stated in the package.json file. Will need to run first if you want to run the project in development mode.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Run and watch test cases for components, API context

### `npm run build`

Builds the app for production to the `build` folder.\