import React, { FunctionComponent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  HelpOutline as HelpOutlineIcon,
} from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    homeButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }),
)

type ProfileMenu = {
  anchorEl: null | HTMLElement
  isOpen: boolean
  menuId: string
  onMenuClose(): void
}

const ProfileMenu: FunctionComponent<ProfileMenu> = ({ anchorEl, onMenuClose, isOpen, menuId }) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isOpen}
    onClose={onMenuClose}
  >
    <MenuItem onClick={onMenuClose}>Infos personnelles</MenuItem>
    <MenuItem onClick={onMenuClose}>Facture & paiements</MenuItem>
    <MenuItem onClick={onMenuClose}>Mes demandes</MenuItem>
    <MenuItem onClick={onMenuClose}>Deconnexion</MenuItem>
  </Menu>
)

const Header: FunctionComponent = () => {
  const classes = useStyles()
  const menuId = 'menu-id'
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleToggleNotifs = () => {
    const customEv = new CustomEvent('toggle notifs', { detail: {} })
    window.dispatchEvent(customEv)
  }

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.homeButton}
            color='inherit'
            aria-label='Home'
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            BOUYGUES TELECOM
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label='commands' color="inherit">
              <ShoppingCartIcon/>
            </IconButton>
            <IconButton aria-label="help" color="inherit">
              <HelpOutlineIcon/>
            </IconButton>
            <IconButton
              aria-label="notifications"
              color="inherit"
              onClick={handleToggleNotifs}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ProfileMenu
        anchorEl={anchorEl}
        menuId={menuId}
        onMenuClose={handleMenuClose}
        isOpen={isMenuOpen}
      />
    </div>
  )
}

export default Header
