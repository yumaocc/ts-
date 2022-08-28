import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannels, getChannelsActive } from '../store/actions'
import { RootState } from '../types/store'
export default function Channel() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getChannels())
    }, [])
    const { channels, active } = useSelector((state: RootState) => state.channel)
    const handleClick = (id: number): void => {
        dispatch(getChannelsActive(id))
    }
    return (
        <ul className='catagtory'>
            {
                channels.map(item => {
                    return (
                        <li
                            key={item.id}
                            className={active === item.id ? 'select' : ''}
                            onClick={() => handleClick(item.id)}
                        >{item.name}</li>
                    )
                })
            }
            <li>开发者咨询</li>
        </ul >
    )
}