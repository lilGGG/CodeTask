import React from "react";
import TitleEpisSeason from "./TitleEpisSeason";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('TitleEpisSeason component', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<TitleEpisSeason Text="text epis"/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
