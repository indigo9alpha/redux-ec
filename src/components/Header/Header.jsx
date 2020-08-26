import React, {useState,useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSignedIn} from '../../reducks/users/selectors'
import {push} from 'connected-react-router'
import { makeStyles } from '@material-ui/styles' 
import Appbar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar' 
import logo from '../../assets/img/icons/logo1.png'
import { HeaderMenus, ClosableDrawer } from './index'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: '#fff',
    color: '#444'
  },
  toolBar: {
    margin: '0 auto',
    maxWidth: 1024,
    width: '100%'
  },
  iconButtons: {
    margin: '0 0 0 auto'
  }
})


const Header = () => {
  const classes = useStyles()
  const selector = useSelector((state) => state) 
  const isSignedIn = getSignedIn(selector)
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)

  const handleDrawerToggle = useCallback((event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'shift')) {
      return
    }
    setOpen(!open)
  }, [setOpen, open])

  return (
    <div className={classes.root}>
      <Appbar position='fixed' className={classes.menuBar}>
        <Toolbar className={classes.toolBar}>
          <img src={logo} alt="logo picture" width="128px"
          onClick={() => dispatch(push('/'))}
          />
          {isSignedIn && (
            <div className = {classes.iconButtons}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle}/>
            </div>
          )}
        </Toolbar>
      </Appbar>
      <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  )
}

export default Header