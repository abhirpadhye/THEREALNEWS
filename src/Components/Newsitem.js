import React, { Component } from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';


export class Newsitem extends Component {
  render() {
      let{title,description,imageUrl,newsurl,author,date}=this.props
    return (
      <div>
        <div className="card" >
        <img  src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/08/MODI-1-770x433.jpg":imageUrl} className="card-img-top" alt="..." height="250px"width="450px"/>


          <div className="card-body"   style={{background :"#303030" , padding:"10px"}}>
            <h4 className="card-title"style={{color :"white	"}}>{title}... </h4>
            <p className="card-text"style={{color :"white	"}}>
             { description}
            </p>
            <p style={{color :"white	"}} className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {date}</small></p>
            <a href={newsurl} rel="noreferrer" target="_blank"  className="btn btn-warning" style={{textAlign:"center"}}>
              Read More
            </a>
    
          </div>
        </div>
        <div>

          
        </div>
      </div>
      
    );
  }
}
// export class Newsitem extends Component {
//    render() {
//      let{title,description,imageUrl,newsurl,author,date}=this.props
// return (
//   <div>

//   <Card sx={{ maxWidth: 345 }}>
//     <CardMedia
//       component="img"
//       height="240"
//       image={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/08/MODI-1-770x433.jpg":imageUrl}
//       alt="..."
//       style={{color:"black"}}
//     />
//     <CardContent variant="outlined"   style={{color:"black"}} >
     
//       <Typography gutterBottom variant="h5" component="div"   style={{color:"black"}}>
//       {title}...
//       </Typography>
//       <Typography variant="body2" color="text.primary"   style={{color:"black"}}>
//       { description}
// </Typography>
//         <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {date}</small></p>



//     </CardContent>
//     <CardActions>
//       <a href={newsurl} rel="noreferrer" target="_blank"  className="btn btn-dark">  Read more </a> 
//     </CardActions>
//   </Card>
//   </div>

// );


//    }
//   }




export default Newsitem;
