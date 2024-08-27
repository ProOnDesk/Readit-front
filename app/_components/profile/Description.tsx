import { User } from "@/app/_redux/features/authApiSlice";
import { LuPencilLine } from "react-icons/lu";
import Modal from "../ui/Modal";
import EditDescModal from "./EditDescModal";

interface DescriptionProps {
  user: User | undefined;
}

export default function Description({ user }: DescriptionProps) {
  return (
    <div className="px-8 mt-10">
      <h4 className="text-2xl font-medium">O mnie</h4>
      <Modal>
        <Modal.Open opens="editdesc">
          <button className="py-4 text-left flex gap-2 group">
            <p>
              {user?.description.length === 0
                ? "Napisz tutaj coś o sobie"
                : user?.description}
            </p>
            <span className="p-1 rounded-md group-hover:bg-whiteSecond transition-colors duration-300">
              <LuPencilLine size={20} />
            </span>
          </button>
        </Modal.Open>
        <Modal.Window name="editdesc">
          <EditDescModal
            type="normal"
            onCloseModal={undefined as never}
            user={user}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}
