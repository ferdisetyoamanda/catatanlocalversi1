import React from "react";

function CatatanButton({ id, onDelete, onArchive, isArchived }) {
  return (
    <div className="catatan-item_button">
      <button className='catatanku-item__delete' onClick={() => onDelete(id)}>Hapus</button>
      <button className="catatanku-item__archived" onClick={() => onArchive(id)}>
        {isArchived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default CatatanButton;

