import { Route, Routes } from "react-router-dom";
import View from "./pages/View";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<View />} />
        <Route path="/add" exact element={<Add />} />
        <Route path="/edit" exact element={<Edit />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
