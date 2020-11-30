import React from "react";
import JsonClient from "./JsonApi";

export const Version = {
  Prod: 1102,
  Dev: 2102,
  Beta: 3102
};

class ApiProvider extends JsonClient {
  constructor(v) {
    super();
    this.version = v;
  }
  logout() {
    return this.fetchMethod("logout");
  }
  getBanList() {
    return this.getJsonMethod("infolist", { type: "bannedList" });
  }
  getListOfMembers(sort, reverse) {
    return this.getJsonMethod("platoon", { sort: sort, reverse: reverse });
  }
  updateNickname(name) {
    return this.postJsonMethod("setinfo", { "origin-name": name });
  }
}

export function APIv(version) {
  return new ApiProvider(version);
}

export const BandApi = React.createContext();
