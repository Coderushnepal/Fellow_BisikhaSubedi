import React, { Component, Fragment } from 'react';
import "./blogs.css";

class BlogCard extends Component {
    render() {
        const { blogTitle, blogText, blogImage, blogAuth } = this.props.info;
        console.log(blogImage);
        return (
            <Fragment>
                <div className="card">
                    <div class="blog__image">
                        <img src={blogImage} alt =""></img>
                    </div>
                    <div class="blog__title">
                        <h2>{blogTitle}</h2>
                        <p>{blogAuth}</p>
                    </div>
                    <div className="blog__description">
                        {blogText}
                        <button className="btn__readmore">Read More</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default BlogCard;