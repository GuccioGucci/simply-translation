export function simplyTranslate(key) {
    const translation = JSON.parse(sessionStorage.getItem('translate'));
    return translation[key];
}

export default function loadTranslation(data) {
    const defaultLang = data.default;
    const lang = navigator.language;
    const i18nText = data.languages[lang] ? JSON.stringify(data.languages[lang]) : JSON.stringify(data.languages[defaultLang]);
    sessionStorage.setItem('translate', i18nText);
}
