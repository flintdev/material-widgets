// src/index.ts

import * as React from 'react';
import Button, {Props as ButtonProps} from "./control/Button";
import TextField, {Props as TextFieldProps} from "./control/TextField";
import {ReactElement} from "react";

export type WidgetProps = ButtonProps | TextFieldProps;

export enum WidgetName {
    Button = "Button",
    TextField = "TextField"
};

export function getWidget(name: WidgetName, props: WidgetProps): ReactElement {
    console.log(name);
    switch (name) {
        case WidgetName.Button:
            return <Button {...props as ButtonProps}/>;
        case WidgetName.TextField:
            return <TextField {...props as TextFieldProps}/>;
    }
}
