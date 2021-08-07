import './Subnav.css';

const Subnav = () => {
  return (
    <>
      <div className="col-2">
        <div className="field-container">
          <input type="text" />
        </div>
      </div>
      <div className="col-2">
        <div className="field-container">
          <input type="text" />
        </div>
      </div>
      <div className="col-2">
        <div className="field-container">
          <input type="text" />
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

export default Subnav;
