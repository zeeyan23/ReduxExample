import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';

const Counter = () => {

const dispatch=useDispatch();
  const counter = useSelector(state=> state.counter);
  const show=useSelector(state=>state.showCounter);

  const incrementHandler=()=>{
    dispatch({type:'increment'});
  }
  const increaseBy10Handler=()=>{
    dispatch({type:'increase',amount:10});
  }
  const decrementHandler=()=>{
    dispatch({type:'decrement'});
  }
  const decreaseBy5Handler=()=>{
    dispatch({type:'decrease',amount: 5});
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
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
