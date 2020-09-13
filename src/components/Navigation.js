import React from "react";
import {Dropdown, Menu} from "antd";
import { QuestionCircleOutlined, HomeOutlined, DownOutlined, UserOutlined   } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

const { Search } = Input;

const Navigation = () =>{
    const diet = (
        <Menu>
            <Menu.Item key="0">
                <p>Vegetarian</p>
            </Menu.Item>
            <Menu.Item key="1">
                <p>Vegan</p>
            </Menu.Item>
            <Menu.Item key="3">Lactose free</Menu.Item>
        </Menu>
    );
    const horaDia = (
        <Menu>
            <Menu.Item key="0">
                <p>Breakfast</p>
            </Menu.Item>
            <Menu.Item key="1">
                <p>Lunch</p>
            </Menu.Item>
            <Menu.Item key="3">Dinner</Menu.Item>
        </Menu>
    );
     return (
<>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}
        >
            <Menu.Item key="home" icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="profile"  icon={<UserOutlined />}>
                <Link to='profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="diet">
                <Dropdown overlay={diet} trigger={['click']}>
                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Diet <DownOutlined />
                    </div>
                </Dropdown>
            </Menu.Item>
            <Menu.Item key="mealType">
                <Dropdown overlay={horaDia} trigger={['click']}>
                    <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Meal type <DownOutlined />
                    </div>
                </Dropdown>
            </Menu.Item>
            <Menu.Item key="question" icon={<QuestionCircleOutlined />}>
                <Link to='question'></Link>
            </Menu.Item>

        </Menu>
    <br/>
    </>

     );
};
export default Navigation;