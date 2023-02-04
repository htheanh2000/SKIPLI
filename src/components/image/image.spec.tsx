import { render, cleanup, waitFor } from '@testing-library/react';
import LazyImage from './';
import IM_1 from '../../assets/image/1.png'
import React from 'react';
afterEach(cleanup);

describe('LazyImage component',  () => {
  it('does not render anything before the image is loaded', () => {
    const { queryByAltText } = render(<LazyImage src={IM_1} alt="Image_1" />);
    expect(queryByAltText('Image_1')).toBeNull();
  });
});


