/*
活动名称：批量店铺签到（历史查询）
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号分割
        jd_dpqd_task_threads // 控制签到并发线程数（正整数），默认1
        jd_dpqd_account_threads // 控制账号并发线程数（正整数），默认1
        jd_dpqd_account_interval // 自定义运行间隔时长（整数，单位毫秒），默认0

此脚本为高并发历史查询本，需要读取主脚本生成的活动信息缓存
脚本主要用于查询连签天数，不会进行签到操作，为了提高签到本的效率故将此功能分离

cron:1 1 1 1 *

*/

const $ = new Env('批量店铺签到（历史查询）')
var iｉl='jsjiami.com.v7';const lilIII=iii1II;(function(IllIiI,i1il1,I1l111,IIii1l,I1iIII,liiI11,ililI1){return IllIiI=IllIiI>>0x3,liiI11='hs',ililI1='hs',function(IIii1i,i1ili,Iiill1,I1iII1,lilII1){const IllIi1=iii1II;I1iII1='tfi',liiI11=I1iII1+liiI11,lilII1='up',ililI1+=lilII1,liiI11=Iiill1(liiI11),ililI1=Iiill1(ililI1),Iiill1=0x0;const iill1=IIii1i();while(!![]&&--IIii1l+i1ili){try{I1iII1=-parseInt(IllIi1(0x27e,'[Vay'))/0x1+parseInt(IllIi1(0x1c0,'AwFT'))/0x2*(-parseInt(IllIi1(0x255,'iXV^'))/0x3)+-parseInt(IllIi1(0x1c4,'fhM['))/0x4*(-parseInt(IllIi1(0x1e3,'G*!k'))/0x5)+parseInt(IllIi1(0x1ba,'kGCU'))/0x6*(parseInt(IllIi1(0x1f2,'zO9#'))/0x7)+parseInt(IllIi1(0x1d4,'eG$X'))/0x8+-parseInt(IllIi1(0x24d,'U3GD'))/0x9+parseInt(IllIi1(0x247,'kGCU'))/0xa;}catch(iii1l1){I1iII1=Iiill1;}finally{lilII1=iill1[liiI11]();if(IllIiI<=IIii1l)Iiill1?I1iIII?I1iII1=lilII1:I1iIII=lilII1:Iiill1=lilII1;else{if(Iiill1==I1iIII['replace'](/[XDdpYeSRlhLkqwTUWQ=]/g,'')){if(I1iII1===i1ili){iill1['un'+liiI11](lilII1);break;}iill1[ililI1](lilII1);}}}}}(I1l111,i1il1,function(IIliIl,II11ll,liiI1I,ililII,lI1II1,i1ilII,iIIii1){return II11ll='\x73\x70\x6c\x69\x74',IIliIl=arguments[0x0],IIliIl=IIliIl[II11ll](''),liiI1I=`\x72\x65\x76\x65\x72\x73\x65`,IIliIl=IIliIl[liiI1I]('\x76'),ililII=`\x6a\x6f\x69\x6e`,(0x15bfc0,IIliIl[ililII](''));});}(0x640,0x56d35,Iii11l,0xca),Iii11l)&&(iｉl=lilIII(0x29c,'0%o^'));const jdCookie=require(lilIII(0x1b0,'VBXA')),notify=require(lilIII(0x1b2,'Fxq@')),common=require(lilIII(0x253,'[Vay')),{jsTk}=require(lilIII(0x20d,'XaS@'));function Iii11l(){const i1iiI=(function(){return[...[iｉl,'SjsYljiaLqmwieT.pckoeQmU.WvU7dYhkDRXehpd==','W74iWPvWWONdUSk8','WPtcI8oi','j2RcGmoTza','W6HPu8kMcq','W5ddQCovW4JcKq','oHygWP3dUq','pCk4W7OBe8kgaWCDWQa','nSopW6u','WOrvW5C8W68','vXmfWQ3cVIudWRRcHmo6WPe2WRBcU8omp8o8W65Ywa','W4hcPaaHW5u','W6tcJmkfWO7cRa','kCkkza','W63cQ8kaWQtcIa','BSkgW70aet/dJby','wZVcQq','aWdcVKddLa','WQ7dRCok','W45Gomkfuq','W5lcL8kq','WOtdLIxdVxFdICoIWPxcNGZcReG','W6/cGSk4WOhcRW','kZDLWOP8C03cMCkGkSoxhwLbBc4','Br/cL8kqW5pcL8obW6xcT8oCW68','W6avBCo3W4O','W6vAF8kLkmkE','W6XLFmkRkq','kmkfAWe','WRi4z2NdTCkOtW','smkDW5SzjW','WOhdIslcTG','WPmaqa','W78MrG','W7G0W5LJWQWK','W4bnvCk2jq','W6FcVIxdHXuGW5tdJCkKW7pdPSo8WPj3msf8i8kEW6hcNmogxCkPdmoAW48j6iAB5A2j5lQh6lYN6kcb6zsN6zID5PAG6zAq','osZdSxbB','W5lcL8kqWQNcV2K','W7WoyCojWP7dG2O','kmkfzHm','W7RcUXpdLZe4W53dTW','W4pcQhCuW5ukWQnQW6HuWQuTsJtcVtanB8kz','4P6mWR7OHkNMNiNOVPpOOA3PG6lLIlVKUOJPLiVORAxdQq','W6qCBCoLW6PuW7Ox','W4JdHCooW77cGeveW6tcQW9XW4XgevnqjN8TBCkDCConW47dUCkQyoAmPEwjToI1LEwmJow7UowmIo+9L+M6JUITHmka','W7W/W4n5WR85WQpdLCkJW44','f0ZdVJOk','hHzdba8','W73cL8kzWPJcQhxcOCoLWOJcLSkasq','jY04W5xcHq','WRyYyq','pmojW4mhW7i','W7e4BItcPa','tmoTW5lcIwS','uWjS','gZldU31q','uJRcUa','W60eBSozWR3dHhigo8kdAmk6','zgTJWPDYCq','W61zWR9E','WO/cHCogFN/dQqWQ','zrldR8klvG','6lwd5y+i5PAR5PAuWO/WQjU1','imklDq','WQ/dQ0DJl0ddGG','WRRdVenTaa','WP1TW6GYW6e','omklErCkca','44o15O2256w244oc6k+T5yAV6iY/5yYNW7maWQXoD8k6','W7CvE8onWOJcLZfmcCkkB8o3vXFdMmopj8ocgSoUlCoXWOtcTW','kSknFGybrW','a8khrtOa','ceWS','W77cSZSZW4S','W5HHa8ketW','W4Pjn8kwBqxcVKhcTCksWRyaWRVcJxLgsCkOAcTWEHPb','W5KzFComWPi','dWj7B8od','h+IUKoAWS+wqKow5Mt8','ptfebcu','WR/dQuNcLvXJWOddOCkUW4xdGmoNWOq','W7uOW40'],...(function(){return[...['i2WkWR/dGq','hZz/mXG','y2GwW4VdHq','WQK4CG','f3moW6FdN8kYW7SoWO0aWQ3dN2q','W6rdmSkWta','W5dcMCkAWOK','jSkxFrWubdSeFa','W6rDWRXUiq','mmkYW5mMrG','WOpcQrLvWPddPmouqZbjmWLOW5uHWPNdI8kuWQf7yK8w','WRxdRqpcV0m','qGSEE1zgoqVdMupdR8oR','WR3dR8oFW7md','DqBcJ8kNWPy','aabt','jCkYW6u','DxDCWOL3','WQpdU8ouW6Sto8owlmktWOddGmkWWRddQW','W4ncdmkx','W7CSxSoJW4O','vW42WOJcLa','oEkDU8k06k6d5Rch5AwN6lAe77275Ps75zo25BUl5PwE5O+o77YW8jYRNG','e8ovW7CbW5O','ec/dLvbQ','nmoxW50IWOS','WOldJSovW4WB','ns3cRNBdRW','W7bqWRLjka','FJyyWPlcTW','W7hcM8k7WOFcJa','FCkgW6av','guHHjZi','W5lcKZuMW6e','juNdQ8k3WOi','WRq8A2G','BZ4vwti','WPNcTCogyvG','fZRdKxjy','uf8ttY4','W6ZcGCkMWOpcQW','WORcImoDwLi','W4GSxCo4WQS','4P2Zr+ADM+IaOoAURUEHSEwKQoEsK8om','W7mmW7jJWO0','W6FcUSkpWQlcIW','aCo9W4qaWO8','W5JcMaO2W5W','W4FdJ8oN','W7qyCmosW5fsW7WBxZz4WOOEWQC','W5JdHmoAW6ZcGq','W6mMyWxcPq','qr3dTW','WPZcVLSzW4NcVSoZctbbnYy','smoDpCkRWP8','vrlcSSoZW4eBxmkEob0LmW','tXmUWQ3cPhe','WOdcI8ofA3e','W6OVW4nSWR8','W6vqDG','db9y','W6tdMCoJW6VcMq','e34oW6hdMmkWWPeHWOqaWOBdGa','44g+5O6N56sl44gM6k6D5yAq6i285y6ACMv1W7rjaa','W4a+B8o1W6q','W60eFSoiWP7dNMO','kuRdSmkPWRC','nhNcL8o/DuW','W7jSh8kEuW','wCoapSkMWQC','jItdNu5i','oqFcGa','kHCiWRBdHq','ASo6W7pcT3q','AmktWRfhWQrjAmojW5j4W4lcUJi','cSokW44SWQ1giG','bXDRAmoAc1NdTYpcK1fRW4KUWRxdLbzmW5LMfMvMtEAoKEwlKoESK+wiSEw6G+wpP++8KoM4KUIVHmk+','xCoRka','W7ldRCo7W5tcVG','w30Z','4PQar+IVR+wfOEwSPos5PUw9NoIKIUEBHoEnMUwJVownK+MeNEwtG+weV+I/U+IGHUIgHEADUE+9KW','W6rcWRTltmkGuWD3utHcW5xcMeldRsq','W7Kzw8o1W45mW7mTtGfQWO00WRBdVrjMWRnQAq','fwRdRqKNWPZcVcepomoVfmk+fa'],...(function(){return['o8oIW4K1W4O','pqnZBCoh','W5Pmg8ktvW','WRxdUei2W64','j8kYW7u','W70MW55R','WPddTgS','evVcVSoXtq','776q8k6OGq','WPxdJv5hia','WRldU1jbbuJdIw5DA8oKWOa','nmkbfSkPWQJdOxj+DwW','WRvRW4GqW4e','ehRcQSkWWPFcV8oIWPVcOCoXWRJcGmoukCoFq17cTvJdQqerW57cV8kgWP4s','aLO/WO/dHJSWBJFcU1xcMSkT','W5hdLCoJW7pcNLnjW53cSW','psWQWR7dKr3cNW','ASkgW7KrAdNdKXRcVfiX','W5NcNCkdWQhcQgJcPSkPWRVcIG','C01EWPvJ','cvaS','WRZdRKNcKLfJW6pdMmk9W5VdN8ou','bIPJbL0QW5ddS8ktW67cNfG','brjiba','oCkUW5mkCG','W5xcRZ0','qH/dRSkwta','WOZcImkcWOpcR3xcSq','d2xcP8kOWO3cOmo8W5a','WQ7dSr5glfpdLG','zMXUW4VcJKxdISkdWRmVaSk/WPG','F1ldMq3cQZSMDgFcVmoGuG','W5nzgSkBCXpcS3JcRq','W6yRDsJcLW','C8o2W7S','ea7dRLj2','or3cIq','W5/cQtyJW75u','nvJdJ8kPWPy','WQRdHqdcUfS','WQBdTgyLW6W','W7GrW6HUWP4','qhm9sJL1W6NdSW','WPG6AvxdMW','vKqct17dOmkEiNnHBSo2','WP/cGCoB','WOVdUMue','WQTup8koW4JcLcWqbmk/rCkPvW','pw/cRCo6CvJdRmkjW5zRCSoEFIddT8kUofRcHbbMC2i','sWj9wCkttSo1W6i2WPa','sCo5oSkNWOG','vWpdRCkqsG','44gg6lwV5yYE','taH/','WR7dTfOuW6a','ce3dPW','bJmtWRtdSa','W61EzCkJ','FSopcmkS','W6GTC2ldSSk0wa','bqDaFmozqblcHZ/dHWXTWRGWWRNcIbbcW5a6vcSRcfRcOGr4W5PSECk/e8kGjedcKxpdTvbArmoPqdO7jSkwWPr1e8kSghFdQSkntCorWPBdS2pdL8kckmkHxfD3WR7dLwb/WPy','W7JcUc7dJd8','zJVcISoYCLRdPCkY','D8kgW7Kr','W69RESkBoG','776B5BAp6l665lQB6zUU77Y0','W6TDWRnFbCoYra','f2JdImkmWOm','kqdcH1a','zXlcSCktWO8','AeylW6ZdJhm','jSkatryurg9RoCkNbmkmE8oh','4PMyW4tORzJLHylOV7VOO4ZKUzROHzxMNPtOJjFLJlFMTk/LIjtKV5pMGl/NV5ZLRBZLKBFLHylOV4NOOz7MRBFOHlBMNy/VVBi','EUkCVmkI','WO3dK8oIW4xcLerrW5/cLrH9W4HwevqHogqWzG','WRFdV1Pr','lmkLW6SB','WPDJbSkgDHpcJG','W7fYFSkmjq','AHRcMSkPWRW','dYBcOgtdRW','o27cNmo5Due'];}())];}())];}());Iii11l=function(){return i1iiI;};return Iii11l();};console[lilIII(0x1da,'[h[#')](''),console[lilIII(0x236,'(n@0')]('=========='+$[lilIII(0x1e4,'O99B')]+'变量说明=========='),console['log']('jd_dpqd_tokens\x20//\x20活动ID，多个用英文逗号分割'),console[lilIII(0x1fe,'%zk1')](lilIII(0x295,'k^og')),console[lilIII(0x22f,'Fxq@')](lilIII(0x223,'au6a')),console[lilIII(0x1f8,'l#Uo')](lilIII(0x21a,'kGCU')),console['log']('=========='+$[lilIII(0x232,'wz5z')]+'提示结束=========='),console[lilIII(0x1c7,'Rdnu')]('');let tokensList=(process[lilIII(0x203,'(n@0')][lilIII(0x1ec,'(n@0')]||'')[lilIII(0x1d8,'uxo@')](/[,@&|\n]+/g)[lilIII(0x23d,'(n@0')](Boolean),taskThreads=process[lilIII(0x279,'au6a')][lilIII(0x29b,'kbv@')]||'1',accountThreads=process[lilIII(0x206,'Fxq@')][lilIII(0x1d5,'G*!k')]||'1';const runInterval=process[lilIII(0x27d,'uxo@')][lilIII(0x242,'zO9#')]||'',isNotify=![];function iii1II(_0xe48a14,_0x3e5662){const _0x275733=Iii11l();return iii1II=function(_0x176081,_0x5eb80d){_0x176081=_0x176081-0x1a5;let _0x53ba1d=_0x275733[_0x176081];if(iii1II['SPjdLl']===undefined){var _0x23dab5=function(_0x166620){const _0xc815eb='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xb4edf2='',_0x5d8b84='';for(let _0x1fa61c=0x0,_0x1c2de8,_0x5b7530,_0x1c2bb6=0x0;_0x5b7530=_0x166620['charAt'](_0x1c2bb6++);~_0x5b7530&&(_0x1c2de8=_0x1fa61c%0x4?_0x1c2de8*0x40+_0x5b7530:_0x5b7530,_0x1fa61c++%0x4)?_0xb4edf2+=String['fromCharCode'](0xff&_0x1c2de8>>(-0x2*_0x1fa61c&0x6)):0x0){_0x5b7530=_0xc815eb['indexOf'](_0x5b7530);}for(let _0x580807=0x0,_0x116fe3=_0xb4edf2['length'];_0x580807<_0x116fe3;_0x580807++){_0x5d8b84+='%'+('00'+_0xb4edf2['charCodeAt'](_0x580807)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5d8b84);};const _0x443da7=function(_0x2e0585,_0x52bd44){let _0x41ee0c=[],_0x24b5f2=0x0,_0x4c7758,_0x5366a7='';_0x2e0585=_0x23dab5(_0x2e0585);let _0x5c58e7;for(_0x5c58e7=0x0;_0x5c58e7<0x100;_0x5c58e7++){_0x41ee0c[_0x5c58e7]=_0x5c58e7;}for(_0x5c58e7=0x0;_0x5c58e7<0x100;_0x5c58e7++){_0x24b5f2=(_0x24b5f2+_0x41ee0c[_0x5c58e7]+_0x52bd44['charCodeAt'](_0x5c58e7%_0x52bd44['length']))%0x100,_0x4c7758=_0x41ee0c[_0x5c58e7],_0x41ee0c[_0x5c58e7]=_0x41ee0c[_0x24b5f2],_0x41ee0c[_0x24b5f2]=_0x4c7758;}_0x5c58e7=0x0,_0x24b5f2=0x0;for(let _0x4e42f1=0x0;_0x4e42f1<_0x2e0585['length'];_0x4e42f1++){_0x5c58e7=(_0x5c58e7+0x1)%0x100,_0x24b5f2=(_0x24b5f2+_0x41ee0c[_0x5c58e7])%0x100,_0x4c7758=_0x41ee0c[_0x5c58e7],_0x41ee0c[_0x5c58e7]=_0x41ee0c[_0x24b5f2],_0x41ee0c[_0x24b5f2]=_0x4c7758,_0x5366a7+=String['fromCharCode'](_0x2e0585['charCodeAt'](_0x4e42f1)^_0x41ee0c[(_0x41ee0c[_0x5c58e7]+_0x41ee0c[_0x24b5f2])%0x100]);}return _0x5366a7;};iii1II['VwTqJy']=_0x443da7,_0xe48a14=arguments,iii1II['SPjdLl']=!![];}const _0x4ee530=_0x275733[0x0],_0x2255ce=_0x176081+_0x4ee530,_0x3cf975=_0xe48a14[_0x2255ce];return!_0x3cf975?(iii1II['OecULi']===undefined&&(iii1II['OecULi']=!![]),_0x53ba1d=iii1II['VwTqJy'](_0x53ba1d,_0x5eb80d),_0xe48a14[_0x2255ce]=_0x53ba1d):_0x53ba1d=_0x3cf975,_0x53ba1d;},iii1II(_0xe48a14,_0x3e5662);}let TokensMap=null;const invalidTokensMap=new Map(),CacheFile=__dirname+lilIII(0x1ef,'au6a'),cookiesArr=Object[lilIII(0x1bc,'idze')](jdCookie)['map'](iIli1l=>jdCookie[iIli1l])['filter'](i1i1II=>i1i1II);!cookiesArr[0x0]&&($['msg']($[lilIII(0x26c,'b*CN')],lilIII(0x288,'idze')),process[lilIII(0x1f1,'wN23')](0x1));!(async()=>{const Ii1ilI=lilIII,liiIIl={'YGnWq':function(iil1iI,IlIllI){return iil1iI(IlIllI);},'PPYyB':function(il1i1I,lI1li1,iI11II,iIII1I,ilil1i,IlIIi){return il1i1I(lI1li1,iI11II,iIII1I,ilil1i,IlIIi);},'hUyZL':function(IiI1l,illlII){return IiI1l!==illlII;},'IuupG':Ii1ilI(0x234,'uxo@'),'GfWHx':function(iIII11,IiI1i){return iIII11<=IiI1i;},'iFsQA':function(llll1,lil11l){return llll1===lil11l;},'xBiOG':'fTkYf','ehPNV':Ii1ilI(0x299,'[h[#'),'IcNFd':function(i1i1Il,I1lIl1){return i1i1Il(I1lIl1);},'xNVNx':Ii1ilI(0x27f,'VBXA'),'shkrH':Ii1ilI(0x228,'suYV'),'xTKoI':Ii1ilI(0x262,'2FA)'),'uVlZl':function(lil11i,IlIIl){return lil11i(IlIIl);},'MlkJA':function(lI1liI,i1i1Ii){return lI1liI>i1i1Ii;},'aNiTv':'⚠\x20自定义运行间隔时长设置错误','yoQIz':'rHDRa','IIegm':function(lllii,iI11Ii){return lllii(iI11Ii);},'BKzbq':function(iIII1l,lllil){return iIII1l!==lllil;},'ikIJs':Ii1ilI(0x22c,'Rdnu'),'rGJVh':'sgpHn','ZojUf':function(iI11Il,iIII1i){return iI11Il>iIII1i;},'USmbc':Ii1ilI(0x27c,'yU%y'),'dQZrt':function(iil1i1,il1i11){return iil1i1!==il1i11;},'jKXiF':Ii1ilI(0x270,'v4k@'),'nMPwL':Ii1ilI(0x22a,'%zk1'),'vUNkv':'YGOcP'};try{if(liiIIl[Ii1ilI(0x225,'0%o^')](liiIIl['IuupG'],liiIIl[Ii1ilI(0x260,'%zk1')]))I1lllI[Ii1ilI(0x248,'we[6')]('⚠\x20自定义运行间隔时长设置错误');else{notify['config']({'title':$[Ii1ilI(0x24f,'AwFT')]});if(tokensList['length']>0x0)tokensList=[...new Set(tokensList[Ii1ilI(0x1ca,'Dz&!')](ilil1l=>ilil1l!==''))];if(liiIIl['GfWHx'](tokensList[Ii1ilI(0x1f6,'G*!k')],0x0)){if(liiIIl['iFsQA'](Ii1ilI(0x1e5,')l2o'),liiIIl[Ii1ilI(0x277,'2FA)')])){console[Ii1ilI(0x20a,'AwFT')](liiIIl['ehPNV']);return;}else I1i11I[Ii1ilI(0x1f8,'l#Uo')](llIliI),I1l1I1&&(ilI1li[Ii1ilI(0x237,'HoLz')]=!![]);}const IlIII=liiIIl[Ii1ilI(0x1a8,'EH2c')](require,'fs');if(IlIII[Ii1ilI(0x224,'we[6')](CacheFile)){if(liiIIl['iFsQA'](liiIIl['xNVNx'],liiIIl[Ii1ilI(0x291,'suYV')])){const I1lIii=IlIII[Ii1ilI(0x230,'eG$X')](CacheFile,liiIIl[Ii1ilI(0x265,'wz5z')]),IiI1I=JSON[Ii1ilI(0x226,'idze')](I1lIii);TokensMap=new Map();for(const illlIl in IiI1I){TokensMap[Ii1ilI(0x22d,'[h[#')](illlIl,IiI1I[illlIl]);}}else I1ilI1['log'](''+iillll+lIIilI+'\x20➜\x20❌\x20查询失败（'+II1li1[Ii1ilI(0x290,'B0CD')]+'）');}else{console[Ii1ilI(0x1b9,'TNV7')](Ii1ilI(0x1ed,'l#Uo'));return;}$[Ii1ilI(0x21f,'kGCU')]=null;if(runInterval){if(liiIIl['xTKoI']===Ii1ilI(0x28b,'yuku'))try{const IIIIIi=liiIIl['uVlZl'](parseInt,runInterval);liiIIl['MlkJA'](IIIIIi,0x0)&&($[Ii1ilI(0x1cf,'v4k@')]=IIIIIi);}catch{console[Ii1ilI(0x298,'v4k@')](liiIIl[Ii1ilI(0x241,'zP9o')]);}else{const I1lIil=lIIii1[Ii1ilI(0x283,'we[6')]();ll1i1++,IIli1i['push'](liiIIl[Ii1ilI(0x1ea,'Fxq@')](I1iIi1,I1lIil));}}try{if(Ii1ilI(0x1fb,'au6a')!==liiIIl[Ii1ilI(0x252,'wN23')]){IiilI1['log']('⚠\x20请先定义必要的环境变量后再运行脚本！');return;}else{const liiII1=liiIIl['IIegm'](parseInt,taskThreads);liiII1>0x0&&liiIIl['BKzbq'](liiII1,0x1)&&(taskThreads=liiII1);}}catch{liiIIl['ikIJs']===liiIIl['rGJVh']?IIII11=0x1:taskThreads=0x1;}try{const lllll=parseInt(accountThreads);liiIIl[Ii1ilI(0x1cd,'EH2c')](lllll,0x0)&&lllll!==0x1&&(liiIIl['iFsQA']('UUiPT',liiIIl[Ii1ilI(0x1ae,'HoLz')])?IlI1i1['log'](''+l1lIl1+IiiIlI+'\x20➜\x20❌\x20查询失败\x20-\x20'+Iilli1['stringify'](I1l1Il)):accountThreads=lllll);}catch{liiIIl[Ii1ilI(0x25d,'kbv@')](liiIIl[Ii1ilI(0x275,'we[6')],Ii1ilI(0x1a6,'k^og'))?accountThreads=0x1:i1li['set'](li1II,IliI11[i1ll]);}await common['concTask'](accountThreads,cookiesArr,async(lllli,iiili1)=>{const II11i1=Ii1ilI;await liiIIl['PPYyB'](concMain,taskThreads,tokensList,lllli,iiili1,Main);if($[II11i1(0x205,'O99B')])$[II11i1(0x1f0,'HoLz')]($[II11i1(0x233,'l#Uo')]);}),isNotify&&notify[Ii1ilI(0x1b7,'AwFT')]()&&(liiIIl[Ii1ilI(0x209,'zO9#')]===liiIIl[Ii1ilI(0x1b8,'XaS@')]?I1llil[Ii1ilI(0x1dc,'yuku')]('❌\x20脚本运行遇到了错误\x0a'+I1llii):(notify['updateContent'](notify[Ii1ilI(0x21d,'eG$X')]),await notify['push']()));}}catch(lllill){console[Ii1ilI(0x259,'wN23')](Ii1ilI(0x221,'HoLz')+lllill);}})()['catch'](ill11l=>$[lilIII(0x21c,'AwFT')](ill11l))['finally'](()=>$[lilIII(0x215,'imSx')]());async function Main(I1lIiI,lllili){const iliIil=lilIII,IliiiI={'HGJQp':function(ii1ii1){return ii1ii1();},'QzOmb':function(llllI,lllil1){return llllI===lllil1;},'KFkNi':iliIil(0x254,'imSx'),'xMoNy':iliIil(0x1b3,'TNV7'),'KSPch':function(iil1il,ilil1I){return iil1il===ilil1I;},'mBpsE':function(i11il1,ii1iiI){return i11il1>ii1iiI;},'kSoqz':function(lllilI,ilil11){return lllilI>ilil11;},'OcWHd':function(illlI1,IIIl11){return illlI1>=IIIl11;},'IspbW':iliIil(0x1e6,'kbv@'),'fDKdY':iliIil(0x211,')l2o'),'DnZBQ':iliIil(0x25e,'8@[T'),'rLDCp':function(I1lIi1,liiIIi){return I1lIi1!==liiIIi;},'Ztrba':iliIil(0x276,'AwFT'),'riGxJ':iliIil(0x246,'idze'),'xdZvN':function(lil11I,Iliii1,iIiIi){return lil11I(Iliii1,iIiIi);},'zeMbF':function(iil1ll,iiilil){return iil1ll(iiilil);},'bqOci':function(iil1li,lillIl){return iil1li!==lillIl;},'hapgq':function(iIiIl){return iIiIl();},'snpML':iliIil(0x296,'VBXA'),'tgaqq':'interCenter_shopSign','BoVdj':'interact_center_shopSign_getSignRecord','TOEmB':function(iiilii,li1i1i){return iiilii(li1i1i);},'AQiOz':function(IlIli1,illIiI){return IlIli1(illIiI);},'tZOmb':iliIil(0x250,'(n@0'),'ubToZ':iliIil(0x24a,'idze'),'WMREP':iliIil(0x216,'zP9o'),'yLtTr':iliIil(0x220,'Dz&!'),'GsadP':iliIil(0x1d6,'[h[#'),'BgoXK':iliIil(0x1fd,'wN23'),'zeKvq':iliIil(0x20b,'imSx'),'aQiks':iliIil(0x200,'8@[T'),'RyQof':iliIil(0x1eb,'awTi'),'xRebj':iliIil(0x1c2,'HoLz'),'WRLuR':function(lI1lli,Ill1l){return lI1lli===Ill1l;},'PqYJc':'PPSBF','psQeN':iliIil(0x227,'AwFT'),'yexpc':'wvTtY','poLwb':iliIil(0x278,'Dz&!'),'FPLoL':iliIil(0x219,')l2o'),'FSAcn':function(llI1Il,ii1iii,i11iil){return llI1Il(ii1iii,i11iil);},'UsYOh':iliIil(0x1cc,'imSx'),'TjMLM':function(Ill1i,ii1iil){return Ill1i||ii1iil;},'WTBeu':function(lllI1l,i11iii){return lllI1l(i11iii);}},{title:Ill11,UA:liiIII,cookie:li1i11,message:iI11I1,jsToken:il1i1l}=lllili;if(invalidTokensMap[iliIil(0x208,'f%XU')](I1lIiI))return;const IlIlll=TokensMap[iliIil(0x1d2,'l#Uo')](I1lIiI);if(!IlIlll)return;const IIIl1I=Math[iliIil(0x1bf,'uxo@')](Date[iliIil(0x1a9,'wN23')]()/0x3e8)+'000',{venderId:iil1ii,activityId:IlIlli,maxLevel:il1i1i}=IlIlll;if(IliiiI[iliIil(0x1dd,'suYV')](!iil1ii,!IlIlli))return;if(invalidTokensMap['get'](I1lIiI))return;await IliiiI['WTBeu'](i11ilI,IliiiI[iliIil(0x1b1,'$PsI')]);if($[iliIil(0x1cf,'v4k@')])$[iliIil(0x1d3,'EH2c')]($[iliIil(0x222,'kbv@')]);function lil111(llI1Ii,lllI1i){const lill1i=iliIil,li1i1l={'zbpHC':function(II1i1){const iliIii=iii1II;return IliiiI[iliIii(0x1f5,'fhM[')](II1i1);}};try{if(IliiiI[lill1i(0x20c,'AwFT')](IliiiI[lill1i(0x263,'f%XU')],lill1i(0x239,'$PsI')))switch(llI1Ii){case IliiiI[lill1i(0x24b,'awTi')]:if(IliiiI[lill1i(0x257,'Fxq@')](lllI1i[lill1i(0x25c,'zO9#')],0xc8)&&lllI1i[lill1i(0x294,'2FA)')]===!![]&&lllI1i[lill1i(0x268,'O99B')]){const lI1lll=lllI1i[lill1i(0x1de,')l2o')][lill1i(0x212,'(n@0')];console[lill1i(0x217,'yU%y')](''+Ill11+I1lIiI+lill1i(0x1ee,'%zk1')+(IliiiI['mBpsE'](lI1lll,0x9)?lI1lll:'\x20'+lI1lll)+'天'+(IliiiI[lill1i(0x26a,'Dz&!')](lI1lll,0x0)&&il1i1i&&IliiiI[lill1i(0x23e,'(n@0')](lI1lll,il1i1i)?IliiiI[lill1i(0x1ff,'$PsI')]:''));}else{if(lllI1i[lill1i(0x23f,'TNV7')]){if(IliiiI['fDKdY']===IliiiI[lill1i(0x24e,'zO9#')]){Iillil[lill1i(0x284,')l2o')](l1lIli+lill1i(0x235,'TNV7'));return;}else console[lill1i(0x229,'b*CN')](''+Ill11+I1lIiI+'\x20➜\x20❌\x20查询失败（'+lllI1i[lill1i(0x258,'k^og')]+'）');}else{if(IliiiI[lill1i(0x264,'fhM[')](IliiiI['Ztrba'],IliiiI[lill1i(0x202,'AwFT')]))return;else console['log'](''+Ill11+I1lIiI+'\x20➜\x20❌\x20查询失败\x20-\x20'+JSON[lill1i(0x1c5,'zO9#')](lllI1i));}}break;}else li1Ii=Iliiii;}catch(li1i1I){IliiiI['riGxJ']===IliiiI['riGxJ']?console[lill1i(0x1ab,'EH2c')](lill1i(0x274,'8@[T')+llI1Ii+lill1i(0x245,'8@[T')+(li1i1I['message']||li1i1I)):(ii1lI(I1ilIl),li1i1l[lill1i(0x238,'HoLz')](I11iII));}}async function i11ilI(ii1il1){const iilii=iliIil,lI1llI={'aVBdU':function(llI1I1,IlIlil){return IliiiI['zeMbF'](llI1I1,IlIlil);},'sJHHw':function(lIli1I,II1il){return IliiiI['mBpsE'](lIli1I,II1il);},'sOKOP':function(lllI11,I1lIll){const il1li=iii1II;return IliiiI[il1li(0x22b,'yU%y')](lllI11,I1lIll);},'ZLooa':'utf-8','PLjNN':function(I1lIli,II1ii){const iIIill=iii1II;return IliiiI[iIIill(0x1cb,'yuku')](I1lIli,II1ii);},'EDCQr':function(IIIIII){return IliiiI['hapgq'](IIIIII);}};let illIil='',Ill1I=null,i11iiI=null,lIli11=IliiiI['snpML'],lllI1I={},lillI1={};switch(ii1il1){case IliiiI[iilii(0x1f3,')l2o')]:illIil=iilii(0x23c,'eG$X'),i11iiI={'appid':IliiiI[iilii(0x256,'f%XU')],'functionId':IliiiI[iilii(0x1db,'EH2c')],'body':JSON[iilii(0x1b4,'au6a')]({'token':I1lIiI,'venderId':IliiiI[iilii(0x1f4,'Fxq@')](parseInt,iil1ii)||'','activityId':IliiiI[iilii(0x266,'8@[T')](parseInt,IlIlli)||'','type':0x38}),'jsonp':IliiiI[iilii(0x26f,'HOH8')]};break;}const IlIlii={'t':IIIl1I,'loginType':'2','x-api-eid-token':il1i1l};if(Ill1I){if(IliiiI[iilii(0x244,'k^og')](IliiiI[iilii(0x1c6,'yU%y')],IliiiI[iilii(0x1e2,'kGCU')])){const ii1ilI=lI1llI[iilii(0x1ce,'we[6')](Ii1iIi,iliIIl);lI1llI[iilii(0x1e8,'yuku')](ii1ilI,0x0)&&lI1llI[iilii(0x261,'HOH8')](ii1ilI,0x1)&&(iliIIi=ii1ilI);}else Object['assign'](Ill1I,IlIlii);}i11iiI&&Object[iilii(0x231,'XaS@')](i11iiI,IlIlii);const i1l1i1={'url':illIil,'method':lIli11,'headers':{'Accept':IliiiI[iilii(0x273,'eG$X')],'Accept-Encoding':iilii(0x29a,'wz5z'),'Accept-Language':IliiiI['yLtTr'],'Connection':IliiiI[iilii(0x240,'Dz&!')],'Content-Type':IliiiI[iilii(0x1d0,'b*CN')],'Host':IliiiI[iilii(0x27b,'au6a')],'Referer':IliiiI[iilii(0x26e,'l#Uo')],'Sec-Fetch-Dest':IliiiI[iilii(0x271,'AwFT')],'Sec-Fetch-Mode':IliiiI[iilii(0x22e,'HOH8')],'Sec-Fetch-Site':iilii(0x1b6,'O99B'),'User-Agent':liiIII,'Cookie':li1i11},'params':i11iiI,'data':Ill1I,'timeout':0x7530};IliiiI['WRLuR'](lIli11,IliiiI[iilii(0x1c8,'HOH8')])&&(iilii(0x289,'kbv@')===IliiiI['PqYJc']?(delete iI1lli[iilii(0x1aa,'we[6')],delete ll1iI[iilii(0x213,'b*CN')]['Content-Type']):(delete i1l1i1[iilii(0x1df,'VBXA')],delete i1l1i1[iilii(0x1e7,'wz5z')][IliiiI[iilii(0x1bd,'wN23')]]));const liil11=0x3;let iiillI=0x0,l1l111=null,l1iIII=![];while(iiillI<liil11){if(IliiiI[iilii(0x214,'O99B')](IliiiI['yexpc'],IliiiI[iilii(0x25a,'XaS@')])){const liil1I=IlI11[iilii(0x1af,'HoLz')](iIIIIl,lI1llI[iilii(0x21b,'HOH8')]),i11ii1=II1Il[iilii(0x1f9,'G*!k')](liil1I);lilIlI=new iIIIIi();for(const IlIliI in i11ii1){i1ii[iilii(0x24c,'b*CN')](IlIliI,i11ii1[IlIliI]);}}else{const l1iII1=await common[iilii(0x28a,'eG$X')](i1l1i1);if(!l1iII1['success']){if(IliiiI[iilii(0x1ac,'G*!k')]==='spXrQ'){const lIli1i=IliiiI[iilii(0x201,'Dz&!')](IllIIi,()=>{const Ill11i=iilii;lI1llI[Ill11i(0x297,'au6a')](ii1ll,0x0)&&(lI1llI[Ill11i(0x1fa,')l2o')](lliiii,lIli1i),lI1llI[Ill11i(0x28f,'HOH8')](IliI1i));},0x64);}else{l1l111=''+Ill11+I1lIiI+'\x20➜\x20请求失败（'+l1iII1['error']+iilii(0x1ad,'we[6'),iiillI++;continue;}}if(!l1iII1['data']){l1l111=''+Ill11+I1lIiI+iilii(0x25f,'O99B'),iiillI++;continue;}IliiiI[iilii(0x249,'TNV7')](lil111,ii1il1,l1iII1[iilii(0x21e,'(n@0')]),l1iIII=![];break;}}IliiiI['OcWHd'](iiillI,liil11)&&(IliiiI['WRLuR'](iilii(0x267,'AwFT'),IliiiI['UsYOh'])?(console[iilii(0x1be,'Dz&!')](l1l111),l1iIII&&($[iilii(0x1b5,'suYV')]=!![])):I1i11l[iilii(0x218,'we[6')](llIlii,llIlil));}}async function concMain(I1lIlI=0x1,ii1ill,II1iI,llI1II,lIli1l){const iilil=lilIII,lillIi={'ucorZ':function(iii1il,II11li){return iii1il(II11li);},'jsMkQ':function(I1l11i,iIIiiI){return I1l11i!==iIIiiI;},'DaTuK':function(liiI1i,ililIi,lilIIl){return liiI1i(ililIi,lilIIl);},'ccqCn':function(ililIl){return ililIl();},'RAwlN':function(liiI1l,i1l1II){return liiI1l<i1l1II;},'SSwHE':function(i1ill,I1l11l){return i1ill>I1l11l;},'Fxrqi':function(lilIIi,i1l1Il){return lilIIi===i1l1Il;},'aBKDW':function(llIli){return llIli();},'hOXeD':iilil(0x1d7,'VBXA'),'BRQjX':function(i1i11l,i1i11i,II11l1){return i1i11l(i1i11i,II11l1);},'mqaax':iilil(0x281,'8@[T'),'rHYDt':function(Iil1lI,IiiliI,iii1iI,llIll){return Iil1lI(IiiliI,iii1iI,llIll);},'CnBkL':iilil(0x1e1,'k^og'),'rlrPy':iilil(0x1f7,'$PsI'),'jFUGY':function(il1iII,iilli){return il1iII===iilli;},'Akksv':iilil(0x282,'l#Uo'),'vhjlV':'GNqvz'},illIi1=ii1ill['map'](IlllIl=>IlllIl),ii1ili=decodeURIComponent(common[iilil(0x27a,'kbv@')](II1iI,lillIi['mqaax'])),liil1i=notify[iilil(0x28c,'G*!k')](llI1II,ii1ili),lI1lil=iilil(0x1d9,'5T(R')+llI1II+'】'+ii1ili+'：',i1l1iI=common[iilil(0x251,'wz5z')](ii1ili),{jsToken:liil1l}=await lillIi['rHYDt'](jsTk,i1l1iI,lillIi[iilil(0x28e,'VBXA')],{'bizId':iilil(0x20e,'Fxq@'),'v':lillIi[iilil(0x272,'l#Uo')],'qs':iilil(0x23a,'(n@0')+ii1ill[0x0]}),lI1lii={'title':lI1lil,'UA':i1l1iI,'cookie':II1iI,'index':llI1II,'message':liil1i,'jsToken':liil1l},Iiili1=await common['getLoginStatus'](II1iI);if(!Iiili1&&lillIi['jFUGY'](typeof Iiili1,'boolean')){if(lillIi[iilil(0x269,'iXV^')](lillIi[iilil(0x26b,'yuku')],lillIi['vhjlV'])){console['log'](lI1lil+'账号无效\x20🚫');return;}else{const lI1IIi=lillIi[iilil(0x26d,'AVtr')](Iii111,l1l1II);lI1IIi>0x0&&lillIi['jsMkQ'](lI1IIi,0x1)&&(Ii1iII=lI1IIi);}}let Iil1l1=0x0;async function i1i11I(I1l11I){const Ill11l=iilil;await lillIi[Ill11l(0x207,'fhM[')](lIli1l,I1l11I,lI1lii),Iil1l1--,lillIi[Ill11l(0x1a7,'zP9o')](il1iIl);}async function il1iIl(){const il1ll=iilil;while(lillIi['RAwlN'](Iil1l1,I1lIlI)&&lillIi[il1ll(0x204,'AwFT')](illIi1['length'],0x0)){const Ilil1l=illIi1[il1ll(0x20f,'kbv@')]();Iil1l1++,await lillIi[il1ll(0x292,'Rdnu')](i1i11I,Ilil1l);}}const iii1ii=Math[iilil(0x1c9,'B0CD')](illIi1[iilil(0x210,')l2o')],I1lIlI),il1iIi=[];for(let iIIiii=0x0;lillIi[iilil(0x28d,'zO9#')](iIIiii,iii1ii);iIIiii++){const iilll=illIi1['shift']();Iil1l1++,il1iIi['push'](lillIi['ucorZ'](i1i11I,iilll));}await Promise[iilil(0x285,'k^og')](il1iIi),il1iIl(),await new Promise(il1iI1=>{const l1l1i1=iilil,IlllIi={'YPvSN':function(iIIiil,i1l1Ii){const i1ilIi=iii1II;return lillIi[i1ilIi(0x243,'eG$X')](iIIiil,i1l1Ii);},'bcMBg':function(I1iIIi){const lill1l=iii1II;return lillIi[lill1l(0x1a5,'%zk1')](I1iIIi);},'vaWJN':l1l1i1(0x23b,'imSx')};if(lillIi[l1l1i1(0x286,'au6a')]('SWFjc',lillIi[l1l1i1(0x1fc,'suYV')])){const I1iIIl=lillIi['BRQjX'](setInterval,()=>{IlllIi['YPvSN'](Iil1l1,0x0)&&(clearInterval(I1iIIl),IlllIi['bcMBg'](il1iI1));},0x64);}else lilIl1[l1l1i1(0x290,'B0CD')](i1l1ii[l1l1i1(0x1e9,'fhM[')],IlllIi['vaWJN']),i1l1['exit'](0x1);});}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
