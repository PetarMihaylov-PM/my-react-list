export default function Header() {
  return (
     <header className='header'>
        <img src="src/assets/react.svg" alt="React logo" className='react-img'/>
        <nav>
           <ul className="nav-list">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
           </ul>
        </nav>
     </header>
  )
}