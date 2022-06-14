import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import AddNewProduct from './AddNewProductPage'
import AddProductForm from '../includes/productForm'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


describe('Add New Product Page rendering of elements', () => {

    let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<AddProductForm/>);
    });

    it('renders correct heading for About', () => {
        expect(shallowWrapper.find("label"))
    })

    it('renders one AddProductForm React component', () => {
        expect(shallowWrapper.find(AddProductForm));
    })
})
