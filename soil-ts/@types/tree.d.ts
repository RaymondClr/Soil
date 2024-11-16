declare class TreeViewNode {
    /**
     * The checked state of an item in a list.
     * When true, the item is marked with the platform-appropriate checkmark. When false, no checkmark is drawn, but space is reserved for it in the left margin, so that the item lines up with other checkable items. When undefined, no space is reserved for a checkmark.
     */
    checked: boolean;

    /**
     * The expansion state of an item of type node that is a child of a TreeView list control.
     * When true, the item is in the expanded state and its children are shown, when false, it is collapsed and children are hidden.
     */
    expanded: boolean;

    /**
     * An image object for an icon to display in the item.
     * When specified, the image appropriate to the selections state is drawn to the left of the text label. If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
     */
    image: ScriptUIImage;

    /**
     * The 0-based index of this item in the items collection of its parent list control.
     */
    readonly index: number;

    /**
     * The parent element, a list control.
     */
    readonly parent: _Control;

    /**
     * The selection state of this item.
     * When true, the item is part of the selection for its parent list. When false, the item is not selected. Set to true to select this item in a single-selection list, or to add it to the selection array for a multi-selection list.
     */
    selected: boolean;

    /**
     * When the parent is a multi-column ListBox, this describes the labels for this selectable row in additional columns.
     * A array of JavaScript objects whose length is one less than the number of columns. The first member describes the label in the second column. Each member object has two properties, of which you can specify one or both:
     * text: A display string for the corresponding label.
     * image: An ScriptUIImage object for the corresponding label.
     */
    readonly subItems: Array<any>;

    /**
     * The label text to display for the item, a localizable string.
     * If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.
     */
    text: string;

    /**
     * The element type.
     * Normally "item", but an item whose parent is a DropDownList control can have type "separator". A separator item is not mouse-sensitive and is drawn as a horizontal line across the drop-down or pop-up menu.
     */
    readonly type: string;

    add(type: "node", text?: string): TreeViewNode;

    add(type: "item", text?: string): ListItem;
}

declare class _Window extends Window {
    getElementById(targetId: string): _Control | null;
    getElementsByName(name: string | Array<string>): Array<_Control> | null;
    getElementsByType(type: string | Array<string>): _Control | null;
}

declare class _Panel extends Panel {
    getElementById(targetId: string): _Control | null;
    getElementsByName(name: string | Array<string>): Array<_Control> | null;
    getElementsByType(type: string | Array<string>): _Control | null;
}

declare class _Group extends Group {
    getElementById(targetId: string): _Control | null;
    getElementsByName(name: string | Array<string>): Array<_Control> | null;
    getElementsByType(type: string | Array<string>): _Control | null;
}

declare type Container = MainContainer | _Group;
declare type MainContainer = _Window | _Panel;
declare type SelectableElementValue = { container: SelectableElement; itemIndex: number };

declare type ElementCollector = {
    nodeItems: Array<any>;
    selectableElement: Array<SelectableElementValue>;
};

declare type Tree = {
    version: string;
    parse: (resource: AnyObject) => MainContainer;
    windows: MainContainer[];
    context?: any;
    layoutMode?: number;
};

declare type ContainerDefault = { dockable: boolean; show: boolean; singleton: boolean };
declare type ElementFlags = "button" | "checkbox" | "dialog" | "dropdownlist" | "edittext" | "group" | "iconbutton" | "image" | "item" | "listbox" | "node" | "palette" | "panel" | "progressbar" | "radiobutton" | "scrollbar" | "slider" | "statictext" | "tab" | "tabbedpanel" | "treeview" | "window";
declare type ContainerFlags = "dropdownlist" | "group" | "listbox" | "node" | "panel" | "tab" | "tabbedpanel" | "treeview";
declare type ListItemContainerFlags = "dropdownlist" | "listbox" | "treeview";
declare type NativeContainerFlags = "group" | "panel" | "tab" | "tabbedpanel";
declare type NativeControlFlags = "button" | "checkbox" | "dropdownlist" | "edittext" | "iconbutton" | "image" | "listbox" | "progressbar" | "radiobutton" | "scrollbar" | "slider" | "statictext" | "treeview";
declare type SelectableElementFlags = "dropdownlist" | "listbox" | "tabbedpanel" | "treeview";
declare type LooseContainer = Window | DropDownList | Group | ListBox | Panel | Tab | TabbedPanel | TreeView | TreeViewNode;
declare type ListItemContainer = DropDownList | ListBox | TreeView | TreeViewNode;
declare type SelectableElement = DropDownList | ListBox | TabbedPanel | TreeView;
declare type NativeContainer = Group | Panel | Tab | TabbedPanel;
declare type NativeControl = Button | Checkbox | DropDownList | EditText | IconButton | Image | ListBox | Progressbar | RadioButton | Scrollbar | Slider | StaticText | TreeView;
