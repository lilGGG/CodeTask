import styled from 'styled-components';

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
