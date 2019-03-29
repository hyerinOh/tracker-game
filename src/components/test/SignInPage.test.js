import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SignInPage from '../SignInPage';

configure({ adapter: new Adapter() });

describe('<SignInPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignInPage />);
  });

  it('should render one <button> with class signInBtn', () => {
    expect(wrapper.find('.signInBtn').length).toBe(1);
  });

  // it('simulates click events', () => {
  //   jest.mock('../SignInPage', () => () => 'SignInPage'); 

  //   const instance = shallow(<SignInPage />);
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log(SignInPage);
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   // const mock = wrapper.instance().auth.(() => {
  //   //   wrapper.props().onButtonClick();
  //   // });

  //   // wrapper.find('button').simulate('click');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   // console.log(mock);
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   console.log('-----------------------');
  //   // expect(mock).toHaveBeenCalledTimes(1);
  // });
});
