import React from "react";
import TitleEpisSeason from "./TitleEpisSeason";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { create, act } from "react-test-renderer";
import { shallow, mount, render } from "enzyme";

describe('TitleEpisSeason component', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<TitleEpisSeason Text="text epis"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
