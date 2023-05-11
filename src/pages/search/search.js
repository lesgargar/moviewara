import React from "react";
import { Row, Col, Input } from "antd";
import queryString from "query-string";
import MovieCatalog from '../../components/MovieCatalog';
import {URL_API, API} from '../../utils/constants';
import './search.scss';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


export default function Search(props){

    const location = useLocation()
    const navigate = useNavigate()
    const [movieList, setMovieList]= useState([]);
    const [searchValue, setSearchValue] = useState("");

useEffect(()=>{
    (async()=>{
        const searchValue = queryString.parseUrl(location.search)
        const {s} = searchValue.query
        console.log("text", s)
        if(!s){
           setMovieList([])
            return
        }
       
        const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=en-US&query=${s}&page=1`
    );
        const movies = await response.json()
        
        setSearchValue(s)
        setMovieList(movies)

    })();
}, [location.search])

const onChangeSearch = e =>{
    const urlParams = queryString.parse(location.search)
    urlParams.s = e.target.value;
    navigate(`?${queryString.stringify(urlParams)}`)
    setSearchValue(e.target.value)
}

    return (
        <Row>
            <Col span={20} offset={6} className="search">
                    <h1>Search movie</h1>
                    <Input value={searchValue} placeholder="search" onChange={onChangeSearch}/>
            </Col>
                {movieList.results &&(
                    <Row>
                        
                            <MovieCatalog movies={movieList}/>
                       
                    </Row>
                )}
            <Col span={24}>
                <Footer/>
            </Col>
        </Row>
    )
};

