import React, {useState} from 'react';
import {Avatar, Button, Menu} from '@mui/material';
import {NavLink} from 'react-router-dom';

const AnonMenu = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	let cardImage =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';

	return (
		<>
			<Button onClick={handleClick} color="inherit">
				<Avatar sx={{mx: 1}} alt='anon' src={cardImage}/>
			</Button>
			<Menu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>

				<Button component={NavLink} to="/register" color="inherit">
					Sign up
				</Button>
				<Button component={NavLink} to="/login" color="inherit">
					Sign in
				</Button>

			</Menu>
		</>
	);
};

export default AnonMenu;
