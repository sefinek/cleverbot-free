# Free CleverBOT NPM Module ❎ 💸
This module allows developers to interact with the Cleverbot [API](https://en.wikipedia.org/wiki/API) without needing an official [API key](https://en.wikipedia.org/wiki/API_key),
providing a convenient and cost-effective way to integrate Cleverbot chatbot features into their projects.


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
npm install @sefinek/cleverbot-free
```
```bash
yarn add @sefinek/cleverbot-free
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

  | Property                                                                                   | Default value              | Description                                                                                         |
  |--------------------------------------------------------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------|
  | [`debug`](https://github.com/sefinek/cleverbot-free/blob/main/index.js#L9)                 | `false`                    | Enables or disables debug mode. When enabled,<br>the module provides detailed debug information.    |
  | [`selectedLanguage`](https://github.com/sefinek/cleverbot-free/blob/main/index.js#L10)     | `en`                       | Sets the default language for the Cleverbot conversations.                                          |
  | [`maxRetryAttempts`](https://github.com/sefinek/cleverbot-free/blob/main/index.js#L11)     | `3`                        | Specifies the maximum number of retry attempts for<br>the API call if it fails initially.           |
  | [`retryBaseCooldown`](https://github.com/sefinek/cleverbot-free/blob/main/index.js#L12)    | `3000`<br>(3 seconds)      | Determines the base cooldown period in milliseconds<br>before retrying an API call after a failure. |
  | [`cookieExpirationTime`](https://github.com/sefinek/cleverbot-free/blob/main/index.js#L13) | `15768000`<br>(4.38 hours) | Sets the time in milliseconds after which the cookie<br>should be refreshed.                        |

### `CleverBot.getData()`
Retrieves the current session data and other relevant information.

- **Returns**: See [types](https://github.com/sefinek/cleverbot-free/blob/main/index.d.ts#L61).

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
- *Do you have additional ideas for utilizing this module? Create a [Pull Request](https://github.com/sefinek/cleverbot-free/pulls) and contribute them here!*


## 💙 Thanks
If you require any assistance or have questions regarding this module, don't hesitate to open a new [GitHub Issue](https://github.com/sefinek/cleverbot-free/issues).
Your feedback and contributions are highly appreciated.
If you find this module valuable and useful for your projects, we kindly invite you to show your support by giving it [⭐ a star on GitHub](https://github.com/sefinek/cleverbot-free).
Thank you for using [@sefinek/cleverbot-free](https://www.npmjs.com/package/@sefinek/cleverbot-free)!


## 🔖 Credits
It is inspired by the [IntriguingTiles/cleverbot-free](https://github.com/IntriguingTiles/cleverbot-free) project.


## 📝 MIT License
Copyright © 2024-2026 [Sefinek](https://sefinek.net)