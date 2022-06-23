import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import { counterActions } from '../components/store/index';
const Counter = () => {

const dispatch=useDispatch();
  const counter = useSelector(state=> state.counter);
  const show=useSelector(state=>state.showCounter);

  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  }
  const increaseBy10Handler=()=>{
    dispatch(counterActions.increase(10));
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }
  const decreaseBy5Handler=()=>{
    dispatch(counterActions.decrease(5));
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Dcrement</button>
        <button onClick={increaseBy10Handler}>Increase By 10</button>
        <button onClick={decreaseBy5Handler}>Decrease By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
