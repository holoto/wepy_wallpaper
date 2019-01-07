import {wxRequest,
  wxPost
} from './wxRequest';

let env = "-test";//-dev 或者 -test
const singlePoetry = 'https://api.apiopen.top/singlePoetry';
const journalismApi='https://www.apiopen.top/journalismApi';
const recommendPoetry='https://api.apiopen.top/recommendPoetry';
const femaleNameApi='https://www.apiopen.top/femaleNameApi'

const wallpapertag='http://openbox.mobilem.360.cn/html/api/wallpaperhot.html';
const allwallpapercategories="http://wallpaper.apc.360.cn/index.php?c=WallPaperAndroid&a=getAllCategories";




const ipfsurl='http://t.bdaily.club';


let getallwallpapercategories=()=>{
  return wxRequest(allwallpapercategories);
}

let getwallpapertag=()=>{
  return wxRequest(wallpapertag);
}


let getipfsurl=(url)=>{
  return wxPost(ipfsurl,url);
}

let getPoetry=(a)=>{
  return wxRequest(a);
}

let getsinglePoetry=()=>{
  return wxRequest(singlePoetry);
}

let getrecommendPoetry=()=>{
  return wxRequest(recommendPoetry);
}
let getjournalismApi=()=>{
  return wxRequest(journalismApi);
}
let getfemaleNameApi=()=>{
  return wxRequest(femaleNameApi);
}

      let clickcopy=(num,evt)=>{
        // console.log(num._relatedInfo.anchorRelatedText);
        // console.log(num._relatedInfo.anchorTargetText);
        // console.log(num);
           wx.setClipboardData({
  data: num._relatedInfo.anchorTargetText,
  // data: evt,
  success (res) {
    wx.getClipboardData({
      success (res){
        wx.showToast({

          title:'复制成功'
        })
        // console.log(res.data)
      }
    })
  }
})
      }





module.exports = {
  getallwallpapercategories,
  getwallpapertag,
  getrecommendPoetry,
  getsinglePoetry,
  getPoetry,
  wxRequest,
  getjournalismApi,
  getfemaleNameApi,
  clickcopy,
  getipfsurl
}
