import { ChannelAction } from '../types/index'
import { channelItem } from '../types/index'


interface IState {
    channels: channelItem[],
    active: number
}
const initState: IState = {
    channels: [],
    active: 0
}

export default function channel(state = initState, action: ChannelAction) {
    switch (action.type) {
        case 'CHANNEL_SAVE':
            return {
                ...state,
                channels: action.payload
            }
        case 'CHANNEL_ACTIVE':
            return {
                ...state,
                active: action.id
            }
        default:
            return state
    }
}