import React, { FunctionComponent } from "react";

import {
    Form,
    Input,
    FName,
    Lname,
    Username,
    Email,
    Pass,
    ConfPass,
    DivButton,
    FinishButton,
} from "./styles";

interface FormInterface {
    onChange: any;
    onSubmit: any;
}

export const SignUpForm: FunctionComponent<FormInterface> = ({
    onChange,
    onSubmit,
}) => {
    return (
        <Form onChange={onChange} onSubmit={onSubmit}>
            <div>
                <FName>
                    <label htmlFor="firstname">First name</label>
                    <Input
                        type="text"
                        name="firstname"
                        id="firstname"
                        required
                    />
                </FName>

                <Lname>
                    <label htmlFor="lastname">Last name</label>
                    <Input type="text" name="lastname" id="lastname" required />
                </Lname>
            </div>

            <div>
                <Username>
                    <label htmlFor="username">Username</label>
                    <Input type="text" name="username" id="username" required />
                </Username>

                <Email>
                    <label htmlFor="email">E-mail</label>
                    <Input type="email" name="email" id="email" required />
                </Email>
            </div>

            <div>
                <Pass>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </Pass>

                <ConfPass>
                    <label htmlFor="confPassword">Confirm password</label>
                    <Input
                        type="password"
                        name="confPassword"
                        id="confPassword"
                        required
                    />
                </ConfPass>
            </div>

            <DivButton>
                <FinishButton type="submit">Finish</FinishButton>
            </DivButton>
        </Form>
    );
};
