import renderer,  { create, act } from "react-test-renderer";
import { shallow, mount, render } from "enzyme";
import Episodes from "./Episodes.js";


it("Should test shallow component", () => {
    const wrapper = shallow(
        <Episodes
        />
    );
    expect(wrapper).toMatchSnapshot();
  });

// it("renders correctly episodes", () => {
//     const epis = renderer
//       .create(
//         <Episodes
//         />
//       )
//       .toJSON();
//     expect(epis).toMatchInlineSnapshot();
//   });