import React from "react";
import {Button, Col, Layout, Row} from "antd";
import yourRecipe from "../images/yourRecipe.svg";
import Routes from "../constants/routes";
import '../styles/HeaderHome.css'
import {Link} from "react-router-dom";

const {Header} = Layout;

const HeaderHome = () => {

    return (
        <Header style={{ backgroundColor: '#9DDCDC' }}>
            <Row justify='space-between' align="middle">
                <Col>
                    <Link to='/'><img className="logo" src={yourRecipe} /></Link>
                </Col>
                <Col>
                    <Link to='/recipes'><Button ghost className='btn-login'>My Recipes</Button></Link>
                    <Link to='/ingredients'><Button ghost className='btn-login'>Saved ingredients</Button></Link>
                </Col>
            </Row>

        </Header>
    );
}
export default HeaderHome;