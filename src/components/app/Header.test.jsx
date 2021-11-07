import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('renders header with h1', () => {
    it('displays header and styling upon component mounting', () => {
        render(
            <Header />
        );
        expect(Header).toMatchSnapshot();
    });
});