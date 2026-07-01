import { useTheme } from "next-themes";
import React from "react";
import i18n from "./i18n/i18n.js";
export default function App() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full h-full bg-gray-50 dark:bg-gray-900">
      <nav className="w-full py-3 mx-auto px-3 flex border-b dark:border-b-red-500 border-b-green-700 justify-between items-center backdrop-blur-md">
        <h1>logo</h1>
        <div className="flex gap-2.5">
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={() => setTheme("system")}
          >
            System
          </button>
        </div>
      </nav>
      <div className="w-full flex  h-screen justify-center items-center">
        <div className="w-1/2 p-8 border border-green-600 dark:border-red-500 rounded-md">
          <h1>Hello there, Good morning</h1>
          <p>
            Today is a beautiful day, We are going to learn about something
            amazing in react.js
          </p>
        </div>
      </div>
    </div>
  );
}
