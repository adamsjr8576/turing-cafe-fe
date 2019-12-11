import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form
      addReservation={jest.fn()}
      />);
  });

  it('should match the snapshot with all data passing correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with the input value when updateInputState is called', () => {
      const mockEvent = {target: {name:'name', value:'John Adams'}}

      expect(wrapper.state('name')).toEqual('');

      wrapper.instance().updateInputState(mockEvent);

      expect(wrapper.state('name')).toEqual('John Adams');
  });

  it('should call updateInputState onchange of the input', () => {
    wrapper.instance().updateInputState = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = {target: {name:'name', value: 'John'}}

    wrapper.find('.input1').simulate('change', mockEvent);
    expect(wrapper.instance().updateInputState).toHaveBeenCalledWith(mockEvent);
  })

});
