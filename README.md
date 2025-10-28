# lucas-lab

A Hello World Node.js TypeScript ESM project designed to develop and test SDLC continuous pipelines.

## Features

- **TypeScript**: Fully typed codebase with TypeScript 5.x
- **ESM**: Uses modern ECMAScript modules
- **Code Quality**: ESLint and Prettier for linting and formatting
- **Best Practices**: Follows Node.js and TypeScript community conventions

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

## Installation

```bash
npm install
```

## Usage

### Development Mode

Run the application directly with TypeScript:

```bash
npm run dev
```

### Production Mode

Build and run the compiled JavaScript:

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Run the application in development mode with tsx
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run lint` - Lint the source code with ESLint
- `npm run lint:fix` - Fix auto-fixable linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting without modifying files
- `npm run clean` - Remove the dist directory
- `npm test` - Run tests (placeholder)

## Project Structure

```
lucas-lab/
├── src/
│   └── index.ts          # Application entry point
├── dist/                 # Compiled output (generated)
├── .github/              # GitHub workflows
├── eslint.config.mjs     # ESLint configuration
├── .prettierrc.json      # Prettier configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## License

ISC

