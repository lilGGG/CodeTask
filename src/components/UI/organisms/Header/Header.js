import Title from "../../atoms/Title/Title";
import SearchItem from "../../molecules/SearchItem/SearchItem";

function Header({
  title,searchLabel,inputHandler
}) {
  return (
    <div> 
           <Title Text={title}> </Title>
           {/* Tv Show with Seasons and Episodes  Search Show TV"*/}
           <SearchItem text={searchLabel} inputHandler={inputHandler} />
    </div>
  );
}

export default Header;
