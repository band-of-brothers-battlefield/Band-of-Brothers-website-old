/**
 * Json API library. Copyright Band of Brothers & Community Network, 2020
 * Developers: discord.gg/kxUeTeT
 * Developers: discord.gg/kxUeTeT
 * Band of Brothers: discord.gg/FDJjESK
 */

import * as Config from "./config.json";
import { Method, Response, Result, User } from "./types";

/**
 * This Json Client is developed to use specially with Community Network APIs
 */
export default class JsonClient {
    // Is backend online?
    is_online: boolean;
    // Current API user
    user: Promise<User>;
    constructor() {
        // Set offline before user loads
        this.is_online = false;
        // Load user into promise
        this.user = this.getUserInfo();
    }
    /**
     * Make API url using Method and params
     */
    constructApiUrl(method: Method, params: any = {}): string {
        // Join params into the format of key=value
        let joined_params = [];
        for (let param_name in params) {
            let param_value = params[param_name];
            joined_params.push(`${param_name}=${param_value}`);
        }
        // Make method url
        const api_end_point = Config.api.endPoint;
        let api_constructed_url = api_end_point + method
        // Join params if needed
        if (joined_params.length > 0) {
            let param_string = joined_params.join('&');
            api_constructed_url += `?${param_string}`
        }
        return api_constructed_url;
    }
    /**
     * GET raw data from given method and params
     */
    async fetchMethod(method: Method, params?: any) {
        let request_url = this.constructApiUrl(method, params);
        let result = await fetch(request_url, {
            credentials: "include"
        });
        return result;
    }
    /**
     * POST raw data from given method and params
     */
    async postMethod(method: Method, params: any) {
        let request_url = this.constructApiUrl(method, {});
        let result = await fetch(request_url, params);
        return result;
    }
    // Convert error to response
    error_msg_to_response(error: any): Response {
        return {
            error: error,
            type: Result.Err
        }
    }
    // Conver payload to response
    payload_to_response(payload: any): Response {
        var type = Result.Ok;
        if ("error" in payload) {
            type = Result.Err;
            payload = payload.error;
        }
        return {
            payload: payload,
            type: type
        }
    }
    /**
     * POST json data async
     */
    async postJsonMethod(input_method: Method, params: any = {}) {
        const options = {
            method: 'POST',
            body: JSON.stringify(params),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let post_promise = this.postMethod(input_method, options);
        return post_promise.then(result => {
            return result.json().then(
                json => this.payload_to_response(json),
                error => this.error_msg_to_response(error)
            );
        }, error => this.error_msg_to_response(error));
    }
    /**
     * GET json data
     */
    async getJsonMethod(input_method: Method, options: any = {}) {
        let fetch_promise = this.fetchMethod(input_method, options);
        return fetch_promise.then(result => {
            return result.json().then(
                json => this.payload_to_response(json),
                error => this.error_msg_to_response(error)
            );
        }, error => this.error_msg_to_response(error));
    }
    async getUserInfo() {
        let response = await this.getJsonMethod(Method.getinfo);
        if (response.type == Result.Ok) {
            this.is_online = true;
            return response.payload;
        } else {
            return {
                discord: {
                    name: "",
                    discriminator: 0,
                    avatar: ""
                },
                auth: {
                    is_signed_in: false,
                    is_admin: false
                }
            }
        }
    }
    openLoginPage() {
        window.location.href = this.constructApiUrl(Method.login);
    }
}