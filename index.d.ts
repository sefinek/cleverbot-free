export = CleverBot;

declare namespace CleverBot {
    type Stimulus = string;
    type Context = string[];
    type Language =
        | 'af' | 'id' | 'ms' | 'ca' | 'cs' | 'da' | 'de' | 'en' | 'es' | 'eu'
        | 'ti' | 'fr' | 'gl' | 'hr' | 'zu' | 'is' | 'it' | 'lt' | 'hu' | 'nl'
        | 'no' | 'pl' | 'pt' | 'ro' | 'sl' | 'fi' | 'sv' | 'vi' | 'tr' | 'el'
        | 'bg' | 'ru' | 'sr' | 'uk' | 'ko' | 'zh' | 'ja' | 'hi' | 'th';

    interface Headers {
        'Accept': string;
        'Accept-Encoding': string;
        'Accept-Language': string;
        'Cache-Control': string;
        'Connection': string;
        'Host': string;
        'Sec-Ch-Ua': string;
        'Sec-Ch-Ua-Mobile': string;
        'Sec-Ch-Ua-Platform': string;
        'Sec-Fetch-Dest': string;
        'Sec-Fetch-Mode': string;
        'Sec-Fetch-Site': string;
        'Sec-Fetch-User': string;
        'Upgrade-Insecure-Requests': string;
        'User-Agent': string;
    }

    interface Config {
        debug?: boolean;
        defaultLanguage?: Language;
        maxRetryAttempts?: number;
        retryBaseCooldown?: number;
        cookieExpirationTime?: number;
    }

    interface CookieEntry {
        content: string[] | undefined;
        lastUpdate: number;
    }

    interface CookieState {
        cookieExpirationTime: number;
        data: CookieEntry[];
    }

    interface SessionData {
        cbsId: string | undefined;
        xai: string | undefined;
        ns: number;
        lastResponse: string | undefined;
    }

    interface RequestData {
        successfulRequestsCount: number;
        failedRequestsCount: number;
        headers: Headers;
    }

    interface CleverBotData {
        debug: boolean;
        selectedLanguage: Language;
        maxRetryAttempts: number;
        retryBaseCooldown: number;
        cookie: CookieState;
        session: SessionData;
        request: RequestData;
    }

    /**
     * The main function of the module, communicating with the Cleverbot API.
     * @param stimulus - The input text for Cleverbot.
     * @param context - The conversation context as an array of strings.
     * @param language - Optional language code for the Cleverbot session.
     * @returns The response from Cleverbot as a string.
     * @example
     * const CleverBot = require('@sefinek/cleverbot-free');
     *
     * CleverBot.config({ debug: false, defaultLanguage: 'en', maxRetryAttempts: 5, retryBaseCooldown: 4000, cookieExpirationTime: 15768000 });
     *
     * const msg = 'Hello';
     * const context = [];
     *
     * (async () => {
     *    try {
     *        const res = await CleverBot.interact(msg, context);
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
    function interact(stimulus: Stimulus, context?: Context, language?: Language): Promise<string>;

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
    function config(config: Config): void;

    /**
     * Returns the current session data stored in RAM and other information.
     *
     * @example console.log(CleverBot.getData());
     * @returns An object with Cleverbot data.
     */
    function getData(): CleverBotData;

    /**
     * Allows for the deletion of the current session and the initiation of a new one. The conversation context should also be removed.
     *
     * @example
     * const CleverBot = require('@sefinek/cleverbot-free');
     *
     * let context = ['Hello', 'Hi', 'How are you?'];
     *
     * CleverBot.newSession();
     * context = [];
     */
    function newSession(): void;

    /**
     * Represents the version number of the `@sefinek/cleverbot-free` module.
     * This property contains a string that specifies the current version of the module,
     * conforming to the Semantic Versioning (SemVer) standard.
     *
     * @example console.log(CleverBot.version); // Displays e.g. '2.0.0'
     */
    const version: string;
}
