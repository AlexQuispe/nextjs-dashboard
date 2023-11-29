"use client";

import { useEffect } from "react";

type Props = {
  entry: string;
};

export default function Card(props: Props) {
  useEffect(() => {
    console.log("card created...");
  }, []);
  return <div>CARD - {props.entry}</div>;
}
