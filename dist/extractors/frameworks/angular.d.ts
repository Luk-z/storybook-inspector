import { StoryContext } from "@storybook/addons";
import { GlobalContext } from "../../globalContext";
export declare function getAngularCodeSnippet(context: StoryContext): string | undefined;
export declare function getAngularCodeLanguage(): string;
export declare function getAngularFilePath(context: StoryContext, globalContext: GlobalContext): string | undefined;
export declare function getAngularComponentName(context: StoryContext): string;
