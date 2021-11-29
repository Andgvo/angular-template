/**
 * Property type
 */
export type UIFormItemType = 'property' | 'array' | 'object';

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
    type?: UIFormItemType;
}