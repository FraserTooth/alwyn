_This was created during my time as a student at [Code Chrysalis](https://www.codechrysalis.io/)._

_This was the Solo MVP Project, where a deployed MVP web application was to be built in 2 days_

_Therefore, please excuse the messy code, but I hope to continue working on this as part of my wider belief in allowing non-developers to contribute to development._

_All TO-DOS will be tracked in Github Issues and Projects, so please drop an issue or email me (on my profile) if you are interested in using this project_

# alwyn

![alt text](./misc/logo.png 'alwyn Logo')

alwyn is a React based Flowchart Development Environment.

## Demo/Tech Talk

**[See a Demo on Heroku](https://alwyn.herokuapp.com)**

**[See my Tech Talk](https://www.youtube.com/watch?v=YBPEIb1FlrE)**

> ![alt text](./misc/alwyn-mvp-screenshot.png 'An MVP Screengrab of alwyn') _An early MVP Screengrab of alwyn_

alwyn allows a user to create Blocks and define the Links between them using an intuitive drag-and-drop interface.

The code is then transplied to Javascript and can be exported into a Node environment.

This app is meant to act as a framework for develoment teams who want to allow non-coders to create MVP features which conform to good practice, have tests and can be easily reworked by a developer once the MVP has been proven. It should be hosted in an 'employees-only' space and

If this app was ever to be at 1.0.0, I would want to have:

1. Single File Creation of New Blocks to allow swift adoption to a company's buisness logic.
2. Using Test Blocks is Enforced for all Processes. (TDD!)
3. Intuitive 'no-teaching-required' default UI design
4. Single File Configuration of Look and Feel (per component)
5. Single File Configuration of Functionality
6. Full Language Agnosticism
7. Good Performance

## Technologies

> ![alt text](./misc/tech.png 'Technologies Used')

alwyn was built in React using Next.js and the material-ui.

I decided not to implement the project with Redux as I was only dealing with a few levels of components.

The flowchart was developed from the [react-flow-library](https://github.com/MrBlenny/react-flow-chart). Unlike many other flowcharting libraries, it can expose its state to the container, which forms the basis of transpiling the chart to a program string.

## Installation

Please initialise this repository with:

```bash
    yarn
```

Build and Run the App with:

```bash
    yarn build
    yarn start <Your Desired Port Number>
```

Yarn start initially checks the environment variable `$PORT`

Run with Hot Reloading with:

```bash
    yarn dev
```
