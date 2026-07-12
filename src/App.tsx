import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import FloatingContactPanel from './components/FloatingContactPanel';
import BottomNav from './components/BottomNav';
import WhatsAppPopup from './components/WhatsAppPopup';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Compare from './pages/Compare';
import DoorFinder from './pages/DoorFinder';
import QuoteCalculator from './pages/QuoteCalculator';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Legal & Info pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';

// Error pages
import Error404 from './pages/Error404';

// Helper component: Scroll page to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Default page top scroll
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Loading Overlay */}
        <LoadingScreen />
        
        {/* Scroll To Top helper */}
        <ScrollToTop />

        {/* Global SEO Metadata Settings */}
        <Helmet>
          <title>Pokkisham Steel Doors | Premium Steel Doors & Windows in Chennai</title>
          <meta name="description" content="Pokkisham Steel Doors is one of the leading steel door manufacturers in Chennai offering premium steel doors, wood finish steel doors, designer steel doors, steel windows and customized solutions." />
          <meta name="keywords" content="Steel Doors Chennai, Steel Door Manufacturer Chennai, Steel Doors Near Me, Designer Steel Doors, Steel Windows Chennai, Premium Steel Doors, Wood Finish Steel Doors, Villa Doors, Apartment Doors" />
          <link rel="canonical" href="https://www.pokkishamsteeldoors.com/" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pokkisham Steel Doors | Premium Steel Doors & Windows in Chennai" />
          <meta property="og:description" content="South India's premier manufacturer and dealer of heavy-duty, high-security steel doors and windows." />
          <meta property="og:image" content="https://www.pokkishamsteeldoors.com/logo.jpeg" />
          <meta property="og:url" content="https://www.pokkishamsteeldoors.com/" />
          
          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Pokkisham Steel Doors | Premium Steel Doors & Windows" />
          <meta name="twitter:description" content="South India's premier manufacturer and dealer of heavy-duty, high-security steel doors." />
          <meta name="twitter:image" content="https://www.pokkishamsteeldoors.com/logo.jpeg" />

          {/* Local Business JSON-LD Schema */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Pokkisham Steel Doors",
                "image": "https://www.pokkishamsteeldoors.com/logo.jpeg",
                "@id": "https://www.pokkishamsteeldoors.com",
                "url": "https://www.pokkishamsteeldoors.com",
                "telephone": "+919176998889",
                "email": "pokkishamdoors@gmail.com",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "No.5, Subbammal Street, Kallikuppam Road, Venkatapuram, Ambattur",
                  "addressLocality": "Chennai",
                  "addressRegion": "TN",
                  "postalCode": "600053",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 13.121852,
                  "longitude": 80.155701
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                "sameAs": [
                  "https://facebook.com/p/Pokkisham-STEEL-DOOR-61572772931399/",
                  "https://instagram.com/pokkisham_steel_doors_"
                ]
              }
            `}
          </script>

          {/* Analytics Placeholders */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </script>
        </Helmet>

        {/* Navigation Glass Bar */}
        <Navbar />

        {/* Pages Content Routes */}
        <main className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/door-finder" element={<DoorFinder />} />
            <Route path="/quote-calculator" element={<QuoteCalculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* Error 404 fallback */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        {/* Global Floating Side Widgets */}
        <FloatingContactPanel />
        <WhatsAppPopup />
        <BackToTop />

        {/* Mobile bottom sticky navigation */}
        <BottomNav />

        {/* Premium footer */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
