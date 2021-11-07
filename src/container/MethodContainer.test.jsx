import React from 'react';
import { render } from '@testing-library/react';
import MethodContainer from './MethodContainer';

describe('should render entire content of container', () => {
    it('renders each presentational component within the method container', () => {
        render(
            <MethodContainer />
        );
        expect(MethodContainer).toMatchSnapshot();
    });
});