import React, { Component } from 'react'

export default class NewsItem extends Component {

    
    constructor() {
        super()
        this.state = {
            
        }
        // console.log("no. of times")
    }

    render() {
        let { title, description, imgUrl, newsUrl } = this.props;

        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={!imgUrl ? "https://media.istockphoto.com/photos/breaking-news-3d-rendering-virtual-set-studio-picture-id1219965949?k=20&m=1219965949&s=612x612&w=0&h=9yXmM0qrzrAtVCn3p2F8RwVzsFn-qD44jIWAFyK8wGM=" : imgUrl } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}
