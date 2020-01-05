import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton component', () => {
	let wrapper;
	beforeEach(() => {
		const mockProps = {
			children: '<p>Save</p>',
		};
		wrapper = shallow(<CustomButton {...mockProps} />);
	});

	it('should render CustomButton component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
