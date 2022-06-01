import styled from 'styled-components';

export const ImageShows =  styled.img`
    width: 200px;
    height: auto;
`;


/**
 * Image component using in espisodes and seasons sections
 * @param {string} SrcImage 
 * @returns 
 */
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
