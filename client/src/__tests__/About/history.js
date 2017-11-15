import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import History from "../../components/About/History.js";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the About container',() => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<History />);
  })
  
  it('renders a component', () => {
    //expect(wrapper.contains(<h1>History of Sudoku</h1>)).toBe(true)
    expect(wrapper.length).toEqual(1)
  });
  
  it('contains header - h1', () => {
    expect(wrapper.contains(<h1>History of Sudoku</h1>)).toBe(true)
  });
  
});