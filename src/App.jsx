import { Route, Routes } from "react-router-dom";
import View from "./pages/View";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Col, Row } from "antd";

function App() {
  return (
    <Row gutter={0} align="center">
      <Col xs={12}>
        <Header />
        <Routes>
          <Route path="/" exact element={<View />} />
          <Route path="/add" exact element={<Add />} />
          <Route path="/edit" exact element={<Edit />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
        <Footer />
      </Col>
    </Row>
  );
}

export default App;
