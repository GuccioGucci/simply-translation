import loadTranslation, { simplyTranslate } from './index.js';
let languageGetter;

beforeEach(() => {
    window.ggsp_storage = undefined;
    window.localStorage.translate = {};
    window.localStorage.translate_newone = {};
    languageGetter = jest.spyOn(window.navigator, 'language', 'get');
});

afterEach(() => {
    delete window.localStorage.translate;
});

describe('Traslation', function () {
    it('should be show default lang', () => {
        languageGetter.mockReturnValue('en-US');
        const input = {
            default: 'en-US',
            languages: {
                'en-US': {
                    btnCancel: 'cancel',
                },
                'it-IT': {
                    btnCancel: 'annulla',
                },
            },
        };

        const result = { btnCancel: 'cancel' };
        loadTranslation(input);
        expect(window.localStorage.translate).toBe(JSON.stringify(result));
    });
    it('should be show browser (IT) lang instead of default', () => {
        languageGetter.mockReturnValue('it-IT');
        const input = {
            default: 'es-ES',
            languages: {
                'es-ES': {
                    btnCancel: 'borrar',
                },
                'it-IT': {
                    btnCancel: 'annulla',
                },
            },
        };

        const result = { btnCancel: 'annulla' };
        loadTranslation(input);
        expect(window.localStorage.translate).toBe(JSON.stringify(result));
    });
    it('should be show default lang in case browser lang is not present', () => {
        languageGetter.mockReturnValue('es-ES');
        const input = {
            default: 'en-EN',
            languages: {
                'en-EN': {
                    btnCancel: 'cancel',
                },
                'it-IT': {
                    btnCancel: 'annulla',
                },
            },
        };

        const result = { btnCancel: 'cancel' };
        loadTranslation(input);
        expect(window.localStorage.translate).toBe(JSON.stringify(result));
    });
    it('should be show lang by url with Lang in second slot', () => {
        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
            value: {
                href: 'https://www.domain.com/uk/it/',
                origin: 'https://www.domain.com',
                pathname: '/uk/it/'
            }
        });
        const input = {
            default: 'en',
            source: 'url_pathname_slot2',
            languages: {
                'en': {
                    btnCancel: 'cancel',
                },
                'it': {
                    btnCancel: 'annulla',
                },
            },
        };

        const result = { btnCancel: 'annulla' };
        loadTranslation(input);
        expect(window.localStorage.translate).toBe(JSON.stringify(result));
    });
    it('should be show lang by html lang attribute', () => {
        document.getElementsByTagName('html')[0].setAttribute('lang', 'zh_HK');
        const input = {
            default: 'en',
            source: 'html',
            languages: {
                'en': {
                    btnCancel: 'cancel',
                },
                'zh_hk': {
                    btnCancel: '取消',
                },
                'it': {
                    btnCancel: 'annulla',
                },
            },
        };

        const result = { btnCancel: '取消' };
        loadTranslation(input);
        expect(window.localStorage.translate).toBe(JSON.stringify(result));
    });
    it('should be show with different storagename', () => {
        document.getElementsByTagName('html')[0].setAttribute('lang', 'zh_HK');
        const input = {
            default: 'en',
            source: 'html',
            languages: {
                'en': {
                    btnCancel: 'cancel',
                },
                'zh_hk': {
                    btnCancel: '取消',
                },
                'it': {
                    btnCancel: 'annulla',
                },
            },
            storageName: 'newone'
        };

        const result = { btnCancel: '取消' };
        loadTranslation(input);
        expect(window.localStorage.translate_newone).toBe(JSON.stringify(result));
    });
    it('should be show with default storagename', () => {
        document.getElementsByTagName('html')[0].setAttribute('lang', 'zh_HK');
        const input = {
            default: 'en',
            source: 'html',
            languages: {
                'en': {
                    btnCancel: 'cancel',
                },
                'zh_hk': {
                    btnCancel: '取消',
                },
                'it': {
                    btnCancel: 'annulla',
                },
            },
            storageName: ''
        };

        const result = { btnCancel: '取消' };
        loadTranslation(input);
        expect(window.localStorage.translate).toBe(JSON.stringify(result));
    });
    it('should be the translation', () => {
        const input = { btnCancel: 'borrar' };
        window.localStorage.translate = JSON.stringify(input);
        expect(simplyTranslate('btnCancel')).toBe('borrar');
    });
    it('should be the translation with two attributes', () => {
        const input = { welcome: 'hello {0} {1}' };
        window.localStorage.translate = JSON.stringify(input);
        expect(simplyTranslate('welcome', ['Mr', 'Brown'])).toBe('hello Mr Brown');
    });
});
