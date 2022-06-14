import React from 'react';
import { getByTestId, render,screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
// import { EnzymeAdapter } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { toBeInTheDocument } from '@testing-library/jest-dom';

import CardsView from './cardsView'

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
  it('Should render the card', () => {
    const wrapper = shallow(<CardsView />)
    const Card  = wrapper.find('#cardContainer');
    expect(Card).toHaveLength(1);
  })

  it('Should render the CArd',()=>{
    const wrapper = shallow(<CardsView />)
    const Card  = wrapper.find('Card');
    expect(Card)
  })
})