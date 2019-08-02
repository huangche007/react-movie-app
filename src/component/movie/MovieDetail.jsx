import React, { Component } from 'react';
class MovieDetail extends Component {
    goBack = ()=> {
        this.props.history.go(-1);
    }
    render() {
        return (
            <div>
               <div onClick={this.goBack} style={{backgroundColor:'#1890ff',cursor:'pointer',color:'#fff',width:'100px',textAlign:'center',borderRadius:'4px'}}>
                
                返回电影列表
               </div>
            </div>
        );
    }
}

export default MovieDetail;