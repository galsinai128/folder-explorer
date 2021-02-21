import React from 'react';
import './App.css';
import TreeNode from './components/TreeNode'

import {entities} from './data'
import {useState,useEffect} from 'react'


function App() {

  const [flieTree, setFlieTree] = useState<MyNode[]>([]);

  useEffect(() => {
    buildTree()
  },[]);

  function buildTree(){
    let result: MyNode[] = [];
    let level = {result};
    entities.forEach(entitie=>{
      let path = entitie.id.replace(/\s/g, ''); //remove spaces
      path.split(':').reduce((r:any, name:string) => {
        if(!r[name]) {
          r[name] = {result: []};
          r.result.push({name, children: r[name].result})
        }
        return r[name];
      }, level)
    })
    setFlieTree(result)
  }

  return (
    <div className="App">
      <h1>Folder explorer</h1>
      <TreeNode flieTree={flieTree}/>
    </div>
  );
}

export default App;
