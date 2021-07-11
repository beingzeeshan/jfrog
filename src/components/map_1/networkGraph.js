import React from 'react';
import { Graph } from "react-d3-graph";


export default function mapTootip() {



const myConfig = {
  nodeHighlightBehavior: false,
  freezeAllDragEvents: false,
  height: 500,
  width: 700,
    d3: {
    linkLength: 200,
  },
  node: {
    size: {
      width: 600,
      height: 650
    },
    renderLabel: false,
    viewGenerator : function customComponent(node) {
      if (node.id=== "colo") {
        return <svg> <circle cx="31" cy="31" r="10" fill="red" /> </svg> ;
      } if (node.id !== "colo" && node.capacity === "21") {
        return <span className="demo critical" > {node.id} </span>;
      }
      if (node.id !== "colo" && node.capacity === "22") {
        return <span className="demo warning" > {node.id} </span>;
      }
       
        return <span className="demo good" > {node.id} </span>;
      
    },
  }
};

const data = {
    nodes: [
    { id: "colo", capacity: "1" }, 
    { id: "PoD1", capacity: "21" }, 
    { id: "PoD2", capacity: "21" }, 
    { id: "PoD3", capacity: "21" }, 
    { id: "PoD4", capacity: "21"}, 
    { id: "PoD5", capacity: "22"}, 
    { id: "PoD6", capacity: "22"},
    { id: "PoD7", capacity: "22" }, 
    { id: "PoD8", capacity: "22" }, 
    { id: "PoD9", capacity: "23"}, 
    { id: "PoD10", capacity: "23"}, 
    { id: "PoD11", capacity: "23"}
    ],
  
    links: [
      { source: "colo", target: "PoD1" },
      { source: "colo", target: "PoD2" },
      { source: "colo", target: "PoD3" },
      { source: "colo", target: "PoD4" },
      { source: "colo", target: "PoD5" },
      { source: "colo", target: "PoD6" },
      { source: "colo", target: "PoD7" },
      { source: "colo", target: "PoD8" },
      { source: "colo", target: "PoD9" },
      { source: "colo", target: "PoD10" },
      { source: "colo", target: "PoD11" }
    ],
  };

 
  
    return (    <div className="treeGraph"> <Graph
    id="graph-id" // id is mandatory
    data={data}
    config={myConfig}
    
  /> </div>
  
    );
  }