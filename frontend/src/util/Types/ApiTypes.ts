import { Dispatch } from "react";

export type FoodOption = {
  imgSrc: string;
  title: string;
  selected: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
}

export type Menu = {
    title: string;
    width: number;
    height: number;
    x: number;
    y: number;
}