// eslint-disable-next-line react/prop-types
const InputField = ({ text, setText, addTodo }) => {
  return (
    <div>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}> Add todo</button>
      </label>
    </div>
  )
}

export default InputField
