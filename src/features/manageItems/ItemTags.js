import React from "react";

export const ItemTags = ({ setTagsEntered, tagsEntered }) => {
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const tag = e.target.value;
    if (!tag.trim()) return;
    setTagsEntered([...tagsEntered, tag]);
    e.target.value='';
  };
  const handleRemove = (tag) => {
    setTagsEntered(tagsEntered.filter((item) => item !== tag));
  };
  return (
    <div className="d-flex flex-row flex-wrap justify-content-start m-1">
      <input
        placeholder="Tags"
        type="text"
        className="form-control m-1"
        onKeyDown={handleKeyDown}
      />
      {tagsEntered.map((item) => (
        <div className="mx-2 p-1 w-25" key={item}>
          <span>{item}</span>
          <span className='pe-auto bg-light rounded-circle'
            onClick={() => {
              handleRemove(item);
            }}
          >
            &times;
          </span>
        </div>
      ))}
    </div>
  );
};
