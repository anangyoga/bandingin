"use client";

import { deleteProduct } from "@/actions/actions";

const DeleteButton = ({ id }) => {
  return (
    <button
      onClick={() => deleteProduct(id)}
      className="text-sm font-medium text-red-500"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
