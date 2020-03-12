//

import * as React from 'react';
import { getWidget, WidgetName, WidgetProps } from "../../src"

export default class GridExample extends React.Component<any, any> {

    render() {
        return (
            <div style={{display: `flex`}}>
                {getWidget(WidgetName.Grid, {
                    params: {
                        style: {
                            width: '50vw',
                            height: '50vw',
                            display: 'flex'
                        }
                    },
                    dnd: true,
                    draggableProps: {
                        draggableId: 'drag0',
                        index: 0    
                    },
                    draggableRootStyle: (isDragging: boolean) => {
                        return {
                            cursor: 'move',
                            borderRight: `5px solid ${isDragging ? 'red' : 'darkred'}`,
                            display: 'inline-table'
                        }
                    },
                    droppableContainerStyle: (isDraggingOver: boolean) => {
                        return {
                            backgroundColor: isDraggingOver ? 'grey' : 'lightgrey',
                            width: '100%',
                            height: '100%',
                            marginLeft: 10
                        }
                    }
                } as WidgetProps)}

                {getWidget(WidgetName.TextField, {
                    params: {
                        style: {
                            backgroundColor: 'lightyellow',
                            width: '100px'
                        },
                        label: 'input1',
                        variant: "outlined"
                    },
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
                } as WidgetProps)}
            </div>
        )
    }

}

