import { BusinessNewsItem } from "./BusinessNewsItem";

export function BusinessNewsItems(){
    const businessNewsItems = [
        {item: "Business News Item 1", id:"id1"},
        {item: "Business News Item 2", id:"id2"},
    ]
    return(
        <>
        {
            businessNewsItems.map(
                (businessNewsItem) =>
                <BusinessNewsItem item={businessNewsItem.item} key={businessNewsItem.id}/>
            )
        }
        </>
    );
}