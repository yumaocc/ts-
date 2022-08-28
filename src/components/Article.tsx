import React from 'react'
import { useSelector } from 'react-redux'
import '../style.css'
export default function Article() {
    const s = useSelector((state : any)=> {
        console.log(state.channel.name)
    })
    return (
        <div className='list'>
            <div className='article_item'>
                <h3 className='van-ellipsis'>python数据预处理 ：数据标准化</h3>
                <div className='img_box'>
                    <img src='https://xinzhuobu.com/wp-content/uploads/2022/08/20220821006.jpg'  className='w100' alt='' />
                </div>
                <div className='info_box'>
                    <span>13552285417</span>
                    <span>0评论</span>
                    <span>2018-11-29T17:02:09</span>
                </div>
            </div>
        </div>
    )
}