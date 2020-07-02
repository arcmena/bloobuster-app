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
                    <Input type="text" name="firstname" id="firstname" />
                </FName>

                <Lname>
                    <label htmlFor="lastname">Last name</label>
                    <Input type="text" name="lastname" id="lastname" />
                </Lname>
            </div>

            <div>
                <Username>
                    <label htmlFor="username">Username</label>
                    <Input type="text" name="username" id="username" />
                </Username>

                <Email>
                    <label htmlFor="email">E-mail</label>
                    <Input type="email" name="email" id="email" />
                </Email>
            </div>

            <div>
                <Pass>
                    <label htmlFor="password">Password</label>
                    <Input type="password" name="password" id="password" />
                </Pass>

                <ConfPass>
                    <label htmlFor="confPassword">Confirm password</label>
                    <Input
                        type="password"
                        name="confPassword"
                        id="confPassword"
                    />
                </ConfPass>
            </div>

            <DivButton>
                <FinishButton type="submit">Finish</FinishButton>
            </DivButton>
        </Form>
    );
};
