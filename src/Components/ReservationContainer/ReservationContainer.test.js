import React from 'react';
import ReactDOM from 'react-dom';
import ReservationContainer from './ReservationContainer';
import { shallow } from 'enzyme';

describe('ReservationContainer', () => {

  it('should match the snapshot with all data passing correctly', () => {
    const wrapper = shallow(<ReservationContainer
      reservations={[{date:'12/5', name:'John Adams', number:4, time:'4:00'}]}
      />);

    expect(wrapper).toMatchSnapshot();
  })

});
