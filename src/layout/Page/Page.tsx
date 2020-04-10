// src/layout/Page/Page.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";

interface Params {
    layout: 'header-sidebar-content' | 'header-content' | 'header-content-footer' | 'header-sidebar-content-footer',
}

interface Events {
    onLoad?: () => void;
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

// TODO: switch layout

export default class Page extends Widget<Props> {

    componentDidMount() {
        super.componentDidMount();
        const {events} = this.props;
        if (!!events?.onLoad) events.onLoad();
    }

    renderCustomComponent() {
        const {params} = this.props;
        return (
            <div style={{width: '100%', height: '100%', display: 'flex', flexFlow: 'column'}}>
                {/* header */}
                <div>
                    {this.placeContainer('page-header')}
                </div>
                {/* content */}
                <div style={{flexGrow: 1}}>
                    <table style={{width: '100%', height: '100%'}}>
                        <tbody>
                        <tr>
                            <td valign={"top"} style={{width: 240}}>
                                {this.placeContainer('page-sidebar')}
                            </td>
                            <td valign={"top"}>
                                <div style={{overflow: "auto", width: '100%', height: '100%'}}>
                                    <div style={{overflow: "scroll"}}>
                                        {this.placeContainer('page-content')}
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* footer */}
                <div>
                    {this.placeContainer('page-footer')}
                </div>
            </div>
        )
    }
}