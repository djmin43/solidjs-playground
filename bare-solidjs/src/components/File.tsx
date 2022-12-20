import { TreeNode } from "../api/api";
import { createEffect } from "solid-js";

type FileType = {
  node: TreeNode;
  searchInput: string;
};

export const File = ({ node, searchInput }: FileType) => {
  const myIndex = node.name.indexOf(searchInput);
  return (
    <div class={"file-container"}>
      {node.type === "folder" ? <span>📁</span> : <span>📄</span>}
      <div>
        <span>{node.name.substring(0, myIndex)}</span>
        <span class={"included"}>
          {node.name.substring(myIndex, myIndex + searchInput.length)}
        </span>
        <span>{node.name.substring(myIndex + searchInput.length)}</span>
      </div>
    </div>
  );
};
