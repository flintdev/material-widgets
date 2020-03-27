// src/index.ts

import * as React from 'react';
import {ReactElement} from "react";

import Button, {Props as ButtonProps, configJson as ButtonConfig} from "./control/Button";
import TextField, {Props as TextFieldProps, configJson as TextFieldConfig} from "./control/TextField";
import Grid, {Props as GridProps, configJson as GridConfig} from "./layout/Grid";
import Label, {Props as LabelProps, configJson as LabelConfig} from "./control/Label";
import SimpleTable , {Props as SimpleTableProps, configJson as SimpleTableConfig} from "./widget/SimpleTable";
import TableContainer , {Props as TableContainerProps, configJson as TableContainerConfig} from "./widget/TableContainer";
import TableRow , {Props as TableRowProps, configJson as TableRowConfig} from "./widget/TableRow";
import Page , {Props as PageProps, configJson as PageConfig} from "./layout/Page";

export type WidgetProps = ButtonProps | TextFieldProps | GridProps | SimpleTableProps | TableContainerProps | TableRowProps | PageProps;

export enum WidgetName {
    Button = "Button",
    TextField = "TextField",
    Grid = "Grid",
    Label = "Label",
    SimpleTable = "SimpleTable",
    TableContainer = "TableContainer",
    TableRow = "TableRow",
    Page = "Page",
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
            return <Label {...props as LabelProps}/>;
        case WidgetName.SimpleTable:
            return <SimpleTable {...props as SimpleTableProps}/>;
        case WidgetName.TableContainer:
            return <TableContainer {...props as TableContainerProps}/>;
        case WidgetName.TableRow:
            return <TableRow {...props as TableRowProps}/>;
        case WidgetName.Page:
            return <Page {...props as PageProps}/>;
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
    },
    [WidgetName.SimpleTable]: {
        category: 'widget',
        description: ""
    },
    [WidgetName.TableContainer]: {
        category: 'widget',
        description: "",
    },
    [WidgetName.TableRow]: {
        category: 'widget',
        description: "",
    },
    [WidgetName.Page]: {
        category: "layout",
        description: ""
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
    [WidgetName.SimpleTable]: SimpleTableConfig,
    [WidgetName.TableContainer]: TableContainerConfig,
    [WidgetName.TableRow]: TableRowConfig,
    [WidgetName.Page]: PageConfig,
};

export function getWidgetConfiguration(name: string): any {
    return WidgetConfigMap[name]
}

export {
    Button,
    TextField,
    Label,
    Grid,
    SimpleTable,
    TableContainer,
    TableRow,
    Page
}