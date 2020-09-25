import React from 'react';
import 'antd/dist/antd.css'
import API from './API'
import {Layout} from "antd";
import AppRouter from "../routers/AppRouter";
import {BrowserRouter as Router} from "react-router-dom";
import '../styles/Fondo.css'

const { Footer,} = Layout;

function App() {
  return (
  
        <Layout className="layout">
          <AppRouter/>
          <Footer className='footer' style={{
             textAlign: 'center',
             backgroundColor: '#9DDCDC'
             }}>Your Recipe ©2020 </Footer>
        </Layout>
      
  );
 
}
export default App;