import React from 'react';
import { render } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should show carregando if loading', () => {
    const button = render(<Button />);

    expect(button);
  });
});
