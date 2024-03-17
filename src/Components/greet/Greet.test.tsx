import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
import { subscribe } from "diagnostics_channel";

//we can name it as Greet.spac.tsx or Greet-test.tsx

// test('Greet renders correctly',()=>{
//   render(<Greet/>)
//   const textElem = screen.getByText('Hello') //(/hello/i)
//   expect(textElem).toBeInTheDocument()
// })

//Test driven developement approach => red to green

// 1.Greet should render the text Hello and if a name is passed into the component
// it should render the name followed by hello name

//group the test cases
describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElem = screen.getByText("Hello");
    expect(textElem).toBeInTheDocument();
  });

  describe("Nested", () => {
    //we can us "it" instead of test
    it(" renders with the name", () => {
      render(<Greet name="Murali" />);
      const textElmName = screen.getByText("Hello Murali");
      expect(textElmName).toBeInTheDocument();
    });
  });

  //test.only('') to run the specfic test cases
  //test.skip('') to skip the particular test cases
});
