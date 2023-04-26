import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="text-red-500">
      <i className="fas fa-home"></i> Home Page
    </div>
  );
}
