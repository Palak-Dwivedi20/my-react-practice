export default function FilterButton({ setFilter, filter }) {

  const btn = (type, icon) => (
    <button
      onClick={() => setFilter(type)}
      className={filter === type ? "active" : ""}
    >
      <i className={icon}></i>
    </button>
  );

  return (
    <div className="filters">
      {btn("all", "fa-solid fa-list")}
      {btn("active", "fa-solid fa-clock")}
      {btn("completed", "fa-solid fa-check")}
    </div>
  );
}