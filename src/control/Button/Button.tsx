//

import * as React from 'react';
import {default as MuiButton} from "@material-ui/core/Button";
import {Widget, WidgetProps} from "@flintdev/widget-builder";

interface Params {
    variant?: 'outlined' | 'text' | 'contained',
    label?: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
}

export interface Props extends WidgetProps {
    params: Params,
    events: object
}

export default class Button extends Widget<Props> {

    renderCustomComponent() {
        const {params, events} = this.props;
        return (
            <MuiButton
                variant={params.variant}
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
            >
                    <span>
                        {this.placeContainer('icon')}
                    </span>
                {params.label}
            </MuiButton>
        )
    }

}

