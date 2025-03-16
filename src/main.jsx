import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
import  Header  from './Header.jsx';
import MainContent from './MainContent.jsx';
import Footer from './Footer.jsx';

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
 
