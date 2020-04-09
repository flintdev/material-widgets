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
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface Params {
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    columns: string[],
    data: Array<string[]>
    status?: "normal" | "loading" | "error",
}

export interface Props extends WidgetProps {
    params: Params,
}

export default class SimpleTable extends Widget<Props> {
    
    renderTableBodyLoading = () => {
        const {params} = this.props;
        const {columns, data} = params;
        return (
            <TableRow>
                <TableCell align={"center"} colSpan={columns.length}>
                    <CircularProgress color={"primary"}/>
                </TableCell>
            </TableRow>
        )
    };

    renderTableBodyError= () => {
        const {params} = this.props;
        const {columns, data} = params;
        return (
            <TableRow>
                <TableCell align={"center"} colSpan={columns.length}>
                    <ErrorOutlineIcon style={{color: 'red', fontSize: 50}}/>
                </TableCell>
            </TableRow>
        )
    };
    
    renderTableBodyNormal = () => {
        const {params} = this.props;
        const {columns, data} = params;
        return (
            <React.Fragment>
                {!!data && data.map((row, i) => {
                    return (
                        <TableRow key={i}>
                            {!!row && row.map((col, j) => {
                                return (
                                    <TableCell key={j}>{col}</TableCell>
                                )
                            })}
                        </TableRow>
                    )
                })}
            </React.Fragment>
        )
    };

    renderCustomComponent() {
        const {params} = this.props;
        let {status} = params;
        const {columns, data} = params;
        status = !!status ? status : "normal";
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
                        {status === "normal" && this.renderTableBodyNormal()}
                        {status === "error" && this.renderTableBodyError()}
                        {status === "loading" && this.renderTableBodyLoading()}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}