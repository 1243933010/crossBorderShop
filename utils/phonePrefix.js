const prefixSorted = [
	{
		prefix: '1',
		en: 'USA',
		cn: '美国',
		id: 1
	},
	{
		prefix: '1',
		en: 'PuertoRico',
		cn: '波多黎各',
		id: 2
	},
	{
		prefix: '1',
		en: 'Canada',
		cn: '加拿大',
		id: 3
	},
	{
		prefix: '7',
		en: 'Russia',
		cn: '俄罗斯',
		id: 4
	},
	{
		prefix: '7',
		en: 'Kazeakhstan',
		cn: '哈萨克斯坦',
		id: 5
	},
	{
		prefix: '20',
		en: 'Egypt',
		cn: '埃及',
		id: 6
	},
	{
		prefix: '27',
		en: 'South Africa',
		cn: '南非',
		id: 7
	},
	{
		prefix: '30',
		en: 'Greece',
		cn: '希腊',
		id: 8
	},
	{
		prefix: '31',
		en: 'Netherlands',
		cn: '荷兰',
		id: 9
	},
	{
		prefix: '32',
		en: 'Belgium',
		cn: '比利时',
		id: 10
	},
	{
		prefix: '33',
		en: 'France',
		cn: '法国',
		id: 11
	},
	{
		prefix: '34',
		en: 'Spain',
		cn: '西班牙',
		id: 12
	},
	{
		prefix: '36',
		en: 'Hungary',
		cn: '匈牙利',
		id: 13
	},
	{
		prefix: '40',
		en: 'Romania',
		cn: '罗马尼亚',
		id: 14
	},
	{
		prefix: '41',
		en: 'Switzerland',
		cn: '瑞士',
		id: 15
	},
	{
		prefix: '43',
		en: 'Austria',
		cn: '奥地利',
		id: 16
	},
	{
		prefix: '44',
		en: 'United Kingdom',
		cn: '英国',
		id: 17
	},
	{
		prefix: '44',
		en: 'Jersey',
		cn: '泽西岛',
		id: 18
	},
	{
		prefix: '44',
		en: 'Isle of Man',
		cn: '马恩岛',
		id: 19
	},
	{
		prefix: '44',
		en: 'Guernsey',
		cn: '根西',
		id: 20
	},
	{
		prefix: '45',
		en: 'Denmark',
		cn: '丹麦',
		id: 21
	},
	{
		prefix: '46',
		en: 'Sweden',
		cn: '瑞典',
		id: 22
	},
	{
		prefix: '47',
		en: 'Norway',
		cn: '挪威',
		id: 23
	},
	{
		prefix: '48',
		en: 'Poland',
		cn: '波兰',
		id: 24
	},
	{
		prefix: '51',
		en: 'Peru',
		cn: '秘鲁',
		id: 25
	},
	{
		prefix: '52',
		en: 'Mexico',
		cn: '墨西哥',
		id: 26
	},
	{
		prefix: '53',
		en: 'Cuba',
		cn: '古巴',
		id: 27
	},
	{
		prefix: '54',
		en: 'Argentina',
		cn: '阿根廷',
		id: 28
	},
	{
		prefix: '55',
		en: 'Brazill',
		cn: '巴西',
		id: 29
	},
	{
		prefix: '56',
		en: 'Chile',
		cn: '智利',
		id: 30
	},
	{
		prefix: '57',
		en: 'Colombia',
		cn: '哥伦比亚',
		id: 31
	},
	{
		prefix: '58',
		en: 'Venezuela',
		cn: '委内瑞拉',
		id: 32
	},
	{
		prefix: '60',
		en: 'Malaysia',
		cn: '马来西亚',
		id: 33
	},
	{
		prefix: '61',
		en: 'Australia',
		cn: '澳大利亚',
		id: 34
	},
	{
		prefix: '62',
		en: 'Indonesia',
		cn: '印度尼西亚',
		id: 35
	},
	{
		prefix: '63',
		en: 'Philippines',
		cn: '菲律宾',
		id: 36
	},
	{
		prefix: '64',
		en: 'NewZealand',
		cn: '新西兰',
		id: 37
	},
	{
		prefix: '65',
		en: 'Singapore',
		cn: '新加坡',
		id: 38
	},
	{
		prefix: '66',
		en: 'Thailand',
		cn: '泰国',
		id: 39
	},
	{
		prefix: '81',
		en: 'Japan',
		cn: '日本',
		id: 40
	},
	{
		prefix: '82',
		en: 'Korea',
		cn: '韩国',
		id: 41
	},
	{
		prefix: '84',
		en: 'Vietnam',
		cn: '越南',
		id: 42
	},
	{
		prefix: '86',
		en: 'China',
		cn: '中国',
		id: 43
	},
	{
		prefix: '90',
		en: 'Turkey',
		cn: '土耳其',
		id: 44
	},
	{
		prefix: '91',
		en: 'Indea',
		cn: '印度',
		id: 45
	},
	{
		prefix: '92',
		en: 'Pakistan',
		cn: '巴基斯坦',
		id: 46
	},
	{
		prefix: '93',
		en: 'Italy',
		cn: '意大利',
		id: 47
	},
	{
		prefix: '93',
		en: 'Afghanistan',
		cn: '阿富汗',
		id: 48
	},
	{
		prefix: '94',
		en: 'SriLanka',
		cn: '斯里兰卡',
		id: 49
	},
	{
		prefix: '94',
		en: 'Germany',
		cn: '德国',
		id: 50
	},
	{
		prefix: '95',
		en: 'Myanmar',
		cn: '缅甸',
		id: 51
	},
	{
		prefix: '98',
		en: 'Iran',
		cn: '伊朗',
		id: 52
	},
	{
		prefix: '212',
		en: 'Morocco',
		cn: '摩洛哥',
		id: 53
	},
	{
		prefix: '213',
		en: 'Algera',
		cn: '阿尔格拉',
		id: 54
	},
	{
		prefix: '216',
		en: 'Tunisia',
		cn: '突尼斯',
		id: 55
	},
	{
		prefix: '218',
		en: 'Libya',
		cn: '利比亚',
		id: 56
	},
	{
		prefix: '220',
		en: 'Gambia',
		cn: '冈比亚',
		id: 57
	},
	{
		prefix: '221',
		en: 'Senegal',
		cn: '塞内加尔',
		id: 58
	},
	{
		prefix: '222',
		en: 'Mauritania',
		cn: '毛里塔尼亚',
		id: 59
	},
	{
		prefix: '223',
		en: 'Mali',
		cn: '马里',
		id: 60
	},
	{
		prefix: '224',
		en: 'Guinea',
		cn: '几内亚',
		id: 61
	},
	{
		prefix: '225',
		en: 'Cote divoire',
		cn: '科特迪沃',
		id: 62
	},
	{
		prefix: '226',
		en: 'Burkina Faso',
		cn: '布基纳法索',
		id: 63
	},
	{
		prefix: '227',
		en: 'Niger',
		cn: '尼日尔',
		id: 64
	},
	{
		prefix: '228',
		en: 'Togo',
		cn: '多哥',
		id: 65
	},
	{
		prefix: '229',
		en: 'Benin',
		cn: '贝宁',
		id: 66
	},
	{
		prefix: '230',
		en: 'Mauritius',
		cn: '毛里求斯',
		id: 67
	},
	{
		prefix: '231',
		en: 'Liberia',
		cn: '利比里亚',
		id: 68
	},
	{
		prefix: '232',
		en: 'Sierra Leone',
		cn: '塞拉利昂',
		id: 69
	},
	{
		prefix: '233',
		en: 'Ghana',
		cn: '加纳',
		id: 70
	},
	{
		prefix: '234',
		en: 'Nigeria',
		cn: '尼日利亚',
		id: 71
	},
	{
		prefix: '235',
		en: 'Chad',
		cn: '乍得',
		id: 72
	},
	{
		prefix: '236',
		en: 'Central African Republic',
		cn: '中非共和国',
		id: 73
	},
	{
		prefix: '237',
		en: 'Cameroon',
		cn: '喀麦隆',
		id: 74
	},
	{
		prefix: '238',
		en: 'Cape Verde',
		cn: '佛得角',
		id: 75
	},
	{
		prefix: '239',
		en: 'Sao Tome and Principe',
		cn: '圣多美和普林西比',
		id: 76
	},
	{
		prefix: '240',
		en: 'Guinea',
		cn: '几内亚',
		id: 77
	},
	{
		prefix: '241',
		en: 'Gabon',
		cn: '加蓬',
		id: 78
	},
	{
		prefix: '242',
		en: 'Republic of the Congo',
		cn: '刚果共和国',
		id: 79
	},
	{
		prefix: '243',
		en: 'Democratic Republic of the Congo',
		cn: '刚果民主共和国',
		id: 80
	},
	{
		prefix: '244',
		en: 'Angola',
		cn: '安哥拉',
		id: 81
	},
	{
		prefix: '247',
		en: 'Ascension',
		cn: '阿森松岛',
		id: 82
	},
	{
		prefix: '248',
		en: 'Seychelles',
		cn: '塞舌尔',
		id: 83
	},
	{
		prefix: '249',
		en: 'Sudan',
		cn: '苏丹',
		id: 84
	},
	{
		prefix: '250',
		en: 'Rwanda',
		cn: '卢旺达',
		id: 85
	},
	{
		prefix: '251',
		en: 'Ethiopia',
		cn: '埃塞俄比亚',
		id: 86
	},
	{
		prefix: '253',
		en: 'Djibouti',
		cn: '吉布提',
		id: 87
	},
	{
		prefix: '254',
		en: 'Kenya',
		cn: '肯尼亚',
		id: 88
	},
	{
		prefix: '255',
		en: 'Tanzania',
		cn: '坦桑尼亚',
		id: 89
	},
	{
		prefix: '256',
		en: 'Uganda',
		cn: '乌干达',
		id: 90
	},
	{
		prefix: '257',
		en: 'Burundi',
		cn: '布隆迪',
		id: 91
	},
	{
		prefix: '258',
		en: 'Mozambique',
		cn: '莫桑比克',
		id: 92
	},
	{
		prefix: '260',
		en: 'Zambia',
		cn: '赞比亚',
		id: 93
	},
	{
		prefix: '261',
		en: 'Madagascar',
		cn: '马达加斯加',
		id: 94
	},
	{
		prefix: '262',
		en: 'Reunion',
		cn: '留尼汪',
		id: 95
	},
	{
		prefix: '262',
		en: 'Mayotte',
		cn: '马约特',
		id: 96
	},
	{
		prefix: '263',
		en: 'Zimbabwe',
		cn: '津巴布韦',
		id: 97
	},
	{
		prefix: '264',
		en: 'Namibia',
		cn: '纳米比亚',
		id: 98
	},
	{
		prefix: '265',
		en: 'Malawi',
		cn: '马拉维',
		id: 99
	},
	{
		prefix: '266',
		en: 'Lesotho',
		cn: '莱索托',
		id: 100
	},
	{
		prefix: '267',
		en: 'Botwana',
		cn: '博茨瓦纳',
		id: 101
	},
	{
		prefix: '268',
		en: 'Swaziland',
		cn: '斯威士兰',
		id: 102
	},
	{
		prefix: '269',
		en: 'Comoros',
		cn: '科摩罗',
		id: 103
	},
	{
		prefix: '297',
		en: 'Aruba',
		cn: '阿鲁巴',
		id: 104
	},
	{
		prefix: '298',
		en: 'Faroe Islands',
		cn: '法罗群岛',
		id: 105
	},
	{
		prefix: '299',
		en: 'Greenland',
		cn: '格陵兰',
		id: 106
	},
	{
		prefix: '350',
		en: 'Gibraltar',
		cn: '直布罗陀',
		id: 107
	},
	{
		prefix: '351',
		en: 'Portugal',
		cn: '葡萄牙',
		id: 108
	},
	{
		prefix: '352',
		en: 'Luxembourg',
		cn: '卢森堡',
		id: 109
	},
	{
		prefix: '353',
		en: 'Ireland',
		cn: '爱尔兰',
		id: 110
	},
	{
		prefix: '354',
		en: 'Iceland',
		cn: '冰岛',
		id: 111
	},
	{
		prefix: '355',
		en: 'Albania',
		cn: '阿尔巴尼亚',
		id: 112
	},
	{
		prefix: '356',
		en: 'Malta',
		cn: '马耳他',
		id: 113
	},
	{
		prefix: '357',
		en: 'Cyprus',
		cn: '塞浦路斯',
		id: 114
	},
	{
		prefix: '358',
		en: 'Finland',
		cn: '芬兰',
		id: 115
	},
	{
		prefix: '359',
		en: 'Bulgaria',
		cn: '保加利亚',
		id: 116
	},
	{
		prefix: '370',
		en: 'Lithuania',
		cn: '立陶宛',
		id: 117
	},
	{
		prefix: '371',
		en: 'Latvia',
		cn: '拉脱维亚',
		id: 118
	},
	{
		prefix: '372',
		en: 'Estonia',
		cn: '爱沙尼亚',
		id: 119
	},
	{
		prefix: '373',
		en: 'Moldova',
		cn: '摩尔多瓦',
		id: 120
	},
	{
		prefix: '374',
		en: 'Armenia',
		cn: '亚美尼亚',
		id: 121
	},
	{
		prefix: '375',
		en: 'Belarus',
		cn: '白俄罗斯',
		id: 122
	},
	{
		prefix: '376',
		en: 'Andorra',
		cn: '安道尔',
		id: 123
	},
	{
		prefix: '377',
		en: 'Monaco',
		cn: '摩纳哥',
		id: 124
	},
	{
		prefix: '378',
		en: 'San Marino',
		cn: '圣马力诺',
		id: 125
	},
	{
		prefix: '380',
		en: 'Ukraine',
		cn: '乌克兰',
		id: 126
	},
	{
		prefix: '381',
		en: 'Serbia',
		cn: '塞尔维亚',
		id: 127
	},
	{
		prefix: '382',
		en: 'Montenegro',
		cn: '黑山',
		id: 128
	},
	{
		prefix: '383',
		en: 'Kosovo',
		cn: '科索沃',
		id: 129
	},
	{
		prefix: '385',
		en: 'Croatia',
		cn: '克罗地亚',
		id: 130
	},
	{
		prefix: '386',
		en: 'Slovenia',
		cn: '斯洛文尼亚',
		id: 131
	},
	{
		prefix: '387',
		en: 'Bosnia and Herzegovina',
		cn: '波斯尼亚和黑塞哥维那',
		id: 132
	},
	{
		prefix: '389',
		en: 'Macedonia',
		cn: '马其顿',
		id: 133
	},
	{
		prefix: '420',
		en: 'Czech Republic',
		cn: '捷克共和国',
		id: 134
	},
	{
		prefix: '421',
		en: 'Slovakia',
		cn: '斯洛伐克',
		id: 135
	},
	{
		prefix: '423',
		en: 'Liechtenstein',
		cn: '列支敦士登',
		id: 136
	},
	{
		prefix: '501',
		en: 'Belize',
		cn: '伯利兹',
		id: 137
	},
	{
		prefix: '502',
		en: 'Guatemala',
		cn: '危地马拉',
		id: 138
	},
	{
		prefix: '503',
		en: 'EISalvador',
		cn: '艾萨尔瓦多',
		id: 139
	},
	{
		prefix: '504',
		en: 'Honduras',
		cn: '洪都拉斯',
		id: 140
	},
	{
		prefix: '505',
		en: 'Nicaragua',
		cn: '尼加拉瓜',
		id: 141
	},
	{
		prefix: '506',
		en: 'Costa Rica',
		cn: '哥斯达黎加',
		id: 142
	},
	{
		prefix: '507',
		en: 'Panama',
		cn: '巴拿马',
		id: 143
	},
	{
		prefix: '509',
		en: 'Haiti',
		cn: '海地',
		id: 144
	},
	{
		prefix: '590',
		en: 'Guadeloupe',
		cn: '瓜德罗普',
		id: 145
	},
	{
		prefix: '591',
		en: 'Bolivia',
		cn: '玻利维亚',
		id: 146
	},
	{
		prefix: '592',
		en: 'Guyana',
		cn: '圭亚那',
		id: 147
	},
	{
		prefix: '593',
		en: 'Ecuador',
		cn: '厄瓜多尔',
		id: 148
	},
	{
		prefix: '594',
		en: 'French Guiana',
		cn: '法属圭亚那',
		id: 149
	},
	{
		prefix: '595',
		en: 'Paraguay',
		cn: '巴拉圭',
		id: 150
	},
	{
		prefix: '596',
		en: 'Martinique',
		cn: '马提尼克',
		id: 151
	},
	{
		prefix: '597',
		en: 'Suriname',
		cn: '苏里南',
		id: 152
	},
	{
		prefix: '598',
		en: 'Uruguay',
		cn: '乌拉圭',
		id: 153
	},
	{
		prefix: '599',
		en: 'Netherlands Antillse',
		cn: '荷属安的列斯',
		id: 154
	},
	{
		prefix: '670',
		en: 'Timor Leste',
		cn: '东帝汶',
		id: 155
	},
	{
		prefix: '673',
		en: 'Brunei',
		cn: '文莱',
		id: 156
	},
	{
		prefix: '675',
		en: 'Papua New Guinea',
		cn: '巴布亚新几内亚',
		id: 157
	},
	{
		prefix: '676',
		en: 'Tonga',
		cn: '汤加',
		id: 158
	},
	{
		prefix: '678',
		en: 'Vanuatu',
		cn: '瓦努阿图',
		id: 159
	},
	{
		prefix: '679',
		en: 'Fiji',
		cn: '斐济',
		id: 160
	},
	{
		prefix: '682',
		en: 'Cook Islands',
		cn: '库克群岛',
		id: 161
	},
	{
		prefix: '684',
		en: 'Samoa Eastern',
		cn: '萨摩亚东部',
		id: 162
	},
	{
		prefix: '685',
		en: 'Samoa Western',
		cn: '萨摩亚西部',
		id: 163
	},
	{
		prefix: '687',
		en: 'New Caledonia',
		cn: '新喀里多尼亚',
		id: 164
	},
	{
		prefix: '689',
		en: 'French Polynesia',
		cn: '法属波利尼西亚',
		id: 165
	},
	{
		prefix: '852',
		en: 'Hong Kong',
		cn: '香港',
		id: 166
	},
	{
		prefix: '853',
		en: 'Macao',
		cn: '澳门',
		id: 167
	},
	{
		prefix: '855',
		en: 'Cambodia',
		cn: '柬埔寨',
		id: 168
	},
	{
		prefix: '856',
		en: 'Laos',
		cn: '老挝',
		id: 169
	},
	{
		prefix: '880',
		en: 'Bangladesh',
		cn: '孟加拉国',
		id: 170
	},
	{
		prefix: '886',
		en: 'Taiwan',
		cn: '台湾',
		id: 171
	},
	{
		prefix: '960',
		en: 'Maldives',
		cn: '马尔代夫',
		id: 172
	},
	{
		prefix: '961',
		en: 'Lebanon',
		cn: '黎巴嫩',
		id: 173
	},
	{
		prefix: '962',
		en: 'Jordan',
		cn: '约旦',
		id: 174
	},
	{
		prefix: '963',
		en: 'Syria',
		cn: '叙利亚',
		id: 175
	},
	{
		prefix: '964',
		en: 'Iraq',
		cn: '伊拉克',
		id: 176
	},
	{
		prefix: '965',
		en: 'Kuwait',
		cn: '科威特',
		id: 177
	},
	{
		prefix: '966',
		en: 'Saudi Arabia',
		cn: '沙特阿拉伯',
		id: 178
	},
	{
		prefix: '967',
		en: 'Yemen',
		cn: '也门',
		id: 179
	},
	{
		prefix: '968',
		en: 'Oman',
		cn: '阿曼',
		id: 180
	},
	{
		prefix: '970',
		en: 'Palestinian',
		cn: '巴勒斯坦',
		id: 181
	},
	{
		prefix: '971',
		en: 'United Arab Emirates',
		cn: '阿拉伯联合酋长国',
		id: 182
	},
	{
		prefix: '972',
		en: 'Israel',
		cn: '以色列',
		id: 183
	},
	{
		prefix: '973',
		en: 'Bahrain',
		cn: '巴林',
		id: 184
	},
	{
		prefix: '974',
		en: 'Qotar',
		cn: '库塔',
		id: 185
	},
	{
		prefix: '975',
		en: 'Bhutan',
		cn: '不丹',
		id: 186
	},
	{
		prefix: '976',
		en: 'Mongolia',
		cn: '蒙古',
		id: 187
	},
	{
		prefix: '977',
		en: 'Nepal',
		cn: '尼泊尔',
		id: 188
	},
	{
		prefix: '992',
		en: 'Tajikistan',
		cn: '塔吉克斯坦',
		id: 189
	},
	{
		prefix: '993',
		en: 'Turkmenistan',
		cn: '土库曼斯坦',
		id: 190
	},
	{
		prefix: '994',
		en: 'Azerbaijan',
		cn: '阿塞拜疆',
		id: 191
	},
	{
		prefix: '995',
		en: 'Georgia',
		cn: '格鲁吉亚',
		id: 192
	},
	{
		prefix: '996',
		en: 'Kyrgyzstan',
		cn: '吉尔吉斯斯坦',
		id: 193
	},
	{
		prefix: '998',
		en: 'Uzbekistan',
		cn: '乌兹别克斯坦',
		id: 194
	},
	{
		prefix: '1242',
		en: 'Bahamas',
		cn: '巴哈马',
		id: 195
	},
	{
		prefix: '1246',
		en: 'Barbados',
		cn: '巴巴多斯',
		id: 196
	},
	{
		prefix: '1264',
		en: 'Anguilla',
		cn: '安圭拉',
		id: 197
	},
	{
		prefix: '1268',
		en: 'Antigua and Barbuda',
		cn: '安提瓜和巴布达',
		id: 198
	},
	{
		prefix: '1340',
		en: 'Virgin Islands',
		cn: '维尔京群岛',
		id: 199
	},
	{
		prefix: '1345',
		en: 'Cayman Islands',
		cn: '开曼群岛',
		id: 200
	},
	{
		prefix: '1441',
		en: 'Bermuda',
		cn: '百慕大',
		id: 201
	},
	{
		prefix: '1473',
		en: 'Grenada',
		cn: '格林纳达',
		id: 202
	},
	{
		prefix: '1649',
		en: 'Turks and Caicos Islands',
		cn: '特克斯和凯科斯群岛',
		id: 203
	},
	{
		prefix: '1664',
		en: 'Montserrat',
		cn: '蒙特塞拉特',
		id: 204
	},
	{
		prefix: '1671',
		en: 'Guam',
		cn: '关岛',
		id: 205
	},
	{
		prefix: '1758',
		en: 'St.Lucia',
		cn: '圣卢西亚',
		id: 206
	},
	{
		prefix: '1767',
		en: 'Dominica',
		cn: '多米尼加',
		id: 207
	},
	{
		prefix: '1784',
		en: 'St.Vincent',
		cn: '圣文森特',
		id: 208
	},
	{
		prefix: '1809',
		en: 'Dominican Republic',
		cn: '多米尼加共和国',
		id: 209
	},
	{
		prefix: '1868',
		en: 'Trinidad and Tobago',
		cn: '特立尼达和多巴哥',
		id: 210
	},
	{
		prefix: '1869',
		en: 'St Kitts and Nevis',
		cn: '圣基茨和尼维斯',
		id: 211
	},
	{
		prefix: '1876',
		en: 'Jamaica',
		cn: '牙买加',
		id: 212
	}
];

export default prefixSorted;