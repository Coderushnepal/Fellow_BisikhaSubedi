import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import {Header} from '../../commen';
// import {dummyBeersData} from '../../constants/dummyData';
import Beer from './Beer'
import { Spinner } from "../../commen";
import * as toast from "../../../utils/toast";

import {fetchBeers} from '../../../services/beerService';

class BeerGrid extends Component {
    constructor(props) {
        super(props);

    this.state = {
        beers: [],
        pageInfo: { page: 0, size: 25 },
        hasMore: true,
        searchFor: "",
        hasFilter: false,
    }
    };

    scrollParentRef = null;

    setSearchText = (searchText) => {
        this.setState ({
            searchFor : searchText,
            hasFilter: true,
        }, () => {
            this.fetchBeers();
        })
    }

    // creating a service function outside componentdidmount so that its scope is not limited to only the componentdidmount function
    fetchBeers = async () => {  
        try {
            const { beers, pageInfo, searchFor, hasFilter } = this.state;
            let { page, size } = pageInfo; 

            if(hasFilter) {
                page = 0;
            }

            const data = await fetchBeers(page + 1, size, searchFor);

            this.setState({
                //page 1 ma ekota set of data aauchha ani page 2 ma pugda page 1 ko pani data basos bhanera paila ko data lai concat garna parchha using spread operator
                beers: hasFilter ? data : [...beers, ...data],
                pageInfo: {
                    ...pageInfo, //mathi ko pageInfo ko sabai calue haru yaha aauchha jasma page ko value matra replace garnay in next line
                    page: data.length ? page + 1 : page,
                },
                hasMore: !!data.length,
                hasFilter: false,
            });
            // toast.success({ title: 'Yayy' , message: 'beers successfully retrived' });
        } catch (error) {
            // console.log('The error is' , error.respone);
            
            const errorMsg = error.response.data.message;
            toast.error({title: 'Oh Snap!!' , message: errorMsg });
    } 
    }
    componentDidMount() {
        this.fetchBeers();
    }

    render() {
        const { beers, hasMore } = this.state;
        return (
            <div>
                <Header setSearchText = {this.setSearchText}/>

                
                <main>
                    {/* Kunai point ma ref use garera container div manipulate garna pauchha*/}
                    <div className="container" ref={(r) => {
                        return (this.scrollParentRef = r);
                    }}>
                    <InfiniteScroll
                        dataLength = {beers.length}
                        next={this.fetchBeers}
                        hasMore={hasMore}
                        loader={<Spinner />}
                    >
                        {this.state.beers.map((beer) => (
                            <Beer key={beer.id} info={beer}/>
                        ))}
                    </InfiniteScroll>
                    </div>
                </main>
                )
               
            </div>
        );
    }
}

export default BeerGrid;
