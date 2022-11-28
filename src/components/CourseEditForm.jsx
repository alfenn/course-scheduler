import { useParams, useNavigate } from "react-router-dom";
import { useFormData } from '../utilities/useFormData';


const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
    case 'meets':
            return /[M|Tu|W|Th|F]+ [0-9][0-9]:[0-9][0-9]-[0-9][0-9]:[0-9][0-9]/gm.test(val) ? '' : 'Invalid meeting times - must specify valid days (MTuWThF) followed by a space and valid military-style times';
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => {
  console.log(state.values);
return (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);}

const ButtonBar = ({message, disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
}

const CourseEditForm = ({data}) => {
  const { courseId } = useParams();
  const course = data.courses[courseId];
  const [state, change] = useFormData(validateCourseData, course);
  const submit = (evt) => {
    evt.preventDefault();
    // if (!state.errors) {
    //   update(state.values);
    // }
  };

  return (
    <div className="container pt-3">
      <h2>Edit Course Information for {state.values.term} CS {state.values.number}</h2>
      <form onSubmit={submit} noValidate className={`${state.errors ? 'was-validated' : null}`}>
        <InputField name="title" text="Course Title" state={state} change={change} />
        <InputField name="meets" text="Meeting Times" state={state} change={change} />
        <ButtonBar message={''} />
      </form>
    </div>    
  );
}

export default CourseEditForm;