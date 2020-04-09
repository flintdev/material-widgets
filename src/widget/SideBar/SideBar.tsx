// src/widget/SideBar/SideBar.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface MenuItem {
    id: string,
    name: string,
}

interface Params {
    menuItems: MenuItem[],
    currentItemId: string,
}

interface Events {
    onChange?: (args: object) => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

const styles: any = {
    root: {
        width: '100%',
        height: '100%',
        paddingTop: 0,
        backgroundColor: 'white',
        borderRadius: '1px solid #ccc',
        overflowY: 'scroll'
    }
};

export default class SideBar extends Widget<Props> {

    handleMenuItemClick = (itemId: string) => () => {
        const {events} = this.props;
        if (!!events.onChange) events.onChange({itemId});
    };

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <div style={styles.root}>
                <List component="nav">
                    {!!params.menuItems && params.menuItems.map((item, i) => {
                        return (
                            <ListItem
                                key={i}
                                button={true}
                                selected={item.id === params.currentItemId}
                                onClick={this.handleMenuItemClick(item.id)}
                            >
                                <ListItemText primary={item.name}/>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        )
    }
}
