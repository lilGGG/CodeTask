import React from "react";
import SearchItem from "./SearchItem";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// import { create, act } from "react-test-renderer";
// import { shallow, mount, render } from "enzyme";

describe('SearchItem test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<SearchItem text="texta" inputHandler={()=>{}}
       />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
