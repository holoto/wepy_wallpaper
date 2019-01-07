import wepy from 'wepy';
// import util from './util';
// import md5 from './md5';
// import tip from './tip';
import {request,setConfig} from 'wx-promise-request';

// const TIMESTAMP = util.getCurrentTime();
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
// 根据自身需求，来定制 request
setConfig({
    // request: request, // 使用 qcloud 提供的请求方法
    Promise, // 使用 bluebird 作为 Promise
    concurrency: 5, // 限制最大并发数为 5
});
let wxRequest = (url) => {
  let a=request({
    url:url
  });
  return a;
};
let wxPost=(url,shorturl)=>{
  let a=request({
    url:url,
    method:"POST",
    data:{"url":shorturl},
  });
  return a;
}

module.exports = {
    wxRequest,
    wxPost
}
