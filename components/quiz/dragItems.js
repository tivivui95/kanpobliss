import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styles from '../../styles/6p.module.css';
// fake data generator
const getItems = (count) => Array.from({length: count}, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`
}));

// a little function to help us with reordering the result
const reorder =  (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 3;

const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  
  // change background colour if dragging
  background: isDragging ? '#B99173' : 'none',

  ...draggableStyle
});

const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 250
});
      
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.allItems
    }
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  
  onDragEnd (result) {
    // dropped outside the list
    if(!result.destination) {
       return; 
    }
    
    const items = reorder(
      this.state.items, 
      result.source.index, 
      result.destination.index
    );
    
    this.setState({
      items
    });
  }

  render() {
     return (
       <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div 
              ref={provided.innerRef} 
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable
                 
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className={styles.card}
                        style={getItemStyle(
                          provided.draggableProps.style,
                          snapshot.isDragging
                        )}
                      >
                        {item.content}
                      </div>
                      {provided.placeholder}
                    </div>
                   )}
                </Draggable>
               ))}
              {provided.placeholder}
            </div>
           )}
        </Droppable>
        <div className="block md:hidden">
        <button className="greenbtn-2 mt-4" onClick={() => this.props.onSub(this.state.items)}>
            Submit
        </button>
        </div>
        <div className="hidden md:block">
        <button className="greenbtn mt-4" onClick={() => this.props.onSub(this.state.items)}>
            Submit
        </button>
        </div>
        
      </DragDropContext>
      
     ); 
  }
}