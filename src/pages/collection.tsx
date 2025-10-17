import recordsJson from '../json/records.json'
import Record from '../parts/record'

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

  return <>
    <h1>My Collection</h1>
    {records
      .map((props, i) => <Record key={i} {...props} />)}
  </>
}