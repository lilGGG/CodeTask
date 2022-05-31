import React from "react";
import EpisSeasonItem from "./EpisSeasonItem";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('EpisSeasonItem test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<EpisSeasonItem id="1" number="1"
      itemName="Epis name" srcImg="https://static.tvmaze.com/uploads/images/medium_portrait/45/113621.jpg" img={true} url="https://www.tvmaze.com/seasons/7/bitten-season-1"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
