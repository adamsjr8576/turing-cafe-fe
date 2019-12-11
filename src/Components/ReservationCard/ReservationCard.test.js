import React from 'react';
import ReactDOM from 'react-dom';
import ReservationCard from './ReservationCard';
import { shallow } from 'enzyme';

describe('ReservationCard', () => {

  let wrapper;
  const mockhandleReservationDelete = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ReservationCard
      date='12/5'
      id='123123'
      name='John Adams'
      number={4}
      time='4:00'
      key='123123'
      handleReservationDelete={mockhandleReservationDelete}
      />);
  });

  it('should match the snapshot with all data passing correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleReservationDelete on button click', () => {
    const mockEvent = {target: {id: 212312}}

    wrapper.find('button').simulate('click', mockEvent);

    expect(mockhandleReservationDelete).toHaveBeenCalledWith(212312);
  })

});
