import styled from 'styled-components';

const SearchInp = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  color:gray;
  background: #e5e2e2;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: chocolate;
  }
`;


function SearchInput({
    inputHandler
}) {
  return (
      <>
        <SearchInp  placeholder="Enter Tv Show Title" onChange={inputHandler} />
      </>
  ) 
}

export default SearchInput;
