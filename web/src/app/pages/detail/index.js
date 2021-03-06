/**
 * @File:      诗歌详情页
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-08 18:14:59
 */
var Vue = require('vue');
require('./index.css');
var type_id =require('../../common/type_id.js');
var title = require('../../common/setTitle');
require('../../common/baguetteBox/css/baguetteBox.css');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            load: 0,
            poem: {}
        };
    },
    events: {
        
    },
    components: {
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/'),
        'v-loading': require('../../components/v-loading/')
    },
    watch: {
        
    },
    methods: {
        init: function () {
            var me = this;
            var id = this.$route.params.id || '';
            if (id === '') {
                swal({
                    title: '',
                    text: '诗歌不存在~~',
                    type: 'error'
                }, function () {
                    window.location.href = '/';
                });
            }
            $.ajax({
                url: '/api/poem',
                type: 'get',
                data: {
                    id: id
                }
            })
            .done(function(json) {
                if (json.status === 0) {
                    swal({
                        title: '',
                        text: json.message,
                        type: 'warning',
                        confirmButtonText: '跳转到首页'
                    }, function () {
                        var url = '/';
                        self.location.href = url;
                    });
                    return;
                }
                var data = json.data;
                var poem = {};
                poem.title = data.title;
                title.setTitle(data.title);
                poem.userName = data.userName;
                var swicthPoemType = require('../../common/swicthPoemType');
                poem.type = type_id.getTypeOfId(data.poem_type);
                poem.typeString = swicthPoemType(data.poem_type);
                poem.poem_time = data.poem_time;
                poem.imgSrc = data.poem_imgSrc;
                poem.lines = data.poem_lines;
                me.$data.poem = poem;
                me.$data.load = 1;
                // 图片预览
                setTimeout(function () {
                    baguetteBox.run('.baguette-img', {
                        animation: 'fadeIn',
                        noScrollbars: true,
                        captions: function(element) {
                            return element.getElementsByTagName('img')[0].alt;
                        }
                    });
                });
            })
            .fail(function(err) {
                console.log("error");
            });
        }
    }
});