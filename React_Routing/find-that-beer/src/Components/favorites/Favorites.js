import React from 'react';
import Header from '../commen/Header';
import { dummyBeersData } from '../constants/dummyData';
import Beer from '../main/beers/Beer';

class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFor: "",
        };
    }
    setSearchText = (searchText) =>{
        this.setState({
            searchFor: searchText,
        });
    };
    render() {
        let favourites = dummyBeersData;
        if(!!this.state.searchFor){
            favourites = favourites.filter((beer) => 
                beer.name.toLowerCase().includes(this.state.searchFor.toLowerCase())
            );
        }
        
        return (
            <div className="wrapper">
                <Header setSearchText={this.setSearchText} />
                <main>
                    <div className="container">
                        {!!favourites.length &&
                            favourites.map((beer) => <Beer key={beer.id} info={beer} /> )}
                    </div>
                </main>
            </div>
        );
    }
}
export default Favourites;