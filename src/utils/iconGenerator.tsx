// src/utils/iconGenerator.tsx
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons';

export function generateIcon(icon: string) {
    let tempList: any = icon.split(' ');
    tempList = tempList.map((item: string) => item.trim());
    if (tempList.length === 1) {
        return <FontAwesomeIcon icon={tempList[0]}/>
    } else {
        return <FontAwesomeIcon icon={tempList}/>
    }
}