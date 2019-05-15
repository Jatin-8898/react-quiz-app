import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

//import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
		headerShow: true
	}

    render() {
        return (
        <AppBar
            className="container-fluid"
            position="fixed"
            style={{
                backgroundColor: this.state.headerShow ?'#24553' : 'transparent',
                boxShadow:'none',
                padding:'10px 0px'
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">React Quiz</div>
                </div>
            </Toolbar>
        </AppBar>
        )
    }
}
export default Header;