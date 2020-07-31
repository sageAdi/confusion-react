import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   renderDish(dish) {
      return (
         <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
               <CardTitle>
                  <h4>{dish.name}</h4>
               </CardTitle>
               <CardText>{dish.description}</CardText>
            </CardBody>
         </Card>
      );
   }
   renderComments(comments) {
      if (comments != null) {
         const commentDetails = comments.map((commentDetail) => {
            return (
               <ul className='list-unstyled' key={commentDetail.id}>
                  <li>{commentDetail.comment}</li>
                  <li>
                     --{commentDetail.author}, {commentDetail.date}
                  </li>
               </ul>
            );
         });
         return (
            <div>
               <h4>Comments</h4>
               {commentDetails}
            </div>
         );
      } else {
         console.log('comment not found');
         return <div></div>;
      }
   }
   render() {
      const dish = this.props.dish;
      if (dish != null) {
         return (
            <div className='row'>
               <div className='col-12 col-md-5 m-1'>
                  {this.renderDish(this.props.dish)}
               </div>
               <div className='col-12 col-md-5 m-1'>
                  {this.renderComments(dish.comments)}
               </div>
            </div>
         );
      } else {
         return <div></div>;
      }
   }
}

export default DishDetail;
