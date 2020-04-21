var date = new Date();
var timer = null;
$(function () {
    switch (date.getMonth()) {
        case 2:
        case 3:
        case 4:
            setCity("桂林");
            break;
        case 5:
        case 6:
        case 7:
            setCity("承德");
            break;
        case 8:
        case 9:
        case 10:
            setCity("长沙");
            break;
        case 11:
        case 0:
        case 1:
            setCity("哈尔滨");
            break;
    }
    startClock();
});

//开始计时
function startClock() {
    var time = new Date();
    var year = displayClock(time.getFullYear()) + ".";
    var month = displayClock(time.getMonth() + 1) + ".";
    var day = displayClock(time.getDate()) + " ";
    var hours = displayClock(time.getHours()) + ":";
    var minutes = displayClock(time.getMinutes()) + ":";
    var seconds = displayClock(time.getSeconds());
    document.getElementById("recmdation-time").innerText = year + month + day + hours + minutes + seconds;
    timer = setTimeout("startClock()", 1000);//延时器
}

function displayClock(num) {//num是传入的startClock中的动态值
    if (num < 10) {
        return "0" + num;
    }
    else {
        return num;
    }
}

function searchCity() {
    setCity($("#location").val());
}

function setCity(city) {
    switch (city) {
        case "桂林":
        case "推荐城市：桂林":
            document.getElementById("recmdation-title").innerText = "人面不知何去处，桃花依旧笑春风";
            $("#location").val("推荐城市：桂林");
            document.getElementById("cityTitle").innerText = "桂林山水甲天下";
            document.getElementById("cityWord1").innerText = "在两江四湖景区，游客乘船不仅可游览三大各具特色的主景区，即中国古典式园林--榕杉湖景区、天人合一的生态园林——桂湖景区、宋历史文化园——木龙湖景区，欣赏景区内新建成的名桥博览园、名花名树名草博览园、亭台楼阁博览园和雕塑博览园，而且在船上还可观赏水系周边的象山、伏波山、叠彩山、尧山、宝积山、老人山等十多座传统名山。";            document.getElementById("cityWord2").innerText = "松北是哈尔滨比较新的城区，虽然历史底蕴比不上老城区，但冰雪大世界、太阳岛雪博会等冰雪相关项目都在这儿了。还有极地馆、虎林园、科技馆等寓教于乐的场所，可以说是亲子出游的绝佳之选。";
            document.getElementById("cityWord2").innerText = "自古以来，王城景区就被奉为桂林的风水宝地，更是整个桂林城市的发祥地。这里有国内保存最完好的明代城墙，有保护最完整的明代藩王府，是国家重点文物保护单位，院内自然山水风光与历史人文景观交相辉映，可以好不夸张地说“桂林山水甲天下，阅尽王城知桂林”。";
            break;
        case "承德":
        case "推荐城市：承德":
            document.getElementById("recmdation-title").innerText = "树阴满地日当午，梦觉流莺时一声";
            $("#location").val("推荐城市：承德");
            document.getElementById("cityTitle").innerText = "皇家园林，避暑胜地";
            document.getElementById("cityWord1").innerText = "承德旅游资源得天独厚、风格奇特。这里有许许多多的“世界之最”： 世界最大的皇家园林——避暑山庄；世界最大的皇家寺庙群——外八庙；世界最大的木制佛——千手千眼观世音（普宁寺）；世界最短的河流——热河；万里长城精萃——金山岭长城；被称世界一绝的石柱——磬锤峰；天下第一奇松——九龙松等等，城内尽显皇家风范，乡村则是自然的乐园。";            document.getElementById("cityWord2").innerText = "松北是哈尔滨比较新的城区，虽然历史底蕴比不上老城区，但冰雪大世界、太阳岛雪博会等冰雪相关项目都在这儿了。还有极地馆、虎林园、科技馆等寓教于乐的场所，可以说是亲子出游的绝佳之选。";
            document.getElementById("cityWord2").innerText = "避暑山庄是清朝避暑胜地，确实是一个休闲的好去处，避暑山庄有秀美的山水、庭院、亭台、舞厅、歌坛，对江南水乡有一定的借鉴意义。别墅中的沧浪屿完全是按照江南园林的模式建造的，这里最显著的特点是别墅里散落着800多只鹿，这增加了一点野味。高雅庄严的宫殿与如画的自然景观和谐融合，达到回归自然、回归自然的境界。";
            break;
        case "长沙":
        case "推荐城市：长沙":
            document.getElementById("recmdation-title").innerText = "落霞与孤鹜齐飞，秋水共长天一色";
            $("#location").val("推荐城市：长沙");
            document.getElementById("cityTitle").innerText = "如诗如梦如画，长来长往长沙";
            document.getElementById("cityWord1").innerText = "长沙，古为楚汉名城，因屈原和贾谊的影响而被称为“屈贾之乡”；今为革命圣地，橘子洲、岳麓书院、爱晚亭都留下中国伟人毛泽东的革命足迹，花明楼则是刘少奇的故乡。长沙广纳古今美景，如诗亦如画。你可揽岳麓之神韵，怀湘水之灵秀；惊月亮岛之不群，羡天心阁之浑厚；临橘子洲头而长吟，观贾谊故居乃怀旧……";
            document.getElementById("cityWord2").innerText = "东岸是楚汉文化名城长沙的主要发源地，历史文化悠久。天心阁、白沙古井、走马楼三国吴简、宋福王墓和贾谊故居等著名历史景观，及黄兴南路步行商业街、解放西路酒吧文化街、坡子街民俗美食街都在该区域内。";
            break;
        case "哈尔滨":
        case "推荐城市：哈尔滨":
            document.getElementById("recmdation-title").innerText = "北国风光，千里冰封，万里雪飘";
            $("#location").val("推荐城市：哈尔滨");
            document.getElementById("cityTitle").innerText = "天鹅展翅冰城，艺术创造永恒";
            document.getElementById("cityWord1").innerText = "哈尔滨的老城区，也就是人们常说的道里、道外和南岗这三个片区。圣·索菲亚大教堂、中央大街、果戈里大街和老道外这些哈尔滨最广为人知的景点都聚集在此处。无论你怀揣着何种心愿来到哈尔滨，这个区域都会是你最主要的活动范围；而喜欢历史、钟爱建筑的朋友更是无法自拔，因为哈尔滨最珍贵的宝贝都在这了。";
            document.getElementById("cityWord2").innerText = "松北是哈尔滨比较新的城区，虽然历史底蕴比不上老城区，但冰雪大世界、太阳岛雪博会等冰雪相关项目都在这儿了。还有极地馆、虎林园、科技馆等寓教于乐的场所，可以说是亲子出游的绝佳之选。";
            break;
        default:
            alert("抱歉，没有找到您搜索的城市");
            break;
    }
}