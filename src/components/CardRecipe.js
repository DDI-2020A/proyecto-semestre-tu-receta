import React from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import  '../styles/Recipe.css'
import { Pagination } from 'antd';
const { Meta } = Card;

const CardRecipe = ({title,calories,image, ingredients, recipeData}) =>  {
    return (
        <div >
                    <Card  className = 'recipe' style={ {
                        width: 300,
                        display: 'inline-block',

                    } }
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={image} />}
                    >
                        <Meta title={title}
                         />
                    </Card>
        </div>

    )
}

export default CardRecipe