import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';
import { Models } from './pages/Models';
import { Financing } from './pages/Financing';
import { FAQ } from './pages/FAQ';
import { Referral } from './pages/Referral';
import { ADUInfo } from './pages/ADUInfo';
import { Warranty } from './pages/Warranty';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);
    
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = new URL(anchor.href).pathname;
        window.history.pushState({}, '', path);
        setCurrentPage(path);
      }
    });

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/models':
        return <Models />;
      case '/process':
        return <Process />;
      case '/contact':
        return <Contact />;
      case '/financing':
        return <Financing />;
      case '/faq':
        return <FAQ />;
      case '/referral':
        return <Referral />;
      case '/adu-info':
        return <ADUInfo />;
      case '/warranty':
        return <Warranty />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}