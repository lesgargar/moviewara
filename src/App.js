import logo from './logo.svg';
import {Layout, layout} from "antd";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import MenuTop from "./components/MenuTop";

//Pages
import Home from './pages/home';
import NewMovies from './pages/newmovies';
import Popular from './pages/popular';
import Search from './pages/search';
import Movie from './pages/movie';
import Error404 from './pages/error404';

export default function App() {
  const {Header, Content} = Layout

  return (
 <Layout>
  <Router>
    <Header style={{zIndex:1}}>
      <MenuTop/>
    </Header>
    <Content>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/newmovies" element={<NewMovies />}/>
      <Route exact path="/popular" element={<Popular/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/movie/:id" element={<Movie/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    </Content>
  </Router>
 </Layout>
  );
}





