import { createRoot } from 'react-dom/client';
import { Fragment } from 'react';

const root = createRoot(document.getElementById('root'));

function Header() {
   return (
      <header>
         <img src="src/assets/react.svg" alt="React logo" width='90px'/>
      </header>
   )
}

function MainContent() {
   return (
      <main>
         <h1>Why is React important</h1>
         <ul>
         <li>React is important for building fast, interactive UIs with reusable components.</li>
         <li>It improves performance with a virtual DOM and simplifies scaling applications.</li>
         <li>Its component-based structure aids maintainability.</li>
         </ul>
      </main>
   )
}

function Footer() {
   return (
      <footer>
         <small>© 2025 Mihaylov development. All rights reserved</small>
      </footer>
   )
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

root.render(
   <Page />
 );
 
