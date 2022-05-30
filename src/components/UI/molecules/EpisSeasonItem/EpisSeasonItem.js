import  Image  from '../../atoms/Image/Image';
import TitleEpisSeason from '../../atoms/TitleEpisSeason/TitleEpisSeason';

function EpisSeasonItem({
  id, number,itemName,srcImg,img,url
}) {
  //  console.log("url", `${itemName} ${id} ${url}` );
   const unique = number;
  //  console.log( unique, "uniq");
  return (
    <div> 
          {/* <li> {img? <a href={url} target="_blank">   <Image src={img.medium}  />  </a>: ""} </li> */}
          <li> {img? <a href={url} target="_blank">   <Image SrcImage={srcImg}  />   </a>: ""} </li> 
          {itemName? <li>  <TitleEpisSeason Text ={itemName}>  </TitleEpisSeason>  </li>: "" }
    </div>
  );
}

export default EpisSeasonItem;
