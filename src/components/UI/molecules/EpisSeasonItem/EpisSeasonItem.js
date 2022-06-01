import  Image  from '../../atoms/Image/Image';
import TitleEpisSeason from '../../atoms/TitleEpisSeason/TitleEpisSeason';


/**
 * This return image and image title pair
 *  in order to use in seasons and episodes 
 * @param {*season or episode id} id 
 * @param {*season or episode name} itemName
 * @param {* season or episode img src} srcImg
 * @param {* season or episode img} img
 * @param {* season or episode url} url
 * @returns {*image and title pair}
 */
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
