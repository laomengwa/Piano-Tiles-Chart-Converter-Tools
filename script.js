
winviewstatemax = false;
winviewstate = false;
winviewmenustate = false;
function menuviewtouch() {
    document.getElementById("menuviewtouchdiv").style.display = "none";
    document.getElementById('menu_play').style.animation = 'window_menu_test_off 0.05s';
    document.getElementById('menu_help').style.animation = 'window_menu_test_off 0.05s';
    document.getElementById('menu_file').style.animation = 'window_menu_test_off 0.05s';
    document.getElementById('file_menu_view').onmouseover = "";
    document.getElementById('play_menu_view').onmouseover = "";
    document.getElementById('help_menu_view').onmouseover = "";
    setTimeout(function () {
        document.getElementById("menu_play").style.display = "none";
        document.getElementById("menu_help").style.display = "none";
        document.getElementById("menu_file").style.display = "none";
    }, 50);
}
function file_menu_view_fun() {
    winviewmenustate = true;
    if (document.getElementById("menu_file").style.display == "none" || document.getElementById("menu_file").style.display == "") {
        document.getElementById("menu_file").style.display = "block";
        document.getElementById("menuviewtouchdiv").style.display = "";
        document.getElementById('menu_file').style.animation = 'window_menu_test_on 0.05s';
        document.getElementById('menu_play').style.animation = 'window_menu_test_off 0.05s';
        document.getElementById('menu_help').style.animation = 'window_menu_test_off 0.05s';
        if (!/Firefox\/(\S+)/.test(navigator.userAgent) && /Android/.test(navigator.userAgent) || /iPhone/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent)) {
        } else {
            document.getElementById('file_menu_view').onmouseover = function () {
                file_menu_view_fun();
            }
            document.getElementById('play_menu_view').onmouseover = function () {
                play_menu_view_fun();
            }
            document.getElementById('help_menu_view').onmouseover = function () {
                help_menu_view_fun();
            }
        }
        setTimeout(function () {
            document.getElementById("menu_play").style.display = "none";
            document.getElementById("menu_help").style.display = "none";
        }, 50);
    } else {
        document.getElementById('menu_file').style.animation = 'window_menu_test_off 0.05s';
        document.getElementById("menuviewtouchdiv").style.display = "none";
        document.getElementById('file_menu_view').onmouseover = "";
        document.getElementById('play_menu_view').onmouseover = "";
        document.getElementById('help_menu_view').onmouseover = "";
        setTimeout(function () {
            document.getElementById("menu_file").style.display = "none";
        }, 50);
        winviewmenustate = false;
    }

}
function play_menu_view_fun() {
    winviewmenustate = true;
    if (document.getElementById("menu_play").style.display == "none" || document.getElementById("menu_play").style.display == "") {
        document.getElementById("menu_play").style.display = "block";
        document.getElementById("menuviewtouchdiv").style.display = "";
        document.getElementById('menu_play').style.animation = 'window_menu_test_on 0.05s';
        document.getElementById('menu_file').style.animation = 'window_menu_test_off 0.05s';
        document.getElementById('menu_help').style.animation = 'window_menu_test_off 0.05s';
        if (!/Firefox\/(\S+)/.test(navigator.userAgent) && /Android/.test(navigator.userAgent) || /iPhone/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent)) {
        } else {
            document.getElementById('file_menu_view').onmouseover = function () {
                file_menu_view_fun();
            }
            document.getElementById('play_menu_view').onmouseover = function () {
                play_menu_view_fun();
            }
            document.getElementById('help_menu_view').onmouseover = function () {
                help_menu_view_fun();
            }
        }
        setTimeout(function () {
            document.getElementById("menu_file").style.display = "none";
            document.getElementById("menu_help").style.display = "none";
        }, 50);
    } else {
        document.getElementById('menu_play').style.animation = 'window_menu_test_off 0.05s';
        document.getElementById("menuviewtouchdiv").style.display = "none";
        document.getElementById('file_menu_view').onmouseover = "";
        document.getElementById('play_menu_view').onmouseover = "";
        document.getElementById('help_menu_view').onmouseover = "";
        setTimeout(function () {
            document.getElementById("menu_play").style.display = "none";
        }, 50);
        winviewmenustate = false;
    }
}
function help_menu_view_fun() {
    winviewmenustate = true;
    if (document.getElementById("menu_help").style.display == "none" || document.getElementById("menu_help").style.display == "") {
        document.getElementById("menu_help").style.display = "block";
        document.getElementById("menuviewtouchdiv").style.display = "";
        document.getElementById('menu_help').style.animation = 'window_menu_test_on 0.05s';
        document.getElementById('menu_file').style.animation = 'window_menu_test_off 0.05s';
        document.getElementById('menu_play').style.animation = 'window_menu_test_off 0.05s';
        if (!/Firefox\/(\S+)/.test(navigator.userAgent) && /Android/.test(navigator.userAgent) || /iPhone/.test(navigator.userAgent) || /iPad/.test(navigator.userAgent)) {
        } else {
            document.getElementById('file_menu_view').onmouseover = function () {
                file_menu_view_fun();
            }
            document.getElementById('play_menu_view').onmouseover = function () {
                play_menu_view_fun();
            }
            document.getElementById('help_menu_view').onmouseover = function () {
                help_menu_view_fun();
            }
        }
        setTimeout(function () {
            document.getElementById("menu_play").style.display = "none";
            document.getElementById("menu_file").style.display = "none";
        }, 50);
    } else {
        document.getElementById('menu_help').style.animation = 'window_menu_test_off 0.05s';
        document.getElementById("menuviewtouchdiv").style.display = "none";
        document.getElementById('file_menu_view').onmouseover = "";
        document.getElementById('play_menu_view').onmouseover = "";
        document.getElementById('help_menu_view').onmouseover = "";
        setTimeout(function () {
            document.getElementById("menu_help").style.display = "none";
        }, 50);
        winviewmenustate = false;
    }
}
function view_window_size() {
    if (winviewstatemax == true) {
        windowbutton3();
    } else {
        windowbutton2();
    }
}
//最大化按钮
function windowbutton2() {
    document.getElementById('menu_max_window').innerHTML = "窗口还原";
    if (zh_choose == "t") {
        zh_tran('t');
    }
    document.getElementById('drag').style.top = document.getElementById('drag').style.left = 0;
    document.getElementById('drag').style.animation = 'board_5 0.1s';
    setTimeout(function () {
        document.getElementById('drag').style.width = 100 + "%";
        document.getElementById('drag').style.height = 100 + "%";
    }, 100);
    document.getElementById('boxmaxview').style.display = "none";
    document.getElementById('boxrevertview').style.display = "block";
    winviewstatemax = true;
};
//还原按钮
function windowbutton3() {
    document.getElementById('menu_max_window').innerHTML = "窗口最大化";
    if (zh_choose == "t") {
        zh_tran('t');
    }
    document.getElementById('drag').style.animation = 'board_6 0.1s';
    document.getElementById('winrevertview').innerHTML = '<div class="window_min_3"</div>';
    document.getElementById('winrevertview').title = '最小化';
    setTimeout(function () {
        document.getElementById('drag').style.width = dragMinWidth + "px";
        document.getElementById('drag').style.height = dragMinHeight + "px";
    }, 100);
    document.getElementById('drag').style.left = (document.documentElement.clientWidth - document.getElementById("drag").offsetWidth) / 2 + "px";
    document.getElementById('drag').style.top = (document.documentElement.clientHeight - document.getElementById("drag").offsetHeight) / 2 + "px";
    document.getElementById('boxrevertview').style.display = "none";
    document.getElementById('boxmaxview').style.display = "block";
    winviewstatemax = false;
};
//关闭按钮
function windowbutton4() {
    winviewstate = false;
    document.getElementsByClassName('warning_6')[0].style.display = 'none';
    document.getElementById('drag').style.animation = 'board_4 0.1s';
    setTimeout(function () {
        document.getElementById('drag').style.display = "none";
    }, 100);
};
//最小化按钮
function windowbutton1() {
    winviewstate = false;
    document.getElementById('winrevertview').innerHTML = '<div class="window_min_2"></div><div class="window_min_1"</div>';
    document.getElementById('winrevertview').title = '还原';
    document.getElementById('drag').style.animation = 'board_4 0.1s';
    setTimeout(function () {
        document.getElementById('drag').style.display = "none";
    }, 100);
};
//脚本来源于 https://www.jb51.net/article/73157.htm
/*-------------------------- +
 获取id, class, tagName
 +-------------------------- */
var get = {
    byId: function (id) {
        return typeof id === "string" ? document.getElementById(id) : id
    },
    byClass: function (sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp("(^| )" + sClass + "( |$)");
        var aElem = this.byTagName("*", oParent);
        for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        return aClass
    },
    byTagName: function (elem, obj) {
        return (obj || document).getElementsByTagName(elem)
    }
};
var dragMinWidth = 260;
var dragMinHeight = 260;
/*-------------------------- +
 拖拽函数
 +-------------------------- */
function drag(oDrag, handle) {
    var disX = dixY = 0;
    var oMin = get.byClass("boxmin", oDrag)[0];
    var oMax = get.byId("boxmaxview", oDrag);
    var oRevert = get.byId("boxrevertview", oDrag);
    var oClose = get.byClass("boxoff", oDrag)[0];
    handle = handle || oDrag;
    handle.style.cursor = "move";
    handle.onmousedown = function (event) {
        menuviewtouch();
        var event = event || window.event;
        disX = event.clientX - oDrag.offsetLeft;
        disY = event.clientY - oDrag.offsetTop;
        document.onmousemove = function (event) {
            var event = event || window.event;
            iL = event.clientX - disX;
            iT = event.clientY - disY;
            var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
            var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
            iL <= 0 && (iL = 0);
            iT <= 0 && (iT = 0);
            iL >= maxL && (iL = maxL);
            iT >= maxT && (iT = maxT);
            if (winviewstatemax == true && event.clientY > 30) {
                winviewstatemax = false;
                oDrag.style.width = dragMinWidth + "px";
                oDrag.style.height = dragMinHeight + "px";
                oRevert.style.display = "none";
                oMax.style.display = "block";
            }
            if (iT <= 15) {
                document.getElementById('view_window_mask').style.animation = 'view_window_mask_on 0.5s';
                document.getElementById('view_window_mask').style.display = "inline";
            } else {
                document.getElementById('view_window_mask').style.animation = 'view_window_mask_off 0.5s';
                setTimeout(function () {
                    document.getElementById('view_window_mask').style.display = "none";
                }, 500);
            }
            oDrag.style.left = iL + "px";
            oDrag.style.top = iT + "px";
            return false
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            if (typeof (iT) == "undefined") {
                iT = event.clientY;
            }
            if (iT <= 15) {
                document.getElementById('view_window_mask').style.display = "none";
                view_window_size();
            }
        };
        return false
    };
    handle.ontouchstart = function (event) {
        menuviewtouch();
        var event = event || window.event;
        disX = event.touches[0].clientX - oDrag.offsetLeft;
        disY = event.touches[0].clientY - oDrag.offsetTop;
        document.ontouchmove = function (event) {
            var event = event || window.event;
            iL = event.touches[0].clientX - disX;
            iT = event.touches[0].clientY - disY;
            var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
            var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
            iL <= 0 && (iL = 0);
            iT <= 0 && (iT = 0);
            iL >= maxL && (iL = maxL);
            iT >= maxT && (iT = maxT);
            if (winviewstatemax == true && event.touches[0].clientY > 30) {
                winviewstatemax = false;
                oDrag.style.width = dragMinWidth + "px";
                oDrag.style.height = dragMinHeight + "px";
                oRevert.style.display = "none";
                oMax.style.display = "block";
            }
            if (iT <= 15) {
                document.getElementById('view_window_mask').style.animation = 'view_window_mask_on 0.5s';
                document.getElementById('view_window_mask').style.display = "inline";
            } else {
                document.getElementById('view_window_mask').style.animation = 'view_window_mask_off 0.5s';
                setTimeout(function () {
                    document.getElementById('view_window_mask').style.display = "none";
                }, 500);
            }
            oDrag.style.left = iL + "px";
            oDrag.style.top = iT + "px";
            return false
        };
        document.ontouchend = function () {
            document.ontouchmove = null;
            document.ontouchend = null;
            if (typeof (iT) == "undefined") {
                iT = event.clientY;
            }
            if (iT <= 15) {
                document.getElementById('view_window_mask').style.display = "none";
                view_window_size();
            }
        };
        return false
    };
}
/*-------------------------- +
 改变大小函数
 +-------------------------- */
function resize(oParent, handle, isLeft, isTop, lockX, lockY) {
    handle.onmousedown = function (event) {
        if (winviewstatemax == true) {
            windowbutton3();
        }
        menuviewtouch();
        var event = event || window.event;
        var disX = event.clientX - handle.offsetLeft;
        var disY = event.clientY - handle.offsetTop;
        var iParentTop = oParent.offsetTop;
        var iParentLeft = oParent.offsetLeft;
        var iParentWidth = oParent.offsetWidth;
        var iParentHeight = oParent.offsetHeight;
        document.onmousemove = function (event) {
            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;
            var maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
            var maxH = document.documentElement.clientHeight - oParent.offsetTop - 2; var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
            var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
            isLeft && (oParent.style.left = iParentLeft + iL + "px");
            isTop && (oParent.style.top = iParentTop + iT + "px");
            iW < dragMinWidth && (iW = dragMinWidth);
            iW > maxW && (iW = maxW);
            lockX || (oParent.style.width = iW + "px");
            iH < dragMinHeight && (iH = dragMinHeight);
            iH > maxH && (iH = maxH);
            lockY || (oParent.style.height = iH + "px");
            if ((isLeft && iW == dragMinWidth) || (isTop && iH == dragMinHeight)) document.onmousemove = null;
            return false;
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    }
    handle.ontouchstart = function (event) {
        if (winviewstatemax == true) {
            windowbutton3();
        }
        menuviewtouch();
        var event = event || window.event;
        var disX = event.touches[0].clientX - handle.offsetLeft;
        var disY = event.touches[0].clientY - handle.offsetTop;
        var iParentTop = oParent.offsetTop;
        var iParentLeft = oParent.offsetLeft;
        var iParentWidth = oParent.offsetWidth;
        var iParentHeight = oParent.offsetHeight;
        document.ontouchmove = function (event) {
            var event = event || window.event;
            var iL = event.touches[0].clientX - disX;
            var iT = event.touches[0].clientY - disY;
            var maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
            var maxH = document.documentElement.clientHeight - oParent.offsetTop - 2; var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
            var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;
            isLeft && (oParent.style.left = iParentLeft + iL + "px");
            isTop && (oParent.style.top = iParentTop + iT + "px");
            iW < dragMinWidth && (iW = dragMinWidth);
            iW > maxW && (iW = maxW);
            lockX || (oParent.style.width = iW + "px");
            iH < dragMinHeight && (iH = dragMinHeight);
            iH > maxH && (iH = maxH);
            lockY || (oParent.style.height = iH + "px");
            if ((isLeft && iW == dragMinWidth) || (isTop && iH == dragMinHeight)) document.ontouchmove = null;
            return false;
        };
        document.ontouchend = function () {
            document.ontouchmove = null;
            document.ontouchend = null;
        };
        return false;
    }
};
window.onload = window.onresize = function () {
    var oDrag = document.getElementById("drag");
    var oTitle = get.byClass("title", oDrag)[0];
    var oL = get.byClass("resizeL", oDrag)[0];
    var oT = get.byClass("resizeT", oDrag)[0];
    var oR = get.byClass("resizeR", oDrag)[0];
    var oB = get.byClass("resizeB", oDrag)[0];
    var oLT = get.byClass("resizeLT", oDrag)[0];
    var oTR = get.byClass("resizeTR", oDrag)[0];
    var oBR = get.byClass("resizeBR", oDrag)[0];
    var oLB = get.byClass("resizeLB", oDrag)[0];
    drag(oDrag, oTitle);
    //四角
    resize(oDrag, oLT, true, true, false, false);
    resize(oDrag, oTR, false, true, false, false);
    resize(oDrag, oBR, false, false, false, false);
    resize(oDrag, oLB, true, false, false, false);
    //四边
    resize(oDrag, oL, true, false, false, true);
    resize(oDrag, oT, false, true, true, false);
    resize(oDrag, oR, false, false, false, true);
    resize(oDrag, oB, false, false, true, false);
    oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
    oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
}
function winviewrevert() {
    if (winviewstate == true) {
        winviewstate = false;
        document.getElementById('winrevertview').innerHTML = '<div class="window_min_2"></div><div class="window_min_1"</div>';
        document.getElementById('winrevertview').title = '还原';
        document.getElementById('drag').style.animation = 'board_4 0.1s';
        setTimeout(function () {
            document.getElementById('drag').style.display = "none";
        }, 100);
    } else {
        document.getElementById('winrevertview').innerHTML = '<div class="window_min_3"></div>';
        document.getElementById('winrevertview').title = '最小化';
        view_window();
    }
}
function winviewoff() {
    document.getElementsByClassName('warning_6')[0].style.display = 'none';
    document.getElementById('drag').style.animation = 'board_4 0.1s';
    setTimeout(function () {
        document.getElementById("drag").style.display = "none";
    }, 100);
}
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    document.getElementById("file").files = ev.dataTransfer.files;
}
// 简繁转换脚本来自于：https://www.cnblogs.com/zsh-blogs/p/10503227.html
var zh_default = 'n';
var zh_choose = 'n';
var zh_expires = 7;
var zh_class = 'zh_click';
var zh_style_active = 'font-weight:bold; color:green;';
var zh_style_inactive = 'color:blue;';
var zh_browserLang = '';
var zh_langReg_t = /^zh-tw|zh-hk$/i;
var zh_langReg_s = /^zh-cn$/i;
var zh_s = '“”确于将号皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
var zh_t = '「」確於將號皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍為濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
String.prototype.tran = function () {
    var s1, s2;
    if (zh_choose == 't') {
        s1 = zh_s;
        s2 = zh_t;
        document.getElementById("input").setAttribute("placeholder", "選擇文件轉換後以顯示……");
        document.getElementById("result").setAttribute("placeholder", "輸出結果將在此顯示……");
    } else if (zh_choose == 's') {
        s1 = zh_t;
        s2 = zh_s;
        document.getElementById("input").setAttribute("placeholder", "选择文件转换后以显示……");
        document.getElementById("result").setAttribute("placeholder", "输出结果将在此显示……");
    } else {
        return this;
    }
    var a = '';
    var l = this.length;
    for (var i = 0; i < this.length; i++) {
        var c = this.charAt(i);
        var p = s1.indexOf(c)
        a += p < 0 ? c : s2.charAt(p);
    }
    return a;
}
function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}
function getCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        } else {
            return '';
        }
    }
}
function zh_tranBody(obj) {
    var o = (typeof (obj) == "object") ? obj.childNodes : document.body.childNodes;
    for (var i = 0; i < o.length; i++) {
        var c = o.item(i);
        if ('||BR|HR|TEXTAREA|SCRIPT|'.indexOf("|" + c.tagName + "|") > 0) continue;
        if (c.className == zh_class) {
            if (c.id == zh_class + '_' + zh_choose) {
                c.setAttribute('style', zh_style_active);
                c.style.cssText = zh_style_active;
            } else {
                c.setAttribute('style', zh_style_inactive);
                c.style.cssText = zh_style_inactive;
            }
            continue;
        }
        if (c.title != '' && c.title != null) c.title = c.title.tran();
        if (c.alt != '' && c.alt != null) c.alt = c.alt.tran();
        if (c.nodeType == 3) {
            c.data = c.data.tran();
        } else {
            zh_tranBody(c);
        }
    }
}
function zh_tran(go) {
    if (go) zh_choose = go;
    setCookie('zh_choose', zh_choose, zh_expires);
    if (go == 'n') {
        window.location.reload();
    } else {
        zh_tranBody();
    }
}
var userLang = navigator.language || navigator.userLanguage;
if (userLang == "zh-TW" || userLang == "zh-HK" || userLang == "zh-MO") {
    zh_tran('t');
}
key_select();
document.getElementById('id1').style.animation = 'board_0 0s';
document.getElementById('mask').style.animation = 'board_9 0.1s';
setTimeout(function () { document.getElementById('mask').style.display = "none"; }, 100);
document.getElementById('box').style.display = "none";
document.getElementById('lang').style.display = "none";
document.getElementById('note').style.display = "none";
document.getElementById('select').style.display = "none";
document.getElementById('next').style.display = "none";
document.getElementById('help_window').style.display = "none";
document.getElementById('drag').style.display = "none";
var id2 = 1;
if (typeof FileReader === "undefined") {
    alert('警告！此浏览器不支持FileReader接口，请更新或使用 Chrome、Chromium、Firefox、Edge、Safari、Opera、Brave 等现代浏览器打开HTML文件！已禁用此浏览器访问此脚本！');
    document.location("about:blank");
    a.setAttribute("disabled", "disabled")
}
var clock = 0;
var timerstart = false;
//计时器
function timer() {
    if (timerstart == true) {
        setTimeout(function () { timer(); clock++; progress2.innerHTML = clock / 10; }, 100);
    }
}
//MIDI写入数组
function MidiNoteWrite(arr) {
    MidiNoteWrite_a = 0;
    while (parseInt(MidiNoteWrite_a[0], 16) > 127) {
        MidiNoteWrite_a = (MidiNoteWrite_a - 1) * 128 + parseInt(arr.shift(), 16)
    }
    MidiNoteWrite_a = MidiNoteWrite_a * 128 + parseInt(arr.shift(), 16);
    return MidiNoteWrite_a;
}
//音符位置调整
function column_note_pos() {
    do {
        column_note_pos1();
    } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
    column_initial = x;
    column_initial_double = x;
}
function column_note_pos1() {
    if (document.getElementById('games').value == "mak") {
        x = Math.random() * note_column;
        x = Math.floor(x);
    } else if (document.getElementById('games').value == "mas") {
        do {
            x = Math.random() * 256;
            x = Math.floor(x);
        } while (x < 32 || x > 223)
    }
}
function column_note_pos2() {
    if (document.getElementById('games').value == "mak") {
        y = Math.random() * note_column;
        y = Math.floor(y);
    } else if (document.getElementById('games').value == "mas") {
        do {
            y = Math.random() * 256;
            y = Math.floor(x);
        } while (y < 32 || y > 223)
    }
}
function column_note_array() {
    time[note_number] = { beat: beat, column: x };
}
//小程序选择框的窗口光标选择器
function fl2() {
    document.onkeydown = keyDownselect;
    var fl3 = 0;
    function keyDownselect() {
        if (event.keyCode == 38) {
            fl3 = fl3 - 1;
            if (fl3 < -1) {
                fl3 = -1;
            }
            if (fl3 == -1) {
                document.getElementById("boxoff4").focus();
                document.getElementById('boxoff4').style.backgroundColor = "#FB7299";
                document.getElementById('boxoff4').style.color = "#fff";
                document.getElementById("select_song_0").style.backgroundColor = "#fff";
                document.getElementById("select_song_0").style.color = "#555";
            } else {
                document.getElementById("select_song_" + fl3).focus();
                document.getElementById("select_song_" + fl3).style.backgroundColor = "#76b9f8";
                document.getElementById("select_song_" + fl3).style.color = "#fff";
                if (fl3 != songselect2 - 1) {
                    document.getElementById("select_song_" + (fl3 + 1)).style.backgroundColor = "#fff";
                    document.getElementById("select_song_" + (fl3 + 1)).style.color = "#555";
                } else {
                    document.getElementById('boxoff6').style.backgroundColor = "#fff";
                    document.getElementById('boxoff6').style.color = "#555";
                    document.getElementById("select_song_" + fl3).style.backgroundColor = "#76b9f8";
                    document.getElementById("select_song_" + fl3).style.color = "#fff";
                }
                document.getElementById("boxoff4").style.backgroundColor = "#fff";
                document.getElementById("boxoff4").style.color = "#555";
                if (fl3 != 0) {
                    document.getElementById("select_song_" + (fl3 - 1)).style.backgroundColor = "#fff";
                    document.getElementById("select_song_" + (fl3 - 1)).style.color = "#555";
                }
            }
        }
        if (event.keyCode == 40) {
            fl3 = fl3 + 1;
            if (fl3 > songselect2) {
                fl3 = songselect2;
            }
            document.getElementById("boxoff4").style.backgroundColor = "#fff";
            document.getElementById("boxoff4").style.color = "#555";
            if (fl3 != songselect2) {
                document.getElementById("select_song_" + fl3).focus();
                document.getElementById("select_song_" + fl3).style.backgroundColor = "#76b9f8";
                document.getElementById("select_song_" + fl3).style.color = "#fff";
            } else {
                document.getElementById("boxoff6").focus();
                document.getElementById("select_song_" + (songselect2 - 1)).style.backgroundColor = "#fff";
                document.getElementById("select_song_" + (songselect2 - 1)).style.color = "#555";
                document.getElementById('boxoff6').style.backgroundColor = "#FB7299";
                document.getElementById('boxoff6').style.color = "#fff";
            }
            if (fl3 != 0) {
                document.getElementById("select_song_" + (fl3 - 1)).style.backgroundColor = "#fff";
                document.getElementById("select_song_" + (fl3 - 1)).style.color = "#555";
            }
        }
        if (event.keyCode == 13) {
            if (fl3 == -1 || fl3 == songselect2) {
                fl3 = -1;
                document.getElementById("boxoff4").style.backgroundColor = "#fff";
                document.getElementById("boxoff4").style.color = "#555";
                document.getElementById("boxoff6").style.backgroundColor = "#fff";
                document.getElementById("boxoff6").style.color = "#555";
                hidder();
            } else {
                file_f = file_i[fl3].content;
                file_j = file_f.baseBpm;
                file_f = file_f.musics;
                file_d = file_f.length;
                hidder();
                sound3();
                continue_music();
            }
        }
    }
}
//小程序歌曲选项
function test1() {
    var o = document.createElement('div');
    o.className = "button5"
    o.tabIndex = "-1"
    o.id = "select_song_" + songselect2;
    o.innerHTML = file_i[songselect2].name;
    document.getElementById("songselect").appendChild(o);
    o.setAttribute("onclick", 'file_f=file_i[' + songselect2 + '].content;file_j=file_f.baseBpm;file_f=file_f.musics;file_d=file_f.length;continue_music();hidder();sound3();');
    o = null;
}
//主程序
function continue_music() {
    var file_h = "", b = "";
    //主音轨读取
    for (file_d_a = 0; file_d_a < file_d; file_d_a++) {
        file_g = file_f[file_d_a].bpm + ",";
        file_h = file_h + file_g;
        file_k = file_f[file_d_a].baseBeats + ",";
        b = b + file_k;
    }
    //自动填写BPM与基础节拍
    if (document.getElementById('manual').checked == false) {
        document.getElementById("beats").value = b;
        document.getElementById("bpm").value = file_j + ";" + file_h;
    }
    if (document.getElementById("bpm").value == "") {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你没有填写BPM值，请按照输入框的提示，按格式填写，然后再重试转换。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    } else if (document.getElementById("bpm").value.indexOf(",") < 0 || document.getElementById("bpm").value.indexOf(";") < 0 || document.getElementById("bpm").value.indexOf(";") > document.getElementById("bpm").value.indexOf(",")) {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你没有按照格式填写，程序使用第一个值或默认值全部填写。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            var bpm_a = document.getElementById("bpm").value;
            bpm_a = parseFloat(bpm_a);
            bpm_a = bpm_a.toString();
            if (bpm_a == "NaN") {
                bpm_a = "60";
            }
            bpm_c = bpm_a + ";";
            for (file_d_a = 0; file_d_a < file_d; file_d_a++) {
                bpm_c = bpm_c + bpm_a + ",";
            }
            document.getElementById("bpm").value = bpm_c;
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    }
    if (document.getElementById("bpm").value.indexOf("undefined") > -1) {
        if (file_h.indexOf("undefined") > -1) {
            lock();
            var bpm_a = document.getElementById("bpm").value;
            bpm_a = parseFloat(bpm_a);
            bpm_a = bpm_a.toString();
            bpm_b = "";
            for (file_d_a = 0; file_d_a < file_d; file_d_a++) {
                bpm_b = bpm_b + bpm_a + ",";
            }
            document.getElementById("bpm").value = file_j + ";" + bpm_b;
            if (document.getElementById("acc").value == "") {
                setTimeout(function () {
                    warning.innerHTML = "<b>你的谱面文件没有定义完整的BPM值对象，程序使用第一个值全部填写。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                    if (zh_choose == "t") {
                        zh_tran('t');
                    }
                }, 100);
            }
        } else {
            lock();
            setTimeout(function () {
                warning.innerHTML = "<b>你的谱面文件没有定义BPM值对象，请勾选“手动填写BPM与基准节拍”选项填写真正的BPM数值手动替换所有的“undefined”，然后再重试转换。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                if (zh_choose == "t") {
                    zh_tran('t');
                }
            }, 100);
        }
    }
    if (document.getElementById("beats").value == "") {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你没有填写基础节拍值，请按照输入框的提示，按格式填写，然后再重试转换。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    } else
        beat_a = document.getElementById("beats").value;
    beat_a = beat_a.replace(/;/g, ",");
    document.getElementById("beats").value = beat_a;
    if (document.getElementById("beats").value.indexOf(",") < 0 && document.getElementById("beats").value.indexOf(";") < 0) {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你没有按照格式填写，程序使用第一个值或默认值全部填写。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            var beat_a = document.getElementById("beats").value;
            beat_a = parseFloat(beat_a);
            beat_a = beat_a.toString();
            if (beat_a == "NaN") {
                beat_a = "1";
            }
            for (file_d_a = 0; file_d_a < file_d; file_d_a++) {
                beat_b = beat_b + beat_a + ";";
            }
            document.getElementById("beats").value = beat_b;
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    }
    if (document.getElementById("beats").innerHTML.indexOf("undefined") > -1) {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你的谱面文件没有定义完整的基础节拍值对象，程序使用“1”作为默认值输入，或者手动填写。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            document.getElementById("beats").value = "1;1;1;"
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    }
    musictime_main_array = new Array();
    musictype_main_array = new Array();
    soundtest = new Array();
    //id循环
    for (file_d_a = 0; file_d_a < file_d; file_d_a++) {
        //音轨循环
        //倒放选项
        if (document.getElementById('reverse').checked == true) {
            file_f = file_f.reverse();
        }
        musictime_minor_array = new Array();
        musictype_minor_array = new Array();
        for (file_d_b = 0; file_d_b < file_f[file_d_a].scores.length; file_d_b++) {
            a = file_f[file_d_a].scores[file_d_b];
            if (file_f[file_d_a].instruments) {
                if (file_f[file_d_a].instruments[file_d_b] !== "piano" || file_f[file_d_a].instruments[file_d_b] !== "bass" || file_f[file_d_a].instruments[file_d_b] !== "bass2" || file_f[file_d_a].instruments[file_d_b] !== "drum") {
                    Fileinstruments = file_f[file_d_a].instruments[file_d_b];
                } else {
                    if (file_f[file_d_a].alternatives) {
                        Fileinstruments = file_f[file_d_a].alternatives[file_d_b];
                    } else {
                        Fileinstruments = "piano";
                    }
                }
            } else {
                Fileinstruments = "piano";
            }
            if (Fileinstruments == undefined) {
                Fileinstruments = "piano";
            }
            a = a.slice(0, a.length - 1);
            a = a.replace(/;/g, ",");
            a = a.split(',');
            if (soundtest[file_d_b] == undefined) {
                soundtest[file_d_b] = a;//测试
            } else {
                soundtest[file_d_b].push(a);
            }
            //倒放选项
            if (document.getElementById('reverse').checked == true) {
                a = a.reverse();
                for (file_d_c = 0; file_d_c < a.length; file_d_c++) {
                    if (a[file_d_c].indexOf(">") > -1) {
                        reverse_stack = file_d_c;
                    }
                    if (a[file_d_c].indexOf("<") > -1) {
                        if (file_d_c !== reverse_stack) {
                            reverse_stack_test = a[file_d_c].split('<');
                            a[file_d_c] = reverse_stack_test[1];
                            a[reverse_stack] = reverse_stack_test[0] + "<" + a[reverse_stack];
                            reverse_stack_test = a[reverse_stack].split('>');
                            a[reverse_stack] = reverse_stack_test[0];
                            if (a[file_d_c].split(']')[1] == "") {
                                a[file_d_c] = a[file_d_c] + ">";
                            } else {
                                a[file_d_c] = a[file_d_c].split(']')[0] + "]>" + a[file_d_c].split(']')[1];
                            }
                        }
                    }
                }
            }
            var num = 0;
            note_time = new Array(), note_type = new Array();
            var note_type_off = false;
            //单一音符循环
            for (file_d_c = 0; file_d_c < a.length; file_d_c++) {
                //删除特效
                if (a[file_d_c].indexOf('{') > -1 || a[file_d_c].indexOf('}') > -1) {
                    c = a[file_d_c].indexOf("{");
                    d = a[file_d_c].indexOf("}") + 1;
                    e = a[file_d_c].slice(c, d);
                    a[file_d_c] = a[file_d_c].replace(e, "");
                }
                //检测休止符
                if (a[file_d_c].indexOf('Q') > -1 || a[file_d_c].indexOf('R') > -1 || a[file_d_c].indexOf('S') > -1 || a[file_d_c].indexOf('T') > -1 || a[file_d_c].indexOf('U') > -1 || a[file_d_c].indexOf('V') > -1 || a[file_d_c].indexOf('W') > -1 || a[file_d_c].indexOf('X') > -1 || a[file_d_c].indexOf('Y') > -1) {
                    //检测括号内是否有休止符
                    if (a[file_d_c].indexOf('(') > -1 || a[file_d_c].indexOf(')') > -1) {
                        c = a[file_d_c].indexOf("(");
                        d = a[file_d_c].indexOf(")") + 1;
                        e = a[file_d_c].slice(c, d);
                        e_replace = e.replace(/Q/g, "mute");
                        e_replace = e_replace.replace(/R/g, "mute");
                        e_replace = e_replace.replace(/S/g, "mute");
                        e_replace = e_replace.replace(/T/g, "mute");
                        e_replace = e_replace.replace(/U/g, "mute");
                        e_replace = e_replace.replace(/V/g, "mute");
                        e_replace = e_replace.replace(/W/g, "mute");
                        e_replace = e_replace.replace(/X/g, "mute");
                        e_replace = e_replace.replace(/Y/g, "mute");
                        e_replace = e_replace.replace(/Z/g, "mute");
                        a[file_d_c] = a[file_d_c].replace(e, e_replace);
                    }
                }
                //音符内长度检测循环
                var index_H = a[file_d_c].indexOf('H'), index_I = a[file_d_c].indexOf('I'), index_J = a[file_d_c].indexOf('J'), index_K = a[file_d_c].indexOf('K'), index_L = a[file_d_c].indexOf('L'), index_M = a[file_d_c].indexOf('M'), index_N = a[file_d_c].indexOf('N'), index_O = a[file_d_c].indexOf('O'), index_P = a[file_d_c].indexOf('P');
                var index_Q = a[file_d_c].indexOf('Q'), index_R = a[file_d_c].indexOf('R'), index_S = a[file_d_c].indexOf('S'), index_T = a[file_d_c].indexOf('T'), index_U = a[file_d_c].indexOf('U'), index_V = a[file_d_c].indexOf('V'), index_W = a[file_d_c].indexOf('W'), index_X = a[file_d_c].indexOf('X'), index_Y = a[file_d_c].indexOf('Y');
                for (var note_lenght = 0; note_lenght < a[file_d_c].length; note_lenght++) {
                    while (index_H !== -1) {
                        num = num + 256;
                        index_H = a[file_d_c].indexOf('H', index_H + 1);
                    }
                    while (index_I !== -1) {
                        num = num + 128;
                        index_I = a[file_d_c].indexOf('I', index_I + 1);
                    }
                    while (index_J !== -1) {
                        num = num + 64;
                        index_J = a[file_d_c].indexOf('J', index_J + 1);
                    }
                    while (index_K !== -1) {
                        num = num + 32;
                        index_K = a[file_d_c].indexOf('K', index_K + 1);
                    }
                    while (index_L !== -1) {
                        num = num + 16;
                        index_L = a[file_d_c].indexOf('L', index_L + 1);
                    }
                    while (index_M !== -1) {
                        num = num + 8;
                        index_M = a[file_d_c].indexOf('M', index_M + 1);
                    }
                    while (index_N !== -1) {
                        num = num + 4;
                        index_N = a[file_d_c].indexOf('N', index_N + 1);
                    }
                    while (index_O !== -1) {
                        num = num + 2;
                        index_O = a[file_d_c].indexOf('O', index_O + 1);
                    }
                    while (index_P !== -1) {
                        num = num + 1;
                        index_P = a[file_d_c].indexOf('P', index_P + 1);
                    }
                    while (index_Q !== -1) {
                        num = num + 256;
                        index_Q = a[file_d_c].indexOf('Q', index_Q + 1);
                    }
                    while (index_R !== -1) {
                        num = num + 128;
                        index_R = a[file_d_c].indexOf('R', index_R + 1);
                    }
                    while (index_S !== -1) {
                        num = num + 64;
                        index_S = a[file_d_c].indexOf('S', index_S + 1);
                    }
                    while (index_T !== -1) {
                        num = num + 32;
                        index_T = a[file_d_c].indexOf('T', index_T + 1);
                    }
                    while (index_U !== -1) {
                        num = num + 16;
                        index_U = a[file_d_c].indexOf('U', index_U + 1);
                    }
                    while (index_V !== -1) {
                        num = num + 8;
                        index_V = a[file_d_c].indexOf('V', index_V + 1);
                    }
                    while (index_W !== -1) {
                        num = num + 4;
                        index_W = a[file_d_c].indexOf('W', index_W + 1);
                    }
                    while (index_X !== -1) {
                        num = num + 2;
                        index_X = a[file_d_c].indexOf('X', index_X + 1);
                    }
                    while (index_Y !== -1) {
                        num = num + 1;
                        index_Y = a[file_d_c].indexOf('Y', index_Y + 1);
                    }
                }
                //检测note玩法
                note_time[file_d_c] = num;
                var index_type1 = a[file_d_c].indexOf('1<'), index_type2 = a[file_d_c].indexOf('2<'), index_type3 = a[file_d_c].indexOf('3<'), index_type4 = a[file_d_c].indexOf('>'), index_type5 = a[file_d_c].indexOf('5<'), index_type6 = a[file_d_c].indexOf('6<'), index_type7 = a[file_d_c].indexOf('7<'), index_type8 = a[file_d_c].indexOf('8<'), index_type9 = a[file_d_c].indexOf('9<'), index_type10 = a[file_d_c].indexOf('10<');
                if (index_type1 !== -1) {
                    note_type[file_d_c] = "1";
                } else if (index_type2 !== -1) {
                    if (index_type4 !== -1) {
                        note_type[file_d_c] = "2_end";
                    } else {
                        note_type[file_d_c] = "2";
                    }
                } else if (index_type3 !== -1) {
                    if (document.getElementById('note7').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "3_end";
                        } else {
                            note_type[file_d_c] = "3";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type5 !== -1) {
                    if (document.getElementById('note2').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "5_end";
                        } else {
                            note_type[file_d_c] = "5";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type6 !== -1) {
                    if (document.getElementById('note1').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "6_end";
                        } else {
                            note_type[file_d_c] = "6";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type7 !== -1) {
                    if (document.getElementById('note4').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "7_end";
                        } else {
                            note_type[file_d_c] = "7";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type8 !== -1) {
                    if (document.getElementById('note3').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "8_end";
                        } else {
                            note_type[file_d_c] = "8";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type9 !== -1) {
                    if (document.getElementById('note5').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "9_end";
                        } else {
                            note_type[file_d_c] = "9";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type10 !== -1) {
                    if (document.getElementById('note6').checked == true) {
                        if (index_type4 !== -1) {
                            note_type[file_d_c] = "10_end";
                        } else {
                            note_type[file_d_c] = "10";
                        }
                    } else {
                        note_type[file_d_c] = "1";
                        note_type_off = true;
                    }
                } else if (index_type4 !== -1) {
                    if (note_type[file_d_c] == undefined) {
                        if (note_type_off == true) {
                            note_type[file_d_c] = "1";
                            note_type_off = false;
                        } else {
                            note_type[file_d_c] = "end";
                        }
                    } else {
                        note_type[file_d_c] = "4_end";
                    }
                } else {
                    if (note_type[file_d_c - 1] == "4" || note_type[file_d_c - 1] == "2" || note_type[file_d_c - 1] == "3" || note_type[file_d_c - 1] == "5" || note_type[file_d_c - 1] == "6" || note_type[file_d_c - 1] == "7" || note_type[file_d_c - 1] == "8" || note_type[file_d_c - 1] == "9" || note_type[file_d_c - 1] == "10") {
                        note_type[file_d_c] = "4";
                    } else {
                        if (a[file_d_c].indexOf('Q') !== -1 || a[file_d_c].indexOf('R') !== -1 || a[file_d_c].indexOf('S') !== -1 || a[file_d_c].indexOf('T') !== -1 || a[file_d_c].indexOf('U') !== -1 || a[file_d_c].indexOf('V') !== -1 || a[file_d_c].indexOf('W') !== -1 || a[file_d_c].indexOf('X') !== -1 || a[file_d_c].indexOf('Y') !== -1 && note_type[file_d_c] == undefined) {
                            note_type[file_d_c] = "0";
                        } else {
                            note_type[file_d_c] = "1";
                        }
                    }
                }
            }
            musictime_minor_array[file_d_b] = note_time;
            musictype_minor_array[file_d_b] = note_type;
        }
        musictime_main_array[file_d_a] = musictime_minor_array;
        musictype_main_array[file_d_a] = musictype_minor_array;
    }
    //填充休止符
    //段落循环
    for (file_d_a = 0; file_d_a < musictime_main_array.length; file_d_a++) {
        var musictype_track_fixstart = new Array();
        var musictype_track_fixend = new Array();
        //音轨循环
        for (file_d_b = musictime_main_array[file_d_a].length - 1; file_d_b > -1; file_d_b--) {
            var musictype_note_fixstart = new Array();
            var musictype_note_fixend = new Array();
            var file_d_fix = 0;
            //音符循环
            for (file_d_c = 0; file_d_c < musictype_main_array[file_d_a][file_d_b].length; file_d_c++) {
                //非休止符号
                if (musictype_main_array[file_d_a][file_d_b][file_d_c] !== "0") {
                    if (file_d_c !== 0) {
                        musictype_note_fixstart[file_d_fix] = musictime_main_array[file_d_a][file_d_b][file_d_c - 1];
                        musictype_note_fixend[file_d_fix] = musictime_main_array[file_d_a][file_d_b][file_d_c] - 1;
                        file_d_fix++;
                    } else {
                        musictype_note_fixstart[file_d_fix] = 0;
                        musictype_note_fixend[file_d_fix] = musictime_main_array[file_d_a][file_d_b][file_d_c] - 1;
                        file_d_fix++;
                    }
                }
                //如果是休止符号
                //跳过最后音轨检查
                else if (file_d_b !== musictime_main_array[file_d_a].length - 1) {
                    //检查
                    for (file_d_d = 0; file_d_d < musictype_track_fixstart[file_d_b + 1].length; file_d_d++) {
                        if (file_d_c !== 0) {
                            if (musictime_main_array[file_d_a][file_d_b][file_d_c] - 1 >= musictype_track_fixstart[file_d_b + 1][file_d_d] && musictime_main_array[file_d_a][file_d_b][file_d_c] - 1 <= musictype_track_fixend[file_d_b + 1][file_d_d]) {
                                musictype_note_fixstart[file_d_fix] = musictime_main_array[file_d_a][file_d_b][file_d_c - 1];
                                musictype_note_fixend[file_d_fix] = musictime_main_array[file_d_a][file_d_b][file_d_c] - 1;
                                file_d_fix++;
                                musictype_main_array[file_d_a][file_d_b][file_d_c] = "1";
                            }
                        } else {
                            if (musictime_main_array[file_d_a][file_d_b][file_d_c] - 1 >= 0 && musictime_main_array[file_d_a][file_d_b][file_d_c] - 1 <= musictype_track_fixend[file_d_b + 1][file_d_d]) {
                                musictype_note_fixstart[file_d_fix] = 0;
                                musictype_note_fixend[file_d_fix] = musictime_main_array[file_d_a][file_d_b][file_d_c] - 1;
                                file_d_fix++;
                                musictype_main_array[file_d_a][file_d_b][file_d_c] = "1";
                            }
                        }
                    }
                }
            }
            musictype_track_fixstart[file_d_b] = musictype_note_fixstart;
            musictype_track_fixend[file_d_b] = musictype_note_fixend;
        }
    }
    //生成malody note
    time = new Array();
    time_BPM = new Array();
    var note_length = 0, note_rhythm = 0;
    note_number = -1;
    switch (document.getElementById("key").value) {
        case "4k": {
            note_column = 4;
        }
            break
        case "5k": {
            note_column = 5;
        }
            break
        case "6k": {
            note_column = 6;
        }
            break
        case "7k": {
            note_column = 7;
        }
            break
        case "8k": {
            note_column = 8;
        }
            break
        case "9k": {
            note_column = 9;
        }
            break
        case "10k": {
            note_column = 10;
        }
            break
    }
    if (document.getElementById('games').value == "mak") {
        column_initial = Math.random() * note_column;
        column_initial = Math.floor(column_initial);
        column_initial_double = column_initial;
    } else if (document.getElementById('games').value == "mas") {
        column_initial = Math.random() * 256;
        column_initial = Math.floor(column_initial);
        column_initial_double = column_initial;
        note_column = 256;
    }
    var type_2_enable = false, type_3_enable = false, type_5_enable = false, type_6_enable = false, type_7_enable = false, type_8_enable = false, type_9_enable = false, type_10_enable = false;
    //段落
    baseBeats_value = document.getElementById('beats').value.split(",");
    baseBPM_value = document.getElementById('bpm').value.split(";")[1];
    baseBPM_value = baseBPM_value.split(",");
    if (baseBPM_value[baseBPM_value.length - 1] == "") {
        baseBPM_value.splice(baseBPM_value.length - 1, 1);
    }
    //BPM倒放
    if (document.getElementById('reverse').checked == true) {
        baseBPM_value = baseBPM_value.reverse();
    }
    for (file_d_a = 0; file_d_a < musictime_main_array.length; file_d_a++) {
        baseBeats_value[file_d_a] = parseFloat(baseBeats_value[file_d_a]);
        if (file_d_a !== 0) {
            //音轨循环
            for (file_d_b = 0; file_d_b < musictime_main_array[file_d_a].length; file_d_b++) {
                //音符内循环
                for (file_d_c = 0; file_d_c < musictime_main_array[file_d_a][file_d_b].length; file_d_c++) {
                    musictime_main_array[file_d_a][file_d_b][file_d_c] = musictime_main_array[file_d_a][file_d_b][file_d_c] + end_sect;
                }
            }
            if (file_d_b = musictime_main_array[file_d_a].length) {
                end_sect = musictime_main_array[file_d_a][0][musictime_main_array[file_d_a][0].length - 1];
            }
        } else {
            end_sect = musictime_main_array[file_d_a][0][musictime_main_array[file_d_a][0].length - 1];
        }
        //音符
        for (file_d_c = 0; file_d_c < musictime_main_array[file_d_a][0].length; file_d_c++) {
            note_length = musictime_main_array[file_d_a][0][file_d_c - 1];
            if (note_length == undefined) {
                if (file_d_a == 0) {
                    note_length = 0;
                } else {
                    var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                    note_length = musictime_main_array[file_d_a - 1][0][note_back_length];
                }
            }
            var note_length1 = note_length;
            note_rhythm = Math.floor((note_length1) / 32);
            note_divide = note_length - 32 * note_rhythm;
            var beats_contrast;
            if (file_d_c == 0) {
                beat = [note_rhythm, note_divide, 32];
                bpm_value_test = parseFloat(baseBPM_value[file_d_a]);
                time_BPM[file_d_a] = { beat: beat, bpm: bpm_value_test };
            }
            if (musictype_main_array[file_d_a][0][file_d_c] !== "0") {
                if (musictype_main_array[file_d_a][0][file_d_c] == "1" || musictype_main_array[file_d_a][0][file_d_c] == "7_end") {
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                        note_number++;
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        beat = [note_rhythm, note_divide, 32];
                        endbeat = [note_rhythmend, note_divideend, 32];
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                            }
                                break;
                            case "mas": {
                                var seg = [{ beat: [endbeat[0] - beat[0], endbeat[1] - beat[1] + baseBeats_value[file_d_a] * 32, endbeat[2]], x: 0 }];
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                if (musictype_main_array[file_d_a][0][file_d_c] == "7_end") {
                                    if (x < 128) {
                                        seg[0].x = 255 - 32;
                                    } else {
                                        seg[0].x = 32;
                                    }
                                    time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                    console.log(time[note_number])
                                } else {
                                    time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                }
                            }
                                break;
                        }
                    } else {
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array();
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                if (musictype_main_array[file_d_a][0][file_d_c] == "7_end") {
                                    if (x < 128) {
                                        seg[0].x = 255 - 32;
                                    } else {
                                        seg[0].x = 32;
                                    }
                                    time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                } else {
                                    time[note_number] = { beat: beat, x: x, w: 64 };
                                }
                            }
                                break;
                        }
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "2") {
                    type_2_enable = true;
                    beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    note_number++;
                    beat = [note_rhythm, note_divide, 32];
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                        column_initial_double = x;
                    } else {
                        column_note_pos1();
                    }
                    switch (document.getElementById('games').value) {
                        case "mak": {
                            column_note_array();
                        }
                            break;
                        case "mas": {
                            time[note_number] = { beat: beat, x: x, w: 64 };
                        }
                            break;
                    }
                }
                else if (musictype_main_array[file_d_a][0][file_d_c] == "2_end") {
                    type_2_enable = false;
                    beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    note_number++;
                    beat = [note_rhythm, note_divide, 32];
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                        column_initial_double = x;
                    } else {
                        column_note_pos1();
                    }
                    column_note_array()
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "3") {
                    type_3_enable = true;
                    beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    note_number++;
                    beat = [note_rhythm, note_divide, 32];
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                        column_initial_double = x;
                    } else {
                        column_note_pos1();
                    }
                    switch (document.getElementById('games').value) {
                        case "mak": {
                            column_note_array();
                        }
                            break;
                        case "mas": {
                            time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                        }
                            break;
                    }
                }
                else if (musictype_main_array[file_d_a][0][file_d_c] == "3_end") {
                    type_3_enable = false;
                    beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    note_number++;
                    beat = [note_rhythm, note_divide, 32];
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                        column_initial_double = x;
                    } else {
                        column_note_pos1();
                    }
                    switch (document.getElementById('games').value) {
                        case "mak": {
                            column_note_array();
                        }
                            break;
                        case "mas": {
                            time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                        }
                            break;
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "5") {
                    type_5_enable = true;
                    note_length_2 = note_length;
                    beat = [note_rhythm, note_divide, 32];
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "5_end") {
                    type_5_enable = false;
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                    } else {
                        column_note_pos1();
                    }
                    if (document.getElementById('note8').checked == false) {
                        y = x + 2;
                        if (y >= note_column) {
                            y = y - 4;
                        }
                    } else {
                        var double_column = x;
                        do {
                            column_note_pos2();
                        } while (y == double_column);
                    }
                    column_initial_double = y;
                    if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                        note_number++;
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        beat = [note_rhythm, note_divide, 32];
                        endbeat = [note_rhythmend, note_divideend, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                note_number++;
                                time[note_number] = { beat: beat, endbeat: endbeat, column: y };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                note_number++;
                                time[note_number] = { beat: beat, x: x + 60, w: 64, seg: seg };
                            }
                                break;
                        }
                    } else {
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array();
                                note_number++;
                                time[note_number] = { beat: beat, column: y };
                            }
                                break;
                            case "mas": {
                                time[note_number] = { beat: beat, x: x, w: 64 };
                                note_number++;
                                time[note_number] = { beat: beat, x: x + 60, w: 64 };
                            }
                                break;
                        }
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "6") {
                    type_6_enable = true;
                    note_length_2 = note_length;
                    beat = [note_rhythm, note_divide, 32];
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "6_end") {
                    type_6_enable = false;
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    note_number++;
                    note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                    note_rhythmend = Math.floor(note_length2 / 32);
                    note_divideend = note_length2 - 32 * note_rhythmend;
                    beat = [note_rhythm, note_divide, 32];
                    endbeat = [note_rhythmend, note_divideend, 32];
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                        column_initial_double = x;
                    } else {
                        column_note_pos1();
                    }
                    switch (document.getElementById('games').value) {
                        case "mak": {
                            time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                        }
                            break;
                        case "mas": {
                            note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                            note_rhythmend = Math.floor(note_length2 / 32);
                            note_divideend = note_length2 - 32 * note_rhythmend;
                            var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                            if (seg[0].beat[1] < 0) {
                                seg[0].beat[0] = seg[0].beat[0] - 1;
                                seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                            }
                            time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                        }
                            break;
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "7") {
                    type_7_enable = true;
                    note_length_2 = note_length;
                    beat = [note_rhythm, note_divide, 32];
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "8") {
                    type_8_enable = true;
                    note_length_2 = note_length;
                    beat = [note_rhythm, note_divide, 32];
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "8_end") {
                    type_8_enable = false;
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                    } else {
                        column_note_pos1();
                    }
                    if (document.getElementById('note8').checked == false) {
                        y = x + 2;
                        if (y >= note_column) {
                            y = y - 4;
                        }
                    } else {
                        var double_column = x;
                        do {
                            column_note_pos2();
                        } while (y == double_column);
                    }
                    column_initial_double = y;
                    if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                        note_number++;
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        beat = [note_rhythm, note_divide, 32];
                        endbeat = [note_rhythmend, note_divideend, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                note_number++;
                                time[note_number] = { beat: beat, endbeat: endbeat, column: y };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [];
                                if (Math.random() / 2 < 0.5) {
                                    x = 31;
                                    y = x;
                                } else {
                                    x = 223;
                                    y = x;
                                }
                                var seg_i = 0; seg_num = note_rhythmend - beat[0] - 1;
                                if (seg_num >= 1) {
                                    for (i = 0; i > seg_num; i++) {
                                        if (x > 127) {
                                            seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 31 };
                                            x = 223;
                                        } else {
                                            seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 223 };
                                            x = 31;
                                        }
                                        seg_i++;
                                    }
                                    if (x > 127) {
                                        seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                    } else {
                                        seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                    }
                                } else {
                                    if (x > 127) {
                                        seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                    } else {
                                        seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                    }
                                }
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: y, w: 64, seg: seg };
                            }
                                break;
                        }
                    } else {
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array()
                                note_number++;
                                time[note_number] = { beat: beat, column: y };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [];
                                //var seg=[{beat:[note_rhythmend-beat[0],note_divideend-beat[1],beat[2]],x:0}];
                                if (Math.random() / 2 < 0.5) {
                                    x = 31;
                                } else {
                                    x = 223;
                                }
                                if (x > 127) {
                                    seg[0] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                } else {
                                    seg[0] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                }
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                            }
                                break;
                        }
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "9") {
                    type_9_enable = true;
                    note_length_2 = note_length;
                    beat = [note_rhythm, note_divide, 32];
                    var accompaniment_length = note_length;
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "9_end") {
                    type_9_enable = false;
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    note_number++;
                    if (document.getElementById('continue').checked == false) {
                        if (document.getElementById('note8').checked == true) {
                            if (document.getElementById('continue').checked == false) {
                                do {
                                    column_note_pos1();
                                } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                                column_initial = x;
                                column_initial_double = x;
                            } else {
                                column_note_pos1();
                            }
                        } else {
                            x = 0;
                            if (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2) {
                                x = note_column - 1;
                            }
                            column_initial = x;
                            column_initial_double = x;
                        }
                    } else {
                        column_note_pos1();
                    }
                    if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        beat = [note_rhythm, note_divide, 32];
                        endbeat = [note_rhythmend, note_divideend, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [];
                                if (Math.random() / 2 < 0.5) {
                                    x = 31;
                                } else {
                                    x = 223;
                                }
                                if (x > 127) {
                                    seg[0] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                } else {
                                    seg[0] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                }
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                            }
                                break;
                        }
                    } else {
                        beat = [note_rhythm, note_divide, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array();
                            }
                                break;
                            case "mas": {
                                if (Math.random() / 2 < 0.5) {
                                    x = 31;
                                } else {
                                    x = 223;
                                }
                                time[note_number] = { beat: beat, x: x, w: 64 };
                            }
                                break;
                        }
                    }
                    if (musictime_main_array[file_d_a].length - 1 >= note_column) {
                        accompaniment_note_num = note_column;
                    } else {
                        accompaniment_note_num = musictime_main_array[file_d_a].length;
                    }
                    //伴奏音轨检测
                    for (file_d_e = 1; file_d_e < accompaniment_note_num; file_d_e++) {
                        column_initial_accompaniment = note_column - 2;
                        //音符内循环
                        for (file_d_f = 0; file_d_f < musictime_main_array[file_d_a][file_d_e].length; file_d_f++) {
                            note_length_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f - 1];
                            if (note_length_accompaniment == undefined) {
                                if (file_d_a == 0) {
                                    note_length_accompaniment = 0;
                                } else {
                                    var note_back_length_accompaniment = musictime_main_array[file_d_a - 1][file_d_e].length - 1;
                                    note_length_accompaniment = musictime_main_array[file_d_a - 1][file_d_e][note_back_length_accompaniment];
                                }
                            }
                            var note_length1_accompaniment = note_length_accompaniment;
                            note_rhythm_accompaniment = Math.floor((note_length1_accompaniment) / 32);
                            note_divide_accompaniment = note_length_accompaniment - 32 * note_rhythm_accompaniment;
                            if (note_length_accompaniment >= note_length && note_length_accompaniment < musictime_main_array[file_d_a][0][file_d_c]) {
                                if (musictime_main_array[file_d_a][file_d_e][file_d_f - 1] !== undefined) {
                                    beats_contrast_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f] - musictime_main_array[file_d_a][file_d_e][file_d_f - 1];
                                } else {
                                    if (file_d_a !== 0) {
                                        var note_back_length_accompaniment = musictime_main_array[file_d_a - 1][file_d_e].length - 1;
                                        beats_contrast_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f] - musictime_main_array[file_d_a - 1][file_d_e][note_back_length_accompaniment];
                                    } else {
                                        beats_contrast_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f];
                                    }
                                }
                                if (musictype_main_array[file_d_a][file_d_e][file_d_f] !== "0") {
                                    note_number++;
                                    if (file_d_e == note_column - 1) {
                                        if (x == 0) {
                                            z = 1;
                                        } else {
                                            z = note_column - 2;
                                        }
                                    } else {
                                        if (document.getElementById('continue').checked == false) {
                                            note_column_accompaniment = note_column - 2;
                                            if (x == 0) {
                                                do {
                                                    z = Math.random() * note_column_accompaniment;
                                                    z = Math.floor(z);
                                                } while (z == column_initial_accompaniment);
                                                column_initial_accompaniment = z;
                                                z = z + 2;
                                            } else {
                                                do {
                                                    z = Math.random() * note_column_accompaniment;
                                                    z = Math.floor(z);
                                                } while (z == column_initial_accompaniment);
                                                column_initial_accompaniment = z;
                                            }
                                        } else {
                                            note_column_accompaniment = note_column - 2;
                                            if (x == 0) {
                                                z = Math.random() * note_column_accompaniment;
                                                z = Math.floor(z);
                                                z = z + 2;
                                            } else {
                                                z = Math.random() * note_column_accompaniment;
                                                z = Math.floor(z);
                                            }
                                        }
                                    }
                                    if (beats_contrast_accompaniment > baseBeats_value[file_d_a] * 32) {
                                        note_length2_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f] - baseBeats_value[file_d_a] * 32;
                                        note_rhythmend_accompaniment = Math.floor(note_length2_accompaniment / 32);
                                        note_divideend_accompaniment = note_length2_accompaniment - 32 * note_rhythmend_accompaniment;
                                        beat_accompaniment = [note_rhythm_accompaniment, note_divide_accompaniment, 32];
                                        endbeat_accompaniment = [note_rhythmend_accompaniment, note_divideend_accompaniment, 32];
                                        time[note_number] = { beat: beat_accompaniment, endbeat: endbeat_accompaniment, column: z };
                                    } else {
                                        beat_accompaniment = [note_rhythm_accompaniment, note_divide_accompaniment, 32];
                                        time[note_number] = { beat: beat_accompaniment, column: z };
                                    }
                                }
                            }
                        }
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "10") {
                    type_10_enable = true;
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                    } else {
                        column_note_pos1();
                    }
                    if (document.getElementById('note8').checked == false) {
                        y = x + 2;
                        if (y >= note_column) {
                            y = y - 4;
                        }
                    } else {
                        var double_column = x;
                        do {
                            column_note_pos2();
                        } while (y == double_column);
                    }
                    column_initial_double = y;
                    if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                        note_number++;
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        beat = [note_rhythm, note_divide, 32];
                        endbeat = [note_rhythmend, note_divideend, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                note_number++;
                                time[note_number] = { beat: beat, endbeat: endbeat, column: y };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: 127, w: 256, seg: seg };
                            }
                                break;
                        }
                    } else {
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        column_note_array()
                        note_number++;
                        time[note_number] = { beat: beat, column: y };
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "10_end") {
                    type_10_enable = false;
                    if (musictime_main_array[file_d_a][0][file_d_c - 1] !== undefined) {
                        beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a][0][file_d_c - 1];
                    } else {
                        if (file_d_a !== 0) {
                            var note_back_length = musictime_main_array[file_d_a - 1][0].length - 1;
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c] - musictime_main_array[file_d_a - 1][0][note_back_length];
                        } else {
                            beats_contrast = musictime_main_array[file_d_a][0][file_d_c];
                        }
                    }
                    if (document.getElementById('continue').checked == false) {
                        do {
                            column_note_pos1();
                        } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                        column_initial = x;
                    } else {
                        column_note_pos1();
                    }
                    if (document.getElementById('note8').checked == false) {
                        y = x + 2;
                        if (y >= note_column) {
                            y = y - 4;
                        }
                    } else {
                        var double_column = x;
                        do {
                            column_note_pos2();
                        } while (y == double_column);
                    }
                    column_initial_double = y;
                    if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                        note_number++;
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        beat = [note_rhythm, note_divide, 32];
                        endbeat = [note_rhythmend, note_divideend, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                note_number++;
                                time[note_number] = { beat: beat, endbeat: endbeat, column: y };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: 127, w: 256, seg: seg };
                            }
                                break;
                        }
                    } else {
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array()
                                note_number++;
                                time[note_number] = { beat: beat, column: y };
                            }
                                break;
                            case "mas": {
                                note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                note_rhythmend = Math.floor(note_length2 / 32);
                                note_divideend = note_length2 - 32 * note_rhythmend;
                                var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                if (seg[0].beat[1] < 0) {
                                    seg[0].beat[0] = seg[0].beat[0] - 1;
                                    seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                }
                                time[note_number] = { beat: beat, x: 127, w: 256, seg: seg };
                            }
                                break;
                        }
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "4") {
                    if (type_3_enable == true) {
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array();
                            }
                                break;
                            case "mas": {
                                time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                            }
                                break;
                        }
                    } else if (type_10_enable == true) {
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                            note_number++;
                            beat = [note_rhythm, note_divide, 32];
                            note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                            note_rhythmend = Math.floor(note_length2 / 32);
                            note_divideend = note_length2 - 32 * note_rhythmend;
                            endbeat = [note_rhythmend, note_divideend, 32];
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                }
                                    break;
                                case "mas": {
                                    time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                                }
                                    break;
                            }
                        } else {
                            note_number++;
                            beat = [note_rhythm, note_divide, 32];
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    column_note_array();
                                }
                                    break;
                                case "mas": {
                                    time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                                }
                                    break;
                            }
                        }
                    }
                } else if (musictype_main_array[file_d_a][0][file_d_c] == "end") {
                    if (type_2_enable == true) {
                        type_2_enable = false;
                    } else if (type_3_enable == true) {
                        type_3_enable = false;
                        note_number++;
                        beat = [note_rhythm, note_divide, 32];
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                column_note_array();
                            }
                                break;
                            case "mas": {
                                time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                            }
                                break;
                        }
                    } else if (type_5_enable == true || type_8_enable == true) {
                        if (document.getElementById('continue').checked == false) {
                            do {
                                column_note_pos1();
                            } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                            column_initial = x;
                        } else {
                            column_note_pos1();
                        }
                        if (document.getElementById('note8').checked == false) {
                            y = x + 2;
                            if (y >= note_column) {
                                y = y - 4;
                            }
                        } else {
                            var double_column = x;
                            do {
                                column_note_pos2();
                            } while (y == double_column);
                        }
                        column_initial_double = y;
                        beats_contrast = note_length - note_length_2;
                        if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                            note_number++;
                            note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                            note_rhythmend = Math.floor(note_length2 / 32);
                            note_divideend = note_length2 - 32 * note_rhythmend;
                            endbeat = [note_rhythmend, note_divideend, 32];
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                    note_number++;
                                    time[note_number] = { beat: beat, endbeat: endbeat, column: y };
                                }
                                    break;
                                case "mas": {
                                    if (type_8_enable == true) {
                                        note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                        note_rhythmend = Math.floor(note_length2 / 32);
                                        note_divideend = note_length2 - 32 * note_rhythmend;
                                        var seg = [];
                                        if (Math.random() / 2 < 0.5) {
                                            x = 31;
                                            y = x;
                                        } else {
                                            x = 223;
                                            y = x;
                                        }
                                        var seg_i = 0; seg_num = note_rhythmend - beat[0] - 1;
                                        if (seg_num >= 1) {
                                            for (i = 0; i > seg_num; i++) {
                                                if (x > 127) {
                                                    seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 31 };
                                                    x = 223;
                                                } else {
                                                    seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 223 };
                                                    x = 31;
                                                }
                                                seg_i++;
                                            }
                                            if (x > 127) {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                            } else {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                            }
                                        } else {
                                            if (x > 127) {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                            } else {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                            }
                                        }
                                        if (seg[0].beat[1] < 0) {
                                            seg[0].beat[0] = seg[0].beat[0] - 1;
                                            seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                        }
                                        time[note_number] = { beat: beat, x: y, w: 64, seg: seg };
                                    } else {
                                        note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                        note_rhythmend = Math.floor(note_length2 / 32);
                                        note_divideend = note_length2 - 32 * note_rhythmend;
                                        var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                        if (seg[0].beat[1] < 0) {
                                            seg[0].beat[0] = seg[0].beat[0] - 1;
                                            seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                        }
                                        time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                        note_number++;
                                        time[note_number] = { beat: beat, x: x + 60, w: 64, seg: seg };
                                    }
                                }
                                    break;
                            }
                        } else {
                            note_number++;
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    time[note_number] = { beat: beat, column: x };
                                    note_number++;
                                    time[note_number] = { beat: beat, column: y };
                                }
                                    break;
                                case "mas": {
                                    if (type_8_enable == true) {
                                        note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                        note_rhythmend = Math.floor(note_length2 / 32);
                                        note_divideend = note_length2 - 32 * note_rhythmend;
                                        var seg = [];
                                        if (Math.random() / 2 < 0.5) {
                                            x = 31;
                                            y = x;
                                        } else {
                                            x = 223;
                                            y = x;
                                        }
                                        var seg_i = 0; seg_num = note_rhythmend - beat[0] - 1;
                                        if (seg_num >= 1) {
                                            for (i = 0; i > seg_num; i++) {
                                                if (x > 127) {
                                                    seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 31 };
                                                    x = 223;
                                                } else {
                                                    seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 223 };
                                                    x = 31;
                                                }
                                                seg_i++;
                                            }
                                            if (x > 127) {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                            } else {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                            }
                                        } else {
                                            if (x > 127) {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                            } else {
                                                seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                            }
                                        }
                                        if (seg[0].beat[1] < 0) {
                                            seg[0].beat[0] = seg[0].beat[0] - 1;
                                            seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                        }
                                        time[note_number] = { beat: beat, x: y, w: 64, seg: seg };
                                    } else {
                                        time[note_number] = { beat: beat, x: x, w: 64 };
                                        note_number++;
                                        time[note_number] = { beat: beat, x: x + 60, w: 64 };
                                    }
                                }
                                    break;
                            }
                        }
                        if (type_5_enable == true) {
                            type_5_enable = false;
                        } else {
                            type_8_enable = false;
                        }
                    } else if (type_6_enable == true || type_7_enable == true) {
                        note_number++;
                        note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                        note_rhythmend = Math.floor(note_length2 / 32);
                        note_divideend = note_length2 - 32 * note_rhythmend;
                        endbeat = [note_rhythmend, note_divideend, 32];
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        switch (document.getElementById('games').value) {
                            case "mak": {
                                time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                note_number++;
                                time[note_number] = { beat: beat, endbeat: endbeat, column: y };
                            }
                                break;
                            case "mas": {
                                if (type_7_enable == true) {
                                    note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                    note_rhythmend = Math.floor(note_length2 / 32);
                                    note_divideend = note_length2 - 32 * note_rhythmend;
                                    var seg = [];
                                    if (Math.random() / 2 < 0.5) {
                                        x = 31;
                                        y = x;
                                    } else {
                                        x = 223;
                                        y = x;
                                    }
                                    var seg_i = 0; seg_num = note_rhythmend - beat[0] - 1;
                                    if (seg_num >= 1) {
                                        for (i = 0; i > seg_num; i++) {
                                            if (x > 127) {
                                                seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 31 };
                                                x = 223;
                                            } else {
                                                seg[seg_i] = { beat: [seg_i, 0, beat[2]], x: 223 };
                                                x = 31;
                                            }
                                            seg_i++;
                                        }
                                        if (x > 127) {
                                            seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                        } else {
                                            seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                        }
                                    } else {
                                        if (x > 127) {
                                            seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 31 };
                                        } else {
                                            seg[seg_i] = { beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 223 };
                                        }
                                    }
                                    if (seg[0].beat[1] < 0) {
                                        seg[0].beat[0] = seg[0].beat[0] - 1;
                                        seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                    }
                                    time[note_number] = { beat: beat, x: y, w: 64, seg: seg };
                                } else {
                                    note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                    note_rhythmend = Math.floor(note_length2 / 32);
                                    note_divideend = note_length2 - 32 * note_rhythmend;
                                    var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                    if (seg[0].beat[1] < 0) {
                                        seg[0].beat[0] = seg[0].beat[0] - 1;
                                        seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                    }
                                    time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                }
                            }
                                break;
                        }
                        if (type_6_enable == true) {
                            type_6_enable = false;
                        } else {
                            type_7_enable = false;
                        }
                    } else if (type_9_enable == true) {
                        type_9_enable = false;
                        if (document.getElementById('continue').checked == false) {
                            if (document.getElementById('note8').checked == true) {
                                if (document.getElementById('continue').checked == false) {
                                    do {
                                        column_note_pos1();
                                    } while (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2);
                                    column_initial = x;
                                    column_initial_double = x;
                                } else {
                                    column_note_pos1();
                                }
                            } else {
                                x = 0;
                                if (x == column_initial || x == column_initial_double || x == column_initial - 2 || x == column_initial + 2) {
                                    x = note_column - 1;
                                }
                                column_initial = x;
                                column_initial_double = x;
                            }
                        } else {
                            column_note_pos1();
                        }
                        beats_contrast = note_length - note_length_2;
                        if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                            note_number++;
                            note_length2 = musictime_main_array[file_d_a][0][file_d_c + 1] - baseBeats_value[file_d_a] * 32;
                            note_rhythmend = Math.floor(note_length2 / 32);
                            note_divideend = note_length2 - 32 * note_rhythmend;
                            endbeat = [note_rhythmend, note_divideend, 32];
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                }
                                    break;
                                case "mas": {
                                    note_length2 = musictime_main_array[file_d_a][0][file_d_c];
                                    note_rhythmend = Math.floor(note_length2 / 32);
                                    note_divideend = note_length2 - 32 * note_rhythmend;
                                    var seg = [{ beat: [note_rhythmend - beat[0], note_divideend - beat[1], beat[2]], x: 0 }];
                                    if (seg[0].beat[1] < 0) {
                                        seg[0].beat[0] = seg[0].beat[0] - 1;
                                        seg[0].beat[1] = seg[0].beat[1] + seg[0].beat[2];
                                    }
                                    time[note_number] = { beat: beat, x: x, w: 64, seg: seg };
                                }
                                    break;
                            }
                        } else {
                            note_number++;
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    column_note_array();
                                }
                                    break;
                                case "mas": {
                                    time[note_number] = { beat: beat, x: x, w: 64 };
                                }
                                    break;
                            }
                        }
                        if (musictime_main_array[file_d_a].length - 1 >= note_column) {
                            accompaniment_note_num = note_column;
                        } else {
                            accompaniment_note_num = musictime_main_array[file_d_a].length;
                        }
                        //伴奏音轨检测
                        for (file_d_e = 1; file_d_e < accompaniment_note_num; file_d_e++) {
                            column_initial_accompaniment = note_column - 2;
                            //音符内循环
                            for (file_d_f = 0; file_d_f < musictime_main_array[file_d_a][file_d_e].length; file_d_f++) {
                                note_length_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f - 1];
                                if (note_length_accompaniment == undefined) {
                                    if (file_d_a == 0) {
                                        note_length_accompaniment = 0;
                                    } else {
                                        var note_back_length_accompaniment = musictime_main_array[file_d_a - 1][file_d_e].length - 1;
                                        note_length_accompaniment = musictime_main_array[file_d_a - 1][file_d_e][note_back_length_accompaniment];
                                    }
                                }
                                var note_length1_accompaniment = note_length_accompaniment;
                                note_rhythm_accompaniment = Math.floor((note_length1_accompaniment) / 32);
                                note_divide_accompaniment = note_length_accompaniment - 32 * note_rhythm_accompaniment;
                                if (note_length_accompaniment >= accompaniment_length && note_length_accompaniment < musictime_main_array[file_d_a][0][file_d_c]) {
                                    if (musictime_main_array[file_d_a][file_d_e][file_d_f - 1] !== undefined) {
                                        beats_contrast_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f] - musictime_main_array[file_d_a][file_d_e][file_d_f - 1];
                                    } else {
                                        if (file_d_a !== 0) {
                                            var note_back_length_accompaniment = musictime_main_array[file_d_a - 1][file_d_e].length - 1;
                                            beats_contrast_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f] - musictime_main_array[file_d_a - 1][file_d_e][note_back_length_accompaniment];
                                        } else {
                                            beats_contrast_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f];
                                        }
                                    }
                                    if (musictype_main_array[file_d_a][file_d_e][file_d_f] !== "0") {
                                        note_number++;
                                        if (file_d_e == note_column - 1) {
                                            if (x == 0) {
                                                z = 1;
                                            } else {
                                                z = note_column - 2;
                                            }
                                        } else {
                                            if (document.getElementById('continue').checked == false) {
                                                note_column_accompaniment = note_column - 2;
                                                if (x == 0) {
                                                    do {
                                                        z = Math.random() * note_column_accompaniment;
                                                        z = Math.floor(z);
                                                    } while (z == column_initial_accompaniment);
                                                    column_initial_accompaniment = z;
                                                    z = z + 2;
                                                } else {
                                                    do {
                                                        z = Math.random() * note_column_accompaniment;
                                                        z = Math.floor(z);
                                                    } while (z == column_initial_accompaniment);
                                                    column_initial_accompaniment = z;
                                                }
                                            } else {
                                                note_column_accompaniment = note_column - 2;
                                                if (x == 0) {
                                                    z = Math.random() * note_column_accompaniment;
                                                    z = Math.floor(z);
                                                    z = z + 2;
                                                } else {
                                                    z = Math.random() * note_column_accompaniment;
                                                    z = Math.floor(z);
                                                }
                                            }
                                        }
                                        if (beats_contrast_accompaniment > baseBeats_value[file_d_a] * 32) {
                                            note_length2_accompaniment = musictime_main_array[file_d_a][file_d_e][file_d_f] - baseBeats_value[file_d_a] * 32;
                                            note_rhythmend_accompaniment = Math.floor(note_length2_accompaniment / 32);
                                            note_divideend_accompaniment = note_length2_accompaniment - 32 * note_rhythmend_accompaniment;
                                            beat_accompaniment = [note_rhythm_accompaniment, note_divide_accompaniment, 32];
                                            endbeat_accompaniment = [note_rhythmend_accompaniment, note_divideend_accompaniment, 32];
                                            time[note_number] = { beat: beat_accompaniment, endbeat: endbeat_accompaniment, column: z };
                                        } else {
                                            beat_accompaniment = [note_rhythm_accompaniment, note_divide_accompaniment, 32];
                                            time[note_number] = { beat: beat_accompaniment, column: z };
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        type_10_enable = false;
                        if (document.getElementById('continue').checked == false) {
                            column_note_pos();
                        } else {
                            column_note_pos1();
                        }
                        if (beats_contrast > baseBeats_value[file_d_a] * 32) {
                            note_number++;
                            beat = [note_rhythm, note_divide, 32];
                            note_length2 = musictime_main_array[file_d_a][0][file_d_c] - baseBeats_value[file_d_a] * 32;
                            note_rhythmend = Math.floor(note_length2 / 32);
                            note_divideend = note_length2 - 32 * note_rhythmend;
                            endbeat = [note_rhythmend, note_divideend, 32];
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    time[note_number] = { beat: beat, endbeat: endbeat, column: x };
                                }
                                    break;
                                case "mas": {
                                    time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                                }
                                    break;
                            }
                        } else {
                            note_number++;
                            beat = [note_rhythm, note_divide, 32];
                            switch (document.getElementById('games').value) {
                                case "mak": {
                                    column_note_array();
                                }
                                    break;
                                case "mas": {
                                    time[note_number] = { beat: beat, x: x, w: 64, type: 4 };
                                }
                                    break;
                            }
                        }
                    }
                }
            }
        }
    }
    //测试
    for (file_d_b = 0; file_d_b < soundtest.length; file_d_b++) {
        filesound = soundtest[file_d_b].join(',');
        filesound = filesound + ",";
        Function1();
    }
    switch (document.getElementById("games").value) {
        case "mak":
            malody_mode = 0;
            mode_ext = { column: note_column, bar_begin: 0 };
            break;
        case "mas":
            malody_mode = 7;
            mode_ext = { bar_begin: 0 };
            break;
    }
    if (typeof (json_music_name) == "undefined") {
        json_music_name = document.getElementById("file").files[0].name;
    }
    //加速度检测并填写(加速度单位=块速度/秒)
    if (document.getElementById("acc").value !== "") {
        ChallengeAcc = parseFloat(document.getElementById("acc").value);
        ChallengeAcc = ChallengeAcc * 60 * parseFloat(document.getElementById("beats").value.split(",")[0]);
        ChallengeBPM = time_BPM[0].bpm;
        ChallengeBPMEnd = musictime_main_array[musictime_main_array.length - 1][0][musictime_main_array[musictime_main_array.length - 1][0].length - 1] * ChallengeBPM;
        var acc_num = 1;
        ChallengeAccDiv = 1 / ChallengeAcc;
        //对不同基础节拍的拍子速度控制
        var NoteQualBeats = new Array(), NoteQualBeatsNum = 0;
        for (i = 1; i < musictime_main_array.length; i++) {
            if (document.getElementById("beats").value.split(",")[i] !== document.getElementById("beats").value.split(",")[0]) {
                NoteQualBeats[NoteQualBeatsNum] = [musictime_main_array[i - 1][0][musictime_main_array[i - 1][0].length - 1] * ChallengeBPM, musictime_main_array[i][0][musictime_main_array[i][0].length - 1] * ChallengeBPM, parseFloat(document.getElementById("beats").value.split(",")[i]) / parseFloat(document.getElementById("beats").value.split(",")[0])];
                NoteQualBeatsNum++;
            }
        }
        var NoteQualBeatsNum = 0;
        do {
            if (NoteQualBeats.length !== 0) {
                if (NoteQualBeats[NoteQualBeatsNum][0] <= ChallengeBPM * 32 * ChallengeAccDiv * acc_num && NoteQualBeats[NoteQualBeatsNum][1] >= ChallengeBPM * 32 * ChallengeAccDiv * acc_num) {
                    time_BPM[acc_num] = { beat: [0, Math.ceil(ChallengeBPM * 32 * ChallengeAccDiv * acc_num), 32 * ChallengeBPM], bpm: ChallengeBPM + ChallengeAcc * acc_num * NoteQualBeats[NoteQualBeatsNum][2] };
                } else {
                    if (ChallengeBPM * 32 * ChallengeAccDiv * acc_num >= NoteQualBeats[NoteQualBeatsNum][1]) {
                        NoteQualBeatsNum++;
                        if (NoteQualBeatsNum >= NoteQualBeats.length) {
                            NoteQualBeatsNum = NoteQualBeats.length - 1;
                        }
                    }
                    time_BPM[acc_num] = { beat: [0, Math.ceil(ChallengeBPM * 32 * ChallengeAccDiv * acc_num), 32 * ChallengeBPM], bpm: ChallengeBPM + ChallengeAcc * acc_num };
                }
            } else {
                time_BPM[acc_num] = { beat: [0, Math.ceil(ChallengeBPM * 32 * ChallengeAccDiv * acc_num), 32 * ChallengeBPM], bpm: ChallengeBPM + ChallengeAcc * acc_num };
            }
            acc_num++
        } while (ChallengeBPM * 32 * ChallengeAccDiv * acc_num < ChallengeBPMEnd);
        time_BPM[0] = { beat: [0, 0, 32 * ChallengeBPM], bpm: ChallengeBPM };
        for (i = 0; i < time_BPM.length; i++) {
            if (time_BPM[i].beat[1] >= time_BPM[i].beat[2]) {
                time_BPM[i].beat[0] = Math.floor(time_BPM[i].beat[1] / time_BPM[i].beat[2]);
                time_BPM[i].beat[1] = time_BPM[i].beat[1] - time_BPM[i].beat[0] * time_BPM[i].beat[2];
            }
        }
    }
    malody_json_mc = { meta: { $ver: 0, creator: "Piano Tiles Chart Converter Tool", background: "", video: "", version: "Piano Tiles Chart Converter Tool", preview: 0, id: 0, mode: malody_mode, time: Date.now(), song: { title: json_music_name, titleorg: json_music_name, artist: "Piano Tiles Chart Converter Tool", artistorg: "Piano Tiles Chart Converter Tool", id: 0 }, mode_ext: mode_ext }, time: time_BPM, effect: [], note: time, extra: { test: { divide: 4, speed: 100, save: 0, lock: 0, edit_mode: 0 } } };
    document.getElementById('result').value = JSON.stringify(malody_json_mc);
}
function Function2() {
    if (document.getElementById('notewidth').value == "") {
        document.getElementById('notewidth').value = "64";
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你没有填写音符宽度，程序使用默认值转换。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    }
    document.getElementById('progress').style.display = "inline"
    document.getElementById('progress').style.animation = 'warning_4 0.1s';
    setTimeout(function () { document.getElementById('progress3').style.display = 'inline'; }, 100);
    document.getElementById('progress').style.width = '60%';
    document.getElementById('progress').style.height = '20px';
    document.getElementById('progress').style.left = '20%';
    timerstart = true;
    timer();
    file = document.getElementById("file").files[0];
    if (file) {
        //检测是否为文件输入
        var reader = new FileReader();
        reader.readAsText(file, "utf-8");
        reader.onload = function () {
            file_a = this.result;
            file_a = file_a.toString();
            //midi文件导入
            //midi读写参考lchzh3473的midi转json脚本
            if (file_a.indexOf("MThd") > -1) {
                document.getElementById("input").value = "开始！\nMIDI文件转换中……";
                midifile = document.getElementById("file").files[0];
                midifile_a = new FileReader();
                midifile_a.readAsBinaryString(midifile);
                midifile_a.onload = function () {
                    var midi_MThd = "";
                    midifile_b = this.result;
                    midifile_b = midifile_b.split("");
                    for (i = 0; i < 4; i++) {
                        midi_MThd += midifile_b.shift()
                    }
                    if (midi_MThd != "MThd") {
                        lock();
                        setTimeout(function () {
                            warning.innerHTML = "<b>你打开的MIDI文件无效，请检查文件能否正常播放。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                            document.getElementById("input").value = document.getElementById("input").value + "\n失败，无效的MIDI文件！"
                            if (zh_choose == "t") {
                                zh_tran('t');
                            }
                        }, 100);
                    } else {
                        var MidiEventArray = new Array, MidiEventArrayNum = 0;
                        for (i = 0; i < midifile_b.length; i++) {
                            midifile_b[i] = 0 + midifile_b[i].charCodeAt().toString(16)
                        }
                        midifile_b = midifile_b.join();
                        midifile_b = midifile_b.replace(/0+([0-f]{2})/g, "$1");
                        midifile_b = midifile_b.split(",");
                        var midi_format = "";
                        for (i = 0; i < 4; i++) {
                            midi_format += midifile_b.shift()
                        }
                        midi_format_test = parseInt(midi_format, 16);
                        if (midi_format_test != 6) {
                            lock();
                            setTimeout(function () {
                                warning.innerHTML = "<b>MIDI头块数据区无法读取，错误代码：" + midi_format + "。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                                document.getElementById("input").value = document.getElementById("input").value + "\n失败，不受支持的MIDI！错误代码：" + midi_format;
                                if (zh_choose == "t") {
                                    zh_tran('t');
                                }
                            }, 100);
                        } else {
                            //不检测midi报告的音轨数量，以MTrk出现次数检测
                            for (i = 0; i < 4; i++) {
                                midifile_b.shift();
                            }
                            var MidiBeatTest = "";
                            //时间格式(读取节拍的ticks或smpte)
                            for (i = 0; i < midi_format_test - 4; i++) {
                                MidiBeatTest += midifile_b.shift()
                            }
                            MidiBeatTest = parseInt(MidiBeatTest, 16);
                            var midi_MTrk = "";
                            for (i = 0; i < 4; i++) {
                                midi_MTrk += midifile_b.shift();
                            }
                            var MTrkNumberTest = 0;
                            if (midi_MTrk != "4d54726b") {
                                lock();
                                setTimeout(function () {
                                    warning.innerHTML = "<b>MIDI音轨内容无法读取,请检查文件是否能正常播放。错误代码：" + MidiMTrk + "。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                                    document.getElementById("input").value = document.getElementById("input").value + "\n失败，MIDI音轨内容无法读取！错误代码：" + MidiMTrk;
                                    if (zh_choose == "t") {
                                        zh_tran('t');
                                    }
                                }, 100);
                            } else {
                                document.getElementById("input").value = document.getElementById("input").value + "\n读取第 " + MTrkNumberTest + " 个音轨数据……";
                                MTrkNumberTest++;
                                //获取音轨字节数量
                                var MidiMTrkLength = "";
                                for (i = 0; i < 4; i++) {
                                    MidiMTrkLength += midifile_b.shift();
                                }
                                MidiMTrkLength = parseInt(MidiMTrkLength, 16);
                                //获取MIDI事件
                                MidiEvent = new Array();
                                for (i = 0; i < MidiMTrkLength; i++) {
                                    MidiEvent[i] = midifile_b[i].toUpperCase();
                                }
                                midifile_b.splice(0, MidiMTrkLength);
                                let type, MidiEventDex = 0;
                                var MidiEventType, tick;
                                console.log(MidiEvent);
                                /*
                                while (MidiEventDex < MidiEvent.length) {
                                    tick = MidiEvent[0];
                                    MidiEventType = MidiEvent[1];
                                    MidiEventTypeHead = MidiEventType.split("");
                                    switch (MidiEventTypeHead[0]) {
                                        case "8":
                                            //松开音符
                                            break;
                                        case "9":
                                            //按下音符
                                            break;
                                        case "A":
                                            //触后音符
                                            break;
                                        case "B":
                                            //控制器
                                            switch (MidiEvent[2]) {
                                                case "00":
                                                    //音色库选择器
                                                    break;
                                                case "01":
                                                    //颤音粗调
                                                    break;
                                                case "02":
                                                    //呼吸粗调
                                                    break;
                                                case "04":
                                                    //踏板粗调
                                                    break;
                                                case "05":
                                                    //连滑音粗调
                                                    break;
                                                case "06":
                                                    //高位元组数据输入
                                                    break;
                                                case "07":
                                                    //主音量粗调
                                                    MidiVolume = MidiEvent[3];
                                                    for (i = 0; i < 4; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "BX07", dexdata: MidiVolume };
                                                    MidiEventArrayNum++;
                                                    MidiEventDex +=4;
                                                    break;
                                                case "08":
                                                    //平衡控制粗调
                                                    break;
                                                case "0A":
                                                    //声像调整粗调
                                                    break;
                                                case "0B":
                                                    //情绪控制粗调
                                                    break;
                                                case "10":
                                                case "11":
                                                case "12":
                                                case "13":
                                                case "14":
                                                    //一般控制器(0-4)
	
                                                    break;
                                                case "20":
                                                    //插口选择
                                                    break;
                                                case "21":
                                                    //颤音微调
                                                    break;
                                                case "22":
                                                    //呼吸微调
                                                    break;
                                                case "24":
                                                    //踏板微调
                                                    break;
                                                case "25":
                                                    //连滑音微调
                                                    break;
                                                case "26":
                                                    //低位元组数据输入
                                                    break;
                                                case "27":
                                                    //主音量微调
                                                    break;
                                                case "28":
                                                    //平衡控制微调
                                                    break;
                                                case "2A":
                                                    //声像调整微调
                                                    break;
                                                case "2B":
                                                    //情绪控制微调
                                                    break;
                                                case "2C":
                                                    //效果FX控制1
                                                    break;
                                                case "2D":
                                                    //效果FX控制2
                                                    break;
                                                case "40":
                                                    //延音踏板1
                                                    break;
                                                case "41":
                                                    //滑音
                                                    break;
                                                case "42":
                                                    //持续音
                                                    break;
                                                case "43":
                                                    //弱音踏板
                                                    break;
                                                case "44":
                                                    //连滑音踏板控制器
                                                    break;
                                                case "45":
                                                    //延音踏板2
                                                    break;
                                                case "46":
                                                    //变调
                                                    break;
                                                case "47":
                                                    //音色
                                                    MidiTimbre = MidiEvent[3];
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "BX47", dexdata: MidiTimbre };
                                                    MidiEventArrayNum++;
                                                    MidiEventDex += 3;
                                                    break;
                                                case "48":
                                                    //放音时值
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "49":
                                                    //起音时值
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "4A":
                                                    //亮音
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "4B":
                                                case "4C":
                                                case "4D":
                                                case "4E":
                                                case "4F":
                                                    //声音控制
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "50":
                                                case "51":
                                                case "52":
                                                case "53":
                                                case "54":
                                                    //一般控制器(5-8)
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "55":
                                                    //连滑音控制
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "5B":
                                                    //混响效果深度
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "5C":
                                                    //未定义效果深度
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "5D":
                                                    //合唱效果深度
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "5E":
                                                    //未定义效果深度
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    break;
                                                case "5F":
                                                    //移调器深度
                                                    break;
                                                case "60":
                                                    //数据累增
                                                    break;
                                                case "61":
                                                    //数据递减
                                                    break;
                                                case "62":
                                                    //未登记的低元组数值
                                                    break;
                                                case "63":
                                                    //未登记的高元组数值
                                                    break;
                                                case "64":
                                                    //已登记的低元组数值
                                                    break;
                                                case "65":
                                                    //已登记的高元组数值
                                                    break;
                                                case "78":
                                                    //关闭所有声音
                                                    break;
                                                case "79":
                                                    //关闭所有控制器
                                                    break;
                                                case "7A":
                                                    //本地键盘开关
                                                    break;
                                                case "7B":
                                                    //关闭所有音符
                                                    break;
                                                case "7C":
                                                    //Omni模式关闭
                                                    break;
                                                case "7D":
                                                    //Omni模式开启
                                                    break;
                                                case "7E":
                                                    //单音模式
                                                    break;
                                                case "7F":
                                                    //复音模式
                                                    break;
                                                default:
                                                    for (i = 0; i < 3; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 3;
                                                    document.getElementById("input").value = document.getElementById("input").value + "\nMIDI控制器未知，跳过！";
                                                    return;
                                            }
                                        case "C":
                                            //乐器
                                            MidiTimbre = MidiEvent[2];
                                            for (i = 0; i < 3; i++) {
                                                MidiEvent.shift();
                                            }
                                            MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "CX", dexdata: MidiTimbre };
                                            MidiEventArrayNum++;
                                            MidiEventDex += 3;
                                            break;
                                        case "D":
                                        //触后通道
                                        case "E":
                                            //弯音
                                            break;
                                        case "F":
                                            //其他事件
                                            switch (MidiEventTypeHead[1]) {
                                                case "0":
                                                    //系统码（读取跳过）
                                                    for (i = 0; i < 5; i++) {
                                                        MidiEvent.shift();
                                                    }
                                                    MidiEventDex += 5;
                                                    break;
                                                case "F":
                                                    //其他事件
                                                    switch (MidiEvent[2]) {
                                                        case "00":
                                                            //设置轨道音序
                                                            break;
                                                        case "01":
                                                            //文字事件
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "02":
                                                            //MIDI版权公告
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            MidiTickEventLength = "";
                                                            for (i = 0; i < MidiTickEvent; i++) {
                                                                MidiTickEventLength += MidiEvent[i + 4];
                                                            }
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "FF02", dexdata: MidiTickEventLength };
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "03":
                                                            //指定歌曲与音轨名称
                                                            break;
                                                        case "04":
                                                            //指定乐器
                                                            break;
                                                        case "05":
                                                            //MIDI歌词
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "06":
                                                            //MIDI标记
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "07":
                                                            //MIDI注释
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "08":
                                                            //未知事件（后续补充注释）
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "2F":
                                                            //音轨终止
                                                            break;
                                                        case "51":
                                                            //tick所需要的时间（获取BPM）
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            MidiTickEventLength = "";
                                                            for (i = 0; i < MidiTickEvent; i++) {
                                                                MidiTickEventLength += MidiEvent[i + 4];
                                                            }
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "FF51", dexdata: MidiTickEventLength };
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "58":
                                                            //指定节拍
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            MidiTickEventLength = "";
                                                            for (i = 0; i < MidiTickEvent; i++) {
                                                                MidiTickEventLength += MidiEvent[i + 4];
                                                            }
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "FF58", dexdata: MidiTickEventLength };
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "59":
                                                            //指定调号
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            MidiTickEventLength = "";
                                                            for (i = 0; i < MidiTickEvent; i++) {
                                                                MidiTickEventLength += MidiEvent[i + 4];
                                                            }
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArray[MidiEventArrayNum] = { tick: tick, type: "FF59", dexdata: MidiTickEventLength };
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
                                                        case "7F":
                                                            //音序特定信息
                                                            MidiTickEvent = MidiEvent[3];
                                                            MidiTickEvent = parseInt(MidiTickEvent, 16);
                                                            for (i = 0; i < MidiTickEvent + 4; i++) {
                                                                MidiEvent.shift();
                                                            }
                                                            MidiEventArrayNum++;
                                                            MidiEventDex += MidiTickEvent + 4;
                                                            break;
	
                                                    }
                                                    break;
                                                default:
                                                    lock();
                                                    setTimeout(function () {
                                                        warning.innerHTML = "<b>MIDI事件未知,无法解析。错误代码：" + MidiEventTypeHead[0] + MidiEventTypeHead[1] + "。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                                                        document.getElementById("input").value = document.getElementById("input").value + "\n失败，MIDI事件无法解析！错误代码：" + MidiEventTypeHead[0] + MidiEventTypeHead[1];
                                                        if (zh_choose == "t") {
                                                            zh_tran('t');
                                                        }
                                                    }, 100);
                                                    return;
                                            }
                                            MidiEventDex++;
                                            break;
                                        default:
                                            lock();
                                            setTimeout(function () {
                                                warning.innerHTML = "<b>MIDI发生事件错误,无法解析。错误代码：" + MidiEventTypeHead[0] + MidiEventTypeHead[1] + "。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                                                document.getElementById("input").value = document.getElementById("input").value + "\n失败，MIDI事件无法解析！错误代码：" + MidiEventTypeHead[0] + MidiEventTypeHead[1];
                                                if (zh_choose == "t") {
                                                    zh_tran('t');
                                                }
                                            }, 100);
                                            return;
                                    }
                                }
                                */
                                console.log(MidiEvent, MidiEventArray);
                            }
                        }
                    }
                }
            } else {
                if (file_a.indexOf("{") == -1 && file_a.indexOf("}") == -1 && file_a.indexOf(",") == -1 && file_a.indexOf(":") == -1 && file_a.indexOf("[") == -1 && file_a.indexOf("]") == -1) {
                    //对于指尖上的钢琴等谱面文件用base64加密的文件解码
                    file_a = window.atob(file_a);
                }
                //对第三方钢琴块（动漫钢琴块）json的兼容
                file_a = file_a.replace(/rhythm/g, "baseBpm");
                file_a = file_a.replace(/zz39pm/g, "bpm");
                file_a = file_a.replace(/unit/g, "baseBeats");
                document.getElementById("input").value = file_a;
                var file_a = eval('(' + file_a + ')');
                //兼容小程序json
                if (file_a.__type__) {
                    //对于单个小程序json里的歌曲
                    if (file_a.json.musics) {
                        file_f = file_a.json.musics;
                        file_j = file_a.json.baseBpm;
                        file_d = file_f.length;
                        json_music_name = file_a._name;
                        continue_music();
                    } else {
                        //对于一整组的json的歌曲选择
                        select();
                        songselect1 = file_a.json.length;
                        for (songselect2 = 0; songselect2 < songselect1; songselect2++) {
                            file_i = file_a.json;
                            json_music_name = file_a._name;
                            test1();
                        }
                        fl2();
                    }
                } else if (file_a.musics) {
                    //正常的json的转换
                    file_f = file_a.musics;
                    file_j = file_a.baseBpm;
                    file_d = file_f.length;
                    if (file_a.name) {
                        json_music_name = file_a.name;
                    }
                    continue_music();
                    //不支持魔法钢琴块3部分加密谱面文件，只支持该游戏的midi文件
                } else if (file_a.chapters) {
                    //对于指尖上的钢琴第三方钢琴游戏的兼容
                    file_f = file_a.chapters;
                    var file_pt2json_main = new Array(), file_pt2json_second = new Array();
                    for (file_i = 0; file_i < file_f.length; file_i++) {
                        for (file_i_periods = 0; file_i_periods < file_f[file_i].periods.length; file_i_periods++) {
                            if (typeof file_pt2json_main[file_i] == "undefined") {
                                file_pt2json_main[file_i] = file_f[file_i].periods[file_i_periods].main;
                                file_pt2json_second[file_i] = file_f[file_i].periods[file_i_periods].second;
                            } else {
                                file_pt2json_main[file_i] = file_pt2json_main[file_i] + ",".concat(file_f[file_i].periods[file_i_periods].main);
                                file_pt2json_second[file_i] = file_pt2json_second[file_i] + ",".concat(file_f[file_i].periods[file_i_periods].second);
                            }
                        }
                    }
                    for (file_i = 0; file_i < file_pt2json_main.length; file_i++) {
                        file_pt2json_main[file_i] = file_pt2json_main[file_i].replace(/empty/g, "mute");
                        file_pt2json_main[file_i] = file_pt2json_main[file_i].replace(/-2/g, "-3");
                        file_pt2json_main[file_i] = file_pt2json_main[file_i].replace(/-1/g, "-2");
                        file_pt2json_main[file_i] = file_pt2json_main[file_i].replace(/-0/g, "-1");
                    }
                    for (file_i = 0; file_i < file_pt2json_second.length; file_i++) {
                        file_pt2json_second[file_i] = file_pt2json_second[file_i].replace(/empty/g, "mute");
                        file_pt2json_second[file_i] = file_pt2json_second[file_i].replace(/-2/g, "-3");
                        file_pt2json_second[file_i] = file_pt2json_second[file_i].replace(/-1/g, "-2");
                        file_pt2json_second[file_i] = file_pt2json_second[file_i].replace(/-0/g, "-1");
                    }
                    var pt2json_music = new Array();
                    for (file_i = 0; file_i < file_pt2json_main.length; file_i++) {
                        pt2json_music[file_i] = { bpm: file_f[file_i].bpm * file_f[file_i].baseBeats / 16, baseBeats: file_f[file_i].baseBeats / 32, scores: [file_pt2json_main[file_i], file_pt2json_second[file_i]] };
                    }
                    var pt2json = { baseBpm: file_f[0].bpm * file_f[0].baseBeats / 16, musics: pt2json_music };
                    if (file_f.name) {
                        json_music_name = file_a.name;
                    }
                    file_a = pt2json;
                    file_f = file_a.musics;
                    file_j = file_a.baseBpm;
                    file_d = file_f.length;
                    console.log(pt2json);
                    continue_music();
                } else if (file_a.type && file_a.section) {
                    //对于梦幻钢琴第三方钢琴游戏的兼容
                    file_f = file_a.section;
                    for (i = 0; i < file_f.length; i++) {
                        for (file_i = 0; file_i < file_f.length - 1; file_i++) {
                            console.log(file_f[i].instrument[file_i]);
                        }
                    }
                } else if (file_a.header && file_a.tracks) {
                    //对于使用unity引擎制作的第三方钢琴块厂商的游戏谱面兼容
                } else {
                    lock();
                    //越南厂商的钢琴块游戏谱面不受支持
                    setTimeout(function () {
                        warning.innerHTML = "<b>你打开的文件不属于钢琴块游戏的json曲谱文件，请重新选择。如果是转换其他与别踩白块儿相关的钢琴游戏不受支持的请向作者反馈。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                        if (zh_choose == "t") {
                            zh_tran('t');
                        }
                    }, 100);
                }
            }
        }
    } else {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你还没有打开文件，请拖拽文件或选择文件再尝试转换。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    }
    sound1 = 0;
    soundshow.innerHTML = "正常";
    document.getElementById('soundshow').style.color = '#555';
    document.getElementById("warning_sound").innerHTML = "♮正常";
    document.getElementById("warning_sound").style.color = '#555';
}
function startchange() {
    document.getElementById('progress').value = "25"
    progress1.innerHTML = "25"
    //格式化
    v = g;
    o = g;
    games_type = games.value;
    switch (games_type) {
        case "mak":
        case "mas":
            game_type1();
            break;
        case "om":
            game_type3();
            break;
    }
    function game_type3() {
        a = document.getElementById("bpm").value.split(";")[1];
        a = a.split(",")[file_d_a];
        a = parseFloat(a);
        g = g.split(",");
        var g_d = "";
        for (g_a = 0; g_a < g.length; g_a++) {
            g_b = parseFloat(g[g_a]);
            g_c = Math.floor(3750 * g_b / a * 0.5);
            g_d = g_d + "," + g_c;
        }
        g_d = g_d.replace(",", "");
        a = g_d;
        a = a.split(",");
        g_b = "";
        for (g_a = 0; g_a < g.length - 1; g_a++) {
            g_b = g_b + "\ncolumn,192,<" + a[g_a] + ">,note,0,endbeat:0:0:0:sound"
        }
        if (file_d_a == 0) {
            g_b = g_b.replace("\n", "column,192,<0>,note,0,endbeat:0:0:0:sound\n");
        } else {
            g_b = g_b.replace("\n", "column,192,<" + bpm_pos_om_2 + ">,note,0,endbeat:0:0:0:sound\n");
        }
        bpm_pos_om = a[a.length - 1];
        m = document.getElementById("beats").value;
        m = parseFloat(m);
        a = document.getElementById("bpm").value;
        a = parseFloat(a);
        n = Math.floor(3750 * m * 32 / a * 0.5);
        g_d = g_d.split(",");
        for (g_a = 0; g_a < g.length; g_a++) {
            f_a = g_b.indexOf("<");
            f_b = g_b.indexOf(">") + 1;
            f_c = g_b.slice(f_a, f_b);
            f_d = f_c.replace("<", "");
            f_d = f_d.replace(">", "");
            g_b = g_b.replace(f_c, f_d);
            f_a = parseFloat(g_d[g_a]);
            f_d = parseFloat(f_d);
            f_b = f_a - f_d;
            if (f_b > n + 1) {
                f_c = f_a - n;
                f_c = Math.floor(f_c);
                g_b = g_b.replace("endbeat", f_c + ":0");
                g_b = g_b.replace("note", "128");
            } else {
                g_b = g_b.replace("endbeat", "0");
                g_b = g_b.replace("note", "1");
            }
        }
        key_num = key.value;
        switch (key_num) {
            case "1k":
                key_num_a = 1;
                g_b = g_b.replace(/column/g, "256");
                break;
            case "2k":
                key_num_a = 2;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 2;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "128");
                        } else {
                            g_b = g_b.replace(/column/, "384");
                        }
                    }
                } else {
                    var x = 0;
                    while (g_b.indexOf("column") > -1) {

                        x = x + 1;
                        if (x % 2 == 0) {
                            g_b = g_b.replace(/column/, "128");
                        } else {
                            g_b = g_b.replace(/column/, "384");
                        }
                    }
                }
                break;
            case "3k":
                key_num_a = 3;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 3;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "85");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "426");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 3;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 3;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "85");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "426");
                        }
                    }
                }
                break;
            case "4k":
                key_num_a = 4;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 4;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "64");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "192");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "320");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "448");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 4;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 4;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "64");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "192");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "320");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "448");
                        }
                    }
                }
                break;
            case "5k":
                key_num_a = 5;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 5;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "51");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "153");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "358");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "460");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 5;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 5;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "51");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "153");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "358");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "460");
                        }
                    }
                }
                break;
            case "6k":
                key_num_a = 6;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 6;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "42");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "213");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "298");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "469");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 6;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 6;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "42");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "213");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "298");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "469");
                        }
                    }
                }
                break;
            case "7k":
                key_num_a = 7;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 7;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "36");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "109");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "182");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "329");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "402");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "475");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 7;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 7;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "36");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "109");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "182");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "329");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "402");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "475");
                        }
                    }
                }
                break;
            case "8k":
                key_num_a = 8;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 8;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "32");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "96");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "160");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "224");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "288");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "352");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "416");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "480");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 8;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 8;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "32");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "96");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "160");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "224");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "288");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "352");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "416");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "480");
                        }
                    }
                }
                break;
            case "9k":
                key_num_a = 9;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 9;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "28");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "85");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "142");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "199");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "312");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "369");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "426");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "483");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 9;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 9;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "28");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "85");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "142");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "199");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "312");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "369");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "426");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "483");
                        }
                    }
                }
                break;
            case "10k":
                key_num_a = 10;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 10;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "25");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "76");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "179");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "230");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "281");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "332");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "435");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "486");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 10;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 10;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "25");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "76");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "179");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "230");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "281");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "332");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "435");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "486");
                        }
                    }
                }
                break;
            case "11k":
                key_num_a = 11;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 11;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "23");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "69");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "116");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "162");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "209");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "302");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "349");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "395");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "442");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "488");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 11;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 11;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "23");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "69");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "116");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "162");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "209");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "302");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "349");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "395");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "442");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "488");
                        }
                    }
                }
                break;
            case "12k":
                key_num_a = 12;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 12;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "21");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "64");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "106");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "149");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "192");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "234");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "277");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "320");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "362");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "405");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "448");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "490");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 12;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 12;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "21");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "64");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "106");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "149");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "192");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "234");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "277");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "320");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "362");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "405");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "448");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "490");
                        }
                    }
                }
                break;
            case "13k":
                key_num_a = 13;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 13;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "19");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "59");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "98");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "137");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "177");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "216");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "295");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "334");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "374");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "413");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "452");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "492");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 13;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 13;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "19");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "59");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "98");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "137");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "177");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "216");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "295");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "334");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "374");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "413");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "452");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "492");
                        }
                    }
                }
                break;
            case "14k":
                key_num_a = 14;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 14;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "18");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "54");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "91");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "164");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "201");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "237");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "274");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "310");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "347");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "420");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "457");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "493");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 14;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 14;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "18");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "54");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "91");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "164");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "201");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "237");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "274");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "310");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "347");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "420");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "457");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "493");
                        }
                    }
                }
                break;
            case "15k":
                key_num_a = 15;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 15;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "17");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "51");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "85");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "119");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "153");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "187");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "221");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "290");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "324");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "358");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "392");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "426");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "460");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "494");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 15;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 15;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "17");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "51");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "85");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "119");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "153");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "187");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "221");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "290");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "324");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "358");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "392");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "426");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "460");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "494");
                        }
                    }
                }
                break;
            case "16k":
                key_num_a = 16;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 16;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "16");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "48");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "80");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "112");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "144");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "176");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "208");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "240");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "272");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "304");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "336");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "368");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "400");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "432");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "464");
                        }
                        if (x == 15) {
                            g_b = g_b.replace(/column/, "496");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 16;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 16;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "16");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "48");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "80");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "112");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "144");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "176");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "208");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "240");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "272");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "304");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "336");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "368");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "400");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "432");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "464");
                        }
                        if (x == 15) {
                            g_b = g_b.replace(/column/, "496");
                        }
                    }
                }
                break;
            case "17k":
                key_num_a = 17;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 17;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "15");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "45");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "75");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "105");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "135");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "165");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "195");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "225");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "286");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "316");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "346");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "376");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "406");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "436");
                        }
                        if (x == 15) {
                            g_b = g_b.replace(/column/, "466");
                        }
                        if (x == 16) {
                            g_b = g_b.replace(/column/, "496");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 17;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 17;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "15");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "45");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "75");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "105");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "135");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "165");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "195");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "225");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "256");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "286");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "316");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "346");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "376");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "406");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "436");
                        }
                        if (x == 15) {
                            g_b = g_b.replace(/column/, "466");
                        }
                        if (x == 16) {
                            g_b = g_b.replace(/column/, "496");
                        }
                    }
                }
                break;
            case "18k":
                key_num_a = 18;
                if (document.getElementById("continue").checked == true) {
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 18;
                        x = Math.floor(x);
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "14");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "42");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "71");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "99");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "156");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "184");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "213");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "241");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "270");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "298");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "327");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "355");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "412");
                        }
                        if (x == 15) {
                            g_b = g_b.replace(/column/, "440");
                        }
                        if (x == 16) {
                            g_b = g_b.replace(/column/, "469");
                        }
                        if (x == 17) {
                            g_b = g_b.replace(/column/, "497");
                        }
                    }
                } else {
                    var y;
                    while (g_b.indexOf("column") > -1) {

                        x = Math.random() * 18;
                        x = Math.floor(x);
                        while (x == y) {

                            x = Math.random() * 18;
                            x = Math.floor(x);
                        }
                        y = x;
                        if (x == 0) {
                            g_b = g_b.replace(/column/, "14");
                        }
                        if (x == 1) {
                            g_b = g_b.replace(/column/, "42");
                        }
                        if (x == 2) {
                            g_b = g_b.replace(/column/, "71");
                        }
                        if (x == 3) {
                            g_b = g_b.replace(/column/, "99");
                        }
                        if (x == 4) {
                            g_b = g_b.replace(/column/, "128");
                        }
                        if (x == 5) {
                            g_b = g_b.replace(/column/, "156");
                        }
                        if (x == 6) {
                            g_b = g_b.replace(/column/, "184");
                        }
                        if (x == 7) {
                            g_b = g_b.replace(/column/, "213");
                        }
                        if (x == 8) {
                            g_b = g_b.replace(/column/, "241");
                        }
                        if (x == 9) {
                            g_b = g_b.replace(/column/, "270");
                        }
                        if (x == 10) {
                            g_b = g_b.replace(/column/, "298");
                        }
                        if (x == 11) {
                            g_b = g_b.replace(/column/, "327");
                        }
                        if (x == 12) {
                            g_b = g_b.replace(/column/, "355");
                        }
                        if (x == 13) {
                            g_b = g_b.replace(/column/, "384");
                        }
                        if (x == 14) {
                            g_b = g_b.replace(/column/, "412");
                        }
                        if (x == 15) {
                            g_b = g_b.replace(/column/, "440");
                        }
                        if (x == 16) {
                            g_b = g_b.replace(/column/, "469");
                        }
                        if (x == 17) {
                            g_b = g_b.replace(/column/, "497");
                        }
                    }
                }
                break;
        }
        Function1();
        a = a.split(",");
        var i_a = /\((.+?)\)/g;
        var i_b = /\[(.+?)\]/g;
        j_a = "";
        for (g_a = 0; g_a < a.length - 1; g_a++) {
            g_f = a[g_a].match(i_a);
            if (g_f === null) {
                g_b = g_b.replace("sound", "");
                j_a = j_a + "," + a[g_a].match(i_b).toString();
            } else {
                g_f = g_f.toString();
                if (g_f.indexOf(".") > -1 || g_f.indexOf("!") > -1 || g_f.indexOf("~") > -1 || g_f.indexOf("@") > -1 || g_f.indexOf("$") > -1 || g_f.indexOf("%") > -1 || g_f.indexOf("^") > -1 || g_f.indexOf("&") > -1) {
                    if (g_f.indexOf("^") > -1 || g_f.indexOf("&") > -1) {
                        g_b = g_b.replace("sound", "");
                        j_a = j_a + "," + a[g_a].match(i_b).toString();
                    } else {
                        g_h = g_f;
                        g_f = g_f.replace("(", "");
                        g_f = g_f.replace(")", "");
                        g_f = g_f.replace(".", ",");
                        g_f = g_f.replace("~", ",");
                        g_f = g_f.replace("!", ",");
                        g_f = g_f.replace("@", ",");
                        g_f = g_f.replace("$", ",");
                        g_f = g_f.replace("%", ",");
                        g_f = g_f.split(",");
                        g_b = g_b.replace("sound", "midi_timbre_id/" + g_f[0]);
                        g_h = g_h.replace(g_f[0], "mute");
                        j_a = j_a + "," + g_h + a[g_a].match(i_b).toString();
                    }
                } else {
                    g_f = g_f.replace("(", "");
                    g_f = g_f.replace(")", "");
                    g_b = g_b.replace("sound", "midi_timbre_id/" + g_f);
                    j_a = j_a + "," + a[g_a].match(i_b).toString();
                }
            }
        }
        i_c = g_b;
        j_a = j_a.replace(",", "");
        a = j_a;
        Function1_a();
        j_a = a;
        ha5 = i_c;
    }
}
//声音转换部分
function Function1() {
    timerstart = true;
    timer();
    a = filesound;
    a = a.replace(/;/g, ",");
    a = a.split(',');
    var num = 0;
    NoteTimeLength = new Array();
    for (c = 0; c < a.length - 1; c++) {
        if (a[c].indexOf("[") > -1 && a[c].indexOf("]") > -1) {
            music_reg = /\[(.*?)\]/;
            music_tmp = a[c].match(music_reg);
            var index_H = a[c].indexOf('H'), index_I = a[c].indexOf('I'), index_J = a[c].indexOf('J'), index_K = a[c].indexOf('K'), index_L = a[c].indexOf('L'), index_M = a[c].indexOf('M'), index_N = a[c].indexOf('N'), index_O = a[c].indexOf('O'), index_P = a[c].indexOf('P');
            while (index_H !== -1) {
                num = num + 256;
                index_H = a[c].indexOf('H', index_H + 1);
            }
            while (index_I !== -1) {
                num = num + 128;
                index_I = a[c].indexOf('I', index_I + 1);
            }
            while (index_J !== -1) {
                num = num + 64;
                index_J = a[c].indexOf('J', index_J + 1);
            }
            while (index_K !== -1) {
                num = num + 32;
                index_K = a[c].indexOf('K', index_K + 1);
            }
            while (index_L !== -1) {
                num = num + 16;
                index_L = a[c].indexOf('L', index_L + 1);
            }
            while (index_M !== -1) {
                num = num + 8;
                index_M = a[c].indexOf('M', index_M + 1);
            }
            while (index_N !== -1) {
                num = num + 4;
                index_N = a[c].indexOf('N', index_N + 1);
            }
            while (index_O !== -1) {
                num = num + 2;
                index_O = a[c].indexOf('O', index_O + 1);
            }
            while (index_P !== -1) {
                num = num + 1;
                index_P = a[c].indexOf('P', index_P + 1);
            }
            NoteTimeLength[c] = num;
            //自动纠错音符错误
            a[c] = a[c].replace(/#e/g, "f");
            a[c] = a[c].replace(/#b/g, "c1");
            a[c] = a[c].replace(/#b1/g, "c2");
            a[c] = a[c].replace(/#b2/g, "c3");
            a[c] = a[c].replace(/#b3/g, "c4");
            a[c] = a[c].replace(/#b4/g, "c5");
            a[c] = a[c].replace(/#E/g, "F");
            a[c] = a[c].replace(/#B-1/g, "c");
            a[c] = a[c].replace(/#B-2/g, "C-1");
            a[c] = a[c].replace(/#B-3/g, "C-2");
            //删除串烧音效
            a[c] = a[c].replace(/chuanshao/g, "mute");
            //对钢琴块复制品的json的兼容
            if (a[c].indexOf("zz") > -1) {
                a[c] = a[c].replace(/zz01/g, "A-3");
                a[c] = a[c].replace(/zz02/g, "#A-3");
                a[c] = a[c].replace(/zz03/g, "B-3");
                a[c] = a[c].replace(/zz04/g, "C-2");
                a[c] = a[c].replace(/zz05/g, "#C-2");
                a[c] = a[c].replace(/zz06/g, "D-2");
                a[c] = a[c].replace(/zz07/g, "#D-2");
                a[c] = a[c].replace(/zz08/g, "E-2");
                a[c] = a[c].replace(/zz09/g, "F-2");
                a[c] = a[c].replace(/zz10/g, "#F-2");
                a[c] = a[c].replace(/zz11/g, "G-2");
                a[c] = a[c].replace(/zz12/g, "#G-2");
                a[c] = a[c].replace(/zz13/g, "A-2");
                a[c] = a[c].replace(/zz14/g, "#A-2");
                a[c] = a[c].replace(/zz15/g, "B-2");
                a[c] = a[c].replace(/zz16/g, "C-1");
                a[c] = a[c].replace(/zz17/g, "#C-1");
                a[c] = a[c].replace(/zz18/g, "D-1");
                a[c] = a[c].replace(/zz19/g, "#D-1");
                a[c] = a[c].replace(/zz20/g, "E-1");
                a[c] = a[c].replace(/zz21/g, "F-1");
                a[c] = a[c].replace(/zz22/g, "#F-1");
                a[c] = a[c].replace(/zz23/g, "G-1");
                a[c] = a[c].replace(/zz24/g, "#G-1");
                a[c] = a[c].replace(/zz25/g, "A-1");
                a[c] = a[c].replace(/zz26/g, "#A-1");
                a[c] = a[c].replace(/zz27/g, "B-1");
                a[c] = a[c].replace(/zz28/g, "c");
                a[c] = a[c].replace(/zz29/g, "#c");
                a[c] = a[c].replace(/zz30/g, "d");
                a[c] = a[c].replace(/zz31/g, "#d");
                a[c] = a[c].replace(/zz32/g, "e");
                a[c] = a[c].replace(/zz33/g, "f");
                a[c] = a[c].replace(/zz34/g, "#f");
                a[c] = a[c].replace(/zz35/g, "g");
                a[c] = a[c].replace(/zz36/g, "#g");
                a[c] = a[c].replace(/zz37/g, "a");
                a[c] = a[c].replace(/zz38/g, "#a");
                a[c] = a[c].replace(/zz39/g, "b");
                a[c] = a[c].replace(/zz40/g, "c1");
                a[c] = a[c].replace(/zz41/g, "#c1");
                a[c] = a[c].replace(/zz42/g, "d1");
                a[c] = a[c].replace(/zz43/g, "#d1");
                a[c] = a[c].replace(/zz44/g, "e1");
                a[c] = a[c].replace(/zz45/g, "f1");
                a[c] = a[c].replace(/zz46/g, "#f1");
                a[c] = a[c].replace(/zz47/g, "g1");
                a[c] = a[c].replace(/zz48/g, "#g1");
                a[c] = a[c].replace(/zz49/g, "a1");
                a[c] = a[c].replace(/zz50/g, "#a1");
                a[c] = a[c].replace(/zz51/g, "b1");
                a[c] = a[c].replace(/zz52/g, "c2");
                a[c] = a[c].replace(/zz53/g, "#c2");
                a[c] = a[c].replace(/zz54/g, "d2");
                a[c] = a[c].replace(/zz55/g, "#d2");
                a[c] = a[c].replace(/zz56/g, "e2");
                a[c] = a[c].replace(/zz57/g, "f2");
                a[c] = a[c].replace(/zz58/g, "#f2");
                a[c] = a[c].replace(/zz59/g, "g2");
                a[c] = a[c].replace(/zz60/g, "#g2");
                a[c] = a[c].replace(/zz61/g, "a2");
                a[c] = a[c].replace(/zz62/g, "#a2");
                a[c] = a[c].replace(/zz63/g, "b2");
                a[c] = a[c].replace(/zz64/g, "c3");
                a[c] = a[c].replace(/zz65/g, "#c3");
                a[c] = a[c].replace(/zz66/g, "d3");
                a[c] = a[c].replace(/zz67/g, "#d3");
                a[c] = a[c].replace(/zz68/g, "e3");
                a[c] = a[c].replace(/zz69/g, "f3");
                a[c] = a[c].replace(/zz70/g, "#f3");
                a[c] = a[c].replace(/zz71/g, "g3");
                a[c] = a[c].replace(/zz72/g, "#g3");
                a[c] = a[c].replace(/zz73/g, "a3");
                a[c] = a[c].replace(/zz74/g, "#a3");
                a[c] = a[c].replace(/zz75/g, "b3");
                a[c] = a[c].replace(/zz76/g, "c4");
                a[c] = a[c].replace(/zz77/g, "#c4");
                a[c] = a[c].replace(/zz78/g, "d4");
                a[c] = a[c].replace(/zz79/g, "#d4");
                a[c] = a[c].replace(/zz80/g, "e4");
                a[c] = a[c].replace(/zz81/g, "f4");
                a[c] = a[c].replace(/zz82/g, "#f4");
                a[c] = a[c].replace(/zz83/g, "g4");
                a[c] = a[c].replace(/zz84/g, "#g4");
                a[c] = a[c].replace(/zz85/g, "a4");
                a[c] = a[c].replace(/zz86/g, "#a4");
                a[c] = a[c].replace(/zz87/g, "b4");
                a[c] = a[c].replace(/zz88/g, "c5");
            }
            if (a[c].indexOf("<") > -1) {
                if (a[c].indexOf("(") > -1 && a[c].indexOf(")") > -1) {
                    a[c] = a[c].slice(a[c].indexOf("<") + 1, a[c].indexOf("["));
                } else {
                    a[c] = "(" + a[c].slice(a[c].indexOf("<") + 1, a[c].indexOf("[")) + ")";
                }
            } else {
                if (a[c].indexOf("(") > -1 && a[c].indexOf(")") > -1) {
                    a[c] = a[c].slice(0, a[c].indexOf("["));
                } else {
                    a[c] = "(" + a[c].slice(0, a[c].indexOf("[")) + ")";
                }
            }
        } else if (a[c].indexOf("(") == -1 && a[c].indexOf(")") == -1) {
            var index_Q = a[c].indexOf('Q'), index_R = a[c].indexOf('R'), index_S = a[c].indexOf('S'), index_T = a[c].indexOf('T'), index_U = a[c].indexOf('U'), index_V = a[c].indexOf('V'), index_W = a[c].indexOf('W'), index_X = a[c].indexOf('X'), index_Y = a[c].indexOf('Y');
            while (index_Q !== -1) {
                num = num + 256;
                index_Q = a[c].indexOf('Q', index_Q + 1);
            }
            while (index_R !== -1) {
                num = num + 128;
                index_R = a[c].indexOf('R', index_R + 1);
            }
            while (index_S !== -1) {
                num = num + 64;
                index_S = a[c].indexOf('S', index_S + 1);
            }
            while (index_T !== -1) {
                num = num + 32;
                index_T = a[c].indexOf('T', index_T + 1);
            }
            while (index_U !== -1) {
                num = num + 16;
                index_U = a[c].indexOf('U', index_U + 1);
            }
            while (index_V !== -1) {
                num = num + 8;
                index_V = a[c].indexOf('V', index_V + 1);
            }
            while (index_W !== -1) {
                num = num + 4;
                index_W = a[c].indexOf('W', index_W + 1);
            }
            while (index_X !== -1) {
                num = num + 2;
                index_X = a[c].indexOf('X', index_X + 1);
            }
            while (index_Y !== -1) {
                num = num + 1;
                index_Y = a[c].indexOf('Y', index_Y + 1);
            }
            NoteTimeLength[c] = num;
            a[c] = "(mute)";
        }
    }
    b = a;
    var music_sound_array = new Array();
    for (c = 0; c < b.length - 1; c++) {
        music1_reg = /\((.*?)\)/;
        music1_tmp = a[c].match(music1_reg);
        if (c == 0) {
            b[c] = 0;
        } else {
            b[c] = NoteTimeLength[c - 1];
        }
        music_sound_array[c] = music1_tmp[1];
    }
    a_music_array = new Array();
    //合并相同功能的字符
    for (c = 0; c < b.length - 1; c++) {
        note_divide = b[c];
        a_music_array[c] = { beat: [0, note_divide, 32], type: 1, vol: parseFloat(document.getElementById("vol").value), sound: music_sound_array[c] };
        if (a_music_array[c].sound.indexOf("$") > -1) {
            a_music_array[c].sound = a_music_array[c].sound.replace(/\$/g, '~');
        }
        if (a_music_array[c].sound.indexOf("&") > -1) {
            a_music_array[c].sound = a_music_array[c].sound.replace(/\&/g, '^');
        }
    }
    j = new Array();
    for (c = 0; c < b.length - 1; c++) {
        if (c == 0) {
            j[c] = NoteTimeLength[c];
        } else {
            j[c] = NoteTimeLength[c] - NoteTimeLength[c - 1];
        }
    }
    a_music_array.sort();
    MusicArrayTest = new Array();
    MusicArrayTestEnd = new Array();
    var MusicArrayTestNum = 0;
    for (c = 0; c < a_music_array.length; c++) {
        //不赞成使用 ^ 与 & 字符，故与原游戏的播放效果不同
        if (typeof (a_music_array[c]) == "undefined") {
            a_music_array.splice(c, 1);
        } else if (a_music_array[c].sound.indexOf("^") > -1) {
            MusicArrayAdd = j[c] + a_music_array[c].beat[1];
            a_music_array[c].sound = a_music_array[c].sound.replace(/@/g, '^');
            a_music_array[c].sound = a_music_array[c].sound.replace(/!/g, '^');
            a_music_array[c].sound = a_music_array[c].sound.replace(/%/g, '^');
            a_music_array[c].sound = a_music_array[c].sound.replace(/~/g, '^');
            a_music_array[c].sound = a_music_array[c].sound + "^" + a_music_array[c].sound + "^" + a_music_array[c].sound;
            a_music_array[c].sound = a_music_array[c].sound.replace(/\^/g, '*');
            MusicArrayTest[MusicArrayTestNum] = a_music_array[c];
            MusicArrayTestEnd[MusicArrayTestNum] = j[c];
            MusicArrayTestNum++;
        }
    }
    for (c = 0; c < a_music_array.length; c++) {
        //不允许琶音与连音混装在一个括号内，在连音括号内的琶音音符会转换为连音
        if (typeof (a_music_array[c]) == "undefined") {
            a_music_array.splice(c, 1);
        } else if (a_music_array[c].sound.indexOf("~") > -1) {
            MusicArrayAdd = j[c] + a_music_array[c].beat[1];
            a_music_array[c].sound = a_music_array[c].sound.replace(/@/g, '*');
            a_music_array[c].sound = a_music_array[c].sound.replace(/!/g, '*');
            a_music_array[c].sound = a_music_array[c].sound.replace(/%/g, '*');
            MusicArrayTest[MusicArrayTestNum] = a_music_array[c];
            a_music_array[c].sound = a_music_array[c].sound.replace(/\~/g, '*');
            MusicArrayTestEnd[MusicArrayTestNum] = j[c];
            MusicArrayTestNum++;
        }
    }
    for (c = 0; c < a_music_array.length; c++) {
        //琶音转换
        if (typeof (a_music_array[c]) == "undefined") {
            a_music_array.splice(c, 1);
        } else if (a_music_array[c].sound.indexOf("@") > -1) {
            MusicArrayAdd = j[c] + a_music_array[c].beat[1];
            //琶音不允许混用，按从短到长琶音的优先级处理
            a_music_array[c].sound = a_music_array[c].sound.replace(/!/g, '@');
            a_music_array[c].sound = a_music_array[c].sound.replace(/%/g, '@');
            MusicArrayTest[MusicArrayTestNum] = a_music_array[c];
            a_music_array[c].sound = a_music_array[c].sound.replace(/\@/g, '*');
            MusicArrayTestEnd[MusicArrayTestNum] = Math.ceil(j[c] / 4);
            MusicArrayTestNum++;
        }
    }
    for (c = 0; c < a_music_array.length; c++) {
        //琶音转换
        if (typeof (a_music_array[c]) == "undefined") {
            a_music_array.splice(c, 1);
        } else if (a_music_array[c].sound.indexOf("%") > -1) {
            MusicArrayAdd = j[c] + a_music_array[c].beat[1];
            //琶音不允许混用，按从短到长琶音的优先级处理
            a_music_array[c].sound = a_music_array[c].sound.replace(/!/g, '%');
            MusicArrayTest[MusicArrayTestNum] = a_music_array[c];
            a_music_array[c].sound = a_music_array[c].sound.replace(/\%/g, '*');
            MusicArrayTestEnd[MusicArrayTestNum] = Math.ceil(j[c] / 3);
            MusicArrayTestNum++;
        }
    }
    for (c = 0; c < a_music_array.length; c++) {
        //琶音转换
        if (typeof (a_music_array[c]) == "undefined") {
            a_music_array.splice(c, 1);
        } else if (a_music_array[c].sound.indexOf("!") > -1) {
            MusicArrayAdd = j[c] + a_music_array[c].beat[1];
            MusicArrayTest[MusicArrayTestNum] = a_music_array[c];
            a_music_array[c].sound = a_music_array[c].sound.replace(/\!/g, '*');
            MusicArrayTestEnd[MusicArrayTestNum] = Math.ceil(j[c] / 2);
            MusicArrayTestNum++;
        }
    }
    var MusicArrayAdd = new Array();
    var num = 0;
    for (c = 0; c < MusicArrayTest.length; c++) {
        MusicArraySoundArray = MusicArrayTest[c].sound.split("*");
        beat_c = MusicArrayTest[c].beat[1];
        beat_c = beat_c * MusicArraySoundArray.length;
        for (i = 0; i < MusicArraySoundArray.length; i++) {
            var beat_d = beat_c + MusicArrayTestEnd[c] * i;
            note_divide_base = 32 * MusicArraySoundArray.length;
            note_rhythm = Math.floor(beat_d / note_divide_base);
            note_divide = beat_d - note_divide_base * note_rhythm;
            MusicArrayAdd[num] = { beat: [note_rhythm, note_divide, 32 * MusicArraySoundArray.length], type: 1, vol: parseFloat(document.getElementById("vol").value), sound: MusicArraySoundArray[i] };
            num++;
        }
    }
    //删除无用数组
    for (c = 0; c < a_music_array.length; c++) {
        if (a_music_array[c].sound.indexOf("*") > -1) {
            a_music_array.splice(c, 1);
            c = c - 1;
        }
    }
    a_music_array.sort();
    //合并
    a_music_array = a_music_array.concat(MusicArrayAdd);
    //整理音符位置
    for (c = 0; c < a_music_array.length; c++) {
        if (a_music_array[c].beat[1] >= a_music_array[c].beat[2]) {
            note_rhythm = Math.floor((a_music_array[c].beat[1]) / a_music_array[c].beat[2]);
            note_divide = a_music_array[c].beat[1] - 32 * note_rhythm;
            a_music_array[c].beat[0] = note_rhythm;
            a_music_array[c].beat[1] = note_divide;
        }
    }
    //和弦处理
    var MusicArrayAdd = new Array();
    var num = 0;
    for (c = 0; c < a_music_array.length; c++) {
        if (a_music_array[c].sound.indexOf(".") > -1) {
            MusicArraySoundArray = a_music_array[c].sound.split(".");
            for (i = 0; i < MusicArraySoundArray.length; i++) {
                MusicArrayAdd[num] = { beat: [a_music_array[c].beat[0], a_music_array[c].beat[1], a_music_array[c].beat[2]], type: 1, vol: parseFloat(document.getElementById("vol").value), sound: MusicArraySoundArray[i] };
                num++;
            }
            a_music_array.splice(c, 1);
            c = c - 1;
        }
    }
    a_music_array = a_music_array.concat(MusicArrayAdd);
    //删除休止符
    for (c = 0; c < a_music_array.length; c++) {
        if (a_music_array[c].sound == "mute") {
            a_music_array.splice(c, 1);
            c = c - 1;
        } else {
            //音色读取
            var InstrumentsOutput;
            switch (Fileinstruments) {
                case "piano": {
                    InstrumentsOutput = "0,0";
                }
                    break;
                case "bass": {
                    InstrumentsOutput = "0,20";
                }
                    break;
                case "bass2": {
                    InstrumentsOutput = "0,23";
                }
                    break;
                case "drum": {
                    InstrumentsOutput = "80,0";
                }
                    break;
            }
            if (Fileinstruments !== "piano" && Fileinstruments !== "bass" && Fileinstruments !== "bass2" && Fileinstruments !== "drum") {
                InstrumentsOutput = Fileinstruments;
            }
            a_music_array[c].sound = "../../skin/audio/" + InstrumentsOutput + "/" + a_music_array[c].sound + ".mp3";
        }
    }
    time = time.concat(a_music_array);
    //osu
    games_type = games.value;
    if (games_type == "om") {
        a = a.replace(/},/g, "};");
        a = a.split(";");
        d_a = '\nSample,notepos,0,"notesound",volnum';
        d_sound = "";
        for (g_b = 0; g_b < a.length - 1; g_b++) {
            d_sound = d_sound + d_a;
            d_b = a[g_b];
            d_c = d_b.indexOf("[") + 1;
            d_d = d_b.indexOf("]");
            d_e = d_b.slice(d_c, d_d);
            d_e = d_e.split(",");
            d_c = d_b.indexOf('"sound":') + 9;
            d_d = d_b.indexOf("mp3") + 3;
            d_f = d_b.slice(d_c, d_d);
            d_sound = d_sound.replace("notesound", d_f);
            d_c = d_b.indexOf('"vol":') + 6;
            d_d = d_b.indexOf(',"s');
            d_f = d_b.slice(d_c, d_d);
            d_sound = d_sound.replace("volnum", d_f);
            m = document.getElementById("bpm").value;
            m = parseFloat(m);
            n = Math.floor(60000 / m);
            d_g = parseFloat(d_e[0]);
            d_g = d_g * n;
            d_h = parseFloat(d_e[1]);
            d_i = parseFloat(d_e[2]);
            d_j = n / d_i;
            d_j = d_h * d_j;
            d_g = d_g + d_j;
            d_g = Math.floor(d_g);
            d_sound = d_sound.replace("notepos", d_g);
        }
        a = d_sound;
    }
    timerstart = false;
    clock = 0;
    //对于音符中 @ ! % ~ 字符的转换
    function tercetsound() {
        q = 32 * h.length;
        u = q;
        p = p * h.length;
        r = g;
        g = g.replace("32]", q + "]");
        g = g.replace(',' + t + ',', ',' + p + ',');
        s = g;
        n = g.indexOf(",");
        o = g.indexOf("," + q);
        p = g.slice(n + 1, o);
        p = parseFloat(p);
        t = p;
        s = s.replace("," + p + ",", ",z,");
        for (i = 0; i < h.length - 1; i++) {
            s = s.concat(g);
            t = t + m;
            t = t.toFixed(0);
            t = parseFloat(t);
            s = s.replace("," + p + ",", "," + t + ",");
        }
        s = s.replace(",z,", "," + p + ",");
        for (i = 0; i < h.length; i++) {
            q = h[i];
            q = q.replace(/"/g, "");
            s = s.replace("soundname", "midi_timbre_id/" + q + ".mp3");
        }
        a = a.replace(r, s);
    }
}
key_value();
function key_value() {
    setTimeout(function () {
        var keyselect = document.getElementById("key"); var keyindex = keyselect.selectedIndex; var keyvalue = keyselect.options[keyindex].value;
        key_value();
    }, 200);
}
var windowsopen = false;
//触摸部分，为手机、平板、导航和手表等拥有触控的设备使用
document.addEventListener('touchstart', touch, false);
document.addEventListener('touchmove', touch, false);
function touch(event) {
    var distance, clientX_start, clientX_end;
    switch (event.type) {
        case "touchstart":
            clientX_start = event.touches[0].clientX;
            this.clientX_start = clientX_start;
            break;
        case "touchmove":
            if (windowsopen == false) {
                clientX_end = event.changedTouches[0].clientX;
                if (this.clientX_start + 50 < clientX_end) {
                    id2 = 0;
                    document.getElementById('id1').style.animation = 'board_1 1s';
                    document.getElementById('id1').style.left = '0px';
                    document.getElementById('id3').style.width = '100%';
                }
                if (this.clientX_start - 50 > clientX_end) {
                    id2 = 1;
                    document.getElementById('id1').style.animation = 'board_0 1s';
                    document.getElementById('id1').style.left = '-250px';
                    document.getElementById('id3').style.width = '0%';
                }
            }
            break;
    }
}
//窗口部分
function about() {
    windowsopen = true;
    ff1 = true;
    document.getElementById('mask').style.display = "";
    document.getElementById("box").style.display = "";
    document.getElementById('mask').style.animation = 'board_8 0.1s';
    document.getElementById('box').style.animation = 'board_3 0.1s';
    document.getElementById('box').style.height = '80%';
    document.getElementById('box').style.width = '80%';
}
function id0() {
    windowsopen = true;
    fg1 = true;
    document.getElementById('mask').style.display = "";
    document.getElementById("lang").style.display = "";
    document.getElementById('mask').style.animation = 'board_8 0.1s';
    document.getElementById('lang').style.animation = 'board_3 0.1s';
    document.getElementById('lang').style.height = '80%';
    document.getElementById('lang').style.width = '80%';
}
function note() {
    windowsopen = true;
    fe1 = true;
    document.getElementById('mask').style.display = "";
    document.getElementById("note").style.display = "";
    document.getElementById('mask').style.animation = 'board_8 0.1s';
    document.getElementById('note').style.animation = 'board_5 0.1s';
    document.getElementById('note').style.height = '80%';
    document.getElementById('note').style.width = '80%';
}
function select() {
    windowsopen = true;
    fl1 = true;
    document.getElementById("id20").style.backgroundColor = "#fb7299";
    document.getElementById("id20").style.color = "#fff";
    document.getElementById('mask').style.display = "";
    document.getElementById("select").style.display = "";
    document.getElementById('mask').style.animation = 'board_8 0.1s';
    document.getElementById('select').style.animation = 'board_3 0.1s';
    document.getElementById('select').style.height = '80%';
    document.getElementById('select').style.width = '80%';
}
function next() {
    if (document.getElementById("result").value != "") {
        windowsopen = true;
        if (document.getElementById("games").value == "mak" || document.getElementById("games").value == "mas") {
            if (typeof (malody_json_mc) !== "undefined") {
                document.getElementById("id20").style.backgroundColor = "#fb7299";
                document.getElementById("id20").style.color = "#fff";
                document.getElementById('mask').style.display = "";
                document.getElementById("next").style.display = "";
                document.getElementById('mask').style.animation = 'board_8 0.1s';
                document.getElementById('next').style.animation = 'board_3 0.1s';
                document.getElementById('next').style.height = '80%';
                document.getElementById('next').style.width = '80%';
                if (document.getElementById('nextcreator').value == "") {
                    document.getElementById('nextcreator').value = malody_json_mc.meta.creator;
                }
                if (document.getElementById('nextartistname').value == "") {
                    document.getElementById('nextartistname').value = malody_json_mc.meta.song.artist;
                }
                if (document.getElementById('nexttitlename').value == "") {
                    document.getElementById('nexttitlename').value = malody_json_mc.meta.song.titleorg;
                }
                if (document.getElementById('nextsongname').value == "") {
                    document.getElementById('nextsongname').value = malody_json_mc.meta.song.title;
                }
                if (document.getElementById('nextartistorg').value == "") {
                    document.getElementById('nextartistorg').value = malody_json_mc.meta.song.artistorg;
                }
                if (document.getElementById('nextversion').value == "") {
                    document.getElementById('nextversion').value = malody_json_mc.meta.version;
                }
                if (document.getElementById('nextbg').value == "") {
                    document.getElementById('nextbg').value = malody_json_mc.meta.background;
                }
                if (document.getElementById('nextvideo').value == "") {
                    document.getElementById('nextvideo').value = malody_json_mc.meta.video;
                }
            } else {
                lock();
                setTimeout(function () {
                    warning.innerHTML = "<b>你没有转换文件，请转化后再尝试导出。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
                    if (zh_choose == "t") {
                        zh_tran('t');
                    }
                }, 100);
            }
        }
    } else {
        lock();
        setTimeout(function () {
            warning.innerHTML = "<b>你还没有打开文件，请拖拽文件或选择文件再尝试转换。按下菜单键、返回键或点击此消息可解锁焦点。</b>";
            if (zh_choose == "t") {
                zh_tran('t');
            }
        }, 100);
    }
}
function help_window() {
    document.getElementById('mask').style.display = "";
    document.getElementById("help_window").style.display = "";
    document.getElementById('mask').style.animation = 'board_8 0.1s';
    document.getElementById('help_window').style.animation = 'board_3 0.1s';
    document.getElementById('help_window').style.height = '80%';
    document.getElementById('help_window').style.width = '80%';
}
function view_window() {
    winviewstate = true;
    windowbutton2();
    document.getElementsByClassName('warning_6')[0].style.display = 'inline';
    document.getElementById("drag").style.display = "";
    document.getElementById('drag').style.animation = 'board_3 0.1s';
    document.getElementById('drag').style.left = "0%";
    document.getElementById('drag').style.top = "0%";
}
//窗口隐藏部分
function hidder() {
    fe1 = false;
    ff1 = false;
    fg1 = false;
    windowsopen = false;
    if (fl1 == true) {
        document.onkeydown = keyDown;
        keyDown();
        fl1 = false;
    }
    fh1 = 0;
    document.getElementById('vol').style.border = '1px solid #ddd';
    document.getElementById('songselect').innerHTML = "";
    document.getElementById('box').style.animation = 'board_4 0.1s';
    document.getElementById('box').style.height = '0%';
    document.getElementById('box').style.width = '0%';
    document.getElementById('lang').style.animation = 'board_4 0.1s';
    document.getElementById('lang').style.height = '0%';
    document.getElementById('lang').style.width = '0%';
    document.getElementById('select').style.animation = 'board_4 0.1s';
    document.getElementById('select').style.height = '0%';
    document.getElementById('select').style.width = '0%';
    document.getElementById('note').style.animation = 'board_6 0.1s';
    document.getElementById('note').style.height = '0%';
    document.getElementById('note').style.width = '0%';
    document.getElementById('note').style.left = "10%";
    document.getElementById('note').style.top = "10%";
    document.getElementById('lang').style.left = "10%";
    document.getElementById('lang').style.top = "10%";
    document.getElementById('box').style.left = "10%";
    document.getElementById('box').style.top = "10%";
    document.getElementById('select').style.left = "10%";
    document.getElementById('select').style.top = "10%";
    document.getElementById('next').style.animation = 'board_4 0.1s';
    document.getElementById('next').style.height = '0%';
    document.getElementById('next').style.width = '0%';
    document.getElementById('next').style.left = "10%";
    document.getElementById('next').style.top = "10%";
    document.getElementById('help_window').style.animation = 'board_4 0.1s';
    document.getElementById('help_window').style.height = '0%';
    document.getElementById('help_window').style.width = '0%';
    document.getElementById('help_window').style.left = "10%";
    document.getElementById('help_window').style.top = "10%";
    aboutoff();
    langoff();
    noteoff();
    selectoff();
    nextoff();
    helpoff();
    function aboutoff() {
        setTimeout(function () { document.getElementById('box').style.display = "none"; }, 100);
    }
    function langoff() {
        setTimeout(function () { document.getElementById('lang').style.display = "none"; }, 100);
    }
    function noteoff() {
        setTimeout(function () { document.getElementById('note').style.display = "none"; }, 100);
    }
    function selectoff() {
        setTimeout(function () { document.getElementById('select').style.display = "none"; }, 100);
    }
    function helpoff() {
        setTimeout(function () { document.getElementById('help_window').style.display = "none"; }, 100);
    }
    function nextoff() {
        setTimeout(function () { document.getElementById('next').style.display = "none"; }, 100);
    }
    document.getElementById('mask').style.animation = 'board_9 0.1s';
    setTimeout(function () { document.getElementById('mask').style.display = "none"; }, 100);
}
//菜单部分
function menu() {
    if (id2 % 2 == 0) {
        id2 = 1;
        document.getElementById('id1').style.animation = 'board_0 0.2s';
        document.getElementById('id3').style.animation = 'board_7 0.2s';
        document.getElementById('id1').style.left = '-250px';
        setTimeout(function () { document.getElementById('id3').style.display = 'none'; }, 200);
    } else {
        id2 = 0;
        document.getElementById('id3').style.display = 'inline';
        document.getElementById('id3').style.width = '100%';
        document.getElementById('id1').style.animation = 'board_1 0.2s';
        document.getElementById('id3').style.animation = 'board_2 0.2s';
        document.getElementById('id1').style.left = '0px';
    }
}
function back() {
    sound3();
    warnoff();
    if (windowsopen == true) {
        hidder();
    } else {
        id2 = 1;
        progressoff();
        document.getElementById('id1').style.animation = 'board_0 1s';
        document.getElementById('id1').style.left = '-250px';
        document.getElementById('id3').style.width = '0%';
        document.getElementById('warning').style.animation = 'warning_2 0.1s';
        document.getElementById('warning').style.width = '0%';
        document.getElementById('warning').style.height = '0px';
        document.getElementById('warning').style.left = '50%';
        warning.innerHTML = "";
        fk1 = false;
    }
}
pushHistory();
window.addEventListener("popstate", function () {
    back();
    pushHistory();
}, false);
function pushHistory() {
    var state = {
        title: "title",
        url: "#"
    };
    window.history.pushState(state, "title", "#");
}
//按键监听部分，为电视遥控器操作使用（不作竖屏状态下的光标处理）
var fa1 = 0, fb1 = 0, fc1 = 1, fd1 = 1, fe1 = false, ff1 = false, fg1 = false, fh1 = 1, fi1 = 1, fj1 = 1, fk1 = false; fl1 = false;
document.onkeydown = keyDown;
function keyDown() {
    if (event.keyCode == 18) {
        if (winviewstate == true) {
            document.getElementById("file_menu_view").innerHTML = document.getElementById("file_menu_view").innerHTML + "<span style='background:#66ccff;'>F</span>";
            document.getElementById("play_menu_view").innerHTML = document.getElementById("play_menu_view").innerHTML + "<span style='background:#66ccff;'>P</span>";
            document.getElementById("help_menu_view").innerHTML = document.getElementById("help_menu_view").innerHTML + "<span style='background:#66ccff;'>H</span>";
            document.getElementsByClassName("file_open_menu")[0].innerHTML = document.getElementsByClassName("file_open_menu")[0].innerHTML + "<span style='background:#66ccff;'>O</span>";
            document.getElementById("file_menu_view_1").innerHTML = document.getElementById("file_menu_view_1").innerHTML + "<span style='background:#66ccff;'>S</span>";
            document.getElementById("file_menu_view_2").innerHTML = document.getElementById("file_menu_view_2").innerHTML + "<span style='background:#66ccff;'>L</span>";
            document.getElementById("menu_max_window").innerHTML = document.getElementById("menu_max_window").innerHTML + "<span style='background:#66ccff;'>X</span>";
            document.getElementById("file_menu_view_3").innerHTML = document.getElementById("file_menu_view_3").innerHTML + "<span style='background:#66ccff;'>F</span>";
            document.getElementById("file_menu_view_4").innerHTML = document.getElementById("file_menu_view_4").innerHTML + "<span style='background:#66ccff;'>C</span>";
            document.getElementById("play_menu_view_1").innerHTML = document.getElementById("play_menu_view_1").innerHTML + "<span style='background:#66ccff;'>P</span>";
            document.getElementById("play_menu_view_2").innerHTML = document.getElementById("play_menu_view_2").innerHTML + "<span style='background:#66ccff;'>.</span>";
            document.getElementById("play_menu_view_3").innerHTML = document.getElementById("play_menu_view_3").innerHTML + "<span style='background:#66ccff;'>,</span>";
            document.getElementById("play_menu_view_4").innerHTML = document.getElementById("play_menu_view_4").innerHTML + "<span style='background:#66ccff;'>S</span>";
            document.getElementById("play_menu_view_5").innerHTML = document.getElementById("play_menu_view_5").innerHTML + "<span style='background:#66ccff;'>B</span>";
            document.getElementById("play_menu_view_6").innerHTML = document.getElementById("play_menu_view_6").innerHTML + "<span style='background:#66ccff;'>V</span>";
            document.getElementById("help_menu_view_1").innerHTML = document.getElementById("help_menu_view_1").innerHTML + "<span style='background:#66ccff;'>H</span>";
            document.getElementById("help_menu_view_2").innerHTML = document.getElementById("help_menu_view_2").innerHTML + "<span style='background:#66ccff;'>F</span>";
            document.getElementById("help_menu_view_3").innerHTML = document.getElementById("help_menu_view_3").innerHTML + "<span style='background:#66ccff;'>A</span>";
            document.onkeyup = keyUp;
            function keyUp() {
                if (event.keyCode == 18) {
                    document.getElementById("file_menu_view").innerHTML = "文件";
                    document.getElementById("play_menu_view").innerHTML = "播放";
                    document.getElementById("help_menu_view").innerHTML = "帮助";
                    document.getElementsByClassName("file_open_menu")[0].innerHTML = '<input type="file" id="file_menu" tabindex="-1" hidden="hidden" accept=".json,.mid,.midi,.kar,.sty,.krx,.rmi" onclick="file_menu_1()"> 打开文件';
                    document.getElementById("file_menu_view_1").innerHTML = "保存";
                    document.getElementById("file_menu_view_2").innerHTML = "语言";
                    document.getElementById("menu_max_window").innerHTML = "窗口还原";
                    document.getElementById("file_menu_view_3").innerHTML = "全屏";
                    document.getElementById("file_menu_view_4").innerHTML = "关闭";
                    document.getElementById("play_menu_view_1").innerHTML = "暂停";
                    document.getElementById("play_menu_view_2").innerHTML = "快放 10 秒";
                    document.getElementById("play_menu_view_3").innerHTML = "慢放 10 秒";
                    document.getElementById("play_menu_view_4").innerHTML = "停止播放";
                    document.getElementById("play_menu_view_5").innerHTML = "显示进度条";
                    document.getElementById("play_menu_view_6").innerHTML = "音量大小";
                    document.getElementById("help_menu_view_1").innerHTML = "使用指南";
                    document.getElementById("help_menu_view_2").innerHTML = "反馈漏洞";
                    document.getElementById("help_menu_view_3").innerHTML = "关于";
                    if (zh_choose == "t") {
                        zh_tran('t');
                    }
                }
            }

        }
    }
    if (event.keyCode == 27) {
        back();
    }
    window.addEventListener('popstate', function (event) {
        back();
        pushHistory();
    });
    if (event.keyCode == 93) {
        menu();
        document.getElementById('warning').style.animation = 'warning_2 0.1s';
        document.getElementById('warning').style.width = '0%';
        document.getElementById('warning').style.height = '0px';
        document.getElementById('warning').style.left = '50%';
        warning.innerHTML = "";
        warnoff();
        fk1 = false;
        fb1 = 0;
    }
    if (event.keyCode == 13) {
        if (fe1 == false && ff1 == false && fg1 == false && fl1 == false) {
            enter();
        }
        else if (fe1 == true) {
            enter1();
        }
        else if (ff1 == true) {
            enter2();
        }
        else if (fg1 == true) {
            enter3();
        }
    }
    if (fk1 == false) {
        if (event.keyCode == 37) {
            if (fh1 == 13) {
                vol2();
            }
            if (fe1 == false && ff1 == false && fg1 == false && fl1 == false) {
                fa1 = fa1 - 1;
                fa2();
            }
            if (fe1 == true) {
                if (fh1 == 12) {
                    fh1 = fh1 - 1;
                }
                fe2();
            }
        }
        if (event.keyCode == 38) {
            if (fe1 == false && ff1 == false && fg1 == false && fl1 == false) {
                if (fa1 == 0) {
                    if (id2 == 0) {
                        fb1 = fb1 - 1;
                        fb2();
                    } else {
                        fb1 = 0;
                    }
                }
                if (fa1 == 1) {
                    fc1 = fc1 - 1;
                    fc2();
                }
                if (fa1 == 2) {
                    fd1 = fd1 - 1;
                    fd2();
                }
            }
            if (fe1 == true) {
                fh1 = fh1 - 1;
                if (fh1 == 11) {
                    fh1 = 10;
                }
                fe2();
            }
            if (ff1 == true) {
                fi1 = fi1 - 1;
                ff2();
            }
            if (fg1 == true) {
                fj1 = fj1 - 1;
                fg2();
            }
        }
        if (event.keyCode == 39) {
            if (fh1 == 13) {
                vol2();
            }
            if (fe1 == false && ff1 == false && fg1 == false && fl1 == false) {
                fa1 = fa1 + 1;
                fa2();
            }
            if (fe1 == true) {
                if (fh1 == 11) {
                    fh1 = fh1 + 1;
                }
                fe2();
            }
        }
        if (event.keyCode == 40) {
            if (fa1 == 3) {
                fa1 = 2;
                fc1 = 0;
                fd1 = 0;
                document.getElementById('id22').style.backgroundColor = "#FB7299";
            }
            if (fe1 == false && ff1 == false && fg1 == false && fl1 == false) {
                if (fa1 == 0) {
                    if (id2 == 0) {
                        fb1 = fb1 + 1;
                        fb2();
                    } else {
                        fb1 = 0;
                        if (fa1 == 0) {
                            fa1 = 1;
                            fc1 = 0;
                        }
                    }
                }
                if (fa1 == 1) {
                    fc1 = fc1 + 1;
                    fc2();
                }
                if (fa1 == 2) {
                    fd1 = fd1 + 1;
                    fd2();
                }
            }
            if (fe1 == true) {
                fh1 = fh1 + 1;
                if (fh1 == 12) {
                    fh1 = 13;
                }
                fe2();
            }
            if (ff1 == true) {
                fi1 = fi1 + 1;
                ff2();
            }
            if (fg1 == true) {
                fj1 = fj1 + 1;
                fg2();
            }
        }
    }
}
function fe2() {
    if (fh1 < 0) {
        fh1 = 0;
    }
    if (fh1 > 16) {
        fh1 = 16;
    }
    if (fh1 == 0 || fh1 == -1) {
        document.getElementById("boxoff1").focus();
        document.getElementById('boxoff1').style.backgroundColor = "#FB7299";
        document.getElementById('boxoff1').style.color = "#fff";
    }
    if (fh1 == 1) {
        document.getElementById("note1").focus();
        document.getElementById('boxoff1').style.backgroundColor = "#fff";
        document.getElementById('boxoff1').style.color = "#555";
    }
    if (fh1 == 2) {
        document.getElementById("note2").focus();
    }
    if (fh1 == 3) {
        document.getElementById("note3").focus();
    }
    if (fh1 == 4) {
        document.getElementById("note4").focus();
    }
    if (fh1 == 5) {
        document.getElementById("note5").focus();
    }
    if (fh1 == 6) {
        document.getElementById("note6").focus();
    }
    if (fh1 == 7) {
        document.getElementById("note7").focus();
    }
    if (fh1 == 8) {
        document.getElementById("acc").focus();
    }
    if (fh1 == 9) {
        document.getElementById("sound").focus();
    }
    if (fh1 == 10) {
        document.getElementById("reverse").focus();
        document.getElementById('soundup').style.backgroundColor = "#FB7299";
        document.getElementById('soundup').style.color = "#fff";
        document.getElementById('sounddown').style.backgroundColor = "#FB7299";
        document.getElementById('sounddown').style.color = "#fff";
    }
    if (fh1 == 11) {
        document.getElementById("soundup").focus();
        document.getElementById('soundup').style.backgroundColor = "#00a1d6";
        document.getElementById('soundup').style.color = "#000";
        document.getElementById('sounddown').style.backgroundColor = "#FB7299";
        document.getElementById('sounddown').style.color = "#fff";
    }
    if (fh1 == 12) {
        document.getElementById("sounddown").focus();
        document.getElementById('sounddown').style.backgroundColor = "#00a1d6";
        document.getElementById('sounddown').style.color = "#000";
        document.getElementById('soundup').style.backgroundColor = "#FB7299";
        document.getElementById('soundup').style.color = "#fff";
        document.getElementById('vol').style.border = '1px solid #ddd';
    }
    if (fh1 == 13) {
        document.getElementById("vol").focus();
        document.getElementById('soundup').style.backgroundColor = "#FB7299";
        document.getElementById('soundup').style.color = "#fff";
        document.getElementById('sounddown').style.backgroundColor = "#FB7299";
        document.getElementById('sounddown').style.color = "#fff";
        document.getElementById('vol').style.border = '2px solid #444';
        vol2();
    }
    if (fh1 == 14) {
        document.getElementById("note8").focus();
        document.getElementById('vol').style.border = '1px solid #ddd';
    }
    if (fh1 == 15) {
        document.getElementById("note9").focus();
        document.getElementById('ok1').style.backgroundColor = "#fff";
        document.getElementById('ok1').style.color = "#555";
    }
    if (fh1 == 16) {
        document.getElementById("ok1").focus();
        document.getElementById('ok1').style.backgroundColor = "#FB7299";
        document.getElementById('ok1').style.color = "#fff";
    }
}
function ff2() {
    if (fi1 < 0) {
        fi1 = 0;
    }
    if (fi1 > 1) {
        fi1 = 1;
    }
    if (fi1 == 0 || fi1 == -1) {
        document.getElementById("boxoff2").focus();
        document.getElementById('boxoff2').style.backgroundColor = "#FB7299";
        document.getElementById('boxoff2').style.color = "#fff";
        document.getElementById('ok2').style.backgroundColor = "#fff";
        document.getElementById('ok2').style.color = "#555";
    }
    if (fi1 == 1) {
        document.getElementById('boxoff2').style.backgroundColor = "#fff";
        document.getElementById('boxoff2').style.color = "#555";
        document.getElementById("ok2").focus();
        document.getElementById('ok2').style.backgroundColor = "#FB7299";
        document.getElementById('ok2').style.color = "#fff";
    }
}
function fg2() {
    if (fj1 < 0) {
        fj1 = 0;
    }
    if (fj1 > 3) {
        fj1 = 3;
    }
    if (fj1 == 0 || fj1 == -1) {
        document.getElementById("boxoff3").focus();
        document.getElementById('boxoff3').style.backgroundColor = "#FB7299";
        document.getElementById('boxoff3').style.color = "#fff";
        document.getElementById('zh_cn').style.backgroundColor = "#fff";
        document.getElementById('zh_cn').style.color = "#555";
    }
    if (fj1 == 1) {
        document.getElementById("zh_cn").focus();
        document.getElementById('zh_cn').style.backgroundColor = "#76b9f8";
        document.getElementById('zh_cn').style.color = "#fff";
        document.getElementById('zh_tw').style.backgroundColor = "#fff";
        document.getElementById('zh_tw').style.color = "#555";
        document.getElementById('boxoff3').style.backgroundColor = "#fff";
        document.getElementById('boxoff3').style.color = "#555";
    }
    if (fj1 == 2) {
        document.getElementById("zh_tw").focus();
        document.getElementById('zh_tw').style.backgroundColor = "#76b9f8";
        document.getElementById('zh_tw').style.color = "#fff";
        document.getElementById('zh_cn').style.backgroundColor = "#fff";
        document.getElementById('zh_cn').style.color = "#555";
        document.getElementById('ok3').style.backgroundColor = "#fff";
        document.getElementById('ok3').style.color = "#555";
    }
    if (fj1 == 3) {
        document.getElementById("ok3").focus();
        document.getElementById('zh_tw').style.backgroundColor = "#fff";
        document.getElementById('zh_tw').style.color = "#555";
        document.getElementById('ok3').style.backgroundColor = "#FB7299";
        document.getElementById('ok3').style.color = "#fff";
    }
}
function fc2() {
    if (fc1 < 0) {
        fc1 = 0;
    }
    if (fc1 > 3) {
        fc1 = 3;
    }
    if (fc1 == 0) {
        fa1 = 0;
        fb1 = 0;
        document.getElementById("id16").focus();
        document.getElementById('id16').style.backgroundColor = "#00a1d6";
        document.getElementById('file').style.backgroundColor = "#FB7299";
        document.getElementById('file').style.color = "#fff";
        if (fd1 == 3) {
            document.getElementById('id16').style.backgroundColor = "#fb7299";
            document.getElementById("input").focus();
            fc1 = 2;
            fd1 = 2;
            fa1 = 1;
        }
    }
    if (fc1 == 1) {
        document.getElementById("file").focus();
        document.getElementById('id16').style.backgroundColor = "#FB7299";
        document.getElementById('file').style.backgroundColor = "#00a1d6";
        document.getElementById('file').style.color = "#000";
    }
    if (fc1 == 2) {
        document.getElementById("input").focus();
        document.getElementById('file').style.backgroundColor = "#FB7299";
        document.getElementById('file').style.color = "#fff";
        document.getElementById('id21').style.backgroundColor = "#FB7299";
        document.getElementById('id21').style.color = "#fff";
    }
    if (fc1 == 3) {
        document.getElementById("id21").focus();
        document.getElementById('id21').style.backgroundColor = "#00a1d6";
        document.getElementById('id21').style.color = "#000";
        if (fa1 == 3) {
            fc1 = 0;
        }
    }
}
function fd2() {
    if (fd1 < 0) {
        fd1 = 0;
    }
    if (fd1 > 3) {
        fd1 = 3;
    }
    if (fd1 == 0) {
        fa1 = 0;
        fb1 = 0;
        document.getElementById("id16").focus();
        document.getElementById('id16').style.backgroundColor = "#00a1d6";
        document.getElementById('id20').style.backgroundColor = "#FB7299";
        document.getElementById('id20').style.color = "#fff";
    }
    if (fd1 == 1) {
        document.getElementById("id20").focus();
        document.getElementById('id16').style.backgroundColor = "#FB7299";
        document.getElementById('id20').style.backgroundColor = "#00a1d6";
        document.getElementById('id20').style.color = "#000";
    }
    if (fd1 == 2) {
        document.getElementById("result").focus();
        document.getElementById('id20').style.backgroundColor = "#FB7299";
        document.getElementById('id20').style.color = "#fff";
        document.getElementById('id21').style.backgroundColor = "#FB7299";
        document.getElementById('id21').style.color = "#fff";
    }
    if (fd1 == 3) {
        document.getElementById("id21").focus();
        document.getElementById('id21').style.backgroundColor = "#00a1d6";
        document.getElementById('id21').style.color = "#000";
        if (fa1 == 1) {
            document.getElementById("id16").focus();
            document.getElementById('id16').style.backgroundColor = "#00a1d6";
            document.getElementById('id21').style.color = "#fff";
            document.getElementById('id21').style.backgroundColor = "#FB7299";
        }
        if (fa1 == 2 && fc1 == 2) {
            fc1 = 3;
        }
    }
}
function fa2() {
    if (fa1 < 0) {
        fa1 = 0;
    }
    if (fa1 > 3) {
        fa1 = 3;
    }
    if (fa1 == 0) {
        document.getElementById("id16").focus();
        fc1 = 1;
        fb1 = 0;
        fd1 = 1;
        document.getElementById('id16').style.backgroundColor = "#00a1d6";
        document.getElementById('file').style.backgroundColor = "#FB7299";
        document.getElementById('file').style.color = "#fff";
        document.getElementById('id21').style.backgroundColor = "#FB7299";
        document.getElementById('id21').style.color = "#fff";
    }
    if (fa1 == 1) {
        if (fd1 == 2) {
            document.getElementById("input").focus();
            document.getElementById('id16').style.backgroundColor = "#FB7299";
            document.getElementById('id16').style.color = "#fff";
            fc1 = 2;
        }
        if (fd1 == 1) {
            document.getElementById("file").focus();
            fc1 = 1;
            document.getElementById('id16').style.backgroundColor = "#FB7299";
            document.getElementById('id20').style.backgroundColor = "#FB7299";
            document.getElementById('file').style.backgroundColor = "#00a1d6";
            document.getElementById('file').style.color = "#000";
            document.getElementById('id20').style.color = "#fff";
        }
        if (fd1 == 3) {
            fd1 = 1;
            fc1 = 1;
            fa1 = 0;
            document.getElementById('id21').style.backgroundColor = "#FB7299";
            document.getElementById('id16').style.backgroundColor = "#00a1d6";
            document.getElementById('id21').style.color = "#fff";
            document.getElementById("id16").focus();
        }
    }
    if (fa1 == 2) {
        if (fc1 == 3 && fd1 == 3) {
            fa1 = 1;
            fc1 = 0;
        }
        if (fc1 == 0) {
            document.getElementById('id22').style.backgroundColor = '#fb7299';
            document.getElementById("id21").focus();
            document.getElementById('id21').style.color = "#000";
            document.getElementById('id21').style.backgroundColor = "#00a1d6";
        }
        if (fc1 == 2) {
            document.getElementById("result").focus();
            document.getElementById('id16').style.backgroundColor = "#FB7299";
            document.getElementById('id16').style.color = "#fff";
            fd1 = 2;
            document.getElementById('id22').style.backgroundColor = '#fb7299';
        }
        if (fc1 == 3) {
            document.getElementById('id21').style.backgroundColor = "#00a1d6";
            document.getElementById('id22').style.backgroundColor = '#fb7299';
            document.getElementById('id21').style.color = "#000";
            fa1 = 2;
            fd1 = 3;
            if (fa1 == 2) {
                fa1 = 3;
                fc1 = 0;
            }
        }
        if (fc1 == 1) {
            if (fd1 == 3) {
            } else {
                document.getElementById("id20").focus();
                fd1 = 1;
                document.getElementById('file').style.backgroundColor = "#FB7299";
                document.getElementById('id20').style.backgroundColor = "#00a1d6";
                document.getElementById('id22').style.backgroundColor = '#fb7299';
                document.getElementById('id20').style.color = "#000";
                document.getElementById('file').style.color = "#fff";
            }
        }
        if (fd1 == 3) {
            document.getElementById("id21").focus();
            document.getElementById('id21').style.backgroundColor = "#00a1d6";
            document.getElementById('id21').style.color = "#000";
            document.getElementById('id22').style.backgroundColor = "#FB7299";
        }
        if (fc1 == 3 && fd1 == 1) {
            fa1 = 3;
            fc1 = 1;
            fd1 = 1;
        }
    }
    if (fa1 == 3) {
        if (fc1 == 2 && fd1 == 2) {
            fc1 = 1;
            fd1 = 1;
        }
        document.getElementById('id22').style.backgroundColor = '#00a1d6';
        document.getElementById("id22").focus();
        document.getElementById('id21').style.backgroundColor = "#FB7299";
        document.getElementById('id21').style.color = "#fff";
        document.getElementById('id20').style.backgroundColor = "#FB7299";
        document.getElementById('id20').style.color = "#fff";
    }
}
function fb2() {
    if (fb1 < 0) {
        fb1 = 0;
    }
    if (fb1 > 14) {
        fb1 = 14;
    }
    switch (fb1) {
        case 0:
            document.getElementById("id16").focus();
            document.getElementById('move1').style.backgroundColor = "#66ccff";
            document.getElementById('move1').style.color = "#000";
            document.getElementById('id16').style.backgroundColor = "#00a1d6";
            fa1 = 0;
            fc1 = 1;
            fd1 = 1;
            break;
        case 1:
            document.getElementById("bpm").focus();
            document.getElementById('id16').style.backgroundColor = "#FB7299";
            document.getElementById('move1').style.color = "#FB7299";
            document.getElementById('move1').style.backgroundColor = "#aaddff";
            document.getElementById('move2').style.backgroundColor = "#66ccff";
            document.getElementById('move2').style.color = "#000";
            break;
        case 2:
            document.getElementById("beats").focus();
            document.getElementById('move2').style.color = "#FB7299";
            document.getElementById('move2').style.backgroundColor = "#aaddff";
            document.getElementById('move1').style.backgroundColor = "#66ccff";
            document.getElementById('move1').style.color = "#000";
            document.getElementById('move3').style.backgroundColor = "#66ccff";
            document.getElementById('move3').style.color = "#000";
            break;
        case 3:
            document.getElementById("notewidth").focus();
            document.getElementById('move3').style.color = "#FB7299";
            document.getElementById('move3').style.backgroundColor = "#aaddff";
            document.getElementById('move2').style.backgroundColor = "#66ccff";
            document.getElementById('move2').style.color = "#000";
            document.getElementById('move4').style.backgroundColor = "#66ccff";
            document.getElementById('move4').style.color = "#000";
            break;
        case 4:
            document.getElementById('move4').style.color = "#FB7299";
            document.getElementById("move4").focus();
            document.getElementById('move4').style.backgroundColor = "#aaddff";
            document.getElementById('move3').style.backgroundColor = "#66ccff";
            document.getElementById('move3').style.color = "#000";
            document.getElementById('move5').style.backgroundColor = "#66ccff";
            document.getElementById('move5').style.color = "#000";
            break;
        case 5:
            document.getElementById('move5').style.color = "#FB7299";
            document.getElementById("move5").focus();
            document.getElementById('move5').style.backgroundColor = "#aaddff";
            document.getElementById('move4').style.backgroundColor = "#66ccff";
            document.getElementById('move4').style.color = "#000";
            document.getElementById('move6').style.backgroundColor = "#66ccff";
            document.getElementById('move6').style.color = "#000";
            break;
        case 6:
            document.getElementById("move6").focus();
            document.getElementById('move6').style.color = "#FB7299";
            document.getElementById('move6').style.backgroundColor = "#aaddff";
            document.getElementById('move5').style.backgroundColor = "#66ccff";
            document.getElementById('move5').style.color = "#000";
            document.getElementById('move7').style.backgroundColor = "#66ccff";
            document.getElementById('move7').style.color = "#000";
            break;
        case 7:
            document.getElementById("move7").focus();
            document.getElementById('move7').style.color = "#FB7299";
            document.getElementById('move7').style.backgroundColor = "#aaddff";
            document.getElementById('move6').style.backgroundColor = "#66ccff";
            document.getElementById('move6').style.color = "#000";
            document.getElementById('move8').style.backgroundColor = "#66ccff";
            document.getElementById('move8').style.color = "#000";
            break;
        case 8:
            document.getElementById("move8").focus();
            document.getElementById('move8').style.color = "#FB7299";
            document.getElementById('move8').style.backgroundColor = "#aaddff";
            document.getElementById('move7').style.backgroundColor = "#66ccff";
            document.getElementById('move7').style.color = "#000";
            document.getElementById('move9').style.backgroundColor = "#66ccff";
            document.getElementById('move9').style.color = "#000";
            break;
        case 9:
            document.getElementById("move9").focus();
            document.getElementById('move9').style.color = "#FB7299";
            document.getElementById('move9').style.backgroundColor = "#aaddff";
            document.getElementById('move8').style.backgroundColor = "#66ccff";
            document.getElementById('move8').style.color = "#000";
            document.getElementById('move10').style.backgroundColor = "#66ccff";
            document.getElementById('move10').style.color = "#000";
            break;
        case 10:
            document.getElementById("move10").focus();
            document.getElementById('move10').style.color = "#FB7299";
            document.getElementById('move10').style.backgroundColor = "#aaddff";
            document.getElementById('move9').style.backgroundColor = "#66ccff";
            document.getElementById('move9').style.color = "#000";
            document.getElementById('isFull').style.backgroundColor = "#66ccff";
            document.getElementById('isFull').style.color = "#000";
            break;
        case 11:
            document.getElementById("isFull").focus();
            document.getElementById('isFull').style.color = "#FB7299";
            document.getElementById('isFull').style.backgroundColor = "#aaddff";
            document.getElementById('move10').style.backgroundColor = "#66ccff";
            document.getElementById('move10').style.color = "#000";
            document.getElementById('move11').style.backgroundColor = "#66ccff";
            document.getElementById('move11').style.color = "#000";
            break;
        case 12:
            document.getElementById("move11").focus();
            document.getElementById('move11').style.color = "#FB7299";
            document.getElementById('move11').style.backgroundColor = "#aaddff";
            document.getElementById('isFull').style.backgroundColor = "#66ccff";
            document.getElementById('isFull').style.color = "#000";
            document.getElementById('move12').style.backgroundColor = "#66ccff";
            document.getElementById('move12').style.color = "#000";
            break;
        case 13:
            document.getElementById("move12").focus();
            document.getElementById('move12').style.color = "#FB7299";
            document.getElementById('move12').style.backgroundColor = "#aaddff";
            document.getElementById('move11').style.backgroundColor = "#66ccff";
            document.getElementById('move11').style.color = "#000";
            document.getElementById('move13').style.backgroundColor = "#66ccff";
            document.getElementById('move13').style.color = "#000";
            break;
        case 14:
            document.getElementById("move13").focus();
            document.getElementById('move13').style.color = "#FB7299";
            document.getElementById('move13').style.backgroundColor = "#aaddff";
            document.getElementById('move12').style.backgroundColor = "#66ccff";
            document.getElementById('move12').style.color = "#000";
            break;
    }
}
function enter1() {
    switch (fh1) {
        case -1:
        case 0:
            hidder();
            break;
        case 1:
            if (document.getElementById('note1').checked == true) {
                var fh10 = document.getElementById('note1');
                fh10.checked = false;
            } else {
                var fh10 = document.getElementById('note1');
                fh10.checked = true;
            }
            break;
        case 2:
            if (document.getElementById('note2').checked == true) {
                var fh11 = document.getElementById('note2');
                fh11.checked = false;
            } else {
                var fh11 = document.getElementById('note2');
                fh11.checked = true;
            }
            break;
        case 3:
            if (document.getElementById('note3').checked == true) {
                var fh12 = document.getElementById('note3');
                fh12.checked = false;
            } else {
                var fh12 = document.getElementById('note3');
                fh12.checked = true;
            }
            break;
        case 4:
            if (document.getElementById('note4').checked == true) {
                var fh13 = document.getElementById('note4');
                fh13.checked = false;
            } else {
                var fh13 = document.getElementById('note4');
                fh13.checked = true;
            }
            break;
        case 5:
            if (document.getElementById('note5').checked == true) {
                var fh14 = document.getElementById('note5');
                fh14.checked = false;
            } else {
                var fh14 = document.getElementById('note5');
                fh14.checked = true;
            }
            break;
        case 6:
            if (document.getElementById('note6').checked == true) {
                var fh15 = document.getElementById('note6');
                fh15.checked = false;
            } else {
                var fh15 = document.getElementById('note6');
                fh15.checked = true;
            }
            break;
        case 7:
            if (document.getElementById('note7').checked == true) {
                var fh16 = document.getElementById('note7');
                fh16.checked = false;
            } else {
                var fh16 = document.getElementById('note7');
                fh16.checked = true;
            }
            break;
        case 8:
            fk1 = false;
            document.getElementById('warning').style.animation = 'warning_2 0.1s';
            document.getElementById('warning').style.width = '0%';
            document.getElementById('warning').style.height = '0px';
            document.getElementById('warning').style.left = '50%';
            warning.innerHTML = "";
            warnoff();
            break;
        case 9:
            if (document.getElementById('sound').checked == true) {
                var fh17 = document.getElementById('sound');
                fh17.checked = false;
            } else {
                var fh17 = document.getElementById('sound');
                fh17.checked = true;
            }
            break;
        case 14:
            if (document.getElementById('note8').checked == true) {
                var fh18 = document.getElementById('note8');
                fh18.checked = false;
            } else {
                var fh18 = document.getElementById('note8');
                fh18.checked = true;
            }
            break;
        case 15:
            if (document.getElementById('note9').checked == true) {
                var fh19 = document.getElementById('note9');
                fh19.checked = false;
            } else {
                var fh19 = document.getElementById('note9');
                fh19.checked = true;
            }
            break;
        case 16:
            hidder();
            break;
    }
}
function enter2() {
    switch (fi1) {
        case -1:
        case 0:
            hidder();
            break;
        case 1:
            hidder();
            break;
    }
}
function enter3() {
    switch (fj1) {
        case -1:
        case 0:
            hidder();
            break;
        case 1:
            zh_tran('s');
            break;
        case 2:
            zh_tran('t');
            break;
        case 3:
            hidder();
            break;
    }
}
function enter() {
    if (fa1 == 1 && fc1 == 2) {
        if (fk1 == false) {
            fk1 = true;
            lock();
        } else {
            fk1 = false;
            document.getElementById('warning').style.animation = 'warning_2 0.1s';
            document.getElementById('warning').style.width = '0%';
            document.getElementById('warning').style.height = '0px';
            document.getElementById('warning').style.left = '50%';
            warning.innerHTML = "";
            warnoff();
        }
    }
    if (fa1 == 2 && fd1 == 2) {
        if (fk1 == false) {
            fk1 = true;
            lock();
        } else {
            fk1 = false;
            document.getElementById('warning').style.animation = 'warning_2 0.1s';
            document.getElementById('warning').style.width = '0%';
            document.getElementById('warning').style.height = '0px';
            document.getElementById('warning').style.left = '50%';
            warning.innerHTML = "";
            warnoff();
        }
    }
    if (fa1 == 3) {
        document.getElementById("id22").focus();
    }
    switch (fb1) {
        case 1:
        case 2:
        case 3:
            if (fk1 == false) {
                fk1 = true;
                lock();
            } else {
                fk1 = false;
                document.getElementById('warning').style.animation = 'warning_2 0.1s';
                document.getElementById('warning').style.width = '0%';
                document.getElementById('warning').style.height = '0px';
                document.getElementById('warning').style.left = '50%';
                warning.innerHTML = "";
                warnoff();
            }
            break;
        case 4:
            if (fk1 == false) {
                fk1 = true;
                lock();
                document.getElementById("games").focus();
            } else {
                fk1 = false;
                document.getElementById('warning').style.animation = 'warning_2 0.1s';
                document.getElementById('warning').style.width = '0%';
                document.getElementById('warning').style.height = '0px';
                document.getElementById('warning').style.left = '50%';
                warning.innerHTML = "";
                warnoff();
                document.getElementById("move4").focus();
            }
            break;
        case 5:
            if (fk1 == false) {
                fk1 = true;
                lock();
                document.getElementById("key").focus();
            } else {
                fk1 = false;
                document.getElementById('warning').style.animation = 'warning_2 0.1s';
                document.getElementById('warning').style.width = '0%';
                document.getElementById('warning').style.height = '0px';
                document.getElementById('warning').style.left = '50%';
                warning.innerHTML = "";
                warnoff();
                document.getElementById("move5").focus();
            }
            break;
        case 6:
            if (document.getElementById('continue').checked == true) {
                var names = name.split(",")
                var inputs = document.getElementsByTagName('input')
                var id11 = 0;
                var id12 = 0;
                names[id12] === inputs[id11].id;
                inputs[id11].checked = false;
            } else {
                var names = name.split(",")
                var inputs = document.getElementsByTagName('input')
                var id11 = 0;
                var id12 = 0;
                names[id12] === inputs[id11].id;
                inputs[id11].checked = true;
            }
            break;
        case 7:
            if (document.getElementById('manual').checked == true) {
                var names = name.split(",")
                var inputs = document.getElementsByTagName('input')
                var id11 = 1;
                var id12 = 1;
                names[id12] === inputs[id11].id;
                inputs[id11].checked = false;
            } else {
                var names = name.split(",")
                var inputs = document.getElementsByTagName('input')
                var id11 = 1;
                var id12 = 1;
                names[id12] === inputs[id11].id;
                inputs[id11].checked = true;
            }
            break;
        case 8:
            note();
            fe1 = true;
            break;
        case 10:
            about();
            ff1 = true;
            break;
        case 11:
            isFull();
            break;
        case 12:
            id0();
            fg1 = true;
            break;
        case 14:
            help_window();
            break;
    }
}
//全屏部分
var html = document.querySelector("html");
function isFull() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        if (document.cancelFullscreen) {
            document.cancelFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msCancelFullScreen) {
            document.msCancelFullScreen();
        }
    } else {
        if (html.requestFullscreen) {
            html.requestFullscreen();
        } else if (html.webkitRequestFullScreen) {
            html.webkitRequestFullScreen();
        } else if (html.mozRequestFullScreen) {
            html.mozRequestFullScreen();
        } else if (html.msRequestFullScreen) {
            html.msRequestFullScreen();
        }
    }
}
var sound1 = 0;
function soundup() {
    a = document.getElementById("result").value;
    //简写替换例如（例如d直接替换成#c）有可能导致转化混乱，故每一个音符逐一转换。虽然会使程序臃肿
    //midi最高音阶极限
    a = a.replace(/\/g6.mp3/g, "");
    a = a.replace(/\/#f6.mp3/g, "/g6.mp3");
    a = a.replace(/\/f6.mp3/g, "/#f6.mp3");
    a = a.replace(/\/e6.mp3/g, "/f6.mp3");
    a = a.replace(/\/#d6.mp3/g, "/e6.mp3");
    a = a.replace(/\/d6.mp3/g, "/#d6.mp3");
    a = a.replace(/\/#c6.mp3/g, "/d6.mp3");
    a = a.replace(/\/c6.mp3/g, "/#c6.mp3");
    a = a.replace(/\/b5.mp3/g, "/c6.mp3");
    a = a.replace(/\/#a5.mp3/g, "/b5.mp3");
    a = a.replace(/\/a5.mp3/g, "/#a5.mp3");
    a = a.replace(/\/#g5.mp3/g, "/a5.mp3");
    a = a.replace(/\/g5.mp3/g, "/#g5.mp3");
    a = a.replace(/\/#f5.mp3/g, "/g5.mp3");
    a = a.replace(/\/f5.mp3/g, "/#f5.mp3");
    a = a.replace(/\/e5.mp3/g, "/f5.mp3");
    a = a.replace(/\/#d5.mp3/g, "/e5.mp3");
    a = a.replace(/\/d5.mp3/g, "/#d5.mp3");
    a = a.replace(/\/#c5.mp3/g, "/d5.mp3");
    //正常的88个音阶的分界线
    a = a.replace(/\/c5.mp3/g, "/#c5.mp3");
    a = a.replace(/\/b4.mp3/g, "/c5.mp3");
    a = a.replace(/\/#a4.mp3/g, "/b4.mp3");
    a = a.replace(/\/a4.mp3/g, "/#a4.mp3");
    a = a.replace(/\/#g4.mp3/g, "/a4.mp3");
    a = a.replace(/\/g4.mp3/g, "/#g4.mp3");
    a = a.replace(/\/#f4.mp3/g, "/g4.mp3");
    a = a.replace(/\/f4.mp3/g, "/#f4.mp3");
    a = a.replace(/\/e4.mp3/g, "/f4.mp3");
    a = a.replace(/\/#d4.mp3/g, "/e4.mp3");
    a = a.replace(/\/d4.mp3/g, "/#d4.mp3");
    a = a.replace(/\/#c4.mp3/g, "/d4.mp3");
    a = a.replace(/\/c4.mp3/g, "/#c4.mp3");
    a = a.replace(/\/b3.mp3/g, "/c4.mp3");
    a = a.replace(/\/#a3.mp3/g, "/b3.mp3");
    a = a.replace(/\/a3.mp3/g, "/#a3.mp3");
    a = a.replace(/\/#g3.mp3/g, "/a3.mp3");
    a = a.replace(/\/g3.mp3/g, "/#g3.mp3");
    a = a.replace(/\/#f3.mp3/g, "/g3.mp3");
    a = a.replace(/\/f3.mp3/g, "/#f3.mp3");
    a = a.replace(/\/e3.mp3/g, "/f3.mp3");
    a = a.replace(/\/#d3.mp3/g, "/e3.mp3");
    a = a.replace(/\/d3.mp3/g, "/#d3.mp3");
    a = a.replace(/\/#c3.mp3/g, "/d3.mp3");
    a = a.replace(/\/c3.mp3/g, "/#c3.mp3");
    a = a.replace(/\/b2.mp3/g, "/c3.mp3");
    a = a.replace(/\/#a2.mp3/g, "/b2.mp3");
    a = a.replace(/\/a2.mp3/g, "/#a2.mp3");
    a = a.replace(/\/#g2.mp3/g, "/a2.mp3");
    a = a.replace(/\/g2.mp3/g, "/#g2.mp3");
    a = a.replace(/\/#f2.mp3/g, "/g2.mp3");
    a = a.replace(/\/f2.mp3/g, "/#f2.mp3");
    a = a.replace(/\/e2.mp3/g, "/f2.mp3");
    a = a.replace(/\/#d2.mp3/g, "/e2.mp3");
    a = a.replace(/\/d2.mp3/g, "/#d2.mp3");
    a = a.replace(/\/#c2.mp3/g, "/d2.mp3");
    a = a.replace(/\/c2.mp3/g, "/#c2.mp3");
    a = a.replace(/\/b1.mp3/g, "/c2.mp3");
    a = a.replace(/\/#a1.mp3/g, "/b1.mp3");
    a = a.replace(/\/a1.mp3/g, "/#a1.mp3");
    a = a.replace(/\/#g1.mp3/g, "/a1.mp3");
    a = a.replace(/\/g1.mp3/g, "/#g1.mp3");
    a = a.replace(/\/#f1.mp3/g, "/g1.mp3");
    a = a.replace(/\/f1.mp3/g, "/#f1.mp3");
    a = a.replace(/\/e1.mp3/g, "/f1.mp3");
    a = a.replace(/\/#d1.mp3/g, "/e1.mp3");
    a = a.replace(/\/d1.mp3/g, "/#d1.mp3");
    a = a.replace(/\/#c1.mp3/g, "/d1.mp3");
    a = a.replace(/\/c1.mp3/g, "/#c1.mp3");
    a = a.replace(/\/b.mp3/g, "/c1.mp3");
    a = a.replace(/\/#a.mp3/g, "/b.mp3");
    a = a.replace(/\/a.mp3/g, "/#a.mp3");
    a = a.replace(/\/#g.mp3/g, "/a.mp3");
    a = a.replace(/\/g.mp3/g, "/#g.mp3");
    a = a.replace(/\/#f.mp3/g, "/g.mp3");
    a = a.replace(/\/f.mp3/g, "/#f.mp3");
    a = a.replace(/\/e.mp3/g, "/f.mp3");
    a = a.replace(/\/#d.mp3/g, "/e.mp3");
    a = a.replace(/\/d.mp3/g, "/#d.mp3");
    a = a.replace(/\/#c.mp3/g, "/d.mp3");
    a = a.replace(/\/c.mp3/g, "/#c.mp3");
    a = a.replace(/\/B-1.mp3/g, "/c.mp3");
    a = a.replace(/\/#A-1.mp3/g, "/B-1.mp3");
    a = a.replace(/\/A-1.mp3/g, "/#A-1.mp3");
    a = a.replace(/\/#G-1.mp3/g, "/A-1.mp3");
    a = a.replace(/\/G-1.mp3/g, "/#G-1.mp3");
    a = a.replace(/\/#F-1.mp3/g, "/G-1.mp3");
    a = a.replace(/\/F-1.mp3/g, "/#F-1.mp3");
    a = a.replace(/\/E-1.mp3/g, "/F-1.mp3");
    a = a.replace(/\/#D-1.mp3/g, "/E-1.mp3");
    a = a.replace(/\/D-1.mp3/g, "/#D-1.mp3");
    a = a.replace(/\/#C-1.mp3/g, "/D-1.mp3");
    a = a.replace(/\/C-1.mp3/g, "/#C-1.mp3");
    a = a.replace(/\/B-2.mp3/g, "/C-1.mp3");
    a = a.replace(/\/#A-2.mp3/g, "/B-2.mp3");
    a = a.replace(/\/A-2.mp3/g, "/#A-2.mp3");
    a = a.replace(/\/#G-2.mp3/g, "/A-2.mp3");
    a = a.replace(/\/G-2.mp3/g, "/#G-2.mp3");
    a = a.replace(/\/#F-2.mp3/g, "/G-2.mp3");
    a = a.replace(/\/F-2.mp3/g, "/#F-2.mp3");
    a = a.replace(/\/E-2.mp3/g, "/F-2.mp3");
    a = a.replace(/\/#D-2.mp3/g, "/E-2.mp3");
    a = a.replace(/\/D-2.mp3/g, "/#D-2.mp3");
    a = a.replace(/\/#C-2.mp3/g, "/D-2.mp3");
    a = a.replace(/\/C-2.mp3/g, "/#C-2.mp3");
    a = a.replace(/\/B-3.mp3/g, "/C-2.mp3");
    a = a.replace(/\/#A-3.mp3/g, "/B-3.mp3");
    a = a.replace(/\/A-3.mp3/g, "/#A-3.mp3");
    //正常的88个音阶的分界线
    a = a.replace(/\/#G-3.mp3/g, "/A-3.mp3");
    a = a.replace(/\/G-3.mp3/g, "/#G-3.mp3");
    a = a.replace(/\/#F-3.mp3/g, "/G-3.mp3");
    a = a.replace(/\/F-3.mp3/g, "/#F-3.mp3");
    a = a.replace(/\/E-3.mp3/g, "/F-3.mp3");
    a = a.replace(/\/#D-3.mp3/g, "/E-3.mp3");
    a = a.replace(/\/D-3.mp3/g, "/#D-3.mp3");
    a = a.replace(/\/#C-3.mp3/g, "/D-3.mp3");
    a = a.replace(/\/C-3.mp3/g, "/#C-3.mp3");
    a = a.replace(/\/B-4.mp3/g, "/C-3.mp3");
    a = a.replace(/\/#A-4.mp3/g, "/B-4.mp3");
    a = a.replace(/\/A-4.mp3/g, "/#A-4.mp3");
    a = a.replace(/\/#G-4.mp3/g, "/A-4.mp3");
    a = a.replace(/\/G-4.mp3/g, "/#G-4.mp3");
    a = a.replace(/\/#F-4.mp3/g, "/G-4.mp3");
    a = a.replace(/\/F-4.mp3/g, "/#F-4.mp3");
    a = a.replace(/\/E-4.mp3/g, "/F-4.mp3");
    a = a.replace(/\/#D-4.mp3/g, "/E-4.mp3");
    a = a.replace(/\/D-4.mp3/g, "/#D-4.mp3");
    a = a.replace(/\/#C-4.mp3/g, "/D-4.mp3");
    a = a.replace(/\/C-4.mp3/g, "/#C-4.mp3");
    document.getElementById("result").value = a;
    sound1 = sound1 + 1;
    if (sound1 > 60) {
        sound1 = 60;
    }
    soundshow1();
}
function sounddown() {
    a = document.getElementById("result").value;
    //简写替换例如（例如d直接替换成#c）有可能导致转化混乱，故每一个音符逐一转换。虽然会使程序臃肿
    //midi最低音阶极限
    a = a.replace(/\/C-4.mp3/g, "");
    a = a.replace(/\/#C-4.mp3/g, "/C-4.mp3");
    a = a.replace(/\/D-4.mp3/g, "/#C-4.mp3");
    a = a.replace(/\/#D-4.mp3/g, "/D-4.mp3");
    a = a.replace(/\/E-4.mp3/g, "/#D-4.mp3");
    a = a.replace(/\/F-4.mp3/g, "/E-4.mp3");
    a = a.replace(/\/#F-4.mp3/g, "/F-4.mp3");
    a = a.replace(/\/G-4.mp3/g, "/#F-4.mp3");
    a = a.replace(/\/#G-4.mp3/g, "/G-4.mp3");
    a = a.replace(/\/A-4.mp3/g, "/#G-4.mp3");
    a = a.replace(/\/#A-4.mp3/g, "/A-4.mp3");
    a = a.replace(/\/B-4.mp3/g, "/#A-4.mp3");
    a = a.replace(/\/C-3.mp3/g, "/B-4.mp3");
    a = a.replace(/\/#C-3.mp3/g, "/C-3.mp3");
    a = a.replace(/\/D-3.mp3/g, "/#C-3.mp3");
    a = a.replace(/\/#D-3.mp3/g, "/D-3.mp3");
    a = a.replace(/\/E-3.mp3/g, "/#D-3.mp3");
    a = a.replace(/\/F-3.mp3/g, "/E-3.mp3");
    a = a.replace(/\/#F-3.mp3/g, "/F-3.mp3");
    a = a.replace(/\/G-3.mp3/g, "/#F-3.mp3");
    a = a.replace(/\/#G-3.mp3/g, "/G-3.mp3");
    //正常的88个音阶的分界线
    a = a.replace(/\/A-3.mp3/g, "/#G-3.mp3");
    a = a.replace(/\/#A-3.mp3/g, "/A-3.mp3");
    a = a.replace(/\/B-3.mp3/g, "/#A-3.mp3");
    a = a.replace(/\/C-2.mp3/g, "/B-3.mp3");
    a = a.replace(/\/#C-2.mp3/g, "/C-2.mp3");
    a = a.replace(/\/D-2.mp3/g, "/#C-2.mp3");
    a = a.replace(/\/#D-2.mp3/g, "/D-2.mp3");
    a = a.replace(/\/E-2.mp3/g, "/#D-2.mp3");
    a = a.replace(/\/F-2.mp3/g, "/E-2.mp3");
    a = a.replace(/\/#F-2.mp3/g, "/F-2.mp3");
    a = a.replace(/\/G-2.mp3/g, "/#F-2.mp3");
    a = a.replace(/\/#G-2.mp3/g, "/G-2.mp3");
    a = a.replace(/\/A-2.mp3/g, "/#G-2.mp3");
    a = a.replace(/\/#A-2.mp3/g, "/A-2.mp3");
    a = a.replace(/\/B-2.mp3/g, "/#A-2.mp3");
    a = a.replace(/\/C-1.mp3/g, "/B-2.mp3");
    a = a.replace(/\/#C-1.mp3/g, "/C-1.mp3");
    a = a.replace(/\/D-1.mp3/g, "/#C-1.mp3");
    a = a.replace(/\/#D-1.mp3/g, "/D-1.mp3");
    a = a.replace(/\/E-1.mp3/g, "/#D-1.mp3");
    a = a.replace(/\/F-1.mp3/g, "/E-1.mp3");
    a = a.replace(/\/#F-1.mp3/g, "/F-1.mp3");
    a = a.replace(/\/G-1.mp3/g, "/#F-1.mp3");
    a = a.replace(/\/#G-1.mp3/g, "/G-1.mp3");
    a = a.replace(/\/A-1.mp3/g, "/#G-1.mp3");
    a = a.replace(/\/#A-1.mp3/g, "/A-1.mp3");
    a = a.replace(/\/B-1.mp3/g, "/#A-1.mp3");
    a = a.replace(/\/c.mp3/g, "/B-1.mp3");
    a = a.replace(/\/#c.mp3/g, "/c.mp3");
    a = a.replace(/\/d.mp3/g, "/#c.mp3");
    a = a.replace(/\/#d.mp3/g, "/d.mp3");
    a = a.replace(/\/e.mp3/g, "/#d.mp3");
    a = a.replace(/\/f.mp3/g, "/e.mp3");
    a = a.replace(/\/#f.mp3/g, "/f.mp3");
    a = a.replace(/\/g.mp3/g, "/#f.mp3");
    a = a.replace(/\/#g.mp3/g, "/g.mp3");
    a = a.replace(/\/a.mp3/g, "/#g.mp3");
    a = a.replace(/\/#a.mp3/g, "/a.mp3");
    a = a.replace(/\/b.mp3/g, "/#a.mp3");
    a = a.replace(/\/c1.mp3/g, "/b.mp3");
    a = a.replace(/\/#c1.mp3/g, "/c1.mp3");
    a = a.replace(/\/d1.mp3/g, "/#c1.mp3");
    a = a.replace(/\/#d1.mp3/g, "/d1.mp3");
    a = a.replace(/\/e1.mp3/g, "/#d1.mp3");
    a = a.replace(/\/f1.mp3/g, "/e1.mp3");
    a = a.replace(/\/#f1.mp3/g, "/f1.mp3");
    a = a.replace(/\/g1.mp3/g, "/#f1.mp3");
    a = a.replace(/\/#g1.mp3/g, "/g1.mp3");
    a = a.replace(/\/a1.mp3/g, "/#g1.mp3");
    a = a.replace(/\/#a1.mp3/g, "/a1.mp3");
    a = a.replace(/\/b1.mp3/g, "/#a1.mp3");
    a = a.replace(/\/c2.mp3/g, "/b1.mp3");
    a = a.replace(/\/#c2.mp3/g, "/c2.mp3");
    a = a.replace(/\/d2.mp3/g, "/#c2.mp3");
    a = a.replace(/\/#d2.mp3/g, "/d2.mp3");
    a = a.replace(/\/e2.mp3/g, "/#d2.mp3");
    a = a.replace(/\/f2.mp3/g, "/e2.mp3");
    a = a.replace(/\/#f2.mp3/g, "/f2.mp3");
    a = a.replace(/\/g2.mp3/g, "/#f2.mp3");
    a = a.replace(/\/#g2.mp3/g, "/g2.mp3");
    a = a.replace(/\/a2.mp3/g, "/#g2.mp3");
    a = a.replace(/\/#a2.mp3/g, "/a2.mp3");
    a = a.replace(/\/b2.mp3/g, "/#a2.mp3");
    a = a.replace(/\/c3.mp3/g, "/b2.mp3");
    a = a.replace(/\/#c3.mp3/g, "/c3.mp3");
    a = a.replace(/\/d3.mp3/g, "/#c3.mp3");
    a = a.replace(/\/#d3.mp3/g, "/d3.mp3");
    a = a.replace(/\/e3.mp3/g, "/#d3.mp3");
    a = a.replace(/\/f3.mp3/g, "/e3.mp3");
    a = a.replace(/\/#f3.mp3/g, "/f3.mp3");
    a = a.replace(/\/g3.mp3/g, "/#f3.mp3");
    a = a.replace(/\/#g3.mp3/g, "/g3.mp3");
    a = a.replace(/\/a3.mp3/g, "/#g3.mp3");
    a = a.replace(/\/#a3.mp3/g, "/a3.mp3");
    a = a.replace(/\/b3.mp3/g, "/#a3.mp3");
    a = a.replace(/\/c4.mp3/g, "/b3.mp3");
    a = a.replace(/\/#c4.mp3/g, "/c4.mp3");
    a = a.replace(/\/d4.mp3/g, "/#c4.mp3");
    a = a.replace(/\/#d4.mp3/g, "/d4.mp3");
    a = a.replace(/\/e4.mp3/g, "/#d4.mp3");
    a = a.replace(/\/f4.mp3/g, "/e4.mp3");
    a = a.replace(/\/#f4.mp3/g, "/f4.mp3");
    a = a.replace(/\/g4.mp3/g, "/#f4.mp3");
    a = a.replace(/\/#g4.mp3/g, "/g4.mp3");
    a = a.replace(/\/a4.mp3/g, "/#g4.mp3");
    a = a.replace(/\/#a4.mp3/g, "/a4.mp3");
    a = a.replace(/\/b4.mp3/g, "/#a4.mp3");
    a = a.replace(/\/c5.mp3/g, "/b4.mp3");
    //正常的88个音阶的分界线
    a = a.replace(/\/#c5.mp3/g, "/c5.mp3");
    a = a.replace(/\/d5.mp3/g, "/#c5.mp3");
    a = a.replace(/\/#d5.mp3/g, "/d5.mp3");
    a = a.replace(/\/e5.mp3/g, "/#d5.mp3");
    a = a.replace(/\/f5.mp3/g, "/e5.mp3");
    a = a.replace(/\/#f5.mp3/g, "/f5.mp3");
    a = a.replace(/\/g5.mp3/g, "/#f5.mp3");
    a = a.replace(/\/#g5.mp3/g, "/g5.mp3");
    a = a.replace(/\/a5.mp3/g, "/#g5.mp3");
    a = a.replace(/\/#a5.mp3/g, "/a5.mp3");
    a = a.replace(/\/b5.mp3/g, "/#a5.mp3");
    a = a.replace(/\/c6.mp3/g, "/b5.mp3");
    a = a.replace(/\/#c6.mp3/g, "/c6.mp3");
    a = a.replace(/\/d6.mp3/g, "/#c6.mp3");
    a = a.replace(/\/#d6.mp3/g, "/d6.mp3");
    a = a.replace(/\/e6.mp3/g, "/#d6.mp3");
    a = a.replace(/\/f6.mp3/g, "/e6.mp3");
    a = a.replace(/\/#f6.mp3/g, "/f6.mp3");
    a = a.replace(/\/g6.mp3/g, "/#f6.mp3");
    //midi最高音阶极限
    document.getElementById("result").value = a;
    sound1 = sound1 - 1;
    if (sound1 < -60) {
        sound1 = -60;
    }
    soundshow1();
}
function soundshow1() {
    if (sound1 > 0) {
        soundshow.innerHTML = "▲音调升了" + sound1 + "个半音";
        document.getElementById('soundshow').style.color = '#00a1d6';
        document.getElementById("warning_sound").innerHTML = "♯*" + sound1 + "♩";
        document.getElementById("warning_sound").style.color = '#00a1d6';
    }
    if (sound1 == 0) {
        soundshow.innerHTML = "正常";
        document.getElementById('soundshow').style.color = '#555';
        document.getElementById("warning_sound").innerHTML = "♮正常";
        document.getElementById("warning_sound").style.color = '#555';
    }
    if (sound1 < 0) {
        sound2 = Math.abs(sound1);
        soundshow.innerHTML = "▼音调降了" + sound2 + "个半音";
        document.getElementById('soundshow').style.color = '#FB7299';
        document.getElementById("warning_sound").innerHTML = "♭*" + sound2 + "♩";
        document.getElementById("warning_sound").style.color = '#fb7299';
    }
    if (zh_choose == "t") {
        zh_tran('t');
    }
}
document.getElementById('vol').style.background = 'linear-gradient(to right, #32B0DA 0%, #32B0DA 100%,#eee 100%, #eee)';
var vol1 = document.getElementById("vol").value;
document.getElementById("volshow").innerHTML = vol1 + "%";
function vol2() {
    var vol1 = document.getElementById("vol").value;
    document.getElementById("volshow").innerHTML = vol1 + "%";
    var vol3 = vol1 + "%";
    document.getElementById('vol').style.background = 'linear-gradient(to right, #32B0DA 0%, #32B0DA ' + vol3 + ',#eee ' + vol3 + ', #eee)';
}
//光标锁定
function lock() {
    fk1 = true;
    document.getElementById('warning').style.display = 'inline';
    document.getElementById('warning').style.animation = 'warning_1 0.1s';
    document.getElementById('warning').style.width = '60%';
    document.getElementById('warning').style.height = 'auto';
    document.getElementById('warning').style.left = '20%';
    setTimeout(function () {
        warning.innerHTML = "<b>焦点已锁定，如需进行其他地方的操作请再次按下确定键、菜单键或返回键，或点击此消息。</b>";
        if (zh_choose == "t") {
            zh_tran('t');
        }
    }, 100);
}
//操作系统识别
var sUserAgent = navigator.userAgent;
var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
//对苹果操作系统的识别
var bIsMac = sUserAgent.toLowerCase().match(/Mac OS/i) == "mac os";
var bIsiPhone = sUserAgent.toLowerCase().match(/iphone/i) == "iphone";
var bIsiPod = sUserAgent.toLowerCase().match(/ipod/i) == "ipod";
var bIsiPad = sUserAgent.toLowerCase().match(/ipad/i) == "ipad";
var bIsWatch = sUserAgent.toLowerCase().match(/watch/i) == "watch";
var bIsTV = sUserAgent.toLowerCase().match(/tv/i) == "tv";
//Linux部分发行版的识别
var bIsUbuntu = sUserAgent.toLowerCase().match(/ubuntu/i) == "ubuntu";
var bIsDebian = sUserAgent.toLowerCase().match(/debian/i) == "debian";
var bIsRedhat = sUserAgent.toLowerCase().match(/rhel/i) == "redhat";
var bIsCentos = sUserAgent.toLowerCase().match(/centos/i) == "centos";
var bIsAlpine = sUserAgent.toLowerCase().match(/alpine/i) == "alpine";
var bIsSlackware = sUserAgent.toLowerCase().match(/slackware/i) == "slackware";
var bIsArch = sUserAgent.toLowerCase().match(/arch/i) == "arch";
var bIsKali = sUserAgent.toLowerCase().match(/kali/i) == "kali";
var bIsUOS = sUserAgent.toLowerCase().match(/uos/i) == "uos";
var bIsDeepin = sUserAgent.toLowerCase().match(/deepin/i) == "deepin";
var bIsSUSE = sUserAgent.toLowerCase().match(/suse/i) == "suse";
var bIsFedora = sUserAgent.toLowerCase().match(/fedora/i) == "fedora";
var bIsMint = sUserAgent.toLowerCase().match(/mint/i) == "mint";
var bIsMageia = sUserAgent.toLowerCase().match(/mageia/i) == "mageia";
var bIsManjaro = sUserAgent.toLowerCase().match(/manjaro/i) == "manjaro";
var bIsGentoo = sUserAgent.toLowerCase().match(/gentoo/i) == "gentoo";
var bIsKylin = sUserAgent.toLowerCase().match(/kylin/i) == "kylin";
if (isLinux) {
    if (bIsAndroid) {
        detectos.innerHTML = "Android";
    }
    else if (bIsUbuntu) detectos.innerHTML = "Ubuntu";
    else if (bIsDebian) detectos.innerHTML = "Debian";
    else if (bIsFedora) detectos.innerHTML = "Fedora";
    else if (bIsRedhat) detectos.innerHTML = "RedHat";
    else if (bIsCentos) detectos.innerHTML = "Centos";
    else if (bIsAlpine) detectos.innerHTML = "Alpine";
    else if (bIsSlackware) detectos.innerHTML = "Slackware";
    else if (bIsArch) detectos.innerHTML = "Arch Linux";
    else if (bIsKali) detectos.innerHTML = "Kali Linux";
    else if (bIsSUSE) detectos.innerHTML = "Open SUSE";
    else if (bIsMint) detectos.innerHTML = "Linux Mint";
    else if (bIsMageia) detectos.innerHTML = "Mageia";
    else if (bIsManjaro) detectos.innerHTML = "Manjaro";
    else if (bIsGentoo) detectos.innerHTML = "Gentoo";
    else if (bIsUOS) detectos.innerHTML = "China Unity Operating System";
    else if (bIsDeepin) detectos.innerHTML = "China Deepin";
    else if (bIsKylin) detectos.innerHTML = "China Kylin";
    else if (bIsiPhone) {
        detectos.innerHTML = "Apple iPhone Operating System";
    }
    else if (bIsiPod) {
        detectos.innerHTML = "Apple iPhone Operating System";
    }
    else if (bIsiPad) {
        detectos.innerHTML = "Apple iPad Operating System";
    }
    else if (bIsWatch) {
        detectos.innerHTML = "Apple Watch Operating System";
    }
    else if (bIsTV) {
        detectos.innerHTML = "Apple TV Operating System";
    }
    else if (bIsMac) detectos.innerHTML = "Apple Mac OS X";
    else detectos.innerHTML = "GNU/Linux";
}
else detectos.innerHTML = "Unknown Unix";
if (String(navigator.userAgent).indexOf("Windows") > -1) detectos.innerHTML = "Microsoft Windows";
if (String(navigator.userAgent).indexOf("Harmony") > -1) detectos.innerHTML = "Huawei Harmony";
if (String(navigator.userAgent).indexOf("Fuchsia") > -1) detectos.innerHTML = "Google Fuchsia";
if (String(navigator.userAgent).indexOf("CrOS") > -1) detectos.innerHTML = "Google Chrome Operating System";
if (String(navigator.platform).indexOf("FreeBSD") > -1) detectos.innerHTML = "FreeBSD";
if (String(navigator.platform).indexOf("OpenBSD") > -1) detectos.innerHTML = "OpenBSD";
if (String(navigator.platform).indexOf("NetBSD") > -1) detectos.innerHTML = "NetBSD";
if (String(navigator.platform).indexOf("Haiku") > -1) {
    detectos.innerHTML = "Haiku"
    alert("警告！此操作系统使用时不稳定！建议使用 Windows,Linux各类发行版,Andoid 等其他操作系统使用此程序。");
};
if (/Firefox\/(\S+)/.test(navigator.userAgent)) {
    explorer.innerHTML = "Mozilla Firefox";
}
if (!/OPR/.test(navigator.userAgent)) {
    if (/Chrome\/(\S+)/.test(navigator.userAgent)) {
        explorer.innerHTML = "Google Chrome";
    }
    if (/Edg\/(\S+)/.test(navigator.userAgent) || /Edge\/(\S+)/.test(navigator.userAgent)) {
        explorer.innerHTML = "Microsoft Edge";
    }
    if (/Safari/.test(navigator.userAgent)) {
        if (/Version\/(\S+)/.test(navigator.userAgent)) {
            explorer.innerHTML = "Apple Safari";
        }
    }
} else {
    explorer.innerHTML = "Opera";
}
var agent = navigator.userAgent.toLowerCase();
//禁止Windows10以下的系统访问此脚本
if (String(navigator.userAgent).indexOf("Win95") > -1 || String(navigator.userAgent).indexOf("Win98") > -1 || String(navigator.userAgent).indexOf("Win 9x 4.90") > -1 || String(navigator.userAgent).indexOf("Windows NT 5") > -1) {
    document.body.innerHTML = '<b style="color:red">警告！请升级你的 Windows 操作系统至 Windows 10 以上或转移其他的现代操作系统访问此脚本！</b>';
    alert("警告！请升级你的 Windows 操作系统至 Windows 10 以上或转移其他的现代操作系统访问此脚本！");
}
if (String(navigator.userAgent).indexOf("Windows NT 6") > -1) {
    alert("建议升级你的 Windows 操作系统至 Windows 10 以上使用此程序。");
}
if (String(navigator.userAgent).indexOf("Symbian") > -1) {
    document.body.innerHTML = '<b style="color:red">此程序不支持 Symbian 操作系统，请使用其他操作平台使用此程序。</b>';
    alert("此程序不支持 Symbian 操作系统，请使用其他操作平台使用此程序。");
}
if (String(navigator.userAgent).indexOf("Blackberry") > -1) {
    document.body.innerHTML = '<b style="color:red">此程序不支持 Blackberry 操作系统，请使用其他操作平台使用此程序。</b>';
    alert("此程序不支持 Blackberry 操作系统，请使用其他操作平台使用此程序。");
}
//禁止Android5以下的系统访问此脚本
if (String(navigator.userAgent).indexOf("Android 1.") > -1 || String(navigator.userAgent).indexOf("Android 2.") > -1 || String(navigator.userAgent).indexOf("Android 3.") > -1 || String(navigator.userAgent).indexOf("Android 4.") > -1) {
    document.body.innerHTML = '<b style="color:red">警告！请升级你的 Android 操作系统至 Android 5 以上或使用其他设备访问此脚本！</b>';
    alert("警告！请升级你的 Android 操作系统至 Android 8 以上或使用其他设备访问此脚本！");
}
if (String(navigator.userAgent).indexOf("Android 5.") > -1 || String(navigator.userAgent).indexOf("Android 6.") > -1 || String(navigator.userAgent).indexOf("Android 7.") > -1) {
    alert("建议升级你的 Android 操作系统至 Android 8 以上使用此程序。");
}
//禁止iOS10以下的系统访问此脚本
if (String(navigator.userAgent).indexOf("OS 1_") > -1 || String(navigator.userAgent).indexOf("OS 2_") > -1 || String(navigator.userAgent).indexOf("OS 3_") > -1 || String(navigator.userAgent).indexOf("OS 4_") > -1 || String(navigator.userAgent).indexOf("OS 5_") > -1 || String(navigator.userAgent).indexOf("OS 6_") > -1 || String(navigator.userAgent).indexOf("OS 7_") > -1 || String(navigator.userAgent).indexOf("OS 8_") > -1 || String(navigator.userAgent).indexOf("OS 9_") > -1 && String(navigator.userAgent).indexOf("iPhone") > -1 && String(navigator.userAgent).indexOf("iPad") > -1) {
    document.body.innerHTML = '<b style="color:red">警告！请升级你的 iOS 操作系统至 iOS 10 以上或使用其他设备访问此脚本！</b>';
    alert("警告！请升级你的 iOS 操作系统至 iOS 10 以上或使用其他设备访问此脚本！");
}
//禁止Mac OS 10.11以下的系统访问此脚本
if (String(navigator.userAgent).indexOf("10_0_") > -1 || String(navigator.userAgent).indexOf("10_1_") > -1 || String(navigator.userAgent).indexOf("10_2_") > -1 || String(navigator.userAgent).indexOf("10_3_") > -1 || String(navigator.userAgent).indexOf("10_4_") > -1 || String(navigator.userAgent).indexOf("10_5_") > -1 || String(navigator.userAgent).indexOf("10_6_") > -1 || String(navigator.userAgent).indexOf("10_7_") > -1 || String(navigator.userAgent).indexOf("10_8_") > -1 || String(navigator.userAgent).indexOf("10_9_") > -1 || String(navigator.userAgent).indexOf("10_10_") > -1) {
    if (String(navigator.userAgent).indexOf("iPhone") == -1 && String(navigator.userAgent).indexOf("iPad") == -1 && String(navigator.userAgent).indexOf("Mac OS") > -1) {
        document.body.innerHTML = '<b style="color:red">警告！请升级你的 Mac OS X 操作系统至 Mac OS X 10.11 以上或使用其他设备访问此脚本！</b>';
        alert("警告！请升级你的 Mac OS X 操作系统至 Mac OS X 10.11 以上或使用其他设备访问此脚本！");
    }
}
//禁用IE浏览器
if (String(navigator.userAgent).indexOf("Trident") > -1) {
    alert("警告！请使用 Chrome、Chromium、Firefox、Edge、Safari、Opera、Brave 等现代浏览器打开HTML文件！已禁用 Internet Explorer 浏览器访问此脚本！");
    document.location("about:blank");
};
windowmax = false;
bodywidthtest();
function key_select() {
    games_type = games.value;
    switch (games_type) {
        case "mak":
            document.getElementById('key').innerHTML = '<option value="4k" class="button2">4键位</option ><option value="5k" class="button1"> 5键位</option><option value="6k" class="button2"> 6键位</option><option value="7k" class="button1">7键位</option><option value="8k" class="button2">8键位</option><option value="9k" class="button1">9键位</option><option value="10k" class="button2">10键位</option>'
            break;
        case "mas":
        case "sono":
            document.getElementById('key').innerHTML = '<option class="button2">轨道选择不适用</option >'
            break;
        case "om":
            document.getElementById('key').innerHTML = '<option value="1k" class="button1">1键位</option ><option value="2k" class="button2">2键位</option ><option value="3k" class="button1">3键位</option ><option value="4k" class="button2"selected>4键位</option ><option value="5k" class="button1"> 5键位</option><option value="6k" class="button2"> 6键位</option><option value="7k" class="button1">7键位</option><option value="8k" class="button2">8键位</option><option value="9k" class="button1">9键位</option><option value="10k" class="button2">10键位（合作模式）</option><option value="11k" class="button1">11键位（合作模式）</option><option value="12k" class="button2">12键位（合作模式）</option><option value="13k" class="button1">13键位（合作模式）</option><option value="14k" class="button2">14键位（合作模式）</option><option value="15k" class="button1">15键位（合作模式）</option><option value="16k" class="button2">16键位（合作模式）</option><option value="17k" class="button1">17键位（合作模式）</option><option value="18k" class="button2">18键位（合作模式）</option>'
            break;
    }
}
//文件选择器模态窗口上级窗体阴影遮罩
function Windows_mask() {
    document.getElementById('mask').style.display = "";
    document.getElementById('mask').style.animation = 'board_8 0.1s';
    var batchUpload = document.getElementById('file');
    batchUpload.addEventListener('change', function () {
        Windows_mask_1();
    });
    document.getElementById("mask").addEventListener("click", Windows_mask_1);
    document.addEventListener('keydown', Windows_mask_1);
}
function Windows_mask_1() {
    document.getElementById('mask').style.animation = 'board_9 0.1s';
    setTimeout(function () { document.getElementById('mask').style.display = "none"; }, 100);
    document.getElementById("mask").removeEventListener("click", Windows_mask_1);
    document.removeEventListener('keydown', Windows_mask_1);
}
function file_menu_1() {
    Windows_mask();
    if (/Firefox\/(\S+)/.test(navigator.userAgent)) {
        document.getElementById('file_menu').addEventListener('change', function () {
            document.getElementById('file').files[0] = document.getElementById('file_menu').files[0];
        });
    } else {
        var batchUpload_1 = document.getElementById('file_menu');
        batchUpload_1.addEventListener('change', function () {
            document.getElementById('file').files = document.getElementById('file_menu').files;
            hidder();
        });
    }
}
//适应不同设备或窗口规格
function bodywidthtest() {
    if (winviewstatemax == false) {
        document.getElementById("viewCanvas").width = parseFloat(document.getElementById("drag").style.width) - 2;
        document.getElementById("viewCanvas").height = parseFloat(document.getElementById("drag").style.height) - 70;
    } else {
        document.getElementById("viewCanvas").width = window.innerWidth;
        document.getElementById("viewCanvas").height = window.innerHeight - 70;
    }
    var windowviewCanvas = document.getElementById("viewCanvas");
    var ctxfont = windowviewCanvas.getContext("2d");
    ctxfont.font = "16px Arial";
    ctxfont.fillText("前面的区域以后再来探索吧？", 10, 50);
    var autowindowheight = document.documentElement.clientHeight * 0.8 - 68;
    var songselectheight = document.documentElement.clientHeight * 0.8 - 118;
    if (songselectheight < 0) {
        songselectheight = 1;
    }
    if (autowindowheight < 0) {
        autowindowheight = 1;
    }
    autowindowheight = autowindowheight.toString() + "px";
    songselectheight = songselectheight.toString() + "px";
    document.getElementsByClassName("autowindowsize")[0].style.height = autowindowheight;
    document.getElementsByClassName("autowindowsize")[1].style.height = autowindowheight;
    document.getElementsByClassName("autowindowsize")[2].style.height = autowindowheight;
    document.getElementsByClassName("autowindowsize")[3].style.height = autowindowheight;
    document.getElementsByClassName("autowindowsize")[4].style.height = autowindowheight;
    document.getElementsByClassName("autowindowsize")[5].style.height = autowindowheight;
    document.getElementById("songselect").style.height = songselectheight;
    if (window.screen.height < 500 || window.screen.width < 500) {
        document.getElementById('bodyid').style.overflowY = "auto";
    } else {
        document.getElementById('bodyid').style.overflowY = "hidden";
    }
    if (document.body.clientWidth < 400) {
        document.getElementById("progress3").style.marginLeft = "-25%";
    }
    if (document.body.clientWidth < 482 && document.body.clientWidth > 400) {
        document.getElementById("progress3").style.marginLeft = "-20%";
    }
    if (document.body.clientWidth > 482 && document.body.clientWidth < 550) {
        document.getElementById("progress3").style.marginLeft = "-15%";
    }
    if (document.body.clientWidth > 550 && document.body.clientWidth < 650) {
        document.getElementById("progress3").style.marginLeft = "-10%";
    }
    if (document.body.clientWidth > 650 && document.body.clientWidth < 720) {
        document.getElementById("progress3").style.marginLeft = "-8%";
    }
    if (document.body.clientWidth > 720 && document.body.clientWidth < 820) {
        document.getElementById("progress3").style.marginLeft = "-6%";
    }
    if (document.body.clientWidth > 820) {
        document.getElementById("progress3").style.marginLeft = "-5%";
    }
    if (document.body.clientWidth > 482) {
        document.getElementById("title").style.fontSize = "20px";
    } else {
        document.getElementById("title").style.fontSize = "";
    }
    setTimeout(function () { bodywidthtest(); }, 200);
}
explore.innerHTML = navigator.userAgent;

//感谢https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/网站给声音加载代码带来了参考
//以后会使用这段代码进行midi音频播放
window.AudioContext = window.AudioContext || window.webkitAudioContext;
(function () {
    if (!window.AudioContext) {
        alert('警告！当前浏览器不支持Web Audio API，请使用Chrome、Chromium、Firefox、Edge、Safari、Opera 等现代浏览器打开HTML文件！已禁用此浏览器访问此脚本！');
        document.location("about:blank");
        return;
    }
    // 按钮元素
    var eleButton = document.getElementById('vol');
    // 音调依次递增或者递减处理需要的参数
    eleButton.addEventListener('mouseup', sound3);
    eleButton.addEventListener('keyup', sound3);
    eleButton.addEventListener('touchend', sound3);
})();
function sound3() {
    // 创建新的音频上下文接口
    var audioCtx = new AudioContext();
    // 发出的声音频率数据，表现为音调的高低
    var arrFrequency = [440.00];
    var start = 0, direction = 1;
    // 当前频率
    var frequency = arrFrequency[start];
    // 如果到头，改变音调的变化规则（增减切换）
    start = start + direction;
    // 创建一个OscillatorNode, 它表示一个周期性波形（振荡），基本上来说创造了一个音调
    var oscillator = audioCtx.createOscillator();
    // 创建一个GainNode,它可以控制音频的总音量
    var gainNode = audioCtx.createGain();
    // 把音量，音调和终节点进行关联
    oscillator.connect(gainNode);
    // audioCtx.destination返回AudioDestinationNode对象，表示当前audio context中所有节点的最终节点，一般表示音频渲染设备
    gainNode.connect(audioCtx.destination);
    // 指定音调的类型，其他还有square|triangle|sawtooth
    oscillator.type = 'sine';
    vol4 = document.getElementById("vol").value / 100;
    // 音量为1
    gainNode.gain.linearRampToValueAtTime(vol4, audioCtx.currentTime);
    // 音调从当前时间开始播放
    oscillator.start(audioCtx.currentTime);
    // 1秒内声音慢慢降低，是个不错的停止声音的方法
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
    // 1秒后完全停止声音
    oscillator.stop(audioCtx.currentTime + 1);
}
function warnoff() {
    setTimeout(function () { document.getElementById('warning').style.display = "none"; }, 100);
}
function progressoff() {
    document.getElementById('progress').style.animation = 'warning_3 0.1s';
    setTimeout(function () { document.getElementById('progress').style.display = 'none'; }, 100);
    document.getElementById('progress').style.width = '0%';
    document.getElementById('progress').style.height = '0px';
    document.getElementById('progress').style.left = '50%';
    document.getElementById('progress3').style.display = 'none'
}
//保存文件
function outputfile() {
    games_type = games.value;
    switch (games_type) {
        case "mak":
        case "mas":
            saveAs(new Blob([document.getElementById('result').value], {
                type: 'text/plain;charset=utf-8'
            }), `${Date.now()}.mc`)
            break;
        case "om":
            saveAs(new Blob([document.getElementById('result').value], {
                type: 'text/plain;charset=utf-8'
            }), `${Date.now()}.osu`)
            break;
    }


}
/*保存文件使用 FileSaver.js，注释已翻译，请尊重此作者的劳动成果，以及代码中应该遵守的协议
*这里是saveAs()函数的代码块，以实现文件保存
*作者信息：
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT许可证)
* source  : http://purl.eligrey.com/github/FileSaver.js （脚本来源）
*/
//想了解JavaScript如何获取全局对象，请点击下面注释链接
// https://stackoverflow.com/q/3277182/1008999
var _global = typeof window === 'object' && window.window === window
    ? window : typeof self === 'object' && self.self === self
        ? self : typeof global === 'object' && global.global === global
            ? global
            : this

function bom(blob, opts) {
    if (typeof opts === 'undefined') opts = { autoBom: false }
    else if (typeof opts !== 'object') {
        console.warn('Deprecated: Expected third argument to be a object')
        opts = { autoBom: !opts }
    }

    //为UTF-8、XML和其他文本类型（包括HTML）添加BOM
    //注意：你的浏览器将自动转换UTF-16 U+FEFF到EF BB BF
    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(0xFEFF), blob], { type: blob.type })
    }
    return blob
}

function download(url, name, opts) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.onload = function () {
        saveAs(xhr.response, name, opts)
    }
    xhr.onerror = function () {
        console.error('could not download file')
    }
    xhr.send()
}

function corsEnabled(url) {
    var xhr = new XMLHttpRequest()
    //使用sync数据同步避免下载弹窗阻止脚本继续执行
    xhr.open('HEAD', url, false)
    try {
        xhr.send()
    } catch (e) { }
    return xhr.status >= 200 && xhr.status <= 299
}

// a.click()不适用于所有浏览器(#465)
function click(node) {
    try {
        node.dispatchEvent(new MouseEvent('click'))
    } catch (e) {
        var evt = document.createEvent('MouseEvents')
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80,
            20, false, false, false, false, 0, null)
        node.dispatchEvent(evt)
    }
}

var saveAs = _global.saveAs || (
    //这段代码可能适用在某些浏览器工作上
    (typeof window !== 'object' || window !== _global)
        ? function saveAs() { /*空操作*/ }

        // 如果可能，首先使用其下载属性（#193（诺基亚Lumia手机……啊这……）） 
        : 'download' in HTMLAnchorElement.prototype
            ? function saveAs(blob, name, opts) {
                var URL = _global.URL || _global.webkitURL
                var a = document.createElement('a')
                name = name || blob.name || 'download'

                a.download = name
                a.rel = 'noopener' //tabnabbing（钓鱼标签，想了解自行搜索）

                //检测chrome浏览器的扩展和打包应用程序
                // a.target = '_blank'

                if (typeof blob === 'string') {
                    //支持常规链接 
                    a.href = blob
                    if (a.origin !== location.origin) {
                        corsEnabled(a.href)
                            ? download(blob, name, opts)
                            : click(a, a.target = '_blank')
                    } else {
                        click(a)
                    }
                } else {
                    //使用blob接口
                    a.href = URL.createObjectURL(blob)
                    setTimeout(function () { URL.revokeObjectURL(a.href) }, 4E4) //延迟40秒后执行
                    setTimeout(function () { click(a) }, 0)
                }
            }

            //使用msSaveOrOpenBlob作为第二种方法 
            : 'msSaveOrOpenBlob' in navigator
                ? function saveAs(blob, name, opts) {
                    name = name || blob.name || 'download'

                    if (typeof blob === 'string') {
                        if (corsEnabled(blob)) {
                            download(blob, name, opts)
                        } else {
                            var a = document.createElement('a')
                            a.href = blob
                            a.target = '_blank'
                            setTimeout(function () { click(a) })
                        }
                    } else {
                        navigator.msSaveOrOpenBlob(bom(blob, opts), name)
                    }
                }

                //退回到使用FileReader和弹出窗口
                : function saveAs(blob, name, opts, popup) {
                    //立即打开弹窗，跳过弹窗拦截
                    //大多数情况下仅在用户交互时可用，并且fileReader是异步的，因此……（啥？）
                    popup = popup || open('', '_blank')
                    if (popup) {
                        popup.document.title =
                            popup.document.body.innerText = 'downloading...'
                    }

                    if (typeof blob === 'string') return download(blob, name, opts)

                    var force = blob.type === 'application/octet-stream'
                    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari
                    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent)

                    if ((isChromeIOS || (force && isSafari)) && typeof FileReader !== 'undefined') {
                        //Safari不允许下载blob URL（苹果……）
                        var reader = new FileReader()
                        reader.onloadend = function () {
                            var url = reader.result
                            url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;')
                            if (popup) popup.location.href = url
                            else location = url
                            popup = null //反向tabnabbing(#460)
                        }
                        reader.readAsDataURL(blob)
                    } else {
                        var URL = _global.URL || _global.webkitURL
                        var url = URL.createObjectURL(blob)
                        if (popup) popup.location = url
                        else location.href = url
                        popup = null //反向tabnabbing(#460)
                        setTimeout(function () { URL.revokeObjectURL(url) }, 4E4)//延迟40秒后执行
                    }
                }
)

_global.saveAs = saveAs.saveAs = saveAs

if (typeof module !== 'undefined') {
    module.exports = saveAs;
}