# User Table App

This project is a React web application for displaying a table containing user details. It utilizes pagination for smooth navigation through approximately 800 data entries, providing a good user experience. The design is implemented using Material-UI's Grid component.

## Live Demo

You can access the live demo of this application [here](https://user-table-app.vercel.app/).


## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/nischalrajc/usertable.git
```

Navigate into the project directory:

```bash
cd usertable
```

Install dependencies using npm:

```bash
npm install
```

## Usage

To start the development server and view the application in your browser:

```bash
npm start
```

The application will automatically open in your default web browser at http://localhost:3000.

## Dependencies

This project relies on the following dependencies:

```json
{
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/material": "^5.15.18",
    "@mui/x-data-grid": "^7.5.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```

## Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the app for production to the build folder.
- `npm test`: Runs the test watcher in an interactive mode.
- `npm eject`: Removes Create React App build dependency from your project.
