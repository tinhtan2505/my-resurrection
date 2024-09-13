import React from "react";
import { decrement, increment } from "./counterSlice";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

export function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <div>{count}</div>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
    </div>
  );
}
