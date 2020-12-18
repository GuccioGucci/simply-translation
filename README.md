# react-simply-translation

Very simple translation component focus only on translation words divided by JSON files with default language. 
The component use browser language as first choose and default in case of the translation file is missed.
The system use Unicode language naming, like `en-US` or `en-GB`.
## How to install it

run
```
npm install react-simply-translation
```
## How to use

### How set up JSON file

Translation file is a JSON format, this is an example:


File **en.json**
*Please note the 'welcome' key with the attributes annotations*
```
{
    "btnCancel": "cancel",
    "btnClose": "close",
    "welcome": "Hello {0} {1}"
}
```

### How to load and set it up

You need to use a JSON file per language in your project, the structure should be like this:

```
src
`--asset
    `--i18n
        |-- en.json
        `-- it.json
```


In the main file, usually App.js, import the component and set it up like this:

```
\\ Import component with set up and translation function
import loadTranslation, { simplyTranslate } from 'react-simply-translation';

\\ import translation lib
import en from './asset/i18n/en.json';
import it from './asset/i18n/it.json';

\\ set up
loadTranslation({
    default: 'en-US',
    languages: {
        'en-US': en,
        'it-IT': it,
    }
});
```

### How to use it in components

First import the component and then call it with the corresponding key and add attributes in an array in case.
*Please check the translation JSON file as example*

```
import { simplyTranslate } from 'react-simply-translation';
```

#### Retrieve normal translation
return 'btnCancel' translation
```
simplyTranslate('btnCancel');

```

#### Retrieve translation with attribute
return 'welcome' with two attributes into an array
```
simplyTrasnlate('welcome', ['Laura', 'Brown']);
```