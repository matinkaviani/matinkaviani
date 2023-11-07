import { ReactNode } from "react";

export type TechStack = {
    key: string;
    icon: ReactNode;
}
export interface IProjectsData {
    id: string;
    image: string;
    title: string;
    link: string;
    techStack: TechStack[];
}