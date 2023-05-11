import React from "react";
import { Layout } from "antd";
import './Footer.scss'
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Footer(){

    const {Footer} = Layout
    return(
        <Footer className="footer">
            <p>
            <Link to="https://github.com/lesgargar"> <GithubOutlined /> @lesgargar </Link>
           
            <Link to="https://www.linkedin.com/in/leslie-garcia-garcia/"><LinkedinOutlined /> Leslie Garcia</Link>
            </p>
        </Footer>
    )
}