import React from "react";
import Image from "./Image";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { create, act } from "react-test-renderer";
import { shallow, mount, render } from "enzyme";

describe('Should Preferences', () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Image SrcImage="https://static.tvmaze.com/uploads/images/medium_portrait/24/60941.jpg"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });


  });
  
