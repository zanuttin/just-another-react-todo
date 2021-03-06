import {
	Card,
	CardContent,
	Grid,
	IconButton,
	TextField,
	Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';

const styles = {
	Card: {
		height: 75,
		margin: 25,
		width: 650,
	},
};

const Todo = ({ id, children, del, editTodo }) => {
	const [editState, setEditState] = useState(false);
	const [editText, setEditText] = useState(children);

	const toggleEdit = () => {
		setEditState(!editState);
		if (editState) editTodo(id, editText);
	};

	const handleChange = (event) => {
		setEditText(event.target.value);
	};

	return (
		<Card elevation={4} style={styles.Card}>
			<CardContent>
				<Grid container>
					<Grid item container xs={10} align='left'>
						<Grid item>
							<Typography variant='h6'>#{id} - </Typography>
						</Grid>
						<Grid item xs={10}>
							{!editState ? (
								<Typography variant='h6'>{children}</Typography>
							) : (
								<TextField
									fullWidth
									value={editText}
									onChange={handleChange}
									onKeyPress={(e) => {
										if (e.key === 'Enter') toggleEdit();
									}}
								/>
							)}
						</Grid>
					</Grid>

					<Grid item>
						<IconButton onClick={toggleEdit}>
							<EditIcon />
						</IconButton>

						<IconButton onClick={() => del(id)} color='secondary'>
							<Delete />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Todo;
