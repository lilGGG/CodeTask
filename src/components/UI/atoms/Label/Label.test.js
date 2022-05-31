import React from "react";
import Label from "./Label";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { create, act } from "react-test-renderer";
import { shallow, mount, render } from "enzyme";

describe('Label test', () => {

    it('renders snapshot', () => {
      const tree = renderer.create(<Label Text="title text"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });


  });
  
