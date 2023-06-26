import { Footer } from './pages/Home/Footer';
import { Home } from './pages/Home/Home';
import { Navbar } from './pages/Home/navbar';

export function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
