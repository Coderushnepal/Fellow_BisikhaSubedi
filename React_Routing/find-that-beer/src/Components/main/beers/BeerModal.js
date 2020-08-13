import React, {Component} from 'react';
import {Modal, Spinner} from "../../commen"; 
import { fetchBeerById } from "../../../services/beerService"; 
import * as toast from '../../../utils/toast';
import PropTypes from 'prop-types';

// yo beermodal ma hamlay kunai state define gardainam, aako props bata nai overall kaam garchham so functional component
class BeerModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            beer: {},
        };
    }

    fetchBeer = async () => {

        // yesto fetchBeerById garda, if api call nai bhako thayna bhanay error aaunay chances hunthyo, so handle testo errors with try catch
        // try block bhitra first line mai error aaidyo bhanay second line mai jadaina sidhai catch block ma pugchha
        try {
            const data = await fetchBeerById(this.props.beerId);

            this.setState ({
                beer : data,
                isLoading: false,
            });
            toast.success({ title: 'Yayy' , message: 'beers successfully retrived' });
        } catch (error) {
            toast.success({title: 'Oh Snap!!' , message: 'beers failed to retrive'});
        } 
    };

    componentDidMount() {
        this.fetchBeer();
    }

    render(){

        // destructuring garna bhanda agade
        //  cosnt { name } = this.props.beer huncthyo

        const { beer, isLoading } = this.state;
        const { handleClose, show } = this.props;

        const {
            description,
            image_url,
            name,
            tagline, 
            ibu,
            abv,
            ebc,
            food_pairing,
        } = beer;
        
        return(
            <Modal show={show} handleClose={handleClose}> 
                {isLoading ? <Spinner /> : (
                    <div className="DescriptionModal clearfix">
                    <div>
                        <div className="DescriptionModal__left">
                            <div className="DescriptionModal__left__imgcontainer" style={{ backgroundImage:`url(${image_url})` }}
                            />
                        </div>
                        <div className="DescriptionModal__right">
                            <h1>{name}</h1>
                            <span className="DescriptionModal__right__title">{tagline}</span>
                            <ul>
                                <li>
                                    <span className="bold">IBU:</span> {ibu}
                                </li>
                                <li>
                                    <span className="bold">ABV:</span> {abv}
                                </li>
                                <li>
                                    <span className="bold">EBC:</span> {ebc}
                                </li>
                            </ul>
                            <p>{description}</p>
                            {/* !! length lai garda food_pairing vannay object ko length lai boolean ma convert garyo, empty huda false aauchha value */}
                            {/* React class ko second app day ko 45th minute ma explained chha if got confused */}
                            { !!food_pairing.length && (
                                <div className="DescriptionModal__right__list">
                                <span>Best served with: </span>
                                <ul>
                                    {food_pairing.map((food, index) => (
                                        <li key={index}>{food}</li>
                                    ))}
                                </ul>
                                </div>
                            )}
                            <div>
                                {/* <h2>{description}</h2> */}
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </Modal>
        )
    }
}                                                       

BeerModal.propTypes = {
   beerId: PropTypes.number,
   handleClose: PropTypes.func,
   show: PropTypes.bool,
};

export default BeerModal;