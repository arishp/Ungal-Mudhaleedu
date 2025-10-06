import { BusinessNewsItems } from "./BusinessNewsItems";

export function BusinessNewsFeed(){
    return(
        <>
            <BusinessNewsItems/>
            <button>Refresh</button>
        </>
    );
}