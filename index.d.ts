declare module 'cleverbot-free' {
    export type Stimulus = string;
    export type Context = string[];
    export type Language =
        | 'af' | 'id' | 'ms' | 'ca' | 'cs' | 'da' | 'de' | 'en' | 'es' | 'eu'
        | 'ti' | 'fr' | 'gl' | 'hr' | 'zu' | 'is' | 'it' | 'lt' | 'hu' | 'nl'
        | 'no' | 'pl' | 'pt' | 'ro' | 'sl' | 'fi' | 'sv' | 'vi' | 'tr' | 'el'
        | 'bg' | 'ru' | 'sr' | 'uk' | 'ko' | 'zh' | 'ja' | 'hi' | 'th';

    export type Headers = {
        'Accept': string;
        'Accept-Encoding': string;
        'Accept-Language': string;
        'Cache-Control': string;
        'Connection': string;
        'Content-Type': string;
        'Host': string;
        'Pragma': string;
        'Origin': string;
        'Referer': string;
        'Sec-Ch-Ua'?: string;
        'Sec-Ch-Ua-Arch'?: string;
        'Sec-Ch-Ua-Bitness'?: string;
        'Sec-Ch-Ua-Full-Version'?: string;
        'Sec-Ch-Ua-Full-Version-List'?: string;
        'Sec-Ch-Ua-Mobile': string;
        'Sec-Ch-Ua-Model': string;
        'Sec-Ch-Ua-Platform'?: string;
        'Sec-Ch-Ua-Platform-Version'?: string;
        'Sec-Ch-Ua-Wow64': string;
        'Sec-Fetch-Dest': string;
        'Sec-Fetch-Mode': string;
        'Sec-Fetch-Site': string;
        'Sec-Gpc': string;
        'User-Agent': string;
    };

    export interface Config {
        debug?: boolean;
        defaultLanguage?: Language;
        maxRetryAttempts?: number;
        retryBaseCooldown?: number;
        cookieExpirationTime?: number;
    }

    export interface CookieData {
        content: string[] | undefined;
        lastUpdate: number;
    }

    export interface SessionData {
        cbsId: string | undefined;
        xai: string | undefined;
        ns: number;
        lastResponse: string | undefined;
    }

    export interface RequestData {
        successfulRequestsCount: number;
        failedRequestsCount: number;
        headers: Headers;
    }

    export interface CleverBotData {
        debug: boolean;
        selectedLanguage: Language;
        maxRetryAttempts: number;
        retryBaseCooldown: number;
        cookie: CookieData;
        session: SessionData;
        request: RequestData;
    }


    /**
     * The main function of the module, communicating with the Cleverbot API.
     * @param stimulus - The input text for Cleverbot.
     * @param context - The required conversation context as an array of strings.
     * @param language - Optional language code for the Cleverbot session.
     * @returns The response from Cleverbot as a string.
     * @example
     * const CleverBot = require('cleverbot-free');
     *
     * CleverBot.config({ debug: false, defaultLanguage: 'en', maxRetryAttempts: 5, retryBaseCooldown: 4000, cookieExpirationTime: 15768000 });
     *
     * const context = [];
     *
     * (async () => {
     *    try {
     *        const res = await CleverBot.interact('Hello', context);
     *
     *        context.push(msg);
     *        context.push(res);
     *
     *        console.log(res);
     *    } catch (err) {
     *        console.error('Sorry, but something went wrong ):', err);
     *    }
     * })();
     * @throws {Error} If it fails to get a response after the maximum number of attempts.
     */
    export function interact(stimulus: Stimulus, context: Context, language?: Language): Promise<string>;

    /**
     * Function responsible for configuring the module.
     * Allows setting various configuration options for the Cleverbot module.
     *
     * @param config - The configuration object containing settings.
     * @example
     * CleverBot.config({
     *    debug: false,
     *    defaultLanguage: 'en',
     *    maxRetryAttempts: 5,
     *    retryBaseCooldown: 4000,
     *    cookieExpirationTime: 15768000,
     * });
     * @throws {Error} If the provided configuration object is invalid.
     */
    export function config(config: Config): void;

    /**
     * Returns the current session data stored in RAM and other information.
     *
     * @example console.log(CleverBot.getData());
     * @returns An object with Cleverbot data.
     */
    export function getData(): CleverBotData;

    /**
     * Allows for the deletion of the current session and the initiation of a new one. The conversation context should also be removed.
     *
     * @example
     * const CleverBot = require('cleverbot-free');
     *
     * const context = ['Hello', 'Hi', 'How are you?'];
     *
     * CleverBot.newSession();
     * context = [];
     */
    export function newSession(): void;

    /**
     * Represents the version number of the `cleverbot-free` module.
     * This property contains a string that specifies the current version of the module,
     * conforming to the Semantic Versioning (SemVer) standard.
     *
     * @example console.log(CleverBot.version); // Displays e.g. '2.0.0'
     * @return The current version of the module.
     */
    export const version: string;
}
