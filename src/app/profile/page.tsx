"use client";
import React from "react";
import { useSelector } from "react-redux";
import { IState } from "./../../interfaces/state";
import { increase, increaseByA } from "@/lib/countSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  let dispatch = useDispatch<any>();
  let { counter } = useSelector((state: IState) => state.counter);

  return (
    <>
      <div>counter:{counter}</div>;
      <button
        onClick={() => {
          dispatch(increaseByA(10));
        }}
      >
        click amount
      </button>
    </>
  );
};

export default Profile;
