import SearchInput from "../../atoms/SearchInput/SearchInput";
import Label from "../../atoms/Label/Label";

function SearchItem({
  text,inputHandler
}) {
  return (
    <div> 
           <Label Text={text}/>
           <SearchInput inputHandler={inputHandler} />
    </div>
  );
}

export default SearchItem;
