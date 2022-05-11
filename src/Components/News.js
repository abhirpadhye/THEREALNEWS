import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    
            static defaultProps={
                   country:'in',
                   pageSize:'8',
                   category:'general'
            }
            static propTypes={
                country:PropTypes.string,
                pageSize:PropTypes.number,
                category:PropTypes.string,
            }


            
    
constructor(){
    super();
    console.log("Constructor from news")
    this.state = {
    articles: [],
    loading :false,
    page:1
    }
    
}

async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=65324b52d4a742ee915857ad930c0ccf&page=1&pagesize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }
    handlePrevClick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=65324b52d4a742ee915857ad930c0ccf&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true});

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles,
            loading:false

        })

    }
    handleNextClick = async ()=>{
        
        if (!( this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=65324b52d4a742ee915857ad930c0ccf&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
        })
            }
        }
     
    
    render() {
        return (
            <div className="container my-3">
            <h1 className="text-center" style={{font:"algerian"}} >Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
               return <div className="col-md-4" key={element.url}>
               <Newsitem  title= {element?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} imageUrl = {element.urlToImage} newsurl={element.url} author={element.author}date={element.publishedAt} > </Newsitem>
               </div>
            })}
<div class="d-flex justify-content-between">
    <button disabled={this.state.page<=1}type="button" className="btn btn-danger" onClick={this.handlePrevClick} style={{margin:"30px"}} >
    &#8592;Previous

          </button>
          <button disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button"  onClick={this.handleNextClick}className="btn btn-danger"style={{margin:"30px"}} >
            Next&#8594;
          </button></div>
        </div>
</div>
                    

                )
             

            
        
    }
}

export default News
