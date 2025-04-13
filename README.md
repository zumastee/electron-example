# Electron Hello World Example

This repository demonstrates basic desktop applications using Electron.js.

## Project Structure

```
electron-example/
├── hello-world/        # Basic Hello World application
│   ├── index.html      # App UI
│   ├── main.js         # Main process
│   └── package.json    # Project configuration
├── dark-mode/          # Dark mode toggle example
│   ├── index.html      # App UI
│   ├── main.js         # Main process
│   ├── preload.js      # Preload script for IPC
│   ├── renderer.js     # Renderer process logic
│   ├── styles.css      # CSS with dark/light mode support
│   └── package.json    # Project configuration
└── package-lock.json   # Dependency lock file
```

## Prerequisites

To run this project, you need:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (included with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone <repository-url>
cd electron-example

# For the hello-world example
cd hello-world
npm install

# For the dark-mode example
cd ../dark-mode
npm install
```

## Running the Applications

### Hello World Example

```bash
cd electron-example/hello-world
npm start
```

### Dark Mode Example

```bash
cd electron-example/dark-mode
npm start
```

These commands invoke the `start` script in the respective `package.json` files and launch the Electron applications.

## Application Contents

### Hello World Example
This simple application demonstrates the basic features of Electron:

- `main.js` - Sets up the Electron main process and creates a browser window
- `index.html` - Defines the UI for the renderer process (basic HTML)

### Dark Mode Example
This application demonstrates how to implement dark mode toggle in Electron:

- `main.js` - Sets up the Electron app and handles IPC for theme changes
- `preload.js` - Exposes IPC handlers to the renderer process
- `index.html` - Defines the UI with theme toggle buttons
- `renderer.js` - Contains event listeners for theme buttons
- `styles.css` - CSS with media queries for dark/light mode

## Customization

These sample applications can be customized by:

1. Editing the HTML files to change the UI
2. Modifying the JavaScript files to adjust functionality and behavior
3. Creating additional JavaScript files as needed

## Reference Resources

- [Electron Official Documentation](https://www.electronjs.org/docs)
- [Electron Quick Start](https://www.electronjs.org/docs/latest/tutorial/quick-start)
- [Electron API Demo](https://www.electronjs.org/docs/latest/api/app)
- [Electron Dark Mode Guide](https://www.electronjs.org/docs/latest/tutorial/dark-mode)

## License

This project is released under the ISC license. 