/**
 * @File:      规则配置
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-01 16:42:52
 */
module.exports = {
    // 文题校验规则
    poem_title: {
        identifier: 'poem_title',
        rules: [
            {
                type: 'empty',
                prompt: '好题配好辞！'
            }
        ]
    },
    // 体裁校验规则
    poem_genres: {
        identifier: 'poem_genres',
        rules: [
            {
                type: 'empty',
                prompt: '请归下类目吧！'
            }
        ]
    },
    // 文联校验规则
    poem: {
        identifier: 'poem',
        rules: [
            {
                type: 'empty',
                prompt: '再想想就是一句好词！'
            }
        ]
    }
};