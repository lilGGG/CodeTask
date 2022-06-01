import SearchInput from "../../atoms/SearchInput/SearchInput";
import Label from "../../atoms/Label/Label";

/**
 * Component for searching input with its label
 * @param {string} text 
 * @param {Method} inputHandler 
 * @returns 
 */
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
