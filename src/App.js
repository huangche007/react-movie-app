import React,{Component} from 'react'
import {HashRouter,Link,Route} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
class App extends Component{

    render(){
      return(
        <HashRouter>
         <Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">电影</Menu.Item>
            <Menu.Item key="3">关于</Menu.Item>
          </Menu>
        </Header>
        <Content style={{height:'100%',backgroundColor:'#fff' }}>
        
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>React Movie App</Footer>
      </Layout>,
     </HashRouter>
      )
    }
}

export default App