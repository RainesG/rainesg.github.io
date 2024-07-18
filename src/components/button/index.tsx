import { useState } from 'react';
import styles from './button.module.scss';

export const Button =()=>{
    const [layerOn,setLayerOn]=useState(true)
    return <div>
        <button onClick={()=>{setLayerOn(!layerOn)}}>BUTTON</button>
        <div className={layerOn?styles.layout:''}></div>
    </div>
}