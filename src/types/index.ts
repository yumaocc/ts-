export type ChannelAction = {
    type: 'CHANNEL_SAVE',
    payload: { id: number, name: string }[]
} | {
    type: 'CHANNEL_ACTIVE',
    id: number
} | {
    type: 'ARTICLE_DATA',
    payload: ArticleItem[]
}

export type channelItem = { name: string, id: number }

// export type ArticleData = {
//     type: 'ARTICLE_DATA',
//     payload: ArticleItem[]
// }
export type ArticleItem = {
    art_id: string
    title: string
    aut_id: string
    comm_count: number
    pubdate: string
    aut_name: string
    is_top: number
    cover: {
        type: number
        images: string[]
    }
}
