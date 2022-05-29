import styled from 'styled-components';

const StyledLabel = styled(Label)>`
    font-size: 1em;
    text-align: left;
    color: chocolate;
`;

function Label({
  Text
}) {
  return (
     <> 
        <StyledLabel>
            {Text}
        </StyledLabel>
      </>
    );
}

export default Label;
