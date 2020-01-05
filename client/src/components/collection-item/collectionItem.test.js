import React from 'react';
import { shallow } from 'enzyme';
import { CollectionItem } from './CollectionItem';

describe('CollectionItem component', () => {
	let wrapper;
	let mockAddItem;
	beforeEach(() => {
		mockAddItem = jest.fn();
		const mockProps = {
			item: {
				imageUrl: 'https://items/jpg',
				price: 200,
				name: 'yellow Shirt',
				quantity: 1,
			},
			addItem: mockAddItem,
		};
		wrapper = shallow(<CollectionItem {...mockProps} />);
	});

	it('should render CollectionItem component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should call addItem on button click', () => {
		wrapper.find('collectionButton').simulate('click');
		expect(mockAddItem).toHaveBeenCalled();
	});
});
