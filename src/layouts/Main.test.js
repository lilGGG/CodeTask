import React from "react";
import Main from "./Main";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// import { create, act } from "react-test-renderer";
// import { shallow, mount, render } from "enzyme";

describe('Main test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<Main/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    // it("Should test Shallow component", () => {
    //     const wrapper = shallow(<Main />);
    //     expect(wrapper).toMatchSnapshot();
    //   });
      
  });
  
