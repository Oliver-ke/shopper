import React from 'react';
import { shallow } from 'enzyme';
import { CartDropDown } from './CartDropDown';

describe('CartDropDown component', () => {
	let wrapper;
	let mockDispatch;
	let mockProps;
	beforeEach(() => {
		mockDispatch = jest.fn();
		mockProps = {
			dispatch: mockDispatch,
			cartItems: [ { id: 1, name: 'some name' }, { id: 2, name: 'another name' } ],
			history: {
				push: jest.fn(),
			},
		};
		wrapper = shallow(<CartDropDown {...mockProps} />);
	});

	it('should render CartDropDown component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should call dispatch when clicked', () => {
		wrapper.find('CartDropdownButton').simulate('click');
		expect(mockDispatch).toHaveBeenCalled();
		expect(mockProps.history.push).toHaveBeenCalledWith('/checkout');
	});
});

// cartItems, history, dispatch
