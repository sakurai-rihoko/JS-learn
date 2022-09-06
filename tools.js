// check element　is focused
export const hasFocus = el => el === document.activeElement

// get all bro elements
export const broElement = el =>[].slice.call(el.parentNode.children).filter(child => child!== el)

// get selecte text
export const getSelectedText = () => window.getSelection().toString()

// return last page
export const goBack = () => history.go(-1)

export const getCookies = () => document.cookie
.split(';')
.map(item => item.split('='))
.reduce((acc, [k, v]) => (acc[k.trim().replace('"', '')] =v) && acc, {})

export const clearCookies = () => document.cookie
.split(';')
.forEach(c => document.cookie = c.splace(/^+/, '')
        .replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`))


export const getUrlParams = (query) =>Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }),{});

export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// array 
export const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export const arrayToObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

export const countBy = (arr, prop) => arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} );

export const arrayIsNotEmpty = (arr) => Array.isArray(arr) && Object.keys(arr).length > 0;

export const flat_entries = arr => [].concat(...arr); 

export const lastItem = arr => arr.slice(-1)[0]

export const isMuiltObjEqual = (...objects) => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));

export const pluck = (objs, property) => objs.map((obj) => obj[property]);
// 反转对象的 key value
export const invert = (obj) => Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});

// 从对象中删除值为 null 和 undefined 的属性
export const removeNullAndUndefined = (obj) => 
Object.entries(obj) 
.reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

// 按照对象的属性对对象排序
export const sort = (obj) => Object
.keys(obj) 
.sort() 
.reduce((p, c) => ((p[c] = obj[c]), p), {});

// 检测对象是否为数组
export const isArray = (obj) => Array.isArray(obj);

// 检测对象是否为 Promise
export const isPromise = (obj) => 
!!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

// 交换两个对象
export const exchange = (a, b) => [a, b] = [b, a]
复制代码

字符串相关

// 检查路径是否是相对路径
export const isRelative = (path) => !/^([az]+:)?[\\/]/i.test(path);
复制代码

// 将字符串的第一个字符变小写
export const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
复制代码

// 重复一个字符串
export const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);
复制代码

//  生成 IP 地址
export const randomIp = () => Array(4).fill(0) 
.map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0) ) 
.join('.');
复制代码

// 生成十六进制颜色字符串
export const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
复制代码

// 生成 rgb 颜色字符串
export const randomRgbColor = () => `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
复制代码

// 下划线转驼峰
export const toHump = str => str.replace(/\_(\w)/g, (all, letter) => letter.toUpperCase());
复制代码

// 驼峰转下划线横线
export const toLine = str => str.replace(/([A-Z])/g,"_$1").toLowerCase()
复制代码

// 检查字符串是否是十六进制颜色
export const isHexColor = (color) => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);
复制代码

// 字符串转十六进制字符串
export const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1) ;
复制代码

日期相关

// 两个日期之间相差的天数
export const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
复制代码

//  检查日期是否有效
export const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
复制代码

其他

//  检测代码是否处于 Node.js 环境
export const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
复制代码

// 检测代码是否处于浏览器环境
export const isBrowser = typeof window === 'object' && typeof document === 'object';


