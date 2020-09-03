import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterActions } from '../../actions';

const Counter = ({ count , actions}) => (
    <div>
        <p>
            Counter {count}
            <button 
                style = {{
                    position: "relative",
                    clear: "both",
                    padding: "10px",
                    margin: "10px"
                }}
                onClick={actions.increaseCount}
                > + 
            </button>
            <button 
            style = {{
                position: "relative",
                clear: "both",
                padding: "10px",
                margin: "10px"
            }}
            onClick={actions.decreaseCount}
            >
              -  
            </button>
        </p>
    </div>
);

// //combind reducer ko sabai state as a callback, state ma available hunchha
// const mapStateToProps = (state) => {
//     console.log('state is: ', state);
//     return {
//         //state ma aaunay multiple reducer ma ekota reducer leyera value update gareko   
//         count: state.counterReducer.count,
//     };
// };


// state receive nagarera state ma aaunay counterReducer ko ni count lai access garna ko lagi below code
const mapStateToProps = ({counterReducer : { count }}) => {
    //return chain object nai garna parchha
    //count bhaneko state of reducer ho. mapStatetoprop mean, count bhannay state lai Counter bhannay component ma as a prop pass garna banako bhayo
    return {
        count,
    };
}

// action creator lai bind garna milchha dispatch sanga
const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators({ ...counterActions } , dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);