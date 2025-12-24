import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../landing_page/home/Hero";
import Awards from "../landing_page/home/Awards";




describe("hero component",()=>{
  test("render hero image",()=>{
    render(<Hero/>);
    const heroImage=screen.getByAltText("Hero Images");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");
  });

// describe("award Image",()=>{
//   test("render award",()=>{
//     render(<Awards/>);
//     const AwardImage=screen.getAllByAltText("largestBroker");
//     expect(AwardImage).toBeInTheDocument();
//     expect(AwardImage).toHaveAttribute("src","media/images/largestBroker.svg")
//   });
// });
describe("award Image", () => {
  test("render award", () => {
    render(<Awards />);

    const awardImage = screen.getByAltText("largestBroker");

    expect(awardImage).toBeInTheDocument();
    expect(awardImage).toHaveAttribute(
      "src",
      "media/images/largestBroker.svg"
    );
  });
});



});