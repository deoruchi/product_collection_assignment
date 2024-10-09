import React from "react";
import { Header } from "./Header";
import { Contained } from "./Contained";

export const Layout = () => {
  return (
    <section className="section-layout-grid overflow-hidden">
      <Header />
      <Contained />
    </section>
  );
};
