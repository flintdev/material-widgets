// src/widget/TableRow/TableRow.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiTableRow} from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

interface Cell {
    alignment: 'left' | 'center' | 'right'
}

interface Params {
    cells: Cell[]
}

export interface Props extends WidgetProps {
    params: Params
}

export default class TableRow extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <MuiTableRow>
                {!!params.cells && params.cells.map((cell, i) => {
                    return (
                        <TableCell key={i} align={cell.alignment}>
                            {this.placeContainer(`table-row-${i.toString()}`)}
                        </TableCell>
                    )
                })}
            </MuiTableRow>
        )
    }
}
