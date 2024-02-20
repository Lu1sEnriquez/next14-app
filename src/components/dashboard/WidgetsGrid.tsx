'use client'
import React from "react";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { IoCartSharp } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap gap-3 ">
      <SimpleWidget
        subTitle="Contador"
        title={`${count}`}
        href={"/dashboard/counter"}
        icon={<IoCartSharp size={70}/>}
        key={count}
      ></SimpleWidget>
    </div>
  );
};
