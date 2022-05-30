import React from "react";
import Title from "./Title";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { create, act } from "react-test-renderer";
import { shallow, mount, render } from "enzyme";

describe('Title test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<Title Text="text"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
