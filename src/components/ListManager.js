import './ListManager.css'
import '../components/forms/Container.css'

function ListManager() {
  return (
    <div className="list-container">
      <div className='filters-container'>
        <p className="btn-filter">0 items left</p>
          <div className="filters">
            <button className="btn btn-filter filters">All</button>
            <button className="btn btn-filter filters">Active</button>
            <button className="btn btn-filter filters">Completed</button>
          </div>
        <button className="btn btn-filter">Clear Completed</button>
      </div>
    </div>
  );
}

export default ListManager;
