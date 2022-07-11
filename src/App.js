// css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </QueryClientProvider>
  );
}

// const queryClient = new QueryClient({
  
// })

export default App;
