import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывод помощи
        -t [API_KEY] для сохранения токена
        `
    )
}

const printWeather = (weather) => {
    console.log(
        dedent`${chalk.bgYellow(`Погода в городе:`)} ${weather.name}
        ${chalk.bgYellow('Описание:')} ${weather.weather[0].description} ${getIcon(weather.weather[0].icon)}
        ${chalk.bgYellow('Температура:')} ${weather.main.temp} цельсий.
        `
    )
}

const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀️';
        case '02':
            return '🌤️';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
        default:
            return '';
    }
};

export {printError, printSuccess, printHelp, printWeather}