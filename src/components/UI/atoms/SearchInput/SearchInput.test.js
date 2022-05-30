import React from "react";
import SearchInput from "./SearchInput";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { create, act } from "react-test-renderer";
import { shallow, mount, render } from "enzyme";

describe('SearchInput test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<SearchInput inputHandler={()=> {}}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
