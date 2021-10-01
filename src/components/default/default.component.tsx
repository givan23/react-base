import React from "react";
import dog from "../../assets/dog.jpg";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  changeSettingsSelector,
  changeValueSelector,
  decrement,
  getDefaultSettingsThunk,
  increment,
} from "./default.slice";

const DefaultComponent = () => {
  const dispatch = useAppDispatch();
  // use Thunk
  const getData = useCallback(() => {
    dispatch(getDefaultSettingsThunk(1));
  }, [dispatch]);
  // use action
  const getIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  const getDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const settings = useAppSelector(changeSettingsSelector);
  const value = useAppSelector(changeValueSelector);
  return (
    <div>
      <img src={dog} />
      <button onClick={getData}>GET DATA</button>
      <p>{settings?.response}</p>
      <br />
      <br />
      <button onClick={getIncrement}>INCREMENT</button>
      <button onClick={getDecrement}>DECREMENT</button>
      <h1>{value}</h1>
    </div>
  );
};

export default DefaultComponent;
