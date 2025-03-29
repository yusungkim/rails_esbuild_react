import React from 'react';
import { createRoot } from 'react-dom/client';
import forestImage from '../../assets/images/statics/forest.png';
const rootElement = document.getElementById("react-root")
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
}

function App() {
  return (
    <div className="relative">
      <h1 className="absolute top-0 left-0 text-white">Hello, world! from React</h1>
      <img src={forestImage} alt="Forest" />
    </div>
  )
}