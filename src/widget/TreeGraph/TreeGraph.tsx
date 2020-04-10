// src/widget/TreeGraph/TreeGraph.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import * as Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'

interface TreeNode {
    id: string,
    name: string,
    children?: TreeNode[],
    [key: string]: any,
}

interface Params {
    width: number,
    height: number,
    rootName: string,
    nodes: TreeNode[]
}

interface Events {
    onNodeClick: (args: object) => void,
}

export interface Props extends WidgetProps {
    params: Params
    events: Events,
}

export default class TreeGraph extends Widget<Props> {

    handleNodeClick = (event: any, nodeKey: any) => {
        const {events} = this.props;
        if (!!events?.onNodeClick) events.onNodeClick({nodeName: nodeKey});
    }

    renderCustomComponent() {
        const {params} = this.props;
        const {nodes, rootName} = params;
        const data = {name: rootName, children: nodes}
        return (
            <Tree
                data={data}
                height={params.height}
                width={params.width}
                gProps={{
                    onClick: this.handleNodeClick,
                }}
            />
        )
    }
}
