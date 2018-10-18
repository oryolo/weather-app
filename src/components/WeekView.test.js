import React from 'react';
import ReactDOM from 'react-dom';
import WeekView from './WeekView';
import '../SetupTest';
import { shallow } from 'enzyme';

it('renders current day of the week', () => {
  let today = new Date().toDateString();
  today = today.substring(0, 3);
  expect(
    shallow(<WeekView />).find('div').first().text().substring(0, 5)
  ).toBe('Today');
});

it('renders last day in a week', () => {
  let today = new Date();
  today.setDate(today.getDate() + 6);
  let lastDay = today.toDateString().substring(0, 3);
  expect(
    shallow(<WeekView />).find('div').last().text().substring(0, 3)
  ).toBe(lastDay);
});

// it('renders 7 tabs', () => {
//   expect((shallow(<WeekView />).find('div')).to.have.lengthOf(7)).toBe(true);
// });