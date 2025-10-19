import recordsJson from '../json/records.json'
import Record from '../parts/record'
import { useOutletContext } from 'react-router-dom';

CollectionPage.route = {
  path: '/collection',
  menuLabel: 'My Collection',
  index: 3
}

export interface RecordsData {
  recordName: string,
  artist: string,
  img: string,
}

export default function CollectionPage() {
  const records: RecordsData[] = recordsJson.records;
  const { fav } = useOutletContext<any>();
  return <>
    <h1>My Collection</h1>
    <h2>Favorite Record is: {fav.favorite} </h2>
    {records
      .map((props, i) => <Record key={i} {...props} />)}
  </>
}