import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=34059e62367d4c2cbf4cba36390e7ec6&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    //PREVIOUS CLICK
    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=34059e62367d4c2cbf4cba36390e7ec6&page=${this.state.page - 1}&pageSize=20`;

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles

        })



    }
    //NEXT CLICK
    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=34059e62367d4c2cbf4cba36390e7ec6&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState(
                {
                    page: this.state.page + 1,
                    articles: parsedData.articles
                }
            )

        }




    }
    render() {


        return (
            <>

                <div className="container my-3">
                    <h2 className="d-flex justify-content-center">Main-Headlines</h2>
                    <div className="row">

                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
                                </div>

                            })}
                        </div>
                    </div>
                    <div class="d-flex justify-content-between my-3">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&laquo;Previous</button>
                        <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &raquo;</button>
                    </div>

                </div>
            </>
        )
    }
}
