/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('shows the Step One section title', () => {
  const tree = renderer.create(<App />);
  const textNodes = tree.root.findAllByType(Text);
  const titles = textNodes.map(node => node.props.children);
  expect(titles).toContain('Step One');
});
