import React from "react";
import { render } from '@testing-library/react';
import Content from '../app/Content';

describe('renders content component', () => {
    it('should display figure with React-Json viewer', () => {
        render(
            <Content />
        );
        expect(Content).toMatchSnapshot();
    });
});