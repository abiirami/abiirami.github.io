import Home from "./pages/Home";

function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-t from-purple-100 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} — Built with ❤️ and a vision</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Home />
    </div>
  )
}

export default App
