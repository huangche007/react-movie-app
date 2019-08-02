import React, { Component } from 'react';
import { Spin, Alert,Pagination  } from 'antd';
import MovieItem from './MovieItem'
import PropTypes from 'prop-types';
class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies:[],
            nowPage:parseInt(props.match.params.page)||1,
            pageSize:10,
            total:0,
            isLoading:true,
            movieType:props.match.params.type
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
        console.log('movieType:',this.state.movieType)
        const start = this.state.pageSize*(this.state.nowPage-1)
        const url =`http://localhost:8081/movie/${this.state.movieType}?start=${start}
        &count=${this.state.pageSize}&apikey=0b2bdeda43b5688921839c8ecb20399b
        `
        fetch(url)
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                const {total,subjects,count,start} = data;
                this.setState({
                    movies:subjects,
                    total,
                    isLoading:false
                })
            })
    }
    /**
     * 组件接受到新的props触发
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){
        this.setState({
            nowPage:parseInt(nextProps.match.params.page) || 1,
            isLoading:true,
            movieType:nextProps.match.params.type
        },()=>{
            this.loadMoiveListByTypeAndPage();
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
            return  <div>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {
            
            this.state.movies?this.state.movies.map((item)=>{
                        return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem> 
                      }):[]
                }
            </div>
            <Pagination current={this.state.nowPage} defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize} onChange={this.handlePageChange} />
            </div>
        }
    }

    handlePageChange = (page) => {
        // window.location.href=`/#/movie/${this.state.movieType}/${page}`
        this.props.history.push(`/movie/${this.state.movieType}/${page}`)
    }
}

export default MovieList;