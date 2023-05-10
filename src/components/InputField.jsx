// eslint-disable-next-line react/prop-types
const InputField = ({ text, setText, handleAddTodo }) => {
  return (
    <div>
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddTodo}> Add todo</button>
      </label>
    </div>
  )
}

export default InputField
