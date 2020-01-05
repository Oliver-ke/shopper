import React from 'react';
import { shallow } from 'enzyme';
import { CartItem } from './CartItem';

describe('CartItem component', () => {
	let wrapper;
	beforeEach(() => {
		const mockProps = {
			item: {
				imageUrl: 'https://items/jpg',
				price: 200,
				name: 'yellow Shirt',
				quantity: 1,
			},
		};
		wrapper = shallow(<CartItem {...mockProps} />);
	});

	it('should render CartItem component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render the item image ', () => {
		const imageNode = wrapper.find('img');
		expect(imageNode.html()).toEqual('<img src="https://items/jpg" alt="item"/>');
	});

	it('should render name and price', () => {
		const nameNode = wrapper.find('.name');
		expect(nameNode.text()).toEqual('yellow Shirt');
		const priceNode = wrapper.find('.price');
		expect(priceNode.text()).toEqual('1 X $200');
	});
});

//imageUrl, price, name, quantity
