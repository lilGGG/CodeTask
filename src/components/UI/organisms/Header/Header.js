import Title from "../../atoms/Title/Title";
import SearchItem from "../../molecules/SearchItem/SearchItem";

/**
 * Header component including application title and search input item
 * @param {string} title 
 * @param {string} searchLabel 
 * @param {Method} inputHandler 
 * @returns 
 */
function Header({
  title,searchLabel,inputHandler
}) {
  return (
    <div> 
           <Title Text={title}> </Title>
           <SearchItem text={searchLabel} inputHandler={inputHandler} />
    </div>
  );
}

export default Header;
