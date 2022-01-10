import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba del componente <GifGrid/>', () => {

    const category = 'One Punch';

    test('Tomar el snapshot del componente', () => {
      const wrapper = shallow(<GifGrid category ={category}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan las imagenes', () => {
       const gifs = [{
           id: 'ABC',
           url: 'https://localhost.com',
           title:'Cualquier cosa',
       }];
       
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: true
          });
        
        const wrapper = shallow(<GifGrid category ={category}/>);
        expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('p').exists()).toBe(false);


    })
    
    
})
 