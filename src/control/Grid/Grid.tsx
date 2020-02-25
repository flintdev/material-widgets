//

import * as React from 'react';
import { default as MuiGrid, GridProps } from "@material-ui/core/Grid";
import { Widget, WidgetProps } from "@flintdev/widget-builder";

export interface Props extends WidgetProps {
    params: GridProps,
    columnParams?: Array<GridProps>
}

export default class Grid extends Widget<Props> {

    renderCustomComponent() {
        const { params, columnParams } = this.props;
        return (
            <MuiGrid {...params}>
                {!!columnParams && columnParams.map((columnParam: GridProps, index: number) => {
                    console.log(columnParam)
                    return <MuiGrid {...columnParam}>{this.placeContainer(`container${index}`)}</MuiGrid>
                })}
            </MuiGrid>
        )
    }

}

