// src/widget/NavBar/NavBar.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

interface Params {
    title: string,
}

const styles: any = {
    paper: {
        width: '100%',
        borderRadius: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        display: 'flex',
    },
    titleText: {
        height: '100%',
        flex: 1
    },
    actionsContainer: {
        minWidth: 200,
        height: '100%',
        textAlign: "right"
    }
};

export interface Props extends WidgetProps {
    params: Params
}

export default class NavBar extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <Paper style={styles.paper}>
                <Typography variant={"h5"} style={styles.titleText}>{params.title}</Typography>
                <div style={styles.actionsContainer}>
                    {this.placeContainer('actions')}
                </div>
            </Paper>
        )
    }
}
