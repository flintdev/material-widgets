// src/widget/TreeView/TreeView.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiTreeView} from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {default as MuiTreeItem} from '@material-ui/lab/TreeItem';

interface TreeNode {
    id: string,
    name: string,
    children?: TreeNode[],
    [key: string]: any,
}

interface Params {
    nodes: TreeNode[]
}

interface Events {
    onNodeSelect: (args: object) => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

export default class TreeView extends Widget<Props> {

    handleNodeClick = (node: TreeNode) => (event: React.MouseEvent) => {
        event.stopPropagation();
        const {events} = this.props;
        if (!!events?.onNodeSelect) events.onNodeSelect({node});
    };

    recurToRenderTreeNode = (node: TreeNode) => {
        const hasChildren: boolean = !!node.children && node.children.length > 0;
        return (
            <React.Fragment>
                {hasChildren &&
                <MuiTreeItem
                    key={node.id}
                    nodeId={node.id}
                    label={node.name}
                    onClick={this.handleNodeClick(node)}
                >
                    {node!.children!.map(childNode => this.recurToRenderTreeNode(childNode))}
                </MuiTreeItem>
                }
                {!hasChildren &&
                <MuiTreeItem
                    key={node.id}
                    nodeId={node.id}
                    label={node.name}
                    onClick={this.handleNodeClick(node)}
                />
                }
            </React.Fragment>
        )
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {nodes} = params;
        return (
            <MuiTreeView
                style={{flexGrow: 1}}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                {!!nodes && nodes.map(node => this.recurToRenderTreeNode(node))}
            </MuiTreeView>
        )
    }

}
