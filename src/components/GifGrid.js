import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  useFetchGifs.mockReturnValue({
    data:[ ],
    loading: true
  });

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__swing'>{category}</h3>
      {loading && <p>Loading</p>}
      <div >
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};


GifGrid.propTypes ={
  category: PropTypes.string.isRequired
};

