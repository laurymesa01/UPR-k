import { RangeChangeEventDetail, RangeValue } from '@ionic/core';

export interface Notice {
    id:                         number;
    date:                       string;
    date_gmt:                   string;
    guid:                       GUID;
    modified:                   string;
    modified_gmt:               string;
    slug:                       string;
    status:                     StatusEnum;
    type:                       Type;
    link:                       string;
    title:                      GUID;
    content:                    Content;
    excerpt:                    Content;
    author:                     number;
    featured_media:             number;
    comment_status:             Status;
    ping_status:                Status;
    sticky:                     boolean;
    template:                   string;
    format:                     Format;
    meta:                       any[];
    categories:                 number[];
    tags:                       number[];
    jetpack_featured_media_url: string;
    _links:                     Links;
}

export interface Links {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    author:                Author[];
    replies:               Author[];
    "version-history":     VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:featuredmedia":    Author[];
    "wp:attachment":       About[];
    "wp:term":             WpTerm[];
    curies:                Cury[];
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export enum Taxonomy {
    Category = "category",
    PostTag = "post_tag",
}

export enum Status {
    Open = "open",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export enum Format {
    Standard = "standard",
}

export interface GUID {
    rendered: string;
}

export enum StatusEnum {
    Publish = "publish",
}

export enum Type {
    Post = "post",
}


//interfaz para tener el contenido por separado
export interface ContentbyType{
    [key: string]: {
        page: number
        posts:Notice[]
    }

}




//interfaz para tipar los eventos de el ionrange
export interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}