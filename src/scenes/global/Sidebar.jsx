import React, {useState} from 'react'
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, IconButton, Typography, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')


    return (
        <Box sx={{
            '& .pro-sidebar-inner': {
                background: `${colors.primary[400]} !important`,
            },
            '& .pro-icon-wrapper': {
                backgroundColor: 'transparent !important',
            },
            '& .pro-inner-item': {
                padding: '5px 35px 5px 20px !important',
            },
            '& .pro-inner-item:hover': {
                color: '#868dfb !important',
            },
            '& .pro-menu-item.active': {
                color: '#6870fa !important',
            },
        }}>

            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt='profile' width='100px' height='100px' style={{ cursor: 'pointer', borderRadius: '50%' }} />
                            </Box>

                            <Box textAlign='center'>
                                <Typography variant='h3' color={colors.grey[100]} fontWeight='bold' sx={{ m: '10px 0 0 0' }}>
                                    Gonzalo 
                                </Typography>

                                <Typography variant='h5' color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title='Dashboard'
                            to='/react-dashboard'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }} fontWeight='bold'>
                            Data
                        </Typography>
                        <Item
                            title='Team'
                            to='/react-dashboard/team'
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Contacts Information'
                            to='/react-dashboard/contacts'
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Invoices Balances'
                            to='/react-dashboard/invoices'
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }} fontWeight='bold'>
                            Pages
                        </Typography>
                        <Item
                            title='Profile Form'
                            to='/react-dashboard/form'
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Calendar'
                            to='/react-dashboard/calendar'
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='FAQ Page'
                            to='/react-dashboard/faq'
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }} fontWeight='bold'>
                            Charts
                        </Typography>
                        <Item
                            title='Bar Chart'
                            to='/react-dashboard/bar'
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Pie Chart'
                            to='/react-dashboard/pie'
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Line Chart'
                            to='/react-dashboard/line'
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Geography Chart'
                            to='/react-dashboard/geography'
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar