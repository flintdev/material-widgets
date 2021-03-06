// src/layout/Page/Page.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";

interface Params {
    layout: 'header-sidebar-content' | 'header-content' | 'header-content-footer' | 'header-sidebar-content-footer',
    backgroundColor?: string,
}

interface Events {
    onLoad?: () => void;
    onBeforeUnload?: () => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

export default class Page extends Widget<Props> {

    componentDidMount() {
        super.componentDidMount();
        const {events} = this.props;
        if (!!events?.onLoad) events.onLoad();
    }

    componentWillUnmount() {
        const {events} = this.props;
        if (!!events?.onBeforeUnload) events.onBeforeUnload();
    }

    renderCustomComponent() {
        const {params} = this.props;
        const {layout} = params;
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    backgroundColor: params.backgroundColor
                }}
            >
                {/* header */}
                <div>
                    {this.placeContainer('page-header')}
                </div>
                {/* content */}
                <div style={{flexGrow: 1}}>
                    {(layout === 'header-sidebar-content' || layout === 'header-sidebar-content-footer') &&
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
                    }
                    {(layout === 'header-content' || layout === 'header-content-footer') &&
                    <div>
                        {this.placeContainer('page-content')}
                    </div>
                    }
                </div>
                {/* footer */}
                {(layout === 'header-content-footer' || layout === 'header-sidebar-content-footer') &&
                <div>
                    {this.placeContainer('page-footer')}
                </div>
                }
            </div>
        )
    }
}