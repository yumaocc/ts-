import { request } from '../api/request'
import { ChannelAction } from '../types/index'




export const getChannels = (): any => {
    return async (dispatch: any) => {
        try {
            const { data: { data: { channels } } } = await request.get('/channels')
            dispatch({
                type: 'CHANNEL_SAVE',
                payload: channels
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const getChannelsActive = (id: number):ChannelAction => ({ type: 'CHANNEL_ACTIVE', id })

//请求文章
export const getArticle = (id: number): any => {
    return async (dispatch:any) => {
        try {
            let res = await request.get(`/articles?channel_id=${id}&timestamp=${Date.now()}`)
            dispatch({
                type:'ARTICLE_DATA',
                payload:res.data.data.results
            })
        } catch (error) {
            console.log('文章列表：', error)
        }
    }
}