/**
 * Property type
 */
export type UITableItemType = 'property' | 'array' | 'object';

export interface UITableItem {
    /**
     * Name of object property
     */
    name: string;
    /**
     * Column name
     */
    label: string;
    /**
     * Property type
     */
    type?: UITableItemType;
    /**
     * If default is false you need to define in html the column
     */
    default?: boolean;
}