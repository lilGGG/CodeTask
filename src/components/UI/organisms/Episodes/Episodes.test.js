import React from "react";
import Episodes from "./Episodes";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Episodes test', () => {
    it('renders snapshot', () => {
    // const episodVal = [{"id":142270,"url":"https://www.tvmaze.com/episodes/142270/under-the-dome-3x01-move-on","name":"Move On","season":3,"number":1,"type":"regular","airdate":"2015-06-25","airtime":"21:00","airstamp":"2015-06-26T01:00:00+00:00","runtime":60,"rating":{"average":8.3},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_landscape/12/31233.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/12/31233.jpg"},"summary":"<p>Season 3 begins with Chester's Mill residents appearing inside and outside the Dome following an evacuation into the tunnels beneath the town. Meanwhile, the Dome begins to reveal its ultimate agenda; and surprising alliances form as new residents emerge.</p>","_links":{"self":{"href":"https://api.tvmaze.com/episodes/142270"}}},
    //   {"id":151048,"url":"https://www.tvmaze.com/episodes/151048/under-the-dome-3x02-but-im-not","name":"But I'm Not","season":3,"number":2,"type":"regular","airdate":"2015-06-25","airtime":"22:00","airstamp":"2015-06-26T02:00:00+00:00","runtime":60,"rating":{"average":8},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_landscape/12/31234.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/12/31234.jpg"},"summary":"<p>Chester's Mill residents appear inside and outside the Dome following an exit into the tunnels beneath the town. Meanwhile, the Dome begins to reveal its ultimate agenda; and surprising alliances form as new residents emerge.</p>","_links":{"self":{"href":"https://api.tvmaze.com/episodes/151048"}}},
    // ];
      const tree = renderer.create(<Episodes episodes  />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
