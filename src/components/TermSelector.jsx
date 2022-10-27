// import terms from './TermPage'

const TermButton = ({ term, selection, setSelection }) => (
  <div className='mx-1'>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
      {term}
    </label>
  </div>
);


const TermSelector = ({ terms, selection, setSelection }) => (
  <div className="btn-group">
    {Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)}
    {/* {terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)} */}
  </div>
);

export default TermSelector;