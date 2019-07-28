import React,{Component} from 'react'
import {HashRouter,Link,Route} from 'react-router-dom'
import HomeContainer from './component/home/HomeContainer'
import MovieContainer from './component/movie/MovieContainer'
import AboutContainer from './component/about/AboutContainer'
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
            <Menu.Item key="1">
              <Link to="/home">
              首页
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/movie">
              电影
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/about">
              关于
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{height:'100%',backgroundColor:'#fff' }}>
         <Route path="/home" component={HomeContainer}>

         </Route>
         <Route path="/movie" component={MovieContainer}>

        </Route>
        <Route path="/about" component={AboutContainer}>

        </Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>React Movie App</Footer>
      </Layout>,
     </HashRouter>
      )
    }
}

export default App