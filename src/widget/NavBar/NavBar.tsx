// src/widget/NavBar/NavBar.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

interface Params {
    title: string,
    bgColor: string,
    titleColor: string,
}

const styles: any = {
    paper: {
        borderRadius: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        display: 'flex',
    },
    titleContainer: {
        flex: 1,
        display: 'table'
    },
    titleText: {
        height: '100%',
        display: 'table-cell',
        verticalAlign: 'center',
    },
    actionsContainer: {
        minWidth: 200,
        height: '100%',
        textAlign: "right"
    },
};

export interface Props extends WidgetProps {
    params: Params
}

export default class NavBar extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <Paper style={{...styles.paper, backgroundColor: params.bgColor}}>
                <div style={styles.titleContainer}>
                    <Typography variant={"h6"} style={{...styles.titleText, color: params.titleColor}}>{params.title}</Typography>
                </div>
                <div style={styles.actionsContainer}>
                    {this.placeContainer('navbar-actions')}
                </div>
            </Paper>
        )
    }
}
