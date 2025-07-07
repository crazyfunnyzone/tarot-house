const tarotCards = [
    {
        name: "愚者",
        number: 0,
        image: "images/tarot/Fool.png",
        meaning: {
            upright: "新的开始、冒险、自发性、纯真、自由",
            reversed: "鲁莽、不负责任、过于冒险、犹豫不决",
            love: "新的恋情、自由恋爱、不受拘束的关系、纯真的爱",
            career: "新的工作机会、创业、追随内心、不惧改变",
            advice: "保持开放和好奇的心态，相信自己的直觉，但也要适度谨慎"
        }
    },
    {
        name: "魔术师",
        number: 1,
        image: "images/tarot/Magician.png",
        meaning: {
            upright: "创造力、技能、意志力、独创性、主动",
            reversed: "技能未熟、欺骗、才能误用、优柔寡断",
            love: "展现真实的自我，运用智慧处理感情，有吸引力",
            career: "发挥专业技能，创造性工作，掌握主动权",
            advice: "善用你的才能和资源，将想法付诸行动"
        }
    },
    {
        name: "女祭司",
        number: 2,
        image: "images/tarot/Priestess.png",
        meaning: {
            upright: "直觉、神秘、内在知识、智慧、洞察力",
            reversed: "隐藏的动机、表面性格、忽视直觉",
            love: "倾听内心的声音，保持神秘感，等待正确时机",
            career: "深入研究、学习新知识、相信直觉判断",
            advice: "保持神秘感，相信自己的直觉，耐心等待"
        }
    },
    {
        name: "女皇",
        number: 3,
        image: "images/tarot/Enpress.png",
        meaning: {
            upright: "丰饶、创造力、母性、优雅、自然",
            reversed: "依赖、过度保护、创造力受阻、空虚",
            love: "富有同情心的关系，滋养的爱，感性的连结",
            career: "创意工作、培育项目、关注细节和美感",
            advice: "关注自然和创造力，培养温柔和耐心"
        }
    },
    {
        name: "皇帝",
        number: 4,
        image: "images/tarot/Emperor.png",
        meaning: {
            upright: "权威、领导力、控制、稳定、父性",
            reversed: "独裁、过度控制、刚愎自用、无能",
            love: "稳定的关系，负责任的伴侣，传统价值观",
            career: "领导地位、组织能力、建立秩序和规则",
            advice: "建立稳固的基础，保持理性和秩序"
        }
    },
    {
        name: "教皇",
        number: 5,
        image: "images/tarot/Hierophant.png",
        meaning: {
            upright: "传统、信仰、教育、建议、精神指引",
            reversed: "叛逆、非传统、不信任、过时的观念",
            love: "传统的恋爱观，寻求长期承诺，精神契合",
            career: "遵循传统方法，寻求指导，注重道德伦理",
            advice: "寻求智者建议，尊重传统但保持开放"
        }
    },
    {
        name: "恋人",
        number: 6,
        image: "images/tarot/Lovers.png",
        meaning: {
            upright: "爱情、和谐、关系、价值观、选择",
            reversed: "不和谐、分离、错误选择、价值观冲突",
            love: "重要的感情选择，深厚的感情连结，真爱",
            career: "合作关系、重要决定、价值观认同",
            advice: "倾听内心，做出真诚的选择，保持和谐"
        }
    },
    {
        name: "战车",
        number: 7,
        image: "images/tarot/Chariot.png",
        meaning: {
            upright: "胜利、意志力、决心、进展、控制",
            reversed: "失控、阻碍、缺乏方向、冲突",
            love: "克服感情障碍，坚定追求，感情进展",
            career: "事业进展、目标达成、克服困难",
            advice: "保持坚定意志，克服障碍，向前进"
        }
    },
    {
        name: "力量",
        number: 8,
        image: "images/tarot/Strength.png",
        meaning: {
            upright: "内在力量、勇气、耐心、同情心",
            reversed: "自我怀疑、软弱、缺乏信心、冲动",
            love: "以温柔和耐心处理感情，克服感情困难",
            career: "以柔克刚、持续努力、保持耐心",
            advice: "用温和的方式展现力量，保持耐心和勇气"
        }
    },
    {
        name: "隐士",
        number: 9,
        image: "images/tarot/Hermit.png",
        meaning: {
            upright: "内省、寻找、指引、独处、智慧",
            reversed: "孤独、隔离、迷失方向、拒绝建议",
            love: "需要独处时间，深入了解自己，等待真爱",
            career: "独立工作、研究深造、寻找人生方向",
            advice: "保持独立思考，寻找内在智慧和指引"
        }
    },
    {
        name: "命运之轮",
        number: 10,
        image: "images/tarot/Wheel.png",
        meaning: {
            upright: "转变、机会、命运、循环、进展",
            reversed: "不幸、阻碍、外部控制、坏运气",
            love: "感情状况的转变，把握机会，接受改变",
            career: "事业转机、机会降临、适应变化",
            advice: "接受改变，把握机会，保持乐观"
        }
    },
    {
        name: "正义",
        number: 11,
        image: "images/tarot/Justice.png",
        meaning: {
            upright: "公正、真理、诚实、因果、平衡",
            reversed: "不公、失衡、偏见、拖延、冤屈",
            love: "公平对待感情，诚实沟通，关系平衡",
            career: "法律相关工作、公平对待、接受评判",
            health: "保持生活平衡，注意作息规律",
            finance: "量入为出，公平交易，遵守合同",
            advice: "保持公正客观，承担责任，寻求平衡"
        }
    },
    {
        name: "倒吊人",
        number: 12,
        image: "images/tarot/Hanged.png",
        meaning: {
            upright: "牺牲、等待、新视角、智慧、超脱",
            reversed: "无谓牺牲、拖延、固执、自私",
            love: "改变看待感情的角度，适当放手",
            career: "职业转换、换个角度思考问题",
            health: "调整生活方式，改变不良习惯",
            finance: "改变理财方式，放弃一些眼前利益",
            advice: "换个角度看问题，适当放下，保持耐心"
        }
    },
    {
        name: "死神",
        number: 13,
        image: "images/tarot/Death.png",
        meaning: {
            upright: "结束、转变、蜕变、新生、改变",
            reversed: "抗拒改变、停滞、恐惧、衰退",
            love: "感情关系的重大转变，放下过去",
            career: "工作转型、结束旧阶段、新的开始",
            health: "重大的健康改变，戒除恶习",
            finance: "财务状况的转变，投资方向改变",
            advice: "接受改变，放下过去，准备新生"
        }
    },
    {
        name: "节制",
        number: 14,
        image: "images/tarot/Temperance.png",
        meaning: {
            upright: "平衡、节制、调和、耐心、适应",
            reversed: "失衡、过度、冲突、急躁",
            love: "感情需要耐心调适，保持平衡",
            career: "工作生活平衡，团队协作",
            health: "保持生活规律，饮食均衡",
            finance: "稳健理财，适度消费",
            advice: "保持耐心和节制，寻求平衡"
        }
    },
    {
        name: "恶魔",
        number: 15,
        image: "images/tarot/Devil.png",
        meaning: {
            upright: "束缚、欲望、执着、物质主义、诱惑",
            reversed: "摆脱束缚、觉醒、克制、解脱",
            love: "不健康的依恋关系，物质化的感情",
            career: "工作压力大，被金钱束缚",
            health: "容易沉迷，注意不良习惯",
            finance: "过度消费，金钱束缚",
            advice: "认清真相，摆脱束缚，克制欲望"
        }
    },
    {
        name: "塔",
        number: 16,
        image: "images/tarot/Tower.png",
        meaning: {
            upright: "突变、崩塌、动荡、启示、解放",
            reversed: "避免灾难、渐进改变、恐惧改变",
            love: "感情关系的突然改变，冲突爆发",
            career: "工作变动、突发事件、结构重组",
            health: "突发健康问题，需要及时处理",
            finance: "财务危机，突然损失",
            advice: "接受改变，从废墟中重建"
        }
    },
    {
        name: "星星",
        number: 17,
        image: "images/tarot/Star.png",
        meaning: {
            upright: "希望、启发、宁静、治愈、灵感",
            reversed: "失望、丧失信心、悲观、迷失方向",
            love: "充满希望的感情，心灵契合",
            career: "创意灵感、理想职业、未来展望",
            health: "康复顺利，保持乐观",
            finance: "财运好转，保持信心",
            advice: "保持希望和信心，相信未来"
        }
    },
    {
        name: "月亮",
        number: 18,
        image: "images/tarot/Moon.png",
        meaning: {
            upright: "直觉、幻想、恐惧、迷惑、潜意识",
            reversed: "克服恐惧、真相大白、困惑消除",
            love: "感情迷惘，需要澄清",
            career: "工作方向不明，需要厘清",
            health: "注意情绪影响，保持心理健康",
            finance: "财务状况不明朗，谨防欺诈",
            advice: "相信直觉，但也要明辨是非"
        }
    },
    {
        name: "太阳",
        number: 19,
        image: "images/tarot/Sun.png",
        meaning: {
            upright: "快乐、活力、成功、正面、光明",
            reversed: "过度乐观、表面光鲜、短暂快乐",
            love: "幸福的感情，充满活力的关系",
            career: "事业成功、好运降临、充满干劲",
            health: "身体健康，充满活力",
            finance: "财运亨通，收入增加",
            advice: "保持乐观积极，享受成功"
        }
    },
    {
        name: "审判",
        number: 20,
        image: "images/tarot/Judgement.png",
        meaning: {
            upright: "觉醒、重生、召唤、评判、复活",
            reversed: "拒绝改变、自我怀疑、错失机会",
            love: "感情重新开始，重要决定",
            career: "事业转折点，重要抉择",
            health: "健康新觉悟，改变生活方式",
            finance: "财务重整，重要决策",
            advice: "接受召唤，把握重生机会"
        }
    },
    {
        name: "世界",
        number: 21,
        image: "images/tarot/World.png",
        meaning: {
            upright: "完成、圆满、成功、完整、统一",
            reversed: "未完成、停滞、目标不明",
            love: "圆满的感情，修成正果",
            career: "事业有成，目标达成",
            health: "身心和谐，保持平衡",
            finance: "财务目标达成，收获成果",
            advice: "享受成功，准备新的循环"
        }
    }
];

// 牌面位置的含义
const positions = [
    { name: "当前处境", description: "反映当前的情况和面临的主要问题" },
    { name: "障碍或助力", description: "显示影响事情发展的关键因素" },
    { name: "建议或结果", description: "给出可能的发展方向和建议" }
];

// 添加到 tarot.js 文件中
const combinationMeanings = {
    // 积极正面组合
    "星星-太阳": "希望变为现实，美好的未来即将到来，充满光明与希望",
    "魔术师-世界": "才能得到发挥，成就非凡事业，目标达成",
    "正义-力量": "以正义之名展现力量，公平地解决问题，正当防卫",
    "女皇-皇帝": "阴阳调和，完美的合作关系，权力的平衡",
    "恋人-世界": "圆满的爱情，修成正果，感情得到升华",
    "太阳-命运之轮": "好运即将来临，转机带来光明，积极的改变",
    "女祭司-女皇": "智慧与丰饶的结合，直觉与创造力的完美融合",
    "皇帝-战车": "强大的领导力，目标明确，势如破竹",
    
    // 警示组合
    "月亮-恶魔": "当心欺骗和诱惑，需要提高警惕，小心陷阱",
    "塔-死神": "重大的转变和破坏，但也带来新生机，剧变在即",
    "倒吊人-审判": "需要改变视角才能获得重生，接受考验",
    "恶魔-塔": "负面影响即将崩塌，但过程可能痛苦",
    "死神-月亮": "隐藏的真相将带来改变，迷惘中的转折",
    "塔-审判": "突然的觉醒或领悟，剧烈的改变带来重生",
    
    // 中性组合
    "隐士-命运之轮": "独处中等待机会，命运即将转变，耐心等待",
    "女祭司-月亮": "直觉和潜意识的启示，需要静心聆听",
    "节制-正义": "平衡与公正的结合，需要耐心调和",
    "魔术师-隐士": "在独处中磨练技艺，内省中获得力量",
    "高塔-星星": "经历磨难后看到希望，破而后立",
    
    // 感情相关组合
    "恋人-女皇": "感情充满滋养与关怀，富有同理心的关系",
    "太阳-星星": "充满希望的感情，光明而美好的关系",
    "皇帝-女皇": "稳固的感情基础，相互扶持的关系",
    "正义-恋人": "公平诚实的感情，理性与感性的平衡",
    
    // 事业相关组合
    "魔术师-皇帝": "才能得到赏识，事业上升期",
    "战车-世界": "克服困难后获得成功，目标达成",
    "正义-命运之轮": "公平的机会即将到来，转机在即",
    "星星-魔术师": "创意得到发挥，灵感充沛",
    
    // 财运相关组合
    "命运之轮-太阳": "财运转好，好运即将降临",
    "魔术师-节制": "稳健的理财方式，技巧与节制的平衡",
    "皇帝-世界": "事业有成，财务目标达成",
    
    // 健康相关组合
    "节制-太阳": "保持健康的生活方式，充满活力",
    "力量-星星": "保持乐观的心态，战胜疾病",
    "女皇-节制": "注意养生保健，调节作息",
    
    // 三张牌特殊组合
    "愚者-魔术师-世界": "从无知到成熟，完整的成长历程",
    "月亮-塔-太阳": "经历迷惘和动荡后迎来光明",
    "女祭司-恋人-正义": "以智慧做出正确的感情选择",
    "命运之轮-死神-星星": "巨大的改变后带来新的希望",
    
    // 逆位特殊提示
    "月亮-恶魔-塔": "需要特别注意防范欺诈和突发事件",
    "死神-审判-世界": "重大转折后将迎来新的篇章",
    "隐士-命运之轮-太阳": "独处的时期即将结束，好运将至",
    
    // 事业相关组合
    "魔术师-皇帝": "事业上遇到贵人，能力得到赏识",
    "星星-太阳": "事业光明，前途无量",
    "正义-力量": "通过正当手段获得成功",
    "命运之轮-战车": "事业转机，勇往直前",
    "世界-女皇": "事业有成，收获丰厚",
    "隐士-女祭司": "独立研究或学术发展",
    "魔术师-高塔": "创新突破，打破常规",
    
    // 感情相关组合
    "恋人-月亮": "感情需要更多坦诚和沟通",
    "太阳-星星": "感情充满希望和温暖",
    "女皇-皇帝": "感情稳定，相得益彰",
    "命运之轮-恋人": "情感即将迎来转机",
    "女祭司-月亮": "感情中需要聆听内心",
    "正义-恋人": "感情需要公平对待",
    "魔术师-恋人": "感情中展现真实的自己",
    
    // 财运相关组合
    "星星-皇帝": "投资有望，贵人相助",
    "魔术师-命运之轮": "把握机会，财运亨通",
    "太阳-世界": "财运昌盛，目标达成",
    "女皇-世界": "财富丰收，收入稳定",
    "正义-节制": "理财需要平衡和节制",
    "力量-高塔": "理财需要克制冲动",
    
    // 健康相关组合
    "节制-太阳": "保持规律作息，身体健康",
    "女皇-节制": "注意饮食健康，调养身体",
    "力量-星星": "保持乐观心态，有助康复",
    "隐士-月亮": "需要休息调养，避免过劳",
    "正义-节制": "均衡饮食，规律运动",
    
    // 学业相关组合
    "女祭司-魔术师": "学习能力提升，知识增长",
    "隐士-星星": "独立学习，保持希望",
    "正义-女祭司": "学习需要专注和坚持",
    "魔术师-世界": "学习有成，目标达成",
    "高塔-星星": "突破学习瓶颈，柳暗花明",
    
    // 人际关系组合
    "太阳-正义": "人际关系公平和谐",
    "女皇-月亮": "社交中保持优雅神秘",
    "魔术师-星星": "人际关系充满新机遇",
    "力量-恋人": "在关系中保持自我",
    "节制-世界": "社交圈的良性发展",
    
    // 重大抉择组合
    "女祭司-命运之轮": "听从内心，把握机会",
    "正义-高塔": "重大改变需要慎重决定",
    "隐士-世界": "独立思考后做出选择",
    "魔术师-月亮": "创新思维，突破迷惘",
    
    // 警示组合
    "月亮-恶魔": "提防欺骗和诱惑",
    "高塔-死神": "警惕突发变故",
    "恶魔-审判": "面临重要抉择，需谨慎",
    "死神-月亮": "改变中保持清醒",
    
    // 三张牌特殊组合
    "愚者-魔术师-世界": "从无知到成熟的蜕变之旅",
    "月亮-塔-太阳": "经历困境后迎来光明",
    "女祭司-恋人-正义": "以智慧处理感情问题",
    "命运之轮-死神-星星": "巨大转变后的新希望",
    "隐士-月亮-太阳": "独处后豁然开朗",
    "魔术师-力量-世界": "通过自身能力达成目标",
    "正义-审判-世界": "公正判断后获得圆满",
    "女皇-命运之轮-太阳": "机遇与丰收并存",
    
    // 生活建议组合
    "节制-隐士": "生活需要适度独处和自我调节",
    "太阳-正义": "保持生活作息规律，追求平衡",
    "女皇-星星": "享受生活，保持希望和优雅",
    "魔术师-节制": "合理规划时间，提高生活效率",
    "力量-女皇": "以优雅的方式掌控生活",
    "世界-节制": "在忙碌中找到生活平衡",
    "命运之轮-星星": "保持生活热情，拥抱改变",
    "隐士-月亮": "适时放慢脚步，倾听内心",
    "女祭司-太阳": "将智慧运用于日常生活",
    
    // 个人成长组合
    "愚者-魔术师": "开始新的学习和成长之旅",
    "力量-高塔": "突破自我限制，获得成长",
    "死神-星星": "蜕变后迎来新的希望",
    "隐士-世界": "通过独处获得深刻领悟",
    "女祭司-命运之轮": "顺应变化，保持成长",
    "魔术师-审判": "重新认识自我，技能提升",
    "正义-世界": "通过平衡获得全面发展",
    "战车-力量": "克服困难，增强意志",
    "皇帝-高塔": "打破固有思维，获得突破",
    
    // 家庭关系组合
    "女皇-恋人": "家庭关系温馨和睦",
    "皇帝-节制": "家庭需要合理管理和平衡",
    "太阳-女皇": "家庭充满温暖和活力",
    "正义-女皇": "家庭成员间互相理解尊重",
    "星星-恋人": "家庭关系充满希望",
    "世界-女皇": "家庭生活圆满和谐",
    "力量-节制": "以耐心和爱化解家庭矛盾",
    "女祭司-女皇": "以智慧经营家庭关系",
    "命运之轮-正义": "家庭关系的转机与平衡",
    
    // 旅行相关组合
    "愚者-战车": "勇敢出发，开启新的旅程",
    "世界-星星": "旅行带来新的视野和希望",
    "魔术师-世界": "旅途中获得新的体验和技能",
    "月亮-星星": "探索未知，保持梦想",
    "战车-世界": "旅行顺利，收获丰富",
    "隐士-月亮": "独自旅行，探索内心",
    "太阳-世界": "旅途阳光明媚，充满欢乐",
    "命运之轮-愚者": "意外的旅行机会",
    "高塔-星星": "旅途中的意外惊喜",
    
    // 三张牌的新组合
    "愚者-战车-世界": "踏上旅程，收获人生",
    "女皇-正义-节制": "家庭关系的平衡与和谐",
    "魔术师-力量-高塔": "个人成长的重要突破",
    "隐士-女祭司-太阳": "独处中获得智慧与光明",
    "命运之轮-节制-星星": "在变化中保持生活平衡",
    "女皇-恋人-世界": "家庭关系圆满幸福",
    "战车-月亮-太阳": "旅途中的迷惘与领悟",
    "力量-正义-节制": "生活中的自律与平衡"
};

// 添加牌阵类型
const spreadTypes = {
    "三张牌": {
        name: "过去-现在-未来",
        positions: [
            { name: "过去", description: "影响现状的过去因素" },
            { name: "现在", description: "当前面临的处境" },
            { name: "未来", description: "可能的发展方向" }
        ]
    },
    "决策分析": {
        name: "情况分析",
        positions: [
            { name: "现状", description: "当前的情况" },
            { name: "阻碍", description: "面临的困难" },
            { name: "建议", description: "解决方案" }
        ]
    }
};

// 添加到 tarot.js 文件中
const cardSounds = {
    flip: new Audio('sounds/card-flip.mp3'),
    draw: new Audio('sounds/card-draw.mp3'),
    reveal: new Audio('sounds/reveal.mp3')
};

// 抽牌和解读
function drawCards() {
    const question = document.getElementById('question').value;
    if (!question) {
        alert('请先输入你想问的问题！');
        return;
    }

    const cardsContainer = document.getElementById('cards-container');
    const readingResult = document.getElementById('reading-result');
    cardsContainer.innerHTML = '';
    readingResult.innerHTML = ''; // 清空之前的解读结果
    
    // 显示问题
    displayReading(question, []);

    // 随机抽取3张牌
    const drawnCards = [];
    const usedIndexes = new Set();

    for (let i = 0; i < 3; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * tarotCards.length);
        } while (usedIndexes.has(randomIndex));
        
        usedIndexes.add(randomIndex);
        const card = tarotCards[randomIndex];
        const isReversed = Math.random() < 0.5;
        drawnCards.push({ ...card, isReversed });

        // 创建并显示牌面
        const cardElement = createCardElement(card, isReversed, i);
        cardsContainer.appendChild(cardElement);
    }

    // 保存抽到的牌到全局变量
    window.currentDrawnCards = drawnCards;
}

// 添加一个变量来跟踪已翻开的卡牌数量
let flippedCards = 0;

// 修改创建牌面元素的函数
function createCardElement(card, isReversed, position) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.position = position;

    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';

    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.backgroundImage = `url(${card.image})`;
    if (isReversed) {
        cardBack.style.transform = `rotateY(180deg) rotate(180deg)`;
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardDiv.appendChild(cardInner);

    // 修改点击事件
    cardDiv.addEventListener('click', () => {
        if (!cardDiv.classList.contains('flipped')) {
            cardDiv.classList.add('flipped');
            flippedCards++;
            
            if (window.currentDrawnCards) {
                const card = window.currentDrawnCards[position];
                const positionName = positions[position].name;
                const meaningType = card.isReversed ? 'reversed' : 'upright';
                showCardMeaning(card, meaningType, positionName);
                
                // 当所有卡牌都翻开后，显示完整解读
                if (flippedCards === 3) {
                    showCompleteReading(window.currentDrawnCards);
                }
            }
        }
    });

    return cardDiv;
}

// 修改显示牌面含义的函数
function showCardMeaning(card, meaningType, position) {
    // 清除之前的相同位置的解读
    const existingMeanings = document.querySelectorAll('.card-meaning');
    existingMeanings.forEach(meaning => {
        if (meaning.dataset.position === position) {
            meaning.remove();
        }
    });

    const meaningDiv = document.createElement('div');
    meaningDiv.className = 'card-meaning';
    meaningDiv.dataset.position = position; // 添加位置标记
    meaningDiv.innerHTML = `
        <h4>${position}：${card.name}${meaningType === 'reversed' ? '(逆位)' : '(正位)'}</h4>
        <div class="meaning-sections">
            <div class="meaning-section">
                <h5>基本含义</h5>
                <p>${card.meaning[meaningType]}</p>
            </div>
            <div class="meaning-section">
                <h5>感情启示</h5>
                <p>${card.meaning.love}</p>
            </div>
            <div class="meaning-section">
                <h5>事业启示</h5>
                <p>${card.meaning.career}</p>
            </div>
            <div class="meaning-section">
                <h5>健康启示</h5>
                <p>${card.meaning.health || '保持身心平衡，注意健康'}</p>
            </div>
            <div class="meaning-section">
                <h5>财运启示</h5>
                <p>${card.meaning.finance || '理财需谨慎，适度消费'}</p>
            </div>
            <div class="meaning-section">
                <h5>建议</h5>
                <p>${card.meaning.advice}</p>
            </div>
        </div>
    `;

    // 添加到对应位置
    const readingResult = document.getElementById('reading-result');
    readingResult.appendChild(meaningDiv);

    // 滚动到解读结果
    meaningDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 修改显示完整解读的函数
function displayReading(question, drawnCards) {
    const readingResult = document.getElementById('reading-result');
    let reading = `
        <h3>塔罗牌解读</h3>
        <div class="question-section">
            <p>你的问题：${question}</p>
        </div>
        <div class="instructions">点击卡牌查看详细解读</div>
    `;

    if (drawnCards.length > 0) {
        const combinations = findCombinations(drawnCards);
        if (combinations.length > 0) {
            reading += `
                <div class="combinations-section">
                    <h4>特殊牌组提示</h4>
                    ${combinations.map(combo => `<p class="combination-meaning">${combo}</p>`).join('')}
                </div>
            `;
        }
    }

    readingResult.innerHTML = reading;
}

// 查找特殊组合
function findCombinations(drawnCards) {
    const combinations = [];
    
    // 检查两张牌的组合
    for (let i = 0; i < drawnCards.length - 1; i++) {
        for (let j = i + 1; j < drawnCards.length; j++) {
            const combo = `${drawnCards[i].name}-${drawnCards[j].name}`;
            const reverseCombo = `${drawnCards[j].name}-${drawnCards[i].name}`;
            if (combinationMeanings[combo]) {
                combinations.push(combinationMeanings[combo]);
            } else if (combinationMeanings[reverseCombo]) {
                combinations.push(combinationMeanings[reverseCombo]);
            }
        }
    }
    
    // 检查三张牌的组合
    if (drawnCards.length >= 3) {
        const threeCardCombo = `${drawnCards[0].name}-${drawnCards[1].name}-${drawnCards[2].name}`;
        if (combinationMeanings[threeCardCombo]) {
            combinations.push(combinationMeanings[threeCardCombo]);
        }
    }
    
    return combinations;
}

// 修改显示组合的样式
function displayCombinations(combinations) {
    if (combinations.length === 0) return '';
    
    return `
        <div class="combinations-section">
            <h4>特殊牌组提示</h4>
            <div class="combinations-grid">
                ${combinations.map(combo => `
                    <div class="combination-item">
                        <p class="combination-meaning">${combo}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 添加完整解读函数
function showCompleteReading(cards) {
    const readingResult = document.getElementById('reading-result');
    const combinations = findCombinations(cards);
    
    let completeReading = `
        <div class="complete-reading">
            <h3>完整解读</h3>
            <div class="reading-section">
                <h4>总体趋势</h4>
                <p>${generateOverallTrend(cards)}</p>
            </div>
            
            <div class="reading-section">
                <h4>时间线解读</h4>
                <p>${generateTimelineReading(cards)}</p>
            </div>
            
            <div class="reading-section">
                <h4>关键建议</h4>
                <p>${generateKeyAdvice(cards)}</p>
            </div>
            
            ${combinations.length > 0 ? `
                <div class="reading-section">
                    <h4>牌组组合提示</h4>
                    <p>${combinations.join('</p><p>')}</p>
                </div>
            ` : ''}
            
            <div class="reading-section">
                <h4>行动建议</h4>
                <p>${generateActionAdvice(cards)}</p>
            </div>
        </div>
    `;
    
    readingResult.insertAdjacentHTML('beforeend', completeReading);
    
    // 滚动到完整解读
    document.querySelector('.complete-reading').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

// 生成总体趋势
function generateOverallTrend(cards) {
    const trend = cards.map(card => card.meaning[card.isReversed ? 'reversed' : 'upright']).join('；');
    return `根据抽到的牌面显示：${trend}。这表明当前的整体形势正在${getOverallDirection(cards)}。`;
}

// 生成时间线解读
function generateTimelineReading(cards) {
    return `过去：${cards[0].name}显示${cards[0].meaning[cards[0].isReversed ? 'reversed' : 'upright']}；
            现在：${cards[1].name}表明${cards[1].meaning[cards[1].isReversed ? 'reversed' : 'upright']}；
            未来：${cards[2].name}预示${cards[2].meaning[cards[2].isReversed ? 'reversed' : 'upright']}。`;
}

// 生成关键建议
function generateKeyAdvice(cards) {
    return cards.map(card => card.meaning.advice).join(' ');
}

// 生成行动建议
function generateActionAdvice(cards) {
    let advice = "基于当前牌面，建议您：\n";
    advice += "1. " + getFirstAction(cards) + "\n";
    advice += "2. " + getSecondAction(cards) + "\n";
    advice += "3. " + getThirdAction(cards);
    return advice;
}

// 辅助函数
function getOverallDirection(cards) {
    const positiveCount = cards.filter(card => !card.isReversed).length;
    if (positiveCount >= 2) {
        return "向着积极的方向发展";
    } else if (positiveCount === 1) {
        return "处于转折期";
    } else {
        return "面临一些挑战";
    }
}

function getFirstAction(cards) {
    const firstCard = cards[0];
    return firstCard.isReversed ? 
        "正视过去的经验教训，从中吸取智慧" : 
        "借鉴过去的成功经验，继续前进";
}

function getSecondAction(cards) {
    const secondCard = cards[1];
    return secondCard.isReversed ?
        "调整当前的策略和方法，寻找新的突破点" :
        "保持当前的良好状态，稳步推进";
}

function getThirdAction(cards) {
    const thirdCard = cards[2];
    return thirdCard.isReversed ?
        "对未来保持谨慎乐观，做好充分准备" :
        "对未来充满信心，大胆规划和行动";
} 