import { HTMLAttributes } from "react";

export interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}
