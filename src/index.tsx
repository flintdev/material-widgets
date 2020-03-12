// src/index.ts

import * as React from 'react';
import {ReactElement} from "react";

import Button, {Props as ButtonProps, configJson as ButtonConfig} from "./control/Button";
import TextField, {Props as TextFieldProps} from "./control/TextField";
import Grid, {Props as GridProps, configJson as GridConfig} from "./layout/Grid";

export type WidgetProps = ButtonProps | TextFieldProps | GridProps;

export enum WidgetName {
    Button = "Button",
    TextField = "TextField",
    Grid = "Grid"
}

type WidgetInfoType = {
    [key in WidgetName]: {
        category: 'control' | 'layout' | 'widget';
        description?: string;
    };
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



export const widgetInfo: WidgetInfoType = {
    [WidgetName.Button]: {
        category: "control",
        description: ""
    },
    [WidgetName.TextField]: {
        category: "control",
        description: ""
    },
    [WidgetName.Grid]: {
        category: "layout",
        description: ""
    },
};

interface WidgetConfigMapInterface {
    [key: string]: object
}

const WidgetConfigMap: WidgetConfigMapInterface = {
    [WidgetName.Button]: ButtonConfig,
    [WidgetName.Grid]: GridConfig,
};

export function getWidgetConfiguration(name: string): any {
    return WidgetConfigMap[name]
}


