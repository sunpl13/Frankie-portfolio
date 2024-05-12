"use client";
import React, { useRef } from "react";
import style from "./HalfCircle.module.css";
const HalfCircle = () => {
  return <div className={`${style["half_circle"]} absolute bottom-0 w-1/2 rounded-b-none rounded-t-full bg-green-100`}></div>;
};

export default HalfCircle;
