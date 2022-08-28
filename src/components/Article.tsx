import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../store/actions'
import '../style.css'
import { RootState } from '../types/store'
export default function Article() {
    const dispatch = useDispatch()
    const { active, articles } = useSelector((state: RootState) => ({
        active: state.channel.active,
        articles: state.article.articles,
    }))
    useEffect(() => {
        dispatch(getArticle(active))
    }, [])
    useEffect(() => {
        dispatch(getArticle(active))
    }, [active])
    return (
        <div className='list'>
            {
                articles.map(item => (
                    <div className='article_item' key={item.art_id}>
                        <h3 className='van-ellipsis'>{item.title}</h3>
                        <div className='img_box'>
                            <img src={item.cover.images ? item.cover.images[0] : 'https://desk-fd.zol-img.com.cn/t_s208x130c5/g5/M00/0E/08/ChMkJl3g4u-IXLYLAAOQBJKADiEAAvffQOpyiMAA5Ac374.jpg'} className='w100' alt='' />
                        </div>
                        <div className='info_box'>
                            <span>13552285417</span>
                            <span>{item.comm_count}</span>
                            <span>{item.pubdate}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}