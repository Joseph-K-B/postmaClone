import React from 'react';
import { render } from '@testing-library/react';
import MethodList from '../app/MethodList';

describe('renders list of API calls made', () => {
    it('should display initial message of please make request', () => {
        render(
            <MethodList />
        );
        expect(MethodList).toMatchSnapshot();
    });
});