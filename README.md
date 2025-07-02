# React State Management | Context API
This is a simple React project demonstrating state management using the **Context API**. 
It replaces traditional prop drilling by providing a centralized state accessible to any component in the tree.

## 📦 Features

- Global state management with Context API
- Clean and minimal React component structure
- Example use case on browser

## 💻 Technologies Used

- React (with Hooks)
- Context API (`createContext`, `useContext`)
- JavaScript (or TypeScript if applicable)

## 🧠 How Context API Works in This Project

1. **Context Creation**  
   A context is created using `createContext()` in the `src/MovieContext.js` file.

2. **Provider Setup**  
   The context provider (MovieProvider) wraps the main `App` component and holds the global state.

3. **Consuming Context**  
   Components access the context values using `useContext(MovieContext)`.

## 📥 Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/Ekremyilmazz/state-management.git
   cd state-management
2. Install dependencies
   ```
   npm install
3. Start the development server
   ```bash
   npm start

## 📸 Screenshot
![Image](https://github.com/user-attachments/assets/2b23bb8e-0e20-4f40-8cbe-65aa258d8f42)
