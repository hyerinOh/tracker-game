import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import GamePage from '../GamePage';

configure({ adapter: new Adapter() });

describe('<GamePage />', () => {
  let wrapper;

  beforeEach(() => {
    const getWinner = jest.fn();
    const distinguishWinner = jest.fn();

    wrapper = mount(
    <GamePage 
      target={{location: {latitude: 37.503282, longitude: 127.022113}}}
      getWinner={getWinner} 
      distinguishWinner={distinguishWinner}
      currUserInfo={{name: 'hyerin', photo: 'https://graph.facebook.com/1970911356370352/picture' }} 
    />
    );
  });

  it('should update states when input values are inserted', () => {
    const mockEvent = { target: { value: '1' } };
    wrapper.find('.answer').at(0).simulate('change', mockEvent);
    wrapper.find('.answer').at(1).simulate('change', mockEvent);
    wrapper.find('.answer').at(2).simulate('change', mockEvent);
    expect(wrapper.state('first')).toEqual('1');
    expect(wrapper.state('second')).toEqual('1');
    expect(wrapper.state('third')).toEqual('1');
  });

  it('should focus next input when previous input was filled', () => {
    const mockEvent = { target: { value: '1' } };
    wrapper.find('.answer').at(0).simulate('change', mockEvent);
    wrapper.find('.answer').at(1).simulate('change', mockEvent);
    wrapper.find('.answer').at(2).simulate('change', mockEvent);
    console.log(wrapper.find('.answer').at(0).props().value.length); // 1

    wrapper.instance().handleFirst = jest.fn();
    wrapper.instance().handleSecond = jest.fn();
    wrapper.instance().handleThird = jest.fn();
    wrapper.update();
    wrapper.instance().handleFirst('1');
    wrapper.instance().handleSecond('1');
    wrapper.instance().handleThird('1');

    expect(wrapper.instance().handleFirst).toBeCalledWith('1');
    expect(wrapper.instance().handleSecond).toBeCalledWith('1');
    expect(wrapper.instance().handleThird).toBeCalledWith('1');
  });

});
