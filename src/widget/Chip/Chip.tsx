// src/widget/Chip/Chip.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiChip} from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    label?: string,
    variant?: 'default' | 'outlined',
    theme?: 'default' | 'primary' | 'secondary',
    icon?: string,
}

export interface Props extends WidgetProps {
    params: Params
}

export default class Chip extends Widget<Props> {

    getIcon = () => {
        const {icon} = this.props.params;
        if (!icon || icon === "") return undefined;
        return (
            <Icon>{icon}</Icon>
        )
    };

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <MuiChip
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
                label={params.label}
                variant={params.variant}
                color={params.theme}
                icon={this.getIcon()}
            />
        )
    }
}
