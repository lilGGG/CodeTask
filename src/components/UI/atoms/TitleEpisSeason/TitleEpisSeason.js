import styled from 'styled-components';

const StyledLabelEpicSeason = styled.h1` 
    font-size: 1em;
    text-align: left;
    color: chocolate;
`;

/**
 * Title for single episode or singe season heading
 * @param {string} Text 
 * @returns 
 */
function TitleEpisSeason({
  Text
}) {
  return (
     <> 
        <StyledLabelEpicSeason>
            {Text}
        </StyledLabelEpicSeason>
      </>
    );
}

export default TitleEpisSeason;
