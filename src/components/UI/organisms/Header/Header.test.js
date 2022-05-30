import React from "react";
import Header from "./Header";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Header test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<Header 
        title="app title" searchLabel="tv" inputHandler={()=> {}}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
