import React from 'react';
import App from './App';
import Header from './components';
import toJson from 'enzyme-to-json';

import { shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));

// describe('rendering components', () => {
//   it('render App component without crashing', () => {
//     shallow(<App/>)
//   })
  
//   it('renders App component header without crashing', () => {
//     const wrapper = shallow(<App />)
//     const header = (<Header />);
//     expect(wrapper.contains(header)).toEqual(true)
//   })
// })

describe('snapshots', ()=> {
  it('App snapshots', ()=> {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
