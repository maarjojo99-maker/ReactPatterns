import { useRef,useContext } from "react";
import classes from './NewTodo.module.css'
import { TodoContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodoContext);
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInput.current?.value;

    if(enteredText?.trim().length === 0){
        // throw error
        return;
    }
    // props.onAddTodo(enteredText!);
    // todoTextInput.current!.value = "";
    todoCtx.addTodo(enteredText!);
     todoTextInput.current!.value = "";

};


  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInput}></input>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
