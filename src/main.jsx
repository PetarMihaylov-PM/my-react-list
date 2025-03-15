import { createRoot } from "react-dom/client";
  
const root = createRoot(document.getElementById('root'));

root.render(
  <div className="test-div">
    <TestFunction />
    <WhyIsReactImportant />
  </div>
  
)

function TestFunction() {
  return (
  <main>
    <img src="src/assets/react.svg" alt="React logo" width='70px'/>
    <h1>Fun facts about React!</h1>
    <ul>
      <li>Was fist release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200k stars on GitHub</li>
      <li>Is mainained by Meta</li>
      <li>Powers thousands of enterpise apps, including mobile apps</li>
    </ul>
  </main>
  )
}

function WhyIsReactImportant() {
  return (
    <main>
      <img src="src/assets/react.svg" alt="React logo" width='70px'/>
      <h1>Why is React important</h1>
      <ul>
        <li>React is important for building fast, interactive UIs with reusable components.</li>
        <li>It improves performance with a virtual DOM and simplifies scaling applications.</li>
        <li>Its component-based structure aids maintainability, and its large ecosystem boosts development efficiency.</li>
      </ul>
    </main>
  )
}
