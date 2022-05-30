import styled from 'styled-components';

const TitleStyl = styled.h1`
  font-size: 2em;
  text-align: center;
  color: chocolate;
`;

function Title({
  Text
}) {
  return (
     <> 
        <TitleStyl>
            {Text}
        </TitleStyl>
      </>
    );
}

export default Title;
