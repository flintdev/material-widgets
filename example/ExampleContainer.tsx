// example/ExampleContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import TreeGraph from "../src/widget/TreeGraph";
import {nodes} from "./data/treeNodes";
import Tabs from "../src/widget/Tabs";
import {Button, Page} from '../src';

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

    render() {
        const { classes } = this.props;
        const { tabIndex } = this.state;
        return (
            <div className={classes.root}>
                <Tabs
                    params={{
                        tabItems: [
                            {name: "Item 1", icon: ""}
                        ],
                        currentTabIndex: 0,
                        alignment: "left"
                    }}
                    events={{}}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
