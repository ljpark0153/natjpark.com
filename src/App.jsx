import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import HomePage from "./components/home/HomePage";
import ProjectsPage from "./components/projects/ProjectsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// home, about, project, Resume
function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
