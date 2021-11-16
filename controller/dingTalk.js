/**
 * https://developers.dingtalk.com/document/robots/call-robot-api-operations
 * [自定义机器人](https://open-doc.dingtalk.com/microapp/serverapi2/qf2nxq)
 * [https://developers.dingtalk.com/document/app/custom-robot-access?spm=ding_open_doc.document.0.0.6d9d28e1xmI6dc#topic-2026027](https://developers.dingtalk.com/document/app/custom-robot-access?spm=ding_open_doc.document.0.0.6d9d28e1xmI6dc#topic-2026027)
 * [钉钉相关测试](/engineering/dingtalk-test)
 * @type {function(*=, *=, *=): *}
 */
const {markdown} = require('../common/dingTalk');

module.exports.markdown = async function(ctx) {
  console.log(22)
  // console.log(ctx)
  // await dingTalk.requestPost({
  //   body: {
  //     "msgtype": "markdown",
  //     "markdown": {
  //       "title":"前端报错",
  //       "text":11
  //     }
  //   }
  // }).then((data)=>{
  //   console.log(data)
  //   ctx.body = '32432'
  // })
  await markdown({text:11}).then((data)=>{
    console.log(data)
    ctx.body = '1111'
  }).catch((err)=>{
    console.log(2232423)
    console.log(err)
    ctx.body = err
  })
}
