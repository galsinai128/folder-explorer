import React from 'react';
import TreeNodeRec from './TreeNodeRec';

interface TreeNodeProps {
  flieTree: MyNode[];
}

function TreeNode({flieTree}:TreeNodeProps) {

  return (
    <div className="TreeNode">
      {flieTree.map((node,i) =><TreeNodeRec node={node} key={i}/>)}
    </div>
  );
}

export default TreeNode;
