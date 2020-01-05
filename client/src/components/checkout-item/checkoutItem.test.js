import React from 'react';
import { shallow } from 'enzyme';
import { CheckoutItem } from './CheckoutItem';

describe('CartItem component', () => {
	let wrapper;
	let mockRemoveItem;
	let mockAddItem;
	let mockClearItem;
	beforeEach(() => {
		mockAddItem = jest.fn();
		mockRemoveItem = jest.fn();
		mockClearItem = jest.fn();
		const mockProps = {
			cartItem: {
				imageUrl: 'https://items/jpg',
				price: 200,
				name: 'yellow Shirt',
				quantity: 1,
			},
			addItem: mockAddItem,
			removeItem: mockRemoveItem,
			clearItem: mockClearItem,
		};
		wrapper = shallow(<CheckoutItem {...mockProps} />);
	});

	it('should render CartItem component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should call remove item on removeItem btn click', () => {
		wrapper.find('.remove').simulate('click');
		expect(mockRemoveItem).toHaveBeenCalled();
	});
	it('should call add item on addItem btn click', () => {
		wrapper.find('.add').simulate('click');
		expect(mockAddItem).toHaveBeenCalled();
	});
	it('should call clear item on clear click', () => {
		wrapper.find('.remove-button').simulate('click');
		expect(mockClearItem).toHaveBeenCalled();
	});
});
