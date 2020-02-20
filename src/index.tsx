// src/index.ts

import * as React from 'react';
import {ReactElement} from "react";

import Button, {Props as ButtonProps} from "./control/Button";
import TextField, {Props as TextFieldProps} from "./control/TextField";
import Grid, {Props as GridProps} from "./control/Grid";


export type WidgetProps = ButtonProps | TextFieldProps | GridProps;

export enum WidgetName {
    Button = "Button",
    TextField = "TextField",
    Grid = "Grid"
};

export function getWidget(name: WidgetName, props: WidgetProps): ReactElement {
    switch (name) {
        case WidgetName.Button:
            return <Button {...props as ButtonProps}/>;
        case WidgetName.TextField:
            return <TextField {...props as TextFieldProps}/>;
        case WidgetName.Grid:
            return <Grid {...props as GridProps}/>;
        default:
            return <></>
    }
}
