import React,{useState}from 'react'
//form the dispaly the data
const AddtransAction = () => {
  const [text,setText]=useState('')
  const [amount,setAmount]=useState(0)
  return (
    <>
        <h3>Add new transcation</h3>
        <form>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...'/>
        </div>
        <div className='form-control'><br/>
            <label htmlFor='amount'
            > Amount <br/>
            (negative -expense,positive-income)</label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount.....'/>
        </div><br/><br/><br/><br/><br/>
        <button className='btn'>Add transcation</button>
        </form>
    </>
  )
}

export default AddtransAction