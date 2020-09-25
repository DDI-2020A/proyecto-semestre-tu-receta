import React from 'react';
import { Layout} from 'antd';
import API from '../components/API';
import HeaderHome from '../components/HeaderHome'

const {Content } = Layout;

const Home =(props)=>{
    return(
        
        <Layout>
            <HeaderHome/>
        <Layout>
          
          <Layout style={{ padding: '0 24px 24px' }}>
           
            <Content
              className="site-layout-background fondo"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <API/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )


}
export default Home;