import React, { FunctionComponent } from 'react';

import { Form, Username, EmailIcon, Password, LockIcon, SignInButton } from './styles';

interface FormInterface {
    onChange: any;
    onSubmit: any;
}

export const LoginForm: FunctionComponent<FormInterface> = ({ onChange, onSubmit }) => {
    return (
        <Form onChange={onChange} onSubmit={onSubmit}>
            <Username>
                <EmailIcon />
                <input type="text" name="username" id="username" placeholder="username" />
            </Username>
            <Password>
                <LockIcon />
                <input type="password" name="password" id="password" placeholder="password" />
            </Password>
            <SignInButton type="submit">
                <span>Sign in</span>
            </SignInButton>
        </Form>
    );
};
