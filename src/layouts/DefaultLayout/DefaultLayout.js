/* eslint-disable no-script-url */
/* eslint-disable no-sparse-arrays */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {Layout, Col, Row, Menu, Icon, Modal, Form, Input,
    Tooltip, Tabs, Button, Checkbox} from 'antd'
import Home from '../../routes/Home/Home.js';
import Publish from '../../routes/Publish/Publish.js';
import Account from '../../routes/Account/Account.js';
import article1 from '../../routes/Articles/article1.js';

const { Header, Content, Footer } = Layout;

export default class DefaultLayout extends Component{
    state = {
        current: 'home',
    }
    handleClick=(e)=>{  // 点击事件
        this.setState({current:e.key});
    }
    render(){
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo" />
                    <Row gutter={5}>
                            <Col span={1}>
                                <img id='btculogo' src={require('../../image/btcu.png')} alt='btculogo'/>
                            </Col>
                            <Col span={4}>
                        <Input.Search
                            id='headSearch'
                            placeholder='搜索：'
                            style={{width: 100 + '%'}}
                            onSearch={value => console.log(value)}
                        />
                    </Col>
                    <Col span={7}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                        onClick={this.handleClick}
                    >
                      <Menu.Item key="1">
                            <Link  to="/home">社区首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link  to="/home/publish">嘻呦西柚</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link  to="/home/account">资源宝阁</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/home/account">个人中心</Link>
                        </Menu.Item>
                    </Menu>
                    </Col>
                    <Col span={15}>
                        
                    </Col>
                    </Row>
                </Header>
                <Content>
                    <div style={{padding: 80, minHeight: 500 }} className = "content-warp">
                        <Route path = {this.props.match.url + '/'} component = {Home} exact/>
                        <Route path = {this.props.match.url + '/publish'} component = {Publish} />
                        <Route path = {this.props.match.url + '/account'} component = {Account} />
                        <Route path = {this.props.match.url + '/article/1'} component = {article1} exact/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2020 Created by BTCU
                </Footer>
            </Layout>
        )
    }
}
