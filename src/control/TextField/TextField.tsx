//

import * as React from 'react';
import { default as MuiTextField, StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps } from "@material-ui/core/TextField";
import { Widget, WidgetProps } from "@flintdev/widget-builder";

export interface Props extends WidgetProps {
    params: StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps
}

export default class Button extends Widget<Props> {

    renderCustomComponent() {
        const { params } = this.props;
        return (
            <MuiTextField {...params}>
                {params.label}
            </MuiTextField>
        )
    }

}

