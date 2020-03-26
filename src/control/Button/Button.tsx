// src/control/Button/Button.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiButton} from "@material-ui/core/Button";

interface Params {
    variant?: 'outlined' | 'text' | 'contained',
    label?: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
}

interface Events {
    onClick?: (event: React.MouseEvent) => void
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events
}

export default class Button extends Widget<Props> {

    handleClick = (event: React.MouseEvent) => {
        const {events} = this.props;
        if (!!events.onClick) events.onClick(event);
    };

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <MuiButton
                variant={params.variant}
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
                onClick={this.handleClick}
            >
                {params.label}
            </MuiButton>
        )
    }

}

