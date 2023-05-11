import React from "react";
import { Link } from "react-router-dom";
import {Button} from 'antd';
import './error404.scss';

export default function Error404(){
    return (
        <div className="error404">
            <h1>Error 404</h1>
            <h2> Page not found</h2>
            
            <Link to='/'><Button className="error404__button">Back to home</Button></Link>

        </div>
    );
};