import  Image  from '../../atoms/Image/Image';
import TitleEpisSeason from '../../atoms/TitleEpisSeason/TitleEpisSeason';

function EpisSeasonItem({
  itemName,srcImg,img,url
}) {
  return (
    <div> 
          {/* <li> {img? <a href={url} target="_blank">   <Image src={img.medium}  />  </a>: ""} </li> */}
          <li> {img? <a href={url} target="_blank">   <Image SrcImage={srcImg}  />   </a>: ""} </li> 
          <li>  <TitleEpisSeason Text ={itemName}>  </TitleEpisSeason>  </li>
    </div>
  );
}

export default EpisSeasonItem;
