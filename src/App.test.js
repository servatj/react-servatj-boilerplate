import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


test('Basic test App component', () => {
  const AppComponent = renderer.create(
    <App />
  )
  let tree = AppComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
