export type Menu = {
    label: string;
    action: Action;
};

export type Action = () => void;

export type Section = {
    title: string;
    menus: Menu[];
};