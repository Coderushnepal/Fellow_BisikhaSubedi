import React, { Component } from 'react';
import { blogData } from "../../constants/blogData";
import SideNav from '../../constants/SideNav/SideNav';

import BlogCard from "./BlogCard";
import './blogs.css';

class BlogGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            //array ma data rakhne
            blogs: [],
        };
    }
    scrollPartnerRef = null;

    //dummydata call
    fetchBlogs = async () => {
        setTimeout(() => {
            this.setState({
                blogs: blogData,
                isLoading: false,
            });
        }, 1000);
    };

    componentDidMount() {
        this.fetchBlogs();
    }
    render() {
        // const { isLoading } = this.state;
        return (
            <div>
                <main>
                    <div className="container"
                        ref={(r) => (this.scrollPartnerRef = r)}>
                        {this.state.blogs.map(blog => (
                            <BlogCard key={blog.id} info={blog} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }
}
export default BlogGrid;