import React from "react";
import MainTvShows from "./MainTvShows";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('MainTvShow test', () => {
    it('renders snapshot', () => {   

    const recordsVal = [{"score":0.7268808,"show":{"id":11291,"url":"https://www.tvmaze.com/shows/11291/f","name":"F","type":"Animation","language":"Japanese","genres":["Action","Anime","Sports"],"status":"Ended","runtime":25,"averageRuntime":25,"premiered":"1988-09-03","ended":"1988-11-29","officialSite":null,"schedule":{"time":"","days":["Monday","Tuesday","Saturday","Sunday"]},"rating":{"average":null},"weight":2,"network":{"id":131,"name":"Fuji TV","country":{"name":"Japan","code":"JP","timezone":"Asia/Tokyo"},"officialSite":null},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":265915,"imdb":"tt0816222"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/38/95340.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/38/95340.jpg"},"summary":"<p>Incredibly drayvovaya saga of Gunma Akagi, a young madman, blindly chasing after his dream - to become the fastest man on the planet! F - the quintessence of all that is worth to love Japanese animation: hair color is not bright, but the charisma of the characters, the plot, you do not let go for a minute and a fixed idea, the heart of the local universe - the race! Steep turns, overtaking, butting board-to-board, defeat, victory, anger, disappointment and triumph on the brink of madness!</p>","updated":1609794219,"_links":{"self":{"href":"https://api.tvmaze.com/shows/11291"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/859107"}}}},
    {"score":0.6610909,"show":{"id":4658,"url":"https://www.tvmaze.com/shows/4658/f-troop","name":"F Troop","type":"Scripted","language":"English","genres":["Comedy","Western"],"status":"Ended","runtime":30,"averageRuntime":30,"premiered":"1965-09-14","ended":"1967-04-06","officialSite":null,"schedule":{"time":"20:00","days":["Thursday"]},"rating":{"average":8},"weight":43,"network":{"id":3,"name":"ABC","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://abc.com/"},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":3620,"thetvdb":73154,"imdb":"tt0058800"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/21/52731.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/21/52731.jpg"},"summary":"<p>The end of the Civil War was near when quite accidentally, A hero who sneezed abruptly seized retreat and reversed it to victory; His medal of honor pleased and thrilled his proud little family group. While pinning it on some blood was spilled and so it was planned he'd command F Troop! Where Indian fights are colorful sights and nobody takes a lickin' When pale-face and red-skin both turn chicken; When drilling and fighting get them down they know their morale can't droop. As long as they all relax in town, before they resume with a bang and a boom, <b>F Troop!</b></p>","updated":1650808215,"_links":{"self":{"href":"https://api.tvmaze.com/shows/4658"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/298565"}}}},
     ];
 
      const tree = renderer.create(<MainTvShows records={recordsVal} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
