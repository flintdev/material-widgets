// src/control/Button/Button.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiButton} from "@material-ui/core/Button";
import {generateIcon} from "../../utils/iconGenerator";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from "@material-ui/core/Icon";

interface Params {
    variant?: 'outlined' | 'text' | 'contained',
    label?: string,
    icon?: string,
    theme?: 'default' | 'primary' | 'secondary',
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

    getIcon = () => {
        const {icon} = this.props.params;
        if (!!icon && icon !== "") return (
            <React.Fragment>
                <Icon>{icon}</Icon>&nbsp;
            </React.Fragment>
        )
        return <React.Fragment/>
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {label, theme} = params;
        return (
            <MuiButton
                variant={params.variant}
                color={theme}
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
                onClick={this.handleClick}
            >
                {this.getIcon()}
                {label}
            </MuiButton>
        )
    }
}

