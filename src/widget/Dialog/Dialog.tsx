// src/widget/Dialog/Dialog.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import {default as MuiDialog} from "@material-ui/core/Dialog";
import {default as MuiDialogTitle} from "@material-ui/core/DialogTitle";
import {default as MuiDialogContent} from "@material-ui/core/DialogContent";
import {default as MuiDialogActions} from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

interface Params {
    status: 'open' | 'closed',
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    title: string,
    submitButtonDisplay: 'show' | 'hide',
    submitButtonLabel: string,
}

interface Events {
    onSubmit?: () => void,
    onEnter?: () => void,
    onClose: () => void,
}

export interface Props extends WidgetProps {
    params: Params,
    events: Events,
}

export default class Dialog extends Widget<Props> {

    handleClose = () => {
        const {events} = this.props;
        if (!!events.onClose) events.onClose();
    };

    handleSubmit = () => {
        const {events} = this.props;
        if (!!events.onSubmit) events.onSubmit();
    };

    onEnter = () => {
        const {events} = this.props;
        if (!!events.onEnter) events.onEnter();
    };

    renderContent = () => {
        const {params} = this.props;
        return (
            <React.Fragment>
                <MuiDialogTitle>{params.title}</MuiDialogTitle>
                <MuiDialogContent>
                    {this.placeContainer('dialog-content')}
                </MuiDialogContent>
                <MuiDialogActions>
                    <Button onClick={this.handleClose}>Close</Button>
                    {params.submitButtonDisplay === 'show' &&
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        onClick={this.handleSubmit}
                    >
                        {params.submitButtonLabel}
                    </Button>
                    }
                </MuiDialogActions>
            </React.Fragment>
        )
    };

    renderCustomComponent() {
        const {params} = this.props;
        const isInCanvas = this.isInCanvas();
        return (
            <React.Fragment>
                {isInCanvas &&
                <div style={{flex: 1}}>
                    {this.renderContent()}
                </div>
                }
                {!isInCanvas &&
                <MuiDialog
                    open={params.status === 'open'}
                    onClose={this.handleClose}
                    onEnter={this.onEnter}
                    disableEnforceFocus={true}
                    maxWidth={params.size}
                    fullWidth={true}
                >
                    {this.renderContent()}
                </MuiDialog>
                }
            </React.Fragment>
        )
    }
}
