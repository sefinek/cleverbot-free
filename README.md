<div align="center">
    <h1>❎ 💸 Free CleverBOT NPM Module 🤖 💻</h1>
    <p>
        <b>
            Simple and unofficial NPM module for interacting with the same API that the Cleverbot website uses.<br>
            Available for free! ✔️
        </b>
    </p>
    <p>
        <a href="https://www.npmjs.com/package/@sefinek/cleverbot-free" target="_blank" title="@sefinek/cleverbot-free - npm" style="text-decoration:none">
            <img src="https://img.shields.io/npm/dt/@sefinek/cleverbot-free?maxAge=3600" alt="Number of downloads">
            <img src="https://img.shields.io/github/issues/sefinek24/cleverbot-free" alt="Issues">
            <img src="https://img.shields.io/github/last-commit/sefinek24/cleverbot-free" alt="Last commit">
            <img src="https://img.shields.io/github/commit-activity/w/sefinek24/cleverbot-free" alt="Commit activity">
            <img src="https://img.shields.io/github/languages/code-size/sefinek24/cleverbot-free" alt="Code size">
        </a>
    </p>
</div>

This module allows developers to interact with the Cleverbot [API](https://en.wikipedia.org/wiki/API) without needing an official [API key](https://en.wikipedia.org/wiki/API_key),
providing a convenient and cost-effective way to integrate Cleverbot chatbot features into their projects.


## 🔒 Security
The module selects a [User Agent](https://en.wikipedia.org/wiki/User_agent) randomly from an [array](https://github.com/sefinek24/cleverbot-free/blob/main/scripts/headers/useragent.js#L1) and uses it to send requests to `cleverbot.com`.
Each restart of the application results in the selection of a different user agent at random.


## ⚠️ Warning
**Using this module could potentially lead to a permanent [IP](https://en.wikipedia.org/wiki/IP_address) ban on [cleverbot.com](https://www.cleverbot.com), although this is unlikely.**

This module provides free access to Cleverbot's API, but it is crucial to use it responsibly, keeping in mind that Cleverbot.com may act against IP addresses that misuse their service.
Therefore, consider the following guidelines:
- **Use Responsibly**: Avoid excessive requests to Cleverbot in a short period. Adhere to their terms of service.
- **Testing and Development**: Ideal for testing and development purposes. Not recommended for high-traffic or production applications to prevent IP bans.
- **Use at Your Own Risk**: Users assume responsibility for any potential consequences, including IP bans or other actions by Cleverbot.com.
- **Consider Official API Key**: For extensive and commercial use, consider obtaining an official API key from Cleverbot for reliable and uninterrupted access.


## 📥 Installation
Install this module using [npm 🟥](https://www.npmjs.com) or [yarn 🐈](https://yarnpkg.com):
```bash
npm install cleverbot-free
```
```bash
yarn add cleverbot-free
```


## 🔧 » Documentation

### `CleverBot.interact(message, context[], language)`
A function for interacting with the Cleverbot API. It processes the provided message, context, and language, then returns a response from Cleverbot.

- `message` (**string**, **required**): The message that the user wants to send to Cleverbot. This is the primary text to which Cleverbot will respond.
- `context[]` (**array**, **required**): An array containing the history of previous messages in the conversation. Used to maintain the context of the conversation. Each element of the array represents one line of dialogue.
- `language` (**string**, **optional**, **default:** `en`): The language in which the conversation is to be conducted.

### `CleverBot.config(configurationObject)`
Configures the settings of the Cleverbot module. This function allows you to set various options that affect how the module interacts with the Cleverbot API.

- `configurationObject` (**object**, **required**): An object containing configuration settings.

  | Property                                                                                                                         | Default value              | Description                                                                                         |
  |----------------------------------------------------------------------------------------------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------|
  | [`debug`](https://github.com/sefinek24/cleverbot-free/blob/36887fa8433b03269da0a40575790d4494814e6a/index.js#L9)                 | `false`                    | Enables or disables debug mode. When enabled,<br>the module provides detailed debug information.    |
  | [`selectedLanguage`](https://github.com/sefinek24/cleverbot-free/blob/36887fa8433b03269da0a40575790d4494814e6a/index.js#L10)     | `en`                       | Sets the default language for the Cleverbot conversations.                                          |
  | [`maxRetryAttempts`](https://github.com/sefinek24/cleverbot-free/blob/36887fa8433b03269da0a40575790d4494814e6a/index.js#L11)     | `3`                        | Specifies the maximum number of retry attempts for<br>the API call if it fails initially.           |
  | [`retryBaseCooldown`](https://github.com/sefinek24/cleverbot-free/blob/36887fa8433b03269da0a40575790d4494814e6a/index.js#L12)    | `3000`<br>(3 seconds)      | Determines the base cooldown period in milliseconds<br>before retrying an API call after a failure. |
  | [`cookieExpirationTime`](https://github.com/sefinek24/cleverbot-free/blob/36887fa8433b03269da0a40575790d4494814e6a/index.js#L13) | `15768000`<br>(4.38 hours) | Sets the time in milliseconds after which the cookie<br>should be refreshed.                        |

### `CleverBot.getData()`
Retrieves the current session data and other relevant information.

- **Returns**: See [types](https://github.com/sefinek24/cleverbot-free/blob/c0c6748fb8828a611b005216e768af370cb61ea4/index.d.ts#L64).

### `CleverBot.newSession()`
Allows for the deletion of the current session and the initiation of a new one. The conversation context should also be removed.

- **Returns**: Nothing.

### `CleverBot.version`
A property that represents the current version number of the `cleverbot-free` module, conforming to the Semantic Versioning (SemVer) standard.

- **Returns**: A string that specifies the current version of the module.


## 💬 Example (see also [example.js](example.js))
```js
const CleverBot = require('@sefinek/cleverbot-free');

CleverBot.config({
    debug: false,
    defaultLanguage: 'en',
    maxRetryAttempts: 5,
    retryBaseCooldown: 4000,
    cookieExpirationTime: 15768000
});

const message = 'Do you like cats? >w<';
const context = [];

(async () => {
    const response = await CleverBot.interact(message, context); // `Input`, `conversation context`, `language` is not required if you are using `CleverBot.config` with `defaultLanguage`

    /*
     * Add the user's message first to the context followed by Cleverbot's
     * response to maintain the correct conversational order.
     */
    context.push(message); // User's message 
    context.push(response); // Cleverbot's response

    console.log(response);
})();
```


## 🤔 What can this module be used for?
- Your [Discord Bot](https://discord.com/developers/docs/intro)
- *Do you have additional ideas for utilizing this module? Create a [Pull Request](https://github.com/sefinek24/cleverbot-free/pulls) and contribute them here!*


## 💙 Thanks
If you require any assistance or have questions regarding this module, don't hesitate to open a new [GitHub Issue](https://github.com/sefinek24/cleverbot-free/issues).
Your feedback and contributions are highly appreciated.
If you find this module valuable and useful for your projects, we kindly invite you to show your support by giving it [⭐ a star on GitHub](https://github.com/sefinek24/cleverbot-free).
Thank you for using [cleverbot-free](https://www.npmjs.com/package/cleverbot-free)!


## 🔖 Credits
It is inspired by the [IntriguingTiles/cleverbot-free](https://github.com/IntriguingTiles/cleverbot-free) project.


## 📝 MIT License
Copyright 2023-2024 © by [Sefinek](https://sefinek.net). All Rights Reserved.