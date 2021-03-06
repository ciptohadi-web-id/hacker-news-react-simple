import React from 'react';
import ReactDOM from 'react-dom';
import App, { SearchBox, Button, List } from './App';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SearchBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBox>Search</SearchBox>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <SearchBox localFilter={false}>Search</SearchBox>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button', () => {
  const props = {
    onClick: () => {}
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button {...props}>Give Me More</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button {...props}>Give Me More</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('List', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
    onDismiss: () => {}
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List {...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <List {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(
      <List {...props} />
    );
    expect(element.find('.table-row').length).toBe(2);
  });
});
