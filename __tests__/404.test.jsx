import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Custom404 from '../src/pages/404';

describe('404 Page', () => {
  it('renders 404 heading', () => {
    render(<Custom404 />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Custom404 />);
    expect(screen.getByText('Go Home')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
});