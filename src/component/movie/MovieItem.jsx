import React, { Component } from 'react';
import styles from '../../css/movie_item.scss'
class MovieItem extends Component {
    render() {
        return (
            <div className="box">
                <img src={this.props.images.small.replace('http://img3.doubanio.com','https://img1.doubanio.com')} className="img"/>
                <h4>电影名称:{this.props.title}</h4>
                <h4>上映年份:{this.props.year}</h4>
                <h4>电影类型:{this.props.genres.join('、')}</h4>
            </div>
        );
    }
}

export default MovieItem;