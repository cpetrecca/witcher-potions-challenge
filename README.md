### Author 
Cristian Petrecca

### App description and intention manifest
Application for calculating best damage output on configurable amount of potions, some of the code structure aspects are an overkill for the requested specification but I belive its optimal for subsecuent functionalities scalations and/or changes.

There are three possible approaches from a statewise perspective:
 A: the requested as the functionality triggers on a submit button click event using useRef hook on an uncontrolled component with minimun state managment focusing on performance.
 B: A more Reactish proposal, with full controlled component where the potions are managed with useState and useEffect hooks to automatically show result on component reevaluations after state changes.
 C: An overcomplex solution for the challenge where we use Context API to manage the states having in mind that this potions may in the future be needed in siblings components so we avoid props drillings providing the information needed to the whole app.

...could be an 4th posible option using a Flux architectural library as Redux but I don´t think makes any sense at all for this particular case.
 
I will go forward with the C option as I think is the best one for demostrating overall knowledge on React functionalities.

Regarding amount of Potions and damage calcultion I opted for a conf file to easily escalate o change as needed.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dependencies
https://react-icons.github.io/react-icons
https://chakra-ui.com/

### Overall structure
components -> Where the components lives
    ui->Ui components
    layout->Layout components
datamodels -> Data models for app entities
hooks -> Custom hooks for app
images ->Images used 
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

TODO so it runs algorithm tests 

### `npm run build`

Builds the app for production to the `build` folder.\