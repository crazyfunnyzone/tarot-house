const runeMeanings = {
    'ᚠ': '财富与繁荣，象征物质的成功和财富的积累。',
    'ᚢ': '力量与能量，代表生命力和创造力的源泉。',
    'ᚦ': '保护与防御，象征安全和抵御外界威胁的能力。',
    'ᚨ': '成功与成就，代表目标的实现和事业的成功。',
    'ᚱ': '旅行与探索，象征新的冒险和未知的旅程。',
    'ᚲ': '知识与智慧，代表学习和智慧的积累。',
    'ᚷ': '生育与繁衍，象征生命的延续和家庭的幸福。',
    'ᚹ': '和谐与平衡，代表内心的平静和外部的和谐。',
    'ᚺ': '健康与活力，象征身体的健康和精神的活力。',
    'ᚾ': '变化与转变，代表生活中的变化和适应能力。',
    'ᛁ': '潜力与可能性，象征未被开发的潜力和机会。',
    'ᛃ': '丰收与成果，代表努力后的回报和丰收。',
    'ᛇ': '灵性与直觉，象征内心的声音和灵性的觉醒。',
    'ᛈ': '保护与庇护，代表安全感和保护的力量。',
    'ᛉ': '平衡与和谐，象征内外的平衡和和谐的关系。',
    'ᛋ': '胜利与成功，代表战斗后的胜利和成就。',
    'ᛏ': '正义与公正，象征公平和正义的实现。',
    'ᛒ': '创造与艺术，代表创造力和艺术的表达。',
    'ᛖ': '变化与转变，象征生活中的变化和适应能力。',
    'ᛗ': '稳定与安全，代表稳定的基础和安全感。',
    'ᛚ': '领导与权威，象征领导能力和权威的体现。',
    'ᛦ': '结束与完成，代表事情的结束和新的开始。'
};

function drawRunes() {
    const question = document.getElementById('runeQuestion').value;
    const resultDiv = document.getElementById('rune-result');

    if (!question) {
        alert('请输入你的问题！');
        return;
    }

    // 模拟抽取鲁尼文的结果
    const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛦ'];
    const drawnRunes = [];
    const interpretations = [];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * runes.length);
        const rune = runes[randomIndex];
        drawnRunes.push(rune);
        interpretations.push(runeMeanings[rune]); // 获取对应的解读
    }

    // 生成总的结果解读
    const overallInterpretation = generateOverallInterpretation(drawnRunes);

    resultDiv.innerHTML = `
        <h3>占卜结果</h3>
        <p>你的问题: ${question}</p>
        <p>抽取的鲁尼文: ${drawnRunes.join(' ')}</p>
        <h4>解读:</h4>
        <ul>
            ${interpretations.map(interpretation => `<li>${interpretation}</li>`).join('')}
        </ul>
        <h4>总体解读:</h4>
        <p>${overallInterpretation}</p>
    `;
}

// 生成总体解读的函数
function generateOverallInterpretation(runes) {
    const uniqueRunes = [...new Set(runes)]; // 获取唯一的鲁尼文
    if (uniqueRunes.length === 3) {
        return "你抽取了三种不同的鲁尼文，象征着多样性和丰富的可能性。";
    } else if (uniqueRunes.length === 2) {
        return "你抽取了两种鲁尼文，代表着某种平衡和对立的力量。";
    } else {
        return "你抽取了相同的鲁尼文，象征着某种特定的主题或问题的集中。";
    }
} 