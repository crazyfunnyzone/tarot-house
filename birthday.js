const zodiacSigns = [
    { name: '水瓶座', date: [120, 218], traits: '创新、独立、人道主义', lucky: '土星日（周六）' },
    { name: '双鱼座', date: [219, 320], traits: '敏感、艺术、同情心', lucky: '木星日（周四）' },
    { name: '白羊座', date: [321, 419], traits: '勇敢、热情、领导力', lucky: '火星日（周二）' },
    { name: '金牛座', date: [420, 520], traits: '稳重、务实、享受生活', lucky: '金星日（周五）' },
    { name: '双子座', date: [521, 621], traits: '机智、适应力强、交际能力好', lucky: '水星日（周三）' },
    { name: '巨蟹座', date: [622, 722], traits: '敏感、保护欲强、重情感', lucky: '月亮日（周一）' },
    { name: '狮子座', date: [723, 822], traits: '自信、慷慨、领导才能', lucky: '太阳日（周日）' },
    { name: '处女座', date: [823, 922], traits: '完美主义、分析能力强、实际', lucky: '水星日（周三）' },
    { name: '天秤座', date: [923, 1023], traits: '公平、和谐、艺术气质', lucky: '金星日（周五）' },
    { name: '天蝎座', date: [1024, 1122], traits: '神秘、洞察力强、意志力强', lucky: '火星日（周二）' },
    { name: '射手座', date: [1123, 1221], traits: '乐观、冒险、哲学思维', lucky: '木星日（周四）' },
    { name: '摩羯座', date: [1222, 119], traits: '务实、目标导向、负责任', lucky: '土星日（周六）' }
];

function getZodiacSign(month, day) {
    const date = month * 100 + day;
    return zodiacSigns.find(sign => {
        if (sign.name === '摩羯座') {
            return date >= sign.date[0] || date <= sign.date[1];
        }
        return date >= sign.date[0] && date <= sign.date[1];
    });
}

function analyzeBirthday() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        alert('请选择您的生日！');
        return;
    }

    const date = new Date(birthdateInput);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zodiac = getZodiacSign(month, day);

    const resultDiv = document.getElementById('birthday-result');
    let result = `<h3>生日解析结果</h3>`;
    
    result += `<div class="result-section">
        <p>您的星座：<span class="highlight">${zodiac.name}</span></p>
        <p>性格特征：${zodiac.traits}</p>
        <p>幸运日：${zodiac.lucky}</p>
    </div>`;

    // 添加运势预测
    const today = new Date();
    const luckyNumber = ((today.getDate() + month + day) % 10) + 1;
    
    result += `<div class="result-section">
        <p>今日运势：</p>
        <p>幸运指数：${'★'.repeat(luckyNumber)}</p>
        <p>建议：${getLuckyAdvice(luckyNumber)}</p>
    </div>`;

    resultDiv.innerHTML = result;
}

function getLuckyAdvice(luckyNumber) {
    const advice = [
        '今天宜静不宜动，建议专注于思考和规划。',
        '适合与朋友相聚，可能会有意外收获。',
        '工作运势不错，可以大胆表达自己的想法。',
        '财运亨通，适合投资或购物。',
        '桃花运旺盛，单身的朋友可能遇到心仪对象。',
        '适合学习新技能，扩展知识面。',
        '事业有新的机遇，要把握住机会。',
        '人际关系和谐，是社交的好时机。',
        '创意灵感爆发，适合进行创造性工作。',
        '整体运势极佳，可以尝试新的挑战。'
    ];
    return advice[luckyNumber - 1];
} 