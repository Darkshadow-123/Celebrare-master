import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-10">
      <h1 className="mb-3 text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Photo Gallery
      </h1>
      <p className="mb-8 text-center text-lg text-gray-500">
        Discover amazing photographs from talented artists
      </p>
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
