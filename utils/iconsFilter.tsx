import type { Platform } from '@/types/index';

const stringToIcon = (platforms: Platform[]) => {
    const icons = platforms.map((platform) => {
        let icon = platform.platform.name;

        switch (icon) {
            case 'Nintendo Switch':
                icon = 'nintendo';
                break;
            case 'Nintendo 3DS':
                icon = 'nintendo';
                break;
            case 'Xbox Series S/X':
                icon = 'xbox';
                break;
            case 'Xbox One':
                icon = 'xbox';
                break;
            case 'Xbox 360':
                icon = 'xbox';
                break;
            case 'Xbox':
                icon = 'xbox';
                break;
            case 'PlayStation 5':
                icon = 'playstation';
                break;
            case 'PlayStation 4':
                icon = 'playstation';
                break;
            case 'PlayStation 3':
                icon = 'playstation';
                break;
            case 'PlayStation 2':
                icon = 'playstation';
                break;
            case 'PlayStation':
                icon = 'playstation';
                break;
            case 'PS Vita':
                icon = 'playstation';
                break;
            case 'PC':
                icon = 'pc';
                break;
            case 'macOS':
                icon = 'mac';
                break;
            case 'Linux':
                icon = 'linux';
                break;
            case 'iOS':
                icon = 'ios';
                break;
            case 'Android':
                icon = 'android';
                break;
            default:
                break;
        }
        return icon;
    });
    return Array.from(new Set(icons));
};

export default stringToIcon;
