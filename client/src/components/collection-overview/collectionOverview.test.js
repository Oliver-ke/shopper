import React from 'react';
import { shallow } from 'enzyme';
import { CollectionOverview } from './CollectionOverview';

describe('CollectionOverview component', () => {
	let wrapper;
	beforeEach(() => {
		const mockProps = {
			collections: [
				{
					name: 'jeans',
					id: 'riidkty',
					items: [
						{
							imageUrl: 'https://items/jpg',
							price: 200,
							name: 'yellow Shirt',
							quantity: 1,
						},
					],
				},
			],
		};
		wrapper = shallow(<CollectionOverview {...mockProps} />);
	});

	it('should render CollectionOverview component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
