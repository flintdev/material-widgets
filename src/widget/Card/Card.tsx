// src/widget/Card/Card.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiCard} from '@material-ui/core/Card';
import {default as MuiCardHeader} from '@material-ui/core/CardHeader';
import {default as MuiCardContent} from '@material-ui/core/CardContent';
import {default as MuiCardActions} from '@material-ui/core/CardActions';
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    headerIcon?: string,
    headerIconBgColor?: string,
    headerIconColor?: string,
    title?: string
    subtitle?: string
}

export interface Props extends WidgetProps {
    params: Params
}

export default class Card extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <MuiCard
                style={{
                    flex: 1,
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
            >
                <MuiCardHeader
                    avatar={
                        <Avatar style={{backgroundColor: params.headerIconBgColor}}>
                            <Icon style={{color: params.headerIconColor}}>{params.headerIcon}</Icon>
                        </Avatar>
                    }
                    action={
                        this.placeContainer('card-headerAction')
                    }
                    title={params.title}
                    subheader={params.subtitle}
                />
                <MuiCardContent>
                    {this.placeContainer('card-content')}
                </MuiCardContent>
                <MuiCardActions>
                    {this.placeContainer('card-actions')}
                </MuiCardActions>
            </MuiCard>
        )
    }
}
