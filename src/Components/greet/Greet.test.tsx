import { render ,screen } from "@testing-library/react";
import Greet from "./Greet";

// test('Greet renders correctly',()=>{
//   render(<Greet/>)
//   const textElem = screen.getByText('Hello') //(/hello/i)
//   expect(textElem).toBeInTheDocument()
// })


//Test driven developement approach => red to green 

// 1.Greet should render the text Hello and if a name is passed into the component 
// it should render the name followed by hello name 

test('Greet renders correctly', ()=>{
     render(<Greet/>)
    const textElem = screen.getByText('Hello')
    expect(textElem).toBeInTheDocument()
});

test('Greet renders with the name',()=>{
   render(<Greet name="Murali" />)
   const textElmName = screen.getByText('Hello Murali')
   expect(textElmName).toBeInTheDocument()
})