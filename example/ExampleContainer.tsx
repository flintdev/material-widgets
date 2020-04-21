// example/ExampleContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import TreeGraph from "../src/widget/TreeGraph";
import {nodes} from "./data/treeNodes";
import Tabs from "../src/widget/Tabs";
import {Button} from '../src';

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
                <Button
                    params={{
                        variant: 'contained',
                        label: "Button Label",
                        icon: "bookmark",
                        theme: 'primary'
                    }}
                    events={{}}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
