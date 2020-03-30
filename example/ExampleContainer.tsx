// example/ExampleContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button, { configJson } from "../src/control/Button";
import Grid from "../src/layout/Grid";
import TextField from "../src/control/TextField";
import { getWidget, WidgetName } from "../src"
import NavBar from "../src/widget/NavBar";

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
                    value={tabIndex}
                    indicatorColor={"primary"}
                    textColor={"primary"}
                    onChange={this.handleTabChange}
                >
                    <Tab label="Button" value={0} />
                    <Tab label="Grid" value={1} />
                </Tabs>
                <div>
                    {tabIndex === 0 &&
                        <div>
                            <NavBar
                                params={{title: "App Name"}}
                                dnd={true}
                                draggableProps={{
                                    draggableId: 'id-0',
                                    index: 0
                                }}
                            />
                            <Button
                                params={{
                                    marginTop: 20,
                                    marginBottom: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    variant: 'contained',
                                    label: 'TEST Button'
                                }}
                                events={{}}
                                dnd={true}
                                draggableProps={{
                                    draggableId: 'id-0',
                                    index: 0
                                }}
                                onDragEnd={(data: any) => this.onDragEnd(data)}
                            />
                            <TextField
                                params={{
                                    marginTop: 20,
                                    marginBottom: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    variant: 'outlined',
                                    label: 'TEST Input'
                                }}
                                events={{}}
                                dnd={true}
                                draggableProps={{
                                    draggableId: 'id-1',
                                    index: 1
                                }}
                                onDragEnd={(data: any) => this.onDragEnd(data)}
                            />
                        </div>
                    }
                    {tabIndex === 1 &&
                        <div>
                            <Grid
                                params={{ columnCount: 2 }}
                                dnd={true}
                                draggableProps={{
                                    draggableId: 'id-2',
                                    index: 0
                                }}
                                onDragEnd={(data: any) => this.onDragEnd(data)}
                            />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
