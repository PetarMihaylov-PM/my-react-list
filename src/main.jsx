import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';

const root = createRoot(document.getElementById('root'));

root.render(
  <Page />
);

function Page() {
  return (
    <>
      <div>
        <header>
        <img src="src/assets/react.svg" alt="React logo" width='90px'/>
        </header>
        <main>
          <h1>Why is React important</h1>
          <ul>
            <li>React is important for building fast, interactive UIs with reusable components.</li>
            <li>It improves performance with a virtual DOM and simplifies scaling applications.</li>
            <li>Its component-based structure aids maintainability.</li>
          </ul>
        </main>
        <footer>
          <small>© 2025 Mihaylov development. All rights reserved</small>
        </footer>
      </div>
    </>
  )
}
