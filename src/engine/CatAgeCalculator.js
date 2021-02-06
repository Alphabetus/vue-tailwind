export default class CatAgeCalculator {

    validateYears(years) {
        return years > 25 ? false : true
    }

    convertYearsToMonths(years) {
        return parseInt(years * 12);
    }

    calculateAge(months) {
        let humanAge;
        switch (true) {
            case (months == 1):
                humanAge = 1;
                break;

            case (months == 2):
                humanAge = 2;
                break;

            case (months == 3):
                humanAge = 4
                break;

            case (months == 4):
                humanAge = 6;
                break;

            case (months == 5):
                humanAge = 8;
                break;

            case (months == 6):
                humanAge = 10;
                break;

            case (months == 7):
                humanAge = 12;
                break;

            case (months >= 8 && months <= 12):
                humanAge = 15;
                break;

            case (months >= 13 && months <= 18):
                humanAge = 21;
                break;

            case (months >= 19 && months <= 35):
                humanAge = 24;
                break;

            case (months >= 37 && months <= 48):
                humanAge = 28;
                break;

            case (months >= 49 && months <= 60):
                humanAge = 32;
                break;

            case (months >= 61 && months <= 72):
                humanAge = 36;
                break;

            case (months >= 73 && months <= 84):
                humanAge = 40;
                break;

            case (months >= 85 && months <= 96):
                humanAge = 44;
                break;

            case (months >= 97 && months <= 108):
                humanAge = 48;
                break;

            case (months >= 109 && months <= 120):
                humanAge = 52;
                break;

            case (months >= 121 && months <= 132):
                humanAge = 56;
                break;

            case (months >= 133 && months <= 144):
                humanAge = 60;
                break;

            case (months >= 145 && months <= 156):
                humanAge = 64;
                break;

            case (months >= 157 && months <= 168):
                humanAge = 68;
                break;

            case (months >= 169 && months <= 180):
                humanAge = 72;
                break;

            case (months >= 181 && months <= 192):
                humanAge = 76;
                break;

            case (months >= 193 && months <= 204):
                humanAge = 80;
                break;

            case (months >= 205 && months <= 216):
                humanAge = 84;
                break;

            case (months >= 217 && months <= 228):
                humanAge = 88;
                break;

            case (months >= 229 && months <= 240):
                humanAge = 92;
                break;

            case (months >= 241 && months <= 252):
                humanAge = 96;
                break;

            case (months >= 253 && months <= 264):
                humanAge = 100;
                break;

            case (months >= 265 && months <= 276):
                humanAge = 104;
                break;

            case (months >= 277 && months <= 288):
                humanAge = 108;
                break;

            case (months >= 289 && months <= 300):
                humanAge = 112;
                break;

            case (months >= 301 && months <= 312):
                humanAge = 116;
                break;

            default:
                humanAge = 0;
        }
        return humanAge;
    }


}