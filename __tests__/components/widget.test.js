import * as React from 'react';
import renderer from 'react-test-renderer';
import { Widget } from '../../src/components';

describe('test Input Component', () => {
  it('should render Input component', () => {
    const tree = renderer.create(<Widget />);
    expect(tree).toMatchSnapshot();
  });
});
