export function simplyTranslate(key,attr) {
    const translationSet = JSON.parse(localStorage.getItem('translate'));
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
    let lang;
    if (data.source !== undefined && data.source === 'url_pathname_slot2') {
        const [, , language] = window.location.pathname.split('/');
        lang = language;
    } else {
        lang = navigator.language;
    }
    const i18nText = data.languages[lang] ? JSON.stringify(data.languages[lang]) : JSON.stringify(data.languages[defaultLang]);
    localStorage.setItem('translate', i18nText);
}
