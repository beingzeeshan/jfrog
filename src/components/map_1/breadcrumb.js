import React from 'react';
import Typography from '@material-ui/core/Typography';
import propTypes from "prop-types";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



function handleClick() {
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb({data}) {
 

const breadcrumbs = data;




  return (
    <div>

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {
          breadcrumbs.map((breadcrumb) => {
           if(breadcrumb.link === "") {
            return <Typography color="textPrimary">{breadcrumb.name}</Typography>
            }
            return <Link color="inherit" href={breadcrumb.link} onClick={handleClick} key = "">  {breadcrumb.name}  </Link> 
          })
        }
      
      </Breadcrumbs>
    </div>
  );
}
Breadcrumb.propTypes = {
	data: propTypes.object
};

