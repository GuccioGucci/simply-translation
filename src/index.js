export function simplyTranslate(key,attr) {
    const lableStorage = window.ggsp_storage ? window.ggsp_storage : 'translate';
    const translationSet = JSON.parse(localStorage.getItem(lableStorage));
    let translation = translationSet[key];
    if (attr) {
        attr.forEach((word, index) => {
            translation = translation.replace(`{${index}}`, word);
        });
    }
    return translation;
}

export default function loadTranslation(data) {
    const defaultLang = data.default;
    let lableStorage = 'translate';
    if (data.storageName) {
        lableStorage = 'translate_' + data.storageName;
        window.ggsp_storage = lableStorage;
    }

    let lang;
    if (data.source !== undefined && data.source === 'url_pathname_slot2') {
        const [, , language] = window.location.pathname.split('/');
        lang = language;
    } else if (data.source !== undefined && data.source === 'html') {
        lang = document.documentElement.lang.toLowerCase();
    } else {
        lang = navigator.language;
    }
    const i18nText = data.languages[lang] ? JSON.stringify(data.languages[lang]) : JSON.stringify(data.languages[defaultLang]);
    localStorage.setItem(lableStorage, i18nText);
}
