import styled from 'styled-components';

const StyledLabel = styled.label`
    color: chocolate;
    padding: 0 0 4px 10px;
    line-height: 1.5;
    display: block;
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
