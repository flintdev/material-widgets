// src/layout/Grid/Grid.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiGrid}  from "@material-ui/core/Grid";

interface Params {
    columnCount: number
}

export interface Props extends WidgetProps {
    params: Params,
}

export default class Grid extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        const {columnCount} = params;
        return (
            <React.Fragment>
                <MuiGrid container>
                    {Array(columnCount).map((_, index) => {
                        return (
                            <MuiGrid item>
                                {this.placeContainer(index.toString())}
                            </MuiGrid>
                        )
                    })}
                </MuiGrid>
            </React.Fragment>
        )
    }
}

