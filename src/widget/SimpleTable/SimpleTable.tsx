// src/widget/SimpleTable/SimpleTable.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    columns: string[],
    data: Array<string[]>
}

export interface Props extends WidgetProps {
    params: Params,
}

export default class SimpleTable extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        const {columns, data} = params;
        return (
            <TableContainer
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
                        <TableRow>
                            {!!columns && columns.map((title, i) => {
                                return (
                                    <TableCell key={i}>{title}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!!data && data.map((row, i) => {
                            return (
                                <TableRow key={i}>
                                    {row.map((col, j) => {
                                        return (
                                            <TableCell key={j}>{col}</TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}