export function simplyTranslate(key,attr) {
    const translationSet = JSON.parse(sessionStorage.getItem('translate'));
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
    const lang = navigator.language;
    const i18nText = data.languages[lang] ? JSON.stringify(data.languages[lang]) : JSON.stringify(data.languages[defaultLang]);
    sessionStorage.setItem('translate', i18nText);
}
