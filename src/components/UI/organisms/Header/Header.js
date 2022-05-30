import Title from "../../atoms/Title/Title";
import SearchItem from "../../molecules/SearchItem/SearchItem";

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
