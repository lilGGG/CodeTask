import React from "react";
import Home from "./Home";
import ReactDom from "react-dom";
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// import { create, act } from "react-test-renderer";
// import { shallow, mount, render } from "enzyme";

describe('Home test', () => {
    it('renders snapshot', () => {
    //   const seasonsVal = [{"id":3,"url":"https://www.tvmaze.com/seasons/3/person-of-interest-season-1","number":1,"name":"","episodeOrder":23,"premiereDate":"2011-09-22","endDate":"2012-05-17","network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://www.cbs.com/"},"webChannel":null,"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/24/60864.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/24/60864.jpg"},"summary":"","_links":{"self":{"href":"https://api.tvmaze.com/seasons/3"}}},
    //   {"id":4,"url":"https://www.tvmaze.com/seasons/4/person-of-interest-season-2","number":2,"name":"","episodeOrder":22,"premiereDate":"2012-09-27","endDate":"2013-05-09","network":{"id":2,"name":"CBS","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://www.cbs.com/"},"webChannel":null,"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/24/60865.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/24/60865.jpg"},"summary":"","_links":{"self":{"href":"https://api.tvmaze.com/seasons/4"}}},
    // ];      
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
  
