import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { darkModeState } from '@/states/atoms/Top'
import {useRecoilState} from 'recoil'
import Header from '@/utils/Header'
export default function TopPage(){
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    return (
        <>
        <Header />
        </>
    )
}