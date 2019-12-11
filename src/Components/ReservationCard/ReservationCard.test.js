import React from 'react';
import ReactDOM from 'react-dom';
import ReservationCard from './ReservationCard';
import { shallow } from 'enzyme';

describe('ReservationCard', () => {

  it('should match the snapshot with all data passing correctly', () => {
    const wrapper = shallow(<ReservationCard
      date='12/5'
      id='123123'
      name='John Adams'
      number={4}
      time='4:00'
      key='123123'
      />);

    expect(wrapper).toMatchSnapshot();
  })

});
