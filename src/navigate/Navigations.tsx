import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChevronRight from '@mui/icons-material/ChevronRight'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import Checklist from '@mui/icons-material/Checklist'
import ChecklistRtl from '@mui/icons-material/ChecklistRtl'
import BeachAccess from '@mui/icons-material/BeachAccess'
import Badges from 'src/muiComponents/Badges'
import Paper from '@mui/material/Paper'
import 'src/navigate/Navigations.css'

function Navigations({ sides, counter, isLoggedIn, value, setValue }) {
    return (
        <Paper className={sides} elevation={5}>
            {isLoggedIn &&
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>빌리기</Link>} icon={<ChevronRight />}/>
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>빌리기 목록</Link>} icon={<Checklist />}/>
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>내 상태</Link>} icon={<Badges counter={counter} />}/>
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>빌려주기</Link>} icon={<ChevronLeft/>}/>
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>빌려주기 목록</Link>} icon={<ChecklistRtl />}/>
                    {/* <div className='font-link'>list</div> */}
                </BottomNavigation>
            }
            {!isLoggedIn && 
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>빌리기 목록</Link>} icon={<Checklist />}/>
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>로그인</Link>} icon={<BeachAccess />}/>
                    <BottomNavigationAction label={<Link className='btns' to='/postings/'>빌려주기 목록</Link>} icon={<ChecklistRtl />}/>
                </BottomNavigation>
            }
        </Paper>
    )
}

export default Navigations
