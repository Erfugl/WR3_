import type { RecordsData } from '../pages/collection'

export default function Record({ recordName, artist, img }: RecordsData) {
  return <section>
    <img src={img} alt="Photo of a record" />
    <h3>{recordName}</h3>
    <p>{artist}</p>
  </section>
}