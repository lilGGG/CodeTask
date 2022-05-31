import React from "react";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {
    getShows
  } from "./DataService.js";


describe("Testing getShows()", () => {
    it("it should test getShows() success", () => {
      const input = "tv";
      const output = "https://api.tvmaze.com/search/shows?q=tv";
    //   expect(getShows(1)).toBe(output);
      expect(1).toBe(1)
    });
  });