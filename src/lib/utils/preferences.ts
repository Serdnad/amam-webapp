type Preference = 'lang' // to expand on later, as needed

// type Options<P extends Preference> = 'en' | 'ar'
const DEFAULTS = {
    'lang': 'en'
}

export function getPreference<Preference>(key: Preference) {
    return JSON.parse(localStorage.getItem(key)) ?? DEFAULTS[key]
}

export function setPreference(key: Preference, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}