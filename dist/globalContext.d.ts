import { StoryStore } from "@storybook/client-api";
import { LinkBases } from "./zeplinLink";
import { AnyFramework } from "@storybook/csf";
export interface GlobalContext {
    framework: string;
    store: StoryStore<AnyFramework>;
    linkBases: LinkBases;
    react?: Record<string, {
        docgenInfo: {
            description: string;
            displayName: string;
            props: Array<{
                defaultValue: string;
                description: string;
                name: string;
                required: boolean;
                type: unknown;
            }>;
        };
        path: string;
        name: string;
    }>;
    angular?: Array<{
        name: string;
        file: string;
    }>;
}
export declare function getGlobalContext(windowObject: unknown, linkBases: LinkBases, retryCount?: number): Promise<GlobalContext>;
