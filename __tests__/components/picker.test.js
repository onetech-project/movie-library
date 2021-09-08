import * as React from 'react';
import renderer from 'react-test-renderer';
import { Picker } from '../../src/components';

describe('test Input Component', () => {
  it('should render Input component', () => {
    const tree = renderer.create(<Picker data={[]} textProperty="" titleProperty="" placeholder="testing" value="" />);
    expect(tree).toMatchSnapshot();
  });
});
