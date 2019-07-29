import React, { Component } from 'react';
import { Spin, Alert } from 'antd';
class MovieList extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies:[],
            nowPage:props.match.params.page,
            pageSize:14,
            total:0,
            isLoading:true
        }
    }
    componentWillMount(){
        // fetch('https://www.baidu.com').then((response)=>{
        //     return response.json()//es6中的fecth api第一个then返回的response是一个对象
        // }).then((mData)=>{
        //     console.log('Mdata:',mData)
        // })

        this.loadMoiveListByTypeAndPage()
    }

    loadMoiveListByTypeAndPage(){
        fetch('http://localhost:8081/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b')
            .then(res => res.json())
            .then(data=>{
                console.log(data)
            })
    }
    render() {
        return (
            <div>
               {this.renderMovie()}
            </div>
        );
    }

    renderMovie(){
        if(this.state.isLoading){
            return <Spin tip="Loading...">
            <Alert
            message="数据请求中..."
            description="电影列表马上呈现"
            type="info"
            />
            </Spin>
        }else{
            return <h1>哈哈哈</h1>
        }
    }
}

export default MovieList;