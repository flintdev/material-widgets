// src/index.ts

import * as React from 'react';
import {Registry} from "@flintdev/widget-builder";

import * as WebFont from 'webfontloader';
WebFont.load({
    google: {
        families: ['Material Icons']
    }
});
import Button, {Props as ButtonProps, configJson as ButtonConfig} from "./control/Button";
import TextField, {Props as TextFieldProps, configJson as TextFieldConfig} from "./control/TextField";
import Grid, {Props as GridProps, configJson as GridConfig} from "./layout/Grid";
import Label, {Props as LabelProps, configJson as LabelConfig} from "./control/Label";
import SimpleTable , {Props as SimpleTableProps, configJson as SimpleTableConfig} from "./widget/SimpleTable";
import TableContainer , {Props as TableContainerProps, configJson as TableContainerConfig} from "./widget/TableContainer";
import TableRow , {Props as TableRowProps, configJson as TableRowConfig} from "./widget/TableRow";
import Page , {Props as PageProps, configJson as PageConfig} from "./layout/Page";
import NavBar , {Props as NavBarProps, configJson as NavBarConfig} from "./widget/NavBar";
import SideBar , {Props as SideBarProps, configJson as SideBarConfig} from "./widget/SideBar";
import Container , {Props as ContainerProps, configJson as ContainerConfig} from "./layout/Container";
import Tabs , {Props as TabsProps, configJson as TabsConfig} from "./widget/Tabs";
import TreeView , {Props as TreeViewProps, configJson as TreeViewConfig} from "./widget/TreeView";
import TreeGraph , {Props as TreeGraphProps, configJson as TreeGraphConfig} from "./widget/TreeGraph";
import Splitter , {Props as SplitterProps, configJson as SplitterConfig} from "./layout/Splitter";
import Card , {Props as CardProps, configJson as CardConfig} from "./widget/Card";
import Panel , {Props as PanelProps, configJson as PanelConfig} from "./widget/Panel";

let registry = new Registry();

registry.add('Button', Button, ButtonConfig, {category: "control"});
registry.add('TextField', TextField, TextFieldConfig, {category: "control"});
registry.add('Label', Label, LabelConfig, {category: "control"});
registry.add('Grid', Grid, GridConfig, {category: "layout"});
registry.add('SimpleTable', SimpleTable, SimpleTableConfig, {category: "widget"});
registry.add('TableContainer', TableContainer, TableContainerConfig, {category: "widget"});
registry.add('TableRow', TableRow, TableRowConfig, {category: "widget"});
registry.add('Page', Page, PageConfig, {category: "widget"});
registry.add('NavBar', NavBar, NavBarConfig, {category: "widget"});
registry.add('SideBar', SideBar, SideBarConfig, {category: "widget"});
registry.add('Container', Container, ContainerConfig, {category: "layout"});
registry.add('Tabs', Tabs, TabsConfig, {category: "widget"});
registry.add('TreeView', TreeView, TreeViewConfig, {category: "widget"});
registry.add('TreeGraph', TreeGraph, TreeGraphConfig, {category: "widget"});
registry.add('Splitter', Splitter, SplitterConfig, {category: "layout"});
registry.add('Card', Card, CardConfig, {category: "widget"});
registry.add('Panel', Panel, PanelConfig, {category: "widget"});

export {
    Button,
    TextField,
    Label,
    Grid,
    SimpleTable,
    TableContainer,
    TableRow,
    Page,
    NavBar,
    SideBar,
    Container,
    Tabs,
    TreeView,
    TreeGraph,
    Splitter,
    Card,
    Panel,
};

export const library = registry.pack();
