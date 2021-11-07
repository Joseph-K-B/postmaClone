import React from 'react';
import MethodContainer from './MethodContainer';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('should render entire content of container', () => {
    it('renders each presentational component within the method container', async () => {
        render(
            <MethodContainer />
        );
        expect(MethodContainer).toMatchSnapshot();

        // const urlInput = await screen.findAllByLabelText('url');
        // userEvent.type(urlInput, 'https://jsonplaceholder.typicode.com/posts/1')

        // const methodInput = await screen.findAllByLabelText('GET');
        // userEvent.click(methodInput, 'GET');

        // const submitButton = await screen.findByRole('button', {
        //     name: 'make-request'
        // });

        // userEvent.click(submitButton);

        // return waitFor(() => {
        //     const content = screen.findAllByLabelText('userId', {
        //         exact: false
        //     });

        //     expect(content).toHaveLength(1);
        // });
    });
});