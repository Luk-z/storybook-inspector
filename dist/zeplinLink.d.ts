declare enum RESOURCE_TYPES {
    PROJECT_COMPONENT = "project-component",
    STYLEGUIDE_COMPONENT = "styleguide-component",
    SCREEN = "screen",
    INVALID = "invalid"
}
declare enum LINK_TYPES {
    WEB = "web",
    APP = "app"
}
interface LinkProperties {
    type: string;
    pid?: string;
    stid?: string;
    sid?: string;
    coid?: string;
}
interface LinkBases {
    app: string;
    web: string;
}
export { LinkProperties, LinkBases, RESOURCE_TYPES, LINK_TYPES };
export declare function getZeplinLinkProperties(link: string, linkBases: LinkBases): LinkProperties;
