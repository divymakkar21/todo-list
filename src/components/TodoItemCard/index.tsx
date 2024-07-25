import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { TaskDetailsProps } from "../../utils/interface";
import PriorityTag from "../PriorityTag";

const TodoItemCard = ({ todo, onEdit, onRemove, onComplete }: TaskDetailsProps) => {
  return (
    <div className={`flex p-3 justify-between ${todo?.completed ? 'bg-gray-50' : 'bg-white'}`}>
      <div>
        <h3 className={`font-bold ${todo?.completed && 'line-through'}`}>{todo?.title}</h3>
        <p className={`text-gray-600 ${todo?.completed && 'line-through'}`}>{todo?.description}</p>
      </div>
      <div>
        <PriorityTag priority={todo?.priority} />
        <FontAwesomeIcon
          onClick={onEdit}
          icon={faEdit}
          width={24}
          height={24}
          color="#2463EB"
        />
        <FontAwesomeIcon
          onClick={onRemove}
          icon={faTrash}
          width={24}
          height={24}
          color="#FF5733"
        />
        <FontAwesomeIcon
          onClick={onComplete}
          icon={faSquareCheck}
          width={24}
          height={24}
          color="#228B22"
        />
      </div>
    </div>
  );
};

export default TodoItemCard;
