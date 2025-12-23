
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string; onRemoveTode: ()=> void}> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTode} >{props.text}</li>
}
export default TodoItem;