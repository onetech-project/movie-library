import * as React from 'react';
import renderer from 'react-test-renderer';
import { DatePicker } from '../../src/components';

describe('test Input Component', () => {
  it('should render Input component', () => {
    const tree = renderer.create(<DatePicker placeholder="testing" />);
    expect(tree).toMatchSnapshot();
  });
});
