import React, { Component } from "react";
import {Header} from '../../commen';
import {dummyBeersData} from '../../constants/dummyData';
import Beer from './Beer'
import { Spinner } from "../../commen";

import {fetchBeers} from '../../../services/beerService';

class BeerGrid extends Component {
    constructor(props) {
        super(props);

    this.state = {
        isLoading : true,
        beers: dummyBeersData,
    }
    };

    scrollParentRef = null;

    // creating a service function outside componentdidmount so that its scope is not limited to only the componentdidmount function
    fetchBeers = async () => {
        const data = await fetchBeers();

        this.setState({
            beers: data,
            isLoading: false
        })
    }

    componentDidMount() {
        this.fetchBeers();
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div>
                <Header />

                {isLoading ? (
                    <Spinner />
                ) : (
                <main>
                    {/* Kunai point ma ref use garera container div manipulate garna pauchha*/}
                    <div className="container" ref={(r) => {
                        return (this.scrollParentRef = r);
                    }}>
                        {this.state.beers.map((beer) => (
                            <Beer key={beer.id} info={beer}/>
                        ))}
                    </div>
                </main>
                )}
               
            </div>
        );
    }
}

export default BeerGrid;
