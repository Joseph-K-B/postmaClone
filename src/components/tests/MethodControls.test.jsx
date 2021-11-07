import React from 'react';
import { render } from '@testing-library/react';
import MethodControls from '../app/MethodControls';

describe('renders form/controls', () => {
    it('should display all inputs and button', () => {
        render(
            <MethodControls />
        );
        expect(MethodControls).toMatchSnapshot();
    });
});