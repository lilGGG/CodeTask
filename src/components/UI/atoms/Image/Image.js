import styled from 'styled-components';
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });

// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({ adapter: new Adapter() });

export const ImageShows =  styled.img`
    width: 200px;
    height: auto;
`;


function Image({
   SrcImage
}) {
  return (
      <>
       <ImageShows src= {SrcImage} />
      </>
  ) 
}

export default Image;
