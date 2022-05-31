import React from "react";
import Main from "./Main";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Main test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<Main/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
