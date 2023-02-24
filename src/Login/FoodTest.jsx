const AppComponent = () => {
    const [searchQuery, updateSearchQuery] = useState("");
    const [recipeList, updateRecipeList] = useState([]);
    const [timeoutId, updateTimeoutId] = useState();
    const fetchData = async (searchString) => {
      const response = await Axios.get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      );
      updateRecipeList(response.data.hits);
    };
  
    const onTextChange = (e) => {
      clearTimeout(timeoutId);
      updateSearchQuery(e.target.value);
      const timeout = setTimeout(() => fetchData(e.target.value), 500);
      updateTimeoutId(timeout);
    };
  
    return (
      <Container>
        <Header>
          <AppName>
            <RecipeImage src="/react-recipe-finder/hamburger.svg" />
            Recipe Finder
          </AppName>
          <SearchBox>
            <SearchIcon src="/react-recipe-finder/search-icon.svg" />
            <SearchInput
              placeholder="Search Recipe"
              value={searchQuery}
              onChange={onTextChange}
            />
          </SearchBox>
        </Header>
        <RecipeListContainer>
          {recipeList?.length ? (
            recipeList.map((recipe, index) => (
              <RecipeComponent key={index} recipe={recipe.recipe} />
            ))
          ) : (
            <Placeholder src="/react-recipe-finder/hamburger.svg" />
          )}
        </RecipeListContainer>
      </Container>