import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: {title, icon} });
        setTitle('');
        setIcon('');
    }
    
    const dispatch = useDispatch();

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    )
}

export default ColumnForm;
