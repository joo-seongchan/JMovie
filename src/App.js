import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { DetailMovie } from "./components/pages/detailMovie/DetailMovie";
import { DetailTv } from "./components/pages/detailTv/DetailTv";
import { Search } from "./components/pages/search/search";
import { NotFound } from "./components/pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/globalStyle";
import { UpComming } from "./components/pages/upComming/UpComming";
import { MSubPage } from "./components/pages/subPage/MSubPage";
import { TSubPage } from "./components/pages/subPage/TSubPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detailMovie" element={<DetailMovie />}></Route>
          <Route path="/detailTv" element={<DetailTv />}></Route>
          <Route path="/upComming" element={<UpComming />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/msubpage/:id" element={<MSubPage />}></Route>
          <Route path="/tsubpage/:id" element={<TSubPage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
