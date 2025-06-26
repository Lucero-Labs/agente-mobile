import { CredentialManifestStyles } from './credential';
export enum StorageType {
    INTRODUCTION = 'introduction',
    TUTORIAL = 'tutorial',
    WITH_DID = 'withDid',
    TYC = 'TermsAndConditions',
    CONFIRMED_DID = 'confirmDid',
}

export enum StorageItemsType {
    NOTIFICATIONS = 'notifications',
    ALREADY_SEEN_NOTIFICATIONS = 'alreadySeenNotifications',
}

export enum StateType {
    NO_PIN = 'noPin',
    UNAUTHENTICATED = 'unauthenticated',
    AUTHENTICATED = 'authenticated',
    STARTING = 'starting',
    TYC = 'TermsAndConditions',
}

export enum SecureStorageType {
    PIN = 'pin',
    TYC = 'termsAndConditions',
}

export enum NotificationType {
    DID_CREATED = 'didCreated',
    ISSUE_CREDENTIAL = 'issueCredential',
    OFFER_CREDENTIAL = 'offerCredential',
    REQUEST_PRESENTATION = 'requestPresentation',
    PRESENTATION_ACK = 'presentationAck',
    PDF_ARRIVED = 'pdfArrived',
    TEXT_ARRIVED = 'textArrived'
}

export interface IAgentConfig {
    dwnUrl: string;
    universalResolverUrl: string;
    didMethod: string;
    entities: string;
}
export interface IExtraConfig {
    initialEntities: {
        title: string;
        description: string;
        url: string;
        style: IStyles;
    }[];
}

interface IIntroduction {
    title: string;
    subtitle?: string;
    description?: string;
    image: any;
}
export interface IStylesConfig {
    style: {
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        fontColor: string;
        footerColor: string;
        statusBar: 'light-content' | 'dark-content';
        introductionType?: 'all' | 'none';
        introductionResizeMode?: 'all' | 'none' | 'cover';
    };
    features: any[];
    introduction: {
        en: IIntroduction[];
        es?: IIntroduction[];
    };
    steps: any[];
}

export interface IStyles {
    thumbnail?: IStylesUri;
    hero?: IStylesUri;
    background?: IStylesColor;
    text?: IStylesColor;
}

export interface IStylesColor {
    color: string;
}

export interface IStylesUri {
    uri: string;
    alt: string;
}

export interface IProperties {
    path: string[];
    fallback: string;
    format?: string;
}

export interface IText {
    text: string;
}

export interface IDisplay {
    title?: string;
    subtitle?: string;
    description?: string;
    properties: (IProperties | IText)[];
}

export interface IVerifiableCredential {
    '@context': string[];
    id: string;
    type: string[] | string;
    credentialSubject: any;
    issuer: string;
    issuanceDate: string;
    expirationDate?: string;
}

export interface ICredential {
    data: IVerifiableCredential;
    styles?: IStyles;
    display?: IDisplay;
}

export interface INotification {
    type: any;
    id: string;
    title: string;
    body: string;
    data?: any;
    read?: boolean;
    extra?: any;
}

export interface IEntities {
    title: string;
    description: string;
    url: string;
    style: IStyles;
}

export type IssuerData = {
    id: string;
    name: string;
    styles?: CredentialManifestStyles;
};
