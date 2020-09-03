import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../Components/constants/actions';

export const increaseCount = () => {
    return { type: COUNTER_INCREMENT  }
}

export const decreaseCount = () => {
    return { type: COUNTER_DECREMENT }
}