const axios = require('axios');  //请求处理
const express = require('express')  //服务器模块
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const { createCanvas, loadImage } = require('canvas')
// const canvas = createCanvas(500, 500)
// const ctx = canvas.getContext('2d')

// const centerX = canvas.width/2;
// const centerY = canvas.height/2;
// const radius = 80
// const lineWidth = 10
// const today = new Date()
// const month = today.getMonth()
// const day = today.getDate()
// const week = today.getDay()
// const hour = today.getHours()

// const monthPercent = month/12
// const dayPercent = day/31
// const weekPercent = week/7
// const hourPercent = hour/24

// const PI2 = Math.PI * 2
// ctx.translate(0,0)
// ctx.save()
// ctx.translate(centerX,centerY)

// ctx.beginPath();
// ctx.strokeStyle = '#b8e994';
// ctx.lineWidth = lineWidth; 
// ctx.arc(0,0,radius,0,PI2 * monthPercent); 
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = '#78e08f';
// ctx.lineWidth = lineWidth; 
// ctx.arc(0,0,radius-lineWidth* 2,0,PI2 * dayPercent); 
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = '#38ada9';
// ctx.lineWidth = lineWidth; 
// ctx.arc(0,0,radius-lineWidth * 4,0,PI2 * weekPercent); 
// ctx.stroke();

// ctx.beginPath();
// ctx.strokeStyle = '#079992';
// ctx.lineWidth = lineWidth; 
// ctx.arc(0,0,radius-lineWidth * 6,0,PI2 * hourPercent); 
// ctx.stroke();

// const imgBase64 = canvas.toDataURL()
// canvas.toDataURL()

app.get('/', (req, res) => {
})

app.get('/nav',async (req, res) => {
    try {
        const data = await axios.get('http://api.bilibili.com/nav', 
            {headers: {'cookie': 'SESSDATA=36a1ea9a%2C1619659635%2C1b936*a1'}
        })
        res.send(data.data)
    } catch(err) {
        res.send('Whoops !')
        console.log(err)
    }

})

app.get('/img',async (req, res) => {
    try {
        res.send(imgBase64)
    } catch(err) {
        res.send('Whoops !')
        console.log(err)
    }

})

app.listen(3000,()=>{
    console.info(`serve at 3000!`)
})

function transformData(data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}