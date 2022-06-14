import React from 'react';
import { getByTestId, render,screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
// import { EnzymeAdapter } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { toBeInTheDocument } from '@testing-library/jest-dom';

import About from './About';

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
  it('should render button', () => {
    const wrapper = shallow(<About />)
    const Card  = wrapper.find('#about');
    expect(Card).toHaveLength(1);
  })
})