import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
import  Header  from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

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
 
