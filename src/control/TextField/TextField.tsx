// src/control/TextField/TextField.tsx

import * as React from 'react';
import { default as MuiTextField } from "@material-ui/core/TextField";
import { Widget, WidgetProps } from "@flintdev/widget-builder";

interface Params {
    variant?: 'standard' | 'outlined' | 'filled',
    label?: string,
    value?: string,
    placeholder?: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
}

interface Events {
    onChange?: (args: object) => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

export default class TextField extends Widget<Props> {

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {events} = this.props;
        const value = event.target.value;
        if (!!events.onChange) events.onChange({value});
    };

    renderCustomComponent() {
        const { params } = this.props;
        return (
            <MuiTextField
                value={params.value}
                onChange={this.handleChange}
                label={params.label}
                placeholder={params.placeholder}
                variant={params.variant as any}
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
            />
        )
    }

}

