/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={388:function(n,t,e){var i;!function(r,o){"use strict";var a="function",u="undefined",s="object",c="model",f="name",l="type",d="vendor",h="version",v="architecture",p="console",g="mobile",m="tablet",_="smarttv",w="wearable",y={extend:function(n,t){var e={};for(var i in n)t[i]&&t[i].length%2==0?e[i]=t[i].concat(n[i]):e[i]=n[i];return e},has:function(n,t){return"string"==typeof n&&-1!==t.toLowerCase().indexOf(n.toLowerCase())},lowerize:function(n){return n.toLowerCase()},major:function(n){return"string"==typeof n?n.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(n){return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},E={rgx:function(n,t){for(var e,i,r,u,c,f,l=0;l<t.length&&!c;){var d=t[l],h=t[l+1];for(e=i=0;e<d.length&&!c;)if(c=d[e++].exec(n))for(r=0;r<h.length;r++)f=c[++i],typeof(u=h[r])===s&&u.length>0?2==u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3==u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4==u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},str:function(n,t){for(var e in t)if(typeof t[e]===s&&t[e].length>0){for(var i=0;i<t[e].length;i++)if(y.has(t[e][i],n))return"?"===e?o:e}else if(y.has(t[e],n))return"?"===e?o:e;return n}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},I={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[f,h],[/(opios)[\/\s]+([\w\.]+)/i],[[f,"Opera Mini"],h],[/\s(opr)\/([\w\.]+)/i],[[f,"Opera"],h],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[f,h],[/(konqueror)\/([\w\.]+)/i],[[f,"Konqueror"],h],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[f,"IE"],h],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[f,"Edge"],h],[/(yabrowser)\/([\w\.]+)/i],[[f,"Yandex"],h],[/(Avast)\/([\w\.]+)/i],[[f,"Avast Secure Browser"],h],[/(AVG)\/([\w\.]+)/i],[[f,"AVG Secure Browser"],h],[/(puffin)\/([\w\.]+)/i],[[f,"Puffin"],h],[/(focus)\/([\w\.]+)/i],[[f,"Firefox Focus"],h],[/(opt)\/([\w\.]+)/i],[[f,"Opera Touch"],h],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[f,"UCBrowser"],h],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],h],[/(windowswechat qbcore)\/([\w\.]+)/i],[[f,"WeChat(Win) Desktop"],h],[/(micromessenger)\/([\w\.]+)/i],[[f,"WeChat"],h],[/(brave)\/([\w\.]+)/i],[[f,"Brave"],h],[/(whale)\/([\w\.]+)/i],[[f,"Whale"],h],[/(qqbrowserlite)\/([\w\.]+)/i],[f,h],[/(QQ)\/([\d\.]+)/i],[f,h],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[f,h],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[f,h],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[f,h],[/(MetaSr)[\/\s]?([\w\.]+)/i],[f],[/(LBBROWSER)/i],[f],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[h,[f,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[h,[f,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[f,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[f,h],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[h,[f,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[f,/(.+)/,"$1 WebView"],h],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[f,/(.+(?:g|us))(.+)/,"$1 $2"],h],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[h,[f,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[f,"Coc Coc"],h],[/(sailfishbrowser)\/([\w\.]+)/i],[[f,"Sailfish Browser"],h],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[f,h],[/(dolfin)\/([\w\.]+)/i],[[f,"Dolphin"],h],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[f,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[f,"Chrome"],h],[/(coast)\/([\w\.]+)/i],[[f,"Opera Coast"],h],[/fxios\/([\w\.-]+)/i],[h,[f,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[h,[f,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[h,f],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[f,"GSA"],h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[f,[h,E.str,b.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[f,h],[/(navigator|netscape)\/([\w\.-]+)/i],[[f,"Netscape"],h],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[f,h]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[c,d,[l,m]],[/applecoremedia\/[\w\.]+ \((ipad)/],[c,[d,"Apple"],[l,m]],[/(apple\s{0,1}tv)/i],[[c,"Apple TV"],[d,"Apple"],[l,_]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,c,[l,m]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[c,[d,"Amazon"],[l,m]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[c,E.str,b.device.amazon.model],[d,"Amazon"],[l,g]],[/android.+aft([\w])(\sbuild\/|\))/i],[c,[d,"Amazon"],[l,_]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[c,d,[l,g]],[/\((ip[honed|\s\w*]+);/i],[c,[d,"Apple"],[l,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,c,[l,g]],[/\(bb10;\s(\w+)/i],[c,[d,"BlackBerry"],[l,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[c,[d,"Asus"],[l,m]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[c,"Xperia Tablet"],[l,m]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[d,"Sony"],[l,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,c,[l,p]],[/android.+;\s(shield)\sbuild/i],[c,[d,"Nvidia"],[l,p]],[/(playstation\s[34portablevi]+)/i],[c,[d,"Sony"],[l,p]],[/(sprint\s(\w+))/i],[[d,E.str,b.device.sprint.vendor],[c,E.str,b.device.sprint.model],[l,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[c,/_/g," "],[l,g]],[/(nexus\s9)/i],[c,[d,"HTC"],[l,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[c,[d,"Huawei"],[l,g]],[/android.+(bah2?-a?[lw]\d{2})/i],[c,[d,"Huawei"],[l,m]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,c,[l,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[c,[d,"Microsoft"],[l,p]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[d,"Microsoft"],[l,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[c,[d,"Motorola"],[l,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[d,"Motorola"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,y.trim],[c,y.trim],[l,_]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[d,"Samsung"],[l,_]],[/\(dtv[\);].+(aquos)/i],[c,[d,"Sharp"],[l,_]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],c,[l,m]],[/smart-tv.+(samsung)/i],[d,[l,_],c],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],c,[l,g]],[/sie-(\w*)/i],[c,[d,"Siemens"],[l,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],c,[l,g]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[c,[d,"Acer"],[l,m]],[/android.+([vl]k\-?\d{3})\s+build/i],[c,[d,"LG"],[l,m]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],c,[l,m]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[d,"LG"],c,[l,_]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[c,[d,"LG"],[l,g]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,c,[l,m]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[c,[d,"Lenovo"],[l,m]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,c,[l,g]],[/linux;.+((jolla));/i],[d,c,[l,g]],[/((pebble))app\/[\d\.]+\s/i],[d,c,[l,w]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,c,[l,g]],[/crkey/i],[[c,"Chromecast"],[d,"Google"],[l,_]],[/android.+;\s(glass)\s\d/i],[c,[d,"Google"],[l,w]],[/android.+;\s(pixel c)[\s)]/i],[c,[d,"Google"],[l,m]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[c,[d,"Google"],[l,g]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[c,/_/g," "],[d,"Xiaomi"],[l,g]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[c,/_/g," "],[d,"Xiaomi"],[l,m]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[c,[d,"Meizu"],[l,g]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],c,[l,g]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[c,[d,"OnePlus"],[l,g]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[c,[d,"RCA"],[l,m]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[c,[d,"Dell"],[l,m]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[c,[d,"Verizon"],[l,m]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[d,"Barnes & Noble"],c,[l,m]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[c,[d,"NuVision"],[l,m]],[/android.+;\s(k88)\sbuild/i],[c,[d,"ZTE"],[l,m]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[c,[d,"Swiss"],[l,g]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[c,[d,"Swiss"],[l,m]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[c,[d,"Zeki"],[l,m]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],c,[l,m]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[c,[d,"Insignia"],[l,m]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[c,[d,"NextBook"],[l,m]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],c,[l,g]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],c,[l,g]],[/android.+;\s(PH-1)\s/i],[c,[d,"Essential"],[l,g]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[c,[d,"Envizen"],[l,m]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,c,[l,m]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[c,[d,"MachSpeed"],[l,m]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,c,[l,m]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[c,[d,"Rotor"],[l,m]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,c,[l,m]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[c,[l,g]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[c,[l,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,y.lowerize],d,c],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,_]],[/(android[\w\.\s\-]{0,9});.+build/i],[c,[d,"Generic"]],[/(phone)/i],[[l,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[h,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[f,h],[/rv\:([\w\.]{1,9}).+(gecko)/i],[h,f]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[f,h],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[f,[h,E.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[f,"Windows"],[h,E.str,b.os.windows.version]],[/\((bb)(10);/i],[[f,"BlackBerry"],h],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[f,h],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[f,"Symbian"],h],[/\((series40);/i],[f],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[f,"Firefox OS"],h],[/crkey\/([\d\.]+)/i],[h,[f,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[f,h],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[f,"Chromium OS"],h],[/(sunos)\s?([\w\.\d]*)/i],[[f,"Solaris"],h],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[f,h],[/(haiku)\s(\w+)/i],[f,h],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[h,/_/g,"."],[f,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[f,"Mac OS"],[h,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[f,h]]},A=function(n,t){if("object"==typeof n&&(t=n,n=o),!(this instanceof A))return new A(n,t).getResult();var e=n||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=t?y.extend(I,t):I;return this.getBrowser=function(){var n={name:o,version:o};return E.rgx.call(n,e,i.browser),n.major=y.major(n.version),n},this.getCPU=function(){var n={architecture:o};return E.rgx.call(n,e,i.cpu),n},this.getDevice=function(){var n={vendor:o,model:o,type:o};return E.rgx.call(n,e,i.device),n},this.getEngine=function(){var n={name:o,version:o};return E.rgx.call(n,e,i.engine),n},this.getOS=function(){var n={name:o,version:o};return E.rgx.call(n,e,i.os),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(n){return e=n,this},this};A.VERSION="0.7.24",A.BROWSER={NAME:f,MAJOR:"major",VERSION:h},A.CPU={ARCHITECTURE:v},A.DEVICE={MODEL:c,VENDOR:d,TYPE:l,CONSOLE:p,MOBILE:g,SMARTTV:_,TABLET:m,WEARABLE:w,EMBEDDED:"embedded"},A.ENGINE={NAME:f,VERSION:h},A.OS={NAME:f,VERSION:h},typeof t!==u?(n.exports&&(t=n.exports=A),t.UAParser=A):(i=function(){return A}.call(t,e,t,n))===o||(n.exports=i)}("object"==typeof window?window:this)},7871:function(n,t,e){var i=e(2920)(),r=e(3322);n.exports=function(n,t){function e(t){if(!(this instanceof e))return new e(t);try{throw new Error(t)}catch(o){o.name=n,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,n,t)),this.message=t||"",this.name=n}return e.prototype=new(t||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+n+": "+this.message+"]":"["+n+"]"},e.prototype.name=n,e}},3322:function(n){"use strict";n.exports=function(n,t,e){var i=t;return e&&(i+=": "+e),n=i+n.slice(n.indexOf("\n"))}},2920:function(n){"use strict";n.exports=function(){var n=new Error("yep");return!!n.stack&&"Error: yep\n"===n.stack.substr(0,11)}},9755:function(n,t,e){n.exports=function(){"use strict";function n(n){return"function"==typeof n||"object"==typeof n&&null!==n}function t(n){return"function"==typeof n}undefined;var i=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},r=0,o=undefined,a=undefined,u=function(n,t){y[r]=n,y[r+1]=t,2===(r+=2)&&(a?a(E):I())};function s(n){a=n}function c(n){u=n}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),v="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(E)}}function g(){return void 0!==o?function(){o(E)}:w()}function m(){var n=0,t=new d(E),e=document.createTextNode("");return t.observe(e,{characterData:!0}),function(){e.data=n=++n%2}}function _(){var n=new MessageChannel;return n.port1.onmessage=E,function(){return n.port2.postMessage(0)}}function w(){var n=setTimeout;return function(){return n(E,1)}}var y=new Array(1e3);function E(){for(var n=0;n<r;n+=2)(0,y[n])(y[n+1]),y[n]=undefined,y[n+1]=undefined;r=0}function b(){try{undefined;var n=e(8206);return o=n.runOnLoop||n.runOnContext,g()}catch(t){return w()}}var I=undefined;function A(n,t){var e=arguments,i=this,r=new this.constructor(R);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):j(i,r,n,t),r}function T(n){var t=this;if(n&&"object"==typeof n&&n.constructor===t)return n;var e=new t(R);return U(e,n),e}I=h?p():d?m():v?_():f===undefined?b():w();var S=Math.random().toString(36).substring(16);function R(){}var k=void 0,N=1,D=2,C=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function P(n){try{return n.then}catch(t){return C.error=t,C}}function M(n,t,e,i){try{n.call(t,e,i)}catch(r){return r}}function L(n,t,e){u((function(n){var i=!1,r=M(e,t,(function(e){i||(i=!0,t!==e?U(n,e):B(n,e))}),(function(t){i||(i=!0,G(n,t))}),"Settle: "+(n._label||" unknown promise"));!i&&r&&(i=!0,G(n,r))}),n)}function V(n,t){t._state===N?B(n,t._result):t._state===D?G(n,t._result):j(t,undefined,(function(t){return U(n,t)}),(function(t){return G(n,t)}))}function F(n,e,i){e.constructor===n.constructor&&i===A&&e.constructor.resolve===T?V(n,e):i===C?(G(n,C.error),C.error=null):i===undefined?B(n,e):t(i)?L(n,e,i):B(n,e)}function U(t,e){t===e?G(t,O()):n(e)?F(t,e,P(e)):B(t,e)}function z(n){n._onerror&&n._onerror(n._result),q(n)}function B(n,t){n._state===k&&(n._result=t,n._state=N,0!==n._subscribers.length&&u(q,n))}function G(n,t){n._state===k&&(n._state=D,n._result=t,u(z,n))}function j(n,t,e,i){var r=n._subscribers,o=r.length;n._onerror=null,r[o]=t,r[o+N]=e,r[o+D]=i,0===o&&n._state&&u(q,n)}function q(n){var t=n._subscribers,e=n._state;if(0!==t.length){for(var i=undefined,r=undefined,o=n._result,a=0;a<t.length;a+=3)i=t[a],r=t[a+e],i?$(e,i,r,o):r(o);n._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(n,t){try{return n(t)}catch(e){return Y.error=e,Y}}function $(n,e,i,r){var o=t(i),a=undefined,u=undefined,s=undefined,c=undefined;if(o){if((a=K(i,r))===Y?(c=!0,u=a.error,a.error=null):s=!0,e===a)return void G(e,x())}else a=r,s=!0;e._state!==k||(o&&s?U(e,a):c?G(e,u):n===N?B(e,a):n===D&&G(e,a))}function W(n,t){try{t((function(t){U(n,t)}),(function(t){G(n,t)}))}catch(e){G(n,e)}}var X=0;function J(){return X++}function Q(n){n[S]=X++,n._state=undefined,n._result=undefined,n._subscribers=[]}function Z(n,t){this._instanceConstructor=n,this.promise=new n(R),this.promise[S]||Q(this.promise),i(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):G(this.promise,nn())}function nn(){return new Error("Array Methods must be provided an Array")}function tn(n){return new Z(this,n).promise}function en(n){var t=this;return i(n)?new t((function(e,i){for(var r=n.length,o=0;o<r;o++)t.resolve(n[o]).then(e,i)})):new t((function(n,t){return t(new TypeError("You must pass an array to race."))}))}function rn(n){var t=new this(R);return G(t,n),t}function on(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function an(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function un(n){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],R!==n&&("function"!=typeof n&&on(),this instanceof un?W(this,n):an())}function sn(){var n=undefined;if("undefined"!=typeof e.g)n=e.g;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(r){}if("[object Promise]"===i&&!t.cast)return}n.Promise=un}return Z.prototype._enumerate=function(){for(var n=this.length,t=this._input,e=0;this._state===k&&e<n;e++)this._eachEntry(t[e],e)},Z.prototype._eachEntry=function(n,t){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=P(n);if(r===A&&n._state!==k)this._settledAt(n._state,t,n._result);else if("function"!=typeof r)this._remaining--,this._result[t]=n;else if(e===un){var o=new e(R);F(o,n,r),this._willSettleAt(o,t)}else this._willSettleAt(new e((function(t){return t(n)})),t)}else this._willSettleAt(i(n),t)},Z.prototype._settledAt=function(n,t,e){var i=this.promise;i._state===k&&(this._remaining--,n===D?G(i,e):this._result[t]=e),0===this._remaining&&B(i,this._result)},Z.prototype._willSettleAt=function(n,t){var e=this;j(n,undefined,(function(n){return e._settledAt(N,t,n)}),(function(n){return e._settledAt(D,t,n)}))},un.all=tn,un.race=en,un.resolve=T,un.reject=rn,un._setScheduler=s,un._setAsap=c,un._asap=u,un.prototype={constructor:un,then:A,"catch":function(n){return this.then(null,n)}},un.polyfill=sn,un.Promise=un,un}()},1575:function(n){"use strict";n.exports=function(n){var t,e={};if(!(n instanceof Object)||Array.isArray(n))throw new Error("keyMirror(...): Argument must be an object.");for(t in n)n.hasOwnProperty(t)&&(e[t]=t);return e}},8994:function(n){"use strict";n.exports=function(n,t,e,i){Object.defineProperty(n,t,{get:function(){var n=e.call(this);return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},set:function(n){return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},enumerable:!!i,configurable:!0})}},145:function(n){!function(){function t(n,t){var e,i,r,o,a,u,s,c;for(e=3&n.length,i=n.length-e,r=t,a=3432918353,u=461845907,c=0;c<i;)s=255&n.charCodeAt(c)|(255&n.charCodeAt(++c))<<8|(255&n.charCodeAt(++c))<<16|(255&n.charCodeAt(++c))<<24,++c,r=27492+(65535&(o=5*(65535&(r=(r^=s=(65535&(s=(s=(65535&s)*a+(((s>>>16)*a&65535)<<16)&4294967295)<<15|s>>>17))*u+(((s>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(s=0,e){case 3:s^=(255&n.charCodeAt(c+2))<<16;case 2:s^=(255&n.charCodeAt(c+1))<<8;case 1:r^=s=(65535&(s=(s=(65535&(s^=255&n.charCodeAt(c)))*a+(((s>>>16)*a&65535)<<16)&4294967295)<<15|s>>>17))*u+(((s>>>16)*u&65535)<<16)&4294967295}return r^=n.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=t;e.v2=function(n,t){for(var e,i=n.length,r=t^i,o=0;i>=4;)e=1540483477*(65535&(e=255&n.charCodeAt(o)|(255&n.charCodeAt(++o))<<8|(255&n.charCodeAt(++o))<<16|(255&n.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&n.charCodeAt(o+2))<<16;case 2:r^=(255&n.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&n.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=t,n.exports=e}()},2138:function(n,t,e){n=e.nmd(n),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=9007199254740991,u="[object Arguments]",s="[object Array]",c="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",_="[object Set]",w="[object String]",y="[object Symbol]",E="[object WeakMap]",b="[object ArrayBuffer]",I="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",R="[object Int32Array]",k="[object Uint8Array]",N="[object Uint8ClampedArray]",D="[object Uint16Array]",C="[object Uint32Array]",O=/[&<>"'`]/g,x=RegExp(O.source),P=/\w*$/,M=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,V={};V[I]=V[A]=V[T]=V[S]=V[R]=V[k]=V[N]=V[D]=V[C]=!0,V[u]=V[s]=V[b]=V[c]=V[f]=V[l]=V[d]=V[v]=V[p]=V[g]=V[m]=V[_]=V[w]=V[E]=!1;var F={};F[u]=F[s]=F[b]=F[c]=F[f]=F[I]=F[A]=F[T]=F[S]=F[R]=F[v]=F[p]=F[g]=F[m]=F[_]=F[w]=F[y]=F[k]=F[N]=F[D]=F[C]=!0,F[l]=F[d]=F[E]=!1;var U={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},z={"function":!0,object:!0},B=z[typeof t]&&t&&!t.nodeType?t:i,G=z.object&&n&&!n.nodeType?n:i,j=G&&G.exports===B?B:i,q=on(B&&G&&"object"==typeof e.g&&e.g),H=on(z[typeof self]&&self),Y=on(z[typeof window]&&window),K=on(z[typeof this]&&this),$=q||Y!==(K&&K.window)&&Y||H||K||Function("return this")();function W(n,t){return n.set(t[0],t[1]),n}function X(n,t){return n.add(t),n}function J(n,t){return nn(It(n),Ae)}function Q(n,t){return!!n.length&&en(n,t,0)>-1}function Z(n,t,e){for(var i=-1,r=n.length;++i<r;)if(e(t,n[i]))return!0;return!1}function nn(n,t){for(var e=-1,i=t.length,r=n.length;++e<i;)n[r+e]=t[e];return n}function tn(n,t,e){for(var r=-1,o=n.length;++r<o;){var a=n[r],u=t(a);if(null!=u&&(s===i?u==u:e(u,s)))var s=u,c=a}return c}function en(n,t,e){if(t!=t)return function(n,t,e){var i=n.length,r=t+(e?0:-1);for(;e?r--:++r<i;){var o=n[r];if(o!=o)return r}return-1}(n,e);for(var i=e-1,r=n.length;++i<r;)if(n[i]===t)return i;return-1}function rn(n,t,e,i,r){return r(n,(function(n,r,o){e=i?(i=!1,n):t(e,n,r,o)})),e}function on(n){return n&&n.Object===Object?n:null}function an(n){return U[n]}function un(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(e){}return t}function sn(n,t){return n="number"==typeof n||L.test(n)?+n:-1,t=null==t?a:t,n>-1&&n%1==0&&n<t}var cn=Array.prototype,fn=Object.prototype,ln=Function.prototype.toString,dn=fn.hasOwnProperty,hn=0,vn=ln.call(Object),pn=fn.toString,gn=$._,mn=RegExp("^"+ln.call(dn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_n=$.Reflect,wn=$.Symbol,yn=$.Uint8Array,En=_n?_n.enumerate:i,bn=Object.getPrototypeOf,In=Object.getOwnPropertySymbols,An=Object.create,Tn=fn.propertyIsEnumerable,Sn=cn.splice,Rn=$.isFinite,kn=Object.keys,Nn=Math.max,Dn=Ot($,"Map"),Cn=Ot($,"Set"),On=Ot($,"WeakMap"),xn=Ot(Object,"create"),Pn=Dn?ln.call(Dn):"",Mn=Cn?ln.call(Cn):"",Ln=On?ln.call(On):"",Vn=wn?wn.prototype:i,Fn=Vn?Vn.valueOf:i;function Un(n){if(ue(n)&&!Zt(n)){if(n instanceof zn)return n;if(dn.call(n,"__wrapped__"))return function(n){var t=new zn(n.u,n.l);return t.m=It(n.m),t}(n)}return new zn(n)}function zn(n,t){this.u=n,this.m=[],this.l=!!t}function Bn(){}function Gn(n,t){return xn?n[t]!==i:dn.call(n,t)}function jn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function qn(n){var t=-1,e=n?n.length:0;for(this.I=new jn;++t<e;)this.push(n[t])}function Hn(n,t){var e=n.I;if(Lt(t)){var i=e.I;return("string"==typeof t?i.string:i.hash)[t]===o}return e.has(t)}function Yn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Kn(n,t){var e=Xn(n,t);return!(e<0)&&(e==n.length-1?n.pop():Sn.call(n,e,1),!0)}function $n(n,t){var e=Xn(n,t);return e<0?i:n[e][1]}function Wn(n,t){return Xn(n,t)>-1}function Xn(n,t){for(var e=n.length;e--;)if(Xt(n[e][0],t))return e;return-1}function Jn(n,t,e){var i=Xn(n,t);i<0?n.push([t,e]):n[i][1]=e}function Qn(n,t,e,r){return n===i||Xt(n,fn[e])&&!dn.call(r,e)?t:n}function Zn(n,t,e){(e!==i&&!Xt(n[t],e)||"number"==typeof t&&e===i&&!(t in n))&&(n[t]=e)}function nt(n,t,e){var r=n[t];dn.call(n,t)&&Xt(r,e)&&(e!==i||t in n)||(n[t]=e)}function tt(n){return"function"==typeof n?n:Te}function et(n,t,e,r,o,a,s){var l;if(r&&(l=a?r(n,o,a,s):r(n)),l!==i)return l;if(!ae(n))return n;var E=Zt(n);if(E){if(l=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&dn.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return It(n)}else{var O=Pt(n),x=O==d||O==h;if(ie(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if(O==g||O==u||x&&!a){if(un(n))return a?n:{};if(l=function(n){return"function"!=typeof n.constructor||Vt(n)?{}:it(bn(n))}(x?{}:n),!t)return l=function(n,t){return n&&St(t,we(t),n)}(l,n),e?kt(n,l):l}else{if(!F[O])return a?n:{};l=function(n,t,e){var i=n.constructor;switch(t){case b:return Tt(n);case c:case f:return new i(+n);case I:case A:case T:case S:case R:case k:case N:case D:case C:return function(n,t){var e=t?Tt(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,e);case v:return function(n){return jt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n,i){e[++t]=[i,n]})),e}(n),W,new n.constructor)}(n);case p:case w:return new i(n);case m:return function(n){var t=new n.constructor(n.source,P.exec(n));return t.lastIndex=n.lastIndex,t}(n);case _:return jt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}(o=n),X,new o.constructor);case y:return r=n,Fn?Object(Fn.call(r)):{}}var r;var o}(n,O,t)}}s||(s=new Yn);var M=s.get(n);return M||(s.set(n,l),(E?ut:lt)(n,(function(i,o){nt(l,o,et(i,t,e,r,o,n,s))})),e&&!E?kt(n,l):l)}function it(n){return ae(n)?An(n):{}}function rt(n,t,e){if("function"!=typeof n)throw new TypeError(r);return setTimeout((function(){n.apply(i,e)}),t)}var ot,at,ut=(ot=lt,function(n,t){if(null==n)return n;if(!ne(n))return ot(n,t);for(var e=n.length,i=at?e:-1,r=Object(n);(at?i--:++i<e)&&!1!==t(r[i],i,r););return n});function st(n,t){var e=[];return ut(n,(function(n,i,r){t(n,i,r)&&e.push(n)})),e}function ct(n,t,e,i){i||(i=[]);for(var r=-1,o=n.length;++r<o;){var a=n[r];t>0&&te(a)&&(e||Zt(a)||Qt(a))?t>1?ct(a,t-1,e,i):nn(i,a):e||(i[i.length]=a)}return i}var ft=function(n){return function(t,e,i){for(var r=-1,o=Object(t),a=i(t),u=a.length;u--;){var s=a[n?u:++r];if(!1===e(o[s],s,o))break}return t}}();function lt(n,t){return n&&ft(n,t,we)}function dt(n,t){return st(t,(function(t){return re(n[t])}))}function ht(n,t,e,r,o){return n===t||(null==n||null==t||!ae(n)&&!ue(t)?n!=n&&t!=t:function(n,t,e,r,o,a){var d=Zt(n),h=Zt(t),v=s,_=s;d||(v=(v=pn.call(n))==u?g:v);h||(_=(_=pn.call(t))==u?g:_);var y=v==g&&!un(n),E=_==g&&!un(t),b=v==_;a||(a=[]);var I=Bt(a,(function(t){return t[0]===n}));if(I&&I[1])return I[1]==t;if(a.push([n,t]),b&&!y){var A=d||fe(n)?function(n,t,e,r,o,a){var u=-1,s=2&o,c=1&o,f=n.length,l=t.length;if(f!=l&&!(s&&l>f))return!1;var d=!0;for(;++u<f;){var h,v=n[u],p=t[u];if(h!==i){if(h)continue;d=!1;break}if(c){if(!At(t,(function(n){return v===n||e(v,n,r,o,a)}))){d=!1;break}}else if(v!==p&&!e(v,p,r,o,a)){d=!1;break}}return d}(n,t,e,r,o,a):function(n,t,e,i,r,o,a){switch(e){case c:case f:return+n==+t;case l:return n.name==t.name&&n.message==t.message;case p:return n!=+n?t!=+t:n==+t;case m:case w:return n==t+""}return!1}(n,t,v);return a.pop(),A}if(!(2&o)){var T=y&&dn.call(n,"__wrapped__"),S=E&&dn.call(t,"__wrapped__");if(T||S){A=e(T?n.value():n,S?t.value():t,r,o,a);return a.pop(),A}}if(!b)return!1;A=function(n,t,e,r,o,a){var u=2&o,s=we(n),c=s.length,f=we(t).length;if(c!=f&&!u)return!1;var l=c;for(;l--;){var d=s[l];if(!(u?d in t:dn.call(t,d)))return!1}var h=!0,v=u;for(;++l<c;){var p,g=n[d=s[l]],m=t[d];if(!(p===i?g===m||e(g,m,r,o,a):p)){h=!1;break}v||(v="constructor"==d)}if(h&&!v){var _=n.constructor,w=t.constructor;_==w||!("constructor"in n)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(h=!1)}return h}(n,t,e,r,o,a);return a.pop(),A}(n,t,ht,e,r,o))}function vt(n){var t=typeof n;return"function"==t?n:null==n?Te:("object"==t?mt:Et)(n)}function pt(n){n=null==n?n:Object(n);var t=[];for(var e in n)t.push(e);return t}function gt(n,t){var e=-1,i=ne(n)?Array(n.length):[];return ut(n,(function(n,r,o){i[++e]=t(n,r,o)})),i}function mt(n){var t=we(n);return function(e){var r=t.length;if(null==e)return!r;for(e=Object(e);r--;){var o=t[r];if(!(o in e)||!ht(n[o],e[o],i,3))return!1}return!0}}function _t(n,t,e,r,o){if(n!==t){var a=Zt(t)||fe(t)?i:ye(t);ut(a||t,(function(u,s){if(a&&(u=t[s=u]),ae(u))o||(o=new Yn),function(n,t,e,r,o,a,u){var s=n[e],c=t[e],f=u.get(c);if(f)return void Zn(n,e,f);var l=a?a(s,c,e+"",n,t,u):i,d=l===i;d&&(l=c,Zt(c)||fe(c)?Zt(s)?l=s:te(s)?l=It(s):(d=!1,l=et(c,!a)):function(n){if(!ue(n)||pn.call(n)!=g||un(n))return!1;var t=bn(n);if(null===t)return!0;var e=t.constructor;return"function"==typeof e&&e instanceof e&&ln.call(e)==vn}(c)||Qt(c)?Qt(s)?l=St(h=s,ye(h)):!ae(s)||r&&re(s)?(d=!1,l=et(c,!a)):l=s:d=!1);var h;u.set(c,l),d&&o(l,c,r,a,u);u["delete"](c),Zn(n,e,l)}(n,t,s,e,_t,r,o);else{var c=r?r(n[s],u,s+"",n,t,o):i;c===i&&(c=u),Zn(n,s,c)}}))}}function wt(n,t){return n=Object(n),jt(t,(function(t,e){return e in n&&(t[e]=n[e]),t}),{})}function yt(n,t){var e={};return function(n,t){null==n||ft(n,t,ye)}(n,(function(n,i){t(n,i)&&(e[i]=n)})),e}function Et(n){return function(t){return null==t?i:t[n]}}function bt(n,t,e){var i=-1,r=n.length;t<0&&(t=-t>r?0:r+t),(e=e>r?r:e)<0&&(e+=r),r=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+t];return o}function It(n){return bt(n,0,n.length)}function At(n,t){var e;return ut(n,(function(n,i,r){return!(e=t(n,i,r))})),!!e}function Tt(n){var t=new n.constructor(n.byteLength);return new yn(t).set(new yn(n)),t}En&&!Tn.call({valueOf:1},"valueOf")&&(pt=function(n){return function(n){for(var t,e=[];!(t=n.next()).done;)e.push(t.value);return e}(En(n))});var St=Rt;function Rt(n,t,e,i){e||(e={});for(var r=-1,o=t.length;++r<o;){var a=t[r];nt(e,a,i?i(e[a],n[a],a,e,n):n[a])}return e}function kt(n,t){return St(n,xt(n),t)}function Nt(n){return Wt((function(t,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,t=Object(t);++r<o;){var u=e[r];u&&n(t,u,r,a)}return t}))}function Dt(n,t,e,i){if("function"!=typeof n)throw new TypeError(r);var o=1&t,a=function(n){return function(){var t=arguments,e=it(n.prototype),i=n.apply(e,t);return ae(i)?i:e}}(n);return function u(){for(var t=-1,r=arguments.length,s=-1,c=i.length,f=Array(c+r),l=this&&this!==$&&this instanceof u?a:n;++s<c;)f[s]=i[s];for(;r--;)f[s++]=arguments[++t];return l.apply(o?e:this,f)}}var Ct=Et("length");function Ot(n,t){var e=n[t];return function(n){if(null==n)return!1;if(re(n))return mn.test(ln.call(n));return ue(n)&&(un(n)?mn:M).test(n)}(e)?e:i}var xt=In||function(){return[]};function Pt(n){return pn.call(n)}function Mt(n){var t=n?n.length:i;return oe(t)&&(Zt(n)||ce(n)||Qt(n))?function(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i}(t,String):null}function Lt(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=n||null==n}function Vt(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||fn)}(Dn&&Pt(new Dn)!=v||Cn&&Pt(new Cn)!=_||On&&Pt(new On)!=E)&&(Pt=function(n){var t=pn.call(n),e=t==g?n.constructor:null,i="function"==typeof e?ln.call(e):"";if(i)switch(i){case Pn:return v;case Mn:return _;case Ln:return E}return t});var Ft=Wt((function(n,t){return Zt(n)||(n=null==n?[]:[Object(n)]),t=ct(t,1),J(n)}));function Ut(n){return n?n[0]:i}function zt(n){var t=Un(n);return t.l=!0,t}function Bt(n,t){return function(n,t,e,i){var r;return e(n,(function(n,e,o){if(t(n,e,o))return r=i?e:n,!1})),r}(n,vt(t),ut)}function Gt(n,t){return ut(n,tt(t))}function jt(n,t,e){return rn(n,vt(t),e,arguments.length<3,ut)}function qt(n,t){var e;if("function"!=typeof t)throw new TypeError(r);return n=de(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ht=Wt((function(n,t,e){return Dt(n,33,t,e)})),Yt=Wt((function(n,t){return rt(n,1,t)})),Kt=Wt((function(n,t,e){return rt(n,he(t)||0,e)}));var $t=Wt((function(n,t){return Dt(n,32,i,t)}));function Wt(n,t){if("function"!=typeof n)throw new TypeError(r);return t=Nn(t===i?n.length-1:de(t),0),function(){for(var e=arguments,i=-1,r=Nn(e.length-t,0),o=Array(r);++i<r;)o[i]=e[t+i];var a=Array(t+1);for(i=-1;++i<t;)a[i]=e[i];return a[t]=o,n.apply(this,a)}}function Xt(n,t){return n===t||n!=n&&t!=t}function Jt(n,t){return n>t}function Qt(n){return te(n)&&dn.call(n,"callee")&&(!Tn.call(n,"callee")||pn.call(n)==u)}var Zt=Array.isArray;function ne(n){return null!=n&&oe(Ct(n))&&!re(n)}function te(n){return ue(n)&&ne(n)}var ee,ie=(ee=!1,function(){return ee});function re(n){var t=ae(n)?pn.call(n):"";return t==d||t==h}function oe(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=a}function ae(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ue(n){return!!n&&"object"==typeof n}function se(n){return"number"==typeof n||ue(n)&&pn.call(n)==p}function ce(n){return"string"==typeof n||!Zt(n)&&ue(n)&&pn.call(n)==w}function fe(n){return ue(n)&&oe(n.length)&&!!V[pn.call(n)]}function le(n,t){return n<t}var de=Number,he=Number;function ve(n){return"string"==typeof n?n:null==n?"":n+""}var pe=Nt((function(n,t){St(t,we(t),n)})),ge=Nt((function(n,t){St(t,ye(t),n)})),me=Nt((function(n,t,e,i){Rt(t,ye(t),n,i)}));var _e=Wt((function(n){return n.push(i,Qn),me.apply(i,n)}));function we(n){var t=Vt(n);if(!t&&!ne(n))return function(n){return kn(Object(n))}(n);var e=Mt(n),i=!!e,r=e||[],o=r.length;for(var a in n)!dn.call(n,a)||i&&("length"==a||sn(a,o))||t&&"constructor"==a||r.push(a);return r}function ye(n){for(var t=-1,e=Vt(n),i=pt(n),r=i.length,o=Mt(n),a=!!o,u=o||[],s=u.length;++t<r;){var c=i[t];a&&("length"==c||sn(c,s))||"constructor"==c&&(e||!dn.call(n,c))||u.push(c)}return u}var Ee=Nt((function(n,t,e){_t(n,t,e)})),be=Wt((function(n,t){return null==n?{}:(t=gt(ct(t,1),String),wt(n,function(n,t,e,i){var r,o=-1,a=Q,u=!0,s=n.length,c=[],f=t.length;if(!s)return c;e&&(t=gt(t,(r=e,function(n){return r(n)}))),i?(a=Z,u=!1):t.length>=200&&(a=Hn,u=!1,t=new qn(t));n:for(;++o<s;){var l=n[o],d=e?e(l):l;if(u&&d==d){for(var h=f;h--;)if(t[h]===d)continue n;c.push(l)}else a(t,d,i)||c.push(l)}return c}(ye(n),t)))}));var Ie=Wt((function(n,t){return null==n?{}:wt(n,ct(t,1))}));function Ae(n){return n?function(n,t){return gt(t,(function(t){return n[t]}))}(n,we(n)):[]}function Te(n){return n}var Se,Re=vt;function ke(n,t,e){var i=we(t),r=dt(t,i);null!=e||ae(t)&&(r.length||!i.length)||(e=t,t=n,n=this,r=dt(t,we(t)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(n);return ut(r,(function(e){var i=t[e];n[e]=i,a&&(n.prototype[e]=function(){var t=this.l;if(o||t){var e=n(this.u),r=e.m=It(this.m);return r.push({func:i,args:arguments,thisArg:n}),e.l=t,e}return i.apply(n,nn([this.value()],arguments))})})),n}zn.prototype=it(Un.prototype),zn.prototype.constructor=zn,Bn.prototype=xn?xn(null):fn,jn.prototype.clear=function(){this.I={hash:new Bn,map:Dn?new Dn:[],string:new Bn}},jn.prototype["delete"]=function(n){var t=this.I;return Lt(n)?function(n,t){return Gn(n,t)&&delete n[t]}("string"==typeof n?t.string:t.hash,n):Dn?t.map["delete"](n):Kn(t.map,n)},jn.prototype.get=function(n){var t=this.I;return Lt(n)?function(n,t){if(xn){var e=n[t];return e===o?i:e}return dn.call(n,t)?n[t]:i}("string"==typeof n?t.string:t.hash,n):Dn?t.map.get(n):$n(t.map,n)},jn.prototype.has=function(n){var t=this.I;return Lt(n)?Gn("string"==typeof n?t.string:t.hash,n):Dn?t.map.has(n):Wn(t.map,n)},jn.prototype.set=function(n,t){var e=this.I;return Lt(n)?function(n,t,e){n[t]=xn&&e===i?o:e}("string"==typeof n?e.string:e.hash,n,t):Dn?e.map.set(n,t):Jn(e.map,n,t),this},qn.prototype.push=function(n){var t=this.I;if(Lt(n)){var e=t.I;("string"==typeof n?e.string:e.hash)[n]=o}else t.set(n,o)},Yn.prototype.clear=function(){this.I={array:[],map:null}},Yn.prototype["delete"]=function(n){var t=this.I,e=t.array;return e?Kn(e,n):t.map["delete"](n)},Yn.prototype.get=function(n){var t=this.I,e=t.array;return e?$n(e,n):t.map.get(n)},Yn.prototype.has=function(n){var t=this.I,e=t.array;return e?Wn(e,n):t.map.has(n)},Yn.prototype.set=function(n,t){var e=this.I,i=e.array;i&&(i.length<199?Jn(i,n,t):(e.array=null,e.map=new jn(i)));var r=e.map;return r&&r.set(n,t),this},Un.assign=pe,Un.assignIn=ge,Un.before=qt,Un.bind=Ht,Un.chain=zt,Un.compact=function(n){return st(n,Boolean)},Un.concat=Ft,Un.create=function(n,t){var e=it(n);return t?pe(e,t):e},Un.defaults=_e,Un.defer=Yt,Un.delay=Kt,Un.filter=function(n,t){return st(n,vt(t))},Un.flatten=function(n){return(n?n.length:0)?ct(n,1):[]},Un.flattenDeep=function(n){return(n?n.length:0)?ct(n,Infinity):[]},Un.iteratee=Re,Un.keys=we,Un.map=function(n,t){return gt(n,vt(t))},Un.mapValues=function(n,t){var e={};return t=vt(t),lt(n,(function(n,i,r){e[i]=t(n,i,r)})),e},Un.matches=function(n){return mt(pe({},n))},Un.merge=Ee,Un.mixin=ke,Un.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){return!n.apply(this,arguments)}},Un.omit=be,Un.omitBy=function(n,t){return t=vt(t),yt(n,(function(n,e){return!t(n,e)}))},Un.once=function(n){return qt(2,n)},Un.partial=$t,Un.pick=Ie,Un.pickBy=function(n,t){return null==n?{}:yt(n,vt(t))},Un.slice=function(n,t,e){var r=n?n.length:0;return t=null==t?0:+t,e=e===i?r:+e,r?bt(n,t,e):[]},Un.sortBy=function(n,t){var e=0;return t=vt(t),gt(gt(n,(function(n,i,r){return{value:n,index:e++,criteria:t(n,i,r)}})).sort((function(n,t){return function(n,t){if(n!==t){var e=null===n,r=n===i,o=n==n,a=null===t,u=t===i,s=t==t;if(n>t&&!a||!o||e&&!u&&s||r&&s)return 1;if(n<t&&!e||!s||a&&!r&&o||u&&o)return-1}return 0}(n.criteria,t.criteria)||n.index-t.index})),Et("value"))},Un.tap=function(n,t){return t(n),n},Un.thru=function(n,t){return t(n)},Un.toArray=function(n){return ne(n)?n.length?It(n):[]:Ae(n)},Un.values=Ae,Un.extend=ge,ke(Un,Un),Un.clone=function(n){return ae(n)?Zt(n)?It(n):St(n,we(n)):n},Un.cloneDeep=function(n){return et(n,!0,!0)},Un.escape=function(n){return(n=ve(n))&&x.test(n)?n.replace(O,an):n},Un.every=function(n,t,e){return function(n,t){var e=!0;return ut(n,(function(n,i,r){return e=!!t(n,i,r)})),e}(n,vt(t=e?i:t))},Un.find=Bt,Un.findIndex=function(n,t){return n&&n.length?function(n,t,e){for(var i=n.length,r=e?i:-1;e?r--:++r<i;)if(t(n[r],r,n))return r;return-1}(n,vt(t)):-1},Un.forEach=Gt,Un.forOwn=function(n,t){return n&&lt(n,tt(t))},Un.has=function(n,t){return null!=n&&dn.call(n,t)},Un.head=Ut,Un.identity=Te,Un.includes=function(n,t,e,i){n=ne(n)?n:Ae(n),e=e&&!i?de(e):0;var r=n.length;return e<0&&(e=Nn(r+e,0)),ce(n)?e<=r&&n.indexOf(t,e)>-1:!!r&&en(n,t,e)>-1},Un.indexOf=function(n,t,e){for(var i=n?n.length:0,r=((e="number"==typeof e?e<0?Nn(i+e,0):e:0)||0)-1,o=t==t;++r<i;){var a=n[r];if(o?a===t:a!=a)return r}return-1},Un.isArguments=Qt,Un.isArray=Zt,Un.isBoolean=function(n){return!0===n||!1===n||ue(n)&&pn.call(n)==c},Un.isDate=function(n){return ue(n)&&pn.call(n)==f},Un.isEmpty=function(n){if(ne(n)&&(Zt(n)||ce(n)||re(n.splice)||Qt(n)))return!n.length;for(var t in n)if(dn.call(n,t))return!1;return!0},Un.isEqual=function(n,t){return ht(n,t)},Un.isFinite=function(n){return"number"==typeof n&&Rn(n)},Un.isFunction=re,Un.isNaN=function(n){return se(n)&&n!=+n},Un.isNull=function(n){return null===n},Un.isNumber=se,Un.isObject=ae,Un.isRegExp=function(n){return ae(n)&&pn.call(n)==m},Un.isString=ce,Un.isUndefined=function(n){return n===i},Un.last=function(n){var t=n?n.length:0;return t?n[t-1]:i},Un.max=function(n){return n&&n.length?tn(n,Te,Jt):i},Un.min=function(n){return n&&n.length?tn(n,Te,le):i},Un.noConflict=function(){return $._===this&&($._=gn),this},Un.noop=function(){},Un.reduce=jt,Un.result=function(n,t,e){var r=null==n?i:n[t];return r===i&&(r=e),re(r)?r.call(n):r},Un.size=function(n){return null==n?0:(n=ne(n)?n:we(n)).length},Un.some=function(n,t,e){return At(n,vt(t=e?i:t))},Un.uniqueId=function(n){var t=++hn;return ve(n)+t},Un.each=Gt,Un.first=Ut,ke(Un,(Se={},lt(Un,(function(n,t){dn.call(Un.prototype,t)||(Se[t]=n)})),Se),{chain:!1}),Un.VERSION="4.6.1",ut(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:cn)[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(n);Un.prototype[n]=function(){var n=arguments;return i&&!this.l?t.apply(this.value(),n):this[e]((function(e){return t.apply(e,n)}))}})),Un.prototype.toJSON=Un.prototype.valueOf=Un.prototype.value=function(){return n=this.u,jt(this.m,(function(n,t){return t.func.apply(t.thisArg,nn([n],t.args))}),n);var n},(Y||H||{})._=Un,B&&G&&(j&&((G.exports=Un)._=Un),B._=Un)}.call(this)},3232:function(n,t,e){n.exports=e(2138)._.noConflict()},4447:function(n,t,e){var i=e(145).v3,r=Math.pow(2,32),o=function(n,t){return(i(n,t)>>>0)/r};n.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(n,t){var e=i(n,t);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(n,t,e){return Math.floor(o(n,t)*e)},hashToReal:o,toByteString:function(n){var t=String.fromCharCode;return n.replace(/[\S\s]/gi,(function(n){n=n.charCodeAt(0);var e=t(255&n);return n>255&&(e=t(n>>>8&255)+e),n>65535&&(e=t(n>>>16)+e),e}))}}},5662:function(n,t){t.generate=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},6274:function(n,t,e){var i=e(3232),r=e(9350).get("stores/audience_data"),o=e(5562),a=e(4630),u=e(3685),s=e(3626);function c(n){var t=["type","selector","attributes","value"],e=i.extend({},n);return e.changeSet=i.map(n.changeSet,(function(n){return i.pick(s.dereferenceChangeId(n),t)})),e}t.emitLayerDecided=function(n){var t=n.decisionTicket?n.decisionTicket.audienceIds:[],e=i.map(t,(function(n){return{id:n,name:r.get(n).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(n,{audiences:e})},c=s.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(c)},t.emitViewActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:n},e=s.translateViewActivatedToPageActivated(t);o.emit(t),o.emit(e)},t.emitViewsActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:n};o.emit(t)},t.emitPageDeactivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:n};o.emit(t)},t.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(n)},t.emitOriginsSyncedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(n)},t.emitActionAppliedEvent=function(n){var t={type:n.type,campaignId:n.layerId,pageId:n.pageId,experimentId:n.experimentId,variationId:n.variationId};u.defineProperty(t,"changes",(function(){return c(n).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:t};o.emit(e)},t.emitActionsForDecisionAppliedEvent=function(n,t){var e={decision:n};u.defineProperty(e,"actions",(function(){return i.map(t,c)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},t.emitSendEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(n)},t.emitHoldEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(n)}},9086:function(n,t,e){var i=e(3232),r=e(6349),o=e(3685),a=e(3626),u=e(5293),s=e(6371);function c(n,t,e,r){var o=n.getLayerState(r),a=t.get(r),s=e.get();if(!o||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var c,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(c=i.find(a.experiments,{id:l}))&&(f=i.find(c.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:c.name,id:c.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(n,t,e,r,o,a){var c=[],f=n.getLayerStates();a.onlySingleExperiments&&(f=i.filter(f,(function(n){var e=t.get(n.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var l=i.map(f,(function(n){var t=!!n.decision.variationId,e=n.decisionActivationId&&n.decisionActivationId===r.getActivationId(),o=s.getExperimentAndVariation(),a=o?o.variationId:null,u=t&&n.decision.variationId===a;return i.extend(n,{isActive:t&&e||u,visitorRedirected:u})})),d=o?i.filter(l,o):l;return i.each(d,(function(n){var r=function(n,t,e,r){var o,a,u=n.layerId,s=t.get(u)||{},c=i.map(s.experiments,(function(n){return i.pick(n,["id","name"])}));if(!r&&s.decisionMetadata&&s.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:s.name||null,experiment:null,allExperiments:c,variation:null,reason:n.decision.reason,isActive:!!n.isActive,visitorRedirected:n.visitorRedirected,isInCampaignHoldback:n.decision.isLayerHoldback};n.decision&&n.decision.experimentId&&(o=i.find(s.experiments,{id:n.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&n.decision.variationId&&(a=i.find(o.variations,{id:n.decision.variationId})),a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(n.decisionTicket.audienceIds,(function(n){return i.pick(e.get(n),["id","name"])}));return f.audiences=l,s.decisionMetadata&&s.decisionMetadata.offerConsistency&&(f.pageId=n.pageId),f}(n,t,e,a.includeOfferConsistency);r&&c.push(r)})),c}t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(n,t,e,r,u,s,c,f,l){var d={},h={},v={},p={audiences:n.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:h,variations:v,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(n){o.defineProperty(d,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"campaign"),o.defineProperty(t,"experiments",(function(){return i.map(n.experiments,(function(n){return h[n.id]}))}),"campaign"),t}),"campaignMap","byId"),i.each(n.experiments,(function(n){o.defineProperty(h,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"experiment"),o.defineProperty(t,"variations",(function(){return i.map(n.variations,(function(n){return v[n.id]}))}),"experiment"),t}),"experimentMap","byId"),i.each(n.variations,(function(n){o.defineProperty(v,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"actions",(function(){return i.map(n.actions,(function(n){return i.extend({},n,{changes:i.map(n.changes,g)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=s.getGroupsMap(),p}],t.visitor=["stores/visitor",function(n){return i.cloneDeep(n.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(n){return{randomId:n.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(n,t,e,o,a,l,d){return{getCampaignStates:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!1});return i.each(a,(function(n){o[n.id]=n})),o},getExperimentStates:function(r){var o=f(e,t,n,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(n,t){var e=t.allExperiments[0];return n[e.id]=i.extend({},i.pick(t,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:t.isInCampaignHoldback}),n}),{})},getCampaignStateLists:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!0});return i.each(a,(function(n){var t=n.id;o[t]||(o[t]=[]),o[t].push(n)})),o},getPageStates:function(n){var t=a.getAll(),e=i.reduce(t,(function(n,t){var e=o.get(t.id);return n[t.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(t,["isActive","metadata"])),n[t.id].isActive=!!n[t.id].isActive,n}),{});return n?i.pickBy(e,n):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var n=e.getLayerStates(),r={};return i.each(n,(function(n){var e=t.get(n.layerId);if(n.decision&&n.decision.experimentId&&(r[n.decision.experimentId]={id:n.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:n.decision.experimentId});if(o&&n.decision.variationId)var a=i.find(o.variations,{id:n.decision.variationId}),u=i.findIndex(o.variations,{id:n.decision.variationId});a&&(r[n.decision.experimentId]={id:n.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var n={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(t){i.each(t,(function(t){n[t.experiment.id]=!0}))})),i.keys(n)},getRedirectInfo:function(){var n=s.getExperimentAndVariation();return n&&(n.referrer=s.getReferrer()),n},getDecisionString:function(n){if(!n)throw new Error("Must pass a config to getDecisionString");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=c(e,t,d,n.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,n.maxLength,n.shouldCleanString):null},getDecisionObject:function(n){if(!n)throw new Error("Must pass a config to getDecisionObject");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=c(e,t,d,n.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,n.shouldCleanString),s=i.mapValues(a.names,(function(t,e){return r.combineAndTruncateIdAndName(t,a.idStrings[e],n.maxLength)})),f={experiment:s.experiment,variation:s.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:s.layer,holdback:o.isLayerHoldback}),f}}}],t.utils=e(6365).create(),t.jquery=["env/jquery",function(n){return n}],t.event_emitter=e(7444)},644:function(n,t,e){var i=e(3308),r=e(7082),o="optimizelyDataApi";t.registerFunction=function(n,t){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[n]||(e[n]=t)},t.unregisterFunction=function(n){var t=r.getGlobal(o);t&&t[n]&&(t[n]=function(){i.log('Ignoring attempt to call "'+o+"."+n+'" which has been unregistered.')})},t.getFunction=function(n){return r.getGlobal(o)[n]}},9414:function(n,t,e){var i=e(3232),r=e(3308),o=e(9086),a=e(9350),u=a.get("stores/plugins"),s=e(9653),c=e(2425),f=e(9358),l=[e(7724),e(4305),e(9081)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(n,t){var e,o,a,u;if(!i.isArray(n)&&i.isObject(n))u=i.isUndefined(n.version)?1:n.version,e=n.type,a=[n];else if(i.isArray(n))u=0,e=n[0],a=n.slice(1);else{if(!i.isString(n))return r.warn("API / Ignoring non-array/object/string argument:",n),!1;u=0,e=n,a=[]}if(l[u]&&(o=l[u][e]),t&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(s.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(c){r.error(c)}return!0},t.get=function(n){r.log('API / Getting module: "'+n+'"');var t=o[n];if(t?i.isArray(t)&&(t=a.evaluate(t)):t=u.getPlugin(c.PluginTypes.apiModules,n),t)return f.dispatch(s.RECORD_API_USAGE,{methodName:"get."+n}),t;r.warn('Module "'+n+'" not found.')}},3685:function(n,t,e){var i=e(8994),r=e(9653),o=e(9358),a=e(3308);t.defineProperty=function(n,t,e,u,s){i(n,t,(function(){var n=["prop",u,s||t].join(".");return a.debug('Evaluating getter: "'+n+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:n}),e()}),!0)}},7724:function(n,t,e){var i=e(3232),r=e(4305);function o(n){var t,e={};if(n)if(a(n))t=Number(n);else{if("object"!=typeof n)throw new Error("tracker: Revenue argument "+n+"not a number.");if("revenue"in(e=i.extend({},n))){if(!a(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");t=Number(e.revenue),delete e.revenue}}return i.isUndefined(t)||(e.revenue=t),e}function a(n){return i.isNumber(n)||i.isString(n)&&Number(n)==n}t.activateGeoDelayedExperiments=function(n,t){t||(t=n.lists?"odds":"cdn3"),r.dataFromSource({data:n,source:t})},t.activateSiteCatalyst=function(n){n&&n.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:n.sVariable}})},t.bucketUser=t.bucketVisitor=function(n,t){if(n&&t){var e={experimentId:String(n)};t>256?e.variationId=String(t):e.variationIndex=String(t),r.bucketVisitor(e)}},t.disable=function(n){r.disable({scope:n})},t.log=function(n){i.isUndefined(n)&&(n=!0),r.log({level:n?"INFO":"OFF"})},t.optOut=function(n){i.isUndefined(n)&&(n=!0),r.optOut({isOptOut:n})},t.setCookieDomain=function(n){r.cookieDomain({cookieDomain:n})},t.setCookieExpiration=function(n){r.cookieExpiration({cookieExpirationDays:n})},t.setDimensionValue=function(n,t){var e={};e[n]=t,r.user({attributes:e})},t.setUserId=function(n){r.user({userId:n})},t.storeThirdPartyData=function(n,t){r.dataFromSource({source:n,data:t})},t.trackEvent=function(n,t){r.event({eventName:n,tags:o(t)})}},3626:function(n,t,e){var i=e(3232),r=e(9350),o=e(9739),a=e(3685),u=r.get("stores/change_data");t.translateDecisionToCampaignDecision=function(n){return s(i.cloneDeep(n),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(n){var e={};return a.defineProperty(e,"campaign",(function(){return function(n){var e=i.cloneDeep(n);return e.changes&&(e.changes=i.map(e.changes,t.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId)),n.variations&&i.each(n.variations,(function(n){n.actions&&i.each(n.actions,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId))}))}))})),e}(n.data.layer)}),"campaignEvent"),e.decisionTicket=n.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(n.data.decision),e.audiences=n.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},t.translateViewActivatedToPageActivated=function(n){return{type:"lifecycle",name:"pageActivated",data:{page:n.data.view}}},t.dereferenceChangeId=function(n){var t=u.getChange(n);return t?o.safeReference(t):n};var s=function(n,t){var e=i.omit(n,i.keys(t));return i.each(t,(function(t,i){e[t]=n[i]})),e}},6365:function(n,t,e){var i=e(4702).Promise,r=e(8276).t,o=e(8761).poll,a=e(1901).b,u=e(816).A;t.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},2144:function(n){n.exports={DEFAULT_INTERVAL:20}},8276:function(n,t,e){var i=e(3232),r=(e(9653),e(9350)),o=r.get("stores/directive"),a=e(1596),u=(e(2425),e(9358),e(5662).generate),s=e(8761),c=e(7082),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(n){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(n){var t=s.poll(i.partial(v,n));l[n].cancelObservation=function(){t(),delete l[n]}};var n={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=a.getDocumentElement(),e=new MutationObserver((function(){this.disconnect(),i.each(i.keys(l),v),this.observe(t,n)}));return function(r){var o=l[r];e.observe(t,n),o.cancelObservation=function(){delete l[r],i.isEmpty(l)&&e.disconnect()}}}(),d(n)};function h(n){var t=l[n];t&&t.cancelObservation&&t.cancelObservation()}function v(n){if(l[n]){if(function(n){var t=n.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-n.startTime>t)return!0;return!1}(l[n]))return 0===l[n].matchedCount&&i.isFunction(l[n].options.onTimeout)&&l[n].options.onTimeout(),void h(n);var t=a.querySelectorAll(l[n].selector);t.length&&(i.each(t,(function(t){t.T&&t.T[n]||l[n].callbackQueue.push(t)})),function(n){for(;l[n]&&l[n].callbackQueue.length;){var t=l[n].callbackQueue.shift();if(p(t,n),l[n].matchedCount=l[n].matchedCount+1,l[n].callback(t),l[n]&&l[n].options.once)return void h(n)}}(n))}}function p(n,t){n.T||(n.T={}),n.T[t]=!0}t.t=function(n,t,e){if(!function(n){try{a.querySelector(n)}catch(t){return!1}return!0}(n))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:t,callbackQueue:[],matchedCount:0,options:e,selector:n,startTime:Date.now()},d(r),c.setTimeout(i.bind(v,null,r),0),i.partial(h,r)}},8761:function(n,t,e){var i=e(3232),r=(e(9653),e(9350)),o=(e(2425),e(9358),e(5662).generate),a=e(7082),u=e(2144).DEFAULT_INTERVAL,s=(r.get("stores/rum"),{});function c(n){s[n]&&i.each(s[n].callbacks,(function(n){n.call(null)}))}function f(n,t){s[t]&&s[t].callbacks[n]&&(delete s[t].callbacks[n],i.some(s[t].callbacks)||(clearInterval(s[t].id),delete s[t]))}t.poll=function(n,t){i.isNumber(t)||(t=u),s[t]||(s[t]={callbacks:{},id:a.setInterval(i.partial(c,t),t)});var e=o();return s[t].callbacks[e]=n,i.partial(f,e,t)},t.cancelAll=function(){i.each(s,(function(n,t){clearInterval(n.id),delete s[t]}))}},1901:function(n,t,e){var i=e(4702).Promise,r=e(8276).t;t.b=function(n){return new i((function(t,e){r(n,t,{once:!0})}))}},816:function(n,t,e){var i=e(4702).Promise,r=e(8761).poll;t.A=function(n){return new i((function(t,e){if(n())t();else var i=r((function(){n()&&(i(),t())}))}))}},4305:function(n,t,e){var i=e(3232),r=e(9653),o=e(9414),a=e(9086),u=e(4773),s=e(2425),c=e(8317),f=e(6274),l=e(1115),d=e(8235).U,h=e(1217),v=e(474),p=(e(6236),e(6426)),g=e(5562),m=e(9358),_=e(6898),w=e(406),y=e(3308),E=e(2498),b=(e(5840),e(4247)),I=e(7324),A=e(9350),T=A.get("stores/dimension_data"),S=A.get("stores/view"),R=A.get("stores/view_data"),k=A.get("stores/visitor_id"),N=A.get("stores/layer_data"),D=A.get("stores/directive"),C=!1,O=t.ApiListenerError=d("ApiListenerError");t.event=function(n){var t;switch(n.eventType){case"click":t=function(n){var t;return n.eventData&&(t=p.create(n.eventData.id,n.eventData.apiName,"click",n.eventData)),function(){var n=c.trackClickEvent(t);n?y.log("API / Tracking click event:",n):y.log("API / Not tracking click event:",n)}}(n);break;case"decision":t=function(n){var t=n.eventData,e=w.createLayerState(t.layerId,t.experimentId,t.variationId,t.isLayerHoldback),i=w.createSingle(t.layerId,t.experimentId,t.variationId);return function(){w.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),y.log("API / Tracking decision event:",e),c.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(n);break;case"pageview":t=function(n){var t=b.create(n.eventData.id,n.eventData.apiName),e=b.createState(t.id);return function(){var n=c.trackViewActivation(t,e);n?y.log("API / Tracking pageview event:",n):y.log("API / Not tracking pageview event:",n)}}(n);break;default:t=function(n){var t;return n.eventId&&(t=p.create(n.eventId,n.eventName,"custom")),b.updateAllViewTags(),function(){c.trackCustomEvent(n.eventName,n.tags,t)?y.log("API / Tracking custom event:",n.eventName,n.tags):y.log("API / Not tracking custom event:",n.eventName)}}(n)}k.getBucketingId()?t():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(n){C},t.priorRedirectString=function(n){},t.microsnippetError=function(n){},t.rum=function(n){m.dispatch(r.SET_RUM_DATA,n.eventData)},t.initialViewStates=function(n){var t=i.map(n.states,(function(n,t){return{id:t,isActive:n}}));b.registerViews(t)},t.page=function(n){var t=R.getByApiName(n.pageName);if(!t)throw new Error('Unknown page "'+n.pageName+'"');var e=!n.hasOwnProperty("isActive")||n.isActive,i=function(){e?b.activateViaAPI(t,n.tags):(b.deactivate(t),y.log("API / Deactivated Page",b.description(t)))};k.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(n){b.setGlobalTags(n.tags)},t.user=function(n){y.log("API / Setting visitor custom attributes:",n.attributes),i.each(n.attributes,(function(n,t){var e,i,r=t,o=T.getById(t)||T.getByApiName(t);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:n};e&&(a.name=e),x(r,a,!0)}))};var x=function(n,t,e){var i=[{key:e?["custom",n]:[n],value:t,metadata:{lastModified:h.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};k.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};t.optOut=function(n){var t=!n.hasOwnProperty("isOptOut")||n.isOptOut;v.setOptOut(t)},t.cookieExpiration=function(n){var t=n.cookieExpirationDays;t<90&&(y.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",90,", setting to minimum."),t=90),y.log("API / Setting cookie age to",t,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*t)},t.extendCookieLifetime=function(n){n=i.extend({isEnabled:!0},n),y.log("API / Setting cookie automatic lifetime extension to",n.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,n.isEnabled)},t.cookieDomain=function(n){y.log("API / Setting cookie domain to",n.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,n.cookieDomain)},t.disable=function(n){if(n.scope){if("tracking"!==n.scope)throw new Error('Unknown "scope" for disable: '+n.scope);y.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else y.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(n){var t=n.level,e=n.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(e)&&(e=""),y.setLogMatcher(e),y.setLogLevel(t)},t.registerModule=function(n){var t="custom/"+n.moduleName;if(a[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');E.registerApiModule(t,n.module)},t.dataFromSource=function(n){var t=n.source;l.makeAsyncRequest(t),l.resolveRequest(t,n.data)},t.addListener=function(n){if(!i.isFunction(n.handler))throw new Error("A handler function must be supplied");(n=i.omit(n,"type")).publicOnly=!0,n.emitErrors=!0;var t=n.handler;n.handler=function(n){try{return t(n)}catch(e){throw new O(e)}},g.on(n)},t.removeListener=function(n){if(!n.token)throw new Error("Must supply a token to removeListener");g.off(n.token)},t.load=function(n){n.data=i.extend({},n.data),u.normalizeClientData(n.data),m.dispatch(r.DATA_LOADED,{data:n.data})},t.integrationSettings=function(n){if(!n.id)throw new Error("id is required");if(!n.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},n.settings,{id:n.id}))},t.bucketVisitor=function(n){if(!n.variationId&&i.isUndefined(n.variationIndex)||n.variationId&&n.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!n.experimentId)throw new Error("An experimentId is required.");var t,e,r=n.campaignId;if(r){if(!(t=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(t=N.getLayerByExperimentId(n.experimentId)).id))throw new Error("Could not find layer for experiment "+n.experimentId);if(!(e=i.find(t.experiments,{id:n.experimentId})))throw new Error("Could not find experiment "+n.experimentId+" in layer "+r);var o=n.variationId;if(i.isUndefined(n.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+n.experimentId)}else if(!(o=e.variations[n.variationIndex].id))throw new Error("Could not find variation at index "+n.variationIndex+" in experiment "+n.experimentId);I.updateVariationIdMap(r,n.experimentId,o),k.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(n){if(!i.isArray(n.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+_.stringify(n.canonicalOrigins));i.each(n.canonicalOrigins,(function(n){if(!i.isString(n))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t));var t})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:n.canonicalOrigins})},t.disableCrossOrigin=function(){y.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){D.shouldActivate()?(i.forEach(S.getActiveViewStates(),(function(n){b.deactivate(R.get(n.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):y.debug("Not activating.")},t.sendEvents=function(){f.emitSendEvents()},t.holdEvents=function(){f.emitHoldEvents()}},9081:function(){},4714:function(n,t,e){var i=e(3232),r=e(8235).U,o=t.ActivationCodeError=r("ActivationCodeError"),a=t.ProjectJSError=r("ProjectJSError"),u=e(978),s=e(9653),c=e(8317),f=e(6274),l=e(8798),d=e(1826),h=e(4773),v=e(1217),p=e(6280),g=e(9350),m=e(474),_=e(1596),w=e(2425),y=e(5562),E=e(4630),b=e(3209),I=e(9358),A=e(7356),T=e(406),S=e(7075).mM,R=e(3308),k=e(8492),N=e(5519),D=e(2498),C=e(5969),O=e(4702).Promise,x=e(2819),P=e(5840),M=(e(2798),e(6974)),L=e(4247),V=e(7324),F=e(7082),U=(g=e(9350)).get("stores/session"),z=g.get("stores/audience_data"),B=g.get("stores/action_data"),G=g.get("stores/cleanup"),j=g.get("stores/directive"),q=g.get("stores/global"),H=g.get("stores/group_data"),Y=g.get("stores/layer_data"),K=g.get("stores/layer"),$=g.get("stores/pending_events"),W=g.get("stores/plugins"),X=g.get("stores/rum"),J=g.get("stores/visitor"),Q=g.get("stores/view_data"),Z=g.get("stores/view"),nn=g.get("stores/visitor_id"),tn=g.get("stores/visitor_bucketing"),en=g.get("stores/xdomain"),rn=e(9414),on=e(6236),an=e(5715),un=t;function sn(n){on.handleError(n.data.error,n.data.metadata)}function cn(n,t){I.dispatch(s.SET_RUM_DATA,{data:{extras:{xdAttempt:n,xdError:t?t.toString():void 0}}})}function fn(n,t,e){n=n||[];var r=W.getAllPlugins(w.PluginTypes.visitorProfileProviders),o=q.getGlobalHoldbackThreshold(),a=J.getVisitorProfile();V.populateLazyVisitorData(r,a);var u=nn.getBucketingId();if(!u)throw new Error("bucketingId not set");var s,c=J.getVisitorProfile();t&&(s=tn.getVariationIdMap()[t.id]);var f={bucketingId:u,visitorProfile:c,audiences:n,globalHoldback:o,preferredVariationMap:s,layer:t};return t&&e&&p.isPageIdRelevant(t)?i.map(e,(function(n){return p.createTicket(i.extend({},f,{pageId:n}))})):[p.createTicket(f)]}function ln(n,e,r,o){try{var a=function(n){return{bucketingId:nn.getBucketingId(),preferredLayerId:tn.getPreferredLayerMap()[n.id]}}(o),u=p.decideGroup(o,a);if(u.reason)return R.debug("Not activating Group",A.description(o),"; reason:",u.reason),X.getSampleRum()&&I.dispatch(s.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),O.resolve();var c=Y.get(u.layerId);if(!c)return R.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),O.resolve();var f=i.filter(c.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(R.debug("Not activating Group",A.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),O.resolve()):(X.getSampleRum()&&I.dispatch(s.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),t.decideAndExecuteLayerASAP(n,e,f,c))}catch(l){return R.error("Error getting decision for Group",A.description(o),"; ",l),O.reject(l)}}function dn(n,t){var e={};return i.each(n,(function(n){i.isArray(n)?i.extend(e,dn(n,t)):i.isObject(n)&&t[n.type]&&(e[n.type]=!0)})),e}function hn(n){var t=[];return i.each(n,(function(n){t.push(n.name,n)})),t}function vn(n){var t=G.getCleanupFns(n);if(t.length>0){for(;t.length>0;)t.shift()();I.dispatch(s.CLEAR_CLEANUP_FN,{lifecycle:n})}}t.initialize=function(n){return this.initGlobalStore(n.clientData),this.initializePlugins(n.plugins)},t.initGlobalStore=function(n){n=n;h.normalizeClientData(n),y.on({filter:{type:"error"},handler:sn}),I.dispatch(s.DATA_LOADED,{data:n}),R.log("Initialized with DATA:",n)},t.initializePlugins=function(n){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(n){var t=!0;return!rn.push(n,t)}))),m.setOptOut(j.shouldOptOut()),!j.isDisabled()&&!j.shouldOptOut()){an.queueBeacons(),_.isReady()?I.dispatch(s.SET_DOMCONTENTLOADED):_.addReadyHandler((function(){I.dispatch(s.SET_DOMCONTENTLOADED)})),N.time("projectJS");var e=q.getProjectJS();if(i.isFunction(e))try{b.apply(e)}catch(u){R.error("Error while executing projectJS: ",u),d.emitError(new a(u))}N.timeEnd("projectJS"),i.each(n||[],(function(n){try{n(D)}catch(u){d.emitInternalError(u)}})),i.each(q.getPlugins()||[],(function(n){try{b.apply(n,[D])}catch(u){d.emitError(u)}})),P.load();var r=y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){J.observe(V.persistVisitorProfile),K.observe(V.persistLayerStates),U.observe(V.persistSessionState),$.observe(k.persistPendingEvents),tn.observe(V.persistVisitorBucketingStore),y.off(r)}});y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var o=k.getPendingEvents();if(o&&(I.dispatch(s.LOAD_PENDING_EVENTS,{events:o}),k.retryPendingEvents(o)),y.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),f.emitInitializedEvent(),!j.shouldActivate())return O.resolve();return function(){!1;var n=null;i.isNumber(n)&&0===Y.getCount()?(R.log("Activating after delay of",n,"ms because no Experiments are running"),I.dispatch(s.SET_RUM_DATA,{data:{activateDfd:!0}}),F.setTimeout(f.emitActivateEvent,n)):f.emitActivateEvent()}(),O.all([])}R.log("Controller / Is disabled")},t.activate=function(){try{var n=[];R.log("Activated client"),vn(w.Lifecycle.preActivate);var t=v.now();I.dispatch(s.ACTIVATE,{activationId:String(t),activationTimestamp:t});var e=Q.getAll();L.registerViews(e),V.setId(V.getOrGenerateId()),n.push(c.trackPostRedirectDecisionEvent()),I.dispatch(s.MERGE_VARIATION_ID_MAP,{variationIdMap:V.getVariationIdMap()}),I.dispatch(s.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:V.getPreferredLayerMap()}),vn(w.Lifecycle.postVisitorProfileLoad),n.push((h=W.getAllPlugins(w.PluginTypes.visitorProfileProviders),g=J.getVisitorProfile(),V.populateEagerVisitorData(h,g)).then((function(){R.log("Populated visitor profile")})));var r=fn(),o=p.decideGlobal(r);R.log("Made global decision",r,"->",o),I.dispatch(s.RECORD_GLOBAL_DECISION,o);var a=c.trackClientActivation();a?R.log("Tracked activation event",a):R.log("Not tracking activation event");var u=un.setUpViewActivation(e),l=[];return i.each(u,(function(n){l=l.concat(L.activateMultiple([n]))})),vn(w.Lifecycle.postViewsActivated),vn(w.Lifecycle.postActivate),f.emitActivatedEvent(),O.all(n).then((function(){y.emit({type:E.TYPES.LIFECYCLE,name:"activateDeferredDone"}),R.log("All immediate effects of activation resolved")}),d.emitError)}catch(m){return d.emitError(m),O.reject(m)}var h,g},un.setUpViewActivation=function(n){var t=[];return i.each(n,(function(n){i.isBoolean(Z.getViewState(n.id).isActive)&&L.isActivationTypeImmediate(n.activationType)?R.debug("Skipping page: already evaluated, presumably at the edge",L.description(n)):L.shouldTriggerImmediately(n.activationType)?t.push(n):n.activationType===w.ViewActivationTypes.callback?(R.debug("Setting up conditional activation for Page",L.description(n)),un.activateViewOnCallback(n)):n.activationType===w.ViewActivationTypes.polling?(R.debug("Setting up polling activation for Page",L.description(n)),C.pollFor(i.partial(b.apply,n.activationCode),null,i.partial(M.isTimedOut,v.now())).then((function(){L.activateMultiple([n])}))["catch"]((function(t){R.warn("Failed to activate view ",n,t)}))):n.activationType!==w.ViewActivationTypes.manual&&d.emitError(new Error("Unknown view activationType: "+n.activationType))})),t},un.activateViewOnCallback=function(n){var t={pageId:n.id};Object.defineProperty(t,"isActive",{get:function(){return Z.isViewActive(n.id)}});try{b.apply(n.activationCode,[function(t){var e=i.extend({},t,{pageName:n.apiName,type:"page"});rn.push(e)},t])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+L.description(n));d.emitError(e,{originalError:r,userError:!0})}},t.onViewsActivated=function(n){var e,r=n.data.views,o=i.map(r,"id");try{if(!nn.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(n){var e=Y.getAllByPageIds(n),r=j.getForceVariationIds(),o=j.getForceAudienceIds(),a=!i.isEmpty(r);a&&R.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(n,t){return t.groupId?n.groups[t.groupId]||(n.groups[t.groupId]=H.get(t.groupId)):n.individual.push(t),n}),{groups:{},individual:[]});R.log("Deciding Campaigns/Experiments for Page(s)",n);var s=i.map(u.groups,A.description).join(", ");R.log("Groups:",s);var c=i.map(u.individual,T.description).join(", ");R.log("Campaigns/Experiments not in Groups (by Campaign id):",c);var f=i.map(u.groups,i.partial(ln,r,o,n))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,n));return t.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return O.all(d).then((function(t){var e=i.filter(t,(function(n){return!!n}));return R.log("All Campaigns/Experiments for Page(s) (by Campaign id)",n,"resolved:",i.map(e,T.description).join(", ")),e}))}(o)["catch"](d.emitError);return e=O.all(i.map(r,(function(n){var t=function(){L.parseViewTags(n);var t=c.trackViewActivation(n);t?R.log("Tracked activation for Page",L.description(n),t):R.log("Not Tracking activation for Page",L.description(n))};return _.isReady()?O.resolve(t()):C.pollFor(_.isReady,1e3).then(t)}))),O.all([a,e])}catch(u){d.emitError(u)}},t.onPageDeactivated=function(n){var t=n.data.page,e=B.getAllActionIdsByPageId(t.id);i.each(e,(function(n){var e=B.getActionState(n);e&&(i.each(e,(function(n,e){if(n.cancel)try{n.cancel(),R.debug("Controller / Canceled change",e,"observation due to deactivation of page:",t)}catch(i){R.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(t.undoOnDeactivation&&n.undo)try{n.undo(),R.debug("Controller / Undid change",e,"due to deactivation of page:",t)}catch(r){R.error("Controller / Error undoing change upon deactivation of page.",r)}})),I.dispatch(s.REMOVE_ACTION_STATE,{actionId:n}),R.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,n))}))},t.initializeApi=function(){var n={push:rn.push};n.get=rn.get;var t=window.optimizely;i.isArray(t)&&i.each(t,(function(t){n.push(t)})),n.data={note:"Obsolete, use optimizely.get('data') instead"},n.state={},window.optimizely=n},t.persistItemsWithId=function(n){return i.each(n,(function(n,t){V.checkKeyForVisitorId(t)&&S.setItem(t,n)})),n},t.initializeXDomainStorage=function(){var n=e(5762),r=!!V.getCurrentId(),o=!!r&&V.hasSomeData();r?o?R.log("xd / Existing visitor; has data on this origin"):R.log("xd / Existing visitor; new to this origin"):R.log("xd / New visitor");var a=q.getAccountId(),u="https://__SUBDOMAIN__cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),c="/client_storage/a"+a+".html";n.subscribe((function(n,t){V.checkKeyForVisitorId(n)&&S.setItem(n,t)}));var l=n.fetchAll().then((function(t){if(!nn.getVisitorIdLocator()){var e=en.getCanonicalOrigins();if(e){var i=n.getXDomainUserId(t,e);i&&(R.log("Syncing cross-origin visitor randomId:",i),V.maybePersistVisitorId({randomId:i}))}}return V.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(n){if(V.loadForeignData(),r&&!o){var t=!i.isEmpty(n);R.debug("xd / Loaded foreign data? ",t),cn(t)}R.log("Loaded visitor data from foreign origins"),f.emitOriginsSyncedEvent()}),(function(n){throw r&&!o&&(R.debug("xd / Failed to load foreign data:",n),cn(!1,n)),n}));return O.all([n.load(u,c)["catch"]((function(n){throw R.debug("xd / Failed to load iframe:",n),r&&!o&&cn(!1,n),n})),l["catch"]((function(n){R.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",n.message),R.debug("xd / Enqueuing sync to happen after visitorId set."),I.dispatch(s.ADD_CLEANUP_FN,{lifecycle:w.Lifecycle.postVisitorProfileLoad,cleanupFn:f.emitOriginsSyncedEvent})}))])},t.decideAndExecuteLayerASAP=function(n,e,r,o){return new O((function(a,d){try{!function(n,t,e,r,o){if(t.length||e.length)return void o(fn([],void 0,r));var a=T.relatedAudienceIds(n),u=i.reduce(a,(function(n,t){var e=z.get(t);return!e||n.push(e),n}),[]),c=W.getAllPlugins(w.PluginTypes.audienceMatchers);if(X.getSampleRum()){var f={};if(i.each(u,(function(n){i.extend(f,dn(n.conditions,c))})),!i.isEmpty(f)){var d=i.keys(f);I.dispatch(s.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:n.id})}}!function(n,t,e,r){var o=i.reduce(n,(function(n,e){return i.extend(n,l.requiredAudienceFieldsForConditions(e.conditions,t))}),{}),a=i.reduce(o,(function(n,t){if(i.isUndefined(V.getAttribute(t))){var e=V.getPendingAttributeValue(t);i.isUndefined(e)||n.push(e)}return n}),[]);if(0===a.length)return r();var u=[].concat(n),s=x.firstToResolve(i.map(a,(function(n){return O.resolve(n).then((function(){var n=J.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(l.isInAudience(n,e,t))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));O.race([s,new O((function(n,t){F.setTimeout(t,e)}))]).then((function(){R.log("Activating Campaign after pending Audiences resolved",n),r()}),(function(){R.log("Activating Campaign after timeout on Audiences",n),r()}))}(u,c,T.getActivationTimeout(n),(function(){var t=fn(u,n,r);i.map(t,(function(t){!function(n,t,e){var r=i.map(n.audienceIds,i.bind(z.get,z)),o=i.filter(t,(function(t){return!i.includes(n.audienceIds,t.id)}));R.log("When deciding Campaign",T.description(e),"visitor is in audiences:",hn(r),"and not in audiences:",hn(o))}(t,u,n)})),o(t)}))}(o,n,e,r,(function(l){i.each(l,(function(a){var l=a.pageId?[a.pageId]:r;R.debug("Deciding layer: ",o,"with decisionTicket: ",a,"and actionViewIds: ",l),function(n,e,r,o,a){var l=T.description(n);R.log("Activating Campaign",l,"on Page(s)",o),r.length&&(R.log("Applying force audienceIds:",r,"to Campaign",l),(a=i.cloneDeep(a)).audienceIds=r);var d=t.decideLayer(n,a,e),h=!(!e.length&&!r.length),v=t.getActionsForDecision(n,d,h),g=function(n,t){return i.filter(n,(function(n){return i.isUndefined(n.pageId)||i.includes(t,n.pageId)}))}(v.actions,o);if(v.maybeExecute&&function(n,t,e,r){var o=T.description(t);R.log("Preparing actions",n,"for Campaign",o,"on Page(s)",r),i.forEach(n,u.prepareAction)}(g,n,0,o),i.forEach(o,(function(){c.trackDecisionEvent(d,a)})),f.emitLayerDecided({layer:n,decisionTicket:a,decision:d}),d.error)throw d.error;if(X.getSampleRum()){I.dispatch(s.RECORD_LAYER_POLICY_USAGE,{policy:n.policy,layerId:n.id});var m=function(n){var t={};return i.each(n,(function(n){i.each(n.changeSet,(function(n){t[n.type]||(t[n.type]=!0)}))})),t}(v.actions);I.dispatch(s.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:n.id}),i.isEmpty(n.integrationSettings)||I.dispatch(s.RECORD_INTEGRATION_USAGE,{integrations:T.getIntegrationTypes(n),layerId:n.id})}if(!p.isInCohort(d))return void R.log("Not activating Campaign: "+T.description(n)+"; not in the cohort because:",d.reason);v.maybeExecute&&function(n,t,e,r){var o=T.description(t);R.log("Executing actions",n,"for Campaign",o,"on Page(s)",r),O.all(i.map(n,(function(n){return u.executePreparedAction(n).then(i.partial(f.emitActionAppliedEvent,n))}))).then((function(){R.log("All page actions for",e,"applied:",n),f.emitActionsForDecisionAppliedEvent(e,n)}))["catch"]((function(n){R.warn("Error evaluating page actions for decision",e,"because:",n)}))}(g,n,d,o)}(o,n,e,l,a)})),a(o)}))}catch(h){R.error("Error getting decision for Campaign: "+T.description(o),h),d(h)}}))},t.decideLayer=function(n,t,e){var i;var r=T.description(n);i=e.length?p.getDummyLayerDecision(n,e):p.decideLayer(n,t),R.log("Recording decision for Campaign",r,t,"->",i),T.recordLayerDecision(n.id,t,i),i.variationId&&i.experimentId&&V.updateVariationIdMap(n.id,i.experimentId,i.variationId),n.groupId&&V.updatePreferredLayerMap(n.groupId,n.id);return i},t.getActionsForDecision=function(n,t,e){var i=T.description(n),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(B.getLayerActions(t.layerId)||[],B.getExperimentActions(t.experimentId)||[],B.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!e&&q.isGlobalHoldback())return R.log(r,i,"(visitor is in global holdback)"),o;if(t.isLayerHoldback)return R.log(r,i,"(visitor is in layer holdback)"),o;if(!t.experimentId||!t.variationId)return R.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,R.log("Got Actions for Campaign:",i,o.actions),o}},7565:function(n,t,e){var i=e(9755).Promise,r=e(1217),o=e(9350).get("stores/plugins"),a=e(2425),u=e(3308);t.create=function(n,t,e){var s={identifier:n.id,action:t,startTime:e||r.now()};try{var c=o.getPlugin(a.PluginTypes.changeAppliers,n.type);if(!c)throw new Error("Unrecognized change type "+n.type);return new c(n,s)}catch(f){return u.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},1729:function(n){n.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},4944:function(n,t,e){var i=e(3232),r=e(1729).CHANGE_DATA_KEY;function o(n,t){return[n,t].join("_")}t.getData=function(n,t,e){var i=o(t,e);return n[r]&&n[r][i]?n[r][i]:null},t.hasData=function(n){return Boolean(n&&n[r]&&!i.isEmpty(n[r]))},t.removeData=function(n,t,e){n[r]&&delete n[r][o(t,e)]},t.setData=function(n,t,e,i){if("object"!=typeof i)throw new Error("setData expects an object");n[r]||(n[r]={}),n[r][o(t,e)]=i}},5934:function(n,t,e){var i=e(1575);n.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},978:function(n,t,e){var i=e(3232),r=e(9653),o=e(1826),a=e(1115),u=e(8235).U,s=e(1217),c=e(9350),f=e(9358),l=e(3308),d=e(4702).Promise,h=e(4452),v=c.get("stores/global"),p=c.get("stores/action_data"),g=c.get("stores/change_data"),m=c.get("stores/session"),_=e(7565);e(6974).initialize();var w=u("ActionError");function y(n,t,e){if(p.getActionState(t.id)){var o=p.getChangeApplier(n.id,t.id);if(i.isUndefined(o)){var a={changeId:n.id,actionId:t.id,changeApplier:_.create(n,t,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",n)}else l.warn("Action / Attempted to prepare change for inactive action: ",t)}function E(n,t,e,r){if(!i.includes(r,t)){if(!n[t]){var u=g.getChange(t);if(!u){var c="Change with id "+t+" is absent";return r.length&&(c+=" but listed as a dependency for "+r[r.length-1]),void l.warn(c)}n[t]=new d((function(c){var f=i.map(u.dependencies||[],(function(i){return E(n,i,e,r.concat([t]))}));if(u.src){var v="change_"+u.src,m=a.makeAsyncRequest(v,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/2125675982/data"+u.src,(function(){a.resolveRequest(v)}))})).then((function(){var n=g.getChange(u.id);n||o.emitError(new w("Failed to load async change from src: "+u.src)),y(n,e,s.now())}));f.push(m)}d.all(f).then((function(){var n=s.now(),i=p.getChangeApplier(t,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(t){t?l.log(t):l.debug("Action / Applied change for the first time in "+(s.now()-n)+"ms:",u),c()}))):(l.debug("Action / Not applying change ",t," - No changeApplier found."),void c())}))["catch"]((function(n){l.error("Action / Failed to apply change:",u,n),c()}))}))}return n[t]}l.error("Change with id "+t+" has circular dependencies: "+r.concat(t))}t.prepareAction=function(n){l.debug("Action / Preparing:",n),f.dispatch(r.ACTION_EXECUTED,{actionId:n.id,sessionId:m.getSessionId(),layerId:n.layerId,pageId:n.pageId,timestamp:s.now(),activationId:v.getActivationId()});var t=s.now();i.forEach(n.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||y(a,n,t)}))},t.executePreparedAction=function(n){l.debug("Action / Executing:",n);var t={},e=i.map(n.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return E(t,r,n,[])}));return d.all(e).then((function(){l.debug("changes for action id="+n.id+" applied")}))}},6974:function(n,t,e){var i=e(1729),r=e(9350).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(t.domReadyTime=Date.now())}t.domReadyTime=null,t.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},t.isTimedOut=function(n){var e=Date.now();if(!t.domReadyTime||!n)return!1;var o=Math.max(n,t.domReadyTime);return r.isEditor()&&(o=t.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},8317:function(n,t,e){var i=e(3232),r=e(9653),o=e(1826),a=e(7201),u=e(1217),s=e(8127),c=e(9350),f=e(1596),l=e(2425),d=e(582),h=(e(5562),e(4630),e(1069)),v=e(9358),p=e(406),g=e(3308),m=(e(5519),e(4702).Promise),_=e(6371),w=e(5840),y=(e(2798),e(6822)),E=e(5662),b=c.get("stores/client_metadata"),I=c.get("stores/global"),A=c.get("stores/session"),T=c.get("stores/view"),S=c.get("stores/plugins"),R=c.get("stores/layer"),k=c.get("stores/layer_data"),N=c.get("stores/observed_redirect"),D=c.get("stores/pending_redirect"),C=c.get("stores/visitor"),O=c.get("stores/directive"),x=c.get("stores/event_data"),P=c.get("stores/visitor_id");function M(n,t){return i.extend({},n,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:i.isNull(n.clientName)?s.NAME:n.clientName,integrationStringVersion:i.isNull(n.integrationStringVersion)?1:n.integrationStringVersion,anonymizeIP:i.isNull(I.getAnonymizeIP())?void 0:I.getAnonymizeIP(),activationId:I.getActivationId(),decisionTicketAudienceIds:[],sessionId:A.getSessionId(),activeViewStates:[],userFeatures:F(C.getVisitorProfile()),layerStates:R.getLayerStatesForAnalytics()})}function L(n){var t=_.getReferrer()||f.getReferrer();return{eventId:E.generate(),timestamp:u.now(),revision:I.getRevision(),clientName:b.getClientName(),clientVersion:b.getClientVersion(),projectId:I.getProjectId(),accountId:I.getAccountId(),activationId:I.getActivationId(),sessionId:A.getSessionId(),isGlobalHoldback:I.isGlobalHoldback(),namespace:I.getNamespace(),referrer:t,visitorId:P.getRandomId(),activeViewStates:n.activeViewStates,layerStates:n.layerStates,userFeatures:F(n.visitorProfile)}}function V(n){var t,e;return n.pageId?(t=n.pageId,(e=T.getViewState(t))&&e.isActive?e.metadata:{}):{}}function F(n){var t=S.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(t,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(t,e){try{var o=e.provides,a=n[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(n,t){var e=i.isObject(n)?n:{value:n};return i.extend({},{type:o,name:t},e)})):u.push({type:o,value:a});var s=i(u).map((function(n){return i.pick(i.extend({},r,n),i.keys(r))})).filter((function(n){return!!n.value})).value();t=t.concat(s)}}catch(c){g.warn("Error evaluating userFeature against visitorProfile:",c)}return t}),[])}function U(n,t,e){var r=function(n,t){var e=[];return i.each(S.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[n]&&(!t||!i[t]))try{e.push({name:r,hookFn:c.evaluate(i[n])})}catch(o){g.error(o)}})),e}(n,e);g.debug("Found "+r.length+" analytics integrations defining a "+n+" hook"),g.debug("Calling each with data: ",t),i.each(r,(function(n){try{g.debug("Calling plugin: "+n.name),n.hookFn(t),g.debug("Called plugin: "+n.name)}catch(e){g.error(e)}}))}function z(n,t,e){var r=function(n,t){0;var e=[];return i.each(S.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(t,r[n])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(n,t);g.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+n+" timing of "+t.join("|")),g.debug("Calling each with data: ",e),i.each(r,(function(n){try{g.debug("Calling plugin: "+n.name),n.hookFn(e),g.debug("Called plugin: "+n.name)}catch(t){g.error(t)}}))}t.trackClientActivation=function(){if(O.shouldSendTrackingData()){var n,t=(n=L({activeViewStates:[],visitorProfile:C.getVisitorProfile(),layerStates:R.getLayerStatesForAnalytics()}),i.extend(n,{eventTags:{}}));return U("onClientActivation",t),t}},t.trackCustomEvent=function(n,t,e){t=t||{},e||(e=x.getByApiName(n));var r=function(n,t,e){var r=L({activeViewStates:T.getActiveViewStates(),visitorProfile:C.getVisitorProfile(),layerStates:R.getLayerStatesForAnalytics()}),o=e&&e.pageId?V(e):T.getActiveViewTags(),a=i.extend({},o,t),u=e&&e.category?e.category:d.OTHER;return i.extend(r,{eventEntityId:e&&e.id,eventApiName:n,eventCategory:u,eventTags:a})}(n,t,e),u={name:n,type:h.CUSTOM,category:r.eventCategory,tags:i.omit(r.eventTags,"revenue")};if(i.isUndefined(t.revenue)||(u.revenue=t.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:n,apiName:e?e.apiName:void 0,type:h.CUSTOM,tags:i.omit(r.eventTags,"revenue"),category:r.eventCategory,metrics:u.revenue?{revenue:u.revenue}:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent(u),U("onCustomEvent",r),r},t.trackDecisionEvent=function(n,t,e){e||(e=k.get(n.layerId));var o=E.generate();v.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:t.pageId,decisionId:o});var a=function(n,t,e,r){var o=null,a=null,s=null;if(t.experimentId){var c=i.find(r.experiments,{id:t.experimentId});if(c&&(o=c.name||null,s=c.integrationSettings,t.variationId)){var l=i.find(c.variations,{id:t.variationId});l&&(a=l.name||null)}}var d=_.getReferrer()||f.getReferrer();return{sessionId:A.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:P.getRandomId(),decisionId:n,activationId:I.getActivationId(),namespace:I.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:o,layerId:t.layerId,layerName:r.name,layerPolicy:r.policy,accountId:I.getAccountId(),projectId:I.getProjectId(),revision:String(I.getRevision()),clientName:b.getClientName(),clientVersion:b.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,s)}}(o,n,t,e),s=D.isExpectingRedirect(),c=D.getLayerId(),l=p.description(e);if(s&&c===e.id&&(w.persist(a,"COOKIE"),g.log("Relaying decision for redirect Campaign",l)),O.shouldSendTrackingData()){var d=M(a,n.isLayerHoldback);if(s&&c===e.id){var h=y.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=h,z(h,[y.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),g.log("Called trackLayerDecision for redirect Campaign",l,d)}else{h=y.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=h,z(h,[y.NonRedirectPolicies.TRACK_IMMEDIATELY],d),g.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else g.log("Analytics / Not tracking decision for Campaign",p.description(e))},t.trackPostRedirectDecisionEvent=function(){if(!O.shouldSendTrackingData()||N.hasTracked())return m.resolve();var n=N.get();if(!n)return m.resolve();var t=M(n,!1),e=y.TrackLayerDecisionTimingFlags.postRedirectPolicy;return t.timing=e,z(e,[y.PostRedirectPolicies.TRACK_IMMEDIATELY],t),z(y.TrackLayerDecisionTimingFlags.postRedirectPolicy,[y.PostRedirectPolicies.TRACK_AFTER_SYNC],t),v.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA),m.resolve()},t.trackClickEvent=function(n){var t=function(n){var t=L({activeViewStates:T.getActiveViewStates(),visitorProfile:C.getVisitorProfile(),layerStates:R.getLayerStatesForAnalytics()}),e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector,r=n.apiName,o=n.category||d.OTHER,a=n.id,u=V(n);return i.extend(t,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:n.pageId,selector:e})}(n),e={name:n.apiName,type:n.eventType,category:t.eventCategory,tags:t.eventTags};if(o.emitAnalyticsEvent({name:n.name||n.apiName,apiName:n?n.apiName:void 0,type:n.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent(e),U("onClickEvent",t),t},t.trackViewActivation=function(n,t){if(t||(t=T.getViewState(n.id)),t.isActive){var e=function(n,t){var e=L({activeViewStates:T.getActiveViewStates(),visitorProfile:C.getVisitorProfile(),layerStates:R.getLayerStatesForAnalytics()});return i.extend(e,{pageId:n.id,pageApiName:n.apiName,viewCategory:n.category,eventTags:t.metadata})}(n,t);if(o.emitAnalyticsEvent({name:n.name||e.pageApiName,apiName:e.pageApiName,type:h.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!O.shouldSendTrackingData()),O.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:h.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),v.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:n.id,eventData:e}),U("onPageActivated",e),e}else g.debug("Inactive view passed to `trackViewActivation`")}},5840:function(n,t,e){var i=e(3232),r=e(9653),o=e(6491),a=e(1826),u=e(9350),s=e(2425),c=e(9358),f=e(3308),l=e(6822),d=u.get("stores/plugins"),h=".",v=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(n){return i.map(n,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(n){return i.map(n.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(n,t){var e=null;if(n){var r=d.getPlugin(s.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}}return e},valueFromValueString:function(n,t){var e=null,r=d.getPlugin(s.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}return e},isNullable:!0}],p={},g={};i.forEach(v,(function(n){p[n.name]=n,g[n.relayName]=n})),t.persist=function(n,t){t===l.RedirectRelayMedia.COOKIE?function(n){try{var t=function(n){var t=[],e=i.reduce(n,(function(n,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(t,e){t=o.valueToValueString?o.valueToValueString(t,e):String(t),i.isNull(t)||(t=(o.encodeValueString||encodeURIComponent)(t),n.push(encodeURIComponent(o.relayName+h+e)+"="+t))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),n.push(o.relayName+"="+e)),n):(t.push(r),n)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields: "+t);return e.sort(),e.join("&")}(n)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",t);try{o.set(s.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),a.emitError(r)}}(n):f.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(n){if(n||(n=function(){var n=o.get(s.COOKIES.REDIRECT,!1);if(n)return f.log("Relay / Found redirect cookie:",n),n}()),n){var t=function(n){var t={},e=n.split("&");return i.forEach(e,(function(n){var e=n.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(v,(function(n){return n.isMulti&&0===r.indexOf(n.relayName+h)})))){var s=e[1];try{if(u.isMulti){t[u.name]=t[u.name]||{};var c=r.substring(u.relayName.length+h.length);s=(u.decodeValueString||o.safeDecodeURIComponent)(s),s=(u.valueFromValueString||i.identity)(s,c),t[u.name][c]=s}else s=(u.decodeValueString||o.safeDecodeURIComponent)(s),s=(u.valueFromValueString||i.identity)(s),t[u.name]=s}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",n,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",n,r)}else f.warn("Relay / Skipping invalid segment:",n)})),t}(n);if(t){var e=[];if(i.forEach(v,(function(n){(i.isNull(t[n.name])||i.isUndefined(t[n.name]))&&(n.isNullable?t[n.name]=null:(delete t[n.name],e.push(n.name)))})),!e.length)return c.dispatch(r.LOAD_REDIRECT_DATA,t),c.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var n,e;e=(n=t).pageId||void 0,c.dispatch(r.RECORD_LAYER_DECISION,{layerId:n.layerId,decision:{layerId:n.layerId,experimentId:n.experimentId,variationId:n.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:n.decisionTicketAudienceIds,bucketingId:n.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:n.activationId},sessionId:n.sessionId,activationId:n.activationId,timestamp:n.timestamp,revision:n.revision,namespace:n.namespace,pageId:e}),c.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:e,decisionId:n.decisionId}),c.dispatch(r.ACTION_EXECUTED,{sessionId:n.sessionId,layerId:n.layerId,pageId:n.pageId,timestamp:n.timestamp,activationId:n.activationId})}}),t;f.error("Relay / Observed redirect data with missing fields:",e)}}}},1826:function(n,t,e){var i=e(5562);t.emitError=function(n,t,e){i.emit({type:"error",name:n.name||"Error",data:{error:n,metadata:t}},e||!1,!0)},t.emitInternalError=function(n,e){t.emitError(n,e,!0)},t.emitAnalyticsEvent=function(n,t){var e={type:"analytics",name:"trackEvent",data:n};i.emit(e,t)}},8798:function(n,t,e){var i=e(3232),r=e(2813),o=e(5210),a=e(3308),u=e(7324);function s(n,t){var e="function"==typeof n?n(t):n;return i.isString(e)&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function c(n){return n.name?n.name+" ("+n.id+")":n.id}t.isInAudience=function(n,t,e){var u,f=function(n,t){return function(e){var r=e.type,u=t[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var c=s(u.fieldsNeeded,e),f=0;f<c.length;f++){var l=c[f],d=o.getFieldValue(n,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",n);var h=u.match(n,e);if(!i.isUndefined(h))return!!h}}(n,e);a.groupCollapsed("Checking audience",t.name,t.id,t),a.debug("Visitor Profile:",n);try{var l=r.evaluate(t.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",c(t),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",c(t)),l},t.requiredAudienceFieldsForConditions=function f(n,t){var e={};return i.each(n,(function(n){if(i.isArray(n))i.extend(e,f(n,t));else if(i.isObject(n)){var r=t[n.type];if(r){var o=s(r.fieldsNeeded,n);i.each(o,(function(n){e[u.serializeFieldKey(n)]=n}))}}})),e}},2460:function(n,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}},6200:function(n,t,e){var i=e(3232),r=e(2460),o=e(5210).getFieldValue,a=e(4447);function u(n,t,e,o,a){this[r.FIELDS.NAME]=n,this[r.FIELDS.TYPE]=t,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function s(n,t,e,o){this.eventBase=n,this[r.FIELDS.TIME]=t,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}t.x=u,u.prototype.digest=function(){var n=function(n,t){return encodeURIComponent(n)+"="+encodeURIComponent(t)},t=[];if(t.push(n(r.FIELDS.NAME,this[r.FIELDS.NAME])),t.push(n(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&t.push(n(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&t.push(n(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return t.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));o=o.sort();for(var a=0;a<o.length;a++)t.push(n(o[a],e[o[a]]));return t.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(n){this.hash_=n},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(n){if(this.hash()!==n.hash()||this[r.FIELDS.NAME]!==n[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==n[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==n[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==n[r.FIELDS.REVENUE])return!1;var t=this[r.FIELDS.OPTIONS]||{},e=n[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(t),(function(n){return t.hasOwnProperty(n)})),a=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var s=o[u];if(!e.hasOwnProperty(s)||t[s]!==e[s])return!1}return!0},u.prototype.getValueOrDefault=function(n,t){var e=o(this,n);return i.isUndefined(e)?t:e},u.prototype.setFieldValue=function(n,t){n!==r.FIELDS.NAME&&n!==r.FIELDS.TYPE&&n!==r.FIELDS.CATEGORY&&n!==r.FIELDS.REVENUE&&n!==r.FIELDS.OPTIONS||(this[n]=t,this.reHash())},t.j=s,s.prototype.getValueOrDefault=function(n,t){if(0===n.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,n);return i.isUndefined(a)?this.eventBase.getValueOrDefault(n,t):a},s.prototype.setFieldValue=function(n,t){n===r.FIELDS.TIME||n===r.FIELDS.SESSION_ID||n===r.FIELDS.SESSION_INDEX?this[n]=t:this.eventBase.setFieldValue(n,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};s.prototype.readableEvent=function(){var n,t,e=function(n){return i.isString(n)?'"'+n+'"':n},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){n=c[r],t=o.getValueOrDefault([r]),i.isUndefined(t)||a.push(n+": "+e(t))}));var u=[];if(n=c[r.FIELDS.OPTIONS],t=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(t)||(i.each(t,(function(n,t){u.push(t+": "+String(e(n)))})),a.push(n+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),t=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(t)&&(t=e(new Date(t).toString())),!i.isUndefined(t)){a.push("timestamp: "+t)}return"{\n\t"+a.join(",\n\t")+"\n}"},s.prototype.toObject=function(n){var t,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(n){t=c[n],e=a.getValueOrDefault([n],n===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[t]=e)}));var u=c[r.FIELDS.OPTIONS],s=c[r.FIELDS.REVENUE];if(n&&n.revenueAsTag&&o[s]&&(o[u]=o[u]||{},o[u][s]=o[s],delete o[s]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(n&&n.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},7201:function(n,t,e){var i=e(405);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.getEventCount=i.getEventCount},2611:function(n,t,e){var i=e(6200).j,r=e(1217),o=e(2460),a=e(6200).x;t.CURRENT_SESSION_INDEX=0;var u=18e5;function s(n,e){var i;i=t.isInSameSession(n,e)?n.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function c(n,e,i){var r,a=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=t.isInSameSession(e,n)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}t.isInSameSession=function(n,t){var e=n.getValueOrDefault([o.FIELDS.TIME],0),i=t.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<u},t.updateSessionId=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_ID]),u=t.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,s(n=new i(new a("",""),e,r),t)}else t.setFieldValue(o.FIELDS.SESSION_ID,t.getValueOrDefault([o.FIELDS.TIME]))},t.updateSessionIndex=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=t.getValueOrDefault([o.FIELDS.TIME]),s=n.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,s="number"!=typeof s?e:s,c(n=new i(new a("",""),e,s,r),t,!1)}else t.setFieldValue(o.FIELDS.SESSION_INDEX,0)},t.sessionize=function(n){var e=n.length;if(0!==e){n[0].setFieldValue(o.FIELDS.SESSION_ID,n[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)s(n[i-1],n[i]);var a=t.CURRENT_SESSION_INDEX,f=n[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),n[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)c(n[i],n[i-1],!0)}},t.reindexIfNecessary=function(n,t,e){var i=function(n){for(var t=0;t<n.length;t++){var e=n[t].getValueOrDefault([o.FIELDS.SESSION_INDEX]);n[t].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===n.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(t),i(e))},t.sessionSortPredicate=function(n,t){return n[o.FIELDS.TIME]-t[o.FIELDS.TIME]},t.applyMigrations=function(n){return!1}},405:function(n,t,e){var i=e(3232),r=e(9653),o=e(1217),a=e(582),u=e(9358),s=e(3308),c=e(7324),f=t,l=e(6200).j,d=e(2460),h=e(6200).x,v=e(2611),p=e(9350),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function w(n){u.dispatch(r.SET_VISITOR_EVENTS,n)}function y(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:n})}function E(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:n})}function b(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:n})}function I(){return g.getEvents()}function A(){return m.getBaseMap()}function T(){return m.getEventQueue()}function S(){return m.getLastEvent()}function R(){var n=I().concat(T()),t=!1;return n.length>1e3&&(n=n.slice(-1e3),t=!0),w(n),E([]),t}t.initialize=function(n,t){if(!m.getInitialized()){f.S(n,t);var e=I();e.length>0&&b(e[e.length-1]);var i=T();i.length>0&&b(i[i.length-1]),u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},t.addEvent=function(n){s.debug("Behavior store: adding event",n);var t=f.R(n);b(t),E(T().concat(t)),v.reindexIfNecessary(S(),I(),T()),f.k(T())},t.getEvents=function(){return T().length>0&&(R()&&v.sessionize(I()),f.N(I()),f.k(T())),I()},t.getEventCount=function(){return T().length+I().length},f.S=function(n,t){f.D(n,t)&&(f.N(I()),f.k(T())),v.sessionize(I())},f.D=function(n,t){if(0===n.length&&0===t.length)return w([]),E([]),!1;var e=!1,i=n[0]||t[0];return _.EVENTBASE in i?(w(f.C(n)),E(f.C(t))):(e=!0,w(f.O(n)),E(f.O(t))),T().length>0&&(R(),e=!0),w(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.O=function(n){for(var t=[],e=0;e<n.length;e++){var i=n[e],r=f.P(i);t[e]=new l(r,i[d.FIELDS.TIME])}return t},f._migrateEventBasesAndUpdateStore=function(){var n=!1,t=f.M();return v.applyMigrations(t)&&(n=!0,y({}),w(f._updateBaseMapAndMaybeDedupe(I())),E(f._updateBaseMapAndMaybeDedupe(T()))),n},f.L=function(){return o.now()},f.R=function(n){var t,e=n.name,i=n.type||"default",r=n.category||a.OTHER,o=n.tags||{};n.revenue&&(t=n.revenue);var u=new h(e,i,r,o,t);u=f.V(u);var s=f.L(),c=new l(u,s,-1);return v.updateSessionId(S(),c),v.updateSessionIndex(S(),c),c},f._updateBaseMapAndMaybeDedupe=function(n){for(var t=0;t<n.length;t++)n[t].eventBase=f.V(n[t].eventBase);return n},f.N=function(n){var t=f.F(n);c.persistBehaviorEvents(t)},f.k=function(n){var t=f.F(n);c.persistBehaviorEventQueue(t)},f.B=function(){var n;m.getCleared()||(w([]),E([]),f.N(I()),f.k(T()),y({}),b(null),n=!0,u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:n}))},f.V=function(n){var t=n.hash(),e=A(),r=e[t];if(i.isUndefined(r))return e[t]=[n],y(e),n;for(var o=0;o<r.length;o++)if(n.equals(r[o]))return r[o];return r.push(n),y(e),n},f.M=function(){var n=[],t=A();for(var e in t)!t.hasOwnProperty(e)||(n=n.concat(t[e]));return n},f.F=function(n){for(var t=function(n){var t={};t[d.FIELDS.NAME]=n.getValueOrDefault([d.FIELDS.NAME]),t[d.FIELDS.TYPE]=n.getValueOrDefault([d.FIELDS.TYPE]);var e=n.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(t[d.FIELDS.CATEGORY]=e);var r=n.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(t[d.FIELDS.REVENUE]=r);var o=n.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(t[d.FIELDS.OPTIONS]=o),t},e=_,r=[],o="_idx_",a=0;a<n.length;a++){var u,s,c=n[a],f=c.eventBase;if(f.hasOwnProperty(o)){u=r[f._idx_];var l=c[d.FIELDS.TIME]-(u[e.TIMEBASE]||0);(s={})[e.DELTA]=l,s[e.INDEX]=a,u[e.TIMESTAMPS].push(s)}else(u={})[e.EVENTBASE]=t(c),u[e.HASH]=f.hash(),u[e.TIMEBASE]=c[d.FIELDS.TIME],(s={})[e.DELTA]=0,s[e.INDEX]=a,u[e.TIMESTAMPS]=[s],r.push(u),f._idx_=r.length-1}for(a=0;a<n.length;a++)delete n[a].eventBase._idx_;return r},f.P=function(n,t){var e=new h(n[d.FIELDS.NAME],n[d.FIELDS.TYPE],n[d.FIELDS.CATEGORY],n[d.FIELDS.OPTIONS],n[d.FIELDS.REVENUE]);return i.isUndefined(t)||e.setHash(t),e},f.C=function(n){for(var t=_,e=[],i=0;i<n.length;i++)for(var r=n[i],o=f.P(r[t.EVENTBASE],r[t.HASH]),a=r[t.TIMEBASE],u=r[t.TIMESTAMPS],s=0;s<u.length;s++){var c=u[s],d=new l(o,a+c[t.DELTA]);e[c[t.INDEX]]=d}return e},t.deserialize=function(n){return f.C(n)},t.mergeAllEvents=function(n){var t=[].concat.apply([],n);return t.sort(v.sessionSortPredicate),v.sessionize(t),t}},9653:function(n,t,e){var i=e(1575);n.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},2425:function(n,t,e){var i=e(3232),r=e(1575);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},t.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}},582:function(n){n.exports={OTHER:"other"}},4630:function(n,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},1069:function(n){n.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},6822:function(n,t,e){var i=e(1575);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})},6416:function(n,t,e){var i=e(4447),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(n,t,e){return i.hashToInt(n+t,e,r)},t.isHoldback=function(n,e){return t.bucketingNumber(n,e.id,i.Seed.IGNORING)<(e.holdback||0)},t.chooseWeightedCandidate=function(n,e,r){for(var o=t.bucketingNumber(n,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},7929:function(n,t,e){var i=e(3232),r=e(9653),o=e(6416),a=e(2813),u=e(3529).E,s=e(9358),c=e(3308);t.isValidExperiment=function(n,t){var e,r=i.partial(i.includes,n);return c.groupCollapsed("Decision / Evaluating audiences for experiment:",t,n),e=!t.audienceIds||a.evaluate(t.audienceIds,r),c.groupEnd(),c.debug("Decision / Experiment",t,"is valid?",e),e},t.selectVariation=function(n,t,e,a,f){if(!n.variations||0===n.variations.length)throw new u('No variations in selected experiment "'+n.id+'"');if(!n.weightDistributions&&n.variations.length>1)throw new u('On selected experiment "'+n.id+'", weightDistributions must be defined if # variations > 1');var l;if(n.bucketingStrategy&&"impression"===n.bucketingStrategy)if(1===n.variations.length)l=n.variations[0].id;else{var d=a;l=o.chooseWeightedCandidate(e+d,n.id,n.weightDistributions)}else if(l=1===n.variations.length?n.variations[0].id:o.chooseWeightedCandidate(e,n.id,n.weightDistributions),f&&f[n.id]){c.debug("Decision / Using preferredVariationMap to select variation for experiment:",n.id);var h=f[n.id];if(!i.find(n.variations,{id:h}))return s.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:n.id}),c.debug("Decision / Preferred variation:",h,"not found on experiment:",n.id,". Visitor not bucketed."),null;h!==l&&(s.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:n.id}),l=h)}var v=i.find(n.variations,{id:l});if(v)return c.debug("Decision / Selected variation:",v),v;throw new u('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(n,t){var e=i.find(n.experiments,{id:t});if(e)return e;throw new u("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(n,t){return c.debug("Decision / Checking variation:",n,"for actions on pageId:",t),!!i.find(n.actions,(function(n){return n.pageId===t&&!i.isEmpty(n.changes)}))}},3529:function(n,t){function e(n){this.message=n}e.prototype=new Error,t.E=e},6280:function(n,t,e){var i=e(3232),r=e(9653),o=e(1826),a=e(8798),u=e(6416),s=e(7929),c=e(3529).E,f=e(9350),l=e(2425),d=e(9358),h=e(7356),v=e(406),p=e(3308),g=e(5293),m=f.get("stores/plugins"),_=f.get("stores/global"),w=f.get("stores/layer_data");function y(n){var t=m.getPlugin(l.PluginTypes.deciders,n);if(i.isEmpty(t))throw new Error("No deciders found for policy: "+n);return t}t.isPageIdRelevant=function(n){if(!n)return!1;var t=y(n.policy);return i.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(n):!0===t.includePageIdInDecisionTicket},t.createTicket=function(n){var t,e,r,o=i.pick(n,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(t=n.visitorProfile,e=n.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(n,e){return a.isInAudience(t,e,r)&&n.push(e.id),n}),[])),activationId:_.getActivationId()}),o},t.decideGlobal=function(n){return{isGlobalHoldback:u.isHoldback(n.bucketingId,{id:null,holdback:n.globalHoldback})}},t.decideGroup=function(n,t){p.debug("Decision / Deciding layer for group: ",h.description(n));var e,o,a=t.preferredLayerId,s=!!a;try{(e=u.chooseWeightedCandidate(t.bucketingId,n.id,n.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(s&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(n)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:n.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(n.weightDistributions,{entityId:e})){var f="Visitor was"+(s?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!s)throw new c(f);return{layerId:null,reason:f}}return{layerId:e}},t.decideLayer=function(n,t){var e,r;p.debug("Deciding: ",n,t);var a,f,l=y(n.policy),d={layerId:n.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,n)};if(i.isEmpty(n.experiments))throw new c("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var h=l.decideLayer(n,t);e=h.experiment,r=h.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(n,t.audienceIds,t.bucketingId),r=s.selectVariation(e,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(v){a=v,(null!=(f=c)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](a):a instanceof f)?d.reason=v.message:d.error=v}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},t.getDummyLayerDecision=function(n,t){var e,i=function(n,t){for(var e=0;e<n.experiments.length;e++)for(var i=0;i<n.experiments[e].variations.length;i++)if(t.indexOf(n.experiments[e].variations[i].id)>-1)return{experimentId:n.experiments[e].id,variationId:n.experiments[e].variations[i].id};return null}(n,t);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(n)),e={layerId:n.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",t,"in Campaign",v.description(n)),e={layerId:n.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},t.isInCohort=function(n){if(!n.experimentId||!n.variationId)return!1;var t=w.get(n.layerId);return!(g.isSingleExperimentPolicy(t.policy)&&n.isLayerHoldback)}},9350:function(n,t,e){var i=e(3232),r=e(3599),o=e(9358),a=e(5168),u=r.create(),s={action_data:e(3264),async_request:e(7402),audience_data:e(1139),change_data:e(4410),cleanup:e(9247),client_metadata:e(4599),cookie_options:e(7283),event_data:e(6391),event_emitter:e(4021),dimension_data:e(5),directive:e(4911),global:e(6033),history:e(8858),integration_settings:e(9627),layer:e(8347),layer_data:e(3831),log:e(1066),observed_redirect:e(8592),pending_events:e(2492),performance:e(703),plugins:e(1043),provider_status:e(6858),pending_redirect:e(493),rum:e(2981),sandbox:e(2709),session:e(5053),tracker_optimizely:e(1755),ua_data:e(557),view:e(3523),view_data:e(6107),visitor:e(2975),visitor_attribute_entity:e(7947),visitor_events:e(1325),visitor_events_manager:e(98),visitor_id:e(6950),visitor_bucketing:e(6018),xdomain:e(2775)};s.group_data=e(1647),o.registerStores(s),i.forOwn(s,(function(n,t){u.register("stores/"+t,o.getStore(t))})),u.register("core/plugins/matchers/key_value",a),n.exports=u},474:function(n,t,e){var i=e(3232),r=e(9653),o=e(1826),a=e(6491),u=e(8235).U,s=e(2425),c=e(9358),f=e(3308),l=t.JSONParseError=u("JSONParseError"),d=e(2052),h=e(6898),v=e(7082),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",w="optimizely_x_audiences",y="optimizely_x",E="optimizely_show_preview",b="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking";t.populateDirectiveData=function(){var n,t,e,u,T,S,R,k;!function(){var n="OFF",t=d.getQueryParamValue("optimizely_log");if(t){var e=t.split(":");""!==e[0]&&(n=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(n)}(),function(){var n=v.getUserAgent()||"";if(!i.isString(n))return void f.warn("Directive / userAgent not a string");n=n.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(t){if(i.includes(n,t))return f.warn("Directive / Matches bot:",t),!0};i.some(t,e)&&(f.log("Directive / Disabling tracking"),c.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),n=Boolean(i.result(window.optimizely,"initialized")),c.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:n}),c.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:v.isMutationObserverAPISupported()}),function(){var n=a.get(s.COOKIES.OPT_OUT),t=d.getQueryParamValue(b),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===t||"false"===t){var o="true"===t;c.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),v.alert(o?e:i)}else n&&c.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===n})}(),function(){var n=!1,t=[p,g];t.push(m);for(var e=0;e<t.length;e++)if("true"===d.getQueryParamValue(t[e])){f.warn("Directive / Not activating because "+t[e]+" is set."),n=!0;break}c.dispatch(r.LOAD_DIRECTIVE,{disabled:n})}(),c.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),c.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(t=d.getQueryParamValue(E))&&f.log("Directive / Is legacy preview mode"),c.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!t}),c.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=v.getGlobal("optlyDesktop"),(u=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),c.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:u}),(T="true"===d.getQueryParamValue(_))&&f.log("Directive / Is running in editor"),c.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:T}),S=a.get(s.COOKIES.TOKEN)||null,R=d.getQueryParamValue(I)||S,c.dispatch(r.LOAD_DIRECTIVE,{projectToken:R}),function(){var n=a.get(s.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(w);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=h.parse(n).forceAudienceIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+n),u={originalMessage:v.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Audience IDs:",t),c.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:t}))}(),function(){var n=a.get(s.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(y);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=h.parse(n).forceVariationIds}catch(v){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+n),u={originalMessage:v.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Variation IDs:",t),c.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t}))}(),(k=d.getQueryParamValue(A))&&c.dispatch(r.LOAD_DIRECTIVE,{forceTracking:k})};t.setOptOut=function(n){n?(f.warn("Directive / Opting out"),a.set(s.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(s.COOKIES.OPT_OUT),c.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:n})}},1217:function(n,t){t.now=function(){return+new Date}},8127:function(n,t){t.VERSION="0.176.0",t.NAME="js"},1596:function(n,t,e){var i=e(9350).get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(n){document.cookie=n},t.querySelector=function(n){return document.querySelector(n)},t.querySelectorAll=function(n){return document.querySelectorAll(n)},t.parseUri=function(n){var e=t.createElement("a");return e.href=n,e},t.childrenOf=function(n){return Array.prototype.slice.call(n.querySelectorAll("*"))},t.createElement=function(n){return document.createElement(n)},t.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(n){return document.addEventListener("DOMContentLoaded",n),function(){t.removeReadyHandler(n)}},t.removeReadyHandler=function(n){return function(){document.removeEventListener("DOMContentLoaded",n)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(n){if("loading"!==t.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(n)},t.appendToHead=function(n){return t.appendTo(document.head,n)},t.appendTo=function(n,t){n.appendChild(t)},t.addEventListener=function(n,t,e){return document.addEventListener(n,t,e),function(){document.removeEventListener(n,t,e)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(n){for(var t=n.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}},7075:function(n,t,e){var i,r,o="optimizely_data",a=e(8235).U,u=e(4015),s=e(7082),c=a("StorageError");try{r=s.getGlobal("localStorage")}catch(f){throw new c("Unable to read localStorage: "+f.toString())}if(!r)throw new c("localStorage is undefined");i=u.create(r,o),t.mM=i},1016:function(n,t){t.create=function(n){return new MutationObserver(n)},t.observe=function(n,t,e){n.observe(t,e)}},4593:function(n,t,e){var i=e(4702).Promise,r=e(7082);t.estimateStorage=function(){var n=r.getGlobal("navigator");try{return n.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},5519:function(n,t,e){var i=e(9653),r=e(8235).U,o=e(1217),a=e(9358),u=e(7082),s=e(9350).get("stores/rum"),c="optimizely:",f=t.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}t.time=function(n){if(s.getSampleRum()){var t=l();if(t&&t.mark){var e=c+n;t.clearMarks(e+"Begin"),t.mark(e+"Begin")}}},t.timeEnd=function(n){if(s.getSampleRum()){var t=l();if(t&&t.mark){var e=c+n,r=t.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+n);t.clearMarks(e+"End"),t.mark(e+"End");var o=n+"Time",u=t.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.now=function(){var n=l();return n?n.now():o.now()}},7082:function(n,t,e){var i=e(3232),r=e(3308);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(n){window.location.replace(n)},t.setGlobal=function(n,t){window[n]=t},t.getGlobal=function(n){return window[n]},t.getGlobalByPath=function(n){for(var t=n.split("."),e=window;t.length;)try{e=e[t.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",n),new Error("Attempted to access nonexistent property. Path "+n)}return e},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(n){alert(n)},t.setTimeout=function(n,t){return setTimeout((function(){try{n()}catch(t){r.warn("Deferred function threw error:",t)}}),t)},t.setInterval=function(n,t){return setInterval((function(){try{n()}catch(t){r.warn("Polling function threw error:",t)}}),t)}},6426:function(n,t,e){var i=e(3232);t.create=function(n,t,e,r){return i.extend({category:"other"},r,{id:n,apiName:t,eventType:e})}},5562:function(n,t,e){var i=e(3232),r=e(5662),o=e(9653),a=e(1826),u=e(9350),s=e(9358),c=e(3308),f=u.get("stores/event_emitter");t.on=function(n){return n.token||(n.token=r.generate()),s.dispatch(o.ADD_EMITTER_HANDLER,n),n.token},t.off=function(n){s.dispatch(o.REMOVE_EMITTER_HANDLER,{token:n})},t.emit=function(n,t,e){var r=f.getHandlers(n,t);i.each(r,(function(i){try{i.handler.call({$di:u},n)}catch(r){!e&&i.emitErrors?(c.error("Error in handler for event:",n,r),a.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",n,r)}}))}},7444:function(n,t,e){var i=e(5562);t.on=function(n){return n.publicOnly=!0,i.on(n)},t.off=i.off,t.emit=function(n){i.emit(n)}},3209:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(7871),di=__webpack_require__(9350),Logger=__webpack_require__(3308),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(n,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return n.apply(void 0,t)}catch(e){throw Logger.warn("Error applying function",n,"with args:",t,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},9358:function(n,t,e){var i=e(8060);n.exports=i.create()},7356:function(n,t,e){var i=e(3232);t.description=function(n){var t=!!n.name?'"'+n.name+'" ':"",e=function(n){return i.map(n.weightDistributions,"entityId")}(n).join(", ");return t+"(id "+n.id+", campaigns: "+e+")"}},406:function(n,t,e){var i=e(3232),r=e(9653),o=e(1217),a=e(9350),u=e(9358),s=a.get("stores/global"),c=a.get("stores/session");t.recordLayerDecision=function(n,t,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:n,decision:e,decisionTicket:t,sessionId:c.getSessionId(),activationId:s.getActivationId(),timestamp:o.now(),revision:s.getRevision(),namespace:s.getNamespace(),pageId:t.pageId}),e},t.relatedAudienceIds=function(n){var t={},e=["and","or","not"];return i.each(n.experiments,(function(n){i.each(i.flattenDeep(n.audienceIds),(function(n){i.includes(e,n)||(t[n]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(n){var t=n.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:2e3},t.description=function(n){return(n.name?'"'+n.name+'" ':"")+"("+n.id+")"},t.createSingle=function(n,t,e){return{id:n,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:e||"",actions:[]}]}],integrationStringVersion:1}},t.createLayerState=function(n,t,e,i){return{layerId:n,decision:{layerId:n,experimentId:t,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},t.getIntegrationTypes=function(n){return i.keys(i.reduce(i.keys(n.integrationSettings),(function(n,t){return i.isNaN(Number(t))||(t="custom"),n[t]=1,n}),{}))}},4855:function(n,t,e){var i=e(3232);t.y=function(n,t){if(!t)return 0;for(var e=t.toString().split("."),r=n.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},2813:function(n,t,e){var i=e(3232),r=e(6898),o=e(3308),a="or",u="not";var s={};function c(n,t){var e;if(i.isArray(n)){var u,c;n[0]in s?(u=n[0],c=n.slice(1)):(u=a,c=n),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(c));try{e=s[u](c,t),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=t(n),o.debug("Condition / Evaluated:",r.stringify(n),":",e),e}s["and"]=function(n,t){for(var e,r,o=0;o<n.length;o++){if(!1===(e=c(n[o],t)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},s[a]=function(n,t){for(var e,r=!1,o=0;o<n.length;o++){if(!0===(e=c(n[o],t)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},s[u]=function(n,t){if(1!==n.length)return!1;var e=c(n[0],t);return i.isUndefined(e)?void 0:!e},n.exports={evaluate:c}},260:function(n,t,e){var i=e(3232),r=e(388);function o(n){if((n=(n||"").toLowerCase())in s)return n;var t=i.keys(s);return i.find(t,(function(t){var e=s[t];return i.includes(e,n)}))||"unknown"}function a(n,t,e){return t||("unknown"===n?"unknown":e?"mobile":"desktop_laptop")}t.parseUA=function(n){var t=new r(n),e=t.getBrowser(),i=t.getOS(),s=t.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(s.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:c[s.model]||"unknown",type:a(l,s.type,d),isMobile:d}}};var u=function(n,t,e){if(i.includes(["mobile","tablet"],n)||i.includes(["opera mini"],t))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},s={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}},3599:function(n,t,e){var i=e(3232);function r(){this.q={}}r.prototype.register=function(n,t){if(1!==arguments.length){if(this.q[n])throw new Error("Module already registered for: "+n);this.q[n]=t}else{var e=this;i.each(n,(function(n,t){e.register(t,n)}))}},r.prototype.get=function(n){return this.q[n]},r.prototype.getModuleKeys=function(){var n=this.q;return i.keys(n)},r.prototype.evaluate=function(n){var t=n.length,e=n.slice(0,t-1),r=n[t-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.q={}},n.exports={create:function(){return new r}}},1146:function(n,t,e){var i=e(3232);function r(n,t,e){this.H=n,this.Y=t,this.K=0,this.$=!1,this.W={},i.extend(this,e),this.X={},this.initialize&&this.initialize()}r.prototype.J=function(n,t){var e=this.W[n];e&&"function"==typeof e&&e.call(this,t,n)},r.prototype.Z=function(){return i.cloneDeep(this.X)},r.prototype.on=function(n,t){this.W[n]=i.bind(t,this)},r.prototype.observe=function(n){return this.Y.nn(this.H,n)},r.prototype.emitChange=function(){this.$=!0,this.K++},r.prototype.hasChanges=function(){return this.$},r.prototype.resetChange=function(){this.$=!1},r.prototype.getStateId=function(){return this.K},r.prototype.tn=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},n.exports=r},8060:function(n,t,e){var i=e(3232),r=e(1146);function o(n){n=n||{},this.en={},this.rn={},this.an=0,this.un=[],this.sn=[]}function a(n,t){return function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}o.prototype.registerStores=function(n){i.forOwn(n,i.bind((function(n,t){this.en[t]=new r(t,this,n)}),this))},o.prototype.getStore=function(n){return this.en[n]},o.prototype.dispatch=function(n,t){this.dispatchId++,i.each(this.un,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.en,(function(e){e.J(n,t)})),i.each(this.sn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.en,i.bind((function(n,t){n.hasChanges()&&this.rn[t]&&(n.resetChange(),i.each(this.rn[t],(function(t){t(n)})))}),this))},o.prototype.reset=function(){this.rn={},i.forOwn(this.en,(function(n,t){n.tn()}))},o.prototype.getState=function(){var n={};return i.forOwn(this.en,(function(t,e){n[e]=t.Z()})),n},o.prototype.onPreAction=function(n){var t=this.un;return t.push(n),a(t,n)},o.prototype.onPostAction=function(n){var t=this.sn;return t.push(n),a(t,n)},o.prototype.nn=function(n,t){return this.rn[n]||(this.rn[n]=[]),this.rn[n].push(t),a(this.rn[n],t)},n.exports={create:function(n){return new o(n)}}},6898:function(n,t,e){var i=e(3232);function r(n){var t,e,r=[Array.prototype],o=[];i.each(r,(function(n){i.isUndefined(n.toJSON)||(o.push(n.toJSON),delete n.toJSON)}));try{t=n()}catch(a){e=a}finally{i.each(o,(function(n,t){r[t].toJSON=n}))}if(e)throw e;return t}t.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse},894:function(n,t,e){var i=e(3232);t.hasMatch=function(n,t,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(n)&&null!==n;switch(t||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===n;case"substring":return r&&String(e).indexOf(n)>-1;case"regex":try{return!(!o||!r)&&new RegExp(n).test(String(e))}catch(f){}return!1;case"range":var a=n.split(":"),u=parseFloat(a[0]),s=parseFloat(a[1]),c=parseFloat(e);return c>=u&&c<=s;default:return!1}}},4702:function(n,t,e){n.exports=e(9755)},4015:function(n,t,e){var i=e(3232),r=e(3308);function o(n,t){this.cn=n,this.fn=t}o.prototype.ln=function(n){return[this.fn,n].join("$$")},o.prototype.dn=function(n){return n.replace(this.fn+"$$","")},o.prototype.setItem=function(n,t){try{this.cn.setItem(this.ln(n),t)}catch(e){r.warn("Failed to save",n,"to localStorage:",e)}},o.prototype.removeItem=function(n){this.cn.removeItem(this.ln(n))},o.prototype.getItem=function(n){var t=null;try{t=this.cn.getItem(this.ln(n))}catch(e){}return t},o.prototype.keys=function(){var n=i.keys(this.cn);return i.map(i.filter(n,i.bind((function(n){return i.includes(n,this.fn)}),this)),i.bind(this.dn,this))},o.prototype.allKeys=function(){return i.keys(this.cn)},o.prototype.allValues=function(){return i.values(this.cn)},n.exports={create:function(n,t){return new o(n,t)},mockStorage:{keys:function(){},getItem:function(n){},removeItem:function(n){},setItem:function(n,t){}}}},8818:function(n,t,e){var i=e(1596),r=e(5562),o=e(1016);t.createDOMChangedObserver=function(){var n=i.getDocumentElement(),t={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(t,!0)}));o.observe(e,n,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},8492:function(n,t,e){var i=e(3232),r=e(1826),o=e(2425),a=e(6898),u=e(7075).mM,s=e(3308),c=e(4755),f=e(9350).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var n=f.getEventsString();u.setItem(l,n)}catch(t){s.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},t.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(n){return null}},t.retryPendingEvents=function(n){i.forOwn(n,(function(n,t){c.retryableRequest(n.data,t,n.retryCount)})),i.isEmpty(n)||s.log("Retried pending events: ",n)}},2498:function(n,t,e){var i=e(3232),r=e(9653),o=e(9350),a=e(2425),u=e(5562),s=e(9358);t.registerApiModule=function(n,t){i.isArray(t)&&(t=o.evaluate(t)),s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:n,plugin:t})},t.registerDependency=function(n,t){o.get(n)||o.register(n,t)},t.registerVisitorProfileProvider=function(n){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:n.provides,plugin:n})},t.registerViewProvider=function(n){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:n.provides,plugin:n})},t.registerAudienceMatcher=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:n,plugin:t})},t.registerViewMatcher=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:n,plugin:t})},t.registerAnalyticsTracker=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:n,plugin:t})},t.registerViewTagLocator=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:n,plugin:t})},t.registerAudiencePlugin=function(n){n.dependencies&&i.each(n.dependencies,(function(n,e){t.registerDependency(e,n)}));var e,r,a="vendor."+n.vendor;e=i.isString(n.provider)?o.get(n.provider)(n.vendor):i.isFunction(n.provider)?n.provider(n.vendor):i.cloneDeep(n.provider),t.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(n.matcher)?o.get(n.matcher):n.matcher;var u={fieldsNeeded:[a],match:function(n,t){return r(n[a],t)}};t.registerAudienceMatcher(a,u)},t.registerWidget=function(n){return i.isArray(n)&&(n=o.evaluate(n)),{showToken:u.on({filter:{type:"showWidget",name:n.widgetId},handler:n.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:n.widgetId},handler:n.hideFn})}},t.registerChangeApplier=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:n,plugin:t})},t.registerDecider=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:n,plugin:t})},t.registerEventImplementation=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:n,plugin:t})},t.registerViewTrigger=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:n,plugin:t})}},6349:function(n,t,e){var i=e(3232),r=e(9350),o=":",a="holdback",u="treatment",s="",c=e(3308),f=e(5293);function l(n){return n.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}t.formatNamesAndIdsForAnalytics=function(n,t,e,o){var a={layer:n.name||s,experiment:t.name||s,variation:e.name||s};o&&(a=i.mapValues(a,l));var u,c=!n.integrationStringVersion||1===n.integrationStringVersion;if(a.experiment===s&&c)if(u=t.audienceIds,!i.isEmpty(u)&&i.includes(["and","or","not"],u[0]))a.experiment="Exp";else{var f=r.get("stores/audience_data");a.experiment=function(n,t){return i.isEmpty(t)?"everyone_else":i.reduce(t,(function(t,e){var i=n.get(e);return i?t+l(i.name?i.name:i.id)+",":t}),"").slice(0,-1)}(f,t.audienceIds)}return{names:a,idStrings:{layer:"("+l(n.id)+")",experiment:"("+l(t.id)+")",variation:"("+l(e.id)+")"}}},t.combineAndTruncateIdAndName=function(n,t,e){var i=e-t.length;if(i<0&&(c.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),n=s),n===s)return t;if(n.length>i){var r=Math.min(n.length,i);return(n=n.substring(0,r))+t}return n+" "+t},t.generateAnalyticsString=function(n,e,r,s,c,l){return n.integrationStringVersion&&2===n.integrationStringVersion?function(n,e,r,u,s,c){if(f.isSingleExperimentPolicy(n.policy)&&u)return;var l=!f.isSingleExperimentPolicy(n.policy)&&u,d=t.formatNamesAndIdsForAnalytics(n,e,r,c),h=[d.names.experiment,d.names.variation],v=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(n.policy)||(h.unshift(d.names.layer),v.unshift(d.idStrings.layer));var p=i.reduce(v,(function(n,t){return n+t.length}),0),g=h.length-1+(l?1:0),m=p+g*o.length;if(l&&(m+=a.length),m>s)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=s-m,w=h.length,y=[],E=h.length-1;E>=0;E--){var b=h[E],I=Math.min(b.length,Math.floor(_/w));_-=I,w--,y.unshift(b.substring(0,I))}var A=i.map(y,(function(n,t){return n+v[t]}));return l&&A.push(a),A.join(o)}(n,e,r,s,c,l):function(n,e,r,s,c,l){var d=s?a:u,h=3*o.length,v=t.formatNamesAndIdsForAnalytics(n,e,r,l),p=v.names,g=v.idStrings,m=i.reduce(g,(function(n,t){return n+t.length}),0);if(m+h+d.length>c)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=c-m-h-d.length,w={};w.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=w.variation,w.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=w.experiment,w.layer=_;var y={};i.each(p,(function(n,t){y[t]=n.substring(0,w[t])}));var E=[];return f.isSingleExperimentPolicy(n.policy)||E.push(y.layer+g.layer),(E=E.concat([y.experiment+g.experiment,y.variation+g.variation,d])).join(o)}(n,e,r,s,c,l)}},2554:function(n,t,e){var i=e(3232);n.exports=function(n,t){n=function(n){var t=n.split("?");if(t[1]){var e=t[1].split("#"),r=e[0],a=e[1],u=r.split("&"),s=[];return i.each(u,(function(n){0!==n.indexOf(o)&&s.push(n)})),t[1]="",s.length>0&&(t[1]="?"+s.join("&")),a&&(t[1]+="#"+a),t.join("")}return n}(n);var e=t.value;switch(t.match){case"exact":return(n=s(n))===s(e);case"regex":try{return Boolean(n.match(e))}catch(r){}return!1;case"simple":return(n=u(n))===(e=u(e));case"substring":return n=s(n,!0),e=s(e,!0),-1!==n.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(n){return s(function(n){var t=n.indexOf("?");return-1!==t&&(n=n.substring(0,t)),-1!==(t=n.indexOf("#"))&&(n=n.substring(0,t)),n}(n))}function s(n,t){n=(n=n.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);t||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],s=new RegExp("^"+u);n=n.replace(s,"")}return n}},5168:function(n,t,e){var i=e(3232),r=e(5210).getFieldValue,o=e(894);n.exports=function(n,t){var e=r(n,t.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,t.value,t.match)):o.hasMatch(t.value,t.match,e)}},3264:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739),a=e(3308);n.exports={initialize:function(){this.X={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.hn),this.on(r.ACTION_EXECUTED,this.vn),this.on(r.SET_CHANGE_APPLIER,this.pn),this.on(r.REMOVE_ACTION_STATE,this.gn)},hn:function(n){var t=this;i.isEmpty(n.data.layers)||(i.each(n.data.layers,(function(n){var e;if(n.changes){var r="layerId:"+n.id;e={id:r,layerId:n.id,changeSet:n.changes,type:"layer"},o.deepFreeze(e),t.X.actions[r]=e}i.each(n.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:n.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),t.X.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,s=r.id+":"+a.id+":"+u;e={id:s,layerId:n.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),t.X.actions[s]=e}))}))}))})),this.emitChange())},vn:function(n){var t=n.actionId;i.isUndefined(t)||this.X.actionState[t]||(this.X.actionState[t]={})},pn:function(n){var t=n.actionId,e=n.changeId;this.X.actionState[t]?this.X.actionState[t][e]=n.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},gn:function(n){delete this.X.actionState[n.actionId]},get:function(n){return o.safeReference(this.X.actions[n])},getActionState:function(n){return o.safeReference(this.X.actionState[n])},getByChangeId:function(n){return i.find(this.X.actions,{changeSet:[{id:n}]})},getAllActionIdsByPageId:function(n){return i.map(i.filter(this.X.actions,{pageId:n}),"id")},getChangeApplier:function(n,t){var e=this.X.actionState[t];if(e)return e[n]},getExperimentVariationActions:function(n,t){return o.safeReference(i.filter(this.X.actions,{experimentId:n,variationId:t}))},getLayerActions:function(n){return o.safeReference(i.filter(this.X.actions,{id:"layerId:"+n}))},getExperimentActions:function(n){return o.safeReference(i.filter(this.X.actions,{id:"experimentId:"+n}))},getAll:function(){return o.safeReference(i.values(this.X.actions))}}},7402:function(n,t,e){var i=e(9653);n.exports={initialize:function(){this.X={},this.on(i.REGISTER_ASYNC_DEFERRED,this.mn),this.on(i.RESOLVE_DEFERRED,this._n),this.on(i.REJECT_DEFERRED,this.wn)},getRequest:function(n){return this.X[n]},getPromise:function(n){var t=this.getRequest(n);if(t)return t.promise},mn:function(n){this.X[n.source]={promise:n.promise,resolver:n.resolver,rejecter:n.rejecter}},_n:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);t.resolver(n.resolveWith)},wn:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+n.source);t.rejecter(n.rejectWith)}}},1139:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);function a(n,t){return t||(t={}),n?(i.each(n,(function(n){if(!i.isString(n)){if(i.isObject(n)){var e=n.type,r=n.name||"_";t[e]||(t[e]={}),t[e][r]=!0}i.isArray(n)&&a(n,t)}})),t):t}n.exports={initialize:function(){this.X={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.audiences)||(i.each(n.data.audiences,i.bind((function(n){o.deepFreeze(n),i.merge(this.X.featuresNeeded,a(n.conditions)),this.X.audiences[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X.audiences))},getFeaturesNeeded:function(n){return o.safeReference(this.X.featuresNeeded[n]||{})},getAudiencesMap:function(){return o.safeReference(this.X.audiences)},get:function(n){return o.safeReference(this.X.audiences[n])},getAudienceName:function(n){return i.find(i.values(this.X.audiences),{id:n}).name||"Aud "+n}}},4410:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);n.exports={initialize:function(){this.X={},this.on(r.ADD_CHANGE,this.yn),this.on(r.DATA_LOADED,this.hn)},getChange:function(n){return this.X[n]},hn:function(n){i.isEmpty(n.data.changes)||i.each(n.data.changes,i.bind(this.yn,this))},yn:function(n){o.deepFreeze(n),this.X[n.id]=n,this.emitChange()}}},9247:function(n,t,e){var i=e(3232),r=e(9653),o=e(2425);n.exports={initialize:function(){this.X={},i.each(o.Lifecycle,i.bind((function(n){this.X[n]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.En),this.on(r.CLEAR_CLEANUP_FN,this.bn)},getCleanupFns:function(n){return i.cloneDeep(this.X[n])},En:function(n){this.X[n.lifecycle].push(n.cleanupFn),this.emitChange()},bn:function(n){var t=this.X[n.lifecycle];if(n.cleanupFn){var e=t.indexOf(n.cleanupFn);e>-1&&(t.splice(e,1),this.emitChange())}else this.X[n.lifecycle]=[],this.emitChange()}}},4599:function(n,t,e){var i=e(9653),r=e(8127);n.exports={initialize:function(){this.X={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.In),this.on(i.SET_CLIENT_VERSION,this.An)},getClientName:function(){return this.X.name},getClientVersion:function(){return this.X.version},In:function(n){n&&(this.X.name=n),this.emitChange()},An:function(n){n&&(this.X.version=n),this.emitChange()}}},7283:function(n,t,e){var i=e(9653);n.exports={initialize:function(){this.X={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Tn),this.on(i.SET_COOKIE_AGE,this.Sn),this.on(i.SET_COOKIE_AUTO_REFRESH,this.Rn)},getCurrentDomain:function(){return this.X.currentDomain},getDefaultAgeInSeconds:function(){return this.X.defaultAgeSeconds},getAutoRefresh:function(){return this.X.autoRefresh},Tn:function(n){this.X.currentDomain=n,this.emitChange()},Sn:function(n){this.X.defaultAgeSeconds=n,this.emitChange()},Rn:function(n){this.X.autoRefresh=n,this.emitChange()}}},5:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.dimensions)||(i.each(n.data.dimensions,i.bind((function(n){o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getById:function(n){return o.safeReference(this.X[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.X),{apiName:n}))}}},4911:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.kn)},getAll:function(){return i.cloneDeep(this.X)},conflictInObservingChanges:function(){return!this.X.mutationObserverAPISupported},isDisabled:function(){return this.X.disabled},isEditor:function(){return this.X.isEditor},clientHasAlreadyInitialized:function(){return this.X.alreadyInitialized},getForceAudienceIds:function(){return this.X.forceAudienceIds},getForceVariationIds:function(){return this.X.forceVariationIds},getPreviewLayerIds:function(){return this.X.previewLayerIds},getProjectToken:function(){return this.X.projectToken},getForceTracking:function(){return this.X.forceTracking},shouldActivate:function(){return!this.X.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.X.isPreview},shouldBootstrapDataForEditor:function(){return this.X.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.X.isPreview||this.X.isLegacyPreview||!this.getProjectToken()||this.X.isEditor)},shouldBailForDesktopApp:function(){return!this.X.isEditor&&this.X.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.X.isSlave&&!this.X.isEditor&&this.X.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.X.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.X.shouldOptOut},shouldSendTrackingData:function(){return!this.X.trackingDisabled&&(!!this.X.forceTracking||!this.X.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.X.isSlave},isRunningInDesktopApp:function(){return this.X.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.X.isRunningInV2Editor},kn:function(n){i.extend(this.X,n),this.emitChange()}}},6391:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn)},getAll:function(){return o.safeReference(i.values(this.X))},getEventsMap:function(){return o.safeReference(this.X)},get:function(n){return o.safeReference(this.X[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.X),{apiName:n}))},getByPageId:function(n){return o.safeReference(i.filter(this.X,{pageId:n}))},hn:function(n){i.isEmpty(n.data.events)||(i.each(n.data.events,i.bind((function(n){n.pageId||(n.pageId=n.viewId),o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())}}},4021:function(n,t,e){var i=e(3232),r=e(9653);function o(n){var t=[];return n&&i.isObject(n)?(n.type&&t.push(n.type),t.push("|"),n.type&&n.name&&t.push(n.name),t.join("")):"|"}n.exports={initialize:function(){this.X={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Nn),this.on(r.REMOVE_EMITTER_HANDLER,this.Dn)},getHandlers:function(n,t){var e=[null,{type:n.type},{type:n.type,name:n.name}],r=[];return i.each(e,i.bind((function(n){var t=o(n),e=this.X.handlers[t];e&&(r=r.concat(e))}),this)),t&&(r=i.filter(r,(function(n){return!n.publicOnly}))),r},Nn:function(n){var t=o(n.filter);this.X.handlers[t]||(this.X.handlers[t]=[]),this.X.handlers[t].push({handler:n.handler,token:n.token,publicOnly:!!n.publicOnly,emitErrors:!!n.emitErrors}),this.emitChange()},Dn:function(n){var t=!1,e=n.token;i.forOwn(this.X.handlers,i.bind((function(n,r){var o=i.filter(n,(function(n){return n.token!==e}));o.length!==n.length&&(t=!0,this.X.handlers[r]=o)}),this)),t&&this.emitChange()}}},6033:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);n.exports={initialize:function(){this.X={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.Cn),this.on(r.ACTIVATE,this.On),this.on(r.RECORD_GLOBAL_DECISION,this.xn),this.on(r.SET_DOMCONTENTLOADED,this.Pn)},getRevision:function(){return this.X.revision},getGlobalHoldbackThreshold:function(){return this.X.holdback},getProjectId:function(){return this.X.projectId},getSnippetId:function(){return this.X.snippetId},getAccountId:function(){return this.X.accountId},getNamespace:function(){return this.X.namespace},getActivationId:function(){return this.X.activationId},getActivationTimestamp:function(){return this.X.activationTimestamp},getAnonymizeIP:function(){return this.X.anonymizeIP},isGlobalHoldback:function(){return!!this.X.isGlobalHoldback},getListTargetingKeys:function(){return this.X.listTargetingKeys.slice()},getDCPServiceId:function(){return this.X.dcpServiceId},getDCPKeyfieldLocators:function(){return this.X.dcpKeyfieldLocators},getRecommenderServices:function(){return this.X.recommenderServices},getProjectJS:function(){return this.X.projectJS},getPlugins:function(){return this.X.plugins},getExperimental:function(){return o.safeReference(this.X.experimental)},domContentLoadedHasFired:function(){return this.X.domContentLoaded},On:function(n){this.X.activationId=n.activationId,this.X.activationTimestamp=n.activationTimestamp,this.X.isGlobalHoldback=null},xn:function(n){var t=n.isGlobalHoldback;if(null!==this.X.isGlobalHoldback&&this.X.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.X.isGlobalHoldback=t,this.emitChange()},Cn:function(n){var t=i.pick(n.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){i.extend(this.X,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},t),this.emitChange()}},Pn:function(){this.X.domContentLoaded=!0,this.emitChange()}}},1647:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.groups)||(i.each(n.data.groups,i.bind((function(n){o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getGroupsMap:function(){return o.safeReference(this.X)},get:function(n){return o.safeReference(this.X[n])}}},8858:function(n,t,e){var i=e(3232),r=e(9653),o=e(7082);n.exports={initialize:function(){this.X={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Mn),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.Ln)},getOriginalPushState:function(){return this.X.originalPushState},getOriginalReplaceState:function(){return this.X.originalReplaceState},Mn:function(){this.X.originalPushState||(this.X.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},Ln:function(){this.X.originalReplaceState||(this.X.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},9627:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.hn),this.on(r.SET_INTEGRATION_SETTINGS,this.Vn)},hn:function(n){i.isEmpty(n.data.integrationSettings)||(i.each(n.data.integrationSettings,i.bind((function(n){this.X[n.id]=n}),this)),this.emitChange())},Vn:function(n){var t=this.X[n.id];t?i.extend(t,n):this.X[n.id]=n},getAll:function(){return i.cloneDeep(i.values(this.X))},get:function(n){return i.cloneDeep(this.X[n])},getReference:function(n){return this.X[n]}}},8347:function(n,t,e){var i=e(3232),r=e(9653),o=e(3308),a="*";n.exports={initialize:function(){this.X={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Fn),this.on(r.RECORD_LAYER_DECISION,this.Un),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.zn)},getLayerState:function(n,t){if(this.X[n]){var e=this.X[n];if(i.keys(e).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(e,{pageId:t})):i.cloneDeep(e["*"])}},getLayerStates:function(n){var t=[];for(var e in this.X)i.forEach(this.X[e],(function(e){(i.isUndefined(n)||e.namespace===n)&&t.push(i.cloneDeep(e))}));return t},getLayerStatesForAnalytics:function(){var n=[];for(var t in this.X)i.forEach(this.X[t],(function(t){n.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return n},Fn:function(n){n.merge||(this.X={}),i.each(n.layerStates,i.bind((function(n){var t=n.layerId;n.pageId||(n.pageId=n.viewId);var e=n.pageId||a,r=this.X[t];if(i.isUndefined(r))this.X[t]={},this.X[t][e]=n;else{var o=r[e];(!o||n.decisionTimestamp>(o.decisionTimestamp||0))&&(this.X[t][e]=n)}}),this)),this.emitChange()},Un:function(n){var t={layerId:n.layerId,revision:n.revision,namespace:n.namespace,pageId:n.pageId,decisionTicket:n.decisionTicket,decision:n.decision,decisionActivationId:n.activationId,decisionTimestamp:n.timestamp,decisionEventId:null},e=this.X[n.layerId]||{};n.pageId?(delete e["*"],e[n.pageId]=t):(e={})["*"]=t,this.X[n.layerId]=e,this.emitChange()},zn:function(n){var t=n.layerId,e=n.pageId||a;this.X[t]?this.X[t][e]?(this.X[t][e].decisionEventId=n.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",t)}}},3831:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739),a=e(5293);n.exports={initialize:function(){this.X={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.hn)},hn:function(n){if(!i.isEmpty(n.data.layers)){var t=this;i.each(n.data.layers,(function(n){i.each(n.experiments,(function(e){n.pageIds||(n.pageIds=n.viewIds),e.campaignName||a.isSingleExperimentPolicy(n.policy)?a.isSingleExperimentPolicy(n.policy)&&n.groupId&&(e.groupId=n.groupId):e.campaignName=n.name,i.each(e.variations,(function(n){i.each(n.actions,(function(n){n.pageId||(n.pageId=n.viewId)})),t.X.variations[n.id]=n})),t.X.experiments[e.id]=e})),o.deepFreeze(n),t.X.layers[n.id]=n})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.X.layers))},getCampaignsMap:function(){return o.safeReference(this.X.layers)},getExperimentsMap:function(){return o.safeReference(this.X.experiments)},getVariationsMap:function(){return o.safeReference(this.X.variations)},getCount:function(){return i.keys(this.X.layers).length},getAllByPageIds:function(n){return o.safeReference(i.filter(this.X.layers,(function(t){return i.some(n,i.partial(i.includes,t.pageIds))})))},get:function(n){return o.safeReference(this.X.layers[n])},getLayerByExperimentId:function(n){var t=i.find(this.X.layers,(function(t){return i.find(t.experiments,{id:n})}));return o.safeReference(t)},getExperimentByVariationId:function(n){var t;return i.some(this.X.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:n})&&(t=e),t})),t})),o.safeReference(t)}}},1066:function(n,t,e){var i=e(9653);n.exports={initialize:function(){this.X={logs:[]},this.on(i.LOG,this.Bn)},getLogs:function(){return this.X.logs},Bn:function(n){this.X.logs.push(n),this.emitChange()},Z:function(){return this.X.logs.slice()}}},8592:function(n,t,e){var i=e(9653),r=e(9739);n.exports={initialize:function(){this.X={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Gn),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.jn)},get:function(){return r.safeReference(this.X.data)},hasTracked:function(){return this.X.hasTracked},Gn:function(n){r.deepFreeze(n),this.X.data=n,this.X.hasTracked=!1,this.emitChange()},jn:function(){this.X.hasTracked=!0}}},2492:function(n,t,e){var i=e(3232),r=e(9653),o=e(6898);n.exports={initialize:function(){this.X={},this.on(r.SET_PENDING_EVENT,this.qn),this.on(r.REMOVE_PENDING_EVENT,this.Hn),this.on(r.LOAD_PENDING_EVENTS,this.Yn)},getEvents:function(){return this.X},getEventsString:function(){return o.stringify(this.X)},qn:function(n){i.keys(this.X).length>=1e3&&this.Kn();var t=n.id,e=n.retryCount;this.X[t]&&this.X[t].retryCount===e||(this.X[t]={id:t,timeStamp:n.timeStamp,data:n.data,retryCount:e},this.emitChange())},Hn:function(n){delete this.X[n.id],this.emitChange()},Yn:function(n){this.X=n.events,this.Kn(),this.emitChange()},Kn:function(){for(var n=i.sortBy(this.X,"timeStamp"),t=0;t<=n.length-1e3;t++)delete this.X[n[t].id];this.emitChange()}}},493:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Gn)},isExpectingRedirect:function(){return i.isString(this.X.layerId)},getLayerId:function(){return this.X.layerId},Gn:function(n){this.isExpectingRedirect()||(this.X.layerId=n.layerId,this.emitChange())}}},703:function(n,t,e){var i=e(3232),r=e(9653),o=e(2425);n.exports={initialize:function(){this.X={},this.X[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.$n)},$n:function(n){i.isUndefined(this.X[o.PerformanceData.performance_marks][n.name])&&(this.X[o.PerformanceData.performance_marks][n.name]=[]),this.X[o.PerformanceData.performance_marks][n.name].push(n.data),this.emitChange()},getMarks:function(){return i.mapValues(this.X[o.PerformanceData.performance_marks],(function(n){return i.map(n,(function(n){return[n.startTime,n.duration]}))}))},getDurationsFor:function(n){return i.reduce(n,i.bind((function(n,t){var e=this.X[o.PerformanceData.performance_marks][t];return e&&(n[t]=Math.round(i.reduce(e,(function(n,t){return n+t.duration}),0))),n}),this),{})}}},1043:function(n,t,e){var i=e(3232),r=e(9653),o=e(2425),a=e(3308);n.exports={initialize:function(){this.X=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Wn)},Wn:function(n){var t=n.type,e=n.name,i=n.plugin;if(!t||!e)throw new Error("Missing information needed to register plugins: "+t+":"+e);if(!this.X[t])throw new Error("Invalid plugin type specified: "+t);this.X[t][e]=i,a.debug("Plugin Store: Registering Plugin :",n)},getAllPlugins:function(n){if(!n)return this.X;if(this.X[n])return this.X[n];throw new Error("Invalid plugin type: "+n)},getPlugin:function(n,t){if(!t||!n)throw new Error("Missing plugin parameters");return this.getAllPlugins(n)[t]||null}}},6858:function(n,t,e){var i=e(3232),r=e(9653),o=e(5210);n.exports={initialize:function(){this.X={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.Xn)},getPendingAttributeValue:function(n){return n=i.isArray(n)?n.concat("pending"):[n,"pending"],o.getFieldValue(this.X,n)},Xn:function(n){o.setFieldValue(this.X,n.key,{pending:n.pending}),this.emitChange()}}},2981:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Jn),this.on(r.RECORD_API_USAGE,this.Qn),this.on(r.INITIALIZE_CHANGE_METRICS,this.Zn),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.nt),this.on(r.RECORD_AUDIENCE_USAGE,this.tt),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.et),this.on(r.RECORD_CHANGE_OVERHEATED,this.it),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.rt),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ot),this.on(r.RECORD_INTEGRATION_USAGE,this.ut),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.st),this.on(r.RECORD_LAYER_POLICY_USAGE,this.ct),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.ft),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.dt),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.ht),this.on(r.RECORD_VISITOR_ID_ERROR,this.vt),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this._t)},Jn:function(n){i.merge(this.X,n),this.emitChange()},Qn:function(n){this.X.apis[n.methodName]||(this.X.apis[n.methodName]=0),this.X.apis[n.methodName]++,this.emitChange()},Zn:function(){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0)},et:function(n){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),n.changeMacrotaskRate>this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=n.changeMacrotaskRate),this.emitChange()},it:function(){i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0),this.X.data.extras.numOverheatedChanges++,this.emitChange()},ot:function(n){this.X.DOMObservation[n.counterName]||(this.X.DOMObservation[n.counterName]=0),this.X.DOMObservation[n.counterName]++,this.emitChange()},wt:function(n,t,e){i.isUndefined(this.X.featuresNeeded[n])&&(this.X.featuresNeeded[n]={});var r=this.X.featuresNeeded[n];i.each(t,(function(n){r[n]||(r[n]={}),r[n][e]||(r[n][e]=!0)}))},ut:function(n){this.wt("integrations",n.integrations,n.layerId)},rt:function(n){this.wt("changeTypes",n.changeTypes,n.layerId)},nt:function(n){this.wt("activationTypes",[n.activationType],n.entityId),this.emitChange()},ft:function(n){this.wt("viewFeatures",n.featuresUsed,n.entityId),this.emitChange()},st:function(n){this.wt("layerFeatures",[n.feature],n.entityId),this.emitChange()},ct:function(n){this.wt("policy",[n.policy],n.layerId),this.emitChange()},tt:function(n){this.wt("audiences",n.audienceTypes,n.layerId),this.emitChange()},dt:function(n){this.X.data.extras.viewsInitiallyActivatedCount=n.viewsInitiallyActivatedCount,this.emitChange()},ht:function(n){this.wt("visitorIdLocatorType",[n.visitorIdLocatorType],n.entityId),this.emitChange()},vt:function(n){this.X.data.extras.errorCustomVisitorId=n.isError,this.emitChange()},_t:function(n){this.wt("stickyBucketing",[n.feature],n.id)},getSampleRum:function(){return this.X.inRumSample},getRumId:function(){return this.X.id},getRumHost:function(){return this.X.RumHost},getApiData:function(){return this.X.apis},getDOMObservationData:function(){return this.X.DOMObservation},getRumData:function(){return i.cloneDeep(this.X.data)},getScriptSrc:function(){return this.X.src},getFeaturesNeededData:function(){var n=this.X.featuresNeeded,t={};return i.forOwn(n,(function(n,e){var r=i.keys(n);i.isEmpty(r)||(t[e]={}),i.forEach(r,(function(r){t[e][r]=i.keys(n[r]).length}))})),t}}},2709:function(n,t,e){var i=e(9653);n.exports={initialize:function(){this.X={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.yt)},yt:function(n){if(!n.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.X.natives=n.sandboxedFunctions,this.X.initialized=!0,this.emitChange()},getAll:function(){return this.X.natives},get:function(n){if(!n)throw new Error("Missing name parameter");return this.X.natives[n]||null},isInitialized:function(){return this.X.initialized}}},5053:function(n,t,e){var i=e(3232),r=e(9653),o=e(1217),a=e(5662);n.exports={initialize:function(){this.X={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Et),this.on(r.LOAD_SESSION_STATE,this.bt)},getState:function(){return i.cloneDeep(this.X)},getSessionId:function(){return this.X.sessionId},bt:function(n){this.X.sessionId=n.sessionId,this.X.lastSessionTimestamp=n.lastSessionTimestamp,this.emitChange()},Et:function(){var n=o.now(),t=this.X.lastSessionTimestamp;(!this.X.sessionId||n-t>18e5)&&(this.X.sessionId=a.generate()),this.X.lastSessionTimestamp=n,this.emitChange()}}},1755:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.It(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.At),this.on(r.REGISTER_PREVIOUS_BATCH,this.Tt),this.on(r.REGISTER_TRACKER_VISITOR,this.St),this.on(r.REGISTER_TRACKER_EVENT,this.Rt),this.on(r.REGISTER_TRACKER_DECISION,this.kt),this.on(r.RESET_TRACKER_EVENTS,this.Nt),this.on(r.RESET_TRACKER_STORE,this.It),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Dt),this.on(r.SET_TRACKER_POLLING,this.Ct),this.on(r.SET_TRACKER_BATCHING,this.Ot),this.on(r.SET_TRACKER_SEND_EVENTS,this.xt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Pt),this.on(r.SET_TRACKER_DIRTY,this.Mt),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Lt)},getPersistableState:function(){return this.X.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.X.data,decisions:this.X.decisions,decisionEvents:this.X.decisionEvents,previousBatches:this.X.previousBatches}:{}:null},Pt:function(n){i.isEmpty(this.X.data)||i.isEmpty(n.data)||(this.At(),this.X.previousBatches.push(this.getEventBatch())),this.X.data=n.data||{},this.X.decisions=n.decisions||[],this.X.decisionEvents=n.decisionEvents||[],i.isEmpty(this.X.previousBatches)||i.isEmpty(n.previousBatches)?this.X.previousBatches=n.previousBatches||[]:this.X.previousBatches=this.X.previousBatches.concat(n.previousBatches),this.emitChange()},Mt:function(n){this.X.isDirty=n,this.emitChange()},Rt:function(n){var t=this.Vt();(i.isEmpty(t.snapshots)||!i.isEmpty(this.X.decisionEvents))&&this.Ft(),this.Ut().events.push(n.event),this.X.decisions=n.decisions,this.Mt(!0)},kt:function(n){this.X.decisionEvents.push(n.decisionEvent),this.X.decisions=n.decisions,this.Mt(!0)},St:function(n){i.isEmpty(this.X.data)?this.X.data=n.data:this.At(),this.X.data.visitors.push(n.visitor),this.X.decisions=n.decisions,this.X.decisionEvents=[],this.Mt(!0)},Tt:function(n){this.X.previousBatches.push(n),this.Mt(!0)},It:function(){this.X={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Nt:function(){var n=this.Vt();this.X.data.visitors=[n],n.snapshots=[],this.Mt(!0)},Dt:function(){this.X.previousBatches=[],this.Mt(!0)},Ct:function(n){this.X.polling=n,this.emitChange()},Ot:function(n){this.X.shouldBatch=n,this.emitChange()},xt:function(n){this.X.canSend=n,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.X.data)},getPreviousBatches:function(){return i.cloneDeep(this.X.previousBatches)},zt:function(){return this.X.decisionEvents.slice()},Bt:function(){this.X.decisionEvents=[]},Gt:function(){return this.X.decisions.slice()},isPolling:function(){return this.X.polling},shouldBatch:function(){return this.X.shouldBatch},Ut:function(){return i.last(this.Vt().snapshots)},Vt:function(){return i.last(this.X.data.visitors)},Ft:function(){var n=this.zt();this.Vt().snapshots.push({decisions:this.Gt(),events:n}),this.Bt(),this.Mt(!0)},At:function(){this.X.decisionEvents.length>0&&this.Ft()},hasEventsToSend:function(){if(!i.isEmpty(this.X.decisionEvents))return!0;if(!i.isEmpty(this.X.data)&&i.some(this.X.data.visitors||[],(function(n){return n.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.X.previousBatches)},canSend:function(){return this.X.canSend},Lt:function(n){var t=this.Vt();t&&(t.attributes=n.attributes)}}},557:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={},this.on(r.SET_UA_DATA,this.hn)},hn:function(n){i.isEmpty(this.X)&&(this.X=n.data)},get:function(){return i.cloneDeep(this.X)}}},3523:function(n,t,e){var i=e(3232),r=e(9653),o=e(3308),a={globalTags:{},viewStates:{},shouldBatch:!1};n.exports={initialize:function(){this.X=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.jt),this.on(r.SET_VIEW_ACTIVE_STATE,this.qt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Ht),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Yt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Kt),this.on(r.SET_GLOBAL_TAGS,this.$t),this.on(r.RESET_VIEW_STATES,this.Wt),this.on(r.SET_VIEW_BATCHING,this.Ot)},getAll:function(){var n={};for(var t in this.X.viewStates)n[t]=this.getViewState(t);return n},shouldBatch:function(){return this.X.shouldBatch},getViewState:function(n){var t=i.cloneDeep(this.X.viewStates[n]),e=this.X.globalTags;return t.metadata=i.extend({},t.parsedMetadata,e,t.userSuppliedMetadata),t},getActiveViewTags:function(){var n=this.getActiveViewStates(),t=i.map(n,(function(n){return n.metadata})),e=[{}].concat(t);return i.extend.apply(i,e)},getActivationEventId:function(n){return this.X.viewStates[n]?this.X.viewStates[n].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.X.viewStates,i.bind((function(n,t,e){return this.isViewActive(e)&&n.push(this.getViewState(e)),n}),this),[])},isViewActive:function(n){var t=this.X.viewStates[n];return t||o.warn("No Page registered with id",n),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.X.globalTags)},Wt:function(){this.X.viewStates={},this.emitChange()},jt:function(n){i.each(n.views,i.bind((function(n){var t=n.id;this.X.viewStates[t]={id:t,isActive:i.isBoolean(n.isActive)?n.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},qt:function(n){var t=n.view.id;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);this.X.viewStates[t].isActive=n.isActive,n.isActive?this.X.viewStates[t].activatedTimestamp=n.timestamp:(this.X.viewStates[t].parsedMetadata={},this.X.viewStates[t].userSuppliedMetadata={}),this.emitChange()},Ht:function(n){var t=n.pageId;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.X.viewStates[t].parsedMetadata,n.metadata),this.emitChange()},Yt:function(n){var t=n.pageId;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.X.viewStates[t].userSuppliedMetadata,n.metadata),this.emitChange()},Kt:function(n){var t=n.pageId;this.X.viewStates[t]&&(this.X.viewStates[t].activationEventId=n.eventData.eventId,this.emitChange())},$t:function(n){i.extend(this.X.globalTags,n),this.emitChange()},Ot:function(n){this.X.shouldBatch=n,this.emitChange()}}},6107:function(n,t,e){var i=e(3232),r=e(9653),o=e(9739);n.exports={initialize:function(){this.X={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.hn)},getAll:function(){return o.safeReference(i.values(this.X.views))},getPagesMap:function(){return o.safeReference(this.X.views)},get:function(n){return o.safeReference(this.X.views[n])},getByApiName:function(n){return o.safeReference(this.X.apiNamesToViews[n])},apiNameToId:function(n){var t=this.X.apiNamesToViews[n];if(t)return t.id},idToApiName:function(n){var t=this.X.views[n];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.X.views).length},getAllViewsForActivationType:function(n){return i.filter(this.X.views,{activationType:n})},hn:function(n){i.isEmpty(n.data.views)||(i.each(n.data.views,i.bind((function(n){o.deepFreeze(n),this.X.views[n.id]=n,this.X.apiNamesToViews[n.apiName]=n}),this)),this.emitChange())}}},2975:function(n,t,e){var i=e(3232),r=e(9653),o=e(5210);n.exports={initialize:function(){this.X={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Xt),this.on(r.SET_VISITOR_ATTRIBUTES,this.Jt),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Qt)},getVisitorProfile:function(){return this.X.profile},getVisitorProfileMetadata:function(){return this.X.metadata},getAttribute:function(n){var t=this.X.profile;return i.cloneDeep(o.getFieldValue(t,n))},getAttributeMetadata:function(n){return i.cloneDeep(this.X.metadata[n])},getVisitorIdFromAPI:function(){return this.X.visitorId},Qt:function(n){this.X.profile=n.profile,this.X.metadata=n.metadata,this.emitChange()},Jt:function(n){i.each(n.attributes,i.bind((function(n){var t=n.key;o.setFieldValue(this.X.profile,t,n.value),n.metadata&&i.forOwn(n.metadata,i.bind((function(n,e){o.setFieldValue(this.X.metadata,t.concat(e),n)}),this))}),this)),this.emitChange()},Xt:function(n){this.X.visitorId=n,this.emitChange()}}},7947:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.Zt)},getCustomBehavioralAttributes:function(){return i.filter(this.X,(function(n){return!!n.rule_json}))},getVisitorAttribute:function(n){var t=i.values(this.X);if(n.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(n.datasourceId)})),n.attributeName&&n.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(n.attributeId){var e=this.X[n.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+n.attributeId);return e}if(n.attributeName){var r=i.filter(t,{name:n.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+n.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+n.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},Zt:function(n){i.isEmpty(n.data.visitorAttributes)||(i.each(n.data.visitorAttributes,i.bind((function(n){this.X[n.id]=n}),this)),this.emitChange())}}},6018:function(n,t,e){var i=e(3232),r=e(9653),o=e(6898);n.exports={initialize:function(){this.X={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ne),this.on(r.MERGE_VARIATION_ID_MAP,this.te),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.ee),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.re)},getVariationIdMap:function(){return i.cloneDeep(this.X.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.X.variationIdMap)},ne:function(n){var t=this.X.variationIdMap[n.layerId]||{};t[n.experimentId]!==n.variationId&&(t[n.experimentId]=n.variationId,this.X.variationIdMap[n.layerId]=t,this.emitChange())},te:function(n){var t=this.getVariationIdMap(),e=n.variationIdMap;i.each(t||{},(function(n,t){e[t]?i.assign(e[t],n):e[t]=n})),this.X.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.X.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.X.preferredLayerMap)},getPreferredLayerId:function(n){return this.X.preferredLayerMap[n]},ee:function(n){this.X.preferredLayerMap[n.groupId]!==n.layerId&&(this.X.preferredLayerMap[n.groupId]=n.layerId,this.emitChange())},re:function(n){var t=this.getPreferredLayerMap(),e=n.preferredLayerMap;i.assign(e,t),this.X.preferredLayerMap=e,this.emitChange()}}},1325:function(n,t,e){e(3232);var i=e(9653);e(6200).j;n.exports={initialize:function(){this.X={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.hn),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.oe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ae)},getEvents:function(){return this.X.events},getForeignEvents:function(){return this.X.foreignEvents},getForeignEventQueues:function(){return this.X.foreignEventQueues},hn:function(n){this.X.events=n,this.emitChange()},oe:function(n){this.X.foreignEvents[n.key]=n.value},ae:function(n){this.X.foreignEventQueues[n.key]=n.value}}},98:function(n,t,e){var i=e(9653);n.exports={initialize:function(){this.X={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ue)},getBaseMap:function(){return this.X.baseMap},getEventQueue:function(){return this.X.eventQueue},getLastEvent:function(){return this.X.lastEvent},getCleared:function(){return this.X.cleared},getInitialized:function(){return this.X.initialized},ue:function(n){this.X[n.key]=n.value}}},6950:function(n,t,e){var i=e(3232),r=e(9653);n.exports={initialize:function(){this.X={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.hn),this.on(r.DATA_LOADED,this.se)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.X.randomId},getVisitorIdLocator:function(){return this.X.visitorIdLocator},hn:function(n){i.extend(this.X,n),this.emitChange()},se:function(n){i.isEmpty(n.data.visitorIdLocator)||(this.X.visitorIdLocator=n.data.visitorIdLocator,this.emitChange())}}},2775:function(n,t,e){var i=e(3232),r=e(3308),o=e(9653);n.exports={initialize:function(){this.X={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.ce),this.on(o.XDOMAIN_ADD_FRAME,this.fe),this.on(o.XDOMAIN_SET_MESSAGE,this.le),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.de),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.he),this.on(o.XDOMAIN_SET_DISABLED,this.ve)},getMessages:function(){return i.cloneDeep(this.X.messages)},getOffset:function(){return 0===this.X.messages.length?0:this.X.messages[0].data.id},getNextMessageId:function(){return this.X.messages.length+this.getOffset()},getMessageById:function(n){return this.X.messages[n-this.getOffset()]},getSubscribers:function(){return this.X.subscribers},getFrames:function(){return this.X.frames},getNextFrameId:function(){return this.X.frames.length},getDefaultFrame:function(){return this.X.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.X.canonicalOrigins)},isDisabled:function(){return this.X.disabled},ce:function(n){this.X.defaultFrame=n},fe:function(n){this.X.frames.push(n)},le:function(n){for(this.X.messages[n.messageId-this.getOffset()]=n.message;this.X.messages.length>1e3;){var t=this.X.messages.shift();r.debug("XDomainStorage: Cleared old message: "+t.data.id)}},de:function(n){this.X.subscribers.push(n.subscriber)},he:function(n){this.X.canonicalOrigins=n.canonicalOrigins},ve:function(n){this.X.disabled=n.disabled}}},3900:function(n,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},2152:function(n,t,e){var i=e(8235).U;t.Error=i("TagError")},3468:function(n,t,e){var i=e(2425).PluginTypes,r=e(9350).get("stores/plugins");t.getTagValue=function(n){var e=r.getPlugin(i.viewTagLocators,n.locatorType);if(!e)throw new t.Error("No locator registered for tag locatorType: "+n.locatorType);return e(n)},t.enums=e(3900),t.Error=e(2152).Error},1115:function(n,t,e){var i=e(9653),r=e(9358),o=e(4702).Promise,a=e(9350).get("stores/async_request");t.makeAsyncRequest=function(n,t){var e,u,s=a.getPromise(n);if(s)return s;var c=new o((function(n,t){e=n,u=t}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:n,promise:c,resolver:e,rejecter:u}),t&&t(),c},t.resolveRequest=function(n,t){r.dispatch(i.RESOLVE_DEFERRED,{source:n,resolveWith:t})},t.rejectRequest=function(n,t){r.dispatch(i.REJECT_DEFERRED,{source:n,rejectWith:t})}},2052:function(n,t,e){var i=e(3405),r=e(7082);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}},6491:function(n,t,e){var i=e(3232),r=e(8235).U,o=e(1217),a=e(1596),u=e(7082),s=e(9653),c=e(9350),f=e(9358),l=c.get("stores/cookie_options"),d=t.SetError=r("CookieSetError"),h=t.MismatchError=r("CookieMismatchError");t.getAll=function(n){var e,r,o,u,s;i.isUndefined(n)&&(n=!0),e=a.getCookieString().split(/\s*;\s*/);var c={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&void 0===c[s=t.safeDecodeURIComponent(r.substring(0,u))]){var f=r.substring(u+1);n&&(f=t.safeDecodeURIComponent(f)),c[s]=f}return c},t.safeDecodeURIComponent=function(n){try{return decodeURIComponent(n)}catch(t){return n}},t.get=function(n,e){return t.getAll(e)[n]},t.set=function(n,e,r,c){r=i.extend({encodeValue:!0},r),!1!==c&&(c=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(n,e){!1!==e&&(e=!0);for(var r,o,a=n.hostname.split("."),u=[],c=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!i.includes(v,r)){o={domain:e?"."+r:r};try{t.set(p,Math.random().toString(),o),t.remove(p,o),c=o.domain;break}catch(d){}}return f.dispatch(s.SET_COOKIE_DOMAIN,c),c}(u.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var _=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*_)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),a.setCookie(n+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),c){var w=r.encodeValue,y=t.get(n,w);if(y!==e){if(!y)throw new d('Failed to set cookie "'+n+'"');throw new h('Expected "'+e+'" for "'+n+'", got "'+y+'"')}}},t.remove=function(n,e){for(var r=u.getLocation().hostname.split(".");r.length>0;)t.set(n,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var v=["optimizely.test"],p="optimizelyDomainTestCookie"},8235:function(n,t,e){var i=e(7871),r=i("InternalError");t.G=r,t.U=function(n){return i(n,r)}},3341:function(n,t,e){var i=e(3232),r=e(4702).Promise;n.exports=function(){var n,t,e=new r((function(e,i){n=e,t=i}));return e.resolve=function(){return n.apply(null,i.toArray(arguments)),e},e.reject=function(){return t.apply(null,i.toArray(arguments)),e},e}},9739:function(n,t,e){var i=e(3232);t.deepFreeze=function(n){},t.safeReference=function(n){return i.cloneDeep(n)}},5210:function(n,t,e){var i=e(3232);t.getFieldValue=function(n,t){i.isArray(t)||(t=[t]);for(var e=n,r=0;r<t.length;r++){var o=t[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},t.setFieldValue=function(n,t,e){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=n,o=0;o<t.length-1;o++){var a=t[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[t[t.length-1]]=e}},3308:function(n,t,e){var i=e(3232),r=e(9653),o=e(1217),a=e(2425),u=e(9358),s=e(6898);function c(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}c.prototype.pe=function(){return!i.isNull(this.logLevel)},c.prototype.setLogLevel=function(n){var t=this.ge(n);null===t?console.error("Unknown log level: "+n):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},c.prototype.setLogMatcher=function(n){i.isString(n)?this.logMatcher=n:this.logMatcher="",this.logGroup=0},c.prototype.shouldLog=function(n){return this.pe()&&this.logLevel>=n},c.prototype.matchesLogMessage=function(n,t){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===n?this.logGroup++:"GROUPEND"===n&&this.logGroup--,!0;var r=i.some(t,(function(n){if(!i.isString(n))try{n=s.stringify(n)}catch(t){}return i.isString(n)&&i.includes(n,e)}));return r&&"GROUPSTART"===n&&this.logGroup++,r},c.prototype.storeLog=function(n,t){var e={logLevel:n,logMessage:t};u.dispatch(r.LOG,e)},c.prototype.flush=function(){var n=e(9350).get("stores/log");this.logGroup=0;var t=n.getLogs();i.each(t,i.bind((function(n){this.me(n.logLevel,n.logMessage,!0)}),this))},c.prototype.me=function(n,t,e){var r,o=n;if(console)switch(n){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.pe()&&!this.shouldLog(o)||(i.isArray(t)&&i.isString(t[0])&&(t=this._e(t)),this.storeLog(n,t)),r&&this.shouldLog(o)&&this.matchesLogMessage(n,t)&&r.apply(console,t)}catch(u){console&&(console.error?console.error(u):console.log(u))}},c.prototype.debug=function(){this.me(a.LogLevel.DEBUG,[].slice.call(arguments))},c.prototype.log=function(){this.me(a.LogLevel.INFO,[].slice.call(arguments))},c.prototype.logAlways=function(){var n=this._e([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,n),this.storeLog(a.LogLevel.INFO,n)},c.prototype.warn=function(){this.me(a.LogLevel.WARN,[].slice.call(arguments))},c.prototype.error=function(n){var t=[].slice.call(arguments);1===t.length&&n.stack?(this.me(a.LogLevel.ERROR,[this.we(),n]),this.me(a.LogLevel.INFO,[n.stack])):this.me(a.LogLevel.ERROR,t)},c.prototype.groupCollapsed=function(){this.me("GROUPSTART",[].slice.call(arguments))},c.prototype.groupEnd=function(){this.me("GROUPEND",[].slice.call(arguments))},c.prototype._e=function(n){var t=this.we().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+n[0]].concat(n.slice(1))},c.prototype.we=function(){return this.timebase?o.now()-this.timebase:0},c.prototype.ge=function(n){return n&&("TRUE"===(n=n.toUpperCase())&&(n="INFO"),"FALSE"===n&&(n="OFF"),"ALL"===n&&(n="DEBUG"),!i.isUndefined(a.LogLevel[n]))?a.LogLevel[n]:null},n.exports=new c},5293:function(n,t){t.isSingleExperimentPolicy=function(n){return"single_experiment"===n||"multivariate"===n}},5969:function(n,t,e){var i=e(3232),r=e(4702).Promise,o=e(7082);t.pollFor=function(n,t,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),t=t||50,new r((function(e,i){!function r(){var a;if(!u()){try{var s=n();if(s)return e(s)}catch(c){a=c}return o.setTimeout(r,t)}i(a||new Error("Poll timed out"))}()}))}},2819:function(n,t,e){var i=e(3232),r=e(4702).Promise;t.firstToResolve=function(n){return new r((function(t){i.each(n,(function(n){r.resolve(n).then(t,(function(){}))}))}))}},3405:function(n,t,e){var i=e(3232),r=e(7082);t.getQueryParams=function(){var n=r.getLocationSearch()||"";if(0===n.indexOf("?")&&(n=n.substring(1)),0===n.length)return[];for(var t=n.split("&"),e=[],i=0;i<t.length;i++){var o="",a="",u=t[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},t.getQueryParamValue=function(n){for(var e=t.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===n)return e[i][1]},t.queryStringFromMap=function(n){return i.map(n,(function(n,t){return t+"="+n})).join("&")}},7338:function(n,t,e){var i=e(3232),r=e(3308),o=e(7082);function a(n){this.windowLength=n,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(n){n()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(n,t){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t)},n.exports=a},6371:function(n,t,e){var i=e(3232),r=e(9350).get("stores/observed_redirect");t.getReferrer=function(){var n=r.get();return n?n.referrer:null},t.getExperimentAndVariation=function(){var n=r.get();return n&&i.isString(n.variationId)?i.pick(n,["experimentId","variationId"]):null}},1674:function(n,t,e){var i=e(3232),r=e(9653),o=e(1217),a=e(9350),u=e(1596),s=e(2425),c=e(9358),f=e(3308),l=a.get("stores/sandbox"),d=e(7082);t.shouldSandbox=function(){return!1},t.get=function(n){if(!n)throw new Error("Name is required");if(t.shouldSandbox()){l.isInitialized()||h();var e=l.get(n);if(e)return e}return d.getGlobal(n)};var h=function(){try{var n="optimizely_"+o.now(),t=u.createElement("iframe");t.name=n,t.style.display="none",u.appendToHead(t);var e=t.contentWindow,a=t.contentDocument;a.write("<script><\/script>"),a.close();var l=i.mapValues(s.SandboxedFunctions,(function(n){return e[n]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l}),t.parentNode.removeChild(t)}catch(d){f.warn("Unable to create a sandbox: ",d)}}},4452:function(n,t,e){var i=e(1596),r=e(3308),o=e(4755);t.addScriptAsync=function(n,t){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=n,t&&(o.onload=t),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+n)},t.addScriptSync=function(n,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==n.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+n);i.write('<script id="'+a+'" src="'+n+'"><\/script>');var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+n+") synchronously:",i),t.addScriptAsync(n,e)}}catch(s){r.debug("DocumentEnv.write failed for "+n+": "+s.message);return o.request({url:n,async:!1,contentType:"text/plain",success:function(n){new Function(n.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+n+" via synchronous XHR: "+i.message),t.addScriptAsync(n,e)}))}}},2798:function(n,t,e){var i=e(4702).Promise,r=e(7082);t.makeTimeoutPromise=function(n){return new i((function(t,e){r.setTimeout((function(){e(new Error("Timed out after "+n+" ms"))}),n)}))}},5412:function(n,t,e){var i=e(3232),r=e(260),o=e(7082),a=e(9653),u=e(9350),s=e(9358),c=u.get("stores/ua_data");t.get=function(){var n=c.get();return i.isEmpty(n)&&(n=r.parseUA(o.getUserAgent()),s.dispatch(a.SET_UA_DATA,{data:n})),n}},9455:function(n,t){t.guessDomain=function(n,t){if(!n)return"";try{return t?n.match(/:\/\/(.[^/]+)/)[1]:n.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},5762:function(n,t,e){var i=e(3232),r=e(4702).Promise,o=e(9653),a=e(9350),u=e(9358),s=e(1826),c=e(8235).U,f=e(1217),l=e(1596),d=e(6898),h=e(5969),v=e(7324),p=e(7082),g=e(3308),m=a.get("stores/xdomain"),_=t.Error=c("XDomainStorageError");function w(n){var t;if(i.find(m.getFrames(),{origin:n.origin})){try{t=d.parse(n.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",n)}if("ERROR"===t.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),s.emitInternalError(new _("Xdomain Error: "+t.response));else if("SYNC"===t.type)i.each(m.getSubscribers(),(function(n){n(t.response.key,t.response.value)}));else{var e=m.getMessageById(t.id);if(!e){if(g.warn("XDomain","No stored message found for ID",t.id),i.isNumber(t.id)){var r=m.getNextMessageId();t.id>=r?s.emitInternalError(new _("Message ID is greater than expected maximum ID ("+t.id+">"+r+")")):t.id<0?s.emitInternalError(new _("Message ID is < 0: "+t.id)):s.emitInternalError(new _("No stored message found for message ID: "+t.id))}else s.emitInternalError(new _("Message ID is not a number: "+t.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",t.id);e.resolver(t.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:{data:{id:t.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+n.origin)}function y(n,t){return t||(t=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},n,{id:m.getNextMessageId()}),resolver:e};t?m.isDisabled()||E(r,t):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function E(n,t){var e=n.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.data.id,message:i.extend({},n,{startTime:f.now()})}),t.target.postMessage(d.stringify(e),t.origin)}t.setItem=function(n,t,e){return y({type:"PUT",key:n,value:t},e)},t.getItem=function(n,t){return y({type:"GET",key:n},t)},t.fetchAll=function(n){return y({type:"GETALL"},n)},t.deleteData=function(n,t){return y({type:"DELETE",visitorId:n},t)},t.subscribe=function(n){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:n})},t.loadIframe=function(n,t){return new r((function(e){var i=l.createElement("iframe");i.src=n+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:n,path:t};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},t.getXDomainUserId=function(n,t){var e,r={},o=i.keys(n);return i.each(t,(function(n){r[n]=[],i.each(o,(function(t){var o=v.getUserIdFromKey(t,n);!e&&o&&(e=o),o&&!i.includes(r[n],o)&&r[n].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},t.load=function(n,e){p.addEventListener("message",w);return h.pollFor((function(){return!!l.querySelector("body")})).then((function(){return t.loadIframe(n,e)})).then((function(n){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,n),m.isDisabled()||i.each(m.getMessages(),(function(t){t.startTime||E(t,n)}))}))}},4755:function(n,t,e){var i=e(3232),r=e(9653),o=e(1217),a=e(9358),u=e(6898),s=e(3308),c=e(4702).Promise,f=e(1674);t.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},t.request=function(n){return n=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},n),new c((function(e,r){if(!t.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){n.success&&n.success(o),e(o)},o.onerror=function(){n.error&&n.error(o),r(o)},i.isObject(n.data)&&(n.data=u.stringify(n.data)),o.open(n.method,n.url,n.async),n.withCredentials&&(o.withCredentials=n.withCredentials),o.setRequestHeader("Content-Type",n.contentType),i.isObject(n.headers)&&i.forEach(n.headers,(function(n,t){o.setRequestHeader(t,n)})),o.send(n.data)}))},t.retryableRequest=function(n,e,u,f){if(!e)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:n,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),s.debug("Sending event ",e),t.request(n).then((function(n){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),n}),(function(n){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),s.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),s.debug("Event ",l," failed to send, with error ",n," It will be retried ",f-u," times.")),n}))},t.sendBeacon=t.request},4247:function(n,t,e){var i=e(3232),r=e(9653),o=e(6274),a=e(2813),u=e(1217),s=e(9350),c=e(2425),f=e(1069),l=e(9358),d=e(3308),h=e(3468),v=s.get("stores/event_data"),p=s.get("stores/plugins"),g=s.get("stores/rum"),m=s.get("stores/view"),_=s.get("stores/view_data");function w(n,t){i.forEach(n,(function(n){if(n.eventType!==f.CUSTOM){var e=p.getPlugin(c.PluginTypes.eventImplementations,n.eventType);e?t?e.attach(n):e.detach(n):d.warn("No implementation found for event type:",n.eventType,"needed for event:",n)}}))}t.parseViewTags=function(n){var e=t.evaluateViewTags(n);t.setParsedViewTags(n.id,e)},t.updateAllViewTags=function(){var n=m.getActiveViewStates();i.each(n,(function(n){var e=_.get(n.id);t.parseViewTags(e)}))},t.evaluateViewTags=function(n){return n.tags?i.reduce(n.tags,(function(n,t){try{n[t.apiName]=h.getTagValue(t)}catch(r){e=r,(null!=(i=h.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",t,r):d.error(r)}var e,i;return n}),{}):{}},t.createViewTicket=function(){var n={};return i.each(p.getAllPlugins(c.PluginTypes.viewProviders),(function(t){n[t.provides]=s.evaluate(t.getter)})),n},t.registerViews=function(n){l.dispatch(r.REGISTER_VIEWS,{views:n})},t.activateViaAPI=function(n,e){e&&t.setUserSuppliedViewTags(n.id,e),t.activateMultiple([n],e)},t.getViewsAndActivate=function(n){var e=_.getAllViewsForActivationType(n);t.activateMultiple(e)},t.activateMultiple=function(n,e){var a=[];return i.each(n,(function(n){var u=m.getViewState(n.id),s=t.createViewTicket();if(u.isActive)if(n.deactivationEnabled)try{t.hasValidStaticConditions(n,s)||t.deactivate(n)}catch(h){d.error("Page / Error evaluating whether to deactivate page ",t.description(n),h)}else d.log("Not activating Page, already active ",t.description(n));else{try{if(!t.hasValidStaticConditions(n,s))return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.log("Page / Failed to match page conditions for "+t.description(n),n.staticConditions)}catch(h){return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.error("Page / Error evaluating whether to activate page ",t.description(n),h)}if(a.push(n),t.setViewActiveState(n,!0),d.log("Activated Page",t.description(n)),o.emitViewActivated({view:n,metadata:e}),g.getSampleRum()){var f=n.activationType||c.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:n.id})}w(v.getByPageId(n.id),!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},t.deactivate=function(n){m.getViewState(n.id).isActive?(t.setViewActiveState(n,!1),d.log("Deactivated Page",t.description(n)),o.emitPageDeactivated({page:n}),w(v.getByPageId(n.id),!1)):d.log("Not deactivating Page, already inactive ",t.description(n))},t.setViewActiveState=function(n,t){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:n,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(n){l.dispatch(r.SET_GLOBAL_TAGS,n)},t.setParsedViewTags=function(n,t){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:n,metadata:t})},t.setUserSuppliedViewTags=function(n,t){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:n,metadata:t})},t.hasValidStaticConditions=function(n,t){var e={};if(i.isEmpty(n.staticConditions))return!0;var o=p.getAllPlugins(c.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",n.staticConditions),d.debug("Matching to current value:",t);var u=a.evaluate(n.staticConditions,(function(n){var i=n.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[n.type]||(e[n.type]=!0)),r.match(t,n)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:n.id}),u},t.description=function(n){return'"'+n.name+'" ('+n.id+")"},t.isActivationTypeImmediate=function(n){return n===c.ViewActivationTypes.immediate||!n},t.shouldTriggerImmediately=function(n){return n===c.ViewActivationTypes.DOMChanged||n===c.ViewActivationTypes.URLChanged||n===c.ViewActivationTypes.immediate||!n},t.create=function(n,t){return{id:n,apiName:t,category:"other"}},t.createState=function(n){return{id:n,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},7324:function(n,t,e){var i=e(3232),r=e(9358),o=e(9653),a=e(7201),u=e(405),s=e(6491),c=e(1217),f=e(9350),l=e(2425),d=e(6898),h=e(5210),v=e(7075).mM,p=e(3308),g=e(4702).Promise,m=e(3405),_=e(2425).VisitorStorageKeys,w=e(7082),y=f.get("stores/cookie_options"),E=f.get("stores/global"),b=f.get("stores/layer"),I=f.get("stores/plugins"),A=f.get("stores/rum"),T=f.get("stores/session"),S=f.get("stores/visitor_id"),R=f.get("stores/visitor_bucketing"),k=f.get("stores/visitor"),N=f.get("stores/provider_status");function D(n,t){var e=function(n,e){var i;t.attributionType&&(i=c.now()),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:[{key:n,value:e,metadata:{lastModified:i}}]})};if(t.getter){var a=t.provides;if(i.isArray(a)||(a=[a]),!(t.isSticky&&!i.isUndefined(h.getFieldValue(n,a)))){var u;try{var s=f.evaluate(t.getter);i.isFunction(s)&&(s=s((function(){return h.getFieldValue(n,a)}),(function(n){e(a,n)}))),i.isUndefined(s)||(t.isAsync?(u=s.then((function(n){e(a,n)}),(function(n){p.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',n)})),r.dispatch(o.SET_VISITOR_ATTRIBUTE_PENDING,{key:a,pending:u})):e(a,s))}catch(l){p.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+l.message)}return u}}}function C(n){var t=P(n),e=v.getItem(t);return i.isString(e)&&(e=V(e)),e}function O(n){return n.layerId?n:{layerId:n.i,pageId:n.p,decisionTimestamp:n.t,decisionTicket:{audienceIds:n.a||[]},decision:{layerId:n.i,experimentId:n.x||null,variationId:n.v||null,isLayerHoldback:n.h||!1}}}function x(n,t,e){try{var i=P(n);e||(t=d.stringify(t));try{v.setItem(i,t)}catch(r){throw p.warn("Visitor / Unable to set localStorage key, error was:",r),new Error("Unable to set localStorage")}}catch(r){p.warn("Unable to persist visitor data:",r.message)}}function P(n){var e=S.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,n].join("$$")}function M(n,e){if(!S.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(L(n)){var a=t.getStorageKeyFromKey(n);if(i.includes(_,a)){var s=P(a);if(!(n.indexOf(s)<=0)&&(e=V(e)))if(a===_.EVENT_QUEUE)r.dispatch(o.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:n,value:u.deserialize(e)});else if(a===_.EVENTS)r.dispatch(o.SET_FOREIGN_VISITOR_EVENTS,{key:n,value:u.deserialize(e)});else if(a===_.LAYER_STATES)r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.map(e,O),merge:!0});else if(a===_.VARIATION_MAP)r.dispatch(o.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(a===_.VISITOR_PROFILE){var c=e;i.each(["custom"],(function(n){var t=I.getPlugin(l.PluginTypes.visitorProfileProviders,n);if(t){if(c.profile&&c.metadata){var e=function(n,t,e){var r=k.getAttribute(t),o=k.getAttributeMetadata(t),a=n.profile[t],u=n.metadata[t];if(i.isEmpty(r))return{data:a,metadata:u};var s={};return i.forOwn(a,(function(n,t){var r,a;o&&o[t]&&(r=o[t].lastModified),u&&u[t]&&(a=u[t].lastModified),(e===l.AttributionTypes.FIRST_TOUCH&&r>=a||e===l.AttributionTypes.LAST_TOUCH&&a>=r||i.isUndefined(r)&&a)&&(s.data=s.data||{},s.data[t]=n,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}(c,n,t.attributionType);if(!i.isEmpty(e)){var a=[];i.forOwn(e.data,(function(t,i){var r=e.metadata[i],o={key:[n,i],value:t,metadata:r};a.push(o)})),r.dispatch(o.SET_VISITOR_ATTRIBUTES,{attributes:a})}}}else p.debug("Attribute type",n,"not used by any audiences")}))}}}}function L(n){return n.split("$$")[0].indexOf("://")>0}function V(n){try{return d.parse(n)}catch(t){return p.debug("Failed to parse: ",n,t),null}}t.getOrGenerateId=function(){return{randomId:t.getCurrentId()||"oeu"+c.now()+"r"+Math.random()}},t.getCurrentId=function(){var n=S.getVisitorIdLocator();return k.getVisitorIdFromAPI()||(n?function(n){var t,e=n.name;switch(n.type){case l.VisitorIdLocatorType.COOKIE:t=s.get(e);break;case l.VisitorIdLocatorType.JS_VARIABLE:t=w.getGlobalByPath(e);break;case l.VisitorIdLocatorType.LOCALSTORAGE:try{t=w.getGlobal("localStorage").getItem(e)}catch(u){throw new Error("Unable to read localStorage: "+u.toString())}break;case l.VisitorIdLocatorType.QUERY:t=m.getQueryParamValue(e)}try{if(!t)throw p.error("Visitor / Customer provided visitor id cannot be found. Type:",n.type," Name:",e),new Error("Failure to obtain visitor id from "+n.type);if(!i.isString(t)&&!i.isNumber(t))throw p.error("Visitor / Customer provided visitor id is not a string or number. Type:",n.type," Name:",e," Id Type:",(a=t)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a),new Error("Customer provided visitor id is not a string or number")}catch(c){throw A.getSampleRum()&&r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!0}),c}var a;A.getSampleRum()&&(r.dispatch(o.RECORD_VISITOR_ID_ERROR,{isError:!1}),r.dispatch(o.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:n.type,entityId:t}));return String(t)}(n):s.get(l.COOKIES.VISITOR_ID))},t.hasSomeData=function(){return v.keys().length>0},t.setId=function(n){var e,u,c=S.getBucketingId();r.dispatch(o.SET_VISITOR_ID,n),S.getBucketingId()!==c&&(!function(){!function(n,t){0;a.initializeStore(n,t)}(C(_.EVENTS)||[],C(_.EVENT_QUEUE)||[]);var n=(e=_.LAYER_STATES,u=S.getBucketingId(),s=[],c=new RegExp(u+"\\$\\$([^$]+?)\\$\\$"+e),i.each(v.keys(),(function(n){var t=n.match(c);if(t){var e={namespace:t[1],userId:u,item:V(v.getItem(n))};s.push(e)}})),s);var e,u,s,c;i.forEach(n,(function(n){n.item=i.map(n.item,O)})),d=n,h=[],i.each(d,(function(n){i.each(n.item,(function(t){t.namespace=n.namespace,h.push(t)}))})),g=h,r.dispatch(o.LOAD_PERSISTED_LAYER_STATES,{layerStates:i.filter(g,(function(n){return!!n.decision}))}),p=C(_.SESSION_STATE)||{},p=i.extend({lastSessionTimestamp:0,sessionId:null},p),r.dispatch(o.LOAD_SESSION_STATE,p),function(n){var t,e,a=I.getAllPlugins(l.PluginTypes.visitorProfileProviders),u=i.filter(a,(function(n){return i.isFunction(n.restorer)}));n.profile&&n.metadata?(t=n.profile,e=n.metadata):(t=n,e={});t=i.reduce(t,(function(n,t,e){var r=t,o=i.find(u,{provides:e});return o&&(r=o.restorer(t)),n[e]=r,n}),{}),r.dispatch(o.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:e})}(C(_.VISITOR_PROFILE)||{});var f=C(_.TRACKER_OPTIMIZELY);f&&(m=f,r.dispatch(o.SET_TRACKER_PERSISTABLE_STATE,m));var d,h;var p;var g;var m;t.loadForeignData(),t.removeLegacySessionStateCookies()}(),t.deleteOldLocalData());try{S.getVisitorIdLocator()||t.maybePersistVisitorId(n)}catch(f){if(p.error("Visitor / Unable to persist visitorId, disabling tracking"),r.dispatch(o.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=f,null!=(u=s.MismatchError)&&"undefined"!=typeof Symbol&&u[Symbol.hasInstance]?u[Symbol.hasInstance](e):e instanceof u)throw p.error("Visitor / Cookie not set to correct value:",f),new Error("Cookie mismatch error while persisting visitorId");throw f}t.refreshSession()},t.getVariationIdMap=function(){return C(_.VARIATION_MAP)||{}},t.updateVariationIdMap=function(n,t,e){r.dispatch(o.UPDATE_VARIATION_ID_MAP,{layerId:n,experimentId:t,variationId:e})},t.persistVariationIdMap=function(){var n=R.getVariationIdMapString();x(_.VARIATION_MAP,n,!0)},t.getPreferredLayerMap=function(){return C(_.LAYER_MAP)||{}},t.updatePreferredLayerMap=function(n,t){r.dispatch(o.UPDATE_PREFERRED_LAYER_MAP,{groupId:n,layerId:t})},t.persistTrackerOptimizelyData=function(n){x(_.TRACKER_OPTIMIZELY,n)},t.refreshSession=function(){r.dispatch(o.REFRESH_SESSION)},t.populateEagerVisitorData=function(n,e){var r=i.filter(n,(function(n){return!n.isLazy}));return t.populateVisitorData(r,e)},t.populateLazyVisitorData=function(n,e){var r=i.filter(n,(function(n){return n.isLazy}));return t.populateVisitorData(r,e)},t.populateVisitorData=function(n,t){t=t||{};var e=i.partial(D,t),r=i(n).filter({isAsync:!0}).map(e).filter().value();return i.forEach(i.filter(n,(function(n){return!n.isAsync})),e),r.length>0?g.all(r):g.resolve()},t.persistBehaviorEvents=function(n){x(_.EVENTS,n)},t.persistBehaviorEventQueue=function(n){x(_.EVENT_QUEUE,n)},t.getPersistedBehaviorEventCount=function(){var n=C(_.EVENTS)||[],t=C(_.EVENT_QUEUE)||[];return u.deserialize(n).length+u.deserialize(t).length},t.persistLayerStates=function(){var n=b.getLayerStates(t.getNamespace());n=i.map(n,(function(n){return i.omit(n,"namespace")})),x(_.LAYER_STATES,n)},t.persistSessionState=function(){x(_.SESSION_STATE,T.getState())},t.persistVisitorProfile=function(){x(_.VISITOR_PROFILE,function(){var n=k.getVisitorProfile(),t=k.getVisitorProfileMetadata(),e=I.getAllPlugins(l.PluginTypes.visitorProfileProviders);if(e){var r=i.reduce(e,(function(n,t){return t.provides&&(n[t.provides]=t),n}),{});n=i.omitBy(n,(function(n,t){var e=r[t];return e&&e.isTransient}))}return{profile:n,metadata:t}}())},t.persistVisitorBucketingStore=function(){var n;t.persistVariationIdMap(),n=R.getPreferredLayerMapString(),x(_.LAYER_MAP,n,!0)},t.getUserIdFromKey=function(n,e){var r;return i.includes(n,e)&&i.includes(n,"_")&&i.includes(n,"$$")&&i.includes(n.slice(n.indexOf("$$")),t.getNamespace())&&(r=n.slice(n.indexOf("_")+1,n.indexOf("$$"))),r},t.maybePersistVisitorId=function(n){n.randomId&&(y.getAutoRefresh()||t.getCurrentId()!==n.randomId?(s.set(l.COOKIES.VISITOR_ID,n.randomId),p.log("Persisting visitorId:",n.randomId)):p.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(n){return k.getAttribute(n)},t.getPendingAttributeValue=function(n){return N.getPendingAttributeValue(n)},t.isForeignKey=L,t.checkKeyForVisitorId=function(n){var e=S.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(n);return!i||i===e},t.getIdFromKey=function(n){var e=n.split("$$")[0],r=t.getStorageKeyFromKey(n);if(i.includes(l.StorageKeys,r))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},t.getStorageKeyFromKey=function(n){var t,e=n.split("$$").pop();if(e.indexOf("://")>-1){var r=e.indexOf("_");t=e.substring(r+1)}else t=e;return i.includes(i.values(l.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var n=v.keys();i.each(n,(function(n){t.isForeignKey(n)||t.checkKeyForVisitorId(n)||v.removeItem(n)}))},t.deleteOldForeignData=function(){var n=v.keys();i.each(n,(function(n){t.isForeignKey(n)&&v.removeItem(n)}))},t.loadForeignData=function(){i.each(v.keys(),(function(n){var t=v.getItem(n);t&&M(n,t)}))},t.getNamespace=function(){return E.getNamespace()},t.serializeFieldKey=function(n){return i.isArray(n)?n.join("$$"):n},t.removeLegacySessionStateCookies=function(){var n=s.getAll();i.forEach(i.keys(n),(function(n){0===n.indexOf(l.COOKIES.SESSION_STATE+"$$")&&s.remove(n)}))}},4773:function(n,t,e){var i=e(3232),r=e(2425);t.normalizeClientData=function(n){!n.listTargetingKeys&&n.listTargetingCookies&&(n.listTargetingKeys=i.map(n.listTargetingCookies,(function(n){return{type:r.ListTargetingKeyTypes.COOKIE,key:n}})),delete n.listTargetingCookies)}},9432:function(n,t,e){e(9350).register("env/jquery",e(6552))},6552:function(n,t,e){var i,r=e(7082);try{i=$}catch(a){}var o=r.getGlobal("$");n.exports=i&&i!==o?i:o},6236:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(3232),o=e(8235).G,a=e(1217),u=e(9350),s=e(1596),c=e(3308),f=e(7082),l=e(4755),d=u.get("stores/client_metadata"),h=u.get("stores/global");function v(n){return n&&n.engine?n.engine:d.getClientName()}t.handleError=function(n,t){var e=function(){return l.request({url:"https://errors.client.optimizely.com/log",method:"POST",data:m,contentType:"application/json"}).then((function(n){c.log("Error Monitor / Logged error with response: ",n)}),(function(n){c.error("Failed to log error, response was: ",n)}))},u=n.name||"Error",p=n.message||"",g=n.stack||null;i(n,o)&&(i(p,Error)?(p=p.message,g=n.message.stack):g=null);var m={timestamp:a.now(),clientEngine:v(t),clientVersion:d.getClientVersion(),accountId:h.getAccountId(),projectId:h.getProjectId(),errorClass:u,message:p,stacktrace:g},_=r.map(h.getExperimental(),(function(n,t){return{key:"exp_"+t,value:String(n)}}));t&&r.forEach(t,(function(n,t){r.isObject(n)||_.push({key:t,value:String(n)})}),[]),r.isEmpty(_)||(m.metadata=_),c.error("Logging error",m),s.isLoaded()?e():f.addEventListener("load",e)}},4003:function(n,t,e){var i=e(3232),r=e(9653),o=e(1826),a=e(1729),u=e(8235).U,s=e(4944),c=e(3341),f=e(9350).get("stores/directive"),l=e(1596),d=e(5934),h=e(9358),v=e(3308),p=e(7338),g=e(6974),m=e(6365).create(),_=1e3,w=10,y=u("ChangeOverheatError");function E(n,t){if(this.change=n,this.identifier=t.identifier,this.startTime=t.startTime,f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(w)?Number.POSITIVE_INFINITY:w;this.rateMeter.addListener(e,i.bind((function(){v.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(n){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),u))}}E.prototype.numberOfRootNodes=function(n){var t=document.createElement("div");return t.innerHTML=n,t.childNodes.length},E.prototype.getSiblingElements=function(n,t,e){for(var i=n,r=[],o=0;o<t;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},E.prototype.apply=function(){this.applyDeferred=c();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},E.prototype.maybeApplyToElement=function(n){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return v.debug("Not applying AppendChange to element",n,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,n,t)(),this.applyDeferred.resolve()},E.prototype.applyOrReapplyToElement=function(n,t){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}n.insertAdjacentHTML(e,this.change.value),n.setAttribute(t,""),s.setData(n,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=n.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=n.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=n.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=n.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(n){var e=n.nodeType===Node.ELEMENT_NODE?n:l.parentElement(n);e.setAttribute(t,"");var r=s.getData(e,this.change.id,this.identifier)||[];r.push(n),s.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(n){n.setAttribute(t,"")}))}),this))},E.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},n.exports=function(n){n.registerChangeApplier(d.changeType.APPEND,E)}},2123:function(n,t,e){var i=e(3232),r=e(5934);t.transformVisibilityAttributesToCSS=function(n){if(!n.attributes)return n;if(n.attributes[r.selectorChangeType.HIDE]||n.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(n));return n.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),n.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return n},t.createStylesFromChange=function(n,t){if(i.isEmpty(t.css))return t.attributes.style;var e="",r=t.attributes.style||"";return i.each(t.css,(function(n,t){new RegExp(t+"\\s?:").test(r)||(e+=t+":"+n+";")})),i.isUndefined(t.attributes.style)?(n||"")+e:e+r}},3813:function(n,t,e){var i=e(3232),r=(e(4702).Promise,e(9653)),o=e(1826),a=e(1729),u=e(8235).U,s=e(4944),c=e(3341),f=e(9350).get("stores/directive"),l=e(1596),d=e(5934),h=e(9358),v=e(3308),p=e(1016),g=e(7338),m=e(6974),_=e(7082),w=e(2123),y=e(6365).create(),E={attributes:!0,childList:!0,subtree:!0,characterData:!0},b=1e3,I=10,A=u("ChangeOverheatError");function T(n,t){if(this.change=i.cloneDeep(n),this.change=w.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],f.shouldObserveChangesIndefinitely()){h.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new g(b);var e=i.isNull(I)?Number.POSITIVE_INFINITY:I;this.rateMeter.addListener(e,i.bind((function(){v.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),h.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new A("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:b,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(n){h.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),u))}this.cancelled=!1}T.prototype.apply=function(){this.applyDeferred=c();try{if(i.isEmpty(this.change.attributes)&&i.isEmpty(this.change.css))return v.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(m.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&y.waitUntil(i.partial(m.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=y.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},T.prototype.maybeApplyToElement=function(n){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return v.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+n),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var e=i.bind(this.applyOrReapplyToElement,this,n,t);e();var r=i.bind((function(){var t=i.bind((function(){this.cancelled||p.observe(o,n,E)}),this);return _.setTimeout(t)}),this),o=p.create(i.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),o.disconnect(),e(),r()}),this));r(),this.disconnectObserverQueue.push(i.bind(o.disconnect,o)),this.applyDeferred.resolve()},T.prototype.applyOrReapplyToElement=function(n,t){var e={};i.forOwn(this.change.attributes,(function(r,o){switch(o){case d.selectorChangeType.CLASS:i.isUndefined(n.className)||(e[d.selectorChangeType.CLASS]=n.className,n.className=r);break;case d.selectorChangeType.HREF:i.isUndefined(n.href)||(e[d.selectorChangeType.HREF]=n.href,n.href=r);break;case d.selectorChangeType.HTML:i.isUndefined(n.innerHTML)||(e[d.selectorChangeType.HTML]=n.innerHTML,n.innerHTML=r,i.each(l.childrenOf(n),(function(n){n.setAttribute(t,"")})));break;case d.selectorChangeType.SRC:i.isUndefined(n.src)||(e[d.selectorChangeType.SRC]=n.src,n.src=r);break;case d.selectorChangeType.STYLE:break;case d.selectorChangeType.TEXT:i.isUndefined(n.textContent)||(e[d.selectorChangeType.TEXT]=n.textContent,n.textContent=r);break;default:throw new Error("Unrecognized attribute: "+o)}}));var r=w.createStylesFromChange(n.style.cssText,this.change);i.isString(r)&&(e[d.selectorChangeType.STYLE]=n.style.cssText,n.style.cssText=r),n.setAttribute(t,""),s.setData(n,this.change.id,this.identifier,e)},T.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),i.each(this.disconnectObserverQueue,(function(n){try{n()}catch(t){}}))},n.exports=function(n){n.registerChangeApplier(d.changeType.ATTRIBUTE,T)}},5166:function(n,t,e){var i=e(3232),r=e(3341),o=e(5934),a=e(3209);function u(n,t){if(!i.isFunction(n.value))throw new Error("Custom code must be a function");this.change=n}u.prototype.apply=function(){var n=r();try{a.apply(this.change.value),n.resolve()}catch(t){n.reject(t)}return n},n.exports=function(n){n.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},4012:function(n,t,e){var i=e(3232),r=e(3341),o=e(5934),a=e(7444);function u(n,t){this.change=i.extend({},n),this.identifier=t.identifier}u.prototype.apply=function(){return a.emit({type:"showWidget",name:this.change.widget_id,data:this.change}),r().resolve(o.changeState.APPLIED)},n.exports=function(n){n.registerChangeApplier(o.changeType.WIDGET,u)}},795:function(n,t,e){Object.defineProperty(t,"ye",{value:!0});var i=e(7929),r=e(3529).E,o={selectExperiment:function(n,t,e){if(n.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=n.experiments[0];if(!i.isValidExperiment(t,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};n.exports=function(n){n.registerDecider("single_experiment",o),n.registerDecider("multivariate",o)}},3844:function(n,t,e){var i=e(3232),r=e(8473),o=e(1007),a=e(9666);function u(n,t){var e=o.buildFromSpecV0_1(t);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],n)}function s(n,t){return i.map(n,(function(n){return i.isFunction(n.toObject)?n.toObject(t):n}))}function c(n,t){if(!n)return["Descriptor not defined"];var e=[];return n.count&&e.push('Unexpected "count" clause specified'),n.pick&&n.pick.modifier&&-1===t.indexOf(n.pick.modifier)&&e.push('Invalid "pick" modifier "'+n.pick.modifier+'"'),i.each(n.filters,(function(n){i.isUndefined(n.modifier)||e.push('Unexpected "filter" modifier "'+n.modifier+'"')})),e.length>0?e:void 0}function f(n,t){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(t))return s(r.getEvents(n),e);if(i.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return s(r.getEvents(n).slice(-t),e)}var a=c(t,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return s(u(r.getEvents(n),t),e)}function l(n,t){if(!(t=i.cloneDeep(t)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=c(t,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(n),t)}function d(n,t){var e=o.buildFromSpecV0_2(t),u=r.getEvents(n),c=s(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(c=i.flatten(c)),t.reduce&&(c=c[0]),c}n.exports=["stores/visitor_events",function(n){return{getEvents:i.partial(f,n),getByFrequency:i.partial(l,n),query:i.partial(d,n)}}]},371:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(3844))}},6746:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(1650)),n.registerAudienceMatcher("behavior",e(3695))}},3695:function(n,t,e){var i=e(3232),r=e(6898),o=e(1007),a=e(9666);n.exports={fieldsNeeded:["events"],match:function(n,t){var e,u=r.parse(t.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(t){return a.isSatisfied(t,n.events)}))}}},1650:function(n,t,e){var i=e(8473);n.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},3395:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7919))}},7919:function(n,t,e){var i=e(3232),r=e(1006),o=e(8473),a=e(6898),u=e(1007);n.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(n,t){var e=n.getProjectId(),s=i.filter(i.map(t.getCustomBehavioralAttributes(e),(function(n){try{return{id:n.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(n.rule_json))}}catch(t){return}}))),c=o.getEvents();return r.evaluate(s,c)}]}},1643:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4072)),n.registerAudienceMatcher("first_session",e(504))}},504:function(n){n.exports={fieldsNeeded:["first_session"],match:function(n){return!!n.first_session}}},4072:function(n,t,e){var i=e(2460),r=e(8473),o=e(5210).getFieldValue,a=e(2611).CURRENT_SESSION_INDEX;n.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var n=r.getEvents();if(n&&n.length>0){var t=n[0];return o(t,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},1006:function(n,t,e){var i=e(3308),r={FIELDS:e(2460).FIELDS},o=e(1007),a=e(9666);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(n,e){var u={};if(0===e.length){for(var s=0;s<n.length;s++)u[n[s].id]=n[s].defaultValue;return u}var c=function(n){if(0===n.length)return[];for(var t=n.length-1,e=r.FIELDS.SESSION_ID,i=n[t][e];t>0&&i===n[t-1][e];)t--;return n.slice(t)}(e),f=function(n,t){if(0===n.length||t<=0)return[];var e=+new Date-t*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=n.length;i>0&&e<=n[i-1][r.FIELDS.TIME];)i--;return n.slice(i)}(e,60);for(s=0;s<n.length;s++){var l=n[s],d=e;l.granularity===t.GRANULARITY.CURRENT_SESSION?d=c:l.granularity===t.GRANULARITY.LAST_60_DAYS&&(d=f);try{var h=d;l.rule&&(h=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===h.length?u[l.id]=h[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",h.length,"results, expected 1")}catch(v){i.error("Behavior / Rule for",l.id,"failed with",v.message||"")}}return u}},8473:function(n,t,e){var i=e(3232),r=e(405),o=e(9350).get("stores/visitor_events");t.getEvents=function(){var n=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([n,t,e]);return a.slice(a.length-1e3)}},1007:function(n,t,e){var i=t,r=e(3232),o={FIELDS:e(2460).FIELDS,FIELDS_V0_2:e(2460).FIELDS_V0_2},a=e(6898),u=e(3308),s=e(9666);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(n,t){return r.isString(t)&&(t=[t]),t=t||s.DEFAULT_FIELD,[s.generateAlias(n,t)]},i.groupField=function(n){return r.isString(n)&&(n=[n]),[(n=n||s.DEFAULT_FIELD).join(".")]};var c={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(n){return n=(n||"").toString().trim(),c[n]||n}function l(n,t,e){var a={where:t};if(n.count&&(a.limit=n.count),n.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(n.name,e),s=i.aggregate("count"),c=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[s],orderBy:[{field:c,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(n,t,e){return n=f(n),r.isString(t)&&(t=[t]),"exists"===n?{op:n,args:[{field:t}]}:{op:n,args:[{field:t},{value:e}]}},i.relativeTimeComparison=function(n,t){return{op:f(n),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:t*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(n){return r.isArray(n)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[n[0]||+new Date(0),n[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",n),null)},i.groupBy=function(n){for(var t=[],e=0;e<n.length;e++)t[e]={field:n[e]};return t},i.aggregate=function(n,t){return r.isString(t)&&(t=[t]),{op:n,args:[{field:t=t||s.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(n,t){t=t||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(n)?(e=[n],t!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),n)||(e=[o.FIELDS.OPTIONS,n])):e=n,e},i.buildFromSpecV0_1=function(n){if(!(n.action||n.filters&&0!==n.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(n));var t=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],s=[];if(n.action&&(s.push(i.fieldComparison("eq",o.FIELDS.NAME,n.action.value)),n.action.type&&s.push(i.fieldComparison("eq",o.FIELDS.TYPE,n.action.type))),n.time)if("last_days"===n.time.type)s.push(i.relativeTimeComparison("lte",n.time.days));else if("range"===n.time.type){var c=i.rangeTimeComparison([n.time.start,n.time.stop]);c&&s.push(c)}else u.error("Rule builder",'Audience spec has bad "time" type',n.time.type);if(t={op:"and",args:s},n.count&&e.push({where:i.fieldComparison(n.count.comparator,"0",n.count.value),from:{select:[{field:i.aggregateField("count")}],where:t,aggregate:[i.aggregate("count")]}}),n.filters&&r.each(n.filters,(function(r){var a,u,c=i.getFieldKeyPathForSource(r.name,n.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=c,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:t,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else s.push(i.fieldComparison(r.comparator,c,r.value))})),n.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(n));return[l(n.pick,t,n.source)]}return e.length>0?e:[{where:t}]},i.buildFromSpecV0_2=function(n){!function(n){var t=[];if(r.isUndefined(n))throw new Error("rule is undefined");if(!r.isObject(n))throw new Error("rule is not an Object");"0.2"!==n.version&&t.push('version: not "0.2"'),n.filter&&(r.isArray(n.filter)?r.each(n.filter,(function(n,e){var r=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.FILTER);r&&t.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(n.comparator,n.value);o&&t.push("filter["+e+"]: "+o)})):t.push("filter: not an array"));var e=[],o=[];n.sort&&(n.reduce&&n.reduce.aggregator&&"nth"!==n.reduce.aggregator&&t.push("sort: superfluous because we can apply aggregator "+a.stringify(n.reduce.aggregator)+" to unsorted items"),r.isArray(n.sort)?r.each(n.sort,(function(n,u){var s=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.SORT);s&&t.push("sort["+u+"]: "+s),n.field&&"frequency"===n.field[0]?e.push(n):o.push(n);var c=function(n){var t="direction "+(a.stringify(n)||String(n));if(!r.includes(["ascending","descending"],n))return t+' is not "ascending" or "descending"'}(n.direction);c&&t.push("sort["+u+"]: "+c)})):t.push("sort: not an array"),e.length&&o.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!n.pick&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(n.pick){n.reduce&&"count"===n.reduce.aggregator&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(n.pick.field);u&&t.push("pick: "+u)}if(n.reduce){var s=n.reduce.aggregator,c="aggregator "+(a.stringify(s)||String(s)),f=n.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],s)||t.push("reduce: "+c+" is unknown"),r.includes(["sum","avg","max","min"],s)&&(n.pick||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===s?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+c+")"),n.sort||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||t.push("reduce: "+l+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}(n);var t={where:{op:"and",args:r.map(n.filter||[],(function(n){return"age"===n.field[0]?i.relativeTimeComparison(n.comparator||"eq",n.value/i.MILLIS_IN_A_DAY):i.fieldComparison(n.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(n.field),n.value)}))}};if(n.reduce&&"count"===n.reduce.aggregator)return r.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(n.sort&&(r.each(n.sort,(function(n){r.includes(["ascending","descending"],n.direction)&&(r.includes(["time","age"],n.field[0])&&o.push(n),"frequency"===n.field[0]&&e.push(n))})),o.length&&!e.length&&(t.orderBy=r.filter(r.map(o,(function(n){return"time"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"ASC":"DESC"}:"age"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"DESC":"ASC"}:void 0}))))),n.pick&&n.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(n.pick.field);if(n.reduce&&r.includes(["avg","max","min","sum"],n.reduce.aggregator))return r.extend(t,{aggregate:[{op:n.reduce.aggregator,args:[{field:u}]}],select:[{field:[s.generateAlias(n.reduce.aggregator,u)]}]});t=e.length?r.extend(t,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(t,{select:[{field:u}]})}if(n.reduce&&"nth"===n.reduce.aggregator){var c=n.reduce.n;if(r.isNumber(c)&&c>=0&&Number(c)===Math.floor(Number(c)))return r.extend(t,{offset:c,limit:1})}return t},i.convertFieldKeyPathFromSpecV0_2=function(n){return"tags"===n[0]&&"revenue"===n[1]?["r"]:[o.FIELDS_V0_2[n[0]]].concat(n.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(n,t){var e="field "+(a.stringify(n)||String(n));if(!r.isArray(n)||!r.every(n,r.isString))return e+" is not an array of strings";if("tags"===n[0]&&n.length>2||"tags"!==n[0]&&n.length>1)return e+" includes too many strings";if("tags"===n[0]&&n.length<2)return e+" does not specify an exact tag";if(n.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),s=["age","frequency"];return t===i.FieldPurpose.FILTER&&(u.push("age"),s=["frequency"]),t===i.FieldPurpose.SORT&&(u=["time","age","frequency"],s=["name","type","category","tags"]),r.includes(s,n[0])?e+" is not supported here":r.includes(u,n[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(n,t){var e="comparator "+(a.stringify(n)||String(n)),i="value "+(a.stringify(t)||String(t));if(!r.isString(n)&&!r.isUndefined(n))return e+" is not a string";switch(n){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(t))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(t))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(t)&&2===t.length&&r.isNumber(t[0])&&r.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(t)||r.isArray(t)&&2===t.length&&r.isString(t[0])&&r.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(t))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},9666:function(n,t,e){var i=e(3232),r=e(2425),o=e(3308),a=i.bind(o.log,o),u=e(1217),s=e(5210).getFieldValue,c=e(6898),f=function(n,t,e){if(n.getValueOrDefault)return n.getValueOrDefault(t,e);if(!i.isArray(t))return e;var r=s(n,t);return void 0===r&&(r=e),r},l=function(n){return"string"==typeof n?n.trim().toLowerCase():n};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(n){var t=i.map(n,l);return t[0]==t[1]},is:function(n){return n[0]===n[1]},gt:function(n){return n[0]>n[1]},lt:function(n){return n[0]<n[1]},gte:function(n){return n[0]>=n[1]},lte:function(n){return n[0]<=n[1]},"in":function(n){var t=i.map(n[1]||[],l);return i.includes(t,l(n[0]))},between:function(n){return n[1][0]<=n[0]&&n[0]<=n[1][1]},contains:function(n){var t=i.map(n,(function(n){return"string"==typeof n?n.toLowerCase():n}));return-1!==(t[0]||"").indexOf(t[1])},regex:function(n){try{var t,e;return i.isString(n[1])?(t=n[1],e="i"):(t=n[1][0]||"",e=n[1][1]||""),new RegExp(t,e).test(n[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[t,e].join("/"))),!1}},exists:function(n){return void 0!==n[0]},and:function(n){return i.every(n,(function(n){return n}))},or:function(n){return i.some(n,(function(n){return n}))},not:function(n){return!n[0]}},t.arithmeticOperators={"+":function(n){return(n[0]||0)+(n[1]||0)},"-":function(n){return(n[0]||0)-(n[1]||0)},"/":function(n){return(n[0]||0)/(n[1]||1)},"%":function(n){return(n[0]||0)%(n[1]||1)}},t.aggregateOperators={sum:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(n,e){if(0===e.length)return 0;for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(n,t){return t.length}};var d={now:function(){return u.now()}},h=function(n,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(n,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in t.booleanOperators?t.booleanOperators[r]:r in t.arithmeticOperators?t.arithmeticOperators[r]:null;if(a){var u=i.partial(h,n),s=e.args||[];return a(i.map(s,(function(n){return u(n)})),n)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+c.stringify(e))};t.generateAlias=function(n,t){return"_"+n+"_"+t.join(".")};t.rewrite=function(n){var e=[],r={};function a(n,u){if(i.isArray(n)&&("and"!==n[0]&&"or"!==n[0]&&"not"!==n[0]&&o.error("Rules","Unexpected operation "+n[0]+". Continuing optimistically."),n={op:n[0],args:n.slice(1)}),n.hasOwnProperty("field")||n.hasOwnProperty("value")||n.hasOwnProperty("eval"))return n;if(u&&n.op in t.aggregateOperators){var s=(n.args&&n.args[0]||{}).field||t.DEFAULT_FIELD,c=t.generateAlias(n.op,s);return c in r||(e.push({op:n.op,args:n.args}),r[c]=!0),{field:[c]}}for(var f=[],l=n.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:n.op,args:f}}var u={};n.hasOwnProperty(t.clause.WHERE)&&(u[t.clause.WHERE]=a(n[t.clause.WHERE],!1)),n.hasOwnProperty(t.clause.HAVING)&&(u[t.clause.HAVING]=a(n[t.clause.HAVING],!0)),(n.hasOwnProperty(t.clause.AGGREGATE)||e.length>0)&&(u[t.clause.AGGREGATE]=(n[t.clause.AGGREGATE]||[]).concat(e));for(var s=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<s.length;c++)n.hasOwnProperty(s[c])&&(u[s[c]]=n[s[c]]);return n.hasOwnProperty(t.clause.FROM)&&(u[t.clause.FROM]=t.rewrite(n[t.clause.FROM])),u};var v=function(n,e){e=e||0;var r=[];if(n.hasOwnProperty(t.clause.WHERE)?n[t.clause.WHERE].op?n[t.clause.WHERE].op in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!n.hasOwnProperty(t.clause.HAVING)||(n[t.clause.HAVING].op?n[t.clause.HAVING].op in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),n.hasOwnProperty(t.clause.GROUP_BY)&&!n.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),n.hasOwnProperty(t.clause.SELECT)){var o=n[t.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(n.hasOwnProperty(t.clause.OFFSET)){var u=n[t.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(n.hasOwnProperty(t.clause.LIMIT)){var s=n[t.clause.LIMIT];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(n){return"Sub-rule "+e+": "+n}))),n.hasOwnProperty(t.clause.FROM)&&(r=r.concat(v(n[t.clause.FROM],e+1))),r},p=function(n,e){var r,u,s,l=e;if(n.hasOwnProperty(t.clause.FROM)&&(o.debug("Evaluating FROM clause:",n[t.clause.FROM]),l=p(n[t.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",n[t.clause.WHERE]),l=i.filter(l,(function(e){return h(e,n[t.clause.WHERE])})),o.debug("Results after WHERE:",l),n.hasOwnProperty(t.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",n[t.clause.AGGREGATE]);var d=function(n,t){var e={};if(void 0===n||!i.isArray(n)||0===n.length)return e["*"]={fieldValues:{},events:t},e;for(var r=i.map(n,(function(n){return n.field})),o=0;o<t.length;o++){for(var a=t[o],u=[],s={},l=0;l<r.length;l++){var d=r[l],h=f(a,d),v=d.join(".");s[v]=h,u.push(encodeURIComponent(v)+"="+encodeURIComponent(c.stringify(h)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:s,events:[]}),e[p].events.push(a)}return e}(n[t.clause.GROUP_BY],l);l=function(n,t){var e=[];return i.each(n,(function(n,r){var o=i.extend({},n.fieldValues),a=t[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=n[t.clause.AGGREGATE],u=d,s={},i.each(u,(function(n,e){s[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in t.aggregateOperators){var c=(a.args&&a.args[0]||{}).field||t.DEFAULT_FIELD,f=t.generateAlias(u,c),l=t.aggregateOperators[u]([c],n.events);s[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),s)),o.debug("Results after AGGREGATE:",l)}n.hasOwnProperty(t.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",n[t.clause.HAVING]),l=i.filter(l,(function(e){return h(e,n[t.clause.HAVING])})),o.debug("Results after HAVING:",l)),n.hasOwnProperty(t.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",n[t.clause.ORDER_BY]),l=function(n,t){return i.isArray(n)?0===n.length?t:t.sort((function(t,e){for(var i=0;i<n.length;i++){var r=n[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(t,a,0),s=f(e,a,0);if(u<s)return-o;if(u>s)return o}return 0})):(a("Rules","groupBy rule must be an array"),t)}(n[t.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var v,g=0;return n.hasOwnProperty(t.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",n[t.clause.OFFSET]),g=Number(n[t.clause.OFFSET])),n.hasOwnProperty(t.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",n[t.clause.LIMIT]),v=g+Number(n[t.clause.LIMIT])),(g>0||!i.isUndefined(v))&&(l=l.slice(g,v),o.debug("Results after OFFSET/LIMIT:",l)),n.hasOwnProperty(t.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",n[t.clause.SELECT]),l=function(n,t){return i.map(t,(function(t){return i.map(n,(function(n){return h(t,n)}))}))}(n[t.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};t.execute=function(n,e){n=t.rewrite(n),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",n,c.stringify(n)),o.debug("Events:",e);var i=v(n);if(i.length>0)throw new Error("Rule "+c.stringify(n)+" has violations: "+i.join("\n"));var a=p(n,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},t.isSatisfied=function(n,e){try{return t.execute(n,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+c.stringify(n)),!1}}},6934:function(n,t,e){n.exports=function(n){n.registerDependency("sources/browser_id",e(8589)),n.registerVisitorProfileProvider(e(7425)),n.registerVisitorProfileProvider(e(2723)),n.registerAudienceMatcher("browser_version",e(7107))}},7107:function(n,t,e){var i=e(4855).y;n.exports={fieldsNeeded:["browserVersion","browserId"],match:function(n,t){var e=t.value,r=n.browserId,o=n.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},7425:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},2723:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},8589:function(n,t,e){var i=e(5412);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}},302:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4739)),n.registerAudienceMatcher("campaign",e(7875))}},7875:function(n,t,e){var i=e(894);n.exports={fieldsNeeded:["campaign"],match:function(n,t){return i.hasMatch(t.value,t.match,n.campaign)}}},4739:function(n,t,e){var i=e(2052);n.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},1805:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8545)),n.registerAudienceMatcher("cookies",e(8307))}},8307:function(n,t,e){var i=e(894);n.exports={fieldsNeeded:["cookies"],match:function(n,t){var e=t.name,r=t.value,o=t.match,a=n.cookies[e];return i.hasMatch(r,o,a)}}},8545:function(n,t,e){var i=e(3232),r=e(6491),o=e(9350).get("stores/audience_data");n.exports={provides:"cookies",isLazy:!0,getter:[function(){var n=r.getAll(),t=o.getFeaturesNeeded("cookies");return i.reduce(n,(function(n,e,r){return i.has(t,r)&&(n[r]=e),n}),{})}]}},1551:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6877));var t=e(3426);n.registerAudienceMatcher("custom_attribute",t),n.registerAudienceMatcher("custom_dimension",t)}},3426:function(n,t,e){var i=e(3232),r=e(894);t.match=function(n,t){var e;return n.custom&&(e=n.custom[t.name]),i.isObject(e)&&(e=e.value),r.hasMatch(t.value,t.match,e)}},6877:function(n,t,e){var i=e(3232),r=e(2425),o=e(3308),a=e(9350).get("stores/dimension_data");n.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(n){return i.reduce(n,(function(n,t,e){var r=e,u=a.getByApiName(e),s=a.getById(e);return i.isObject(t)?(!t.id&&u&&(s=u,r=u.id,i.extend(t,{id:s.segmentId||s.id})),!t.name&&s&&s.apiName&&(t.name=s.apiName),t.id||s||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[r]=t,n):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n)}),{})},shouldTrack:!0}},3848:function(n,t,e){n.exports=function(n){n.registerDependency("sources/device",e(1884)),n.registerVisitorProfileProvider(e(1194)),n.registerAudienceMatcher("device",e(6484))}},6484:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},1194:function(n){n.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(n){return n.getDevice()}]}},1884:function(n,t,e){var i=e(5412);t.getDevice=function(){var n=i.get().device;return"unknown"!==n.model?n.model:"tablet"===n.type?"tablet":n.isMobile?"mobile":"desktop"}},58:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6738)),n.registerAudienceMatcher("device_type",e(4))}},4:function(n){n.exports={fieldsNeeded:["device_type"],match:function(n,t){return n.device_type===t.value}}},6738:function(n,t,e){var i=e(5412);n.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var n=i.get().device;switch(n.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return n.type;default:return"other"}}]}},3822:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7167)),n.registerAudienceMatcher("query",e(6624))}},6624:function(n,t,e){var i=e(3232),r=e(894);t.fieldsNeeded=["queryParams"],t.match=function(n,t){var e=i.find(n.queryParams,(function(n){return n[0]===t.name}));return r.hasMatch(t.value,t.match,e?e[1]:null)}},7167:function(n,t,e){var i=e(2052);n.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},5716:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(3232),o=e(6898),a=e(3308),u=e(4702).Promise,s=e(4755),c=1,f=2,l="itemMetadata",d="recos";function h(n){return n===f}function v(n,t){if(!function(n){return n===c}(t))return d in n?o.parse(n.recos):(a.warn('recommender / Expected key "recos" not found'),[]);var e=new RegExp("^reco(\\d+)$"),i=r.reduce(n,(function(t,i,a){var u=a.match(e);if(u){var s=o.parse(n[a]);s&&r.isObject(s)&&(t[u[1]]=s)}return t}),[]);return r.filter(i,(function(n){return!r.isUndefined(n)}))}function p(n,t){return[n,encodeURIComponent(t)].join("/")}function g(n,t){var e=function(n,t,e){if(!r.isArray(n)||r.isEmpty(n))throw new Error("No "+e+"s available");var i;if(t){if(!(i=r.find(n,{id:t})))throw new Error("No "+e+" found with specified id "+t)}else{if(n.length>1)throw new Error("No "+e+" id specified when there are more than one available.");i=n[0]}return i},i=e(n.getRecommenderServices(),t&&t.recommenderServiceId,"recommender service");return i.idTagName||(i.idTagName="id"),{recommenderService:i,recommender:e(i.recommenders,t&&t.recommenderId,"recommender")}}function m(n){return o.parse(n).data}function _(n,t){return s.request({url:p(n,t)}).then((function(n){var t=m(n.response),e={};return l in t&&(e=o.parse(t.itemMetadata)),e}))}function w(n,t,e,o){var a=!(!o||!o.fetchWithMetadata),u=o&&o.overrideServingUrl||t.servingUrl;return s.request({url:p(u,e)}).then((function(t){var e,u=m(t.response);return e=v(u,n.serviceVersion),a&&h(n.serviceVersion)?y(n,r.map(e,n.idTagName),o).then((function(n){return n=r.map(n,(function(n){return i(n,Error)&&(n={}),delete n.__proto__,n})),r.merge(e,n)})):e}))}function y(n,t,e){var i=e&&e.overrideCatalogUrl||n.catalogUrl;return r.isString(t)?_(i,t):u.all(r.map(t,(function(n){return _(i,n)["catch"]((function(t){return a.warn("recommender / Failed to get recommendations for item:",n,t),t}))})))}function E(n,t,e){var i=g(n,e);return w(i.recommenderService,i.recommender,t,{overrideServingUrl:e&&e.overrideServingUrl,overrideCatalogUrl:e&&e.overrideCatalogUrl,fetchWithMetadata:!0})}function b(n,t,e){var i=g(n,e),r=i.recommenderService,o=i.recommender;if(!h(r.serviceVersion))throw new Error("Recommender service "+r.id+" serves self-contained recos. Use `fetchRecommendations` API call");return w(r,o,t,{overrideServingUrl:e&&e.overrideServingUrl,fetchWithMetadata:!1})}function I(n,t,e){var i=g(n,e).recommenderService;if(!h(i.serviceVersion))throw new Error("Recommender service "+i.id+" serves self-contained recos. Use `fetchRecommendations` API call");return r.isArray(t)&&t.length>20?u.reject("Cannot fetch more than 20 items"):y(i,t,e)}function A(n,t,e,i){return new T(n,t,e,i)}function T(n,t,e,i){this.recommenderSettings=t;var r=g(n,t);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=e,i&&(this.preFilter=i.preFilter,this.canonicalize=i.canonicalize,this.postFilter=i.postFilter),this._globalStore=n,this.reset()}function S(){var n={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return a.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),h(this.recommenderService.serviceVersion)?b(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(t){return n.recosNoMeta=r.filter(t,this.preFilter),n}),this)):E(this._globalStore,this.targetId,this.recommenderSettings).then(r.bind((function(t){return n.recos=r(t).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),n}),this))}function R(n){var t=n.numNeeded,e=n.buffer,o=e.recosNoMeta.length-e.recosNoMetaOffset;if(t<=0||o<=0)return u.resolve(n);var s=Math.max(t,5),c=r.slice(e.recosNoMeta,e.recosNoMetaOffset,e.recosNoMetaOffset+s),f=r.map(c,this.recommenderService.idTagName);e.recosNoMetaOffset+=f.length;var l=n.recosSoFar;return a.debug("recommender / fetching metadata for",f,"from recommender",this.recommender.id),I(this._globalStore,f,this.recommenderSettings).then(r.bind((function(o){o=r.map(o,(function(n){return i(n,Error)?{}:n})),e.recos=r(c).merge(o).map(this.canonicalize).filter(this.postFilter).value();var a=r.slice(e.recos,0,t);return e.recosOffset=a.length,n.recosSoFar=l.concat(a),n.numNeeded-=a.length,n.numNeeded>0?R.call(this,n):n}),this))}T.prototype.reset=function(){this._bufferPromise=null},T.prototype.next=function(n){var t=Math.floor(r.isNumber(n)?n:1);if(t<=0)throw new Error("Invalid argument "+n+". Must be positive integer");this._bufferPromise||(this._bufferPromise=S.call(this));var e=this._bufferPromise.then(r.bind((function(n){var e=[];return n.recos.length-n.recosOffset>0&&(e=n.recos.slice(n.recosOffset,n.recosOffset+t),n.recosOffset+=e.length,t-=e.length),t<=0?{result:e,buffer:n}:R.call(this,{buffer:n,recosSoFar:e,numNeeded:t}).then((function(n){return{result:n.recosSoFar,buffer:n.buffer}}))}),this));return this._bufferPromise=e.then((function(n){return n.buffer})),e.then((function(n){return n.result}))},n.exports=["stores/global",function(n){return{fetchRecommendations:r.partial(E,n),fetchRecommendedItems:r.partial(b,n),fetchItemMetadata:r.partial(I,n),getRecommendationsFetcher:r.partial(A,n)}}]},9654:function(n,t,e){n.exports=function(n){n.registerApiModule("recommender",e(5716))}},1105:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3042)),n.registerAudienceMatcher("referrer",e(2915))}},2915:function(n,t,e){var i=e(2554);t.fieldsNeeded=["referrer"],t.match=function(n,t){return null!==n.referrer&&i(n.referrer,t)}},3042:function(n,t,e){var i=e(1596),r=e(6371);n.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var n=r.getReferrer()||i.getReferrer();return""===n&&(n=null),n}]}},4355:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3290)),n.registerAudienceMatcher("source_type",e(4595))}},4595:function(n,t,e){var i=e(894);t.fieldsNeeded=["source_type"],t.match=function(n,t){return i.hasMatch(t.value,t.match,n.source_type)}},3290:function(n,t,e){var i=e(2052),r=e(1596),o=e(6371),a=e(9455),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];n.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(n,t){var e,s=n(),c=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var n=o.getReferrer()||r.getReferrer(),t=0;t<u.length;t++){var e=u[t];if(n.match(e))return"search"}return n&&a.guessDomain(n)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=c,(!s||"direct"!==e)&&t(c)}}]}},3469:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4710)),n.registerVisitorProfileProvider(e(1716)),n.registerAudienceMatcher("time_and_day",e(4201))}},4201:function(n,t,e){var i=e(3915);t.fieldsNeeded=["currentTimestamp"],t.match=function(n,t){return i.test(t.value,new Date(n.currentTimestamp))}},4710:function(n,t,e){var i=e(1217);n.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},1716:function(n){n.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},3915:function(n,t,e){var i=e(3232);function r(n){var t=n.split(":");if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+n);return 60*parseInt(t[0],10)+parseInt(t[1],10)}t.test=function(n,t){var e=function(n){var t=n.split("_");if(3!==t.length)throw new Error("Invalid time and day string "+n);var e=t[2].split(",");return{start_time:t[0],end_time:t[1],days:e}}(n),o=r(e.start_time),a=r(e.end_time),u=60*t.getHours()+t.getMinutes(),s=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][t.getDay()];return u>=o&&u<=a&&i.includes(e.days,s)}},9285:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(977))}},977:function(n){n.exports={provides:"visitorId",getter:["stores/visitor_id",function(n){return n.getRandomId()}]}},8210:function(n,t,e){var i=e(6898),r=e(3308),o=e(5969),a=e(6371),u=e(6822),s=e(7082),c="google_universal_analytics",f=e(6349);var l=function(n,t){return o.pollFor((function(){return function(n){var t=n.getGlobal("GoogleAnalyticsObject");return t?n.getGlobal(t):null}(s)}),200,50).then((function(e){var i=t.universal_analytics_tracker,r=i?i+".":"",o=t.universal_analytics_slot,u=a.getReferrer();u&&e(r+"set","referrer",u);var s={nonInteraction:!0};s["dimension"+o]=n,e(r+"send","event","Optimizely","Assigned To Campaign",s)}))},d={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(n){var t=n.integrationSettings;if(t&&t[c]&&n.experimentId&&n.variationId){var e={id:n.layerId,name:n.layerName,policy:n.layerPolicy,integrationStringVersion:n.integrationStringVersion},i={id:n.experimentId,name:n.experimentName},o={id:n.variationId,name:n.variationName},a=n.isLayerHoldback,u=f.generateAnalyticsString(e,i,o,a,150,!0);if(u)return l(u,t[c])["catch"]((function(n){r.warn("Tracker for",c,"failed:",n)}))}},serializeSettings:i.stringify,deserializeSettings:i.parse};n.exports=function(n){n.registerAnalyticsTracker("google_universal_analytics",d)}},4949:function(n,t,e){var i=e(3232),r=e(1826),o=e(5662),a=e(9653),u=e(8235).U,s=e(6898),c=e(3308),f=e(6822),l=e(7324),d=e(7082),h=e(4755),v=e(9350),p=(e(1596),e(5562)),g=e(4630),m=e(9358),_=v.get("stores/global"),w=v.get("stores/tracker_optimizely"),y=t.Error=u("OptimizelyTrackerError"),E="client_activation",b="campaign_activated",I="view_activated",A={revenue:{validate:O,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:O,sanitize:Math.floor,excludeFeature:!0},value:{validate:O,sanitize:i.identity}},T="AUTO",S=[function(){return function(n){P(function(n){return i.extend({entity_id:n.pageId,key:n.pageApiName,timestamp:n.timestamp,uuid:n.eventId,type:I},D(n.eventTags))}(n),n.userFeatures,K(n.layerStates))}}],R=[function(){return function(n){!function(n){var t=i.isNull(_.getAnonymizeIP())?void 0:_.getAnonymizeIP(),e={account_id:n.accountId,anonymize_ip:t,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[]};e.revision=n.revision,e.enrich_decisions=!0;var r={session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:[],snapshots:[]},o=K(n.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),Y()}(n),P(function(n){return{entity_id:null,type:E,uuid:n.eventId,timestamp:n.timestamp}}(n),n.userFeatures,K(n.layerStates))}}],k=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}],N=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}];function D(n){var t=function(n,t,e){try{C(t),n[e]=t}catch(i){r.emitError(new y("Bad value for eventTags["+e+"]: "+i.message))}return n},e=i.keys(A),o=i.omit(n,e),a=i.pick(n,e),u=i.reduce(o,t,{}),s=i.reduce(a,(function(n,e,i){var o=A[i];o.excludeFeature||t(u,e,i);try{o.validate(e),n[i]=o.sanitize(e),u[i]=n[i]}catch(a){r.emitError(new y("Bad value for eventMetrics["+i+"]: "+a.message))}return n}),{});return s.tags=u,s}function C(n){if(null==n)throw new Error("Feature value is null");if("object"==typeof n){var t;try{t=s.stringify(n)}catch(e){}throw new Error('Feature value is complex: "'+t)}}function O(n){if(null==n)throw new Error("Metric value is null");if(!i.isNumber(n))throw new Error("Metric value is not numeric")}function x(n){return i.reduce(n,(function(n,t){try{C(t.value),n.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){c.warn("Error evaluating user feature",t,e)}return n}),[])}function P(n,t,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:n,decisions:e}),M(t),Y()}function M(n){var t=x(n);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function L(n){return T}function V(){if(w.canSend()){var n=w.hasEventsToSend(),t=w.hasPreviousBatchesToSend();n||t?(t&&(i.each(w.getPreviousBatches(),F),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),n&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),F(w.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):c.debug("Not sending events because there are no events to send")}else c.debug("Not sending events (holding)")}function F(n){c.debug("Sending ticket:",n);var t=o.generate();h.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:U(n)},t)}function U(n){return i.extend({},i.pick(n,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(n.visitors,z)})}function z(n){return{visitor_id:n.visitor_id,session_id:T,attributes:i.map(n.attributes,B),snapshots:i.map(n.snapshots,G)}}function B(n){return H(n,{entity_id:"e",key:"k",type:"t",value:"v"})}function G(n){var t=n.events;return t=function(n){var t=i.reduce(n,(function(n,t){var e;if(n[e=t.type===I&&i.isEmpty(t.tags)&&i.isEmpty(i.pick(t,i.keys(A)))?t.type:t.uuid]){var r=n[e].timestamp;t.timestamp>r&&(r=t.timestamp),n[e]=i.extend({},n[e],{key:n[e].key+"-"+(t.key||""),entity_id:n[e].entity_id+"-"+t.entity_id,timestamp:r})}else n[e]=t;return n}),{});return i.values(t)}(t),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(n.decisions,j),events:i.map(t,q)}}function j(n){return H(n,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function q(n){return n.key===b&&(n.type=b,delete n.key),H(n,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function H(n,t){return i.reduce(n,(function(n,e,i){return i in t&&(n[t[i]||i]=e),n}),{})}function Y(){if(w.shouldBatch()){if(!w.isPolling()){d.setTimeout((function n(){V(),w.isPolling()&&d.setTimeout(n,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else V()}function K(n){return i.map(n,(function(n){return{campaign_id:n.layerId,experiment_id:n.decision.experimentId,variation_id:n.decision.variationId,is_campaign_holdback:n.decision.isLayerHoldback}}))}function $(){var n=w.getPersistableState();if(n)try{c.debug("Persisting pending batch:",n),l.persistTrackerOptimizelyData(n),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(t){c.debug("Failed to persist pending batch:",t)}}var W={trackLayerDecision:function(n){n.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(n){var t=x(n.userFeatures),e={account_id:n.accountId,anonymize_ip:n.anonymizeIP,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[{session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:n.layerId,experiment_id:n.experimentId,variation_id:n.variationId,is_campaign_holdback:n.isLayerHoldback}],events:[{uuid:n.decisionId,entity_id:n.layerId,timestamp:n.timestamp,type:b}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),Y()}(n):function(n){var t={entity_id:n.layerId,type:b,uuid:n.decisionId,timestamp:n.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:K(n.layerStates)}),M(n.userFeatures),Y()}(n)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:S,onClientActivation:R,onClickEvent:N,onCustomEvent:k};n.exports=function(n){n.registerAnalyticsTracker("optimizely",W),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),w.isPolling()||V()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var t=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){w.observe($),p.off(t)}})}},6742:function(n,t,e){var i=e(3209),r={match:function(n,t){return i.apply(t.value)}};n.exports=function(n){n.registerViewMatcher("custom_code",r)}},9262:function(n,t,e){n.exports=function(n){n.registerViewProvider(e(6599)),n.registerViewMatcher("url",e(9451))}},9451:function(n,t,e){var i=e(2554);n.exports={fieldsNeeded:["url"],match:function(n,t){return i(n.url,t)}}},6599:function(n,t,e){var i=e(2052);n.exports={provides:"url",getter:[function(){return i.getUrl()}]}},8026:function(n,t,e){var i=e(1596),r=e(2425),o=e(5562),a=e(8818),u=e(4247),s={token:void 0,setUpObserver:function(){a.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};n.exports=function(n){i.isReady()?s.setUpObserver():i.addReadyHandler(s.setUpObserver),n.registerViewTrigger("DOMChanged",s)}},6571:function(n,t,e){var i=e(3232),r=e(9653),o=e(9350),a=e(2425),u=e(5562),s=e(9358),c=o.get("stores/history"),f=e(3308),l=e(4702).Promise,d=e(4247),h=e(7082);function v(n){u.emit({type:"viewTrigger",name:"URLChanged",data:{source:n,newURL:h.getHref()}},!0)}n.exports=function(n){var t;t=function(){var n=c.getOriginalPushState().apply(this,arguments);return l.resolve().then((function(){v("pushState")}))["catch"]((function(n){f.error("Error while wrapPushState: ",n)})),n},s.dispatch(r.ENSURE_ORIGINAL_PUSHSTATE),h.getGlobal("history").pushState=t,function(){var n=function(){var n=c.getOriginalReplaceState().apply(this,arguments);return l.resolve().then((function(){v("replaceState")}))["catch"]((function(n){f.error("Error while wrapReplaceState: ",n)})),n};s.dispatch(r.ENSURE_ORIGINAL_REPLACESTATE),h.getGlobal("history").replaceState=n}(),h.addEventListener("popstate",p,!1),h.addEventListener("hashchange",g,!1),u.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){d.getViewsAndActivate(a.ViewActivationTypes.URLChanged)}}),n.registerViewTrigger("URLChanged")};var p=i.partial(v,"popstate"),g=i.partial(v,"hashchange")},127:function(n,t,e){var i=e(3232),r=e(9350),o=e(5562),a=e(4630),u=e(7082),s=r.get("stores/directive"),c="optimizelyPreview",f=function(n){u.getGlobal(c).push(n)};t.initialize=function(n){s.isSlave()&&function(n){var t=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===n&&(t=!0)})),!t)throw new Error("Preview projectId: "+n+" does not match expected")}(n),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},t.setupPreviewGlobal=function(){u.getGlobal(c)||u.setGlobal(c,[])},t.pushToPreviewGlobal=function(n){f(n)}},5715:function(n,t,e){var i=e(3232),r=e(5662),o=e(1115),a=e(7201),u=e(1217),s=e(1596),c=e(9358),f=e(7075).mM,l=e(3308),d=e(4593),h=e(4702).Promise,v=e(7324),p=e(7082),g=e(4755),m=e(9653),_=e(2425),w=e(9350),y=w.get("stores/async_request"),E=w.get("stores/client_metadata"),b=w.get("stores/global"),I=w.get("stores/rum"),A=w.get("stores/performance"),T=(w.get("stores/xdomain"),w.get("stores/view_data")),S=e(9414),R="https://rum.optimizely.com/rum",k="1.0";function N(n){return i.isEmpty(n)?h.resolve():(t=function(){return g.request({url:R,method:"POST",data:n,withCredentials:!0}).then((function(n){return o.resolveRequest("RUM_FIRST_BEACON",n),n}))["catch"]((function(n){throw l.error("POST to client-rum failed:",n),o.rejectRequest("RUM_FIRST_BEACON",n),n}))},(e=y.getPromise("RUM_FIRST_BEACON"))?e.then(t):o.makeAsyncRequest("RUM_FIRST_BEACON",t));var t,e}function D(){try{return!s.querySelector("body")}catch(n){return null}}function C(){var n=p.getGlobal("performance"),t=n?n.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=S.get("state").getActiveExperimentIds(),u=I.getFeaturesNeededData(),c=s.parseUri(I.getScriptSrc()),l=I.getRumData()||{},h=l.extras||{};i.assign(h,{apiCalls:r,DOMObservationData:o,paintTimings:x(),activeExperimentIds:a,numPages:T.getNumberOfPages(),snippet:{scheme:c.protocol.slice(0,-1),host:c.host,path:c.pathname},networkInfo:O(),experimental:b.getExperimental(),featuresNeeded:u,beacon:{cjsOnload:!0}});var g=p.getGlobal("Prototype");g&&!i.isUndefined(g.Version)&&(h.prototypeJS=g.Version);var m={id:I.getRumId(),v:k,project:b.getSnippetId()||b.getProjectId(),navigationTimings:t,userTimings:e,xd:!1,apis:i.keys(r),extras:h,sampleRate:l.sampleRate};(function(){var n=f.keys(),t=i.filter(i.map(n,(function(n){var t=v.getStorageKeyFromKey(n);return t?{key:n,isForeign:v.isForeignKey(n),category:t,size:n.length+f.getItem(n).length}:null}))),e=i.reduce(t,(function(n,t){var e=t.key,i=v.getIdFromKey(e);return i?((t.isForeign?n.foreign:n.local)[i]=!0,n):n}),{local:{},foreign:{}}),r=i.chain(t).filter({isForeign:!0}).reduce((function(n,t){return n[t.key.split("_")[0]]=!0,n}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(t,(function(n){var t=n.isForeign?"foreign":"local";o[t]+=n.size,a[t][n.category]||(a[t][n.category]=0),a[t][n.category]+=n.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(n){return i.assign(u,{storageEstimate:n})}))})().then((function(n){N(i.assign(m,{lsMetrics:n}))}))}function O(){var n=p.getGlobal("navigator");if(n&&n.connection)return i.pick(n.connection,["downlink","rtt","effectiveType"])}function x(){var n=p.getGlobal("performance");if(n)try{var t=n.getEntriesByType("paint");if(i.isEmpty(t))return;return i.reduce(t,(function(n,t){return n[t.name]=Math.round(t.startTime),n}),{})}catch(e){return}}t.initialize=function(){var n,t=r.generate().replace(/-/g,"");n=Math.random()<.01;var e=function(){var n=s.getCurrentScript();if(n)return n.src}();c.dispatch(m.SET_RUM_DATA,{id:t,RumHost:R,inRumSample:n,src:e,data:{id:t,sync:D(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:s.getReadyState()}}})},t.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var n=I.getRumData().timebase;c.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(n||0)}})}))}catch(n){return}}(),s.isLoaded()?p.setTimeout(C,3e3):p.addEventListener("load",C),new h((function(n,t){p.setTimeout((function(){(function(){!function(){var n={id:I.getRumId(),v:k,account:b.getAccountId(),project:b.getSnippetId()||b.getProjectId(),snippet:b.getSnippetId(),revision:b.getRevision(),clientVersion:E.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},t=v.getPersistedBehaviorEventCount(),e=a.getEventCount();n.numBehaviorEvents=e;var r=e-t;i.extend(n.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(n,function(){var n=p.getGlobal("performance");if(!n)return;var t,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=n.getEntriesByName(e);r.length>0&&(t=r[0])}if(!t){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=n.getEntriesByType("resource");t=i.find(a,(function(n){return o.test(n.name)}))}if(t)return i.mapValues(_.ResourceTimingAttributes,(function(n,e){var i=t[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),c.dispatch(m.SET_RUM_DATA,{data:n})}();var n=I.getRumData(),t=A.getMarks()||{};return n.extras=n.extras||{},n.extras.beacon={cjsTimeout:!0},n.userTimings=t,N(n=i.pickBy(n,(function(n){return!i.isUndefined(n)})))})().then(n,t)}),3e3)}))["catch"]((function(n){l.warn("RUM / Error sending data:",n)}))):h.resolve()}},8206:function(){}},__webpack_module_cache__={};function __webpack_require__(n){var t=__webpack_module_cache__[n];if(t!==undefined)return t.exports;var e=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n};var __webpack_exports__={};!function(){try{!function(){var n=function(n){var t=[__webpack_require__(9285)];t.push(__webpack_require__(6746)),t.push(__webpack_require__(3395)),t.push(__webpack_require__(1643)),t.push(__webpack_require__(371)),t.push(__webpack_require__(6934)),t.push(__webpack_require__(302)),t.push(__webpack_require__(1805)),t.push(__webpack_require__(1551)),t.push(__webpack_require__(3848)),t.push(__webpack_require__(58)),t.push(__webpack_require__(3822)),t.push(__webpack_require__(1105)),t.push(__webpack_require__(4355)),t.push(__webpack_require__(3469)),t.push(__webpack_require__(8210)),t.push(__webpack_require__(4949)),t.push(__webpack_require__(9262)),t.push(__webpack_require__(6742)),t.push(__webpack_require__(8026)),t.push(__webpack_require__(6571)),t.push(__webpack_require__(9654)),t.push(__webpack_require__(4003)),t.push(__webpack_require__(3813)),t.push(__webpack_require__(5166)),t.push(__webpack_require__(4012)),t.push(__webpack_require__(795)),f.initializePlugins(t)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(5715).initialize();var t=__webpack_require__(5519),e=__webpack_require__(3308),i=__webpack_require__(9350);__webpack_require__(9432);var r=i.get("stores/directive");if(!__webpack_require__(4755).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(644),u=__webpack_require__(474),s=__webpack_require__(4452),c={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["15411440095"], "experiments": [{"weightDistributions": [{"entityId": "16937630280", "endOfRange": 10000}], "audienceName": "RSO Shared Prime Exclusion", "name": "BHFOS-5053 - RSO - Shared: Prime excluding specific Affiliates - V2 - no jQuery", "bucketingStrategy": null, "variations": [{"id": "16915803817", "actions": [], "name": "Original"}, {"id": "16937630280", "actions": [{"viewId": "15411440095", "changes": [{"name": "RSO - Modal with multiple bullets - V2 - BHFOS-5053", "config": {"bullet_1": "<b>Unlimited</b> websites and domains", "bullet_3": "<b>24/7</b> expert support via phone or chat", "bullet_2": "<b>30-Day</b> money-back guarantee", "headline": "Special Sign-Up Offer", "flow": "rso", "cpanel_package": "prime", "imageSrc": "https://bluehost-cdn.com/media/shared/signup/happy-people.png", "show_modal_once": "true", "apply_to_currency": "all", "secondary": "Get additional savings when you sign up today!"}, "id": "F52F85FA-F007-46DE-BED9-5D01ECD3F8F7", "dependencies": [], "type": "widget", "widget_id": "16937313236"}]}], "name": "Variation #1"}], "audienceIds": ["and", "14653300201"], "changes": null, "id": "16908163238", "integrationSettings": null}], "id": "16902463346", "weightDistributions": null, "name": "BHFOS-5053 - RSO - Shared: Prime excluding specific Affiliates - V2 - no jQuery", "groupId": null, "commitId": "17166390473", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["14641790155", "15039871526"], "experiments": [{"weightDistributions": [{"entityId": "16927551585", "endOfRange": 10000}], "audienceName": "?cpanel_plan=blog", "name": "BHFOS-5053 - RSO - Domainless Signup - V2 - no jQuery", "bucketingStrategy": null, "variations": [{"id": "16925371811", "actions": [], "name": "Original"}, {"id": "16927551585", "actions": [{"viewId": "14641790155", "changes": [{"name": "RSO - Exit Intent - Heading with Paragraph - V2 - BHFOS-5053", "config": {"title": "Choose a Free Domain Later", "image": "https://sb.monetate.net/img/1/406/815443.png", "paragraph": "Choose later! Sign up now and receive a FREE domain credit!", "CTAtext": "Choose Free Domain Later", "show_modal_once": "true", "heading": "Can't decide on a domain name?"}, "widget_id": "16894662954", "dependencies": [], "type": "widget", "id": "5FBFDFE8-1AE8-4928-A41E-59DB44BCCBD3"}]}], "name": "Variation #1"}], "audienceIds": ["and", "15018920510"], "changes": null, "id": "16927232810", "integrationSettings": null}], "id": "16908121456", "weightDistributions": null, "name": "BHFOS-5053 - RSO - Domainless Signup - V2 - no jQuery", "groupId": null, "commitId": "17162200467", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["15403230641"], "experiments": [{"weightDistributions": [{"entityId": "16925724374", "endOfRange": 10000}], "audienceName": "RSO Shared Plus Exclusion", "name": "BHFOS-5053 - RSO - Shared: Plus excluding specific Affiliates - V2 - no jQuery", "bucketingStrategy": null, "variations": [{"id": "16925682054", "actions": [], "name": "Original"}, {"id": "16925724374", "actions": [{"viewId": "15403230641", "changes": [{"name": "RSO - Modal with multiple bullets - V2 - BHFOS-5053", "config": {"bullet_1": "<b>FREE</b> Domain Privacy", "bullet_3": "", "bullet_2": "Unbeatable hosting savings!", "headline": "Special Sign-Up Offer", "flow": "rso", "cpanel_package": "plus", "imageSrc": "https://bluehost-cdn.com/media/shared/signup/happy-people.png", "show_modal_once": "true", "apply_to_currency": "all", "secondary": "Special Bonus: Domain Privacy Free!"}, "id": "33EB266A-F528-4C63-ACC5-7FFF64EFE764", "dependencies": [], "type": "widget", "widget_id": "16937313236"}]}], "name": "Variation #1"}], "audienceIds": ["and", "14635800111"], "changes": null, "id": "16924070594", "integrationSettings": null}], "id": "16917243318", "weightDistributions": null, "name": "BHFOS-5053 - RSO - Shared: Plus excluding specific Affiliates - V2 - no jQuery", "groupId": null, "commitId": "17132441914", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["15419280543"], "experiments": [{"weightDistributions": [{"entityId": "16910261571", "endOfRange": 10000}], "audienceName": "RSO Shared Pro Exclusion", "name": "BHFOS-5053 - RSO - Shared: Pro excluding specific Affiliates - V2 - no jQuery", "bucketingStrategy": null, "variations": [{"id": "16933392069", "actions": [], "name": "Original"}, {"id": "16910261571", "actions": [{"viewId": "15419280543", "changes": [{"name": "RSO - Modal with multiple bullets - V2 - BHFOS-5053", "config": {"bullet_1": "<b>FREE</b> Domain Privacy", "bullet_3": "Unbeatable hosting savings!", "bullet_2": "<b>FREE</b> Site Backup", "headline": "Special Sign-Up Offer", "flow": "rso", "cpanel_package": "pro", "imageSrc": "https://bluehost-cdn.com/media/shared/signup/happy-people.png", "show_modal_once": "true", "apply_to_currency": "all", "secondary": "Special Bonus: Domain Privacy + Site Backups Free"}, "id": "AF853C59-7285-4F06-B9FB-71E5ECBAB632", "dependencies": [], "type": "widget", "widget_id": "16937313236"}]}], "name": "Variation #1"}], "audienceIds": ["and", "14623620469"], "changes": null, "id": "16900321779", "integrationSettings": null}], "id": "16935560205", "weightDistributions": null, "name": "BHFOS-5053 - RSO - Shared: Pro excluding specific Affiliates - V2 - no jQuery", "groupId": null, "commitId": "17153170711", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 1, "viewIds": ["15372920173"], "experiments": [{"weightDistributions": [{"entityId": "17597510039", "endOfRange": 10000}], "audienceName": "MTA-386 Shared: Basic RSO $2.65 All Traffic 100%", "name": "MTA-386 20200219 Shared: Basic RSO $2.65 All Traffic 100%", "bucketingStrategy": null, "variations": [{"id": "17599390088", "actions": [], "name": "Original"}, {"id": "17597510039", "actions": [{"viewId": "15372920173", "changes": [{"name": "RSO - Modal with multiple bullets - V2 - BHFOS-5053", "config": {"bullet_1": "<b>FREE</b> Domain registration", "bullet_3": "", "bullet_2": "Unbeatable hosting savings!", "headline": "Special Sign-Up Offer", "flow": "rso3", "cpanel_package": "basic", "imageSrc": "https://bluehost-cdn.com/media/shared/signup/happy-people.png", "show_modal_once": "true", "apply_to_currency": "all", "secondary": "Additional savings when you sign up today"}, "id": "d19fd8e4c4ff4894a69389418075537b", "dependencies": [], "type": "widget", "widget_id": "16937313236"}]}], "name": "Variation #1"}], "audienceIds": ["and", "17584780020"], "changes": null, "id": "17582240059", "integrationSettings": null}], "id": "17582240058", "weightDistributions": null, "name": "MTA-386 20200219 Shared: Basic RSO $2.65 All Traffic 100%", "groupId": null, "commitId": "17612640253", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17912203453"], "experiments": [{"weightDistributions": [{"entityId": "17914741367", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "BHFOS-6210 - Banner for users redirected from Typepad", "bucketingStrategy": null, "variations": [{"id": "17922781426", "actions": [], "name": "Original"}, {"id": "17914741367", "actions": [{"viewId": "17912203453", "changes": [{"value": "<style>.site-banner {\n  display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "7F0050E3-6189-444E-94D6-A7AEF083EB12"}, {"name": "BHFOS-6210 - Top banner w/ option for redirected brand", "config": {"useParam": "true", "bgColor": "rgba(106, 206, 38, 1)", "txtColor": "rgba(255, 255, 255, 1)", "brandRedirect": "typepad", "text": "Welcome Typepad customers to our partner brand, Bluehost!"}, "widget_id": "17935433218", "dependencies": [], "type": "widget", "id": "375FB794-027F-4ACE-B1E6-C8A9F0C7E293"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17947431167", "integrationSettings": null}], "id": "17936390794", "weightDistributions": null, "name": "BHFOS-6210 - Banner for users redirected from Typepad", "groupId": null, "commitId": "17947742294", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18026550491"], "experiments": [{"weightDistributions": [{"entityId": "18143280383", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "BHFOS-6504 - 13410400318 - Receipt Page Updates", "bucketingStrategy": null, "variations": [{"id": "18132000138", "actions": [], "name": "Original"}, {"id": "18143280383", "actions": [{"viewId": "18026550491", "changes": [{"dependencies": [], "type": "custom_code", "id": "3260EE3D-D036-4EAE-96AE-8E4F2B78173E", "value": function($){var utils = optimizely.get('utils');

// update various sections of text on the page
function updatePage() {
  // update the main heading
  // there are technically two H1s on the page
  var heading = document.querySelector('h1[data-cy]');
  var headingText = 'Success! Next, let\'s create your account.';

  heading.innerText = headingText;

  // get the paragraph right after the H1
  var paragraph = document.querySelector('h1 + p');
  var paragraphText = 'It just takes a few seconds. All you have to do is pick a username and password so you can log in to Bluehost.';

  // going to need this email address for later
  var email = paragraph.querySelector('.link_blue');

  paragraph.innerText = paragraphText;

  // get text above CTA and hide it
  var textAboveCta = document.querySelector('img + p');

  textAboveCta.style.display = 'none';

  // get and update the CTA text
  var cta = document.querySelector('.btn_flat');

  cta.style.marginTop = '20px';
  if(cta.innerText=='Create Account') cta.innerText = 'Create your account';

  // Add copy under the CTA
  var copyUnderCta = 'Your receipt is below (we also emailed a copy to <span class="link_blue">' + email.innerText + '</span>).';
  var newParagraph = document.createElement('p');

  newParagraph.innerHTML = copyUnderCta;
  cta.insertAdjacentElement('afterend', newParagraph);
}

// wait for element near the bottom of the page then run updatePage()
utils.waitForElement('.success_disclaimer').then(function(elem) {
  updatePage();
});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "18145460429", "integrationSettings": null}], "id": "18130150430", "weightDistributions": null, "name": "BHFOS-6504 - 13410400318 - Receipt Page Updates", "groupId": null, "commitId": "21336471812", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18140451775", "18154250465", "18164971403", "18177071386"], "experiments": [{"weightDistributions": [{"entityId": "18154210355", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "BHFOS-6069 - 13410400318 - Simple Navigation on HFE", "bucketingStrategy": null, "variations": [{"id": "18153441836", "actions": [], "name": "Original"}, {"id": "18154210355", "actions": [{"viewId": "18164971403", "changes": [{"dependencies": [], "type": "custom_code", "id": "BB2284E6-D382-492E-861A-ECFE52A4A8A6", "value": function($){// get optimizely utils
var utils = optimizely.get('utils');

// wait for the header
utils.waitForElement('#top').then(function(elem) {

  // grab the main desktop nav
  var mainNav = elem.querySelector('.main-nav');

  mainNav.style.display = 'none';

  // mobile nav links are all in one giant list
  // get the mobile nav links
  var mobileNavItems = document.querySelectorAll('.mobile-nav li');

  // first list item is the logo
  // hide first set of actual nav items: WordPress
  mobileNavItems[1].style.display = 'none';

  // the items are in dropdowns
  // next in line is the 6th item: Hosting
  mobileNavItems[5].style.display = 'none';

  // next in line is the 10th item: Domains
  mobileNavItems[9].style.display = 'none';

  // next in line: Professional Services
  mobileNavItems[10].style.display = 'none';

  // wait more dropdowns: Email
  mobileNavItems[13].style.display = 'none';

  // no dropdowns: Affiliates
  mobileNavItems[14].style.display = 'none';
});
}}]}, {"viewId": "18140451775", "changes": [{"dependencies": [], "type": "custom_code", "id": "6FE1AF5B-8C4A-4F73-A64E-45F283656ECC", "value": function($){// get optimizely utils
var utils = optimizely.get('utils');

// wait for the header
utils.waitForElement('#top').then(function(elem) {

  // grab the main desktop nav
  var mainNav = elem.querySelector('.main-nav');

  mainNav.style.display = 'none';

  // mobile nav links are all in one giant list
  // get the mobile nav links
  var mobileNavItems = document.querySelectorAll('.mobile-nav li');

  // first list item is the logo
  // hide first set of actual nav items: WordPress
  mobileNavItems[1].style.display = 'none';

  // the items are in dropdowns
  // next in line is the 6th item: Hosting
  mobileNavItems[5].style.display = 'none';

  // next in line is the 10th item: Domains
  mobileNavItems[9].style.display = 'none';

  // next in line: Professional Services
  mobileNavItems[10].style.display = 'none';

  // wait more dropdowns: Email
  mobileNavItems[13].style.display = 'none';

  // no dropdowns: Affiliates
  mobileNavItems[14].style.display = 'none';
});
}}]}, {"viewId": "18177071386", "changes": [{"dependencies": [], "type": "custom_code", "id": "DFC713CC-971D-40A0-8FFF-8D1223CECAFB", "value": function($){// get optimizely utils
var utils = optimizely.get('utils');

// wait for the header
utils.waitForElement('#top').then(function(elem) {

  // grab the main desktop nav
  var mainNav = elem.querySelector('.main-nav');

  mainNav.style.display = 'none';

  // mobile nav links are all in one giant list
  // get the mobile nav links
  var mobileNavItems = document.querySelectorAll('.mobile-nav li');

  // first list item is the logo
  // hide first set of actual nav items: WordPress
  mobileNavItems[1].style.display = 'none';

  // the items are in dropdowns
  // next in line is the 6th item: Hosting
  mobileNavItems[5].style.display = 'none';

  // next in line is the 10th item: Domains
  mobileNavItems[9].style.display = 'none';

  // next in line: Professional Services
  mobileNavItems[10].style.display = 'none';

  // wait more dropdowns: Email
  mobileNavItems[13].style.display = 'none';

  // no dropdowns: Affiliates
  mobileNavItems[14].style.display = 'none';
});
}}]}, {"viewId": "18154250465", "changes": [{"dependencies": [], "type": "custom_code", "id": "A327A1CA-1F84-4B86-B83C-737136C2269A", "value": function($){// get optimizely utils
var utils = optimizely.get('utils');

// wait for the header
utils.waitForElement('#top').then(function(elem) {

  // grab the main desktop nav
  var mainNav = elem.querySelector('.main-nav');

  mainNav.style.display = 'none';

  // mobile nav links are all in one giant list
  // get the mobile nav links
  var mobileNavItems = document.querySelectorAll('.mobile-nav li');

  // first list item is the logo
  // hide first set of actual nav items: WordPress
  mobileNavItems[1].style.display = 'none';

  // the items are in dropdowns
  // next in line is the 6th item: Hosting
  mobileNavItems[5].style.display = 'none';

  // next in line is the 10th item: Domains
  mobileNavItems[9].style.display = 'none';

  // next in line: Professional Services
  mobileNavItems[10].style.display = 'none';

  // wait more dropdowns: Email
  mobileNavItems[13].style.display = 'none';

  // no dropdowns: Affiliates
  mobileNavItems[14].style.display = 'none';
});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "18136872639", "integrationSettings": null}], "id": "18154250430", "weightDistributions": null, "name": "BHFOS-6069 - 13410400318 - Simple Navigation on HFE", "groupId": null, "commitId": "18220490800", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18829043933"], "experiments": [{"weightDistributions": [{"entityId": "18774694797", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "BHFOS-7813 - 2 CTA free trial test", "bucketingStrategy": null, "variations": [{"id": "18792165648", "actions": [], "name": "Original"}, {"id": "18774694797", "actions": [{"viewId": "18829043933", "changes": [{"dependencies": [], "type": "custom_code", "id": "3BA75BE5-EC5D-456F-ADED-8DF1D45B4E15", "value": function($){var utils = optimizely.get('utils');

var flowFieldSelector = 'input[name="flow"]';
var targetFlow = 'domainDFETwoCta';

// updates the flow hidden input on the domains page
function updateField(target, flow) {
	target.value = flow;
}

utils.waitForElement('.domain-search').then(function(element) {
  	var formFields = document.querySelectorAll(flowFieldSelector);
  
  	formFields.forEach(function(field) {
      // updates the 'flow' hidden input field on the domain page
      updateField(field, targetFlow);
    });

});
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "18794095334", "integrationSettings": null}], "id": "18792093271", "weightDistributions": null, "name": "BHFOS-7813 - 2 CTA free trial test", "groupId": null, "commitId": "19069745336", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20916153196"], "experiments": [{"weightDistributions": [{"entityId": "20911935404", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-10915 - RSO - Legacy - v1", "bucketingStrategy": null, "variations": [{"id": "20934840105", "actions": [], "name": "Original"}, {"id": "20911935404", "actions": [{"viewId": "20916153196", "changes": [{"name": "BHFOS-10915 - RSO - Legacy RSO", "config": {"image": "//cdn.optimizely.com/img/2125675982/4e9af8f3514940498211d8c04535b4d6.svg", "modalBG": "rgba(255, 255, 255, 1)", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "domainAndTerm": "true", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": ".page-billing", "isMatchingTerm": "true", "headline": "Don't lose out on your domain name.", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "builder_plus", "show_modal_once": "true", "buttonBG": "rgba(44, 118, 220, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "offerOneMonth": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "Claim it before it's gone.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "paragraph": "Pick a monthly plan to get started.", "ctaText": "Get Started", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all", "isDomainRequired": "true"}, "widget_id": "20963010072", "dependencies": [], "type": "widget", "id": "A5B62DD2-FF1E-4D96-B52F-CD043FC0E6DA"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "20896163333", "integrationSettings": null}], "id": "20908194332", "weightDistributions": null, "name": "BHFOS-10915 - RSO - Legacy - v1", "groupId": null, "commitId": "20983150978", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20909855355"], "experiments": [{"weightDistributions": [{"entityId": "20903745765", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-10915 - RSO - Legacy - v3", "bucketingStrategy": null, "variations": [{"id": "20921124619", "actions": [], "name": "Original"}, {"id": "20903745765", "actions": [{"viewId": "20909855355", "changes": [{"name": "BHFOS-10915 - RSO - Legacy RSO", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "modalBG": "rgba(255, 255, 255, 1)", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "domainAndTerm": "false", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": ".page-billing", "isMatchingTerm": "false", "headline": "Last chance for monthly billing.", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "builder_plus", "show_modal_once": "true", "buttonBG": "rgba(44, 118, 220, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "true", "offerOneMonth": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "It's our lowest price on our shortest term.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "rso1", "paragraph": "Pick a monthly plan to get started.", "ctaText": "Get Started", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all", "isDomainRequired": "false"}, "widget_id": "20963010072", "dependencies": [], "type": "widget", "id": "c730828851ad435e8db4732e19b38f8a"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "20915414328", "integrationSettings": null}], "id": "20917324875", "weightDistributions": null, "name": "BHFOS-10915 - RSO - Legacy - v3", "groupId": null, "commitId": "20989050865", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20913704419"], "experiments": [{"weightDistributions": [{"entityId": "20896503892", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-10915 - RSO - Legacy - v2", "bucketingStrategy": null, "variations": [{"id": "20900584257", "actions": [], "name": "Original"}, {"id": "20896503892", "actions": [{"viewId": "20913704419", "changes": [{"name": "BHFOS-10915 - RSO - Legacy RSO", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "modalBG": "rgba(255, 255, 255, 1)", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Start building your site today using a temporary domain name and get a real domain name when you are ready</li>", "domainAndTerm": "false", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": ".page-billing", "isMatchingTerm": "true", "headline": "Last chance to get the lowest price.", "termAndNoDomain": "true", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "builder_plus", "show_modal_once": "true", "buttonBG": "rgba(44, 118, 220, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "offerOneMonth": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "Pick a monthly plan to get started.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "paragraph": "Pick a monthly plan to get started.", "ctaText": "Get Started", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all", "isDomainRequired": "false"}, "widget_id": "20963010072", "dependencies": [], "type": "widget", "id": "7bb80c274eba4254a7c33aa61a2c022b"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "20902265642", "integrationSettings": null}], "id": "20925113746", "weightDistributions": null, "name": "BHFOS-10915 - RSO - Legacy - v2", "groupId": null, "commitId": "20984970898", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20931384129"], "experiments": [{"weightDistributions": [{"entityId": "20918353648", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-10915 - RSO - Legacy - v4", "bucketingStrategy": null, "variations": [{"id": "20904125028", "actions": [], "name": "Original"}, {"id": "20918353648", "actions": [{"viewId": "20931384129", "changes": [{"name": "BHFOS-10915 - RSO - Legacy RSO", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "modalBG": "rgba(255, 255, 255, 1)", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "domainAndTerm": "false", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": ".page-billing", "isMatchingTerm": "false", "headline": "Last chance for monthly billing.", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "builder_plus", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(44, 118, 220, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "offerOneMonth": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "It's our lowest price on our shortest term.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "rso1", "paragraph": "Pick a monthly plan to get started.", "ctaText": "Get Started", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all", "isDomainRequired": "false"}, "widget_id": "20963010072", "dependencies": [], "type": "widget", "id": "7ebb1b53d19c43bda016be979a626ec3"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "20937673147", "integrationSettings": null}], "id": "20927145584", "weightDistributions": null, "name": "BHFOS-10915 - RSO - Legacy - v4", "groupId": null, "commitId": "20999260033", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20975031572"], "experiments": [{"weightDistributions": [{"entityId": "20960321342", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie builderPlus - no domain in cart", "bucketingStrategy": null, "variations": [{"id": "20961730750", "actions": [], "name": "Original"}, {"id": "20960321342", "actions": [{"viewId": "20975031572", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "It's our lowest price on our shortest term.", "stepAfterDomain": "2", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Last chance for monthly billing.", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "builder_plus", "show_modal_once": "true", "noTermAndHasDomain": "false", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Get Started", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "widget_id": "20968381272", "dependencies": [], "type": "widget", "id": "a804a95120094758a81d141cfef80683"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "20981101219", "integrationSettings": null}], "id": "20954301348", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie builderPlus - no domain in cart", "groupId": null, "commitId": "21643110231", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20993151267"], "experiments": [{"weightDistributions": [{"entityId": "20995061070", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie builderPlus - domain in cart", "bucketingStrategy": null, "variations": [{"id": "20968861043", "actions": [], "name": "Original"}, {"id": "20995061070", "actions": [{"viewId": "20993151267", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "modalBG": "rgba(255, 255, 255, 1)", "stepAfterDomain": "2", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Last chance for monthly billing.", "ctaText": "Get Started", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "productFamily": "cpanel", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "planPackage": "builder_plus", "noTermNoDomain": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "It's our lowest price on our shortest term.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "isReggieClient": "reggie", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "widget_id": "20968381272", "dependencies": [], "type": "widget", "id": "d8b3141b86d14f578ad32551e4dd71af"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "20972560150", "integrationSettings": null}], "id": "20972001274", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie builderPlus - domain in cart", "groupId": null, "commitId": "21627860612", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21510940121"], "experiments": [{"weightDistributions": [{"entityId": "21507550547", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "BHFOS-12065 - Builder flows - RSO - step 1", "bucketingStrategy": null, "variations": [{"id": "21490260786", "actions": [], "name": "Original"}, {"id": "21507550547", "actions": [{"viewId": "21510940121", "changes": [{"name": "RSO - Reggie HFE & Builder - Heading with Paragraph - BHFOS-12065", "config": {"title": "Choose a FREE Domain Later!", "image": "https://sb.monetate.net/img/1/406/815443.png", "imageBg": "rgba(246, 248, 251, 0.017)", "paragraph": "Choose later! Sign up now and receive a FREE domain credit!", "CTAtext": "Choose Free Domain Later", "show_modal_once": "true", "heading": "Can't decide on a domain name?"}, "widget_id": "21503300872", "dependencies": [], "type": "widget", "id": "6E9749B2-61AD-48F7-BDED-5E5E94679AF4"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "21495350852", "integrationSettings": null}], "id": "21470251019", "weightDistributions": null, "name": "BHFOS-12065 - Builder flows - RSO - step 1", "groupId": null, "commitId": "21580321298", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21567840722"], "experiments": [{"weightDistributions": [{"entityId": "21552280878", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie builderChoicePlus - no domain in cart", "bucketingStrategy": null, "variations": [{"id": "21548700889", "actions": [], "name": "Original"}, {"id": "21552280878", "actions": [{"viewId": "21567840722", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "modalBG": "rgba(255, 255, 255, 1)", "stepAfterDomain": "2", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Last chance for monthly billing.", "ctaText": "Get Started", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "productFamily": "cpanel", "show_modal_once": "true", "noTermAndHasDomain": "false", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "planPackage": "builder_choice_plus", "noTermNoDomain": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "It's our lowest price on our shortest term.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "isReggieClient": "reggie", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "9732b43cd34a43c58bfaf8c9f60ccf54", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21556151104", "integrationSettings": null}], "id": "21568110748", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie builderChoicePlus - no domain in cart", "groupId": null, "commitId": "21633950336", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21557890739"], "experiments": [{"weightDistributions": [{"entityId": "21552241778", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie builderChoicePlus - domain in cart", "bucketingStrategy": null, "variations": [{"id": "21561681200", "actions": [], "name": "Original"}, {"id": "21552241778", "actions": [{"viewId": "21557890739", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "modalBG": "rgba(255, 255, 255, 1)", "stepAfterDomain": "2", "featureList": "<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Find the perfect domain name and bring your website to life</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Last chance for monthly billing.", "ctaText": "Get Started", "termAndNoDomain": "false", "termLength": "1", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "productFamily": "cpanel", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "planPackage": "builder_choice_plus", "noTermNoDomain": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "subHeadline": "It's our lowest price on our shortest term.", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "isReggieClient": "reggie", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "widget_id": "20968381272", "dependencies": [], "type": "widget", "id": "01f9f31355be4d2dbe0d6a79b55072db"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21520411947", "integrationSettings": null}], "id": "21569371491", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie builderChoicePlus - domain in cart", "groupId": null, "commitId": "21606360123", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21641430712"], "experiments": [{"weightDistributions": [{"entityId": "21623840855", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfeBasic - no domain in cart", "bucketingStrategy": null, "variations": [{"id": "21630360489", "actions": [], "name": "Original"}, {"id": "21623840855", "actions": [{"viewId": "21641430712", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Additional savings when you sign up today", "stepAfterDomain": "2", "featureList": "<li>Unbeatable hosting savings!</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "36", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "basic", "show_modal_once": "true", "noTermAndHasDomain": "false", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "2b16f6cdd9e141baac5ea7b2cb1221fb", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21596821958", "integrationSettings": null}], "id": "21604242536", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfeBasic - no domain in cart", "groupId": null, "commitId": "21630730333", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21570331865"], "experiments": [{"weightDistributions": [{"entityId": "21653190132", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfeChoicePlus - domain in cart", "bucketingStrategy": null, "variations": [{"id": "21562441675", "actions": [], "name": "Original"}, {"id": "21653190132", "actions": [{"viewId": "21570331865", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Get additional savings when you sign up today!", "stepAfterDomain": "2", "featureList": "<li><strong>Unlimited</strong> websites and domains</li>\n<li><strong>30-Day</strong> money-back guarantee</li>\n<li><strong>24/7</strong> expert support</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "12", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "prime", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "9c2b8052227c4a0a8525b8e91ce685c1", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21580531909", "integrationSettings": null}], "id": "21605850781", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfeChoicePlus - domain in cart", "groupId": null, "commitId": "21653150355", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21615641654"], "experiments": [{"weightDistributions": [{"entityId": "21602532045", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfeChoicePlus - no domain in cart", "bucketingStrategy": null, "variations": [{"id": "21600531745", "actions": [], "name": "Original"}, {"id": "21602532045", "actions": [{"viewId": "21615641654", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Get additional savings when you sign up today!", "stepAfterDomain": "2", "featureList": "<li><strong>Unlimited</strong> websites and domains</li>\n<li><strong>30-Day</strong> money-back guarantee</li>\n<li><strong>24/7</strong> expert support</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "12", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "prime", "show_modal_once": "true", "noTermAndHasDomain": "false", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "widget_id": "20968381272", "dependencies": [], "type": "widget", "id": "2b19865608724da0911a374e7ad1a385"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21606271061", "integrationSettings": null}], "id": "21606440341", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfeChoicePlus - no domain in cart", "groupId": null, "commitId": "21628070254", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21574271544"], "experiments": [{"weightDistributions": [{"entityId": "21595471430", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfePlus - domain in cart", "bucketingStrategy": null, "variations": [{"id": "21580741427", "actions": [], "name": "Original"}, {"id": "21595471430", "actions": [{"viewId": "21574271544", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Special Bonus: Domain Privacy", "stepAfterDomain": "2", "featureList": "<li><strong>FREE</strong> Domain Privacy</li>\n<li>Unbeatable hosting savings!</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "12", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "plus", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "widget_id": "20968381272", "dependencies": [], "type": "widget", "id": "ada2aa926bd64ecdb722c28652dc79ac"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21651380110", "integrationSettings": null}], "id": "21616310549", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfePlus - domain in cart", "groupId": null, "commitId": "21639230653", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21604232286"], "experiments": [{"weightDistributions": [{"entityId": "21602092422", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfePro - domain in cart", "bucketingStrategy": null, "variations": [{"id": "21619152533", "actions": [], "name": "Original"}, {"id": "21602092422", "actions": [{"viewId": "21604232286", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Special Bonus: Domain Privacy + Site Backups Free", "stepAfterDomain": "2", "featureList": "<li><strong>FREE</strong> Domain Privacy</li>\n<li><strong>FREE</strong> Site Backup</li>\n<li>Unbeatable hosting savings!</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "36", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "pro", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "12a5abd378f94ba2b9744d0d0f75593c", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21623082119", "integrationSettings": null}], "id": "21634240217", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfePro - domain in cart", "groupId": null, "commitId": "21650100054", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21574572231"], "experiments": [{"weightDistributions": [{"entityId": "21624001076", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfePro - no domain in cart", "bucketingStrategy": null, "variations": [{"id": "21582042067", "actions": [], "name": "Original"}, {"id": "21624001076", "actions": [{"viewId": "21574572231", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Special Bonus: Site Backups Free", "stepAfterDomain": "2", "featureList": "<li><strong>FREE</strong> Site Backup</li>\n<li>Unbeatable hosting savings!</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "36", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "pro", "show_modal_once": "true", "noTermAndHasDomain": "false", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "1abaa21f2bce43e7ae161698dfe3f937", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21580151469", "integrationSettings": null}], "id": "21641920190", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfePro - no domain in cart", "groupId": null, "commitId": "21637430452", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21572571947"], "experiments": [{"weightDistributions": [{"entityId": "21580741424", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfeBasic - domain in cart", "bucketingStrategy": null, "variations": [{"id": "21603422431", "actions": [], "name": "Original"}, {"id": "21580741424", "actions": [{"viewId": "21572571947", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Additional savings when you sign up today", "stepAfterDomain": "2", "featureList": "<li><strong>FREE</strong> Domain registration</li>\n<li>Unbeatable hosting savings!</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "36", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "basic", "show_modal_once": "true", "noTermAndHasDomain": "true", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "false", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "d5180e82bba04cf2947e5bb849ee6d49", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21595471426", "integrationSettings": null}], "id": "21641960090", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfeBasic - domain in cart", "groupId": null, "commitId": "21624320212", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["21643730187"], "experiments": [{"weightDistributions": [{"entityId": "21599121869", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "BHFOS-12065 - RSO - reggie hfePlus - no domain in cart", "bucketingStrategy": null, "variations": [{"id": "21608351223", "actions": [], "name": "Original"}, {"id": "21599121869", "actions": [{"viewId": "21643730187", "changes": [{"name": "BHFOS-11249 - RSO - Legacy or Reggie Client", "config": {"image": "//cdn.optimizely.com/img/2125675982/0f705a00e31448a7bc38d6af140cdf37.svg", "subHeadline": "Additional savings when you sign up today", "stepAfterDomain": "2", "featureList": "<li>Unbeatable hosting savings!</li>", "imageBackground": "rgba(186, 233, 252, 1)", "billingStep": "pickDomain", "headline": "Special Sign-Up Offer", "isReggieClient": "reggie", "termAndNoDomain": "false", "termLength": "12", "closeButton": "//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png", "planPackage": "plus", "show_modal_once": "true", "noTermAndHasDomain": "false", "buttonBG": "rgba(53, 117, 211, 1)", "disclaimerLinkText": "regular rate", "productFamily": "cpanel", "noTermNoDomain": "true", "disclaimerText": "The introductory prices are for the first term of service only and automatically renew at the", "modalBG": "rgba(255, 255, 255, 1)", "disclaimerHref": "https://www.bluehost.com/help/article/shared-hosting-prices", "flow": "RSO1", "domainAndTerm": "false", "ctaText": "Claim Savings", "buttonTextColor": "rgba(255, 255, 255, 1)", "apply_to_currency": "all"}, "id": "ac04dfd166cd49879a4013a98ea1e3ae", "dependencies": [], "type": "widget", "widget_id": "20968381272"}]}], "name": "Variation #1"}], "audienceIds": ["and", "16460390298"], "changes": null, "id": "21653170198", "integrationSettings": null}], "id": "21643730188", "weightDistributions": null, "name": "BHFOS-12065 - RSO - reggie hfePlus - no domain in cart", "groupId": null, "commitId": "21630170215", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["22011051524"], "experiments": [{"weightDistributions": [{"entityId": "22044700569", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2416 20220824 Google Workspace Banner", "bucketingStrategy": null, "variations": [{"id": "22041062201", "actions": [{"viewId": "22011051524", "changes": []}], "name": "Original"}, {"id": "22044700569", "actions": [{"viewId": "22011051524", "changes": [{"src": "/actions/966eed58fa2a552de868ef3d103e2f4b222c80750d80648044f41d1b10bf9af2.js", "dependencies": [], "id": "640E03E7-3898-4729-9C62-FB110AE75D83"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22040910173", "integrationSettings": null}], "id": "22019502051", "weightDistributions": null, "name": "MTA-2416 20220824 Google Workspace Banner", "groupId": null, "commitId": "22021583206", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["22009013988"], "experiments": [{"weightDistributions": [{"entityId": "22010452548", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2397 20220906 eCommerce Storefront Banner", "bucketingStrategy": null, "variations": [{"id": "22008964986", "actions": [], "name": "Original"}, {"id": "22010452548", "actions": [{"viewId": "22009013988", "changes": [{"src": "/actions/5e2903c2aaf8fb484c3508a2b172e3dec29835fe7c85f8e6e225f8e17d447007.js", "dependencies": [], "id": "622337E7-1B32-4CF5-964C-B84AABF26ADD"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22046283025", "integrationSettings": null}], "id": "22023525357", "weightDistributions": null, "name": "MTA-2397 20220906 eCommerce Storefront Banner", "groupId": null, "commitId": "22013088484", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["22145720395"], "experiments": [{"weightDistributions": [{"entityId": "22139161207", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2464 20220915 GDomains Pricing Hotfix", "bucketingStrategy": null, "variations": [{"id": "22119671189", "actions": [{"viewId": "22145720395", "changes": []}], "name": "Original"}, {"id": "22139161207", "actions": [{"viewId": "22145720395", "changes": [{"selector": "#anim-textcontainer > div > h5", "dependencies": [], "attributes": {"html": "try your first month free<br>then $14.99/month"}, "type": "attribute", "id": "7613601B-D83B-4B5F-A6C7-9FDCE72C0EE8", "css": {}}, {"selector": "#ae-skip-to-content > div.site-wrapper > div > section.row-wrapper.sticky-footer.standard.visible-flying-footer > div > p > span", "dependencies": [], "attributes": {"html": "<strong>$14.99/month</strong>"}, "type": "attribute", "id": "C9CDAAC7-3084-41CD-8D28-BD57B70B2759", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22141850972", "integrationSettings": null}], "id": "22182930046", "weightDistributions": null, "name": "MTA-2464 20220915 GDomains Pricing Hotfix", "groupId": null, "commitId": "22147011184", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["22397721276"], "experiments": [{"weightDistributions": [{"entityId": "22182800125", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2480 20220926 GW Promo HFE Upsell", "bucketingStrategy": null, "variations": [{"id": "22195580103", "actions": [], "name": "Original"}, {"id": "22182800125", "actions": [{"viewId": "22397721276", "changes": [{"dependencies": [], "type": "custom_code", "id": "7D6DFB89-12A3-4A85-99FC-A35085168B27", "value": function($){window.upsellFilter = {
  override: [
    {
      type: 'sitelock',
      level: 'essential',
      term: 12,
      selected: true,
      pricingContentKey: 'yearAtPricing',
    },
    {
      type: 'sslcertificate',
      level: '',
      pricingContentKey: 'yearAtPricing',
      term: 12,
    },
    {
      type: 'yoast',
      level: 'premium',
      term: 12,
      disclaimer: true,
      pricingContentKey: 'yearAtPricing',
    },
    {
      type: 'workspace',
      level: 'business_starter',
      term: 12,
      disclaimer: true,
      pricingContentKey: 'yearAtPricing',
      //include promoBadge for promos AND the below upsellContentOverride
      promoBadge: '50% Off',
    },
  ],
};
//include for promos
window.upsellContentOverride = {
	"Google Workspace Business Starter": {
    "perMonth": "__CURRENCY_SYMBOL____MONTH_PRICE__ <strike>__CURRENCY_SYMBOL____REGULAR_PRICE__</strike> per month",
  },
};
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22197660385", "integrationSettings": null}], "id": "22189190745", "weightDistributions": null, "name": "MTA-2480 20220926 GW Promo HFE Upsell", "groupId": null, "commitId": "22401860179", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["22125760370"], "experiments": [{"weightDistributions": [{"entityId": "22164480982", "endOfRange": 5000}, {"entityId": "22216390057", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2481 20220926 Jetpack VS. CodeGuard", "bucketingStrategy": null, "variations": [{"id": "22164480982", "actions": [{"viewId": "22125760370", "changes": [{"dependencies": [], "type": "custom_code", "id": "9AA4C5DB-86E7-45F6-83DA-0222D3C6B729", "value": function($){window.upsellFilter = {
  override: [
    {
      level: '',
      type: 'privacy',
      term: 12,
    },
    {
      type: 'codeguard',
      level: 'basic',
      selected: true,
      pricingContentKey: 'yearAtPricing',
      term: 12,
      wordPressOrgOverride: 'monthAtPricing'
    },
    {
      type: 'yoast',
      level: 'premium',
      term: 12,
      disclaimer: true,
      pricingContentKey: 'yearAtPricing',
    },
    {
      type: 'sslcertificate',
      level: '',
      pricingContentKey: 'yearAtPricing',
      term: 12,
    },
    {
      type: 'sitelock',
      level: 'essential',
      term: 12,
      selected: true,
      pricingContentKey: 'yearAtPricing',
    },
    {
      type: 'workspace',
      level: 'business_starter',
      term: 12,
      disclaimer: true,
      pricingContentKey: 'yearAtPricing',
      //include promoBadge for promos AND the below upsellContentOverride
      promoBadge: '50% Off',
    },
  ],
};
//include for promos
window.upsellContentOverride = {
	"Google Workspace Business Starter": {
    "perMonth": "__CURRENCY_SYMBOL____MONTH_PRICE__ <strike>__CURRENCY_SYMBOL____REGULAR_PRICE__</strike> per month",
  },
};
}}]}], "name": "Original"}, {"id": "22216390057", "actions": [{"viewId": "22125760370", "changes": [{"dependencies": [], "type": "custom_code", "id": "63ec5833007145c7ab84414c65362ac8", "value": function($){window.upsellFilter = {
  override: [
    {
      level: '',
      type: 'privacy',
      term: 12,
    },
    {
      type: 'jetpackbackup',
      level: 'daily',
      selected: true,
      //freeAddon: true,
      pricingContentKey: 'yearAtPricing',
      term: 12,
    },
    {
      type: 'yoast',
      level: 'premium',
      term: 12,
      disclaimer: true,
      pricingContentKey: 'yearAtPricing',
    },
    {
      type: 'sslcertificate',
      level: '',
      pricingContentKey: 'yearAtPricing',
      term: 12,
    },
    {
      type: 'sitelock',
      level: 'essential',
      term: 12,
      selected: true,
      pricingContentKey: 'yearAtPricing',
    },
    {
      type: 'workspace',
      level: 'business_starter',
      term: 12,
      disclaimer: true,
      pricingContentKey: 'yearAtPricing',
      //include promoBadge for promos AND the below upsellContentOverride
      promoBadge: '50% Off',
    },
  ],
};
//include for promos
window.upsellContentOverride = {
	"Google Workspace Business Starter": {
    "perMonth": "__CURRENCY_SYMBOL____MONTH_PRICE__ <strike>__CURRENCY_SYMBOL____REGULAR_PRICE__</strike> per month",
  },
};
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22182101001", "integrationSettings": null}], "id": "22219680156", "weightDistributions": null, "name": "MTA-2481 20220926 Jetpack VS. CodeGuard", "groupId": null, "commitId": "22364160346", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18822973092"], "experiments": [{"weightDistributions": [{"entityId": "22310530016", "endOfRange": 5000}, {"entityId": "22329170134", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2528 20221011 Affiliate Page CTA Link Split", "bucketingStrategy": null, "variations": [{"id": "22310530016", "actions": [{"viewId": "18822973092", "changes": []}], "name": "Original"}, {"id": "22329170134", "actions": [{"viewId": "18822973092", "changes": [{"selector": "#a17a6593-4980-4d11-837b-4f8a192dfddf > div > div > div.mobile-bg.color > a", "dependencies": [], "attributes": {"href": "https://www.bluehost.com/wordpress-plans#plan-table"}, "type": "attribute", "id": "EA0B8BCD-B438-410F-92DD-7D827F995FF7", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22297120996", "integrationSettings": null}], "id": "22262751322", "weightDistributions": null, "name": "MTA-2528 20221011 Affiliate Page CTA Link Split", "groupId": null, "commitId": "22318430411", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["22060120075"], "experiments": [{"weightDistributions": [{"entityId": "22278300291", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "MTA-2519 20221004 DFE GW 50% off", "bucketingStrategy": null, "variations": [{"id": "22277560278", "actions": [{"viewId": "22060120075", "changes": []}], "name": "Original"}, {"id": "22278300291", "actions": [{"viewId": "22060120075", "changes": [{"src": "/actions/070404e5d7bdf115b8444a98f60cceb5f1146d44054d45b310099cfe10eedbec.js", "dependencies": [], "id": "384D6FD8-CF63-40DB-8BC7-1C6A5FA261C9"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "22298030064", "integrationSettings": null}], "id": "22273920321", "weightDistributions": null, "name": "MTA-2519 20221004 DFE GW 50% off", "groupId": null, "commitId": "22385331515", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "visitorIdLocator": null, "listTargetingKeys": [], "groups": [], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/web-hosting/signup", "match": "simple"}, {"type": "url", "value": "https://www.betabh.com/web-hosting/signup", "match": "simple"}]], "activationType": "callback", "name": "Enter a Domain on Checkout Flow", "apiName": "13410400318_enter_a_domain_on_checkout_flow", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = optimizely.get('utils');

    utils.waitForElement('.content_wrap').then(function() {

        var startTime = new Date().getTime();
        var lookForObject = setInterval(function() {
            if (new Date().getTime() - startTime > 5000) {
                clearInterval(lookForObject);
            } else {
                var hiddenFlowElement = document.querySelector('input[name="flow"]');
                // page_id tells us what page we are in to validate along with the URL
                if ((window.dataLayer) && (window.dataLayer[0]) && (dataLayer[0].pageId) && (dataLayer[0].pageId === "www:signup/pick-site") && (!hiddenFlowElement)) {
                    clearInterval(lookForObject);

                    options.isActive && activate({
                        isActive: false
                    });

                    activate();
                }
            }
        }, 50);
    });
}
, "deactivationEnabled": false, "id": "14641790155"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/web-hosting/signup?flow=woocommerce", "match": "substring"}]], "activationType": "callback", "name": "/web-hosting/signup?flow=woocommerce", "apiName": "13410400318_webhostingsignupflowwoocommercecpanel_planwc_plus", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = optimizely.get('utils');

    utils.waitForElement('.content_wrap').then(function() {

        var startTime = new Date().getTime();
        var lookForObject = setInterval(function() {
            if (new Date().getTime() - startTime > 5000) {
                clearInterval(lookForObject);
            } else {
                var hiddenFlowElement = document.querySelector('input[name="flow"]');
                // page_id tells us what page we are in to validate along with the URL
                if ((window.dataLayer) && (window.dataLayer[0]) && (dataLayer[0].pageId) && (dataLayer[0].pageId === "www:signup/pick-site") && (!hiddenFlowElement)) {
                    clearInterval(lookForObject);

                    options.isActive && activate({
                        isActive: false
                    });

                    activate();
                }
            }
        }, 50);
    });
}
, "deactivationEnabled": false, "id": "15039871526"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/web-hosting/signup", "match": "substring"}]], "activationType": "polling", "name": "Signup - cPanel Basic", "apiName": "13410400318_signup__cpanel_basic", "tags": [], "undoOnDeactivation": false, "activationCode": function checkForBillingPage() {
  var dataLayer = window.dataLayer || {};
  var info = dataLayer[0];
  
  // wait for dataLayer to populate
  if ( info ) {
    
    // check for cpanel basic
    var productType = ( info.hosting_type == "cpanel" && info.hosting_subtype == "basic");
    
    // return true if we find the Billing Step
    if ( productType ) {
      return info.pageId == "www:signup/billing";
    }
  }
}
, "deactivationEnabled": false, "id": "15372920173"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/web-hosting/signup", "match": "substring"}]], "activationType": "polling", "name": "Signup - cPanel Plus", "apiName": "13410400318_signup__cpanel_plus", "tags": [], "undoOnDeactivation": false, "activationCode": function checkForBillingPage() {
  var dataLayer = window.dataLayer || {};
  var info = dataLayer[0];
  
  // wait for dataLayer to populate
  if ( info ) {
    
    // check for cpanel Plus
    var productType = ( info.hosting_type == "cpanel" && info.hosting_subtype == "plus");
    
    // return true if we find the Billing Step
    if ( productType ) {
      return info.pageId == "www:signup/billing";
    }
  }
}
, "deactivationEnabled": false, "id": "15403230641"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/web-hosting/signup", "match": "substring"}]], "activationType": "polling", "name": "Signup - cPanel Prime", "apiName": "13410400318_signup__prime", "tags": [], "undoOnDeactivation": false, "activationCode": function checkForBillingPage() {
  var dataLayer = window.dataLayer || {};
  var info = dataLayer[0];
  
  // wait for dataLayer to populate
  if ( info ) {
    
    // check for cpanel Prime
    var productType = ( info.hosting_type == "cpanel" && info.hosting_subtype == "prime");
    
    // return true if we find the Billing Step
    if ( productType ) {
      return info.pageId == "www:signup/billing";
    }
  }
}
, "deactivationEnabled": false, "id": "15411440095"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/web-hosting/signup", "match": "substring"}]], "activationType": "polling", "name": "Signup - cPanel Pro", "apiName": "13410400318_signup__cpanel_pro", "tags": [], "undoOnDeactivation": false, "activationCode": function checkForBillingPage() {
  var dataLayer = window.dataLayer || {};
  var info = dataLayer[0];
  
  // wait for dataLayer to populate
  if ( info ) {
    
    // check for cpanel Pro
    var productType = ( info.hosting_type == "cpanel" && info.hosting_subtype == "pro");
    
    // return true if we find the Billing Step
    if ( productType ) {
      return info.pageId == "www:signup/billing";
    }
  }
}
, "deactivationEnabled": false, "id": "15419280543"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/solutions/start-a-blog", "match": "substring"}]], "name": "URL Targeting for BHFOS-6210 - Banner for users redirected from Typepad", "apiName": "13410400318_url_targeting_for_bhfos6210__banner_for_users_redire", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17912203453"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "bluehost", "match": "substring"}], ["or", {"type": "url", "value": "/web-hosting/signup", "match": "substring"}]], "activationType": "polling", "name": "Receipt Pgae", "apiName": "13410400318_receipt_pgae", "tags": [], "undoOnDeactivation": false, "activationCode": function checkForBillingPage() {
  var dataLayer = window.dataLayer || {};
  var info = dataLayer[0];
  
  // wait for dataLayer to populate
  if ( info ) {
    return info.pageId == "www:signup/success";
  }
}
, "deactivationEnabled": false, "id": "18026550491"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "(\\/registration).*?(hfePlus)", "match": "regex"}]], "name": "Signup - HFE - cPanel Plus (All Steps)", "apiName": "13410400318_signup__hfe__cpanel_plus_all_steps", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18140451775"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "(\\/registration).*?(hfePro)", "match": "regex"}]], "name": "Signup - HFE - cPanel Pro (All Steps)", "apiName": "13410400318_signup__hfe__cpanel_pro_all_steps", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18154250465"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "(\\/registration).*?(hfeBasic)", "match": "regex"}]], "name": "Signup - HFE - cPanel Basic (All Steps)", "apiName": "13410400318_signup__hfe__cpanel_basic_all_steps", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18164971403"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "(\\/registration).*?(hfeChoicePlus)", "match": "regex"}]], "name": "Signup - HFE - cPanel Choice Plus (All Steps)", "apiName": "13410400318_signup__hfe__cpanel_choice_plus_all_steps", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18177071386"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "bluehost.com/special/techradar", "match": "simple"}]], "name": "/special/techradar", "apiName": "13410400318_specialtechrada", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18822973092"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/domains", "match": "substring"}]], "name": "URL Targeting for BHFOS-7813 - 2 CTA free trial test", "apiName": "13410400318_url_targeting_for_bhfos7813__2_cta_free_trial_test", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18829043933"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/web-hosting/signup", "match": "simple"}]], "name": "URL Targeting for BHFOS-10915 - RSO - Legacy - v3", "apiName": "13410400318_url_targeting_for_copy_of_bhfos10915__rso__legacy__1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20909855355"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/web-hosting/signup", "match": "simple"}]], "name": "URL Targeting for BHFOS-10915 - RSO - Legacy - v2", "apiName": "13410400318_url_targeting_for_copy_of_bhfos10915__rso__legacy__v", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20913704419"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/web-hosting/signup", "match": "simple"}]], "name": "URL Targeting for BHFOS-10915 - RSO - Legacy - v1", "apiName": "13410400318_url_targeting_for_bhfos10915__rso__legacy", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20916153196"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/web-hosting/signup", "match": "simple"}]], "name": "URL Targeting for BHFOS-10915 - RSO - Legacy - v4", "apiName": "13410400318_url_targeting_for_copy_of_bhfos10915__rso__legacy__2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20931384129"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=builderPlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie builderPlus - no domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos11249__rso__hfe__v2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20975031572"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=builderPlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie builderPlus - domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos11249__rso__hfe__v3", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20993151267"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "(\\/registration).*?(\\#\\/builderPlus\\/1)", "match": "regex"}, {"type": "url", "value": "(\\/registration).*?(\\#\\/builderChoicePlus\\/1)", "match": "regex"}, {"type": "url", "value": "(\\/registration).*?(\\#\\/wcPremium\\/1)", "match": "regex"}, {"type": "url", "value": "(\\/registration).*?(\\#\\/hfe[a-zA-Z]*?\\/1)", "match": "regex"}], ["or", {"type": "custom_code", "value": /**
 * Don't trigger page when there are domain results showing
 * Should only trigger on first step of regflow if they haven't
 * searched for a domain name.
 */

function jsCondition() {
  var domainResults = document.querySelectorAll('.domain-results-wrapper');

  return domainResults.length === 0;
}
}]], "activationType": "url_changed", "name": "URL Targeting for BHFOS-12065 - Builder flows - RSO - step 1", "apiName": "13410400318_url_targeting_for_bhfos12065__builder_flows__rso__st", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21510940121"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=builderChoicePlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie builderChoicePlus - domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21557890739"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=builderChoicePlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie builderChoicePlus - no domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie_bu", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21567840722"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfeChoicePlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfeChoicePlus - domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie_10", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21570331865"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfeBasic", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfeBasic - domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__3", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21572571947"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfePlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfePlus - domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie_hf", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21574271544"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfePro", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfePro - no domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__8", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21574572231"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfePro", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfePro - domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__7", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21604232286"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfeChoicePlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfeChoicePlus - no domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__9", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21615641654"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfeBasic", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfeBasic - no domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__4", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21641430712"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/registration/?flow=hfePlus", "match": "substring"}]], "name": "URL Targeting for BHFOS-12065 - RSO - reggie hfePlus - no domain in cart", "apiName": "13410400318_url_targeting_for_copy_of_bhfos12065__rso__reggie__5", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21643730187"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/wordpress-plans", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/wordpress", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/websites", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/wordpress/wordpress-hosting", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/wordpress/managed-hosting", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/wordpress/woocommerce-hosting", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/hosting/shared", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/hosting/dedicated", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/hosting/vps", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/domains", "match": "simple"}, {"type": "url", "value": "https://www.bluehost.com/pricing", "match": "simple"}]], "name": "MTA-2397 eCommerce Storefront Banner", "apiName": "13410400318_mta2397_ecommerce_storefront_banner", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "22009013988"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/google-workspace", "match": "simple"}]], "name": "/google-workspace", "apiName": "13410400318_googleworkspace", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "22011051524"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/registration/", "match": "substring"}], ["or", {"type": "url", "value": "flow=domainDFEAddons", "match": "substring"}], ["not", ["or", {"type": "url", "value": "type=workspace", "match": "substring"}]]], "activationType": "dom_changed", "name": "/registration - DFE excluding type=workspace", "apiName": "13410400318_registration__dfe_excluding_typeworkspace", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "22060120075"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/registration", "match": "simple"}], ["or", {"type": "url", "value": "flow=builderPlus", "match": "substring"}, {"type": "url", "value": "flow=builderChoicePlus", "match": "substring"}, {"type": "url", "value": "flow=hfeBasic", "match": "substring"}, {"type": "url", "value": "flow=hfePlus", "match": "substring"}, {"type": "url", "value": "flow=hfePro", "match": "substring"}, {"type": "url", "value": "flow=hfeChoicePlus", "match": "substring"}]], "name": "/registration - HFE ONLY", "apiName": "13410400318_registration__hfe_only", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "22125760370"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/googledomains", "match": "simple"}]], "name": "/googledomains", "apiName": "13410400318_googledomains", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "22145720395"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.bluehost.com/registration", "match": "substring"}], ["or", {"type": "url", "value": "flow=wcPremium", "match": "substring"}, {"type": "url", "value": "flow=hfeWcPremium", "match": "substring"}]], "name": "URL Targeting for MTA-2480 20220926 GW Promo HFE Upsell", "apiName": "13410400318_url_targeting_for_mta2480_20220926_gw_promo_hfe_upse", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "22397721276"}], "projectId": "13410400318", "namespace": "13410400318", "tagGroups": [], "integrationSettings": [], "interestGroups": [], "dimensions": [{"segmentId": null, "id": "18194291055", "apiName": "trafficSource", "name": "Traffic Source"}], "audiences": [{"conditions": ["and", ["or", ["not", ["or", {"value": "strili", "type": "cookies", "name": "r", "match": "substring"}, {"value": "gracesays", "type": "cookies", "name": "r", "match": "substring"}, {"value": "courtneydemo", "type": "cookies", "name": "r", "match": "substring"}, {"value": "michaelhyatt", "type": "cookies", "name": "r", "match": "substring"}]]]], "id": "14623620469", "name": "RSO Shared Pro Exclusion"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "strilli", "type": "cookies", "name": "r", "match": "substring"}, {"value": "michaelhyatt", "type": "cookies", "name": "r", "match": "substring"}, {"value": "gracesays", "type": "cookies", "name": "r", "match": "substring"}, {"value": "mybreakthroughprojects", "type": "cookies", "name": "r", "match": "substring"}, {"value": "simonask", "type": "cookies", "name": "r", "match": "substring"}]]]], "id": "14635800111", "name": "RSO Shared Plus Exclusion"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "strili", "type": "cookies", "name": "r", "match": "substring"}, {"value": "gracesays", "type": "cookies", "name": "r", "match": "substring"}, {"value": "mybreakthroughprojects", "type": "cookies", "name": "r", "match": "substring"}, {"value": "simonask", "type": "cookies", "name": "r", "match": "substring"}]]]], "id": "14653300201", "name": "RSO Shared Prime Exclusion"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "blog", "type": "query", "name": "cpanel_plan", "match": "exact"}]]]], "id": "15018920510", "name": "?cpanel_plan=blog"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "16460390298", "name": "Desktop Only"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "strili", "type": "cookies", "name": "r", "match": "substring"}, {"value": "gracesays", "type": "cookies", "name": "r", "match": "substring"}, {"value": "mybreakthroughprojects", "type": "cookies", "name": "r", "match": "substring"}, {"value": "simonask", "type": "cookies", "name": "r", "match": "substring"}, {"value": "courtneydemo", "type": "cookies", "name": "r", "match": "substring"}]]]], "id": "17584780020", "name": "MTA-386 Shared: Basic RSO $2.65 All Traffic 100%"}], "anonymizeIP": false, "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: '16894662954',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div class=\"exit-intent-modal\">");t.b("\n" + i);t.b("  <div id=\"exit-popup-overlay\"></div>");t.b("\n" + i);t.b("  <div id=\"exit-popup-wrapper\">");t.b("\n" + i);t.b("    <div id=\"exit-popup\" class=\"rso-container\">");t.b("\n" + i);t.b("      <div id=\"exit-popup-close\" href=\"#\" class=\"lb-close exit-popup-close\" style=\"cursor: pointer;\">close</div>");t.b("\n" + i);t.b("      <div class=\"rso-top\">");t.b("\n" + i);t.b("        <div class=\"rso-top-text\">");t.b("\n" + i);t.b("          <h2>");t.b(t.v(t.d("widget.title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        </div>        ");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"rso-cta\">");t.b("\n" + i);t.b("        <div class=\"rso-cta-left\">");t.b("\n" + i);t.b("          <h3>");t.b(t.v(t.d("widget.heading",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("          <p>");t.b(t.v(t.d("widget.paragraph",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("        </div>        ");t.b("\n" + i);t.b("        <div class=\"people-img\">");t.b("\n" + i);t.b("          <img src=\"");t.b(t.v(t.d("widget.image",c,p,0)));t.b("\" alt=\"Special Sign-Up Offer\">");t.b("\n" + i);t.b("        </div>        ");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "16894662954";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"title","default_value":"Don't go yet!"},{"name":"image","default_value":"https://sb.monetate.net/img/1/406/815443.png"},{"name":"heading","default_value":"Heading goes here"},{"name":"paragraph","default_value":"With a paragraph here - $3.95!"},{"name":"show_modal_once","default_value":"false"},{"name":"CTAtext","default_value":"Choose Free Domain Later"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-16894662954';
widget._styleTag.innerHTML = '@media (max-width:767px) {  .exit-intent-modal {    display: none !important;  }}.exit-intent-modal{    opacity: 0;    position: fixed;    z-index: 3001;    width: 100%;    height: 100% !important;    display: none;}body {    height: 100%;    position: relative;}#exit-popup-overlay {    height: 100vh !important;    z-index: 3000;    position: fixed;    width: 100%;    background: #000;    opacity: 0.5;}#exit-popup-wrapper {    margin: 50px 0;    position: fixed;    z-index: 3001;    width: 100%;    height: 100vh;}#exit-popup h2 {    margin-top: 0;}#exit-popup p {}#exit-popup-close {    top: 10px;    right: 20px;    font-size: 20px;    position: absolute;    font-weight: normal;    cursor: pointer;}#exit-popup-close:hover {    color: #999;}.lb-close {    float: right;    cursor: pointer;    position: absolute;    top: 10px;    right: 10px;    z-index: 100;    color: #fff;}.fade-in {    -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */    -moz-animation: fadein .5s; /* Firefox < 16 */    -ms-animation: fadein .5s; /* Internet Explorer */    -o-animation: fadein .5s; /* Opera < 12.1 */    animation: fadein .5s;    opacity: 1 !important;    display: block;}.fade-out {    -webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */    -moz-animation: fadeout 1s; /* Firefox < 16 */    -ms-animation: fadeout 1s; /* Internet Explorer */    -o-animation: fadeout 1s; /* Opera < 12.1 */    animation: fadeout 1s;    opacity: 0 !important;}@keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Firefox < 16 */@-moz-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Safari, Chrome and Opera > 12.1 */@-webkit-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Internet Explorer */@-ms-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Opera < 12.1 */@-o-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}@keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Firefox < 16 */@-moz-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Safari, Chrome and Opera > 12.1*/@-webkit-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Internet Explorer*/@-ms-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Opera < 12.1*/@-o-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }} .rso-container {            /*width: 890px;            height: 500px;*/            width: 801px;            height: 450px;            border: 1px solid #3575D3;            border-radius: .1875em;            margin: 0 auto;            padding: 0;            background: #fff;            position: relative;      }      .rso-top {          background-color: #3575D3;          width: 100%;          height: 33%;          position: relative;                }      .rso-top-text h2 {          margin: 0 auto;          color: #fff;          text-transform: none;          /*font-size: 3.5em;*/          font-size: 3em;          text-align: center;          /*padding-top: 50px;    */          padding-top: 47px;      }      .rso-top-text h3 {          color: #bee0f6;          text-transform: none;          margin: .25em 0 1em 25px !important;          font-size: 1.8125em;      }      .rso-container h3, .subheading {          margin:0;          text-transform: none;          font-size: 2.3125em;          line-height: 1.0625em;      }      .rso-top-text ul {          margin: 1em 2em !important;          padding: 0 0 0 40px;          color: #ccc;          font-size: 1.375em;          margin-left: .625em;      }      .people-img {        position: absolute;        bottom: -5px;        right:20px;      }            .rso-cta {          background-color: #fff;          position: relative;          height: 67%;      }      .rso-cta-left {          width: 50%;          float: left;          padding: 2em 1.25em 2em 3.25em;      }      .rso-cta-left p {          font-size: 1.25em;          margin-top: .75em;      }      .rso-cta .discount-banner {        width: 0;        height: 0;        border-style: solid;        border-width: 125px 125px 0 0;        border-color: #f89d25 transparent transparent transparent;      }      .rso-cta .discount-text {        -ms-transform: rotate(-45deg); /* IE 9 */        -webkit-transform: rotate(-45deg); /* Chrome, Safari, Opera */        transform: rotate(-45deg);        position: absolute;        top:17px;        left: 17px;        font-size: 1.5em;        color: #fff;        font-weight: bold;        line-height: .9em;      }      .rso-cta .price-container {        position: absolute;        width: 550px;        top:35px;      }      .rso-cta .price-container .normally{        text-align: center;        font-size: 1.25em;        color: #ccc;      }      .rso-cta .price-container .now-just{        text-align: right;        position: absolute;        top:30px;        left: 85px;        display: block !important;        width: 100px;        height: 100px;        font-size: 1.25em;        color: #333;      }      .rso-cta .price-container .offer-price{        position: absolute;        left: 198px;        top: 23px;        display: block !important;        width: 300px;        height: 100px;        font-size: 3.2em;        color:#3575D3;      }      .rso-btn {               background: #01c201 !important;        border: none !important;        text-transform:  capitalize;        font-size: 1.625em !important;        padding: .35em 1.0625em;      }      .lb-close {        float: right;        cursor: pointer;        position: absolute;        top:10px;        right:10px;        z-index: 100;        color: #fff;      }';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get('utils');

// show every three days
var currentDate = new Date().getTime();
var instanceID = 'optly_ui_modal_shown_domain-' + extension.$instance;
var optlyModalWasShown = window.localStorage.getItem(instanceID);
var daysLastShown = timeDifference(currentDate, optlyModalWasShown).days;
var optlyShowModal = (daysLastShown >= 3 || extension.show_modal_once === 'false') ? true : false;
var shouldShow = true;


function timeDifference(date1, date2) {
  var difference = date1 - date2;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  return {days: daysDifference, hours: hoursDifference, minutes: minutesDifference, seconds: secondsDifference};
}

function showPopup() {
  if (document.querySelector('.fade-out')) {
    document.querySelector('.fade-out').classList.remove('fade-out');
  }

  document.querySelector('.exit-intent-modal').classList += ' fade-in';

  window.localStorage.setItem(instanceID, currentDate);

  window.addEventListener('keydown', closeOnEsc);
}

function hidePopup() {
  document.querySelector('.exit-intent-modal').classList += ' fade-out';

  document.querySelector('.exit-intent-modal').style.display = 'none';

  window.optimizley = window.optimizley || [];

  window.optimizley.push({
    type: "event",
    eventName: "close_modal"
  });

  window.removeEventListener('keydown', closeOnEsc);
}

function bindCloseBtn() {
  document.querySelector('.exit-intent-modal').addEventListener('click', function(event) {
    // an array of selectors that will close the modal.
    // this is to make it easier to specify multiple items that are clickable
    // to close it.
    var selectorsToClose = [
      '#exit-popup-overlay',
      '#exit-popup-close',
      '#exit-popup-wrapper'
    ].join(', ');

    if (event.target.matches(selectorsToClose)) {
      event.preventDefault();
      hidePopup();
    }
    event.stopPropagation();
  });
}

function closeOnEsc(e, modal) {
  var keyPressed = e.key;

  if (keyPressed === 'Escape') {
    hidePopup();
  }
}

// only triggers modal open when mouse leave is top edge and left/right within 100px from top
function openOnMouseOut(e) {
  // find cursor position
  var yPositionOnLeave = e.clientY;
  var xPositionOnLeave = e.clientX;

  // if user leaves on left/right within a tolerance of the topEdge
  // we want to trigger our modal
  var topEdge = 100;
  // in rightEdge we have wiggle room for the scrollbar
  var rightEdge = document.documentElement.clientWidth - 5;
  // leftEdge also has some wiggle room for FireFox triggering the event early
  var leftEdge = 5;

  // for leaving the top we do not care about topEdge
  // the user needs to really leave the window
  var isMouseLeaveTop = (yPositionOnLeave < 5) ? true : false;

  // for leaving the left/right look for x or y being > or < the edges
  // depending on which way the cursor left the window
  var isMouseLeaveRight = (xPositionOnLeave >= rightEdge) ? true : false;
  var isMouseLeaveLeft = (xPositionOnLeave <= leftEdge) ? true : false;

  // due to a FireFox bug we need to know if the target is a select or not
  var isTargetSelect = false;

  // FireFox has bug when clicking on selects
  // it triggers mouseleave and mouseout events
  if (e.target.nodeName.toLowerCase() === 'select') {
    isTargetSelect = true;
  }

  if ( ( isMouseLeaveTop || ( yPositionOnLeave < topEdge ) && isMouseLeaveRight || ( yPositionOnLeave < topEdge ) && isMouseLeaveLeft ) && !isTargetSelect ) {

    showPopup();
    bindCloseBtn();

    // remove listener after it is open
    document.querySelector('body').removeEventListener('mouseout', openOnMouseOut);
  }
}

// create an object with name value for all form inputs
function getFieldsFromForm(fieldsArr, form) {
  var fieldValues = [];

  fieldsArr.forEach(function(fieldName) {
    var input = form[fieldName];

    if (input && input.value) {
      fieldValues.push({
        name: input.name,
        value: input.value,
        type: 'hidden'
      });
    }
  });
  return fieldValues;
}

// add inputs to form from object with name value pair
function addFieldsToForm(fields, form) {
  // generate all the fields for the RSO modal form
  fields.forEach(function(field) {
    var input = document.createElement('input');
    var attributes = Object.keys(field);

    // adds an attribute for each property in the object
    attributes.forEach(function(attr) {
      input.setAttribute(attr, field[attr]);
    });

    form.append(input);
  });
  return form;
}

function createForm() {
  // create form used to submit RSO data on CTA click
  var form = document.createElement('form');
  form.setAttribute('action', '/web-hosting/signup');
  form.setAttribute('method', 'POST');

  return form;
}

var registerForm = document.querySelector('form[name="register"]');

function addRegisterForm() {

  var form = createForm();

  var fieldsFromPage = ['currency', 'r', 'c', 'sku', 'flow', 'hosting_plan', 'cpanel_plan'];

  // initial form fields to setup that are not on the signup page
  var fieldsToAddToForm = [
    {
      'name': 'domain_action',
      'value': 'domainless',
      'type': 'hidden',
    },
    {
      'name': 'submit',
      'value': 'Choose Free Domain Later',
      'type': 'submit',
      'class': 'btn_secondary rso-btn'
    },
  ];

  // combine array of all fields that need to be added to form
  fieldsToAddToForm = fieldsToAddToForm.concat(getFieldsFromForm(fieldsFromPage, registerForm));

  // add all inputs to form
  addFieldsToForm(fieldsToAddToForm, form);

  // Add form to modal
  var rso = document.querySelector('.rso-container .rso-cta .rso-cta-left');
  var btnDiv = document.createElement('div');
  btnDiv.classList.add('rso-cta-btn-div');
  btnDiv.append(form);
  rso.append(btnDiv);

  trackDomainPopupEvent();
}

function trackDomainPopupEvent() {
  var popupBtn = document.querySelector('.rso-btn');
  var popupHeadline = document.querySelector('.rso-top-text > h2').innerHTML;
  var popupBtnVal = popupBtn.value;

  if (popupHeadline !== null) {
    window.dataLayer.push({'event': 'GAEvent', 'eventCategory': 'Domainless Popup', 'eventAction': 'Domainless Popup View', 'eventLabel': 'h: ' + popupHeadline + '; b: ' + popupBtnVal});
  }

  popupBtn.addEventListener('click', function() {
    window.dataLayer.push({'event': 'GAEvent', 'eventCategory': 'Domainless Popup', 'eventAction': 'Domainless Popup Click', 'eventLabel': 'h: ' + popupHeadline + '; b: ' + popupBtnVal});
  });
}

utils.waitForElement('body').then(function(element) {
  var html = widget.$html;
  element.insertAdjacentHTML('afterbegin', html);

  if (optlyShowModal) {
    addRegisterForm();

    element.addEventListener('mouseout', openOnMouseOut);
  }
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "16894662954";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"title","default_value":"Don't go yet!"},{"name":"image","default_value":"https://sb.monetate.net/img/1/406/815443.png"},{"name":"heading","default_value":"Heading goes here"},{"name":"paragraph","default_value":"With a paragraph here - $3.95!"},{"name":"show_modal_once","default_value":"false"},{"name":"CTAtext","default_value":"Choose Free Domain Later"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-16894662954');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHTML = document.querySelector('.exit-intent-modal');
if (extensionHTML) extensionHTML.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '16937313236',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div class=\"exit-intent-modal\">");t.b("\n" + i);t.b("  <div id=\"exit-popup-overlay\"></div>");t.b("\n" + i);t.b("  <div id=\"exit-popup-wrapper\">");t.b("\n" + i);t.b("    <div id=\"exit-popup\" class=\"rso-container\">");t.b("\n" + i);t.b("  <div id=\"exit-popup-close\" href=\"#\" class=\"lb-close exit-popup-close\" style=\"cursor: pointer;\">close</div>");t.b("\n" + i);t.b("    <div class=\"rso-top\">");t.b("\n" + i);t.b("      <div class=\"rso-top-text\">");t.b("\n" + i);t.b("        <h2>");t.b(t.t(t.d("widget.headline",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        <h3>");t.b(t.t(t.d("widget.secondary",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("        <ul>");t.b("\n" + i);t.b("					");t.b(t.t(t.d("widget.bulletList",c,p,0)));t.b("\n" + i);t.b("        </ul>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"rso-top-img\">");t.b("\n" + i);t.b("        <img src=\"");t.b(t.v(t.d("widget.imageSrc",c,p,0)));t.b("\" alt=\"");t.b(t.v(t.d("widget.headline1",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"rso-cta\">");t.b("\n" + i);t.b("      <div class=\"discount-banner\"></div>");t.b("\n" + i);t.b("      <div class=\"discount-text\">");t.b(t.v(t.d("widget.percent_off",c,p,0)));t.b("%<br>OFF!</div>");t.b("\n" + i);t.b("      <div class=\"price-container\">");t.b("\n" + i);t.b("      <div class=\"normally\">NORMALLY <strike>");t.b(t.v(t.d("widget.currency_symbol",c,p,0)));t.b(t.v(t.d("widget.strike_price",c,p,0)));t.b("</strike></div>");t.b("\n" + i);t.b("      <div class=\"now-just\">NOW<br>JUST</div>");t.b("\n" + i);t.b("      <div class=\"offer-price\">");t.b(t.v(t.d("widget.currency_symbol",c,p,0)));t.b(t.v(t.d("widget.normal_price",c,p,0)));t.b("/mo<span class=\"offer-price-star\">*</span></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"offer-price-details\">* The introductory prices are for the first term of service only and automatically <a href=\"https://my.bluehost.com/hosting/help/141\" target=\"_blank\">renew at");t.b("\n" + i);t.b("       the regular rate</a></div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "16937313236";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"headline","default_value":"Don't go yet!"},{"name":"secondary","default_value":"Get up to 66% off"},{"name":"bullet_1","default_value":"wrap text in html tags <b>for bold</b> and <i>for italics</i>"},{"name":"bullet_2","default_value":"wrap text in html tags <b>for bold</b> and <i>for italics</i> "},{"name":"bullet_3","default_value":"wrap text in html tags <b>for bold</b> and <i>for italics</i> "},{"name":"imageSrc","default_value":"https://bluehost-cdn.com/media/shared/signup/happy-people.png"},{"name":"show_modal_once","default_value":"true"},{"name":"apply_to_currency","default_value":"all"},{"name":"flow","default_value":"rso1"},{"name":"cpanel_package","default_value":"basic"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-16937313236';
widget._styleTag.innerHTML = '@media (max-width:767px) {  .exit-intent-modal {    display: none !important;  }}.exit-intent-modal{    opacity: 0;    position: fixed;    z-index: 3001;    width: 100%;    height: 100% !important;  display: none;}.exit-intent-modal.fade-in {  display: block;}body {    height: 100%;    position: relative;}#exit-popup-overlay {    height: 100vh !important;    z-index: 3000;    position: fixed;    width: 100%;    background: #000;    opacity: 0.5;}#exit-popup-wrapper {    margin: 50px 0;    position: fixed;    z-index: 3001;    width: 100%;    height: 100vh;    display: flex;    justify-content: center;}#exit-popup h2 {    margin-top: 20px;  	max-width: 530px;}#exit-popup h3 {  	max-width: 530px;}#exit-popup p {}#exit-popup-close {    top: 10px;    right: 20px;    font-size: 20px;    position: absolute;    font-weight: bold;    cursor: pointer;}#exit-popup-close:hover {    color: #999;}.fade-in {    -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */    -moz-animation: fadein .5s; /* Firefox < 16 */    -ms-animation: fadein .5s; /* Internet Explorer */    -o-animation: fadein .5s; /* Opera < 12.1 */    animation: fadein .5s;    opacity: 1 !important;}.fade-out {    -webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */    -moz-animation: fadeout 1s; /* Firefox < 16 */    -ms-animation: fadeout 1s; /* Internet Explorer */    -o-animation: fadeout 1s; /* Opera < 12.1 */    animation: fadeout 1s;    opacity: 0 !important;}@keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Firefox < 16 */@-moz-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Safari, Chrome and Opera > 12.1 */@-webkit-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Internet Explorer */@-ms-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}/* Opera < 12.1 */@-o-keyframes fadein {    from { opacity: 0; }    to   { opacity: 1; }}@keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Firefox < 16 */@-moz-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Safari, Chrome and Opera > 12.1*/@-webkit-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Internet Explorer*/@-ms-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}/* Opera < 12.1*/@-o-keyframes fadeout {    from { opacity: 1; }    to   { opacity: 0; }}.rso-container {  width: 890px;  height: 500px;  border: 1px solid #3575D3;  border-radius: .1875em;  padding: 0;  background: #fff;  position: relative;}.rso-top {  background-color: #3575D3;  width: 100%;  height: 66%;  position: relative;}.rso-top-text {  float: left;}.rso-top-text h2 {  margin: 50px 0 0px 25px;  color: #fff;  text-transform: none;  /* font-size: 3.5em; */  font-size: 3.375em;}.rso-top-text h3 {  color: #bee0f6;  text-transform: none;  margin: .25em 0 0.8125em 25px !important;  font-size: 2.1875em;}.rso-container h3, .subheading {  color: #ccc;  margin:0;}.rso-top-text ul {  margin: 1em 2em !important;  padding: 0 0 0 40px;  color: #ccc;  font-size: 1.375em;  margin-left: .625em;}.rso-top-text ul i {  color:#fff;}.rso-top-text ul b {  color:#fff;}.rso-top-img {    position: absolute;    bottom: -5px;    right:20px;}.rso-cta {  background-color: #fff;  position: relative;}.rso-cta .discount-banner {    width: 0;    height: 0;    border-style: solid;    border-width: 125px 125px 0 0;    border-color: #f89d25 transparent transparent transparent;}.rso-cta .discount-text {  -ms-transform: rotate(-45deg); /* IE 9 */  -webkit-transform: rotate(-45deg); /* Chrome, Safari, Opera */  transform: rotate(-45deg);  position: absolute;  top:17px;  left: 17px;  font-size: 1.5em;  color: #fff;  font-weight: bold;  line-height: .9em;}.rso-cta .price-container {  position: absolute;  width: 550px;  top:35px;}.rso-cta .price-container .normally{  text-align: center;  font-size: 1.25em;  color: #ccc;}.rso-cta .price-container .now-just{  text-align: right;  position: absolute;  top:30px;  left: 85px;  display: block !important;  width: 100px;  height: 100px;  font-size: 1.25em;  color: #333;}.rso-cta .price-container .offer-price{  position: absolute;  left: 198px;  top: 23px;  display: block !important;  width: 300px;  height: 100px;  font-size: 3em;  color:#3575D3;}.rso-btn {  position: absolute !important;  right:50px !important;  font-size: 2em !important;  top: 50px !important;  background: #01c201 !important;  border: none !important;  text-transform:  capitalize;}.lb-close {  float: right;  cursor: pointer;  position: absolute;  top:10px;  right:10px;  z-index: 100;  color: #fff;}.rso-cta input.btn_secondary.rso-btn {  text-transform: none;}.offer-price-details {  font-size: .875em;  padding-left: 9.75em;  padding-top: .875em;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get('utils');
var body = document.querySelector('body');
var hosting_plan = widget.cpanel_package;

// show every three days
var currentDate = new Date().getTime();
var instanceID = "optly_ui_modal_shown-" + extension.$instance; 
var optlyModalWasShown = window.localStorage.getItem(instanceID);
var daysLastShown = timeDifference(currentDate, optlyModalWasShown).days;
var optlyShowModal = (daysLastShown >= 3 || extension.show_modal_once === 'false') ? true : false;

// get time difference between two time stamps.
function timeDifference(date1, date2) {
  var difference = date1 - date2;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  return {days: daysDifference, hours: hoursDifference, minutes: minutesDifference, seconds: secondsDifference};
}

function showPopup() {
  if (document.querySelector('.fade-out')) {
    document.querySelector('.fade-out').classList.remove('fade-out');
  }

  document.querySelector('.exit-intent-modal').classList += ' fade-in';

  window.localStorage.setItem(instanceID, currentDate);

  window.addEventListener('keydown', closeOnEsc);
}

function hidePopup() {
  document.querySelector('.exit-intent-modal').classList += ' fade-out';

  document.querySelector('.exit-intent-modal').style.display = 'none';

  window.optimizley = window.optimizley || [];

  window.optimizley.push({
    type: "event",
    eventName: "close_modal"
  });

  window.removeEventListener('keydown', closeOnEsc);
}

function bindCloseBtn() {
  document.querySelector('.exit-intent-modal').addEventListener('click', function(event) {
    // an array of selectors that will close the modal.
    // this is to make it easier to specify multiple items that are clickable
    // to close it.
    var selectorsToClose = [
      '#exit-popup-overlay',
      '#exit-popup-close',
      '#exit-popup-wrapper'
    ].join(', ');

    if (event.target.matches(selectorsToClose)) {
      event.preventDefault();
      hidePopup();
    }
    event.stopPropagation();
  });
}

function closeOnEsc(e, modal) {
  var keyPressed = e.key;

  if (keyPressed === 'Escape') {
    hidePopup();
  }
}

// only triggers modal open when mouse leave is top edge and left/right within 100px from top
function openOnMouseOut( e ) {
  // find cursor position
  var yPositionOnLeave = e.clientY;
  var xPositionOnLeave = e.clientX;

  // if user leaves on left/right within a tolerance of the topEdge
  // we want to trigger our modal
  var topEdge = 100;
  // in rightEdge we have wiggle room for the scrollbar
  var rightEdge = document.documentElement.clientWidth - 5;
  // leftEdge also has some wiggle room for FireFox triggering the event early
  var leftEdge = 5;

  // for leaving the top we do not care about topEdge
  // the user needs to really leave the window
  var isMouseLeaveTop = (yPositionOnLeave < 5) ? true : false;

  // for leaving the left/right look for x or y being > or < the edges
  // depending on which way the cursor left the window
  var isMouseLeaveRight = (xPositionOnLeave >= rightEdge) ? true : false;
  var isMouseLeaveLeft = (xPositionOnLeave <= leftEdge) ? true : false;

  // due to a FireFox bug we need to know if the target is a select or not
  var isTargetSelect = false;

  // FireFox has bug when clicking on selects
  // it triggers mouseleave and mouseout events
  if (e.target.nodeName.toLowerCase() === 'select') {
    isTargetSelect = true;
  }

  if ( ( isMouseLeaveTop || ( yPositionOnLeave < topEdge ) && isMouseLeaveRight || ( yPositionOnLeave < topEdge ) && isMouseLeaveLeft ) && !isTargetSelect ) {
    showPopup();
    bindCloseBtn();

    // remove listener after it is open
    document.querySelector('body').removeEventListener('mouseout', openOnMouseOut);
  }
}

// parse all parameters in cookies
function parseParameters(paramString, delimiter) {
  var parsedParams = {};

  paramString.split(delimiter).filter(function(item) {
    var parameter = item.split('=');
    parsedParams[parameter[0]] = parameter[1];
  });

  return parsedParams;
}

// get currency from cookies
var cookies = parseParameters(document.cookie, '; ');

var currency_symbol = {
  'USD': '$',
  'GBP': '£',
  'EUR': '€',
  'CAD': 'CA$',
  'AUD': 'AU$',
};

var selectedCurrency = cookies['Currency'] || "USD";

function getApiPrice() {
  // get price from API
  var apiUrl = "https://www.bluehost.com/sapien/cap/offers/cpanel/" + hosting_plan + "?flow=" + widget.flow + "&currency=" + selectedCurrency;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(this.responseText);

      // set prices vars once they come back from API
      var price_info = data.cpanel[hosting_plan].term.add[36];

      widget.percent_off = Math.floor(100 - ((price_info.monthly / price_info.base_price) * 100));
      widget.strike_price = price_info.base_price;
      widget.normal_price = price_info.monthly;
      widget.currency_symbol = currency_symbol[selectedCurrency];
      pricesLoaded = true;
      renderRsoModal();
    }
  };
}

function addSignupForm() {
  var rso = document.querySelector('.rso-container .rso-cta');

  // create form used to submit RSO data on CTA click
  var form = document.createElement('form');
  form.setAttribute('action', '/web-hosting/signup');
  form.setAttribute('method', 'POST');

  // create div to add form to
  var btnDiv = document.createElement('div');
  btnDiv.classList.add('rso-cta-btn-div');

  // array of fields that need to be pulled from the signup page
  var fieldsFromPage = ['domain_action', 'currency', 'domain'];
  var plan = document.querySelector('#term option[selected]').value;

  // initial form fields to setup that are not on the signup page
  var fieldsToAddToForm = [
    {
      'name': 'flow',
      'value': widget.flow,
      'type': 'hidden',
    },
    {
      'name': 'cpanel_plan',
      'value': plan,
      'type': 'hidden',
    },
    {
      'name': 'hosting_plan',
      'value': plan,
      'type': 'hidden',
    },
    {
      'name': 'submit',
      'value': 'Claim Savings',
      'type': 'submit',
      'class': 'btn_secondary rso-btn',
    },
  ];

  // grab the values of input fields from the signup page
  // and add them to a list of fields that need to be created
  // for the rso modal form
  var signupForm = document.getElementById('signup_form');
  fieldsFromPage.forEach(function(fieldName) {
    var input = signupForm[fieldName];

    if (input && input.value) {
      fieldsToAddToForm.push({
        name: input.name,
        value: input.value,
        type: 'hidden'
      });
    }
  });

  // generate all the fields for the RSO modal form
  fieldsToAddToForm.forEach(function(field) {
    var input = document.createElement('input');
    var attributes = Object.keys(field);

    // adds an attribute for each property in the object
    attributes.forEach(function(attr) {
      input.setAttribute(attr, field[attr]);
    });

    form.append(input);
  });

  // add form to modal
  btnDiv.append(form);
  rso.append(btnDiv);

  // setup tracking
  trackRsoEvent();
}

function trackRsoEvent() {
  var rsoNowJust = document.querySelector('div.offer-price').innerHTML;
  var rsoPCapanel = document.querySelector('input[name="cpanel_plan"]');
  var rsoPHosting = document.querySelector('input[name="hosting_plan"]');
  var rsoP;
  var rsoLabelVal = '';

  if (rsoNowJust !== null) {
    if (rsoPCapanel !== null) {
      rsoP = rsoPCapanel.value;
      rsoLabelVal = "cpanel:" + rsoP + "_" + rsoNowJust;
    } else if (rsoPHosting !== null) {
      rsoP = rsoPHosting.value;
      rsoLabelVal = rsoP + "_" + rsoNowJust;
    }
    window.dataLayer.push({
      'event': 'GAEvent',
      'eventCategory': 'RSO',
      'eventAction': 'RSO View',
      'eventLabel': rsoLabelVal
    });
  }

  var rsoBtn = document.querySelector('.rso-btn');

  // add tracking event on the RSO CTA button
  rsoBtn.addEventListener('click', function() {
    window.dataLayer.push({
      'event': 'GAEvent',
      'eventCategory': 'RSO',
      'eventAction': 'RSO Click',
      'eventLabel': rsoLabelVal
    });
  });
}

var domLoaded = false;
var pricesLoaded = false;

function renderRsoModal() {
  // check if the prices load and enough
  // of the dom has loaded before creating modal
  if (domLoaded && pricesLoaded) {
    // create bullet list
    var bullets = [
      widget.bullet_1,
      widget.bullet_2,
      widget.bullet_3
    ];

    bullets = bullets.filter(function(item) {
      return item.length > 0;
    });

    widget.bulletList = '<li>' + bullets.join("</li><li>") + '</li>';

    var html = "";
    html = widget.$render({
      widget: widget
    });

    body.insertAdjacentHTML('afterbegin', html);
    body.addEventListener('mouseout', openOnMouseOut);

    addSignupForm();
  }
}

// if modal hasn't been shown in the set amount of time, get price and then render modal
if (optlyShowModal && (widget.apply_to_currency === selectedCurrency || widget.apply_to_currency === 'all')) {
  getApiPrice();

  utils.waitForElement('.signup--cta-wrapper').then(function() {
    domLoaded = true;
    renderRsoModal();
  });
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "16937313236";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"headline","default_value":"Don't go yet!"},{"name":"secondary","default_value":"Get up to 66% off"},{"name":"bullet_1","default_value":"wrap text in html tags <b>for bold</b> and <i>for italics</i>"},{"name":"bullet_2","default_value":"wrap text in html tags <b>for bold</b> and <i>for italics</i> "},{"name":"bullet_3","default_value":"wrap text in html tags <b>for bold</b> and <i>for italics</i> "},{"name":"imageSrc","default_value":"https://bluehost-cdn.com/media/shared/signup/happy-people.png"},{"name":"show_modal_once","default_value":"true"},{"name":"apply_to_currency","default_value":"all"},{"name":"flow","default_value":"rso1"},{"name":"cpanel_package","default_value":"basic"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-16937313236');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHTML = document.querySelector('.exit-intent-modal');
if (extensionHTML) extensionHTML.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '17935433218',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div ");t.b("\n" + i);t.b("  id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" ");t.b("\n" + i);t.b("  style=\"background-color: ");t.b(t.v(t.d("extension.bgColor",c,p,0)));t.b("; color: ");t.b(t.v(t.d("extension.txtColor",c,p,0)));t.b(";\" ");t.b("\n" + i);t.b("  class=\"site-top-banner\"");t.b("\n" + i);t.b(">");t.b("\n" + i);t.b("  <p>");t.b(t.v(t.d("extension.text",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "17935433218";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"text","default_value":"Welcome Typepad customers to our partner brand, Bluehost!"},{"name":"bgColor","default_value":"rgba(106, 206, 38, 1)"},{"name":"txtColor","default_value":"rgba(255, 255, 255, 1)"},{"name":"useParam","default_value":"true"},{"name":"brandRedirect","default_value":"typepad"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-17935433218';
widget._styleTag.innerHTML = '.site-top-banner {  padding: 2rem;  text-align: center;  position: static;  z-index: 100;}.site-top-banner p:last-of-type {  margin-bottom: 0;}header.legacy-nav .navbar-default .navbar-nav {  padding-bottom: 10rem;}@media(min-width: 992px) {  header.legacy-nav .navbar-default .navbar-nav {    padding-bottom: 0;  }}@media (max-width: 991px) {  .site-wrapper.show-nav .site-canvas .collapse-offcanvas {    pointer-events: all;  }}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = optimizely.get('utils');

function renderBanner(content, target) {
  target.insertAdjacentHTML('beforebegin', widget.$html);
}

function parseParameters(paramString, delimiter) {
  var parsedParams = {};

  paramString.split(delimiter).filter(function(item) {
    var parameter = item.split('=');
    parsedParams[parameter[0]] = parameter[1];
  });

  return parsedParams;
}

utils.waitForElement('footer')
  .then(function(elem) {
    var target = document.querySelector('.site-wrapper');
    var urlQuery = window.location.search.split('?')[1] || '';
  	var queryParams = parseParameters(urlQuery, '&');
  
  	var hasUrlParam = queryParams.brandRedirect && queryParams.brandRedirect === widget.brandRedirect;
  	var showWithoutParam = widget.useParam === 'false';
  
  	if (hasUrlParam || showWithoutParam) {
        renderBanner(extension.$html, target);
    }
  });



      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "17935433218";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"text","default_value":"Welcome Typepad customers to our partner brand, Bluehost!"},{"name":"bgColor","default_value":"rgba(106, 206, 38, 1)"},{"name":"txtColor","default_value":"rgba(255, 255, 255, 1)"},{"name":"useParam","default_value":"true"},{"name":"brandRedirect","default_value":"typepad"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-17935433218');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionElement = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionElement) {
  extensionElement.parentElement.removeChild(extensionElement);
}

      },
    });

PluginManager.registerWidget({
      widgetId: '20963010072',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<style>");t.b("\n" + i);t.b("  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');");t.b("\n" + i);t.b("</style>");t.b("\n" + i);t.b("<div class=\"exit-intent-modal\">");t.b("\n" + i);t.b("  <div class=\"exit-popup-overlay\">");t.b("\n" + i);t.b("    <div class=\"exit-popup rso-container\" style=\"background: ");t.b(t.v(t.d("widget.modalBG",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div id=\"exit-popup-close\" class=\"exit-popup-close\">");t.b("\n" + i);t.b("        <img class=\"modal-close-button\" src=\"");t.b(t.t(t.d("widget.closeButton",c,p,0)));t.b("\" alt=\"Close\" />");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"content-container\">");t.b("\n" + i);t.b("        <div class=\"col\">");t.b("\n" + i);t.b("          <div class=\"text-container\">");t.b("\n" + i);t.b("          	<h2>");t.b(t.t(t.d("widget.headline",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        		<h3>");t.b(t.t(t.d("widget.subHeadline",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("        		<ul>");t.b(t.t(t.d("widget.featureList",c,p,0)));t.b("</ul>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"btn-wrapper\">");t.b("\n" + i);t.b("          	<a href=\"");t.b(t.v(t.d("widget.ctaHref",c,p,0)));t.b("\" class=\"rso-btn\" style=\"background: ");t.b(t.v(t.d("widget.buttonBG",c,p,0)));t.b(";color: ");t.b(t.v(t.d("widget.buttonTextColor",c,p,0)));t.b(";\">");t.b("\n" + i);t.b("            	");t.b(t.t(t.d("widget.ctaText",c,p,0)));t.b("\n" + i);t.b("          	</a>");t.b("\n" + i);t.b("       		</div>");t.b("\n" + i);t.b("          <div class=\"price-wrapper\">");t.b("\n" + i);t.b("            <p class=\"price-block\">");t.b("\n" + i);t.b("              Normally <s>");t.b(t.t(t.d("widget.currency_symbol",c,p,0)));t.b(t.t(t.d("widget.strike_price",c,p,0)));t.b("</s>");t.b("\n" + i);t.b("              <span>Now ");t.b(t.t(t.d("widget.currency_symbol",c,p,0)));t.b(t.t(t.d("widget.normal_price",c,p,0)));t.b("/month*</span>");t.b("\n" + i);t.b("            </p>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"col\">");t.b("\n" + i);t.b("          <div class=\"image-container\" style=\"background: ");t.b(t.v(t.d("widget.imageBackground",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <img src=\"");t.b(t.t(t.d("widget.image",c,p,0)));t.b("\" title=\"Modal image\" />");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <p class=\"disclaimer\">*");t.b(t.t(t.d("widget.disclaimerText",c,p,0)));t.b(" <a href=\"");t.b(t.t(t.d("widget.disclaimerHref",c,p,0)));t.b("\" target=\"_blank\">");t.b(t.t(t.d("widget.disclaimerLinkText",c,p,0)));t.b("</a>.</p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "20963010072";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"headline","default_value":"The right hosting at the right price"},{"name":"subHeadline","default_value":"Pick a monthly plan to get started."},{"name":"ctaText","default_value":"Apply discount"},{"name":"modalBG","default_value":"rgba(255, 255, 255, 1)"},{"name":"show_modal_once","default_value":"true"},{"name":"apply_to_currency","default_value":"all"},{"name":"flow","default_value":"RSO1"},{"name":"planPackage","default_value":"basic"},{"name":"termLength","default_value":"36"},{"name":"productFamily","default_value":"cpanel"},{"name":"buttonBG","default_value":"rgba(53, 117, 211, 1)"},{"name":"buttonTextColor","default_value":"rgba(255, 255, 255, 1)"},{"name":"closeButton","default_value":"//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png"},{"name":"billingStep","default_value":".page-pickplan"},{"name":"featureList","default_value":"<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Start building your site today using temporary domain name and get a real domain name when you are ready.</li>"},{"name":"image","default_value":"//cdn.optimizely.com/img/2125675982/a2bf1afb58874436bc2cb4e5d5b35c84.svg"},{"name":"imageBackground","default_value":"rgba(186, 233, 252, 1)"},{"name":"disclaimerText","default_value":"The introductory prices are for the first term of service only and automatically renew at the"},{"name":"disclaimerLinkText","default_value":"regular rate"},{"name":"disclaimerHref","default_value":"https://www.bluehost.com/help/article/shared-hosting-prices"},{"name":"domainAndTerm","default_value":"false"},{"name":"termAndNoDomain","default_value":"false"},{"name":"noTermNoDomain","default_value":"false"},{"name":"noTermAndHasDomain","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-20963010072';
widget._styleTag.innerHTML = '@media (max-width: 767px) {  .exit-intent-modal {    display: none !important;  }}.exit-intent-modal {  opacity: 0;  position: fixed;  z-index: 3001;  width: 100%;  height: 100%;  display: none;}.exit-intent-modal.fade-in {  display: block;}body {  height: 100%;  position: relative;}.exit-popup-overlay {  height: 100vh;  z-index: 3000;  position: fixed;  width: 100%;  background: rgba(0, 0, 0, 0.5);}.exit-popup {  top: 50%;  left: 50%;  transform: translate(-50%, -50%);  width: calc(100% - 30px);  max-width: 674px;  border-radius: .6em;  padding: 2.5rem;  position: absolute;  z-index: 3001;}.exit-popup h2 {  font-size: 24px;  font-weight: 700;  line-height: 28px;  font-family: "Montserrat", sans-serif;  margin-top: 0;  color: #03243B;  margin-bottom: .8rem;}.exit-popup h3 {  font-family: "Montserrat", sans-serif;  font-size: 16px;  line-height: 24px;  font-weight: 500;  color: #5B5B5B;  margin-top: 0;  margin-bottom: 0;}.exit-popup li {  font-size: 14px;  line-height: 18px;  color: #5B5B5B;}.exit-popup .content-container ul {  padding-left: 1.2rem;}.exit-popup .content-container li {  padding-bottom: .5rem;}.exit-popup p {  font-size: 18px;  line-height: 28px;  color: #5B5B5B;  font-weight: 300;}.exit-popup .price-block {  font-family: "Montserrat", sans-serif;  font-size: 14px;  color: #5B5B5B;  line-height: 18px;  margin-bottom: 0;  margin-top: 2rem;}.exit-popup .price-block span {  color: #3575D3;  font-size: 20px;  font-weight: 700;  display: block;  margin-top: .5rem;}.exit-popup-close {  font-size: 20px;  position: absolute;  cursor: pointer;  top: 15px;  right: 15px;  z-index: 100;  font-weight: 100;}.exit-popup-close:hover {  color: #999;}.fade-in {  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */  -moz-animation: fadein 0.5s; /* Firefox < 16 */  -ms-animation: fadein 0.5s; /* Internet Explorer */  -o-animation: fadein 0.5s; /* Opera < 12.1 */  animation: fadein 0.5s;  opacity: 1 !important;}.fade-out {  -webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */  -moz-animation: fadeout 1s; /* Firefox < 16 */  -ms-animation: fadeout 1s; /* Internet Explorer */  -o-animation: fadeout 1s; /* Opera < 12.1 */  animation: fadeout 1s;  opacity: 0 !important;}@keyframes fadein {  from {    opacity: 0;  }  to {    opacity: 1;  }}/* Firefox < 16 */@-moz-keyframes fadein {  from {    opacity: 0;  }  to {    opacity: 1;  }}/* Safari, Chrome and Opera > 12.1 */@-webkit-keyframes fadein {  from {    opacity: 0;  }  to {    opacity: 1;  }}/* Internet Explorer */@-ms-keyframes fadein {  from {    opacity: 0;  }  to {    opacity: 1;  }}/* Opera < 12.1 */@-o-keyframes fadein {  from {    opacity: 0;  }  to {    opacity: 1;  }}@keyframes fadeout {  from {    opacity: 1;  }  to {    opacity: 0;  }}/* Firefox < 16 */@-moz-keyframes fadeout {  from {    opacity: 1;  }  to {    opacity: 0;  }}/* Safari, Chrome and Opera > 12.1*/@-webkit-keyframes fadeout {  from {    opacity: 1;  }  to {    opacity: 0;  }}/* Internet Explorer*/@-ms-keyframes fadeout {  from {    opacity: 1;  }  to {    opacity: 0;  }}/* Opera < 12.1*/@-o-keyframes fadeout {  from {    opacity: 1;  }  to {    opacity: 0;  }}.exit-popup .content-container {  display: flex;  flex-direction: row;  flex-wrap: nowrap;}.exit-popup .content-container .col {  width: 50%;}.exit-popup img {  margin-left: auto;  margin-right: auto;  display: block;  width: 100%;}.exit-popup .btn-wrapper {  margin-bottom: 0;  margin-top: 0;}a.rso-btn {  padding: 1rem 1.5rem;  font-size: 15px;  text-align: center;  text-decoration: none;  font-weight: 900;  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;  line-height: 1;  border-radius: 4px;  overflow: hidden;  transition: all .5s ease;  display: inline-block;  margin-bottom: -.5rem;}a.rso-btn:hover {  color: #fff;  border-color: #85de49;  box-shadow: 0.2rem 0.1rem 1.2rem rgba(91, 91, 91, 0.5);  background-size: 150% 100%;  background-position: 50% center;  transition: all 1s ease;  text-decoration: none;}.exit-popup .image-container {  border-radius: 1rem;  display: flex;  padding: 1rem;  height: 100%;  width: 100%;}.exit-popup .text-container {  padding-right: 1rem;}.exit-popup .disclaimer {  width: auto !important;  line-height: 16px;  padding-bottom: 0;  margin-bottom: 0;  margin-top: 1.5rem;  font-size: 11px;}}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get('utils');
var productFamily = widget.productFamily || 'cpanel';
var hosting_plan = widget.planPackage;

// show every three days
var currentDate = new Date().getTime();
var instanceID = "optly_ui_modal_shown-" + extension.$instance;
var optlyModalWasShown = window.localStorage.getItem(instanceID);
var daysLastShown = timeDifference(currentDate, optlyModalWasShown).days;
var optlyShowModal = (daysLastShown >= 3 || extension.show_modal_once === 'false') ? true : false;

// get time difference between two time stamps.
function timeDifference(date1, date2) {
  var difference = date1 - date2;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  
  return {
    days: daysDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference
  };
}

function showPopup() {
  if (document.querySelector('.fade-out')) {
    document.querySelector('.fade-out').classList.remove('fade-out');
  }

  document.querySelector('.exit-intent-modal').classList += ' fade-in';

  window.localStorage.setItem(instanceID, currentDate);

  window.addEventListener('keydown', closeOnEsc);
}

function hidePopup() {
  document.querySelector('.exit-intent-modal').classList += ' fade-out';

  document.querySelector('.exit-intent-modal').style.display = 'none';

  window.optimizley = window.optimizley || [];

  window.optimizley.push({
    type: "event",
    eventName: "close_modal"
  });

  window.removeEventListener('keydown', closeOnEsc);
}

function bindCloseBtn() {
  document.querySelector('.exit-intent-modal').addEventListener('click', function(event) {
    // an array of selectors that will close the modal.
    // this is to make it easier to specify multiple items that are clickable
    // to close it.
    var selectorsToClose = [
      '.exit-popup-overlay',
      '#exit-popup-close',
      '.modal-close-button',
    ].join(', ');

    if (event.target.matches(selectorsToClose)) {
      event.preventDefault();
      hidePopup();
    }
    event.stopPropagation();
  });
}

function closeOnEsc(e, modal) {
  var keyPressed = e.key;

  if (keyPressed === 'Escape') {
    hidePopup();
  }
}

// only triggers modal open when mouse leave is top edge and left/right within 100px from top
function openOnMouseOut( e ) {
  // find cursor position
  var yPositionOnLeave = e.clientY;
  var xPositionOnLeave = e.clientX;

  // if user leaves on left/right within a tolerance of the topEdge
  // we want to trigger our modal
  var topEdge = 100;
  // in rightEdge we have wiggle room for the scrollbar
  var rightEdge = document.documentElement.clientWidth - 5;
  // leftEdge also has some wiggle room for FireFox triggering the event early
  var leftEdge = 5;

  // for leaving the top we do not care about topEdge
  // the user needs to really leave the window
  var isMouseLeaveTop = (yPositionOnLeave < 5) ? true : false;

  // for leaving the left/right look for x or y being > or < the edges
  // depending on which way the cursor left the window
  var isMouseLeaveRight = (xPositionOnLeave >= rightEdge) ? true : false;
  var isMouseLeaveLeft = (xPositionOnLeave <= leftEdge) ? true : false;

  // due to a FireFox bug we need to know if the target is a select or not
  var isTargetSelect = false;

  // FireFox has bug when clicking on selects
  // it triggers mouseleave and mouseout events
  if (e.target.nodeName.toLowerCase() === 'select') {
    isTargetSelect = true;
  }

  if (( isMouseLeaveTop || ( yPositionOnLeave < topEdge ) && isMouseLeaveRight || ( yPositionOnLeave < topEdge ) && isMouseLeaveLeft ) && !isTargetSelect ) {
    showPopup();
    bindCloseBtn();
    
    // remove listener after it is open
    document.querySelector('body').removeEventListener('mouseout', openOnMouseOut);
  }
}

// parse all parameters in cookies
function parseParameters(paramString, delimiter) {
  var parsedParams = {};

  paramString.split(delimiter).filter(function(item) {
    var parameter = item.split('=');
    parsedParams[parameter[0]] = parameter[1];
  });

  return parsedParams;
}

// get currency from cookies
var cookies = parseParameters(document.cookie, '; ');

var currency_symbol = {
  'USD': '$',
  'GBP': '£',
  'EUR': '€',
  'CAD': 'CA$',
  'AUD': 'AU$',
};

var selectedCurrency = cookies.Currency || "USD";

function getApiPrice() {
  // get price from API
  var apiUrl = "https://www.bluehost.com/sapien/cap/offers/" + productFamily + "/" + hosting_plan + "?flow=" + widget.flow + "&currency=" + selectedCurrency;
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', apiUrl);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(this.responseText);

      var termLength = extension.termLength || 36;

      // set prices vars once they come back from API
      var price_info = data.cpanel[hosting_plan].term.add[termLength];

      widget.percent_off = Math.floor(100 - ((price_info.monthly / price_info.base_price) * 100));
      widget.strike_price = price_info.base_price;
      widget.normal_price = price_info.monthly;
      widget.currency_symbol = currency_symbol[selectedCurrency];
      
      pricesLoaded = true;
      
      renderRsoModal();
    }
  };
}

function trackRsoEvent() {
  var rsoNowJust = document.querySelector('.offer-price').textContent;
  var rsoPCapanel = productFamily;
  var rsoPHosting = hosting_plan;
  var rsoLabelVal = '';

  if (rsoNowJust !== null) {
    if (rsoPCapanel !== null) {
      rsoLabelVal = rsoPCapanel + ":" + rsoPHosting + "_" + rsoNowJust;
    } else if (rsoPHosting !== null) {
      rsoP = rsoPHosting.value;
      rsoLabelVal = rsoPHosting + "_" + rsoNowJust;
    }

    window.dataLayer.push({
      'event': 'GAEvent',
      'eventCategory': 'RSO',
      'eventAction': 'RSO View',
      'eventLabel': rsoLabelVal
    });
  }

  var rsoBtn = document.querySelector('.rso-btn');

  // add tracking event on the RSO CTA button
  rsoBtn.addEventListener('click', function() {
    window.dataLayer.push({
      'event': 'GAEvent',
      'eventCategory': 'RSO',
      'eventAction': 'RSO Click',
      'eventLabel': rsoLabelVal
    });
  });
}

function getSelectedProduct() {
  // the term dropdown contains the selected product
  var productDropdown = document.getElementById('term');  
  var productTerms = productDropdown.getElementsByTagName('option'); 

  // get the value from the selected one
  var selectedProduct = productTerms[productDropdown.selectedIndex].value;
  
  return selectedProduct;
}

function hasMatchingTerm() {
  var matchingTerm = getSelectedProduct().split('-')[1] === widget.termLength;

  return matchingTerm;
}

function oneMonthTermOffered() {
  var oneMonthWasOffered = false;
  
  // the term dropdown contains the selected product
  var productDropdown = document.getElementById('term');  
  var productTerms = productDropdown.getElementsByTagName('option');
      
  Array.from(productTerms).forEach(function(option) {
    if (option.dataset && option.dataset.term === "1") {
      oneMonthWasOffered = true;
    }
  });
        
  return oneMonthWasOffered;
}

function hasDomain() {
  // cart is not visible but there will be a success message for the domain
  var hasDomainPrivacy = document.querySelector('.privacy_domain_name');
        
  return hasDomainPrivacy ? hasDomainPrivacy : false;
}

function getCtaUrl() {  
  // create RSO href
  var baseHref = 'https://www.bluehost.com/web-hosting/signup';
  var plan = '?cpanel_plan=' + widget.planPackage;
  var term = '&term=' + widget.productFamily + ':' + widget.planPackage + '-' + widget.termLength;
  var flow = '&flow=' + widget.flow;
  
  var newHref = baseHref + plan + term + flow;
  
  // when domain is required the TLD needs to be added to the href
  if (widget.domainAndTerm === 'true' || widget.noTermAndHasDomain === 'true') {
    var tld = hasDomain().innerText;
    
    newHref = newHref + '&domain=' + tld;
  }
  
  // if the requirement is no domain then bypass domain search
  if (widget.termAndNoDomain === 'true' || widget.noTermNoDomain === 'true') {
    newHref = newHref + '&domain_action=domainless';
  }
  
  return newHref;
}

var pricesLoaded = false;

function renderRsoModal() {
  var body = document.querySelector('body');

  // wait for prices from api
  if (pricesLoaded) {
    // get cta to be used in the modal
    widget.ctaHref = getCtaUrl();
    
    // create the html
    var html = widget.$render({
      widget: widget
    });
    
    // insert the modal
    body.insertAdjacentHTML('afterbegin', html);
    
    // set listener for watching user leave window
    body.addEventListener('mouseout', openOnMouseOut);
    
    trackRsoEvent();
  }
}

// if modal hasn't been shown in the set amount of time, get price and then render modal
if (optlyShowModal && (widget.apply_to_currency === selectedCurrency || widget.apply_to_currency === 'all')) {
  // wait for selected billing step before triggering
  utils.waitForElement('.signup' + widget.billingStep + ' #term').then(function(elem) {
    // get api prices needed to setup RSO
    // check current product
    var currentProduct = getSelectedProduct();
    
    // product for RSO
    var rsoProduct = widget.productFamily + ':' + widget.planPackage;
    
    // check to see it matches
    var doesMatchProduct = currentProduct.indexOf(rsoProduct) > -1;
        
    // criteria has been met if neither requirements are set to true   
    var requiresDomainAndTerm = widget.domainAndTerm === 'true';
    var requiresTermAndNoDomain = widget.termAndNoDomain === 'true';
    var requiresDidNotSeeTermAndNoDomain = widget.noTermNoDomain === 'true';
    var requiresDidNotSeeTermAndHasDomain = widget.noTermAndHasDomain === 'true';
    
    // set criteria to false
    var hasMetCriteria = false;
    
    // check for domain in cart and for matching term
    var hasDomainInCart = hasDomain();
    var doesTermMatch = hasMatchingTerm();
    
    // condition for matching term and domain in cart
    if (requiresDomainAndTerm) {       
      if (hasDomainInCart && doesTermMatch) {
        // get tld so another domain search is not required
        var tld = hasDomainInCart.innerText;
                
        hasMetCriteria = true;
      }
    }
    
    // condition for matching term but no domain in cart
    if (requiresTermAndNoDomain) {      
      if (doesTermMatch && !hasDomainInCart) {
        hasMetCriteria = true;
      }
    }
    
    // condition for no domain and did not see 1 month offer
    if (requiresDidNotSeeTermAndNoDomain) {
      var termWasOffered = oneMonthTermOffered();
      
      if (!hasDomainInCart && !termWasOffered) {
        hasMetCriteria = true;
      }
    }
    
    // condition for with domain but did not see 1 month offer
    if (requiresDidNotSeeTermAndHasDomain) {
      var termWasOffered = oneMonthTermOffered();
    
      if (!termWasOffered && hasDomainInCart) {
        hasMetCriteria = true;
      }
    }
        
    // run getApiPrice when we have a match
    // triggers renderRsoModal when successful
    if (doesMatchProduct && hasMetCriteria) {
      getApiPrice();
    }
  });
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "20963010072";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"headline","default_value":"The right hosting at the right price"},{"name":"subHeadline","default_value":"Pick a monthly plan to get started."},{"name":"ctaText","default_value":"Apply discount"},{"name":"modalBG","default_value":"rgba(255, 255, 255, 1)"},{"name":"show_modal_once","default_value":"true"},{"name":"apply_to_currency","default_value":"all"},{"name":"flow","default_value":"RSO1"},{"name":"planPackage","default_value":"basic"},{"name":"termLength","default_value":"36"},{"name":"productFamily","default_value":"cpanel"},{"name":"buttonBG","default_value":"rgba(53, 117, 211, 1)"},{"name":"buttonTextColor","default_value":"rgba(255, 255, 255, 1)"},{"name":"closeButton","default_value":"//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png"},{"name":"billingStep","default_value":".page-pickplan"},{"name":"featureList","default_value":"<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Start building your site today using temporary domain name and get a real domain name when you are ready.</li>"},{"name":"image","default_value":"//cdn.optimizely.com/img/2125675982/a2bf1afb58874436bc2cb4e5d5b35c84.svg"},{"name":"imageBackground","default_value":"rgba(186, 233, 252, 1)"},{"name":"disclaimerText","default_value":"The introductory prices are for the first term of service only and automatically renew at the"},{"name":"disclaimerLinkText","default_value":"regular rate"},{"name":"disclaimerHref","default_value":"https://www.bluehost.com/help/article/shared-hosting-prices"},{"name":"domainAndTerm","default_value":"false"},{"name":"termAndNoDomain","default_value":"false"},{"name":"noTermNoDomain","default_value":"false"},{"name":"noTermAndHasDomain","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-20963010072');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHTML = document.querySelector('.exit-intent-modal');
if (extensionHTML) extensionHTML.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '20968381272',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<style>");t.b("\n" + i);t.b("  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');");t.b("\n");t.b("\n" + i);t.b("  @media (max-width: 767px) {");t.b("\n" + i);t.b("  .exit-intent-modal {");t.b("\n" + i);t.b("    display: none !important;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-intent-modal {");t.b("\n" + i);t.b("  opacity: 0;");t.b("\n" + i);t.b("  position: fixed;");t.b("\n" + i);t.b("  z-index: 3001;");t.b("\n" + i);t.b("  width: 100%;");t.b("\n" + i);t.b("  height: 100%;");t.b("\n" + i);t.b("  display: none;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-intent-modal.fade-in {");t.b("\n" + i);t.b("  display: block;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("body {");t.b("\n" + i);t.b("  height: 100%;");t.b("\n" + i);t.b("  position: relative;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup-overlay {");t.b("\n" + i);t.b("  height: 100vh;");t.b("\n" + i);t.b("  z-index: 3000;");t.b("\n" + i);t.b("  position: fixed;");t.b("\n" + i);t.b("  width: 100%;");t.b("\n" + i);t.b("  background: rgba(0, 0, 0, 0.5);");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup {");t.b("\n" + i);t.b("  top: 50%;");t.b("\n" + i);t.b("  left: 50%;");t.b("\n" + i);t.b("  transform: translate(-50%, -50%);");t.b("\n" + i);t.b("  width: calc(100% - 30px);");t.b("\n" + i);t.b("  max-width: 674px;");t.b("\n" + i);t.b("  border-radius: .6em;");t.b("\n" + i);t.b("  padding: 3rem;");t.b("\n" + i);t.b("  position: absolute;");t.b("\n" + i);t.b("  z-index: 3001;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".exit-popup h2 {");t.b("\n" + i);t.b("  font-size: 24px;");t.b("\n" + i);t.b("  font-weight: 700;");t.b("\n" + i);t.b("  line-height: 28px;");t.b("\n" + i);t.b("  font-family: 'Montserrat', sans-serif;");t.b("\n" + i);t.b("  margin-top: 0;");t.b("\n" + i);t.b("  color: #03243B;");t.b("\n" + i);t.b("  margin-bottom: .8rem;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup h3 {");t.b("\n" + i);t.b("  font-size: 16px;");t.b("\n" + i);t.b("  line-height: 24px;");t.b("\n" + i);t.b("  font-family: 'Montserrat', sans-serif;");t.b("\n" + i);t.b("  font-weight: 500;");t.b("\n" + i);t.b("  color: #5B5B5B;");t.b("\n" + i);t.b("  margin-top: 0;");t.b("\n" + i);t.b("  margin-bottom: 0;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup li {");t.b("\n" + i);t.b("  font-size: 14px;");t.b("\n" + i);t.b("  line-height: 18px;");t.b("\n" + i);t.b("  color: #5B5B5B;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .content-container ul {");t.b("\n" + i);t.b("  padding-left: 1.2rem;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .content-container li {");t.b("\n" + i);t.b("  padding-bottom: .5rem;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup p {");t.b("\n" + i);t.b("  font-size: 18px;");t.b("\n" + i);t.b("  line-height: 28px;");t.b("\n" + i);t.b("  color: #5B5B5B;");t.b("\n" + i);t.b("  font-weight: 300;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .price-block {");t.b("\n" + i);t.b("  font-size: 14px;");t.b("\n" + i);t.b("  color: #5B5B5B;");t.b("\n" + i);t.b("  line-height: 18px;");t.b("\n" + i);t.b("  margin-bottom: 0;");t.b("\n" + i);t.b("  margin-top: 2rem;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .price-block span {");t.b("\n" + i);t.b("  color: #3575D3;");t.b("\n" + i);t.b("  font-size: 20px;");t.b("\n" + i);t.b("  font-weight: 700;");t.b("\n" + i);t.b("  display: block;");t.b("\n" + i);t.b("  margin-top: .5rem;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup-close {");t.b("\n" + i);t.b("  font-size: 20px;");t.b("\n" + i);t.b("  position: absolute;");t.b("\n" + i);t.b("  cursor: pointer;");t.b("\n" + i);t.b("  top: 15px;");t.b("\n" + i);t.b("  right: 15px;");t.b("\n" + i);t.b("  z-index: 100;");t.b("\n" + i);t.b("  font-weight: 100;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup-close:hover {");t.b("\n" + i);t.b("  color: #999;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".fade-in {");t.b("\n" + i);t.b("  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */");t.b("\n" + i);t.b("  -moz-animation: fadein 0.5s; /* Firefox < 16 */");t.b("\n" + i);t.b("  -ms-animation: fadein 0.5s; /* Internet Explorer */");t.b("\n" + i);t.b("  -o-animation: fadein 0.5s; /* Opera < 12.1 */");t.b("\n" + i);t.b("  animation: fadein 0.5s;");t.b("\n" + i);t.b("  opacity: 1 !important;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".fade-out {");t.b("\n" + i);t.b("  -webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */");t.b("\n" + i);t.b("  -moz-animation: fadeout 1s; /* Firefox < 16 */");t.b("\n" + i);t.b("  -ms-animation: fadeout 1s; /* Internet Explorer */");t.b("\n" + i);t.b("  -o-animation: fadeout 1s; /* Opera < 12.1 */");t.b("\n" + i);t.b("  animation: fadeout 1s;");t.b("\n" + i);t.b("  opacity: 0 !important;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("@keyframes fadein {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Firefox < 16 */");t.b("\n" + i);t.b("@-moz-keyframes fadein {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Safari, Chrome and Opera > 12.1 */");t.b("\n" + i);t.b("@-webkit-keyframes fadein {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Internet Explorer */");t.b("\n" + i);t.b("@-ms-keyframes fadein {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Opera < 12.1 */");t.b("\n" + i);t.b("@-o-keyframes fadein {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("@keyframes fadeout {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Firefox < 16 */");t.b("\n" + i);t.b("@-moz-keyframes fadeout {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Safari, Chrome and Opera > 12.1*/");t.b("\n" + i);t.b("@-webkit-keyframes fadeout {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Internet Explorer*/");t.b("\n" + i);t.b("@-ms-keyframes fadeout {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("/* Opera < 12.1*/");t.b("\n" + i);t.b("@-o-keyframes fadeout {");t.b("\n" + i);t.b("  from {");t.b("\n" + i);t.b("    opacity: 1;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  to {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .content-container {");t.b("\n" + i);t.b("  display: flex;");t.b("\n" + i);t.b("  flex-direction: row;");t.b("\n" + i);t.b("  flex-wrap: nowrap;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .content-container .col {");t.b("\n" + i);t.b("  width: 50%;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup img {");t.b("\n" + i);t.b("  margin-left: auto;");t.b("\n" + i);t.b("  margin-right: auto;");t.b("\n" + i);t.b("  display: block;");t.b("\n" + i);t.b("  width: 100%;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .btn-wrapper {");t.b("\n" + i);t.b("  margin-bottom: 0;");t.b("\n" + i);t.b("  margin-top: 0;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b("a.rso-btn {");t.b("\n" + i);t.b("  padding: 1rem 1.5rem;");t.b("\n" + i);t.b("  font-size: 15px;");t.b("\n" + i);t.b("  text-align: center;");t.b("\n" + i);t.b("  text-decoration: none;");t.b("\n" + i);t.b("  font-weight: 900;");t.b("\n" + i);t.b("  -webkit-font-smoothing: antialiased;");t.b("\n" + i);t.b("  -moz-osx-font-smoothing: grayscale;");t.b("\n" + i);t.b("  line-height: 1;");t.b("\n" + i);t.b("  border-radius: 4px;");t.b("\n" + i);t.b("  overflow: hidden;");t.b("\n" + i);t.b("  transition: all .5s ease;");t.b("\n" + i);t.b("  display: inline-block;");t.b("\n" + i);t.b("  margin-bottom: -.5rem;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("a.rso-btn:hover {");t.b("\n" + i);t.b("  color: #fff;");t.b("\n" + i);t.b("  border-color: #85de49;");t.b("\n" + i);t.b("  box-shadow: 0.2rem 0.1rem 1.2rem rgba(91, 91, 91, 0.5);");t.b("\n" + i);t.b("  background-size: 150% 100%;");t.b("\n" + i);t.b("  background-position: 50% center;");t.b("\n" + i);t.b("  transition: all 1s ease;");t.b("\n" + i);t.b("  text-decoration: none;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .image-container {");t.b("\n" + i);t.b("  border-radius: 1rem;");t.b("\n" + i);t.b("  display: flex;");t.b("\n" + i);t.b("  padding: 1rem;");t.b("\n" + i);t.b("  height: 100%;");t.b("\n" + i);t.b("  width: 100%;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .text-container {");t.b("\n" + i);t.b("  padding-right: 1rem;");t.b("\n" + i);t.b("}");t.b("\n");t.b("\n" + i);t.b(".exit-popup .disclaimer {");t.b("\n" + i);t.b("  width: auto !important;");t.b("\n" + i);t.b("  line-height: 16px;");t.b("\n" + i);t.b("  padding-bottom: 0;");t.b("\n" + i);t.b("  margin-bottom: 0;");t.b("\n" + i);t.b("  margin-top: 1.5rem;");t.b("\n" + i);t.b("  font-size: 11px;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie .exit-popup {");t.b("\n" + i);t.b("  padding: 3.8rem;  ");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie .exit-popup h2 {");t.b("\n" + i);t.b("  margin-bottom: 1.2rem;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie .exit-popup h3 {");t.b("\n" + i);t.b("  margin-bottom: 1.3rem;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie .exit-popup .content-container ul {");t.b("\n" + i);t.b("  padding-left: 2rem;");t.b("\n" + i);t.b("  margin-bottom: 2rem;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie .exit-popup .content-container li {");t.b("\n" + i);t.b("  font-size: 15px;");t.b("\n" + i);t.b("  padding-bottom: 1rem;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie a.rso-btn {");t.b("\n" + i);t.b("  padding: 2rem 2.5rem;  ");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("  ");t.b("\n" + i);t.b(".reggie .exit-popup .price-block {");t.b("\n" + i);t.b("  margin-top: 3rem;");t.b("\n" + i);t.b("}");t.b("\n" + i);t.b("</style>");t.b("\n");t.b("\n" + i);t.b("<div class=\"exit-intent-modal ");t.b(t.v(t.d("widget.isReggieClient",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <div class=\"exit-popup-overlay\">");t.b("\n" + i);t.b("    <div class=\"exit-popup rso-container\" style=\"background: ");t.b(t.v(t.d("widget.modalBG",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div id=\"exit-popup-close\" class=\"exit-popup-close\">");t.b("\n" + i);t.b("        <img class=\"modal-close-button\" src=\"");t.b(t.t(t.d("widget.closeButton",c,p,0)));t.b("\" alt=\"Close\" />");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"content-container\">");t.b("\n" + i);t.b("        <div class=\"col\">");t.b("\n" + i);t.b("          <div class=\"text-container\">");t.b("\n" + i);t.b("          	<h2>");t.b(t.t(t.d("widget.headline",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        		<h3>");t.b(t.t(t.d("widget.subHeadline",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("        		<ul>");t.b(t.t(t.d("widget.featureList",c,p,0)));t.b("</ul>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"btn-wrapper\">");t.b("\n" + i);t.b("          	<a href=\"");t.b(t.v(t.d("widget.ctaHref",c,p,0)));t.b("\" class=\"rso-btn\" style=\"background: ");t.b(t.v(t.d("widget.buttonBG",c,p,0)));t.b(";color: ");t.b(t.v(t.d("widget.buttonTextColor",c,p,0)));t.b(";\">");t.b("\n" + i);t.b("            	");t.b(t.t(t.d("widget.ctaText",c,p,0)));t.b("\n" + i);t.b("          	</a>");t.b("\n" + i);t.b("       		</div>");t.b("\n" + i);t.b("          <div class=\"price-wrapper\">");t.b("\n" + i);t.b("            <p class=\"price-block\">");t.b("\n" + i);t.b("              Normally <s>");t.b(t.t(t.d("widget.currency_symbol",c,p,0)));t.b(t.t(t.d("widget.strike_price",c,p,0)));t.b("</s>");t.b("\n" + i);t.b("              <span>Now ");t.b(t.t(t.d("widget.currency_symbol",c,p,0)));t.b(t.t(t.d("widget.normal_price",c,p,0)));t.b("/month*</span>");t.b("\n" + i);t.b("            </p>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"col\">");t.b("\n" + i);t.b("          <div class=\"image-container\" style=\"background: ");t.b(t.v(t.d("widget.imageBackground",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <img src=\"");t.b(t.t(t.d("widget.image",c,p,0)));t.b("\" title=\"Modal image\" />");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <p class=\"disclaimer\">*");t.b(t.t(t.d("widget.disclaimerText",c,p,0)));t.b(" <a href=\"");t.b(t.t(t.d("widget.disclaimerHref",c,p,0)));t.b("\" target=\"_blank\">");t.b(t.t(t.d("widget.disclaimerLinkText",c,p,0)));t.b("</a>.</p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "20968381272";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"isReggieClient","default_value":"legacy"},{"name":"headline","default_value":"The right hosting at the right price"},{"name":"subHeadline","default_value":"Pick a monthly plan to get started."},{"name":"ctaText","default_value":"Apply discount"},{"name":"modalBG","default_value":"rgba(255, 255, 255, 1)"},{"name":"show_modal_once","default_value":"true"},{"name":"apply_to_currency","default_value":"all"},{"name":"flow","default_value":"RSO1"},{"name":"planPackage","default_value":"basic"},{"name":"termLength","default_value":"36"},{"name":"productFamily","default_value":"cpanel"},{"name":"buttonBG","default_value":"rgba(53, 117, 211, 1)"},{"name":"buttonTextColor","default_value":"rgba(255, 255, 255, 1)"},{"name":"closeButton","default_value":"//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png"},{"name":"billingStep","default_value":"pickPlan"},{"name":"featureList","default_value":"<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Start building your site today using temporary domain name and get a real domain name when you are ready.</li>"},{"name":"image","default_value":"//cdn.optimizely.com/img/2125675982/a2bf1afb58874436bc2cb4e5d5b35c84.svg"},{"name":"imageBackground","default_value":"rgba(186, 233, 252, 1)"},{"name":"disclaimerText","default_value":"The introductory prices are for the first term of service only and automatically renew at the"},{"name":"disclaimerLinkText","default_value":"regular rate"},{"name":"disclaimerHref","default_value":"https://www.bluehost.com/help/article/shared-hosting-prices"},{"name":"domainAndTerm","default_value":"false"},{"name":"termAndNoDomain","default_value":"false"},{"name":"noTermNoDomain","default_value":"false"},{"name":"noTermAndHasDomain","default_value":"false"},{"name":"stepAfterDomain","default_value":"1"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var utils = window.optimizely.get('utils');
var productFamily = widget.productFamily || 'cpanel';
var hosting_plan = widget.planPackage;

// show every three days
var currentDate = new Date().getTime();
var instanceID = "optly_ui_modal_shown-" + extension.$instance;
var optlyModalWasShown = window.localStorage.getItem(instanceID);
var daysLastShown = timeDifference(currentDate, optlyModalWasShown).days;
var optlyShowModal = (daysLastShown >= 3 || extension.show_modal_once === 'false') ? true : false;

// legacy or reggie client
var isReggieClient = widget.isReggieClient === 'reggie';

// only trigger tracking once
var hasTracked = false;

// get time difference between two time stamps.
function timeDifference(date1, date2) {
  var difference = date1 - date2;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  
  return {
    days: daysDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference
  };
}

function showPopup() {
  if (document.querySelector('.fade-out')) {
    document.querySelector('.fade-out').classList.remove('fade-out');
  }

  document.querySelector('.exit-intent-modal').classList += ' fade-in';
  
  // only track event when we show it
  trackRsoEvent();
  
  window.localStorage.setItem(instanceID, currentDate);

  window.addEventListener('keydown', closeOnEsc);
}

function hidePopup() {
  document.querySelector('.exit-intent-modal').classList += ' fade-out';

  document.querySelector('.exit-intent-modal').style.display = 'none';

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    'event': 'GAEvent',
    'eventCategory': 'RSO',
    'eventAction': 'RSO Close',
    'eventLabel': productFamily + ':' + hosting_plan
  });

  window.removeEventListener('keydown', closeOnEsc);
}

function bindCloseBtn() {
  document.querySelector('.exit-intent-modal').addEventListener('click', function(event) {
    // an array of selectors that will close the modal.
    // this is to make it easier to specify multiple items that are clickable
    // to close it.
    var selectorsToClose = [
      '.exit-popup-overlay',
      '.modal-close-button',
    ].join(', ');

    if (event.target.matches(selectorsToClose)) {
      event.preventDefault();
      
      hidePopup();
    }
    event.stopPropagation();
  });
}

function closeOnEsc(e, modal) {
  var keyPressed = e.key;

  if (keyPressed === 'Escape') {
    hidePopup();
  }
}

// only triggers modal open when mouse leave is top edge and left/right within 100px from top
function openOnMouseOut( e ) {
  // find cursor position
  var yPositionOnLeave = e.clientY;
  var xPositionOnLeave = e.clientX;

  // if user leaves on left/right within a tolerance of the topEdge
  // we want to trigger our modal
  var topEdge = 100;
  // in rightEdge we have wiggle room for the scrollbar
  var rightEdge = document.documentElement.clientWidth - 5;
  // leftEdge also has some wiggle room for FireFox triggering the event early
  var leftEdge = 5;

  // for leaving the top we do not care about topEdge
  // the user needs to really leave the window
  var isMouseLeaveTop = (yPositionOnLeave < 5) ? true : false;

  // for leaving the left/right look for x or y being > or < the edges
  // depending on which way the cursor left the window
  var isMouseLeaveRight = (xPositionOnLeave >= rightEdge) ? true : false;
  var isMouseLeaveLeft = (xPositionOnLeave <= leftEdge) ? true : false;

  // due to a FireFox bug we need to know if the target is a select or not
  var isTargetSelect = false;

  // FireFox has bug when clicking on selects
  // it triggers mouseleave and mouseout events
  if (e.target.nodeName.toLowerCase() === 'select') {
    isTargetSelect = true;
  }

  if (( isMouseLeaveTop || ( yPositionOnLeave < topEdge ) && isMouseLeaveRight || ( yPositionOnLeave < topEdge ) && isMouseLeaveLeft ) && !isTargetSelect ) {
    showPopup();
    bindCloseBtn();
    
    // remove listener after it is open
    document.querySelector('body').removeEventListener('mouseout', openOnMouseOut);
  }
}

// parse all parameters in cookies
function parseParameters(paramString, delimiter) {
  var parsedParams = {};

  paramString.split(delimiter).filter(function(item) {
    var parameter = item.split('=');
    parsedParams[parameter[0]] = parameter[1];
  });

  return parsedParams;
}

// get currency from cookies
var cookies = parseParameters(document.cookie, '; ');

var currency_symbol = {
  'USD': '$',
  'GBP': '£',
  'EUR': '€',
  'CAD': 'CA$',
  'AUD': 'AU$',
};

var selectedCurrency = cookies.Currency || "USD";

function getApiPrice() {
  var affiliate = cookies.r && cookies.r.split('%5E')[0] || 'clear';
  
  // get price from API
  var apiUrl = "https://www.bluehost.com/sapien/cap/offers/" + productFamily + "/" + hosting_plan + "?flow=" + widget.flow + "&currency=" + selectedCurrency + '&affiliate=' + affiliate;
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', apiUrl);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(this.responseText);

      var termLength = extension.termLength || 36;

      // set prices vars once they come back from API
      var price_info = data.cpanel[hosting_plan].term.add[termLength];

      widget.strike_price = price_info.base_price;
      widget.normal_price = price_info.monthly;
      widget.currency_symbol = currency_symbol[selectedCurrency];
      
      pricesLoaded = true;
      
      renderRsoModal();
    }
  };
}

function trackRsoEvent() {
  // if already tracked just return
  if (hasTracked) { return; }
  
  // get price block text
  var rsoNowJust = document.querySelector('.price-block').innerText;
  
  var rsoProductFamily = productFamily;
  var rsoHostingPlan = hosting_plan;
  
  var rsoLabelVal = '';

  if (rsoNowJust !== null) {
    if (rsoProductFamily !== null) {
      rsoLabelVal = rsoProductFamily + ":" + rsoHostingPlan + "_" + rsoNowJust;
    } else if (rsoHostingPlan !== null) {
      rsoP = rsoHostingPlan.value;
      rsoLabelVal = rsoHostingPlan + "_" + rsoNowJust;
    }
    
    window.dataLayer.push({
      'event': 'GAEvent',
      'eventCategory': 'RSO',
      'eventAction': 'RSO View',
      'eventLabel': rsoLabelVal
    });
  }

  var rsoBtn = document.querySelector('.rso-btn');

  // add tracking event on the RSO CTA button
  rsoBtn.addEventListener('click', function() {
    window.dataLayer.push({
      'event': 'GAEvent',
      'eventCategory': 'RSO',
      'eventAction': 'RSO Click',
      'eventLabel': rsoLabelVal
    });
  });
  
  hasTracked = true;
}

function getUrlParams() {
  var urlParams = new URLSearchParams(window.location.search);
  
  return urlParams;
}

function getReggieCart() {
  var cart = localStorage.getItem('cart4') && JSON.parse(localStorage.getItem('cart4')).value || {};
  
  return cart;
}

function getReggieHosting() {
  var cart = getReggieCart();
  
  var hosting = cart.find(function(item) {
    return item.type === 'cpanel';
  });
    
  return hosting;
}

function getReggieDomain() {
  var cart = getReggieCart();
  
  var domain = cart.find(function(item) {
    return item.type === 'registration';
  });
    
  return domain;
}

function getSelectedProduct() {
  var selectedProduct = '';
  
  if (isReggieClient) {    
    var hostingItem = getReggieHosting();             
    var type = hostingItem.type;
    var level = hostingItem.level;
    var term = hostingItem.term;
    
    selectedProduct = type + ':' + level + '-' + term;
  } else {
    // the term dropdown contains the selected product
    var productDropdown = document.getElementById('term');  
    var productTerms = productDropdown.getElementsByTagName('option');
    
    // get the value from the selected one
    selectedProduct = productTerms[productDropdown.selectedIndex].value;
  }
      
  return selectedProduct;
}

function hasMatchingTerm() {
  var matchingTerm = getSelectedProduct().split('-')[1] === widget.termLength;
  
  return matchingTerm;
}

function oneMonthTermOffered() {
  var oneMonthWasOffered = false;
      
  if (isReggieClient) {    
    var currentCart = getReggieHosting();
    var wasOffered = currentCart.terms.find(function(item) {
      return item.term === 1;
    });
        
    if (wasOffered) {
      oneMonthWasOffered = true;
    }
  } else {
    // the term dropdown contains the selected product
    var productDropdown = document.getElementById('term');  
    var productTerms = productDropdown.getElementsByTagName('option');
      
    Array.from(productTerms).forEach(function(option) {
      if (option.dataset && option.dataset.term === "1") {
        oneMonthWasOffered = true;
      }
    });
  }
       
  return oneMonthWasOffered;
}

function getDomainInfo() {
  var reggieDomain = getReggieDomain();
  
  var domainInfo = reggieDomain && reggieDomain.domainInfo;
    
  return domainInfo;
}

function hasDomain() {
  var hasDomainInCart = '';
    
  if (isReggieClient) {
    var domain = getReggieDomain();
        
    if (domain) {
      hasDomainInCart = domain.domainInfo.domain;
    }
  } else {
    var isDomainless = document.querySelector('[name="domain_action"]').value === 'domainless';
        
    // cart is not visible but there will be a success message for the domain
    hasDomainInCart = !isDomainless && document.querySelector('[name="domain"]').value;
  }
            
  return hasDomainInCart;
}

function getCtaUrl() {  
  // create RSO href
  var baseHref = 'https://www.bluehost.com/';
  var newHref = baseHref;
  
  if (isReggieClient) {
    var flow = getUrlParams().get('flow');
    
    var currentCart = getReggieHosting();
    
    //var term = currentCart.term;
    var term = widget.termLength;
    //var type = currentCart.type;
    var type = widget.productFamily;
    //var level = currentCart.level;
    var level = widget.planPackage;

    newHref += 'registration?flow=' + flow;
    newHref += '&type=' + type;
    newHref += '&level=' + level;
    newHref += '&term=' + term;
    newHref += '&addItem=1';
    newHref += '&brand_flow=' + widget.flow;    
  } else {
    newHref += 'web-hosting/signup';
    newHref += '?cpanel_plan=' + widget.planPackage;
    newHref += '&term=' + widget.productFamily + ':' + widget.planPackage + '-' + widget.termLength;
    newHref += '&flow=' + widget.flow;
  }
    
  // when domain is required the TLD needs to be added to the href
  if (widget.domainAndTerm === 'true' || widget.noTermAndHasDomain === 'true') {
    var tld = hasDomain();
     
    if (isReggieClient) {
      var reggieFlow = getUrlParams().get('flow');
      
      var domainInfo = getDomainInfo();
      var sld = domainInfo.sld;
      var tld = domainInfo.tld;
            
      newHref += '&search=' + sld + '&tld=' + tld + '#/' + reggieFlow + '/' + widget.stepAfterDomain;
    } else {
      newHref += '&domain=' + tld;
    }
  }
    
  // if the requirement is no domain then bypass domain search
  if (widget.termAndNoDomain === 'true' || widget.noTermNoDomain === 'true') {
    if (isReggieClient) {
      var reggiePage = getUrlParams().get('flow');
      
      newHref += '#/' + reggiePage + '/' + widget.stepAfterDomain;
    } else {
      newHref += '&domain_action=domainless';
    }
  }
    
  return newHref;
}

var pricesLoaded = false;

function renderRsoModal() {  
  var body = document.querySelector('body');
 
  
  // wait for prices from api
  if (pricesLoaded) {
    // get cta to be used in the modal
    widget.ctaHref = getCtaUrl();

    // create the html
    var html = widget.$render({
      widget: widget
    });
        
    // insert the modal
    body.insertAdjacentHTML('afterbegin', html);
        
    // set listener for watching user leave window
    body.addEventListener('mouseout', openOnMouseOut);
  }
}

function getTargetSelector() {
  var selector = '';
    
  var selectors = {
    reggieClient: {
      pickPlan: '.step-1',
      pickDomain: '.step-2',
      pickBilling: '.step-3',
      receipt: '.step-4',
    },
    legacy: {
      pickPlan: '.signup.page-pickplan #term',
      pickDomain: '.signup.page-picksite #term',
      pickBilling: '.signup.page-billing #term',
      receipt: '.signup.page-thankyou',
    },
  };
  
  if (isReggieClient) {
    selector = selectors.reggieClient[widget.billingStep];
  } else {
    selector = selectors.legacy[widget.billingStep];
  }
  
  return selector;
}

// if modal hasn't been shown in the set amount of time, get price and then render modal


if (optlyShowModal && (widget.apply_to_currency === selectedCurrency || widget.apply_to_currency === 'all')) {
  var target = getTargetSelector();
        
  // wait for selected billing step before triggering
  utils.waitForElement(target).then(function(elem) {
    // get api prices needed to setup RSO
    // check current product
    var currentProduct = getSelectedProduct();
            
    // product for RSO
    var rsoProduct = widget.productFamily + ':' + widget.planPackage;
        
    // check to see it matches
    var doesMatchProduct = currentProduct.indexOf(rsoProduct) > -1;
            
    // criteria has been met if neither requirements are set to true   
    var requiresDomainAndTerm = widget.domainAndTerm === 'true';
    var requiresTermAndNoDomain = widget.termAndNoDomain === 'true';
    var requiresDidNotSeeTermAndNoDomain = widget.noTermNoDomain === 'true';
    var requiresDidNotSeeTermAndHasDomain = widget.noTermAndHasDomain === 'true';
    
    // set criteria to false
    var hasMetCriteria = false;
    
    // check for domain in cart and for matching term
    var hasDomainInCart = hasDomain();
    
    var doesTermMatch = hasMatchingTerm();
    var termWasOffered = oneMonthTermOffered();
    
    // condition for matching term and domain in cart
    if (requiresDomainAndTerm) {
      if (hasDomainInCart && doesTermMatch) {
        hasMetCriteria = true;
      }
    }
    
    // condition for matching term but no domain in cart
    if (requiresTermAndNoDomain) {
      if (doesTermMatch && !hasDomainInCart) {
        hasMetCriteria = true;
      }
    }
    
    // condition for no domain and did not see 1 month offer
    if (requiresDidNotSeeTermAndNoDomain) {
      if (!hasDomainInCart && !termWasOffered) {
        hasMetCriteria = true;
      }
    }
    
    // condition for with domain but did not see 1 month offer
    if (requiresDidNotSeeTermAndHasDomain) {
      if (!termWasOffered && hasDomainInCart) {
        hasMetCriteria = true;
      }
    }
    
    // run getApiPrice when we have a match
    // triggers renderRsoModal when successful
    if (doesMatchProduct && hasMetCriteria) {
      getApiPrice();
    }
  });
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "20968381272";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"isReggieClient","default_value":"legacy"},{"name":"headline","default_value":"The right hosting at the right price"},{"name":"subHeadline","default_value":"Pick a monthly plan to get started."},{"name":"ctaText","default_value":"Apply discount"},{"name":"modalBG","default_value":"rgba(255, 255, 255, 1)"},{"name":"show_modal_once","default_value":"true"},{"name":"apply_to_currency","default_value":"all"},{"name":"flow","default_value":"RSO1"},{"name":"planPackage","default_value":"basic"},{"name":"termLength","default_value":"36"},{"name":"productFamily","default_value":"cpanel"},{"name":"buttonBG","default_value":"rgba(53, 117, 211, 1)"},{"name":"buttonTextColor","default_value":"rgba(255, 255, 255, 1)"},{"name":"closeButton","default_value":"//cdn.optimizely.com/img/2125675982/ea82b47047b8429eb0e3044d00cbf051.png"},{"name":"billingStep","default_value":"pickPlan"},{"name":"featureList","default_value":"<li>Low month-to-month billing</li>\n<li>Easy to use drag-n-drop website builder included</li>\n<li>Start building your site today using temporary domain name and get a real domain name when you are ready.</li>"},{"name":"image","default_value":"//cdn.optimizely.com/img/2125675982/a2bf1afb58874436bc2cb4e5d5b35c84.svg"},{"name":"imageBackground","default_value":"rgba(186, 233, 252, 1)"},{"name":"disclaimerText","default_value":"The introductory prices are for the first term of service only and automatically renew at the"},{"name":"disclaimerLinkText","default_value":"regular rate"},{"name":"disclaimerHref","default_value":"https://www.bluehost.com/help/article/shared-hosting-prices"},{"name":"domainAndTerm","default_value":"false"},{"name":"termAndNoDomain","default_value":"false"},{"name":"noTermNoDomain","default_value":"false"},{"name":"noTermAndHasDomain","default_value":"false"},{"name":"stepAfterDomain","default_value":"1"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        var extensionHTML = document.querySelector('.exit-intent-modal');
if (extensionHTML) extensionHTML.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '21503300872',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<style>");t.b("\n" + i);t.b("  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');");t.b("\n");t.b("\n" + i);t.b("  @media (max-width: 767px) {");t.b("\n" + i);t.b("    .exit-intent-modal-step-1 {");t.b("\n" + i);t.b("      display: none !important;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 {");t.b("\n" + i);t.b("    opacity: 0;");t.b("\n" + i);t.b("    position: fixed;");t.b("\n" + i);t.b("    z-index: 3001;");t.b("\n" + i);t.b("    width: 100%;");t.b("\n" + i);t.b("    height: 100%;");t.b("\n" + i);t.b("    display: none;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1.fade-in {");t.b("\n" + i);t.b("    display: block;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  body {");t.b("\n" + i);t.b("    height: 100%;");t.b("\n" + i);t.b("    position: relative;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup-overlay {");t.b("\n" + i);t.b("    height: 100vh;");t.b("\n" + i);t.b("    z-index: 3000;");t.b("\n" + i);t.b("    position: fixed;");t.b("\n" + i);t.b("    width: 100%;");t.b("\n" + i);t.b("    background: rgba(0, 0, 0, 0.5);");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup {");t.b("\n" + i);t.b("    width: 801px;");t.b("\n" + i);t.b("    height: 450px;");t.b("\n" + i);t.b("    border: 1px solid #3575D3;");t.b("\n" + i);t.b("    border-radius: .1875em;");t.b("\n" + i);t.b("    margin: 5rem auto 0;");t.b("\n" + i);t.b("    padding: 0;");t.b("\n" + i);t.b("    background: #fff;");t.b("\n" + i);t.b("    position: relative;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup h2 {");t.b("\n" + i);t.b("    font-size: 32px;");t.b("\n" + i);t.b("    font-weight: 200;");t.b("\n" + i);t.b("    font-family: 'Open Sans';");t.b("\n" + i);t.b("    margin-top: 0;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup h3 {");t.b("\n" + i);t.b("    font-family: 'Open Sans';");t.b("\n" + i);t.b("    margin:0;");t.b("\n" + i);t.b("    text-transform: none;");t.b("\n" + i);t.b("    font-size: 2.3125em;");t.b("\n" + i);t.b("    font-weight: 200;");t.b("\n" + i);t.b("    line-height: 1.0625em;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup p {");t.b("\n" + i);t.b("    margin-bottom: 2rem;");t.b("\n" + i);t.b("    font-size: 1.25em;");t.b("\n" + i);t.b("    margin-top: 0.75em;");t.b("\n" + i);t.b("    color: #666;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup-close {");t.b("\n" + i);t.b("    font-size: 20px;");t.b("\n" + i);t.b("    color: #fff;");t.b("\n" + i);t.b("    position: absolute;");t.b("\n" + i);t.b("    cursor: pointer;");t.b("\n" + i);t.b("    top: 10px;");t.b("\n" + i);t.b("    right: 20px;");t.b("\n" + i);t.b("    z-index: 100;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup-close:hover {");t.b("\n" + i);t.b("    color: #999;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .fade-in {");t.b("\n" + i);t.b("    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */");t.b("\n" + i);t.b("    -moz-animation: fadein 0.5s; /* Firefox < 16 */");t.b("\n" + i);t.b("    -ms-animation: fadein 0.5s; /* Internet Explorer */");t.b("\n" + i);t.b("    -o-animation: fadein 0.5s; /* Opera < 12.1 */");t.b("\n" + i);t.b("    animation: fadein 0.5s;");t.b("\n" + i);t.b("    opacity: 1 !important;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .fade-out {");t.b("\n" + i);t.b("    -webkit-animation: fadeout 1s; /* Safari, Chrome and Opera > 12.1 */");t.b("\n" + i);t.b("    -moz-animation: fadeout 1s; /* Firefox < 16 */");t.b("\n" + i);t.b("    -ms-animation: fadeout 1s; /* Internet Explorer */");t.b("\n" + i);t.b("    -o-animation: fadeout 1s; /* Opera < 12.1 */");t.b("\n" + i);t.b("    animation: fadeout 1s;");t.b("\n" + i);t.b("    opacity: 0 !important;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  @keyframes fadein {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Firefox < 16 */");t.b("\n" + i);t.b("  @-moz-keyframes fadein {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Safari, Chrome and Opera > 12.1 */");t.b("\n" + i);t.b("  @-webkit-keyframes fadein {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Internet Explorer */");t.b("\n" + i);t.b("  @-ms-keyframes fadein {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Opera < 12.1 */");t.b("\n" + i);t.b("  @-o-keyframes fadein {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  @keyframes fadeout {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Firefox < 16 */");t.b("\n" + i);t.b("  @-moz-keyframes fadeout {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Safari, Chrome and Opera > 12.1*/");t.b("\n" + i);t.b("  @-webkit-keyframes fadeout {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Internet Explorer*/");t.b("\n" + i);t.b("  @-ms-keyframes fadeout {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  /* Opera < 12.1*/");t.b("\n" + i);t.b("  @-o-keyframes fadeout {");t.b("\n" + i);t.b("    from {");t.b("\n" + i);t.b("      opacity: 1;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("    to {");t.b("\n" + i);t.b("      opacity: 0;");t.b("\n" + i);t.b("    }");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup .rso-top {");t.b("\n" + i);t.b("    background-color: #3575D3;");t.b("\n" + i);t.b("    width: 100%;");t.b("\n" + i);t.b("    height: 33%;");t.b("\n" + i);t.b("    position: relative;          ");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup .rso-top-text h2 {");t.b("\n" + i);t.b("    margin: 0 auto;");t.b("\n" + i);t.b("    color: #fff;");t.b("\n" + i);t.b("    text-transform: none;");t.b("\n" + i);t.b("    font-size: 3em;");t.b("\n" + i);t.b("    text-align: center;");t.b("\n" + i);t.b("    padding-top: 47px;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup .rso-bottom {");t.b("\n" + i);t.b("    background-color: #fff;");t.b("\n" + i);t.b("    position: relative;");t.b("\n" + i);t.b("    height: 67%;");t.b("\n" + i);t.b("    padding: 3rem 5rem;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup .col {");t.b("\n" + i);t.b("    flex-grow: 1;");t.b("\n" + i);t.b("    width: 50%;");t.b("\n" + i);t.b("    padding: 1rem;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup img {");t.b("\n" + i);t.b("    margin-left: auto;");t.b("\n" + i);t.b("    margin-right: auto;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 .exit-popup .image-wrapper {");t.b("\n" + i);t.b("    border-radius: 10px;");t.b("\n" + i);t.b("    position: absolute;");t.b("\n" + i);t.b("    bottom: -5px;");t.b("\n" + i);t.b("    right: 20px;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 a.rso-btn {");t.b("\n" + i);t.b("    background: #01c201 !important;");t.b("\n" + i);t.b("    border: none !important;");t.b("\n" + i);t.b("    text-transform:  capitalize;");t.b("\n" + i);t.b("    font-size: 2.6rem !important;");t.b("\n" + i);t.b("    padding: 1.2rem 2.7rem;");t.b("\n" + i);t.b("    color: #fff;");t.b("\n" + i);t.b("    text-align: center;");t.b("\n" + i);t.b("    text-decoration: none;");t.b("\n" + i);t.b("    -webkit-font-smoothing: antialiased;");t.b("\n" + i);t.b("    -moz-osx-font-smoothing: grayscale;");t.b("\n" + i);t.b("    line-height: 1;");t.b("\n" + i);t.b("    border-radius: .3rem;");t.b("\n" + i);t.b("    transition: all .5s ease;");t.b("\n" + i);t.b("    display: inline-block;");t.b("\n" + i);t.b("    margin-bottom: -.5rem;");t.b("\n" + i);t.b("    white-space: nowrap;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("  .exit-intent-modal-step-1 a.rso-btn:hover {");t.b("\n" + i);t.b("    color: #fff;");t.b("\n" + i);t.b("    border-color: #85de49;");t.b("\n" + i);t.b("    box-shadow: 0.2rem 0.1rem 1.2rem rgba(91, 91, 91, 0.5);");t.b("\n" + i);t.b("    background-size: 150% 100%;");t.b("\n" + i);t.b("    background-position: 50% center;");t.b("\n" + i);t.b("    transition: all 1s ease;");t.b("\n" + i);t.b("    text-decoration: none;");t.b("\n" + i);t.b("  }");t.b("\n");t.b("\n" + i);t.b("</style>");t.b("\n" + i);t.b("<div class=\"exit-intent-modal-step-1\">");t.b("\n" + i);t.b("  <div class=\"exit-popup-overlay\">");t.b("\n" + i);t.b("    <div class=\"exit-popup rso-container\">");t.b("\n" + i);t.b("      <div id=\"exit-popup-close\" class=\"exit-popup-close\">close</div>");t.b("\n" + i);t.b("      <div class=\"rso-top\">");t.b("\n" + i);t.b("        <div class=\"rso-top-text\">");t.b("\n" + i);t.b("          <h2>");t.b(t.v(t.d("widget.title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        </div>        ");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"rso-bottom\">");t.b("\n" + i);t.b("        <div class=\"col\">");t.b("\n" + i);t.b("          <h3>");t.b(t.t(t.d("widget.heading",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("          <p>");t.b(t.t(t.d("widget.paragraph",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("          <a href=\"");t.b(t.v(t.d("widget.ctaHref",c,p,0)));t.b("\" class=\"rso-btn\">");t.b("\n" + i);t.b("            ");t.b(t.t(t.d("widget.CTAtext",c,p,0)));t.b("\n" + i);t.b("          </a>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <div class=\"col\">");t.b("\n" + i);t.b("          <div class=\"image-wrapper\" style=\"background: ");t.b(t.v(t.d("widget.imageBg",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <img src=\"");t.b(t.v(t.d("widget.image",c,p,0)));t.b("\" alt=\"Special Sign-Up Offer\">");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "21503300872";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"title","default_value":"Choose a FREE Domain Later!"},{"name":"heading","default_value":"Heading goes here"},{"name":"paragraph","default_value":"Can't decide on a domain name? That's ok! Sign up now and get one later for <strong>FREE</strong>."},{"name":"CTAtext","default_value":"Get My Free Domain Later"},{"name":"imageBg","default_value":"rgba(53, 117, 211, 1)"},{"name":"image","default_value":"//cdn.optimizely.com/img/2125675982/470306c993e44883ac04b09070f69ba4.svg"},{"name":"show_modal_once","default_value":"true"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-21503300872';
widget._styleTag.innerHTML = '/* @media (max-width: 767px) {  .exit-intent-modal {    display: none !important;  }}*/';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get('utils');

// show every three days
var currentDate = new Date().getTime();
var instanceID = 'optly_ui_modal_shown_domain-' + extension.$instance;
var optlyModalWasShown = window.localStorage.getItem(instanceID);
var daysLastShown = timeDifference(currentDate, optlyModalWasShown).days;
var optlyShowModal = (daysLastShown >= 3 || extension.show_modal_once === 'false') ? true : false;

function checkIfDomainInCart() {
  var cartStorage = window.localStorage.getItem('cart4');

  var cart = [];
  if (cartStorage) {
    cart = JSON.parse(cartStorage).value;
  }

  var domainNames = cart.filter(function(item) {
    return item.type === "registration";
  });

  return domainNames.length > 0;
}

var hasDomainInCart = checkIfDomainInCart();

function timeDifference(date1, date2) {
  var difference = date1 - date2;

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  var secondsDifference = Math.floor(difference / 1000);
  return {days: daysDifference, hours: hoursDifference, minutes: minutesDifference, seconds: secondsDifference};
}

function showPopup() {
  if (document.querySelector('.fade-out')) {
    document.querySelector('.fade-out').classList.remove('fade-out');
  }

  document.querySelector('.exit-intent-modal-step-1').classList += ' fade-in';

  window.localStorage.setItem(instanceID, currentDate);

  window.addEventListener('keydown', closeOnEsc);

  document.querySelector('.rso-btn').addEventListener('click', hidePopup);
}

function hidePopup() {
  document.querySelector('.exit-intent-modal-step-1').classList += ' fade-out';

  document.querySelector('.exit-intent-modal-step-1').style.display = 'none';

  window.optimizley = window.optimizley || [];

  window.optimizley.push({
    type: "event",
    eventName: "close_modal"
  });

  window.removeEventListener('keydown', closeOnEsc);
}

function bindCloseBtn() {
  document.querySelector('.exit-intent-modal-step-1').addEventListener('click', function(event) {
    // an array of selectors that will close the modal.
    // this is to make it easier to specify multiple items that are clickable
    // to close it.
    var selectorsToClose = [
      '.exit-popup-overlay',
      '#exit-popup-close',
    ].join(', ');

    if (event.target.matches(selectorsToClose)) {
      event.preventDefault();
      hidePopup();
    }
    event.stopPropagation();
  });
}

function closeOnEsc(e, modal) {
  var keyPressed = e.key;

  if (keyPressed === 'Escape') {
    hidePopup();
  }
}

// only triggers modal open when mouse leave is top edge and left/right within 100px from top
function openOnMouseOut(e) {
  // find cursor position
  var yPositionOnLeave = e.clientY;
  var xPositionOnLeave = e.clientX;

  // if user leaves on left/right within a tolerance of the topEdge
  // we want to trigger our modal
  var topEdge = 100;
  // in rightEdge we have wiggle room for the scrollbar
  var rightEdge = document.documentElement.clientWidth - 5;
  // leftEdge also has some wiggle room for FireFox triggering the event early
  var leftEdge = 5;

  // for leaving the top we do not care about topEdge
  // the user needs to really leave the window
  var isMouseLeaveTop = (yPositionOnLeave < 5) ? true : false;

  // for leaving the left/right look for x or y being > or < the edges
  // depending on which way the cursor left the window
  var isMouseLeaveRight = (xPositionOnLeave >= rightEdge) ? true : false;
  var isMouseLeaveLeft = (xPositionOnLeave <= leftEdge) ? true : false;

  // due to a FireFox bug we need to know if the target is a select or not
  var isTargetSelect = false;

  // FireFox has bug when clicking on selects
  // it triggers mouseleave and mouseout events
  if (e.target.nodeName.toLowerCase() === 'select') {
    isTargetSelect = true;
  }

  if (( isMouseLeaveTop || ( yPositionOnLeave < topEdge ) && isMouseLeaveRight || ( yPositionOnLeave < topEdge ) && isMouseLeaveLeft ) && !isTargetSelect ) {

    showPopup();
    bindCloseBtn();

    // remove listener after it is open
    document.querySelector('body').removeEventListener('mouseout', openOnMouseOut);
  }
}

function getCtaUrl() {
  var url = window.location.toString().split(/\?|#/);
  var baseUrl = url[0];
  var queryParams = url[1].split('&');
  var hash = url[2];

  var params = [];
  var newHash = '';

  if (hash.match(/\/hfe[a-zA-Z]*?|\/builderPlus|\/builderChoicePlus|\/wcPremium\/1/)) {
    params = hash.split('/');
    params[2] = 2;
    newHash = params.join('/');
  }

  queryString = '?' + queryParams.join('&');

  return baseUrl + queryString + '#' + newHash;
}

// stop RSO from triggering on step 2
function trackUrlChange() {
  window.addEventListener('hashchange', function() {
    document.querySelector('body').removeEventListener('mouseout', openOnMouseOut);
  });
}

function renderRsoModal() {
  var body = document.querySelector('body');

  widget.ctaHref = getCtaUrl();

  var html = widget.$render({
    widget: widget
  });

  body.insertAdjacentHTML('afterbegin', html);
  body.addEventListener('mouseout', openOnMouseOut);

  trackDomainPopupEvent();
}

function trackDomainPopupEvent() {
  var popupBtn = document.querySelector('.rso-btn');
  var popupHeadline = document.querySelector('.exit-popup h2').innerHTML;
  var popupBtnVal = popupBtn.textContent.trim();

  if (popupHeadline !== null) {
    window.dataLayer.push({'event': 'GAEvent', 'eventCategory': 'Domainless Popup', 'eventAction': 'Domainless Popup View', 'eventLabel': 'h: ' + popupHeadline + '; b: ' + popupBtnVal});
  }

  popupBtn.addEventListener('click', function() {
    window.dataLayer.push({'event': 'GAEvent', 'eventCategory': 'Domainless Popup', 'eventAction': 'Domainless Popup Click', 'eventLabel': 'h: ' + popupHeadline + '; b: ' + popupBtnVal});
  });
}

if (optlyShowModal && !hasDomainInCart) {
  utils.waitForElement('.step-1').then(function(elem) {
    renderRsoModal();
    trackUrlChange();
  });
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "21503300872";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"title","default_value":"Choose a FREE Domain Later!"},{"name":"heading","default_value":"Heading goes here"},{"name":"paragraph","default_value":"Can't decide on a domain name? That's ok! Sign up now and get one later for <strong>FREE</strong>."},{"name":"CTAtext","default_value":"Get My Free Domain Later"},{"name":"imageBg","default_value":"rgba(53, 117, 211, 1)"},{"name":"image","default_value":"//cdn.optimizely.com/img/2125675982/470306c993e44883ac04b09070f69ba4.svg"},{"name":"show_modal_once","default_value":"true"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-21503300872');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHTML = document.querySelector('.exit-intent-modal');
if (extensionHTML) extensionHTML.remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '22021422735',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div class=\"optbanner\" style=\"background-color: ");t.b(t.v(t.d("extension.color",c,p,0)));t.b(";\">");t.b("\n" + i);t.b("  <span class=\"optbannerSmFont\" >");t.b(t.t(t.d("extension.text",c,p,0)));t.b("</span><span class=\"optbannerLgFont\">");t.b(t.t(t.d("extension.text_bold",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("  <a data-element-location=\"");t.b(t.v(t.d("extension.data_element_location",c,p,0)));t.b("\" data-element-type=\"");t.b(t.v(t.d("extension.data_element_type",c,p,0)));t.b("\" data-element-label=\"");t.b(t.v(t.d("extension.data_element_label",c,p,0)));t.b("\" data-element-source=\"optimizely\" class=\"btn small\" href=\"");t.b(t.v(t.d("extension.link",c,p,0)));t.b("\">");t.b(t.t(t.d("extension.link_text",c,p,0)));t.b("</a>");t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "22021422735";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"text","default_value":"Spring Madness Sale:"},{"name":"text_bold","default_value":"OVER 65% OFF SHARED HOSTING PLANS"},{"name":"link","default_value":"/"},{"name":"link_text","default_value":"GET STARTED"},{"name":"color","default_value":"#5588d3"},{"name":"data_element_location","default_value":"header"},{"name":"data_element_type","default_value":"button"},{"name":"data_element_label","default_value":"get-started"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-22021422735';
widget._styleTag.innerHTML = '.optbanner {  font-family: proxima-nova,sans-serif;  font-size: 24px;  color: white;  padding: 10px;	position: fixed;  top: 0px;  z-index: 100000000;  width: 100%;  text-align: center;  line-height: 40px;}.optbanner a {  color: white;  margin-top: -8px;  background-color: #1d2a3b;  padding: 5px 11px;  margin-left: 14px;  text-decoration: none;}.optbanner a:active, .optbanner a:focus, .optbanner a:hover {  background-color: #0a476d;}.optbannerLgFont {font-size: 24px;}body { margin-top: 45px; }#header, #top {    margin-top: 16px;}/* Tablet */@media only screen    and (max-width: 850px)  { .optbanner {  font-size: 14px;  padding: 10px;  height: auto;}      .optbannerLgFont {font-size: 18px;   }       }/* Hide Lead Text on Smaller Screens */@media only screen    and (max-width: 660px)  { .optbanner {  font-size: 13px;  padding: 8px;}.optbanner a {  margin-top: -3px;}   .optbannerLgFont {font-size: 15px;}      .optbannerSmFont { display: none;      }    #top .nav a {    padding: 1.5rem 1.5rem 1.5rem 2.5rem !important; }#top .nav li.login {  padding-bottom: 80px;}}/* Portrait and Landscape */@media only screen    and (max-width: 480px)  { .optbanner {  font-size: 13px;  padding: 8px;}.optbannerSmFont { display: none;      }.optbannerLgFont {font-size: 15px;   }       }/* Shrink on Tiny Screens */@media only screen    and (max-width: 400px)  { .optbanner {  font-size: 12px;  padding: 8px 4px;}.optbanner a {  margin-top: -3px;  padding: 5px 6px;  margin-left: 6px;}   .optbannerLgFont {font-size: 14px;}      .optbannerSmFont { display: none;      }     }';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = window.optimizely.get('utils');

utils.waitForElement('body').then(function(element){
  var html = widget.$html;
	element.insertAdjacentHTML('afterbegin',html);
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "22021422735";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"text","default_value":"Spring Madness Sale:"},{"name":"text_bold","default_value":"OVER 65% OFF SHARED HOSTING PLANS"},{"name":"link","default_value":"/"},{"name":"link_text","default_value":"GET STARTED"},{"name":"color","default_value":"#5588d3"},{"name":"data_element_location","default_value":"header"},{"name":"data_element_type","default_value":"button"},{"name":"data_element_label","default_value":"get-started"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-22021422735');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHTML = document.querySelector('.banner');
if(extensionHTML) extensionHTML.remove();
      },
    });
}
], "visitorAttributes": [], "enableForceParameters": true, "accountId": "2125675982", "events": [{"category": "other", "name": "Login with domain", "eventType": "custom", "viewId": null, "apiName": "login_using_domain", "id": "15494490516", "eventFilter": null}, {"category": "other", "name": "Login with email", "eventType": "custom", "viewId": null, "apiName": "login_using_email", "id": "15498550503", "eventFilter": null}, {"category": "other", "name": "Login submit with email or domain", "eventType": "custom", "viewId": null, "apiName": "login_submit_with_email_or_domain", "id": "15511000648", "eventFilter": null}], "experimental": {"trimPages": true}, "revision": "14739"},f=__webpack_require__(4714),l="initializeOptimizelyPreview";if(f.initGlobalStore(c),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return c.projectId})),a.registerFunction("getAccountId",(function(){return c.accountId})),s.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:c}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(127).setupPreviewGlobal(),__webpack_require__(127).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:c}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return c.projectId})),s.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/13410400318.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();h=r.getProjectToken(),v=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",h).replace("__PROJECT_ID__",v).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),s.addScriptSync(o),__webpack_require__(127).setupPreviewGlobal(),s.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)})),s.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var h,v,p;t.timeEnd("block")}}()}catch(n){try{__webpack_require__(6236).handleError(n)}catch(t){console.log(t)}}}()})();