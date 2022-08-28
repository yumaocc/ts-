import { ChannelAction, ArticleItem } from "../types";


type IState = {
    articles: ArticleItem[]
}
const initState: IState = {
    articles: []
}

export default function article(state = initState, action: ChannelAction) {
    switch (action.type) {
        case 'ARTICLE_DATA':
            return {
                ...state,
                articles: action.payload
            }
        default:
            return state
    }
}