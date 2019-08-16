/*
 * @Author: Evan.Zengdp 
 * @Date: 2019-08-16 10:39:21 
 * @Last Modified by: Evan.Zengdp
 * @Last Modified time: 2019-08-16 10:48:59
 */
// 获取节点
var btnShow = document.getElementById('btn-show')
var btnCancel = document.getElementById('btn-cancel')
var btnOk = document.getElementById('btn-ok')
var wrapper = document.getElementById('wrapper')
// 给按钮绑定事件
btnShow.addEventListener('click', open, false)
btnCancel.addEventListener('click', cancel, false)
btnOk.addEventListener('click', ok, false)
// 事件
function open() {
    wrapper.style.display = 'block';
}

function cancel() {
    wrapper.style.display = 'none';
}

function ok() {
    wrapper.style.display = 'none';
}
