import React from 'react';

import fruits from '../images/fruits.svg';
import vegetable from '../images/vegetable.svg';
import milk from '../images/milk.svg';
import meat from '../images/meat.svg';
import seafood from '../images/seafood.svg';
import salsas from '../images/salsas.svg';
import frijoles from '../images/frijoles.svg';
import ginebra from '../images/ginebra.svg';
import soda from '../images/soda.svg'
import pastel from '../images/pastel.svg';
import sopa from '../images/sopa.svg';
import aceite from '../images/aceite.svg';
import sal from '../images/sal.svg';
import cereal from '../images/cereal.svg';
import miel from '../images/miel.svg';
import { Pagination } from 'antd';
import { Menu } from 'antd';
import { Layout, Breadcrumb } from 'antd';
import { Checkbox } from 'antd';
import Recipe from "../componentes/Recipe";
import RouterHeader from "../componentes/RouterHeader";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const Home  = () => {
    return(

            <Layout>
                {/* <RouterHeader/> */}
                <Sider width={250} className="site-layout-background"
                       style={{
                           overflow: 'auto',
                           height: '120vh',

                       }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['']}
                        defaultOpenKeys={['']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<img src={milk} width='37px'/>} title=" Diario">
                            <Menu.Item key="1"><Checkbox onChange={onChange}>Mantequilla</Checkbox></Menu.Item>
                            <Menu.Item key="2"><Checkbox onChange={onChange}>Leche</Checkbox></Menu.Item>
                            <Menu.Item key="3"><Checkbox onChange={onChange}>Huevo</Checkbox></Menu.Item>
                            <Menu.Item key="4"><Checkbox onChange={onChange}>Yogurt</Checkbox></Menu.Item>
                            <Menu.Item key="5"><Checkbox onChange={onChange}>Queso mozzarella</Checkbox></Menu.Item>
                            <Menu.Item key="6"><Checkbox onChange={onChange}>Queso crema</Checkbox></Menu.Item>
                            <Menu.Item key="7"><Checkbox onChange={onChange}>Leche condensada</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<img src={vegetable} width='39px'/>} title="Vegetales">
                            <Menu.Item key="8"><Checkbox onChange={onChange}>Cebolla</Checkbox></Menu.Item>
                            <Menu.Item key="9"><Checkbox onChange={onChange}>Papa</Checkbox></Menu.Item>
                            <Menu.Item key="10"><Checkbox onChange={onChange}>Aguacate</Checkbox></Menu.Item>
                            <Menu.Item key="11"><Checkbox onChange={onChange}>Zanahoria</Checkbox></Menu.Item>
                            <Menu.Item key="12"><Checkbox onChange={onChange}>Pimiento</Checkbox></Menu.Item>
                            <Menu.Item key="14"><Checkbox onChange={onChange}>Tomate</Checkbox></Menu.Item>
                            <Menu.Item key="15"><Checkbox onChange={onChange}>Brocoli</Checkbox></Menu.Item>
                            <Menu.Item key="16"><Checkbox onChange={onChange}>Lechuga</Checkbox></Menu.Item>
                            <Menu.Item key="17"><Checkbox onChange={onChange}>Espinaca</Checkbox></Menu.Item>
                            <Menu.Item key="18"><Checkbox onChange={onChange}>Ajo</Checkbox></Menu.Item>
                            <Menu.Item key="19"><Checkbox onChange={onChange}>Pepino</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cilantro</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Apio</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"  icon={<img src={fruits} width='39px'/>} title="Frutas">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Limón</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Manzana</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Banana</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Fresa</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Naranja</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Piña</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Pasa</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Coco</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Uva</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Mango</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Pera</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Sandía</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Mandarina</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Kiwi</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Papaya</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Maracuya</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<img src={meat} width='39px'/>} title="Carnes">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Pollo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Tocino</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Carne molida</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Salchicha</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Jamón</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Chuletas</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Pavo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Carne de vaca</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Menudencias</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Hígado de pollo</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<img src={seafood} width='39px'/>} title="Mariscos">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Camaron</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cangrejo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Calamar</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Concha</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Langostinos</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="" icon={<img src={seafood} width='39px'/>} title="Pescado">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Atún</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Tilapia</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Salmon</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Bagre</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Trucha</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" icon={<img src={salsas} width='39px'/>} title="Salsas">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Salsa de tomate</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Mayonesa</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" icon={<img src={frijoles} width='39px'/>} title="Legumbres">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Frijoles negros</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Frijoles rojos</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Lenteja</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Alverja</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Soja</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Garbanzo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Habas</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Judías verdes</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8" icon={<img src={miel} width='39px'/>} title="Edulcorantes">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Azúcar blanca</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Miel</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Azúcar artificial</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Azúcar morena</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Azúcar glass</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub9" icon={<img src={cereal} width='39px'/>} title="Harinas y granos">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Arroz</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Pasta</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Harina de trigo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Harina de maíz</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Levadura en polvo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Polvo para hornear</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Bicarbonato de sodio</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Maicena</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Fideos</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Migas de pan</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Pan</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cereal</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Avena en ojuelas</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub10" icon={<img src={sal} width='39px'/>} title="Especies">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Canela</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Vainilla</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Orégano</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Comino</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Curry</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Clavo de olor</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Ajo en polvo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cilantro</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cacao</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Anís</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cubo de caldo</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub11" icon={<img src={aceite} width='39px'/>} title="Aceites">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Aceite de cocina</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Aceite de oliva</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Aceite de soja</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub12" icon={<img src={sopa} width='39px'/>} title="Sopas">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Sopa de pollo</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Caldo de carne</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub13" icon={<img src={pastel} width='39px'/>} title="Postres y Snacks">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Chocolate</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Nutella</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Mermelada</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Brownie</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Galletas</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Oreos</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Masa para galletas</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub14" icon={<img src={soda} width='39px'/>} title="Bebidas">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Café</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Té</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Gaseosa</Checkbox></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub15" icon={<img src={ginebra} width='39px'/>} title="Alcohol">
                            <Menu.Item key=""><Checkbox onChange={onChange}>Vino tinto</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Vino blanco</Checkbox></Menu.Item>
                            <Menu.Item key=""><Checkbox onChange={onChange}>Cerveza</Checkbox></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content className='main-content'
                         className="site-layout-background"
                         style={{
                             padding: 24,
                             margin: 0,
                             minHeight: 280,
                         }}
                >
                    <Recipe/>
                    <Pagination defaultCurrent={1} total={50} />
                </Content>
            </Layout>
    );

};



export default Home;