import { useSelector, useDispatch } from "react-redux";
import {counterActions}  from '../slices/counterSlice'

export function useStore() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(counterActions.increment()),
    clear: () => dispatch(counterActions.clear()),
  };
}