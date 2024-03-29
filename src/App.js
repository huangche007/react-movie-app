import React,{Component} from 'react'
import {HashRouter,Link,Route,Switch} from 'react-router-dom'
import HomeContainer from './component/home/HomeContainer'
import MovieContainer from './component/movie/MovieContainer'
import AboutContainer from './component/about/AboutContainer'
import { Layout, Menu } from 'antd';
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
            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">
              <Link to="/home">
              首页
              </Link>
            </Menu.Item>
            <Menu.Item key="movie">
            <Link to="/movie/in_theaters/1">
              电影
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
            <Link to="/about">
              关于
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{height:'100%',backgroundColor:'#fff',flex:1 }}>
          <Switch>
            <Route path="/home" component={HomeContainer}>

            </Route>
            <Route path="/movie" component={MovieContainer}>

            </Route>
            <Route path="/about" component={AboutContainer}>

            </Route>
          </Switch>
         
        </Content>
        <Footer style={{ textAlign: 'center' }}>React Movie App</Footer>
      </Layout>,
     </HashRouter>
      )
    }
}

export default App