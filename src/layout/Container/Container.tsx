// src/layout/Container/Container.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import Paper from "@material-ui/core/Paper";

interface Params {
    background?: "plain" | "paper",
    backgroundColor?: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    paddingTop?: number,
    paddingBottom?: number,
    paddingLeft?: number,
    paddingRight?: number,
}

interface Events {
    onLoad?: () => void;
    onBeforeUnload?: () => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

export default class Container extends Widget<Props> {

    componentDidMount() {
        super.componentDidMount();
        const {events} = this.props;
        if (!!events?.onLoad) events.onLoad();
    }

    componentWillUnmount() {
        const {events} = this.props;
        if (!!events?.onBeforeUnload) events.onBeforeUnload();
    }

    getStyle = () => {
        const {params} = this.props;
        return {
            marginTop: params.marginTop,
            marginBottom: params.marginBottom,
            marginLeft: params.marginLeft,
            marginRight: params.marginRight,
            paddingTop: params.paddingTop,
            paddingBottom: params.paddingBottom,
            paddingLeft: params.paddingLeft,
            paddingRight: params.paddingRight,
            backgroundColor: params.backgroundColor
        }
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {background} = params;
        const style = this.getStyle();
        return (
            <React.Fragment>
                {background === "plain" &&
                <div style={{...style, flex: 1}}>
                    {this.placeContainer('container-content')}
                </div>
                }
                {background === "paper" &&
                <Paper style={{...style, flex: 1}}>
                    {this.placeContainer('container-content')}
                </Paper>
                }
            </React.Fragment>
        )
    }
}
