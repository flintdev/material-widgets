import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Typography from "@material-ui/core/Typography";

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    text?: string,
    fontSize?: number,
    fontWeight?: string,
    color?: string,
}

export interface Props extends WidgetProps {
    params: Params
}

export default class Label extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        const text = !!params.text ? params.text : '';
        return (
            <Typography
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                    fontSize: params.fontSize,
                    fontWeight: params.fontWeight === 'bold' ? "bold" : undefined,
                    color: params.color,
                }}
            >
                {text}
            </Typography>
        )
    }
}