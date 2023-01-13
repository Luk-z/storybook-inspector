import { StoryContext } from "@storybook/addons";
import { GlobalContext } from "../../globalContext";
export declare function getReactCodeSnippet(context: StoryContext): string | undefined;
export declare function getReactFilePath(context: StoryContext, globalContext: GlobalContext): string | undefined;
export declare function getReactComponentName(context: StoryContext): string | undefined;
export declare function getReactCodeLanguage(context: StoryContext, globalContext: GlobalContext): string;
