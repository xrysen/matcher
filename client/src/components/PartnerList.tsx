import React from 'react';
import '../App.scss';
import '../bootstrap/vendor/bootstrap/css/bootstrap.css'
import PartnerListItem from './PartnerListItem';

function PartnerList(props: any) {
  return (
    <div className="partners">
      <h1 className="mt-5">Partners</h1>
      <ul className="list">
        {console.log(props)}
      {props.partners && props.partners.map((element: any) => {
        return <PartnerListItem select={props.select} selected={props.selected} id={element.id} name={element.name}/>
      })}
      </ul>
    </div>
  );
}

export default PartnerList