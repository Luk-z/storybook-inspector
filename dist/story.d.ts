import { LinkProperties } from "./zeplinLink";
import { GlobalContext } from "./globalContext";
export interface StorySummary {
    id: string;
    kind: string;
    name: string;
    zeplinSources: LinkProperties[];
}
export interface StoryDetail extends StorySummary {
    componentName?: string;
    filePath?: string;
    framework: string;
    description?: string;
    snippet?: {
        code: string;
        lang?: string;
    };
}
export declare function getStories({ store, linkBases }: GlobalContext): Promise<StorySummary[]>;
export declare function getStoryDetail(id: string, globalContext: GlobalContext): StoryDetail | undefined;
