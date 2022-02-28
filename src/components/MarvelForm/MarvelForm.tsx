import React from 'react';

import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName, choosePrice, chooseComicAppeared, choosePower } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface MarvelFormProps {
    id?:string;
    data?:{}
}

interface MarvelState {
    name: string;
    price: string;
}

export const MarvelForm = (props:MarvelFormProps) => {

    const dispatch = useDispatch();
    let { marvelData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<MarvelState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Marvel Name</label>
                    <Input {...register('name')} name="name" placeholder='Full Name' />
                </div>
                <div>
                    <label htmlFor="description">Price</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared">Camera Quality</label>
                    <Input {...register('comics_appeared')} name="comics_appeared" placeholder="Comics Appeared"/>
                </div>
                <div>
                    <label htmlFor="super_power">Flight Time</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}