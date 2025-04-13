# Electron Hello World Example

This repository demonstrates a basic Hello World desktop application using Electron.js.

## Project Structure

```
electron-example/
├── hello-world/        # Application code
│   ├── index.html      # App UI
│   ├── main.js         # Main process
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
cd electron-example/hello-world

# Install dependencies
npm install
```

## Running the Application

To launch the application, run:

```bash
npm start
```

This command invokes the `start` script in `package.json` and launches the Electron application.

## Application Contents

This simple application demonstrates the basic features of Electron:

- `main.js` - Sets up the Electron main process and creates a browser window
- `index.html` - Defines the UI for the renderer process (basic HTML)

## Customization

This sample application can be customized by:

1. Editing `index.html` to change the UI
2. Modifying `main.js` to adjust window size and behavior
3. Creating additional JavaScript files as needed

## Reference Resources

- [Electron Official Documentation](https://www.electronjs.org/docs)
- [Electron Quick Start](https://www.electronjs.org/docs/latest/tutorial/quick-start)
- [Electron API Demo](https://www.electronjs.org/docs/latest/api/app)

## License

This project is released under the ISC license. 