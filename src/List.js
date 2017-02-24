import {Component} form 'react';
import Item from './Item';

const List = (props) => {
  return (
    <ul className="media-list">
      {props.results.map((item)=>{
        return <Item movieDetails={item}></Item>
      })}
    </ul>
  )
}
export default List;
