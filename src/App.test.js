import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('App test', () => {
    it('renders snapshot', () => {
      const tree = renderer.create(<App/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
      
});
  

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
