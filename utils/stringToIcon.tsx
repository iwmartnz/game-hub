import nintendo from '@/assets/nintendo.svg';
import xbox from '@/assets/xbox.svg';
import playstation from '@/assets/playstation.svg';
import pc from '@/assets/pc.svg';
import mac from '@/assets/mac.svg';
// import linux from '@/assets//linux.webp';
// import android from '@/assets//android.webp';
// import iOS from '@/assets//iOS.webp';

import type { Platform } from '@/types/index';

const stringToIcon = (platforms: Platform[]) => {
    const icons = platforms.map((platform) => {
        let icon = platform.platform.name;

        switch (icon) {
            case 'Nintendo Switch':
                icon = nintendo;
                break;
            case 'Xbox One':
                icon = xbox;
                break;
            case 'PlayStation 4':
                icon = playstation;
                break;
            case 'PC':
                icon = pc;
                break;
            case 'macOS':
                icon = mac;
                break;
        }
        return icon;
    });
    return Array.from(new Set(icons));
};

export default stringToIcon;
