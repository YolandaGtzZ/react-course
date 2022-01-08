import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Debe de mostrar el componente <GifGridItem />", () => {
  const title = "un titulo";
  const url = "https://localhost.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe demostrasrlo correctamente", () => {    
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
     
    const p =wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la img igual a los props', () => {
      const img = wrapper.find('img');
      console.log(img.prop());     
  })  
  
});
