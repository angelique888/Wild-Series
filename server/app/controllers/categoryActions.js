// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  const categoryList= (req, res) => {
    if (req.query.q != null) {
        const filteredCategorie =categories.filter((category) =>
          category.synopsis.includes(req.query.q)
        );
  
  /* Here you code */
  res.json(filteredCategorie);
} else {
  res.json(categories);
}
};
  
  // Export them to import them somewhere else

  const selectCategorie=(req, res) => {
    const parsedId = parseInt(req.params.id, 10);

    const category = categories.find((p) => p.id === parsedId);
  
    if (category != null) {
      res.json(category);
    } else {
      res.sendStatus(404);
    }
  };
  
  module.exports = { categoryList, selectCategorie};