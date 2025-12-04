import { ThemeProvider } from "./context/ThemeContext";
import { EventProvider } from "./context/EventContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <EventProvider>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">
              <AppRoutes />
            </main>
          </div>
          <Footer />
        </div>
      </EventProvider>
    </ThemeProvider>
  );
}

export default App;