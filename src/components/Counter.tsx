import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { decrement, increment, incrementAsync, incrementByAmount } from '../state/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    return <div>
        <h2>{count}</h2>
        <div>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(incrementAsync(2))}>Increment Async</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by 10</button>
        </div>
    </div>
}

export default Counter

