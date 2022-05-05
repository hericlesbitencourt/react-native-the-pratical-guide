import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export function CategoriesScreen() {
  function renderCategoryItem(item) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
