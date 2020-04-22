// src/widget/Tabs/Tabs.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Paper from '@material-ui/core/Paper';
import {default as MuiTabs} from '@material-ui/core/Tabs';
import {default as MuiTab} from '@material-ui/core/Tab';
import Icon from "@material-ui/core/Icon";

interface TabItem {
    name: string,
    icon: string,
}

interface Params {
    tabItems: TabItem[],
    currentTabIndex: number,
    alignment: 'left' | 'center'
}

interface Events {
    onChange?: (args: object) => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

export default class Tabs extends Widget<Props> {

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        const {events} = this.props;
        if (!!events?.onChange) events.onChange({tabIndex: newValue});
    };

    getIcon = (icon: string) => {
        if (!icon || icon === "") return undefined;
        return <Icon>{icon}</Icon>
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {tabItems, currentTabIndex, alignment} = params;
        return (
            <Paper style={{flex: 1, width: "100%"}} square={true}>
                <MuiTabs
                    value={currentTabIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    centered={alignment === "center"}
                >
                    {tabItems.map((item, i) => {
                        return (
                            <MuiTab key={i} label={item.name} icon={this.getIcon(item.icon)}/>
                        )
                    })}
                </MuiTabs>
            </Paper>
        )
    }
}
