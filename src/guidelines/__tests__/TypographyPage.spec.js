import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TypographyPage from '../TypographyPage.jsx';

describe('TypographyPage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TypographyPage />, div);
  });

  it('is in document', () => {
    const { getByTestId } = render(<TypographyPage />);
    expect(getByTestId('content')).toBeInTheDocument();
    for (let i = 1; i <= 6; i++) {
      expect(getByTestId('display-' + i)).toBeInTheDocument();
      expect(getByTestId('headline-' + i)).toBeInTheDocument();
      expect(getByTestId('headline-' + i + '_alt')).toBeInTheDocument();
    }
    expect(getByTestId('section-header')).toBeInTheDocument();
    expect(getByTestId('body-large')).toBeInTheDocument();
    expect(getByTestId('body-default')).toBeInTheDocument();
    expect(getByTestId('body-small')).toBeInTheDocument();
    expect(getByTestId('body-extra-small')).toBeInTheDocument();
    expect(getByTestId('menu-item')).toBeInTheDocument();
  });
});
