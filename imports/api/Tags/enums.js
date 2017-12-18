/*
created by: karina
created date: 11/20/17
*/

const TagEnums = { };

//enums coincide with their id's in the database
const TAG_CATEGORY_ENUMS = {
  'none': {'enum': 0, 'displayName': "None"},
  'color': {'enum': 1, 'displayName': "Color"},
  'material': {'enum': 2, 'displayName': "Material"},
  'tops': {'enum': 3, 'displayName': "Tops"},
  'bottoms': {'enum': 4, 'displayName': "Bottoms"},
  'onePieces': {'enum': 5, 'displayName': "One Pieces"},
  'outerwear': {'enum': 6, 'displayName' : "Outerwear"},
  'occasion': {'enum': 7, 'displayName': "Occasion"},
  'season': {'enum': 8, 'displayName': "Season"},
  'style': {'enum': 9, 'displayName': "Style"},
  'accessories': {'enum': 10, 'displayName': "Accessories"},
  'bags': {'enum': 11, 'displayName': "Bags"},
  'footwearHeight': {'enum': 12, 'displayName': "Footwear: Height"},
  'footwearStyle': {'enum': 13, 'displayName' : "Footwear: Style"},
  'weather': {'enum': 14, 'displayName': "Weather"},
  'designer': {'enum': 15, 'displayName': "Designer"},
  'fit': {'enum': 16, 'displayName': "Fit"}
};

TagEnums.TAG_CATEGORY_ENUMS = TAG_CATEGORY_ENUMS;


export default TagEnums;