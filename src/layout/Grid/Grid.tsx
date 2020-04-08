// src/layout/Grid/Grid.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiGrid, GridSize} from "@material-ui/core/Grid";

interface Params {
    columnCount: number
}

export interface Props extends WidgetProps {
    params: Params,
}

export default class Grid extends Widget<Props> {

    getItemSize = (columnCount: number): GridSize => {
        let size: number = Math.floor(12/columnCount);
        if (size > 12) size = 12;
        else if (size < 1) size = 1;
        return size as GridSize;
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {columnCount} = params;
        const items = new Array<number>(columnCount).fill(0);
        const size: GridSize = this.getItemSize(columnCount);
        return (
            <React.Fragment>
                <MuiGrid container>
                    {items.map((_, index) => {
                        return (
                            <MuiGrid item key={index} xs={size}>
                                {this.placeContainer(`grid-${index.toString()}`)}
                            </MuiGrid>
                        )
                    })}
                </MuiGrid>
            </React.Fragment>
        )
    }
}

