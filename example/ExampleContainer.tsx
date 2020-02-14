// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const styles = createStyles({
    root: {},
});

export interface Props extends WithStyles<typeof styles> {

}

interface State {
    tabIndex: number,
}

class ExampleContainer extends React.Component<Props, object> {
    state: State = {
        tabIndex: 0
    };

    componentDidMount(): void {

    }

    handleTabChange = (event: React.ChangeEvent, tabIndex: number) => {
        this.setState({tabIndex});
    };

    onDragEnd = (result: any) => {
        const {source, destination} = result;
        console.log(source, destination);
    };

    render() {
        const {classes} = this.props;
        const {tabIndex} = this.state;
        return (
            <div className={classes.root}>
                <Tabs
                    value={tabIndex}
                    indicatorColor={"primary"}
                    textColor={"primary"}
                    onChange={this.handleTabChange}
                >
                    <Tab label="Button" value={0}/>
                    <Tab label="Grid" value={1}/>
                </Tabs>
                <div>
                    {tabIndex === 0 &&
                    <div>

                    </div>
                    }
                    {tabIndex === 1 &&
                    <div>

                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
