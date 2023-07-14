  import { FilterButtonProps } from "../../types";


  export default function FilterButton({content,onClick}:FilterButtonProps){
    return (
      <button className="filter-btn"
        onClick={onClick}
      >
        {content}
      </button>
    )
  }
