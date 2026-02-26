import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Smoke Test', () => {
    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('should render a dummy component', () => {
        render(<div data-testid="test-div">Hello Ariya</div>);
        expect(screen.getByTestId('test-div')).toHaveTextContent('Hello Ariya');
    });
});
