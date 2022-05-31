import React from "react";
import Home from "./Home";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Home test', () => {
    it('renders snapshot', () => {     
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
