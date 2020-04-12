// example/ExampleContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import TreeGraph from "../src/widget/TreeGraph";
import {nodes} from "./data/treeNodes";
import Tabs from "../src/widget/Tabs";

const styles = createStyles({
    root: {},
});

export interface Props extends WithStyles<typeof styles> {

}

interface State {
    tabIndex: number,
    isButtonSelected: boolean
}

class ExampleContainer extends React.Component<Props, object> {
    state: State = {
        tabIndex: 0,
        isButtonSelected: false
    };

    componentDidMount(): void {

    }

    handleTabChange = (event: React.ChangeEvent, tabIndex: number) => {
        this.setState({ tabIndex });
    };

    onDragEnd = (result: any) => {
        const { source, destination } = result;
        console.log('>>> source', source);
        console.log('>>> destination', destination);
    };

    handleSelectButton = (val: boolean) => {
        this.setState({ isButtonSelected: val })
    };

    render() {
        const { classes } = this.props;
        const { tabIndex } = this.state;
        return (
            <div className={classes.root}>
                <Tabs
                    params={{tabItems: [{name: 'Tab1'}], currentTabIndex: 0, alignment: 'center'}}
                    events={{}}
                />
                <TreeGraph
                    params={{nodes: nodes, rootName: 'root', width: 500, height: 500}}
                    events={{onNodeClick: () => {}}}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
