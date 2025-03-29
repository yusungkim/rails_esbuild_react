import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById("react-root")
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
}

function App() {
  return (
    <div>
      <h1>Hello, world! from React</h1>
    </div>
  )
}