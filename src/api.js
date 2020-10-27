import React from "react";

export const Version = {
  Prod: 1102,
  Dev: 2102,
  Beta: 3102
};

const defaultUser = {
  discord: {
    name: "",
    discriminator: 0,
    id: 0,
    avatar: ""
  },
  bob: {
    role: "",
    role_color: "",
    in_server: false,
    nickname: ""
  },
  auth: {
    is_signed_in: false,
    is_admin: false
  },
  origin: {
    name: "",
    id: 0,
    platoon: 0,
    is_in_platoon: false
  }
};

class ApiProvider {
  constructor(v) {
    this.version = v;
    this.isWorking = true;
    this.user = this.getUserInfo();
  }
  tryToLogin() {
    this.getUserInfo();
  }
  openLoginPage() {
    window.location = this.constructApiUrl("login");
  }
  async logout() {
    await this.fetchMethod("logout");
  }
  constructApiUrl(method, params) {
    params = params || {};
    let paramStr = "";
    for (let s in params) {
      paramStr += s + "=" + params[s] + "&";
    }
    const apiEP = "//bandofbrothers.site/api/";
    return apiEP + method + "?" + paramStr;
  }
  async fetchMethod(method, params) {
    let result = await fetch(this.constructApiUrl(method, params), {
      credentials: "include"
    });
    return result;
  }
  async getListOfMembers(pageNumber) {
    let platoonDB = await this.fetchMethod("platoon", { page: pageNumber });
    let jsonPlatoon = await platoonDB.json();

    return jsonPlatoon;
  }
  async getBanList() {
    let banList = await this.fetchMethod("infolist", { type: "bannedList" });
    return await banList.json();
  }
  async updateNickname(name) {
    await this.fetchMethod("setinfo", { "origin-name": name });
    this.user = this.getUserInfo();
  }
  userSetInfo(a) {
    if (!a.hasOwnProperty("error")) {
      return a;
    } else {
      return defaultUser;
    }
  }
  async getUserInfo() {
    let response = await this.fetchMethod("getinfo");
    if (response !== undefined) {
      let json = await response.json().catch((e) => console.log(e));
      if (json !== undefined) {
        return this.userSetInfo(json);
      }
    }
    this.isWorking = false;
    return defaultUser;
  }
}

export function APIv(version) {
  return new ApiProvider(version);
}

export const BandApi = React.createContext();
