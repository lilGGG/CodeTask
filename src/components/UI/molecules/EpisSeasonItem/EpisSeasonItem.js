import  Image  from '../../atoms/Image/Image';
import TitleEpisSeason from '../../atoms/TitleEpisSeason/TitleEpisSeason';

/**
 * This return image and image title pair
 *  in order to use in seasons and episodes 
 * @param {string} itemName season or episode name
 * @param {string} srcImg season or episode img src
 * @param {img} img season or episode img
 * @param {string} url season or episode url
 * @returns {} image and title pair
 */

function EpisSeasonItem({
   itemName,srcImg,img,url
}) {
  return (
    <div> 
          <li key={Math.random()}> {img? <a href={url} target="_blank">   <Image SrcImage={srcImg}  />   </a>: <a href={url} target="_blank">   <TitleEpisSeason Text="Show Item">  </TitleEpisSeason>   </a>} </li> 
          {itemName? <li key={Math.random()}> <a href={url} target="_blank">  <TitleEpisSeason Text={itemName}>  </TitleEpisSeason> </a> </li>: "" }
    </div>
  );
}

export default EpisSeasonItem;
