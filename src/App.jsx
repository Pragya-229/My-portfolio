import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "./Component/ui/toaster";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );  
}

export default App;