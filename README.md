# simply-translation

A very simple translation component focused only on translation words divided by JSON files with default language.
The component uses browser language as first choice and default in case of the translation file is missed.
The system uses Unicode language naming, like `en-US` or `en-GB`.

## Setup

```sh
npm install @gucciogucci/simply-translation
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
import loadTranslation, { simplyTranslate } from '@gucciogucci/simply-translation';

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

### Configuration

By default, _SimplyTranslation_ use browser language as language selector, you can change it adding `source` value to __url_pathname_slot2__ path or __html__ lang attribute:

| attribute name | required | type | value | description |
|---|---|---|---|---|
| default | yes | {string} | en | set up default JSON file |
| source | no | {string} | null \| url_pathname_slot2 \| html | - __null or blank__: use browser language<br>- __url_pathname_slot2__: use URL second slot (e.g.: https://www.domain.com/uk/it/ lang will be _it_)<br>- __html__: use HTML lang attribute `<html lang="en" ... >` |
| languages | yes | {object} | {'en-US': en, 'it-IT': it, ...} | mapping languages files |
| storageName | no | {string} |  | In order to avoid potential conflicts in case you have more than one app with this lib in the same page, you can add an extra name parameter to the storage data |

### Examples

#### Basic configuration

It will use the _Browser Language_ as selector, `en-US` as default language and `it-IT` as extra language:
```js
loadTranslation({
  default: 'en-US',
  languages: {
    'en-US': en,
    'it-IT': it,
  }
});
```

#### With different Language Selector sourse

It will use URL as Language Selector `https://www.domain.com/uk/en/`, and `zh_hk`, and `zh` as extras languages:

```js
loadTranslation({
  default: 'en',
  source: 'url_pathname_slot2',
  languages: {
    'en': en,
    'zh_hk': zh_hk,
    'zh': zh,
  }
});
```

#### With different data storage name

The translation will be storage in a different object:

```js
loadTranslation({
  default: 'en',
  languages: {
    'en': en
  },
  storageName: 'newName'
});
```

### How to use it

First import the component and then call it with the corresponding key and add attributes in an array in case.

*Please check the translation JSON file as example*

```js
import { simplyTranslate } from '@gucciogucci/simply-translation';

simplyTranslate('btnCancel'); //= cancel

simplyTranslate('welcome', ['Laura', 'Brown']); //= Hello Laura Brown
```

## License

Copyright 2021 Gucci.

Licensed under the [GNU Lesser General Public License, Version 3.0](http://www.gnu.org/licenses/lgpl.txt)
