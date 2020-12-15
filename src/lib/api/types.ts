export interface UserAuthState {
  is_admin: boolean;
  is_signed_in: boolean;
}

export interface UserBoBServer {
  nickname: string;
  role: string;
  role_color: string;
}

export interface UserDiscordAcc {
  avatar: string;
  discriminator: number;
  name: string;
}

export interface UserOriginAcc {
  id: number;
  is_in_platoon: boolean;
  name: string;
  platoon: string;
}

export interface User {
  auth: UserAuthState;
  bob?: UserBoBServer;
  discord: UserDiscordAcc;
  origin?: UserOriginAcc;
}

export enum Method {
  getinfo = "getinfo",
  login = "login",
  logout = "logout",
  infolist = "infolist",
  platoon = "platoon",
  setinfo = "setinfo",
}

export interface Response {
  type: Result;
  error?: any;
  payload?: any;
}

export enum Result {
  Err,
  Ok,
}

