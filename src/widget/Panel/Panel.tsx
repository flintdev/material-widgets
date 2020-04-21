// src/widget/Panel/Panel.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    defaultExpansion?: 'expanded' | 'collapsed',
    title?: string,
}

export interface Props extends WidgetProps {
    params: Params
}

export default class Panel extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <ExpansionPanel
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                    flex: 1,
                }}
                defaultExpanded={params.defaultExpansion === 'expanded'}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant={"subtitle1"}>{params.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.placeContainer('panel-content')}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}
