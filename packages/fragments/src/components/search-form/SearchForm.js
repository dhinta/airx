import { AutoComplete, Dropdown } from '@airx/ui-toolkits';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <>
      <div className="col-2">
        <div className="field-container">
          <AutoComplete label="Origin" />
        </div>
      </div>
      <div className="col-2">
        <div className="field-container">
          <AutoComplete label="Destination" />
        </div>
      </div>
      <div className="col-2">
        <div className="field-container">
          <Dropdown label="Trip Type" />
        </div>
      </div>
      <div className="col-3">
        <div className="field-container">
          <input type="text" />
        </div>
      </div>
      <div className="col-3">
        <div className="field-container">
          <button type="button" className="btn btn-danger">
            Large button
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
