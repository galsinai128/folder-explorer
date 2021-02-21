import React from 'react';
import {useState} from 'react';
import TreeNode from './TreeNode';

interface TreeNodeRecProps {
    node:MyNode
  }
  
  function TreeNodeRec({node}:TreeNodeRecProps){
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    let sign = isCollapsed ? '▲' : '▼';
    return (
      <div>
        {node.children.length ?
         (<div
            onClick={(event)=>{
              event.stopPropagation();
              setIsCollapsed(!isCollapsed)}}
         >
            <div>{sign + ' ' + node.name}</div>
         </div>
         ) 
         : 
         (<div className={'noChildren'}>{node.name}</div>)}
        {node.children.length && !isCollapsed ? <TreeNode flieTree={node.children}></TreeNode> : null}
      </div>
    )
  }
  
  export default TreeNodeRec;