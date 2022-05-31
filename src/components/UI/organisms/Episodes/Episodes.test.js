import React from "react";
import Episodes from "./Episodes";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Episodes test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<Episodes episodes  />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
