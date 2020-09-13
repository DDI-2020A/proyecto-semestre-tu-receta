import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "antd";
import logoT from "../images/logoT.svg";
import Navigation from "./Navigation";
import AppRouter from "../routers/AppRouter";

const { Header, Content, Sider } = Layout;

const RouterHeader  = () => {
    return (
        <Router>
            <Layout className='layout'>
                <Header className='main-header'>
                    <div className='logo'>
                        <img src={logoT} alt='' width='150px'/>
                    </div>
                    <Navigation/>
                </Header>
                <Content className='main-content'>
                    <AppRouter />
                </Content>
            </Layout>
        </Router>
    );
};

export default RouterHeader;