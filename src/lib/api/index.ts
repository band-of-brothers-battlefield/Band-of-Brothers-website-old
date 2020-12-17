import * as React from 'react';
import { Method, Response } from "./types";
import JsonClient from "./JsonApi";

export enum Version {
  Prod = 1102,
  Dev = 2102,
  Beta = 3102
}

class ApiProvider extends JsonClient {

    version: Version;

    constructor(v: Version) {
        super();
        this.version = v;
    }
    getBanList(): Promise<Response> {
        return this.getJsonMethod(
            Method.infolist,
            { type: "bannedList" }
        );
    }
    getListOfMembers(sort: string, reverse: boolean): Promise<Response> {
        return this.getJsonMethod(
            Method.platoon,
            { sort: sort, reverse: reverse }
        );
    }
    updateNickname(name: string): Promise<Response> {
        return this.getJsonMethod(
            Method.setinfo,
            { "origin-name": name }
        );
    }
}

export function APIv(version: Version) {
  return new ApiProvider(version);
}

export const BandApi = React.createContext(APIv(Version.Dev));
