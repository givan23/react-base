import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  changeSettingsSelector,
  changeValueSelector,
  decrement,
  getDefaultSettingsThunk,
  increment,
} from "./default.slice";

const defaultHook = () => {
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

  return {
    settings,
    value,
    getData,
    getIncrement,
    getDecrement,
  };
};

export default defaultHook;
