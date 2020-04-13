
let textArr = [
    {
        name: 'h2',
        id: "prohover",
        class: 'inten prohover',
        text: '求职意向：前端开发工程师'
    }, {
        name: 'h4',
        class: 'text-title',
        text: '个人信息'
    }, {
        name: 'div',
        class: 'base-info',
        children: [{
            name: 'div',
            children: [{
                name: 'div',
                text: '姓名：吴竟竟'
            },{
                name: 'div',
                text: '年龄：24'
            }]
        }, {
            name: 'div',
            children: [{
                name: 'div',
                text: '毕业院校：四川农业大学'
            },{
                name: 'div',
                text: '联系电话：18227591849'
            }]
        }]
    }, /*{
        name: 'h4',
        class: 'text-title',
        text: '教育背景'
    }, {
        name: 'div',
        class: 'school',
        children: [{
            name: 'span',
            class: 'mr',
            text: '学校：中山大学南方学院'
        }, {
            name: 'span',
            text: '专业：计算机科学与技术'
        }, {
            name: 'div',
            text: '主修课程：HTML、CSS、JavaScript、Vue、JavaEE、MySQL',
        }]
    }, */{
        name: 'h4',
        class: 'text-title',
        text: '专业技能'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                text: 'html、CSS、JS'
            }]
        }, {
            name: 'li',
            text:'能熟练运用ElementUI,swipper,jQuery,bootstrap等'
        }, {
            name: 'li',
            text:'掌握前端主流',
            children: [{
                name: 'span',
                text: 'Vue框架'
            }]
        },
        /*, {
            name: 'li',
            text:'熟练掌握',
            children: [{
                name: 'span',
                class: 'tag',
                text: 'H5混合APP开发'
            }, {
                name: 'span',
                text: '，跨多端技术uni-app、apicloud'
            }]
        },*/ /*{
            name: 'li',
            text:'了解微信小程序开发'
        }*/
         {
            name: 'li',
            text:'熟悉后端语言node.js,python'
        }, {
            name: 'li',
            text: '熟悉',
            children: [{
                name: 'span',
                text: 'express框架，mongoose,apidoc库，'
            }, {
                name: 'span',
                text: '前端构建工具webpack和npm包管理库'
            }]
         },
        {
            name: 'li',
            text:'熟练使用git'
        },
        {
            name: 'li',
            text:'英语六级可阅读英文文献'
        }]
    },
    /*{
        name: 'h4',
        class: 'text-title',
        text: '工作经历'
    }, {
        name: 'div',
        class: 'work',
        children:[{
            name: 'span',
            class: 'mr',
            text: '2018.08 — 2019.06'
        }, {
            name: 'span',
            text: 'web前端开发'
        }]
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'担任公司前端技术部主管，负责',
            children: [{
                name: 'span',
                class: 'tag',
                text: '带领新人、项目安排、BUG解决、产品优化、定期开展技术交流会议'
            }]
        }, {
            name: 'li',
            text: '负责公司项目开发（web hybridApp、微信公众号H5），其他公司基础项目开发，如PC端商城，企业响应式网站，APP开发！'
        }]
    },*/ {
        name: 'h4',
        class: 'text-title',
        text: '项目经验'
    }, {
        name: 'div',
        class: 'item-lv',
        children: [{
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目一：后台管理系统'
            }, {
                name: 'li',
                text: '使用技术栈：H-ui.admin,express,apidoc,mongoose,mongodbm,nodemailer'
            }, {
                name: 'li',
                text: '项目描述：基于express搭建的web应用，后台管理系统。功能主要包括账号注册、信息的增删改查、图片上传等功能。' +
                    '采用apidoc插件导出接口文档，使用mongoose插件操作数据库，使用nodemailer封装邮件验证码功能。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目二：电影应用'
            }, {
                name: 'li',
                text: '使用技术栈：vue-cli,axios,express,swipper,BetterScroll',
            }, {
                name: 'li',
                text: '项目描述：使用vue拆分组件，实现复用与解耦，使用vuex状态管理。使用axios反向代理，解决跨域问题。' +
                    '使用betterScroll解决滑动的生硬问题，以及tap事件。采用swipper展示电影照片，并使用过滤器灵活设置图片大小。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
                class: 'project-title',
                text: '项目三：课评系统'
            }, {
                name: 'li',
                text: '使用技术栈：bootstrap,express,jQuery,Ajax',
            }, {
                name: 'li',
                text: '项目描述：使用express搭建web服务器，使用apidoc编写接口文档，使用Ajax实现页面局部刷新，采用element-ui编写前端页面。'
            }]
        }, {
            name: 'ul',
            class: 'ul-list',
            children: [{
                name: 'li',
				// name: 'a',
                class: 'project-title',
                text: '项目四：仿写996-icu'
            }, {
                name: 'li',
                text: '使用技术栈：vue-cli'
            }, {
                name: 'li',
                text: '项目描述：拆分不同语言页面为不同组件，引用github的星标，使用路由实现页面跳转。'
            }]
        }]
    }, {
        name: 'h4',
        class: 'text-title',
        text: '自我评价'
    }, {
        name: 'ul',
        class: 'ul-list',
        children: [{
            name: 'li',
            text:'具有拥有良好的团队协调能力，工作当中和同事融洽相处。'
        }, {
            name: 'li',
            text:'常浏览github、知乎、csdn等，翻阅前端资料，学习前端知识。',
        }, {
            name: 'li',
            text:'热爱前端、思维活跃、学习能力强，抗压能力强。'
        }, {
            name: 'li',
            text:'性格随和、诚恳稳重、身体素质较好、能够很快地适应新环境。'
        }]
    }
]
/*let style = `
    /!*
    * 面试官你好，我是Edit，广东惠州人
    * 为您精心准备一份不一样的简历来介绍自己
    * 首先准备一些样式
    *!/
    *{
        transition: all .8s;
    }
    /!* 稍等，在容器上添加点样式 *!/
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /!* 我需要一点代码高亮 *!/
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #6A9955;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /!* 接下来请欣赏我的个人简历吧 *!/
`*/
let balloon = `
    <div class="balloon-wrap">
        <img src="../images/balloon.png" id="bg-balloon-small">
        <img src="../images/balloon.png" id="bg-balloon-large">
        <img src="../images/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`


