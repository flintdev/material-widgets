// src/widget/NestedPanel/NestedPanel.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";

interface TreeNode {
    id: string,
    name: string,
    children?: TreeNode[],
    data?: any
}

interface Params {
    nodes: TreeNode[]
}

export interface Props extends WidgetProps {
    params: Params
}

export default class NestedPanel extends Widget<Props> {

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <div>

            </div>
        )
    }
}
