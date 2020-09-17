import React from 'react';
import '../styles/App.less';
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "antd";
import Navigation from "./Navigation";
import AppRouter from "../routers/AppRouter";
import logoT from "../images/logoT.svg";

const { Header, Content} = Layout;

const App  = () => {
    return (
        <Router>
            <Layout className='layout header-home'>
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

export default App;
