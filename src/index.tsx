// src/index.ts

import * as React from 'react';
import Button, {Props as ButtonProps} from "./control/Button";
import {ReactElement} from "react";

export type Props = ButtonProps;

export type WidgetName = 'button';

export const widgetMap = (props: Props) => {
    return {
        button: <Button {...props}/>
    }
};

export function getWidget(name: WidgetName, props: Props): ReactElement {
    return widgetMap(props)[name];
}
