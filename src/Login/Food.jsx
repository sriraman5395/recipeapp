import React, { useState , useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';

import axios from 'axios';
import {app , db , myCollectionRef , auth} from "./Firebase"
// import RecipeList from './RecipeList';


const Food = () => {
  const [searchTerm, setSearchTerm] = useState('');
//   const [cuisineFilter, setCuisineFilter] = useState('');
  const [recipes, setRecipes] = useState([]);




// const [favorites, setFavorites] = useState([]);

// useEffect(() => {
//     // Retrieve favorites from Firebase
//     db.myCollectionRef('favorites')
//       .doc('my-favorites')
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           setFavorites(doc.data().recipes);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving favorites:', error);
//       });
//   }, []);
  
//   const [healthLabel , setHealthLabel]

  const YOUR_APP_ID = `82e453da`;
    const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
  
    const url = `https://api.edamam.com/search?q=${searchTerm}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(url);
   

    
    setRecipes(response.data.hits.map((hit) => hit.recipe));
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

//   const handleFilterChange = (cuisine) => {
//     setCuisineFilter(cuisine);
//   };
//   const handleIngredientsClick = (recipes) => {
//     setSelectedRecipe(recipes);
//     setModalOpen(true);
//   };
  
//   const handleModalClose = () => {
//     setModalOpen(false);
//   };
  
//   const handleAddToFavorites = (recipe) => {
//     // Add recipe to favorites list
//     const updatedFavorites = [...favorites, recipe];
//     setFavorites(updatedFavorites);

//     // Save favorites list to Firebase
//     db.collection('favorites').doc('my-favorites').set({
//       recipes: updatedFavorites,
//     });
//   };

  
  return (
    <Container>
      <h1 className="text-center mb-4">Search For Your Delicious Recipes</h1>
      <Form className="mb-4" onSubmit={handleSearch}>
        <Row>
          <Col xs={10}>
            <Form.Control type="text" placeholder="Search by recipe name or ingredient" value={searchTerm} onChange={handleSearchTermChange} />
          </Col>
          <Col xs={2}>
          <div className="d-flex gap-2">
            {/* <DropdownButton id="cuisine-dropdown" title={cuisineFilter || 'Filter by cuisine'}>
              <Dropdown.Item onClick={() => handleFilterChange('')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Italian')}>Italian</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Mexican')}>Mexican</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Indian')}>Indian</Dropdown.Item>
              
            </DropdownButton> */}
            <Button variant="primary" type="submit" >Search</Button>
            </div>
          </Col>
          
        </Row>
        
      </Form>
      <Row>
        {recipes.map((recipe) => (
          <Col md={4} key={recipe.uri}>
            <Card>
              <Card.Img variant="top" src={recipe.image} />
              <Card.Body>
                <Card.Title>{recipe.label}</Card.Title>
                <Card.Text>
                  {recipe.source}
                </Card.Text>
                <Button variant="primary" href={recipe.url} target="_blank">View Recipe</Button>
                {/* <Button onClick={() => handleIngredientsClick(recipes.recipe)}>
          Ingredients
        </Button>
        <Button onClick={() => handleAddToFavorites(recipes.recipe)}>
          Favorite
        </Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
{/* 
      <h2>Favorites</h2>
      <RecipeList recipes={recipes} handleAddToFavorites={handleAddToFavorites} />
  <h2>Favorites</h2>
  <RecipeList recipes={favorites} />
    <ul>
      {favorites.map((favorite) => (
        <li key={favorite.id}>
          <h3>{favorite.label}</h3>
          <img src={favorite.image} alt={favorite.label} />
          <button onClick={() => db.myCollectionRef("favorites").doc(favorite.id).delete()}>
            Remove
          </button>
        </li>
      ))}
    </ul> */}

   
    </Container>
  );
};

export default Food;


