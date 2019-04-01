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
});
