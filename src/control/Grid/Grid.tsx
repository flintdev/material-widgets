//

import * as React from 'react';
import { default as MuiGrid, GridProps } from "@material-ui/core/Grid";
import { Widget, WidgetProps } from "@flintdev/widget-builder";

export interface Props extends WidgetProps {
    params: GridProps
}

export default class Grid extends Widget<Props> {

    renderCustomComponent() {
        const { params } = this.props;
        return (
            <MuiGrid {...params}>
                {params.children}
            </MuiGrid>
        )
    }

}

