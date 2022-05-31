import  Image  from '../../atoms/Image/Image';
import TitleEpisSeason from '../../atoms/TitleEpisSeason/TitleEpisSeason';

function EpisSeasonItem({
  id,itemName,srcImg,img,url
}) {
   const unique = id + Math.random();
  //  console.log("unique", unique)
  return (
    <div> 
          <li key={Math.random()}> {img? <a href={url} target="_blank">   <Image SrcImage={srcImg}  />   </a>: ""} </li> 
          {itemName? <li key={Math.random()}>  <TitleEpisSeason Text={itemName}>  </TitleEpisSeason>  </li>: "" }
    </div>
  );
}

export default EpisSeasonItem;
