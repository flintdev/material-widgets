// src/widget/TableContainer/TableContainer.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from "@material-ui/core/TableHead";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import {default as MuiTableContainer} from '@material-ui/core/TableContainer';

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    pagination: number,
}

export interface Props extends WidgetProps {
    params: Params,
}

// TODO: pagination

export default class TableContainer extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <MuiTableContainer
                component={Paper}
                style={{
                    marginTop: params.marginTop,
                    marginBottom: params.marginBottom,
                    marginLeft: params.marginLeft,
                    marginRight: params.marginRight,
                }}
            >
                <Table>
                    <TableHead>
                        {this.placeContainer('head')}
                    </TableHead>
                    <TableBody>
                        {this.placeContainer('body')}
                    </TableBody>
                    <TableBody>
                        {this.placeContainer('footer')}
                    </TableBody>
                </Table>
            </MuiTableContainer>
        )
    }
}