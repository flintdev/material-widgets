// src/index.ts

import * as React from 'react';
import {ReactElement} from "react";

import Button, {Props as ButtonProps, configJson as ButtonConfig} from "./control/Button";
import TextField, {Props as TextFieldProps, configJson as TextFieldConfig} from "./control/TextField";
import Grid, {Props as GridProps, configJson as GridConfig} from "./layout/Grid";
import Label, {Props as LabelProps, configJson as LabelConfig} from "./control/Label";

export type WidgetProps = ButtonProps | TextFieldProps | GridProps;

export enum WidgetName {
    Button = "Button",
    TextField = "TextField",
    Grid = "Grid",
    Label = "Label",
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
        case WidgetName.Label:
            return <Label {...props as LabelProps}/>
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
    [WidgetName.Label]: {
        category: 'control',
        description: "",
    }
};

interface WidgetConfigMapInterface {
    [key: string]: object
}

const WidgetConfigMap: WidgetConfigMapInterface = {
    [WidgetName.Button]: ButtonConfig,
    [WidgetName.Grid]: GridConfig,
    [WidgetName.TextField]: TextFieldConfig,
    [WidgetName.Label]: LabelConfig,
};

export function getWidgetConfiguration(name: string): any {
    return WidgetConfigMap[name]
}


