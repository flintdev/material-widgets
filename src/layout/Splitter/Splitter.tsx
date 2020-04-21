// src/layout/Splitter/Splitter.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiGrid, GridSize} from "@material-ui/core/Grid";

interface Params {
    ratio: string
}

export interface Props extends WidgetProps {
    params: Params
}

const ratioConfigMap: any = {
    "1:2": [4, 8],
    "1:3": [3, 9],
    "1:5": [2, 10],
    "2:1": [8, 4],
    "3:1": [9, 3],
    "5:1": [10, 2],
};

export default class Splitter extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        const configList = ratioConfigMap[params.ratio];
        return (
            <React.Fragment>
                <MuiGrid container>
                    <MuiGrid item xs={configList[0]}>
                        {this.placeContainer('left')}
                    </MuiGrid>
                    <MuiGrid item xs={configList[1]}>
                        {this.placeContainer('right')}
                    </MuiGrid>
                </MuiGrid>
            </React.Fragment>
        )
    }
}
