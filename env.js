import pinyin from './pinyin';

export default {
    title: 'MikuTools',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'dev.iae.us.kg:3000'
            : 'tool.iae.us.kg',
    description: '一个轻量的工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'http://dev.miku.tools:3000'
            : 'https://tool.iae.us.kg',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'http://dev.iae.us.kg:3001'
            : 'https://tool-api.iae.us.kg',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://tool-api.iae.us.kg'
};
