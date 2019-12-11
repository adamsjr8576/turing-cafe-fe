import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should match the snapshot with all data passing correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when addReservation is called', () => {
    const wrapper = shallow(<App />);
    const mockReservation = {
      date:'12/5',
      name:'John Adams',
      number:4,
      time:'4:00'
    }

    expect(wrapper.state('reservations')).toEqual([]);

    wrapper.instance().addReservation(mockReservation);

    expect(wrapper.state('reservations')).toEqual([mockReservation]);
  });

});
