//

import * as React from 'react';
import { getWidget, WidgetName, WidgetProps } from "../../src/index"

export default class GridExample extends React.Component<any, any> {

    render() {
        return (
            <div style={{display: `flex`, flexDirection: `column`, height: `100vh`}}>
                {getWidget(WidgetName.Grid, {
                    params: {
                        container: true
                    },
                    columnParams: [
                        {
                            style: {
                                backgroundColor: 'red'
                            },
                            xs: 3
                        },
                        {
                            style: {
                                backgroundColor: 'yellow'
                            },
                            xs: 3
                        },
                        {
                            style: {
                                backgroundColor: 'green'
                            },
                            xs: 3
                        },
                        {
                            style: {
                                backgroundColor: 'blue'
                            },
                            xs: 3
                        },
                    ],
                    children: [
                        getWidget(WidgetName.TextField, {
                            params: {
                                style: {
                                    backgroundColor: 'lightyellow',
                                    width: '100px'
                                },
                                label: 'input1',
                                variant: "outlined"
                            },
                            tag: 'container2',
                            dnd: true,
                            draggableProps: {
                                draggableId: 'drag1',
                                index: 1    
                            },
                            draggableRootStyle: (isDragging: boolean) => {
                                return {
                                    cursor: 'move',
                                    borderRight: `5px solid ${isDragging ? 'red' : 'darkred'}`,
                                    display: 'inline-table'
                                }
                            }
                        } as WidgetProps)
                    ],
                    dnd: true,
                    draggableProps: {
                        draggableId: 'drag0',
                        index: 0    
                    },
                    draggableRootStyle: (isDragging: boolean) => {
                        return {
                            cursor: 'move',
                            borderRight: `5px solid ${isDragging ? 'red' : 'darkred'}`,
                            height: '100%',
                            width: '100%',
                            display: `flex`
                        }
                    },
                    droppableContainerStyle: (isDraggingOver: boolean) => {
                        return {
                            backgroundColor: isDraggingOver ? 'grey' : '#eeeeee80',
                            width: '100%',
                            height: '100%'
                        }
                    }
                } as WidgetProps)}
            </div>
        )
    }

}

