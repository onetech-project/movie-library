import * as React from 'react';
import renderer from 'react-test-renderer';
import { BaseContainer } from '../../src/components';

describe('test Input Component', () => {
  it('should render Input component', () => {
    const tree = renderer.create(<BaseContainer />);
    expect(tree).toMatchSnapshot();
  });
});
