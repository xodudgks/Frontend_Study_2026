import "./Editer.css";
import { useState, useRef } from "react";

const Editer = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="Editer">
      <input
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 todo..."
      />
    </div>
  );
};

export default Editer;
