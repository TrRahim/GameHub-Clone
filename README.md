# GameHub-Clone

A clone of a Game Hub built using modern web technologies. This project aims to replicate a game hub's functionality, providing users with an engaging interface to explore, search, and manage games.

## Features

- **Responsive Design:** Built with Chakra UI for a consistent and responsive design across devices.
- **State Management:** Zustand is used for managing application state efficiently.
- **Routing:** React Router DOM handles client-side routing.
- **Data Fetching:** React Query is used for fetching, caching, and synchronizing server data.
- **Type Safety:** Written in TypeScript to catch errors early and ensure code quality.

## Tech Stack

- **React:** JavaScript library for building user interfaces.
- **HTML & CSS:** Core web technologies for structure and styling.
- **Chakra UI:** Component library for building accessible and themeable design systems.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **React Router DOM:** Standard routing library for React.
- **TypeScript:** Superset of JavaScript providing static type checking.
- **Zustand:** A small, fast, and scalable state management library.
- **React Query:** Data-fetching library to simplify server-state management.
- **Vite:** A fast build tool and development server for modern web projects.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/GameHub-Clone.git
    cd GameHub-Clone
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

4. Open your browser and visit `http://localhost:3000` to view the application.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

### Expanding the ESLint Configuration

If you are developing a production application, it’s recommended to expand the ESLint configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

    ```js
    export default {
      // other rules...
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    }
    ```

- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Project Structure

Here's a brief overview of the project's structure:

- **`assets`**: Images, icons, and other static assets.
- **`components`**: Reusable UI components.
- **`pages`**: Different pages for routing.
- **`routes`**: Route definitions and configurations.
- **`store`**: Zustand store for state management.
- **`types`**: TypeScript types and interfaces.

## Contributing

Contributions are welcome! Please fork this repository and open a pull request to contribute.

## License

This project is licensed under the MIT License.

---

**Happy Coding!**
