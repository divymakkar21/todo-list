import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { TaskDetailsProps } from "../../utils/interface";
import PriorityTag from "../PriorityTag";

const TodoItemCard = ({ todo, onEdit, onRemove }: TaskDetailsProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="font-bold">{todo?.title}</h3>
        <p className="text-gray-600">{todo?.description}</p>
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
          color="#FF2E2E"
        />
      </div>
    </div>
  );
};

export default TodoItemCard;
