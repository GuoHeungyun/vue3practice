import {ref} from 'vue'

const nowTime = ref('00:00:00');
const getNowTime = () => {
    const temp = new Date();
    const hour = temp.getHours()<10?'0'+temp.getHours():temp.getHours();
    const minu = temp.getMinutes()<10?'0'+temp.getMinutes():temp.getMinutes();
    const sec = temp.getSeconds()<10?'0'+temp.getSeconds():temp.getSeconds();
    nowTime.value = `${hour}:${minu}:${sec}`
    setTimeout(getNowTime,1000)
}
export {nowTime,getNowTime}