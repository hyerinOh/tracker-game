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
    // console.log(wrapper.find('.answer').at(0).props().value.length); // 1

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

  it('should open modal when the answer is submitted', () => {
    const mockEvent = { target: { value: '1' } };

    wrapper.find('.answer').at(0).simulate('change', mockEvent);
    wrapper.find('.answer').at(1).simulate('change', mockEvent);
    wrapper.find('.answer').at(2).simulate('change', mockEvent);
    expect(wrapper.find('.answer').at(0).length).toEqual(1);
    expect(wrapper.find('.answer').at(1).length).toEqual(1);
    expect(wrapper.find('.answer').at(2).length).toEqual(1);
    expect(wrapper.find('Modal').length).toBe(0);
    wrapper.find('.submitBtn').simulate('click');
    wrapper.instance().distinguishCorrectAnswer = jest.fn();
    wrapper.instance().forceUpdate();


    expect(wrapper.state('isModalOpen')).toBeTruthy();
    expect(wrapper.find('Modal').length).toBe(1);
  });

  it('should check if answers are true or false', () => {
    // up일 때
    wrapper.setState({
      first: '1',
      second: '2',
      third: '3',
    });
    wrapper.find('.submitBtn').simulate('click');
    expect(wrapper.state().isCorrectAnswer).toBeFalsy();
    expect(wrapper.state().isUpOrDown).toEqual('Up');
    expect(wrapper.state().isModalOpen).toBeTruthy();

    // down일 때
    wrapper.setState({
      first: '5',
      second: '5',
      third: '5',
    });
    wrapper.find('.submitBtn').simulate('click');
    expect(wrapper.state().isCorrectAnswer).toBeFalsy();
    expect(wrapper.state().isUpOrDown).toEqual('Down');
    expect(wrapper.state().isModalOpen).toBeTruthy();

    // 정답일 때
    wrapper.setState({
      first: '2',
      second: '8',
      third: '2',
    });

    wrapper.find('.submitBtn').simulate('click');
    expect(wrapper.state().isCorrectAnswer).toBeTruthy();
    expect(wrapper.state().isModalOpen).toBeTruthy();
  });
});
