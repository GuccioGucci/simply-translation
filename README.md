# react-simply-translation

Very simple translation component focused only on translation words divided by JSON files with default language.
The component uses browser language as first choice and default in case of the translation file is missed.
The system uses Unicode language naming, like `en-US` or `en-GB`.

## Setup

```sh
npm install @gucciogucci/react-simply-translation
```

### Create a JSON file

Translation file is a JSON format, this is an example:

File **en.json**

```json
{
  "btnCancel": "cancel",
  "btnClose": "close",
  "welcome": "Hello {0} {1}"
}
```

*Please note the 'welcome' key with the attributes annotations*

### Folder structure

You need to use a JSON file per language in your project, the structure should be like this:

```sh
src
└── asset
  └── i18n
    ├── en.json
    └── it.json
```

## Usage

### Load translations

In the main file, usually `App.js`, import the component and set it up like this:

```js
// import component with set up and translation function
import loadTranslation, { simplyTranslate } from '@gucciogucci/react-simply-translation';

// import translation lib
import en from './asset/i18n/en.json';
import it from './asset/i18n/it.json';

// set up
loadTranslation({
  default: 'en-US',
  languages: {
    'en-US': en,
    'it-IT': it,
  }
});
``` 

### Simply translate

First import the component and then call it with the corresponding key and add attributes in an array in case.

*Please check the translation JSON file as example*

```js
import { simplyTranslate } from '@gucciogucci/react-simply-translation';

simplyTranslate('btnCancel'); //= cancel

simplyTranslate('welcome', ['Laura', 'Brown']); //= Hello Laura Brown
```

## License

Copyright 2021 Gucci.

Licensed under the [GNU Lesser General Public License, Version 3.0](http://www.gnu.org/licenses/lgpl.txt)
