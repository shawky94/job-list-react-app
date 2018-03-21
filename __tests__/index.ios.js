import 'react-native';
import React from 'react';
import PrototypeJobs from '../app/index.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn()
  }
}

test('renders correctly', () => {
  const tree = renderer.create(
    <PrototypeJobs />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
