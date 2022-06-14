import React from 'react'
import Enzyme,{ shallow } from 'enzyme'
// import EditProductsPage from './EditProductsPage'
import EditProductPage from './EditProductPage'
import EditProductForm from '../includes/editProductForm'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import { getByTestId, render } from '@testing-library/react';
Enzyme.configure({ adapter: new Adapter() })



describe('Test Case For EditProductPage', () => {
    it('Should render the EditProductForm', () => {
    //   const wrapper = shallow(<EditProductPage />)
      const wrapper = shallow(<EditProductForm />)
      const Card  = wrapper.find('.form-group');
      expect(Card).toHaveLength(0);
    })
  })